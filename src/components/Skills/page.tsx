import Image from "next/image"
import React from "react";

const Skills = (props)=>{
    return (
        <div className="mb-5.5">
            <label
                className="mb-3 block text-sm font-medium text-black dark:text-white"
                htmlFor="Username"
            >
                {props.title}
            </label>
            <div className="relative">
                <div
                    className="w-full flex justify-between align-top items-start flex-wrap gap-3 min-h-24 h-auto rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                    id={props.title}
                    defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere fermentum urna, eu condimentum mauris tempus ut. Donec fermentum blandit aliquet."
                >
                    {props.items.map((element, index) =>(
                        <div key={index} className="container flex flex-row justify-between align-center items-center gap-4 bg-blue-950 text-white text-sm w-auto h-10 p-3 pt-1 pb-1 rounded-xl">
                            <h2>{element}</h2>
                            <button 
                                className=" right-1 p-1 w-4 h-4 px-2 border-2">
                                <Image 
                                src=""
                                width={20}
                                height={20}
                                className=""
                                alt="close"
                                />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;