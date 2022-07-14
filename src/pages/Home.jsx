import LogoLight from '../public/assets/4noobs-logo-light.svg'
import LogoDark from '../public/assets/4noobs-logo-dark.svg'
import Jslogo from '../public/assets/jslogo.png';
import { useTheme } from '../hooks/useTheme';
import Sidebar from '../components/Sidebar';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
    const [courses, setCourses] = useState([]);
    const [ferramentas, setFerramentas] = useState([]);
    const [design, setDesign] = useState([]);
    const [framework, setFramework] = useState([]);
    const [so, setSo] = useState([]);

    const { theme } = useTheme();

    useEffect(() => {
        axios
            .get(
                "https://raw.githubusercontent.com/he4rt/4noobs/master/.github/config.json"
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
                    return course.category === " Sistemas operacionais"
                })
                setCourses(coursesByLdp)
                setFerramentas(coursesByFerramentas)
                setDesign(coursesByDesign)
                setFramework(coursesByFramework)
                setSo(coursesBySistemaOperacionais)

            });
    }, [])

    return (
        <div className="h-full flex w-full">
            <Sidebar />
            <div className='w-full overflow-scroll p-10'>
                <div className={`flex justify-center`}>
                    {theme === 'light' ? <img src={LogoLight} alt="" className='w-100 h-40' />
                        : <img src={LogoDark} alt="" className='w-100 h-40' />}
                </div>

                <div class="p-6 h-full">

                    <h1 class="flex font-bold text-sm justify-center items-center md:text-2xl md: md:mt-12 mb-4 dark:text-white">Linguagens de programação</h1>

                    <div class="flex flex-wrap justify-evenly gap-5">

                        {courses.slice(0, 4).map((course) => {
                            return (
                                <div class="max-w-xs bg-white rounded-lg drop-shadow-[0_5px_3px_rgba(0,0,0,0.30)] dark:bg-dark-cards">
                                    <a href="#">
                                        <img class="rounded-t-lg" src={Jslogo} alt="" />
                                    </a>
                                    <div class="p-5">
                                        <a href="#">
                                            <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-header">{course.name}</h5>
                                        </a>
                                        <p className="text-sm pb-2 dark:text-white">{course.category}</p>
                                        <div className="h-[2px] w-60 bg-slate-300 rounded-lg justify-center items-center dark:bg-zinc-800"></div>
                                        <p class="pt-2 mb-3 text-gray-700 dark:text-gray-200">{course.description}</p>
                                        <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-purple-button dark:hover:text-black border-2 border-purple-button rounded-lg hover:bg-purple-button hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:g-purple-button dark:hover:bg-puple-button dark:focus:bg-purple-button">
                                            Ler Mais
                                            <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        </a>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='flex justify-center items-center pt-20'>

                        <a href="/linguagens-de-programacao" class="inline-block py-3 px-10 text-xl text-purple-button border-purple-button border-2 px-7 hover:bg-purple-button hover:text-white rounded-xl dark:hover:text-black">Ver mais Linguagens</a>

                    </div>
                </div>
                <div class="w-full p-6">

                    <h1 class="flex font-bold text-sm justify-center items-center md:text-2xl mb-4 dark:text-white">Frameworks</h1>

                    <div class="flex flex-wrap justify-evenly gap-5">

                        {framework.slice(0, 4).map((course) => {
                            return (
                                <div class="max-w-xs bg-white rounded-lg drop-shadow-[0_5px_3px_rgba(0,0,0,0.30)] dark:bg-dark-cards">
                                    <a href="#">
                                        <img class="rounded-t-lg" src={Jslogo} alt="" />
                                    </a>
                                    <div class="p-5">
                                        <a href="#">
                                            <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-header">{course.name}</h5>
                                        </a>
                                        <p className="text-sm pb-2 dark:text-white">{course.category}</p>
                                        <div className="h-[2px] w-60 bg-slate-300 rounded-lg justify-center items-center dark:bg-zinc-800"></div>
                                        <p class="pt-2 mb-3 text-gray-700 dark:text-gray-200">{course.description}</p>
                                        <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-purple-button dark:hover:text-black border-2 border-purple-button rounded-lg hover:bg-purple-button hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:g-purple-button dark:hover:bg-puple-button dark:focus:bg-purple-button">
                                            Ler Mais
                                            <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        </a>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='flex justify-center items-center pt-20'>
                        <a href="/frameworks" class="inline-block py-3 px-10 text-xl text-purple-button border-purple-button border-2 px-7 hover:bg-purple-button hover:text-white rounded-xl dark:hover:text-black">Ver mais Linguagens</a>
                    </div>
                </div>
                <div class="p-6 h-full">

                    <h1 class="flex font-bold text-sm justify-center items-center md:text-2xl md: md:mt-12 mb-4 dark:text-white">Ferramentas</h1>

                    <div class="flex flex-wrap justify-evenly gap-5">

                        {ferramentas.slice(0, 4).map((course) => {
                            return (
                                <div class="max-w-xs bg-white rounded-lg drop-shadow-[0_5px_3px_rgba(0,0,0,0.30)] dark:bg-dark-cards">
                                    <a href="#">
                                        <img class="rounded-t-lg" src={Jslogo} alt="" />
                                    </a>
                                    <div class="p-5">
                                        <a href="#">
                                            <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-header">{course.name}</h5>
                                        </a>
                                        <p className="text-sm pb-2 dark:text-white">{course.category}</p>
                                        <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-purple-button dark:hover:text-black border-2 border-purple-button rounded-lg hover:bg-purple-button hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:g-purple-button dark:hover:bg-puple-button dark:focus:bg-purple-button">
                                            Ler Mais
                                            <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        </a>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='flex justify-center items-center pt-20'>

                        <a href="/ferramentas" class="inline-block py-3 px-10 text-xl text-purple-button border-purple-button border-2 px-7 hover:bg-purple-button hover:text-white rounded-xl dark:hover:text-black">Ver mais Linguagens</a>

                    </div>
                </div>
                <div class="p-6 h-full">

                    <h1 class="flex font-bold text-sm justify-center items-center md:text-2xl md: md:mt-12 mb-4 dark:text-white">Sistemas Operacionais</h1>

                    <div class="flex flex-wrap justify-evenly gap-5">

                        {so.slice(0, 4).map((course) => {
                            return (
                                <div class="max-w-xs bg-white rounded-lg drop-shadow-[0_5px_3px_rgba(0,0,0,0.30)] dark:bg-dark-cards">
                                    <a href="#">
                                        <img class="rounded-t-lg" src={Jslogo} alt="" />
                                    </a>
                                    <div class="p-5">
                                        <a href="#">
                                            <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-header">{course.name}</h5>
                                        </a>
                                        <p className="text-sm pb-2 dark:text-white">{course.category}</p>
                                        <div className="h-[2px] w-60 bg-slate-300 rounded-lg justify-center items-center dark:bg-zinc-800"></div>
                                        <p class="pt-2 mb-3 text-gray-700 dark:text-gray-200">{course.description}</p>
                                        <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-purple-button dark:hover:text-black border-2 border-purple-button rounded-lg hover:bg-purple-button hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:g-purple-button dark:hover:bg-puple-button dark:focus:bg-purple-button">
                                            Ler Mais
                                            <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        </a>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='flex justify-center items-center pt-20'>

                        <a href="/sistemas-operacionais" class="inline-block py-3 px-10 text-xl text-purple-button border-purple-button border-2 px-7 hover:bg-purple-button hover:text-white rounded-xl dark:hover:text-black">Ver mais Linguagens</a>

                    </div>
                </div>
                <div class="p-6 h-full">

                    <h1 class="flex font-bold text-sm justify-center items-center md:text-2xl md: md:mt-12 mb-4 dark:text-white">Design</h1>

                    <div class="flex flex-wrap justify-evenly gap-5">

                        {design.slice(0, 4).map((course) => {
                            return (
                                <div class="max-w-xs bg-white rounded-lg drop-shadow-[0_5px_3px_rgba(0,0,0,0.30)] dark:bg-dark-cards">
                                    <a href="#">
                                        <img class="rounded-t-lg" src={Jslogo} alt="" />
                                    </a>
                                    <div class="p-5">
                                        <a href="#">
                                            <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-header">{course.name}</h5>
                                        </a>
                                        <p className="text-sm pb-2 dark:text-white">{course.category}</p>
                                        <div className="h-[2px] w-60 bg-slate-300 rounded-lg justify-center items-center dark:bg-zinc-800"></div>
                                        <p class="pt-2 mb-3 text-gray-700 dark:text-gray-200">{course.description}</p>
                                        <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-purple-button dark:hover:text-black border-2 border-purple-button rounded-lg hover:bg-purple-button hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:g-purple-button dark:hover:bg-puple-button dark:focus:bg-purple-button">
                                            Ler Mais
                                            <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        </a>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='flex justify-center items-center pt-20'>

                        <a href="/design" class="inline-block py-3 px-10 text-xl text-purple-button border-purple-button border-2 px-7 hover:bg-purple-button hover:text-white rounded-xl dark:hover:text-black">Ver mais Linguagens</a>

                    </div>
                </div>
            </div>
        </div>

    )
};

export default Home;