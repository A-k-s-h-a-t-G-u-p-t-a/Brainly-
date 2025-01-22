import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { BACKENED_URL } from "../Config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Signin(){
    const usernameRef = useRef<HTMLInputElement>(); // Generics  
    const passwordRef = useRef<HTMLInputElement>();
    const navigate = useNavigate();
    async function signin(){
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;   
        const response = await axios.post(`${BACKENED_URL}/api/v1/signin`,{
            username,
            password
        }); 
        const jwt = response.data.token;
        localStorage.setItem("token",jwt);
        navigate("/dashboard");
    }
    return<div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg  min-w-64 shadow-lg">
        <div className="text-center mb-8"><h1 className="text-4xl font-bold text-[#5046e4] mb-2">Brainly</h1><p className="text-gray-700">Join our learning community today!</p></div>
        <Input reference = {usernameRef} placeholder="Username"></Input>
        <Input reference={passwordRef} placeholder="Password"></Input>
        <div className="flex justify-center p-4">
            <Button onClick={signin}variant="primary" text="Signin" ></Button>
        </div>
        </div>
    </div>
}