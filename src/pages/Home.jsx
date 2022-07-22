import LogoDark from '../public/assets/4noobs-logo-dark.svg';
import BgNoobs from '../public/assets/bg-4noobs.png';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from '../components/TopBar';

function Home() {
    const [ldp, setLdp] = useState([]);
    const [ferramentas, setFerramentas] = useState([]);
    const [design, setDesign] = useState([]);
    const [framework, setFramework] = useState([]);
    const [so, setSo] = useState([]);

    useEffect(() => {
        axios
            .get(
                "https://raw.githubusercontent.com/MatheusFC2/4noobs/feat/images/.github/config.json"
            )
            .then(({ data }) => {
                const coursesByLdp = data.courses.filter((course) => {
                    return course.category === "Linguagens de programação"
                })
                const coursesByFerramentas = data.courses.filter((course) => {
                    return course.category === "Ferramentas"
                })
                const coursesByDesign = data.courses.filter((course) => {
                    return course.category === "Design"
                })
                const coursesByFramework = data.courses.filter((course) => {
                    return course.category === "Frameworks"
                })
                const coursesBySistemaOperacionais = data.courses.filter((course) => {
                    return course.category === "Sistemas operacionais"
                })
                setLdp(coursesByLdp)
                setFerramentas(coursesByFerramentas)
                setDesign(coursesByDesign)
                setFramework(coursesByFramework)
                setSo(coursesBySistemaOperacionais)

            });
    }, [])

    return (
        <div className="h-full w-full bg-dark-0d overflow-scroll">
            <div className="pb-20">
                <NavBar/>
            </div>
            <div className='w-full  p-10'>
                <div className={`flex justify-center`}>
                    <img src={LogoDark} alt="" className='w-100 h-40' />
                </div>

                <div class="p-6 h-full">

                    <h1 class="flex font-bold text-white text-sm justify-center items-center md:text-2xl md:mt-12 mb-4">Novidade! ⚠️</h1>
                    <div className="mt-10 z-2">
                        <h1 class="flex font-bold text-white text-sm justify-center items-center md:text-2xl md:mt-12 mb-4">4Noobs com um novo visual</h1>                

                    </div>
                    
                    <div class="z-1">
                        <img src={BgNoobs} alt="" />
                    </div>
                    <h1 className="flex font-bold text-white text-sm justify-center items-center md:text-2xl md:mt-12 mb-4">Curso da comunidade para a comunidade</h1>
                    <h1 className="flex font-bold text-white text-sm justify-center items-center md:text-2xl md:mt-12 mb-4">Linguagem de programação</h1>
                    <div class="flex flex-wrap justify-evenly gap-x-5 gap-y-8">

                        {ldp.slice(0, 4).map((course) => {
                            return (
                                <div class="max-w-xs bg-dark-cards rounded-lg drop-shadow-[0_5px_3px_rgba(0,0,0,0.30)] ">
                                    <a href="#">
                                        <img class="rounded-t-lg" src={course.image} alt="" />
                                    </a>
                                    <div class="p-5">
                                        <a href="#">
                                            <h5 class="text-2xl font-bold tracking-tight text-white font-header">{course.name}</h5>
                                        </a>
                                        <p className="text-sm pb-2 text-white-f5">{course.category}</p>
                                        <div className="h-[2px] w-60 bg-slate-300 rounded-lg justify-center items-center dark:bg-zinc-800"></div>
                                        <p class="pt-2 mb-3 text-white-f5">{course.description}</p>
                                        <Link to={`/linguagens-de-programacao/${course.name}`} class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-purple-button border-2 border-purple-bg rounded-lg hover:bg-purple-button text-purple-bg focus:ring-4 focus:outline-none focus:ring-blue-300 hover:bg-purple-bg hover:text-white">
                                            Ler Mais
                                            <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <h1 className="flex font-bold text-white text-sm justify-center items-center md:text-2xl md:mt-12 mb-4">Frameworks</h1>
                    <div class="flex flex-wrap justify-evenly gap-x-5 gap-y-8">

                        {framework.slice(0, 4).map((course) => {
                            return (
                                <div class="max-w-xs bg-dark-cards rounded-lg drop-shadow-[0_5px_3px_rgba(0,0,0,0.30)] ">
                                    <a href="#">
                                        <img class="rounded-t-lg" src={course.image} alt="" />
                                    </a>
                                    <div class="p-5">
                                        <a href="#">
                                            <h5 class="text-2xl font-bold tracking-tight text-white font-header">{course.name}</h5>
                                        </a>
                                        <p className="text-sm pb-2 text-white-f5">{course.category}</p>
                                        <div className="h-[2px] w-60 bg-slate-300 rounded-lg justify-center items-center dark:bg-zinc-800"></div>
                                        <p class="pt-2 mb-3 text-white-f5">{course.description}</p>
                                        <Link to={`/linguagens-de-programacao/${course.name}`} class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-purple-button border-2 border-purple-bg rounded-lg hover:bg-purple-button text-purple-bg focus:ring-4 focus:outline-none focus:ring-blue-300 hover:bg-purple-bg hover:text-white">
                                            Ler Mais
                                            <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <h1 className="flex font-bold text-white text-sm justify-center items-center md:text-2xl md:mt-12 mb-4">Ferramentas</h1>
                    <div class="flex flex-wrap justify-evenly gap-x-5 gap-y-8">

                        {ferramentas.slice(0, 4).map((course) => {
                            return (
                                <div class="max-w-xs bg-dark-cards rounded-lg drop-shadow-[0_5px_3px_rgba(0,0,0,0.30)] ">
                                    <a href="#">
                                        <img class="rounded-t-lg" src={course.image} alt="" />
                                    </a>
                                    <div class="p-5">
                                        <a href="#">
                                            <h5 class="text-2xl font-bold tracking-tight text-white font-header">{course.name}</h5>
                                        </a>
                                        <p className="text-sm pb-2 text-white-f5">{course.category}</p>
                                        <div className="h-[2px] w-60 bg-slate-300 rounded-lg justify-center items-center dark:bg-zinc-800"></div>
                                        <p class="pt-2 mb-3 text-white-f5">{course.description}</p>
                                        <Link to={`/linguagens-de-programacao/${course.name}`} class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-purple-button border-2 border-purple-bg rounded-lg hover:bg-purple-button text-purple-bg focus:ring-4 focus:outline-none focus:ring-blue-300 hover:bg-purple-bg hover:text-white">
                                            Ler Mais
                                            <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <h1 className="flex font-bold text-white text-sm justify-center items-center md:text-2xl md:mt-12 mb-4">Sistemas Operacionais</h1>
                    <div class="flex flex-wrap justify-evenly gap-x-5 gap-y-8">

                        {so.slice(0, 4).map((course) => {
                            return (
                                <div class="max-w-xs bg-dark-cards rounded-lg drop-shadow-[0_5px_3px_rgba(0,0,0,0.30)] ">
                                    <a href="#">
                                        <img class="rounded-t-lg" src={course.image} alt="" />
                                    </a>
                                    <div class="p-5">
                                        <a href="#">
                                            <h5 class="text-2xl font-bold tracking-tight text-white font-header">{course.name}</h5>
                                        </a>
                                        <p className="text-sm pb-2 text-white-f5">{course.category}</p>
                                        <div className="h-[2px] w-60 bg-slate-300 rounded-lg justify-center items-center dark:bg-zinc-800"></div>
                                        <p class="pt-2 mb-3 text-white-f5">{course.description}</p>
                                        <Link to={`/linguagens-de-programacao/${course.name}`} class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-purple-button border-2 border-purple-bg rounded-lg hover:bg-purple-button text-purple-bg focus:ring-4 focus:outline-none focus:ring-blue-300 hover:bg-purple-bg hover:text-white">
                                            Ler Mais
                                            <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <h1 className="flex font-bold text-white text-sm justify-center items-center md:text-2xl md:mt-12 mb-4">Design</h1>
                    <div class="flex flex-wrap justify-evenly gap-x-5 gap-y-8">

                        {design.slice(0, 4).map((course) => {
                            return (
                                <div class="max-w-xs bg-dark-cards rounded-lg drop-shadow-[0_5px_3px_rgba(0,0,0,0.30)] ">
                                    <a href="#">
                                        <img class="rounded-t-lg" src={course.image} alt="" />
                                    </a>
                                    <div class="p-5">
                                        <a href="#">
                                            <h5 class="text-2xl font-bold tracking-tight text-white font-header">{course.name}</h5>
                                        </a>
                                        <p className="text-sm pb-2 text-white-f5">{course.category}</p>
                                        <div className="h-[2px] w-60 bg-slate-300 rounded-lg justify-center items-center dark:bg-zinc-800"></div>
                                        <p class="pt-2 mb-3 text-white-f5">{course.description}</p>
                                        <Link to={`/linguagens-de-programacao/${course.name}`} class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-purple-button border-2 border-purple-bg rounded-lg hover:bg-purple-button text-purple-bg focus:ring-4 focus:outline-none focus:ring-blue-300 hover:bg-purple-bg hover:text-white">
                                            Ler Mais
                                            <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    
                </div>
            </div>
        </div>

    )
};

export default Home;