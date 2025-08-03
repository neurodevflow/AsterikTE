# ASTERIK API Documentation

## Overview
The ASTERIK API provides secure endpoints for the enterprise website, supporting contact management, admin authentication, analytics, and content management.

**Base URL**: `https://asterik.ae/api`  
**Authentication**: JWT Bearer tokens for admin endpoints  
**Content-Type**: `application/json`

## Security
- All requests must use HTTPS in production
- Admin endpoints require valid JWT token in Authorization header
- CORS restricted to trusted domains only
- Comprehensive input validation on all endpoints
- Rate limiting applied to prevent abuse

## Error Handling
All API responses follow a consistent error format:

```json
{
  "error": "Error message",
  "code": "ERROR_CODE",
  "details": {} // Optional additional details
}
```

### Common Error Codes
- `VALIDATION_ERROR`: Input validation failed
- `AUTHENTICATION_ERROR`: Invalid or missing authentication
- `AUTHORIZATION_ERROR`: Insufficient permissions
- `NOT_FOUND`: Resource not found
- `RATE_LIMIT_EXCEEDED`: Too many requests
- `INTERNAL_ERROR`: Server error

## Public Endpoints

### Health Check
**GET** `/api/health`

Check API server status.

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2025-08-03T21:55:00.000Z"
}
```

### Contact Form Submission
**POST** `/api/contact`

Submit contact form with comprehensive validation.

**Request Body:**
```json
{
  "name": "John Doe",           // Required: 2-100 chars, letters/spaces only
  "email": "john@company.com",  // Required: Valid email, max 255 chars
  "company": "Acme Corp",       // Optional: Max 200 chars
  "phone": "+1-555-123-4567",   // Optional: Valid phone format
  "subject": "Inquiry",         // Optional: Max 300 chars
  "message": "Hello..."         // Required: 10-5000 chars
}
```

**Security Features:**
- XSS/SQL injection pattern detection
- Input sanitization and validation
- Rate limiting by IP address
- Suspicious content blocking

**Response:**
```json
{
  "success": true,
  "id": 123
}
```

## Admin Endpoints
All admin endpoints require `Authorization: Bearer <jwt_token>` header.

### Authentication

#### Admin Login
**POST** `/api/admin/auth/login`

Authenticate admin user and receive JWT token.

**Request Body:**
```json
{
  "email": "admin@asterik.ae",
  "password": "securepassword"
}
```

**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "email": "admin@asterik.ae",
    "name": "Admin User",
    "role": "admin"
  }
}
```

### Dashboard Analytics

#### Get Dashboard Statistics
**GET** `/api/admin/dashboard/stats`

Retrieve comprehensive dashboard statistics.

**Response:**
```json
{
  "totalPageViews": 1250,
  "totalContacts": 45,
  "totalSessions": 892,
  "topPages": [
    { "path": "/", "count": 450 },
    { "path": "/services", "count": 200 }
  ],
  "deviceStats": [
    { "device": "desktop", "count": 650 },
    { "device": "mobile", "count": 400 }
  ],
  "countryStats": [
    { "country": "UAE", "count": 300 },
    { "country": "US", "count": 150 }
  ]
}
```

### Contact Management

#### Get Contact Submissions
**GET** `/api/admin/contacts?page=1&limit=20`

Retrieve paginated contact submissions.

**Query Parameters:**
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 20, max: 100)

**Response:**
```json
{
  "contacts": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@company.com",
      "company": "Acme Corp",
      "subject": "Partnership",
      "message": "We're interested...",
      "status": "new",
      "createdAt": "2025-08-03T21:00:00.000Z"
    }
  ],
  "pagination": {
    "total": 45,
    "page": 1,
    "pages": 3,
    "limit": 20
  }
}
```

#### Update Contact Status
**PUT** `/api/admin/contacts/:id`

Update contact submission status.

**Request Body:**
```json
{
  "status": "contacted" // new, contacted, qualified, closed
}
```

### Email Campaigns

#### Get Campaigns
**GET** `/api/admin/campaigns`

Retrieve all email campaigns.

**Response:**
```json
{
  "campaigns": [
    {
      "id": 1,
      "name": "Monthly Newsletter",
      "subject": "Latest Industry Updates",
      "status": "sent",
      "recipientCount": 450,
      "sentAt": "2025-08-01T10:00:00.000Z"
    }
  ]
}
```

#### Create Campaign
**POST** `/api/admin/campaigns`

Create new email campaign.

**Request Body:**
```json
{
  "name": "Campaign Name",
  "subject": "Email Subject",
  "content": "HTML email content",
  "scheduledAt": "2025-08-04T10:00:00.000Z" // Optional
}
```

### Content Management

#### Get Content Blocks
**GET** `/api/admin/content?page=home`

Retrieve content blocks for specific page.

**Response:**
```json
{
  "blocks": [
    {
      "id": 1,
      "key": "hero_title",
      "title": "Hero Section Title",
      "content": "Strategic Technology Solutions",
      "type": "text",
      "page": "home"
    }
  ]
}
```

#### Update Content Block
**PUT** `/api/admin/content/:id`

Update specific content block.

**Request Body:**
```json
{
  "title": "Updated Title",
  "content": "Updated content"
}
```

## Rate Limiting
- Public endpoints: 100 requests per minute per IP
- Admin endpoints: 1000 requests per minute per token
- Contact form: 5 submissions per hour per IP

## Security Headers
All responses include comprehensive security headers:
- `Content-Security-Policy`: Prevents XSS attacks
- `X-Content-Type-Options`: Prevents MIME sniffing
- `X-Frame-Options`: Prevents clickjacking
- `Strict-Transport-Security`: Enforces HTTPS
- `Referrer-Policy`: Controls referrer information

## Request/Response Examples

### Contact Form with Validation Error
**Request:**
```bash
curl -X POST https://asterik.ae/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "J",
    "email": "invalid-email",
    "message": "Hi"
  }'
```

**Response (400):**
```json
{
  "error": "Validation failed",
  "code": "VALIDATION_ERROR",
  "details": [
    {
      "field": "name",
      "message": "String must contain at least 2 character(s)"
    },
    {
      "field": "email",
      "message": "Invalid email"
    },
    {
      "field": "message",
      "message": "String must contain at least 10 character(s)"
    }
  ]
}
```

### Admin Authentication
**Request:**
```bash
curl -X POST https://asterik.ae/api/admin/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@asterik.ae",
    "password": "securepassword"
  }'
```

**Response (200):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBhc3Rlcmls...",
  "user": {
    "id": 1,
    "email": "admin@asterik.ae",
    "name": "Admin User",
    "role": "admin"
  }
}
```

### Accessing Protected Endpoint
**Request:**
```bash
curl -X GET https://asterik.ae/api/admin/dashboard/stats \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
```

## Development Notes
- Environment variable `JWT_SECRET` required for token signing
- Database connection via `DATABASE_URL` environment variable
- All timestamps in ISO 8601 format (UTC)
- File uploads not currently supported
- WebSocket connections not implemented

## Support
For API support or questions, contact the development team or refer to the main project documentation.

---
**Last Updated**: August 3, 2025  
**API Version**: 1.0  
**Documentation Version**: 1.0