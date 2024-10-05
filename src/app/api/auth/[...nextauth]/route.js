import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials"


export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                usuario: { label: "Usuario", type: "text" },
                clave: { label: "Contraseña", type: "password" }
            },
            authorize: async (credentials) => {
                const response = await fetch(`/api/usuarios/listar/${credentials.usuario}/${credentials.calve}`, {
                    method: "GET",
                    headers: { "Content-Type" : "application/json" },
                });
                const user = await response.json();

                if(response.ok && user) {
                    return user;
                }
                    return null;
            }
        })
    ],

    pages: {
      signIn: "/",
    },

    callbacks: {
      async jwt({ token, user }) {
        if(user) {
          token.IdDiv = user.IdDiv;
        }
        return token;
      },
      async session({ session, token }) {
        session.user.IdDiv = token.role;
        return session;
      }
    }
});
