import NextAuth, { NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from "./db/prisma";
import { compareSync } from "bcrypt-ts-edge";
import { log } from "console";

export const config = {
    pages: {
        signIn: '/sign-in',
        error: '/sign-in',
    },
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60, // 30 day
    },
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials.password) return null;

                const user = await prisma.user.findFirst({
                    where: { email: credentials.email },
                });

                if (user && user.password) {
                    const isMatch = compareSync(credentials.password, user.password);
                    if (isMatch) {
                        return {
                            id: user.id,
                            email: user.email,
                            name: user.name,
                            role: user.role,
                        };
                    }
                }

                return null;
            },
        }),
    ],
    callbacks: {
        async session ({ session, token, user, trigger }:any) {

            session.user.id = token.sub;
            session.user.role = token.role;
            session.user.name = token.name;

            console.log(token, "1inci")

            if (trigger === 'update') {
                session.user.name = user.name;
            }

            return session;
        },
        async jwt({token, user, trigger, session}:any){

            if(user){
                token.role = user.role;

                // if user has no name then use the email

                if(user.name === "NO_NAME"){
                    token.name = user.name!.split('@')[0];

                    // update database

                    await prisma.user.update({
                        where: {id: user.id},
                        data: {name: token.name}
                    })

                } 
            }
    
            
            return token
        }
    },
}satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
