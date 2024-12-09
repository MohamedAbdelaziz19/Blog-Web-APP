// authOptions.ts
import { NextAuthOptions, Session, User as NextAuthUser, DefaultSession } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { JWT } from 'next-auth/jwt';
import connectToDatabase from './db';
import bcrypt from 'bcryptjs';
import UserModel from '@/src/models/User';

declare module 'next-auth' {
  // Extend the DefaultSession interface
  interface Session {
    username: DefaultSession['user'] & {
      id: string;
      role: 'Visiteur' | 'Consulter' | 'Admin' | 'SuperAdmin';
    };
  }

  // Extend the User interface
  interface User {
    id: string;
    role: 'Visiteur' | 'Consulter' | 'Admin' | 'SuperAdmin';
  }
}

type UserType = {
  _id: string;
  username: string;
  email: string;
  password?: string;
  role?: 'Visiteur' | 'Consulter' | 'Admin' | 'SuperAdmin' | null;
  
  save: () => Promise<UserType>;
};

// Type guard to ensure environment variables are defined
function getEnvVar(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

// Ensure environment variables are defined
const googleClientId: string = getEnvVar('GOOGLE_CLIENT_ID');
const googleClientSecret: string = getEnvVar('GOOGLE_CLIENT_SECRET');
const nextAuthSecret: string = getEnvVar('NEXTAUTH_SECRET');

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: googleClientId,
      clientSecret: googleClientSecret,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        if (!credentials || !credentials.email || !credentials.password) {
          console.error('Missing credentials');
          return null;
        }

        try {
          await connectToDatabase();

          const user = await UserModel.findOne({ email: credentials.email }) as UserType | null;
          if (!user) {
            console.error('No user found with this email:', credentials.email);
            return null;
          }

          const isPasswordValid = bcrypt.compareSync(credentials.password, user.password || '');
          if (!isPasswordValid) {
            console.error('Invalid password for user:', credentials.email);
            return null;
          }

          // Return the user object with role and image fields
          return {
            id: user._id.toString(),
            name: user.username,
            email: user.email,
          
            role: user.role || 'Visiteur', // Default to 'Visiteur' if no role is found
          } as NextAuthUser;
        } catch (error) {
          console.error('Error during authorization:', error);
          return null;
        }
      }
    }),
  ],
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error',
    verifyRequest: '/auth/verify-request',
    newUser: undefined, // Disable the new user page
  },
  callbacks: {
    async session({ session, token }: { session: Session; token: JWT }) {
      if (token) {
        session.user = {
          id: token.id as string,
          name: token.name as string,
          email: token.email as string,
          
          role: token.role as 'Visiteur' | 'Consulter' | 'Admin' | 'SuperAdmin',
        };
      }
      return session;
    },
    async jwt({ token, user }: { token: JWT; user?: NextAuthUser }) {
      if (user) {
        const users=await UserModel.findOne({ email: user.email as string })
        
        token.id = user.id;
        token.role = users?.role;
        
      }
      return token;
    },
    async signIn({ user }: { user: NextAuthUser }) {
      try {
        await connectToDatabase();
        const existingUser = await UserModel.findOne({ email: user.email as string }) as UserType | null;
        if (!existingUser) {
          const newUser = new UserModel({
            username: user.name!,
            role: user.role,
            email: user.email as string,
            password: undefined,
            
          }) as UserType;
          await newUser.save();
        } /* else {
          existingUser.username = user.name!;
          existingUser.role = user.role;
          await existingUser.save();
        } */
        return true;
      } catch (error) {
        console.error('Error during sign-in:', error);
        return false;
      }
    },
    async redirect({ baseUrl }: { baseUrl: string }) {
      return baseUrl;
    },
  },
  secret: nextAuthSecret,
};

