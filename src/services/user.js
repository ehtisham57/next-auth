import { error } from "console"
import fs from "fs"
import { compare, hash } from "bcryptjs"
import path from "path"

const filePath =path.join(process.cwd(), "src", "data", "users.json")

export function getAll(){
    const data = fs.readFileSync(filePath)
    return JSON.parse(data)  
}

export function getID(id){
    const data = getAll()
    return data.find(p => p.id === Number(id))
}

export function getEmail(email){
    const data = getAll()
    return data.find(p => p.email.toLowerCase === email.toLowerCase)
}
export async function verfuPassword(hashPasword , password){
    const isValid = await compare(password , hashPasword)
    return isValid
}

export async function save (email,password){
    const emailFound = getEmail()
    if(emailFound){
        throw new Error( "User already exist")
    }
    const data = getAll()
    const hashPasword = await hash(password , 12)
    data.push({
        id  : data.length + 1,
        email,password : hashPasword

    })
    fs.writeFileSync(filePath, JSON.stringify(data))
}
