import Image from "next/image"

export default function ModalItem(props){
    return (
        <div className="flex flex-col justify-between align-center  md:pr-2 md:mb-9 md:w-[305px] h-14 md:h-[50px] m-2 mb-8 hover:opacity-70">
            <div className="text-center flex flex-row justify-baseline gap-3 align-center">
                <div className="flex justify-center md:w-[75px] md:h-[75px] md:p-5 align-center p-5 bg-violet-800 rounded-full">
                    <img className="w-[30px] h-[30px] " src={props.image} alt="Image" />
                </div>
                <div className="flex flex-col text-justify md:text-center gap-4 justify-center align-center md:w-[240px] ">
                    <h3 className="text-2xl font-bold ">{props.title}</h3>
                    <p className="text-gray-600 text-sm w-auto h-auto">{props.description}</p>
                </div>
            </div>
        </div>
    )
}