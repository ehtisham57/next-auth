// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { save } from "@/services/user"

export default function handler(req, res) {
    if(req.method !== "POST"){
        return res.status(404).send()
    }
    const {email , password} = req.body;
    try{
        save(email , password)
        res.status(201).send()
    }catch(err){
        console.log(err)
        res.status(400).json({message : err})
    }
}
  