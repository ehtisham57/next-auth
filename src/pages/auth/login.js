import Form from "@/components/auth/form";
import { signIn } from "next-auth/react"
import { redirect } from "next/dist/server/api-utils";


export  default function SignIn () {
    const onSubmit =async (email,password)=>{
       const data = await signIn("credentials",{redirect:false,email,password})
       redirect : "/profile"
       console.log(data)

    }
    return <Form signin={true} onFormSubmit={onSubmit}/>
};
