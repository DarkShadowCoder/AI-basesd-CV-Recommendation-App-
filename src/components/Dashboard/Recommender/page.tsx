"use client";
import Breadcrumb from "../../Breadcrumbs/Breadcrumb"
import { Product } from "@/types/product";
import CustomSelect from "../../FormElements/CustomSelect";
import { useState } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import CheckboxFour from "@/components/Checkboxes/CheckboxFour";
import CheckboxTwo from "@/components/Checkboxes/CheckboxTwo";
import Link from "next/link";
import { useRouter } from "next/router";
import Loader from "@/components/common/Loader";

const productData: Product[] = [
  {
    id: "1",
    document: "CV 25",
    profil: "MBOHOU MOUNPOU yvan landry",
    taille: 35
  },
];


const Recommender = ()=>{

    const [input, setInput] = useState('')
    const [list, setList] = useState([''])

    const handleChangeInput = (event) =>{
        setInput(event.target.value);
    };

    const handleAddList = () =>{
        if (input !== ''){
            setList([...list,input]);
            setInput('');
            console.log(list);
        };
    }

    const [loading, setLoading] = useState(false);

    const handleClick = () =>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
            console.log("LOADER TERMINEE !!! ");
        },10000)
    }

    return (
    <DefaultLayout>
    <div className="flex flex-col gap-10">
        <Breadcrumb pageName="Recommender" />

        <div className="grid grid-cols-5 gap-8">
            <div className="col-span-5 xl:col-span-5">
                <div className="">
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="px-4 py-6 md:px-6 xl:px-7.5">
                            <h4 className="text-xl font-semibold text-black dark:text-white">
                            Listes des CVs
                            </h4>
                        </div>

                        <div className="grid grid-cols-4 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
                            <div className="col-span-1 flex items-center">
                            <p className="font-medium">ID</p>
                            </div>
                            <div className="col-span-2 hidden items-center sm:flex">
                            <p className="font-medium">Document</p>
                            </div>
                            <div className="col-span-4 flex items-center">
                            <p className="font-medium">Profil</p>
                            </div>
                            <div className="col-span-1 flex items-center">
                            <p className="font-medium">Taille</p>
                            </div>
                        </div>

                        {productData.map((product, key) => (
                            <div
                            className="grid grid-cols-4 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
                            key={key}
                            >
                            <div className="col-span-1 flex items-center">
                                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                                <p className="text-sm text-black dark:text-white">
                                    {product.id}
                                </p>
                                </div>
                            </div>
                            <div className="col-span-2 hidden items-center sm:flex">
                                <p className="text-sm text-black dark:text-white">
                                {product.document}
                                </p>
                            </div>
                            <div className="col-span-4 flex items-center">
                                <p className="text-sm text-black dark:text-white">
                                {product.profil}
                                </p>
                            </div>
                            <div className="col-span-1 flex items-center">
                                <p className="text-sm text-black dark:text-white">{product.taille}</p>
                            </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex align-center items-end w-full justify-end pt-2 ">
                        <Link
                            href="#"
                            className="inline-flex items-center justify-center hover:font-semibold rounded-full dark:bg-black border-primary border-[1.5px] dark:border-none text-slate-900 px-10 py-2 text-center font-medium dark:text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                            >
                            See More
                        </Link>
                    </div>
                </div>
                <div className="col-span-5 xl:col-span-5 row-span-5">
                    
                    <h2 className="text-title-md text-dark  font-semibold text-center  mb-6">Critères d'analyses</h2>
                    <div className="flex flex-col xl:flex-row w-full gap-4 justify-between">
                        <div className="xl:w-1/2  p-4 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                            <h2 className="text-black dark:text-white mb-3 text-title-sm text-center pb-6">Selectionner les competences recherchées</h2>
                            <div className="flex flex-col gap-4">
                                {/*<div className="w-full flex flex-row justify-between gap-5 align-middle items-center h-12">
                                    <div className="flex flex-row w-auto gap-4">
                                        <input
                                            type="text"
                                            value={input}
                                            onChange={handleChangeInput}
                                            onKeyPress={(event) => {
                                                if(event.key === "Enter"){
                                                    handleAddList()
                                                }
                                            }}
                                            placeholder="Active Input"
                                            className="w-full rounded-lg border-[1.5px] border-primary bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"
                                        />
                                    </div>
                                </div>*/}
                                <div className="flex h-full w-auto">
                                    <CustomSelect id="multiselect" items={["Machine Learning","Data science","Manager","Teacher","Engineering"]} />
                                </div>
                            </div>
                            
                        </div>

                        <div className="row-span-3 xl:w-1/2 p-4 h-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                            <h2 className="text-black dark:text-white mb-3 text-title-sm text-center pb-6">Appliquer des filtres</h2>
                            <div className="w-full h-full flex flex-col gap-4 justify-center items-center flex-wrap">
                                <div className="flex w-full flex-row xl:flex-col justify-between items-center gap-6 h-auto">
                                    <div className="w-1/2 xl:w-full h-auto text-center">
                                        <h2>Nombre de profils recherchés</h2>
                                        <input
                                                type="number"
                                                min={1}
                                                max={50}
                                                defaultValue={5}
                                                className="w-full rounded-lg border-[1.5px] border-primary bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"
                                            />
                                    </div>
                                    <div className="w-1/2 xl:w-full h-auto text-center">
                                        <h2>Poste du candidat</h2>
                                        <input
                                                type="text"
                                                defaultValue="Ingenieur Logiciel"
                                                className="w-full rounded-lg border-[1.5px] border-primary bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"
                                            />
                                    </div>
                                </div>
                                <div className="w-full">
                                    <CheckboxTwo text="Priviligier la reputation de l'école" />
                                </div>
                                <div className="w-full pt-8">
                                    <button
                                        onClick={handleClick}
                                        className="inline-flex w-full items-center justify-center gap-2.5 rounded-md bg-primary px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                                        >
                                        <span>
                                            <svg
                                            className="fill-current"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            >
                                            <path
                                                d="M18.0758 0.849976H16.0695C15.819 0.851233 15.5774 0.942521 15.3886 1.10717C15.1999 1.27183 15.0766 1.49887 15.0414 1.74685L14.4789 5.80935H13.3976V3.4031C13.3952 3.1654 13.3002 2.93802 13.1327 2.76935C12.9652 2.60068 12.7384 2.50403 12.5008 2.49998H10.082C10.0553 2.27763 9.94981 2.07221 9.78472 1.92089C9.61964 1.76956 9.40584 1.68233 9.18202 1.67498H6.45389C6.32885 1.67815 6.20571 1.70632 6.09172 1.75782C5.97773 1.80932 5.8752 1.8831 5.79017 1.97484C5.70513 2.06657 5.63932 2.17439 5.59659 2.29195C5.55387 2.40951 5.5351 2.53443 5.54139 2.65935V3.32498H3.15077C2.91396 3.32162 2.68544 3.41207 2.51507 3.57659C2.3447 3.7411 2.24632 3.96632 2.24139 4.2031V5.81248C2.0999 5.81539 1.96078 5.84937 1.83387 5.91201C1.70697 5.97466 1.59538 6.06443 1.50702 6.17498C1.41616 6.29094 1.35267 6.42593 1.32128 6.56986C1.2899 6.7138 1.29143 6.86297 1.32577 7.00623C1.32443 7.02182 1.32443 7.0375 1.32577 7.0531L3.23827 12.9375C3.29323 13.1432 3.4153 13.3247 3.58513 13.4532C3.75496 13.5818 3.96282 13.6499 4.17577 13.6468H13.3883C13.7379 13.6464 14.0756 13.5197 14.3391 13.29C14.6027 13.0603 14.7744 12.7431 14.8226 12.3968L16.2508 2.09998H18.0726C18.2384 2.09998 18.3974 2.03413 18.5146 1.91692C18.6318 1.79971 18.6976 1.64074 18.6976 1.47498C18.6976 1.30922 18.6318 1.15024 18.5146 1.03303C18.3974 0.915824 18.2384 0.849976 18.0726 0.849976H18.0758ZM12.1383 5.79373H10.0945V3.74998H12.1476L12.1383 5.79373ZM6.79139 2.9156H8.84452V3.39998V5.7906H6.79139V2.9156ZM3.49139 4.5656H5.54139V5.79373H3.49139V4.5656ZM13.5851 12.225C13.579 12.2727 13.5556 12.3166 13.5193 12.3483C13.4831 12.38 13.4364 12.3972 13.3883 12.3968H4.37577L2.65389 7.04998H14.3039L13.5851 12.225Z"
                                                fill=""
                                            />
                                            <path
                                                d="M5.31172 15.1125C4.9118 15.1094 4.51997 15.2252 4.18594 15.4451C3.85191 15.665 3.59073 15.9792 3.43553 16.3478C3.28034 16.7164 3.23813 17.1228 3.31425 17.5154C3.39037 17.908 3.58139 18.2692 3.86309 18.5531C4.14478 18.837 4.50445 19.0308 4.89647 19.11C5.28849 19.1891 5.6952 19.1501 6.06499 18.9978C6.43477 18.8454 6.75099 18.5867 6.97351 18.2544C7.19603 17.9221 7.31483 17.5312 7.31485 17.1312C7.31608 16.8671 7.26522 16.6053 7.16518 16.3608C7.06515 16.1164 6.91789 15.894 6.73184 15.7065C6.5458 15.519 6.3246 15.3701 6.08092 15.2681C5.83725 15.1662 5.57586 15.1133 5.31172 15.1125ZM5.31172 17.9C5.15905 17.9031 5.00891 17.8607 4.88045 17.7781C4.75199 17.6955 4.65103 17.5766 4.59045 17.4364C4.52986 17.2962 4.51239 17.1412 4.54026 16.9911C4.56814 16.8409 4.64009 16.7025 4.74695 16.5934C4.85382 16.4843 4.99075 16.4096 5.14028 16.3786C5.28981 16.3477 5.44518 16.3619 5.58656 16.4196C5.72794 16.4773 5.84894 16.5758 5.93412 16.7026C6.0193 16.8293 6.06481 16.9785 6.06484 17.1312C6.06651 17.3329 5.9882 17.5271 5.84705 17.6712C5.70589 17.8152 5.51341 17.8975 5.31172 17.9Z"
                                                fill=""
                                            />
                                            <path
                                                d="M12.9504 15.1125C12.5505 15.1094 12.1586 15.2252 11.8246 15.4451C11.4906 15.665 11.2294 15.9792 11.0742 16.3478C10.919 16.7164 10.8768 17.1228 10.9529 17.5154C11.029 17.908 11.2201 18.2692 11.5018 18.5531C11.7835 18.837 12.1431 19.0308 12.5351 19.11C12.9272 19.1891 13.3339 19.1501 13.7037 18.9978C14.0734 18.8454 14.3897 18.5867 14.6122 18.2544C14.8347 17.9221 14.9535 17.5312 14.9535 17.1312C14.9552 16.598 14.7452 16.086 14.3696 15.7075C13.994 15.329 13.4836 15.115 12.9504 15.1125ZM12.9504 17.9C12.7977 17.9031 12.6476 17.8607 12.5191 17.7781C12.3907 17.6955 12.2897 17.5766 12.2291 17.4364C12.1685 17.2962 12.1511 17.1412 12.1789 16.9911C12.2068 16.8409 12.2788 16.7025 12.3856 16.5934C12.4925 16.4843 12.6294 16.4096 12.779 16.3786C12.9285 16.3477 13.0838 16.3619 13.2252 16.4196C13.3666 16.4773 13.4876 16.5758 13.5728 16.7026C13.658 16.8293 13.7035 16.9785 13.7035 17.1312C13.7052 17.3329 13.6269 17.5271 13.4857 17.6712C13.3446 17.8152 13.1521 17.8975 12.9504 17.9Z"
                                                fill=""
                                            />
                                            </svg>
                                        </span>
                                        Lancer l'analyse
                                    </button>
                                    {loading  && (
                                        <div className="fixed top-0 h-screen w-screen z-99 flex justify-center items-center backdrop-blur-sm">
                                            <div className=" w-60 h-60 flex dark:bg-slate-900 bg-white border-[1.5px] border-primary rounded-3xl p-6 flex-col justify-center items-center ">
                                                <div className="flex h-screen items-center justify-center ">
                                                    <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
                                                </div>
                                                <span className="text-title-sm"> Analyse en cours...</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>
        </div>
    </div>
    </DefaultLayout>    
    )
}

export default Recommender;