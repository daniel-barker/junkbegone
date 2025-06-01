import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, phone, address, description } = data;

    // Validate the form data
    if (!name || !phone || !description) {
      return NextResponse.json(
        { error: 'Name, phone, and description are required' },
        { status: 400 }
      );
    }

    // Format the email content
    const emailContent = `
      New Contact Form Submission:
      
      Name: ${name}
      Phone: ${phone}
      Address: ${address || 'Not provided'}
      Description: ${description}
      
      Submitted on: ${new Date().toLocaleString()}
    `;

    // In a production environment, you would use a service like SendGrid, AWS SES, or Nodemailer
    // to send emails to both recipients
    const recipients = ['collan@junkbegone317.com', 'paul@junkbegone317.com'];
    
    // Log the submission details
    console.log('Form submission received:');
    console.log(`Recipients: ${recipients.join(', ')}`);
    console.log(emailContent);
    
    // In a production environment, this is where you would send the actual emails
    // Example with a hypothetical email service:
    // 
    // await sendEmail({
    //   to: recipients,
    //   subject: 'New Contact Form Submission - Junk Be Gone LLC',
    //   text: emailContent,
    // });

    // Return success response
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to process form submission' },
      { status: 500 }
    );
  }
}
