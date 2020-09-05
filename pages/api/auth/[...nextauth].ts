import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth, { InitOptions } from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
  session: {
    jwt: true,
  },
  // Configure one or more authentication providers
  providers: [
    // TODO: Load this only in dev
    Providers.Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: 'Usuario', type: 'text' },
        password: { label: 'Clave', type: 'password' },
      },
      authorize: async (_credentials) => {
        const user = {
          id: 1,
          name: 'J Smith',
          email: 'jsmith@example.com',
          image: '/avatar.svg',
        }

        if (user) {
          return Promise.resolve(user)
        } else {
          return Promise.resolve(null)
        }
      },
    }),
  ],

  // A database is optional, but required to persist accounts in a database
  database: process.env.DATABASE_URL,
} as InitOptions

export default (req: NextApiRequest, res: NextApiResponse): Promise<void> =>
  NextAuth(req, res, options)
