import Form from "@/components/auth/form";

export default function SignIn() {
    const onSubmit = async (email, password) => {
        try{
            const response = await fetch("/api/auth/signup",
            {
                method: "POST",
                body: JSON.stringify({ email, password }),
                headers : {
                    "Content-Type" : "application/json"
                }
            }
        )
        if(response.ok){
            alert("Signup Succeful")
        }
        }
        catch(err){
            console.error(err)
        }
    }
    return <Form signin={false} onFormSubmit={onSubmit} />
};
