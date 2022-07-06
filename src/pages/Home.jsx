import LogoLight from '../public/assets/4noobs-logo-light.svg'
import LogoDark from '../public/assets/4noobs-logo-dark.svg'
import { useTheme } from '../hooks/useTheme';
import Jslogo from '../public/assets/jslogo.png';

function Home () {
    const { theme } = useTheme();  

    return (
        <div className='p-10'>
            <div className={`flex justify-center`}>
                {theme === 'light' ? <img src={LogoLight} alt="" className='w-100 h-40'/> 
                : <img src={LogoDark} alt="" className='w-100 h-40'/>}
            </div>

            <div>

                <div>
                    <div class="w-full min-h-screen p-6">

                        <h1 class="flex font-bold text-sm justify-center items-center md:text-2xl md: md:mt-12 mb-4 dark:text-white">Linguagens de programação</h1>

                        <div class="flex flex-wrap justify-evenly gap-5">

                            <div class="max-w-xs bg-white rounded-lg drop-shadow-[0_5px_3px_rgba(0,0,0,0.30)] dark:bg-dark-cards">
                                <a href="#">
                                    <img class="rounded-t-lg" src={Jslogo} alt="" />
                                </a>
                                <div class="p-5">
                                    <a href="#">
                                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-header">Javascript</h5>
                                    </a>
                                    <p class="mb-3 text-gray-700 dark:text-gray-400">Tutorial de Javascript para iniciantes na linguagem.</p>
                                    <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white dark:hover:text-black bg-purple-button rounded-lg hover:opacity-70 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:g-purple-button dark:hover:bg-white-f3 dark:focus:bg-purple-button">
                                        Ler Mais
                                        <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </div>
                            </div>

                            <div class="max-w-xs bg-white rounded-lg drop-shadow-[0_5px_3px_rgba(0,0,0,0.30)] dark:bg-dark-cards">
                                <a href="#">
                                    <img class="rounded-t-lg" src={Jslogo} alt="" />
                                </a>
                                <div class="p-5">
                                    <a href="#">
                                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-header">Javascript</h5>
                                    </a>
                                    <p class="mb-3 text-gray-700 dark:text-gray-400">Tutorial de Javascript para iniciantes na linguagem.</p>
                                    <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white dark:hover:text-black bg-purple-button rounded-lg hover:bg-white-f3 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:g-purple-button dark:hover:bg-white-f3 dark:focus:bg-purple-button">
                                        Ler Mais
                                        <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </div>
                            </div>

                            <div class="max-w-xs bg-white rounded-lg drop-shadow-[0_5px_3px_rgba(0,0,0,0.30)] dark:bg-dark-cards">
                                <a href="#">
                                    <img class="rounded-t-lg" src={Jslogo} alt="" />
                                </a>
                                <div class="p-5">
                                    <a href="#">
                                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-header">Javascript</h5>
                                    </a>
                                    <p class="mb-3 text-gray-700 dark:text-gray-400">Tutorial de Javascript para iniciantes na linguagem.</p>
                                    <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white dark:hover:text-black bg-purple-button rounded-lg hover:bg-white-f3 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:g-purple-button dark:hover:bg-white-f3 dark:focus:bg-purple-button">
                                        Ler Mais
                                        <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </div>
                            </div>

                            <div class="max-w-xs bg-white rounded-lg drop-shadow-[0_5px_3px_rgba(0,0,0,0.30)] dark:bg-dark-cards">
                                <a href="#">
                                    <img class="rounded-t-lg" src={Jslogo} alt="" />
                                </a>
                                <div class="p-5">
                                    <a href="#">
                                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-header">Javascript</h5>
                                    </a>
                                    <p class="mb-3 text-gray-700 dark:text-gray-400">Tutorial de Javascript para iniciantes na linguagem.</p>
                                    <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white dark:hover:text-black bg-purple-button rounded-lg hover:bg-white-f3 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:g-purple-button dark:hover:bg-white-f3 dark:focus:bg-purple-button">
                                        Ler Mais
                                        <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center items-center pt-20'>
                        
                        <a href="#" class="inline-block py-3 px-10 text-xl text-white bg-purple-button px-7 hover:bg-dark-purple rounded-xl ">Button Text</a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;