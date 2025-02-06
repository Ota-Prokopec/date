export type Session = {
  session: {
    id: string;
    userId: string;
    expiresAt: Date;
    ipAddress?: string | null | undefined;
    userAgent?: string | null | undefined;
  };
  user: {
    id: string;
    email: string;
    emailVerified: boolean;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    image?: string | null | undefined;
  };
};

export type SessionTokenName = 'better-auth.session_token';
