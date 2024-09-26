import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"


export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                usuario: { label: "Usuario", type: "text" },
                clave: { label: "Contraseña", type: "password" }
            },
            async authorize(credentials) {
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
