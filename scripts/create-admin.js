import bcrypt from 'bcrypt';
import { Pool, neonConfig } from '@neondatabase/serverless';
import ws from 'ws';

// Configure neon
neonConfig.webSocketConstructor = ws;

async function createInitialAdmin() {
  if (!process.env.DATABASE_URL) {
    console.error('DATABASE_URL environment variable is required');
    process.exit(1);
  }

  const pool = new Pool({ connectionString: process.env.DATABASE_URL });

  try {
    // Create initial admin user
    const email = 'admin@asterik.ae';
    const password = 'admin123';
    const name = 'Asterik Administrator';
    const role = 'super_admin';

    const passwordHash = await bcrypt.hash(password, 12);

    const result = await pool.query(`
      INSERT INTO admin_users (email, password_hash, name, role, is_active, created_at, updated_at)
      VALUES ($1, $2, $3, $4, true, NOW(), NOW())
      ON CONFLICT (email) DO UPDATE SET
        password_hash = EXCLUDED.password_hash,
        updated_at = NOW()
      RETURNING id, email, name, role
    `, [email, passwordHash, name, role]);

    console.log('✅ Initial admin user created successfully:');
    console.log(`📧 Email: ${email}`);
    console.log(`🔐 Password: ${password}`);
    console.log(`👤 Name: ${name}`);
    console.log(`🛡️ Role: ${role}`);
    console.log('\n🔗 Access the admin dashboard at: /admin/login');
    console.log('\n⚠️  Please change the default password after first login!');

  } catch (error) {
    console.error('❌ Error creating admin user:', error.message);
  } finally {
    await pool.end();
  }
}

createInitialAdmin();