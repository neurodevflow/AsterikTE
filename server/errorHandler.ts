import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';

export interface ApiError extends Error {
  statusCode?: number;
  code?: string;
}

export class ValidationError extends Error {
  statusCode = 400;
  code = 'VALIDATION_ERROR';
  
  constructor(message: string, public details?: any) {
    super(message);
    this.name = 'ValidationError';
  }
}

export class AuthenticationError extends Error {
  statusCode = 401;
  code = 'AUTHENTICATION_ERROR';
  
  constructor(message: string = 'Authentication required') {
    super(message);
    this.name = 'AuthenticationError';
  }
}

export class AuthorizationError extends Error {
  statusCode = 403;
  code = 'AUTHORIZATION_ERROR';
  
  constructor(message: string = 'Insufficient permissions') {
    super(message);
    this.name = 'AuthorizationError';
  }
}

export class NotFoundError extends Error {
  statusCode = 404;
  code = 'NOT_FOUND';
  
  constructor(message: string = 'Resource not found') {
    super(message);
    this.name = 'NotFoundError';
  }
}

export class RateLimitError extends Error {
  statusCode = 429;
  code = 'RATE_LIMIT_EXCEEDED';
  
  constructor(message: string = 'Rate limit exceeded') {
    super(message);
    this.name = 'RateLimitError';
  }
}

export function errorHandler(err: ApiError, req: Request, res: Response, next: NextFunction) {
  // Log error for monitoring (without sensitive data)
  const errorLog = {
    name: err.name,
    message: err.message,
    code: err.code,
    statusCode: err.statusCode,
    path: req.path,
    method: req.method,
    timestamp: new Date().toISOString(),
    ip: req.ip
  };
  
  console.error('API Error:', errorLog);
  
  // Handle specific error types
  if (err instanceof ZodError) {
    return res.status(400).json({
      error: 'Validation Error',
      code: 'VALIDATION_ERROR',
      details: err.errors.map(e => ({
        field: e.path.join('.'),
        message: e.message
      }))
    });
  }
  
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json({
      error: err.message,
      code: err.code,
      details: err.details
    });
  }
  
  if (err instanceof AuthenticationError || err instanceof AuthorizationError) {
    return res.status(err.statusCode).json({
      error: err.message,
      code: err.code
    });
  }
  
  if (err instanceof NotFoundError) {
    return res.status(err.statusCode).json({
      error: err.message,
      code: err.code
    });
  }
  
  if (err instanceof RateLimitError) {
    return res.status(err.statusCode).json({
      error: err.message,
      code: err.code,
      retryAfter: 60 // seconds
    });
  }
  
  // Default error response (don't expose internal errors)
  const statusCode = err.statusCode || 500;
  const message = statusCode === 500 ? 'Internal Server Error' : err.message;
  
  res.status(statusCode).json({
    error: message,
    code: err.code || 'INTERNAL_ERROR'
  });
}

export function asyncHandler(fn: Function) {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}

export function notFoundHandler(req: Request, res: Response) {
  res.status(404).json({
    error: 'Endpoint not found',
    code: 'NOT_FOUND',
    path: req.path
  });
}