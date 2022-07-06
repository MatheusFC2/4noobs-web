import { useState } from "react";
import Logo from '../public/assets/logo-sidebar.svg'; 
import Control from '../public/assets/controle.svg';
import { Code, DiscordLogo, Globe, House, InstagramLogo, LinuxLogo, Moon, PaintBrushBroad, Suitcase, Sun, TwitterLogo, Wrench } from "phosphor-react";
import Home from "../pages/Home";
import { useTheme } from "../hooks/useTheme";


function Sidebar () {

    const [open, setOpen] = useState(true);
    const { theme, setTheme } = useTheme();  
    return (
        <div className="flex">
            <div className={` ${open ? "w-72" : "w-20" } p-5 pt-5 duration-500 h-screen bg-gradient-to-t  from-dark-purple to-purple-4noobs relative`}>
                <img 
                    src={Control} 
                    className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-purple-4noobs ${!open && 'rotate-180'}`}
                    onClick={() => setOpen(!open)}
                />
                <div className="flex gap-x-4 items-center">
                    <img src={Logo} className={`cursor-pointer duration-500`} />
                    <h1 className={`font-header text-white origin-left font-medium text-xl duration-300 ${!open && 'scale-0'}`}>
                        H4ert Developer
                    </h1>
                </div>
                <div className="h-[1px] w-25 bg-[#2E0D55] mt-7"></div>
                <ul className="pt-6">
                    <div className="flex flex-row items-center pt-4">
                        <House color="white" weight="bold" size={29}/><li className={`text-white text-lg pl-3 ${!open && 'scale-0'}`}>Home</li>
                    </div>
                    <div className="flex flex-row items-center pt-10">
                        <Code color="white" weight="bold" size={29}/><li className={`text-white text-lg pl-3 ${!open && 'scale-0'}`}>Linguagens de Programação</li>
                    </div>
                    <div className="flex flex-row items-center pt-10">
                        <Suitcase color="white" weight="bold" size={29}/><li className={`text-white text-lg pl-3 ${!open && 'scale-0'}`}>Framework</li>
                    </div>
                    <div className="flex flex-row items-center pt-10">
                        <Wrench color="white" weight="bold" size={29}/><li className={`text-white text-lg pl-3 ${!open && 'scale-0'}`}>Ferramentas</li>
                    </div>
                    <div className="flex flex-row items-center pt-10">
                        <LinuxLogo color="white" weight="bold" size={29}/><li className={`text-white text-lg pl-3 ${!open && 'scale-0'}`}>Sistema Operacionais</li>
                    </div>
                    <div className="flex flex-row items-center pt-10">
                        <PaintBrushBroad color="white" weight="bold" size={29}/><li className={`text-white text-lg pl-3 ${!open && 'scale-0'}`}>Design</li>
                    </div>
                </ul>
                <div className="flex flex-row items-center justify-center pt-14">
                    <a href="https://www.instagram.com/heartdevs/" target="_blank"><InstagramLogo color="white" weight="regular" size={20} className={`mr-3 ${!open && 'scale-0 duration-100'}`} /></a>
                    <a href="https://discord.gg/he4rt" target="_blank"><DiscordLogo color="white" weight="regular" size={20} className={`mr-3 ${!open && 'scale-0 duration-100'}`}/></a>
                    <a href="https://twitter.com/He4rtDevs" target="_blank"><TwitterLogo color="white" weight="regular" size={20} className={`mr-3 ${!open && 'scale-0 duration-100'}`} /></a>
                    <a href="https://heartdevs.com/" target="_blank"><Globe color="white" weight="regular" size={20} className={`${!open && 'scale-0 duration-100'}`} /></a>
                </div>
                <div className="flex items-center justify-center pt-8">
                    {theme === "light" ? <Sun color="white" weight="bold" size={20} className="cursor-pointer" onClick={()=>setTheme("dark")}/> : <Moon color="white" weight="bold" size={20} className="cursor-pointer" onClick={()=>setTheme("light")}/>}
                    
                </div>
                <div className="flex justify-center items-center pt-10">
                    {!open === false ? <h1 className="text-white font-header ">Desenvolvido por <a className="underline hover:text-purple-500 " href="https://omatheusfc.vercel.app/" target="_blank">omatheusfc</a></h1> 
                    : <h1 className="text-white font-header hover:text-purple-500"><a className="underline" href="https://omatheusfc.vercel.app/" target="_blank">OMFC</a></h1>}
                
                </div>
            </div>
            <div className="w-full">
                <Home/>
            </div>
        </div>
    );
} 

export default Sidebar;