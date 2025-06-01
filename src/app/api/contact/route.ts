import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, address, description } = data;

    // Validate the form data
    if (!name || !email || !phone || !description) {
      return NextResponse.json(
        { error: 'Name, email, phone, and description are required' },
        { status: 400 }
      );
    }

    // Format the submission timestamp
    const timestamp = new Date().toLocaleString();

    // Prepare data for Google Sheets
    const formData = {
      name,
      email,
      phone,
      address: address || 'Not provided',
      description,
      timestamp,
    };

    // Send data to Google Sheets Web App
    // Replace this URL with your actual Google Apps Script Web App URL after deployment
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL || '';
    
    if (!GOOGLE_SCRIPT_URL) {
      console.error('Google Script URL is not configured');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    try {
      // Send data to Google Sheets
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Failed to submit to Google Sheets: ${response.statusText}`);
      }

      // Log success
      console.log('Form submission sent to Google Sheets successfully');
      console.log(`Data sent: ${JSON.stringify(formData)}`);
      console.log('Google Sheets will automatically send email notifications to collan@junkbegone317.com and paul@junkbegone317.com');

    } catch (error) {
      console.error('Error sending data to Google Sheets:', error);
      // Continue processing even if Google Sheets submission fails
    }

    // Return success response to the client
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to process form submission' },
      { status: 500 }
    );
  }
}
