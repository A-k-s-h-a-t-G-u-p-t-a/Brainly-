import { useRef, useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import axios from "axios";
import { BACKENED_URL } from "../Config";
interface CreateContentProps {
  open: boolean;
  onClose: () => void;
}
enum ContentType{
  Youtube = "youtube",
  Twitter  = "twitter"
}
export function CreateContentModal({ open, onClose }: CreateContentProps) {
  const tittleRef = useRef<HTMLInputElement>();
  const linkRef = useRef<HTMLInputElement>();
  const [type ,setType]=useState("youtube");
  async function createcontent(){
    const title = tittleRef.current?.value;
    const link = linkRef.current?.value;
    await axios.post(`${BACKENED_URL}/api/v1/content`,{
      link,
      title,
      type
    },{
      headers:{
        "authorization":localStorage.getItem("token")
      }
    })
  }
  return (
    <div>
      {open && (
        <div>
          <div className="w-screen h-screen bg-slate-50 fixed top-0 left-0 opacity-70 flex justify-center">
          </div>
          <div className="w-screen h-screen fixed left-0 flex justify-center">
            <div className="flex flex-col justify-center">
              <span className="bg-white p-4 rounded justify-center">
                <div className="flex justify-end">
                  <div onClick={onClose} className="cursor-pointer">
                    <CrossIcon />
                  </div>
                </div>
                <div>
                  <Input placeholder="Title" reference = {tittleRef}/>
                  <Input placeholder="Link" reference={linkRef}/>
                </div>
                <div>
                  <h1>Type</h1>
                  <div className="flex py-2">
                    <Button text ="youtube" variant={type===ContentType.Youtube?"primary":"secondary"}onClick={()=>{
                      setType(ContentType.Youtube)
                    }}></Button>
                    <Button text ="Twitter" variant={type===ContentType.Twitter?"primary":"secondary"} onClick={()=>{
                      setType(ContentType.Twitter)
                    }}></Button>
                  </div>
                </div>
                  <div className="flex justify-center mt-4">                
                  <Button onClick ={createcontent}variant="primary" text="Create" ></Button>
                </div>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
