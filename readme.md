# ASTERIK Enterprise Website - Technical Knowledgebase

## Table of Contents
1. [System Requirements](#system-requirements)
2. [Hosting Requirements](#hosting-requirements)
3. [Installation Manual](#installation-manual)
4. [Configuration Setup](#configuration-setup)
5. [Database Setup](#database-setup)
6. [Environment Variables](#environment-variables)
7. [Deployment Options](#deployment-options)
8. [Debugging Guide](#debugging-guide)
9. [Troubleshooting](#troubleshooting)
10. [Performance Optimization](#performance-optimization)
11. [Security Considerations](#security-considerations)
12. [Maintenance Tasks](#maintenance-tasks)

---

## System Requirements

### Minimum Requirements
- **Node.js**: Version 18.x or higher
- **npm**: Version 8.x or higher (comes with Node.js)
- **RAM**: 2GB minimum, 4GB recommended
- **Storage**: 1GB available space
- **OS**: Linux, macOS, or Windows

### Recommended Requirements
- **Node.js**: Version 20.x LTS
- **RAM**: 8GB or higher
- **Storage**: 5GB available space
- **CPU**: 2+ cores

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

## Hosting Requirements

### Server Specifications
- **Minimum**: 1 vCPU, 2GB RAM, 20GB SSD
- **Recommended**: 2 vCPU, 4GB RAM, 40GB SSD
- **Production**: 4 vCPU, 8GB RAM, 100GB SSD

### Platform Compatibility
- **Cloud Providers**: AWS, Google Cloud, Azure, DigitalOcean
- **Hosting Services**: Vercel, Netlify, Heroku, Railway
- **Self-Hosted**: Any VPS or dedicated server

### Database Requirements
- **PostgreSQL**: Version 13+ (recommended 15+)
- **Neon Serverless**: Supported (recommended for serverless deployments)
- **Connection Pool**: Minimum 10 connections

### Network Requirements
- **HTTPS**: SSL/TLS certificate required
- **Ports**: 
  - Port 5000 (default, configurable)
  - Port 443 (HTTPS)
  - Database port (5432 for PostgreSQL)

---

## Installation Manual

### Step 1: Prerequisites Installation

```bash
# Install Node.js (Ubuntu/Debian)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify installation
node --version
npm --version
```

### Step 2: Project Setup

```bash
# Clone or extract project files
# Navigate to project directory
cd asterik-website

# Install dependencies
npm install

# Verify installation
npm list --depth=0
```

### Step 3: Database Setup

#### Option A: Neon Serverless (Recommended)
1. Create account at [neon.tech](https://neon.tech)
2. Create new database
3. Copy connection string
4. Set DATABASE_URL environment variable

#### Option B: Local PostgreSQL
```bash
# Install PostgreSQL (Ubuntu/Debian)
sudo apt-get install postgresql postgresql-contrib

# Create database and user
sudo -u postgres psql
CREATE DATABASE asterik_db;
CREATE USER asterik_user WITH ENCRYPTED PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE asterik_db TO asterik_user;
\q
```

### Step 4: Environment Configuration

```bash
# Create environment file
cp .env.example .env

# Edit environment variables
nano .env
```

Required environment variables:
```env
DATABASE_URL=postgresql://username:password@host:port/database
GEMINI_API_KEY=your_gemini_api_key
SESSION_SECRET=your_session_secret_key
NODE_ENV=production
```

### Step 5: Database Migration

```bash
# Push database schema
npm run db:push

# Verify database tables
npm run db:studio
```

### Step 6: Build and Start

```bash
# Build production version
npm run build

# Start production server
npm start
```

---

## Configuration Setup

### Environment Files
- `.env` - Production environment variables
- `.env.local` - Local development overrides
- `.env.development` - Development-specific variables

### Configuration Files
- `package.json` - Dependencies and scripts
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.ts` - Styling configuration
- `vite.config.ts` - Build tool configuration
- `drizzle.config.ts` - Database configuration

### Port Configuration
```javascript
// Default port: 5000
// Override with environment variable
PORT=8080 npm start
```

### CORS Configuration
```javascript
// server/index.ts
app.use(cors({
  origin: ['https://yourdomain.com'],
  credentials: true
}));
```

---

## Database Setup

### Schema Structure
```sql
-- Core tables
users, sessions, admin_users, contacts, 
email_campaigns, content_management, system_logs,
analytics_events, dashboard_widgets, user_dashboards,
widget_instances, page_builder_pages, page_components,
integrations
```

### Migration Commands
```bash
# Generate migration
npm run db:generate

# Apply migrations
npm run db:push

# Reset database (development only)
npm run db:reset
```

### Backup and Restore
```bash
# Backup database
pg_dump $DATABASE_URL > backup.sql

# Restore database
psql $DATABASE_URL < backup.sql
```

---

## Environment Variables

### Required Variables
```env
DATABASE_URL=postgresql://user:pass@host:port/db
GEMINI_API_KEY=your_gemini_api_key
SESSION_SECRET=random_secure_string_min_32_chars
```

### Optional Variables
```env
NODE_ENV=production
PORT=5000
CORS_ORIGIN=https://yourdomain.com
LOG_LEVEL=info
RATE_LIMIT_WINDOW=900000
RATE_LIMIT_MAX=100
```

### Security Variables
```env
# Session configuration
SESSION_SECRET=super_secure_random_string_min_32_characters
SESSION_MAX_AGE=604800000  # 7 days in milliseconds

# CORS configuration
CORS_ORIGIN=https://yourdomain.com,https://www.yourdomain.com
```

---

## Deployment Options

### Option 1: Traditional VPS Deployment

```bash
# Install PM2 for process management
npm install -g pm2

# Create PM2 ecosystem file
cat > ecosystem.config.js << EOF
module.exports = {
  apps: [{
    name: 'asterik-website',
    script: 'dist/index.js',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 5000
    }
  }]
}
EOF

# Deploy with PM2
npm run build
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

### Option 2: Docker Deployment

```dockerfile
# Dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 5000
CMD ["npm", "start"]
```

```yaml
# docker-compose.yml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "5000:5000"
    environment:
      - DATABASE_URL=${DATABASE_URL}
      - GEMINI_API_KEY=${GEMINI_API_KEY}
      - SESSION_SECRET=${SESSION_SECRET}
    restart: unless-stopped
```

### Option 3: Vercel Deployment

```json
// vercel.json
{
  "version": 2,
  "builds": [
    {
      "src": "server/index.ts",
      "use": "@vercel/node"
    },
    {
      "src": "client/**/*",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/server/index.ts"
    },
    {
      "src": "/(.*)",
      "dest": "/client/$1"
    }
  ]
}
```

---

## Debugging Guide

### Log Levels
```javascript
// Set log level
LOG_LEVEL=debug npm run dev

// Available levels: error, warn, info, debug
```

### Debug Mode
```bash
# Start with debug information
DEBUG=* npm run dev

# Debug specific modules
DEBUG=express:* npm run dev
```

### Database Debugging
```bash
# Enable query logging
DATABASE_LOG=true npm run dev

# Use database studio
npm run db:studio
```

### Frontend Debugging
```javascript
// Enable React DevTools
// Available in development mode

// Check console for errors
console.log('Debug info:', data);

// Network tab for API calls
// Sources tab for breakpoints
```

### API Debugging
```bash
# Test API endpoints
curl -X GET http://localhost:5000/api/health
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com"}'
```

---

## Troubleshooting

### Common Issues

#### 1. Port Already in Use
```bash
# Find process using port
lsof -i :5000
netstat -tulpn | grep :5000

# Kill process
kill -9 <PID>

# Use different port
PORT=3001 npm run dev
```

#### 2. Database Connection Failed
```bash
# Check database URL format
echo $DATABASE_URL

# Test database connection
npx drizzle-kit introspect:pg

# Verify database exists
psql $DATABASE_URL -c "SELECT version();"
```

#### 3. Build Failures
```bash
# Clear node modules
rm -rf node_modules package-lock.json
npm install

# Clear build cache
rm -rf dist .vite

# Update dependencies
npm update
```

#### 4. Memory Issues
```bash
# Increase Node.js memory limit
NODE_OPTIONS="--max-old-space-size=4096" npm run build

# Monitor memory usage
top -p $(pgrep node)
```

#### 5. SSL/HTTPS Issues
```bash
# Generate self-signed certificate (development)
openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365 -nodes

# Configure HTTPS in production
# Use Let's Encrypt or CloudFlare
```

### Error Codes Reference

#### HTTP Status Codes
- **400**: Bad Request - Invalid input data
- **401**: Unauthorized - Missing or invalid authentication
- **403**: Forbidden - Insufficient permissions
- **404**: Not Found - Resource doesn't exist
- **429**: Too Many Requests - Rate limit exceeded
- **500**: Internal Server Error - Application error
- **502**: Bad Gateway - Upstream server error
- **503**: Service Unavailable - Server overloaded

#### Database Error Codes
- **23505**: Unique constraint violation
- **23503**: Foreign key constraint violation
- **42P01**: Table doesn't exist
- **42703**: Column doesn't exist
- **08006**: Connection failure

### Performance Issues

#### Slow Database Queries
```sql
-- Enable query analysis
EXPLAIN ANALYZE SELECT * FROM table_name WHERE condition;

-- Add indexes
CREATE INDEX idx_name ON table_name (column_name);

-- Monitor slow queries
SELECT query, mean_time, calls FROM pg_stat_statements 
ORDER BY mean_time DESC LIMIT 10;
```

#### High Memory Usage
```bash
# Monitor Node.js memory
node --inspect server/index.ts

# Use heap snapshots
node --heap-prof server/index.ts

# Optimize garbage collection
node --gc-interval=100 server/index.ts
```

#### Slow Frontend Loading
```javascript
// Enable performance monitoring
const observer = new PerformanceObserver((list) => {
  console.log(list.getEntries());
});
observer.observe({ entryTypes: ['measure', 'navigation'] });

// Optimize bundle size
npm run build -- --analyze
```

---

## Performance Optimization

### Database Optimization
```sql
-- Add appropriate indexes
CREATE INDEX CONCURRENTLY idx_users_email ON users (email);
CREATE INDEX CONCURRENTLY idx_contacts_created_at ON contacts (created_at);

-- Analyze table statistics
ANALYZE users;
ANALYZE contacts;

-- Vacuum regularly
VACUUM ANALYZE;
```

### Connection Pooling
```javascript
// Configure connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  min: 5,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});
```

### Caching Strategy
```javascript
// Redis caching (optional)
const redis = require('redis');
const client = redis.createClient();

// Cache frequently accessed data
app.get('/api/cache-example', async (req, res) => {
  const cached = await client.get('cache-key');
  if (cached) return res.json(JSON.parse(cached));
  
  const data = await fetchData();
  await client.setex('cache-key', 300, JSON.stringify(data));
  res.json(data);
});
```

### Frontend Optimization
```javascript
// Code splitting
const LazyComponent = lazy(() => import('./HeavyComponent'));

// Image optimization
<img loading="lazy" src="image.jpg" alt="Description" />

// Bundle optimization
// Already configured in vite.config.ts
```

---

## Security Considerations

### Environment Security
```bash
# Secure file permissions
chmod 600 .env
chown root:root .env

# Use secrets management
# AWS Secrets Manager, Azure Key Vault, etc.
```

### Database Security
```sql
-- Create limited user
CREATE USER app_user WITH PASSWORD 'secure_password';
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO app_user;

-- Revoke dangerous permissions
REVOKE CREATE ON SCHEMA public FROM app_user;
```

### Application Security
```javascript
// Rate limiting
const rateLimit = require('express-rate-limit');
app.use(rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
}));

// Helmet for security headers
const helmet = require('helmet');
app.use(helmet());

// Input validation
const { body, validationResult } = require('express-validator');
app.post('/api/contact', [
  body('email').isEmail(),
  body('name').isLength({ min: 2 })
], handler);
```

### SSL/TLS Configuration
```nginx
# Nginx configuration
server {
    listen 443 ssl http2;
    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384;
}
```

---

## Maintenance Tasks

### Daily Tasks
```bash
# Check application health
curl http://localhost:5000/health

# Monitor logs
tail -f logs/application.log

# Check disk space
df -h
```

### Weekly Tasks
```bash
# Update dependencies (check for security updates)
npm audit
npm update

# Database maintenance
psql $DATABASE_URL -c "VACUUM ANALYZE;"

# Backup database
pg_dump $DATABASE_URL > backups/backup-$(date +%Y%m%d).sql
```

### Monthly Tasks
```bash
# Clean old logs
find logs/ -name "*.log" -mtime +30 -delete

# Update SSL certificates (if not automated)
certbot renew

# Performance review
npm run build -- --analyze
```

### Monitoring Setup
```bash
# Install monitoring tools
npm install -g clinic
npm install -g autocannon

# Performance testing
clinic doctor -- node server/index.ts
autocannon -c 10 -d 5 -p 10 http://localhost:5000

# Memory profiling
clinic heapprofiler -- node server/index.ts
```

---

## Support and Documentation

### Log Files Location
- Application logs: `logs/application.log`
- Error logs: `logs/error.log`
- Access logs: `logs/access.log`

### Configuration Files
- Main config: `server/index.ts`
- Database config: `drizzle.config.ts`
- Build config: `vite.config.ts`

### Health Check Endpoint
```bash
# Application health
GET /health
Response: {"status": "ok", "timestamp": "2024-01-01T00:00:00.000Z"}

# Database health
GET /health/db
Response: {"status": "connected", "version": "15.1"}
```

### Emergency Procedures
1. **Application Down**: Check logs, restart PM2 process
2. **Database Issues**: Check connection, run health checks
3. **High Load**: Scale horizontally, check for bottlenecks
4. **Security Incident**: Review logs, update credentials, patch vulnerabilities

---

*Last Updated: January 2025*
*Version: 1.0.0*
