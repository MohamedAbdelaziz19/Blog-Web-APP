import jwt, { JwtPayload, SignOptions } from 'jsonwebtoken';

interface TokenPayload {
  _id: string;
  [key: string]: any;
}

export function signJwtToken(payload: TokenPayload, options: SignOptions = {}): string {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error('JWT_SECRET is not defined');
  }
  return jwt.sign(payload, secret, options);
}

export function verifyJwtToken(token: string): JwtPayload | null {
  try {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new Error('JWT_SECRET is not defined');
    }
    return jwt.verify(token, secret) as JwtPayload;
  } catch (error) {
    console.error('JWT verification error:', error);
    return null;
  }
}
