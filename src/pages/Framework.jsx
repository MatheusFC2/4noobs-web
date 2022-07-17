import axios from 'axios';
import { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import { useTheme } from '../hooks/useTheme';
import LogoLight from '../public/assets/4noobs-logo-light.svg';
import LogoDark from '../public/assets/4noobs-logo-dark.svg'; 
import Jslogo from '../public/assets/jslogo.png';


export function Framework()  {
    const [courses, setCourses] = useState([]);
    const { theme } = useTheme();
    

    useEffect(()=> {
        axios
            .get(
                "https://raw.githubusercontent.com/he4rt/4noobs/master/.github/config.json"
            )
            .then(({data})=> {
                const coursesByFramework = data.courses.filter((course) =>{
                    return course.category === "Frameworks"
                })
                setCourses(coursesByFramework)
            });

    },[])

    return (
        <div className="h-full flex w-full">
            <Sidebar />
            <div className='w-full overflow-scroll p-10'>
                <div className={`flex justify-center`}>
                    {theme === 'light' ? <img src={LogoLight} alt="" className='w-100 h-40' />
                        : <img src={LogoDark} alt="" className='w-100 h-40' />}
                </div>
                <div>
                    <div>
                        <div class="p-6 h-full">

                            <h1 class="flex font-bold text-sm justify-center items-center md:text-2xl md: md:mt-12 mb-4 dark:text-white">Pagina de Frameworks</h1>


                            <div class="flex flex-wrap justify-evenly gap-5">

                                {courses.map((course) => {
                                    return (
                                        <div class="max-w-xs bg-white rounded-lg drop-shadow-[0_5px_3px_rgba(0,0,0,0.30)] dark:bg-dark-cards">
                                            <a href="#">
                                                <img class="rounded-t-lg" src={Jslogo} alt="" />
                                            </a>
                                            <div class="p-5">
                                                <a href="#">
                                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-header">{course.name}</h5>
                                                </a>
                                                <p class="mb-3 text-gray-700 dark:text-gray-200">{course.description}</p>
                                                <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-purple-button dark:hover:text-black border-2 border-purple-button rounded-lg hover:bg-purple-button hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:g-purple-button dark:hover:bg-puple-button dark:focus:bg-purple-button">
                                                    Ler Mais
                                                    <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                </a>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}