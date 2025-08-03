import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { storage } from './storage';

const JWT_SECRET = process.env.JWT_SECRET || 'asterik-admin-secret-key';
const SALT_ROUNDS = 12;

export interface AuthenticatedRequest extends Request {
  adminUser?: {
    id: number;
    email: string;
    name: string;
    role: string;
  };
}

export async function hashPassword(password: string): Promise<string> {
  return await bcrypt.hash(password, SALT_ROUNDS);
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return await bcrypt.compare(password, hash);
}

export function generateToken(adminUser: { id: number; email: string; name: string; role: string }): string {
  return jwt.sign(
    { 
      id: adminUser.id, 
      email: adminUser.email, 
      name: adminUser.name, 
      role: adminUser.role 
    },
    JWT_SECRET,
    { expiresIn: '24h' }
  );
}

export function verifyToken(token: string): any {
  try {
    console.log('Verifying token:', token.substring(0, 50) + '...');
    console.log('JWT_SECRET:', JWT_SECRET);
    const decoded = jwt.verify(token, JWT_SECRET);
    console.log('Token verified successfully:', decoded);
    return decoded;
  } catch (error) {
    console.log('Token verification failed:', error);
    return null;
  }
}

export async function authenticateAdmin(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const token = authHeader.substring(7);
    const decoded = verifyToken(token);
    
    if (!decoded) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    const adminUsers = await storage.getAdminUsers();
    const adminUser = adminUsers.find(user => user.id === decoded.id);
    if (!adminUser || !adminUser.isActive) {
      return res.status(401).json({ message: 'Admin user not found or inactive' });
    }

    req.adminUser = {
      id: adminUser.id,
      email: adminUser.email,
      name: adminUser.name,
      role: adminUser.role
    };

    next();
  } catch (error) {
    res.status(401).json({ message: 'Authentication failed' });
  }
}

export function requireRole(role: string) {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    if (!req.adminUser) {
      return res.status(401).json({ message: 'Not authenticated' });
    }

    if (req.adminUser.role !== role && req.adminUser.role !== 'super_admin') {
      return res.status(403).json({ message: 'Insufficient permissions' });
    }

    next();
  };
}