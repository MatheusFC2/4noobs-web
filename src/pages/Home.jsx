import LogoLight from '../public/assets/4noobs-logo-light.svg'


function Home () {

    return (
        <div className='p-10'>
            <div className={`flex justify-center`}>
                <img src={LogoLight} alt="" className='w-100 h-40'/>
            </div>

            <div>
                <div className='flex pt-20 pl-20'>
                    <h1 className='text-xl dark:text-white'>Linguagens de Programação</h1>
                </div>
                // carroseul
            </div>

            <div>
                <div className='flex pt-20 pl-20'>
                    <h1 className='text-xl dark:text-white'>Framework</h1>
                </div>
                // carroseul
            </div>

            <div>
                <div className='flex pt-20 pl-20'>
                    <h1 className='text-xl dark:text-white'>Ferramentas</h1>
                </div>
                // carroseul
            </div>

            <div>
                <div className='flex pt-20 pl-20'>
                    <h1 className='text-xl dark:text-white'>Sistema Operacional</h1>
                </div>
                // carroseul
            </div>

            <div>
                <div className='flex pt-20 pl-20'>
                    <h1 className='text-xl dark:text-white'>Design</h1>
                </div>
                // carroseul
            </div>
        </div>
    )
};

export default Home;