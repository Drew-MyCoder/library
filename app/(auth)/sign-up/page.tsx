'use client';

import AuthForm from "@/components/AuthForm";
import { signUp } from "@/lib/actions/auth";
import { signUpSchema } from "@/lib/validatons";


const page = () => (
    <AuthForm
    type="SIGN_UP"
    schema={signUpSchema}
    defaultValues={{
        fullName: "",
        email: "",
        password: "",       
        universityId: 0,
        universityCard: ""
    }}
    onSubmit={signUp}
    />
)

export default page;
