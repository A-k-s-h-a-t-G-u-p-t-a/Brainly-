import { ReactElement } from "react";
export function SidebarItem({title,icon}:{
    title:string,
    icon:ReactElement
}){
    return <div>
        <div className="flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer">
            <div className=" pl-8 pr-3 ">
                {icon}
            </div>
            <div>
                {title}
            </div>
        </div>
    </div>
}