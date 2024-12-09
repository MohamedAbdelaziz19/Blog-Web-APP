//src/app/api/sign-image
import { v2 as cloudinary } from 'cloudinary';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { paramsToSign } = body;

    // Ensure the API secret is correctly defined
    const apiSecret = process.env.CLOUDINARY_API_SECRET;
    if (!apiSecret) {
      return new Response(JSON.stringify({ error: 'API secret not defined' }), { status: 500 });
    }

    // Generate the signature
    const signature = cloudinary.utils.api_sign_request(paramsToSign, apiSecret);
    return new Response(JSON.stringify({ signature }), { status: 200 });
  } catch (error) {
    console.error('Error generating signature:', error);
    return new Response(JSON.stringify({ error: 'Failed to generate signature' }), { status: 500 });
  }
}
