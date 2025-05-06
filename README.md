# Clenlinks Global Website

## EmailJS Setup

To enable the contact form functionality, you need to set up EmailJS:

1. Sign up for a free account at [EmailJS](https://www.emailjs.com/)
2. Create an Email Service (Gmail, Outlook, etc.)
3. Create an Email Template with the following variables:
   - `user_name`: Sender's full name
   - `user_email`: Sender's email address
   - `phone_number`: Sender's phone number
   - `service`: Selected service
   - `message`: Message content

4. Create a `.env` file in the root directory with the following variables:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

   Replace the placeholder values with your actual EmailJS credentials from your dashboard.

## Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Environment Variables

The following environment variables are required:

- `VITE_EMAILJS_SERVICE_ID`: Your EmailJS service ID
- `VITE_EMAILJS_TEMPLATE_ID`: Your EmailJS template ID
- `VITE_EMAILJS_PUBLIC_KEY`: Your EmailJS public key

Make sure to add these variables to your production environment as well. 