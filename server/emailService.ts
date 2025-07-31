import nodemailer from 'nodemailer';

export interface EmailData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  source?: string;
}

export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    // Configure the email transporter
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  async sendContactFormEmail(data: EmailData): Promise<boolean> {
    try {
      // Email to info@asterik.ae
      const mailOptions = {
        from: process.env.SMTP_USER || 'noreply@asterik.ae',
        to: 'info@asterik.ae',
        subject: `New Contact Form Submission from ${data.name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background-color: #1d1d1d; color: white; padding: 20px; text-align: center;">
              <h1 style="margin: 0; font-size: 24px;">ASTERIK</h1>
              <p style="margin: 10px 0 0 0; color: #e26a2c;">New Contact Form Submission</p>
            </div>
            
            <div style="padding: 30px; background-color: #f8f9fa;">
              <h2 style="color: #1d1d1d; margin-bottom: 20px;">Contact Details</h2>
              
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #ddd; font-weight: bold; width: 30%;">Name:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #ddd;">${data.name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #ddd; font-weight: bold;">Email:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #ddd;">${data.email}</td>
                </tr>
                ${data.company ? `
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #ddd; font-weight: bold;">Company:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #ddd;">${data.company}</td>
                </tr>
                ` : ''}
                ${data.phone ? `
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #ddd; font-weight: bold;">Phone:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #ddd;">${data.phone}</td>
                </tr>
                ` : ''}
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #ddd; font-weight: bold;">Source:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #ddd;">${data.source || 'Contact Form'}</td>
                </tr>
              </table>
              
              <h3 style="color: #1d1d1d; margin: 30px 0 15px 0;">Message:</h3>
              <div style="background-color: white; padding: 20px; border-radius: 8px; border-left: 4px solid #e26a2c;">
                ${data.message.replace(/\n/g, '<br>')}
              </div>
              
              <div style="margin-top: 30px; padding: 20px; background-color: #1d1d1d; border-radius: 8px; text-align: center;">
                <p style="color: white; margin: 0;">
                  <strong>Submitted:</strong> ${new Date().toLocaleString('en-US', { 
                    timeZone: 'Asia/Dubai',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    timeZoneName: 'short'
                  })}
                </p>
              </div>
            </div>
            
            <div style="background-color: #1d1d1d; color: #999; padding: 20px; text-align: center; font-size: 12px;">
              <p style="margin: 0;">This email was automatically generated from the ASTERIK website contact form.</p>
            </div>
          </div>
        `,
      };

      await this.transporter.sendMail(mailOptions);
      console.log('Contact form email sent successfully to info@asterik.ae');
      return true;
    } catch (error) {
      console.error('Failed to send contact form email:', error);
      return false;
    }
  }

  async sendAutoReply(data: EmailData): Promise<boolean> {
    try {
      // Auto-reply to the person who submitted the form
      const autoReplyOptions = {
        from: process.env.SMTP_USER || 'noreply@asterik.ae',
        to: data.email,
        subject: 'Thank you for contacting ASTERIK - We\'ll be in touch soon',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background-color: #1d1d1d; color: white; padding: 20px; text-align: center;">
              <h1 style="margin: 0; font-size: 24px;">ASTERIK</h1>
              <p style="margin: 10px 0 0 0; color: #e26a2c;">Strategic Technology Solutions</p>
            </div>
            
            <div style="padding: 30px; background-color: #f8f9fa;">
              <h2 style="color: #1d1d1d; margin-bottom: 20px;">Thank you for reaching out!</h2>
              
              <p style="font-size: 16px; line-height: 1.6; color: #333;">
                Dear ${data.name},
              </p>
              
              <p style="font-size: 16px; line-height: 1.6; color: #333;">
                We have received your message and appreciate your interest in ASTERIK's technology solutions. 
                Our team will review your inquiry and respond within 24 hours during business days.
              </p>
              
              <div style="background-color: white; padding: 20px; border-radius: 8px; border-left: 4px solid #e26a2c; margin: 20px 0;">
                <h3 style="color: #1d1d1d; margin-top: 0;">Your message:</h3>
                <p style="color: #666; margin-bottom: 0;">${data.message.replace(/\n/g, '<br>')}</p>
              </div>
              
              <p style="font-size: 16px; line-height: 1.6; color: #333;">
                In the meantime, feel free to explore our <a href="https://asterik.ae/services" style="color: #e26a2c;">services</a> 
                and learn more about how we help organizations transform their technology capabilities.
              </p>
              
              <div style="margin: 30px 0; padding: 20px; background-color: #1d1d1d; border-radius: 8px; text-align: center;">
                <p style="color: white; margin: 0 0 10px 0; font-weight: bold;">Contact Information</p>
                <p style="color: #e26a2c; margin: 5px 0;">📧 info@asterik.ae</p>
                <p style="color: #e26a2c; margin: 5px 0;">📍 Dubai, UAE</p>
                <p style="color: #e26a2c; margin: 5px 0;">🕒 Sunday-Thursday: 8AM-6PM GST</p>
              </div>
              
              <p style="font-size: 16px; line-height: 1.6; color: #333;">
                Best regards,<br>
                <strong>The ASTERIK Team</strong>
              </p>
            </div>
            
            <div style="background-color: #1d1d1d; color: #999; padding: 20px; text-align: center; font-size: 12px;">
              <p style="margin: 0;">
                © 2024 ASTERIK. All rights reserved.<br>
                This is an automated response. Please do not reply to this email.
              </p>
            </div>
          </div>
        `,
      };

      await this.transporter.sendMail(autoReplyOptions);
      console.log('Auto-reply email sent successfully to:', data.email);
      return true;
    } catch (error) {
      console.error('Failed to send auto-reply email:', error);
      return false;
    }
  }
}

export const emailService = new EmailService();