import { getEmail, verfuPassword } from "@/services/user"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
  // Configure one or more authentication providers
  session : {
    jwt : true
},

  providers: [
    CredentialsProvider({
        async authorize({email,password}) {
         const user = getEmail(email)
         if(!user){
            throw new Error("user not found")
         }
         const isValid = await verfuPassword(user.password , password)
         if(!isValid){
            throw new Error("Password Not Correct")
         }

         return {email};
        }
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)