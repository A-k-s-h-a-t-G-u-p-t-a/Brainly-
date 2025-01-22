import { Logo } from "../icons/Logo";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";

export function Sidebar(){
    return <div className="h-screen bg-white border-r w-72 fixed left-0 top-0">
        <div className="px-8 text-2xl font-bold text-gray-900 flex items-center">
            <Logo></Logo>
            Brainly
        </div>
        <div className="px-2 text-gray-900 pt-5">
            <SidebarItem title="Tweets" icon={<TwitterIcon/>}></SidebarItem>
            <SidebarItem title="Youtube" icon={<YoutubeIcon/>}></SidebarItem>
        </div>
    </div>
}