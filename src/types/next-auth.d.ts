import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user?: {
      id?: string;        // Make optional if it might not be present
      name?: string;      // Make optional if it might not be present
      email?: string;     // Make optional if it might not be present
      role?: 'SuperAdmin' | 'Admin' | 'Consulter' | 'Visiteur'; // Make optional if it might not be present
    };
  }

  interface User {
    id: string;
    name: string;
    email: string;
    role: 'SuperAdmin' | 'Admin' | 'Consulter' | 'Visiteur';
  }

  interface JWT {
    role?: 'SuperAdmin' | 'Admin' | 'Consulter' | 'Visiteur'; // Make optional if it might not be present
  }
}
