import axios from "axios";
import { useEffect, useState } from "react";
import { BACKENED_URL } from "../Config";

export function useContent(){
    const [contents,Setcontents] = useState([]);
    async function refresh(){
        await axios.get(`${BACKENED_URL}/api/v1/content`,{
            headers:{
                "authorization":localStorage.getItem("token")
            }
        })
        .then((response)=>{
            Setcontents(response.data.content);
        })
    }
    useEffect(()=>{
        refresh();
        let interval = setInterval(()=>{
            refresh();
        },10*1000)

        return ()=>{
            clearInterval(interval);
        }
    },[])
    
    return {contents,refresh};
}