import { SearchIcon } from '@heroicons/react/outline';
import axios from 'axios';
import React, {useState, useEffect}  from 'react';
import TopBar from '../components/TopBar';
import { Link } from 'react-router-dom';


function Cursos() { 
    const [courses, setCourses] = useState([])

    useEffect(() =>{
        axios
        .get("https://raw.githubusercontent.com/MatheusFC2/4noobs/feat/images/.github/config.json")
        .then(({data}) => {
            const cursos = data.courses.filter((course) => {
                return course            
            });
            setCourses(cursos)
            
        });
    }, [])
    return (
        <div className="h-full w-full bg-dark-0d overflow-scroll">
            <div className="pb-36">
                <TopBar/>
            </div>
            <div className="flex justify-center items-center">
                <label class="relative block">
                    <span class="sr-only">Search</span>
                        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                            <SearchIcon className="w-6 h-6 text-[#B3B3B3]"/>
                        </span>
                    <input class="text-white placeholder:italic placeholder:text-[#B3B3B3] block bg-dark-cards  rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-gray-500 focus:gray-500 focus:ring-1 sm:text-sm md:w-[40rem]" placeholder="Search for anything..." type="text" name="search"/>
                </label>
            </div>
            <div class="pt-20 flex flex-wrap justify-evenly gap-x-5 gap-y-8">

                {courses.map((course) => {
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
    );
}

export default Cursos;