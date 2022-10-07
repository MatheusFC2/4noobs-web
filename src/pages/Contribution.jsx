import React from 'react';
import TopBar from '../components/TopBar';
import BgCard from '../public/assets/imgcard.svg'

function Contribution() {
    return (
        <div className="h-full w-full bg-dark-0d">
            <div className="pb-20">
                <TopBar />
            </div>
            <div className="p-6">
                    <h1 className="flex font-bold text-white text-sm justify-center items-center md:text-2xl md:mt-12 mb-4 text-center pb-5">    
                        Ficamos felizes em saber que você tem  <br/> interese em contribuir com o projeto
                    </h1>
                    <p className="flex font-bold text-white-f5 text-sm justify-center items-center md:text-lg md:mt-12 mb-4 text-center pb-5">    
                        Aqui esta um exemplo de repositório, onde você pode ter como base para fazer o seu 4noobs
                    </p>
                <div className="flex flex-wrap justify-evenly gap-x-5 gap-y-8">
                    <div
                        className="max-w-xs bg-dark-cards rounded-lg drop-shadow-[0_5px_3px_rgba(0,0,0,0.30)] "
                    >
                        <a href="https://github.com/he4rt/4noobs/tree/master/examples">
                            <img
                                className="rounded-t-lg h-44 w-full"
                                src={BgCard}
                                alt=""
                            />
                        </a>
                        <div className="p-5">
                            <a href="https://github.com/he4rt/4noobs/tree/master/examples">
                                <h5 className="text-2xl font-bold tracking-tight text-white font-header">
                                    Repositorio Guia
                                </h5>
                            </a>
                            <p className="text-sm pb-2 text-white-f5">
                                Exemplo
                            </p>
                            <div className="h-[2px] w-60 bg-slate-300 rounded-lg justify-center items-center dark:bg-zinc-800"></div>
                            <p className="pt-2 mb-3 text-white-f5">
                                Clique no botão e veja um exemplo para você seguir
                            </p>
                            <a
                                href="https://github.com/he4rt/4noobs/tree/master/examples"
                                className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-purple-button border-2 border-purple-bg rounded-lg hover:bg-purple-button text-purple-bg focus:ring-4 focus:outline-none focus:ring-blue-300 hover:bg-purple-bg hover:text-white"
                            >
                                <span className="text-white">Ler Mais</span>
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
                </div>
            </div>
        </div>
    );
}

export default Contribution;
