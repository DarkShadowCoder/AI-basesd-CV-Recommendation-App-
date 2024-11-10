import Header from "@/app/Components/Header";
import ModalItem from "@/app/Components/ModalItems";

const HomePage = () => {
    return (
        <main className="flex flex-col justify-start h-auto">
            <div className="navbar flex flex-col justify-start h-auto md:min-h-[800px] shadow-lg bg-[#0A2640]">
            <Header />
            <div className="w-full flex justify-center align-center pt-24 gap-8 h-auto"><img className="absolute z-10 end-0 " src="/images/hero/hero-bg.png" alt="" />
                <div className="container relative z-20 w-full p-8 ">
                    <div className="flex flex-col justify-center align-center max-w-[1200px] w-full gap-8">
                        <div className="flex flex-wrap md:flex-row flex-col w-full justify-between align-center gap-8 md:mt-8">
                            <div className="flex flex-col justify-between align-center gap-2 md:w-1/2 w-full text-center">
                                <h1 className="text-white pb-4 pt-4 text-5xl text-center">Utiliser un systeme d'aide à la decision dans le domaine des ressources humaines</h1>
                                <p className="text-white ">Gagner du temps avec Insight pour faire des analyses avancées de données de differents Curriculum Vitae pour avoir une recommandation de profil basée sur la competence et l'experience</p>
                                <div className="flex align-center item-center gap-4 w-full mt-4">
                                    <button className="text-black font-bold w-1/2 h-[50px] bg-green-300  rounded-[30px] hover:bg-green-200">Get Started </button>
                                    <button className="text-white font-bold w-1/2 h-[50px] border-2 boder-white rounded-[30px] hover:bg-white hover:text-black">Explore</button></div>
                                </div>
                            <div className="flex w-auto h-full max-w-[520px] mx-12 md:mx-0"><img className="max-w-[520px]" src="/images/hero/hero-graphics.png" alt="" /></div>
                        </div>
                        </div>
                        <div className="md:mt-14 mt-8 bg-gradient-to-t">
                            <div className="w-full">
                                <div className="flex flex-row justify-between align-center scroll-m-3 h-12">
                                <div className="w-1/5 ml-4 flex"><img src="/images/logos/boldo.png" alt="" /></div>
                                <div className="w-1/5 ml-4 flex"><img src="/images/logos/presto.png" alt="" /></div>
                                <div className="w-1/5 ml-4 flex"><img src="/images/logos/boldo.png" alt="" /></div>
                                <div className="w-1/5 ml-4 flex"><img src="/images/logos/presto.png" alt="" /></div>
                                <div className="w-1/5 ml-4 flex"><img src="/images/logos/boldo.png" alt="" /></div>
                                <div className="w-1/5 ml-4 flex"><img src="/images/logos/presto.png" alt="" /></div>
                            </div>
                        </div>
                      </div>
                </div>
            </div>
        </div>
        <section className="text-black mt-12 h-auto w-full flex flex-col flex-wrap justify-between align-center items-center">
            <div className="container text-center flex flex-row-reverse justify-center align-center items-center md:max-w-[1200px] w-full">
                <div className="container flex flex-col items-center align-center justify-center p-2 gap-6 h-[300px] mt-20">
                    <div className="flex flex-row w-full mb-8 ">
                        <div className=" text-slate-900 font-bold w-full">
                            <h2 className="text-center text-5xl">Some of the best features of our App</h2>
                        </div>
                    </div>

                    {/* Section caption*/}
                    <div className="flex flex-col align-center justify-center flex-wrap h-auto md:h-[250px]">
                        <ModalItem title="Extreme Security" description="Aorem psum olorsit amet ectetur adipiscing elit, sed dov." image="/images/shape/plus1.png" />
                        <ModalItem title="Customer Support" description="Aorem psum olorsit amet ectetur adipiscing elit, sed dov." image="/images/shape/plus1.png" />
                        <ModalItem title="Creative Design" description="Aorem psum olorsit amet ectetur adipiscing elit, sed dov." image="/images/shape/plus1.png" />
                        <ModalItem title="Easy to Customize" description="Aorem psum olorsit amet ectetur adipiscing elit, sed dov." image="/images/shape/plus1.png" />
                    </div>
                    
                </div>
                <div className="hidden md:flex justify-center align-center ">
                    <img src="/shape/hero_right.png" alt="" />
                </div> 
            </div>

            <div className="container mt-24 pt-24  md:h-[400px] text-center flex flex-col-reverse justify-center align-center items-center md:flex-row md:max-w-[1200px] w-full">
                <div className="container h-full flex flex-col items-end justify-between md:align-bottom p-2 gap-8 md:mt-40">
                    <div className="flex flex-row w-full ">
                        <div className=" text-slate-900 w-full">
                            <h2 className="text-center text-3xl font-bold text-slate-900">We connect our customers with the best, and help them keep up-and stay open</h2>
                        </div>
                    </div>

                    {/* Section caption*/}
                    <div>
                        <ul className="flex flex-col align-center text-justify px-20 justify-center flex-wrap h-auto md:h-[250px]">
                            <li className="text-xl mb-5">We connect our customers with the best.</li>
                            <li className="text-xl mb-5">Advisor success customer launch party.</li>
                            <li className="text-xl mb-5">Business-to-consumer long tail.</li>
                        </ul>
                            <button  className="text-white pb-2 pt-2 p-10 rounded-full border-inset border-2 bg-slate-800 font-bold hover:bg-white hover:border-slate-900 hover:text-slate-900"> Start Now</button>
                    </div>
                    
                </div>
                <div className=" md:w-full md:h-full">
                    <img src="/images/offer/1.png" alt="Offer images" />
                </div> 
            </div>

            <div className="container pt-24 md:mt-40 md:h-[400px] text-center flex flex-col justify-center align-center items-center md:flex-row-reverse md:max-w-[1200px] w-full">
                <div className="container h-full flex flex-col md:items-end justify-between md:align-bottom p-2 gap-6 md:mt-40 md:mr-12">
                    <div className="flex flex-row w-full ">
                        <div className=" text-slate-900 w-full">
                            <h2 className="text-center text-3xl font-bold text-slate-900">We connect our customers with the best, and help them keep up-and stay open</h2>
                        </div>
                    </div>

                    {/* Section caption*/}
                    <ul className="flex flex-row align-center text-justify justify-start flex-wrap h-auto md:h-[250px] gap-2 md:mr-8 w-full">
                        <li className="text-xl mb-5 shadow-md shadow-gray-200 w-full h-auto pb-8 pt-8 pr-12 px-8 rounded-md hover:text-white hover:bg-slate-800">We connect our customers with the best.</li>
                        <li className="text-xl mb-5 shadow-md shadow-gray-200 w-full h-auto pb-8 pt-8 pr-12 px-8 rounded-md hover:text-white hover:bg-slate-800">Advisor success customer launch party.</li>
                        <li className="text-xl mb-5 shadow-md shadow-gray-200 w-full h-auto pb-8 pt-8 pr-12 px-8 rounded-md hover:text-white hover:bg-slate-800">Business-to-consumer long tail.</li>
                    </ul>

                    
                </div>
                <div className=" md:w-full md:h-full">
                    <img src="/images/offer/1.png" alt="Offer images" />
                </div> 
            </div>
            
            
        </section>
    </main>   
    )
}

export default HomePage;
