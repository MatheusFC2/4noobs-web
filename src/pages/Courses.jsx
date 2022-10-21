import React, { useState, useEffect } from 'react';
import BgCard from '../public/assets/imgcard.svg'
import axios from 'axios';
import { SearchIcon } from '@heroicons/react/outline';
import TopBar from '../components/TopBar';

export default function Courses() {
    const [courses, setCourses] = useState([]);
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('');

    function getResults() {
        if(search == '') {
            return courses
        }

        return courses.filter((course) => {
            return (
                course.category
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                course.name
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                course.tags
                    ?.map((tag) => tag.toLocaleUpperCase().includes(search.toLocaleUpperCase()))
                    .includes(true)
            )   
        })
        
    }

    async function fetchCourses() {
        const response = await axios.get(import.meta.env.VITE_COURSES_URL);

        setCourses(response.data.courses);
        setResults(response.data.courses);
    }

    useEffect(() => {
        setResults(getResults);
    }, [search]);

    useEffect(() => {
        setLoading(true);
        fetchCourses();
        setLoading(false);
    }, []);

    return (
        <div className="h-full w-full bg-dark-0d overflow-scroll overflow-x-hidden">
            <div className="pb-36">
                <TopBar />
            </div>
            <div className="flex justify-center items-center">
                <label className="relative block">
                    <span className="sr-only">Search</span>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <SearchIcon className="w-6 h-6 text-[#B3B3B3]" />
                    </span>
                    <input
                        className="text-white placeholder:italic placeholder:text-[#B3B3B3] block bg-dark-cards  rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-gray-500 focus:gray-500 focus:ring-1 sm:text-sm md:w-[40rem]"
                        placeholder="Pesquisar por tecnologia ou por categoria"
                        type="text"
                        name="search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </label>
            </div>
            <div className="pt-20 flex flex-wrap justify-evenly gap-x-5 gap-y-8">
                {loading ? (
                    <h4>Carregando...</h4>
                ) : (
                    results.map((course) => {
                            return (
                                <div
                                    key={course.name}
                                    className="max-w-xs bg-dark-cards rounded-lg drop-shadow-[0_5px_3px_rgba(0,0,0,0.30)] "
                                >
                                    <a href={course.url}>
                                        <img
                                            className="rounded-t-lg h-44 w-full"
                                            src={course.image ? course.image :  BgCard}
                                            alt=""
                                        />
                                    </a>
                                    <div className="p-5">
                                        <a href={course.url}>
                                            <h5 className="text-2xl font-bold tracking-tight text-white font-header">
                                                {course.name}
                                            </h5>
                                        </a>
                                        <p className="text-sm pb-2 text-white-f5">
                                            {course.category}
                                        </p>
                                        <p className="text-sm mb-2 text-white-f5">
                                            Autor:{' '}
                                            <a
                                                target="_blank"
                                                href={course.author.avatar_url.replace(
                                                    '.png',
                                                    '',
                                                )}
                                            >
                                                <span className="hover:text-purple-500 text-white-500">
                                                    {course.author.name}
                                                </span>
                                            </a>
                                        </p>
                                        <div className="h-[2px] w-60 bg-slate-300 rounded-lg justify-center items-center dark:bg-zinc-800"></div>
                                        <p className="pt-2 mb-3 text-white-f5">
                                            {course.description}
                                        </p>
                                        <a
                                            href={course.url}
                                            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-purple-button border-2 border-purple-bg rounded-lg hover:bg-purple-button text-purple-bg focus:ring-4 focus:outline-none focus:ring-blue-300 hover:bg-purple-bg hover:text-white"
                                        >
                                            <span className="text-white">
                                                {' '}
                                                Ler Mais
                                            </span>
                                            <svg
                                                className="ml-2 -mr-1 w-4 h-4"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            );
                        })
                )}
            </div>
        </div>
    );
}
