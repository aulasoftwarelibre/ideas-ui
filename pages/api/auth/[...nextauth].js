import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
  // Configure one or more authentication providers
  providers: [
    // TODO: Load this only in dev
    Providers.Credentials({
      name: "Credentials",
      session: {
        jwt: true,
      },
      credentials: {
        username: { label: "Usuario", type: "text" },
        password: { label: "Clave", type: "password" },
      },
      authorize: async (credentials) => {
        const user = {
          id: 1,
          name: "J Smith",
          email: "jsmith@example.com",
          image: "/ideas-isotipo-naranja.svg",
        };

        if (user) {
          return Promise.resolve(user);
        } else {
          return Promise.resolve(null);
        }
      },
    }),
  ],

  // A database is optional, but required to persist accounts in a database
  database: process.env.DATABASE_URL,
};

export default (req, res) => NextAuth(req, res, options);
