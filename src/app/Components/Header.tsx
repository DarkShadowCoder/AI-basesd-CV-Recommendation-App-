import Image from "next/image"
import Link from "next/link"

export default function Header(){
    return (
        <nav className="fixed z-50 flex w-full justify-center align-center h-[100px] bg-transparent bg-[#0A2640]" data-navbar-on-scroll="data-navbar-on-scroll shadow-md">
            <div className="flex flex-row align-center justify-between p-4 pt-8 h-[70px] max-w-[1200px] w-full">
                <Link className="h-[15px] w-[105px] flex justify-evenly align-center" href="#">
                    <img
                        src="/images/logo-img.png"
                        alt="Insight Logo"
                        className="h-[50px]"
                    />
                    
                    <img
                        src="/images/logo-name.png"
                        alt="Insight Logo"
                        className="h-[50px]"
                        width="100px"
                    />
                </Link>

                <div className="flex shrink-0 flex-row align-center  justify-between w-[400px] h-full" >
                    <ul className="flex flex-row align-center justify-between w-full">
                        <li className="text-green-600 w-xl p-2"><Link className="nav-link active" aria-current="page" href="">Home</Link></li>
                        <li className="p-2 hover:text-green-600"><Link className="nav-link" aria-current="page" href="../../components/Dashboard/Recommender">About</Link></li>
                        <li className="p-2 hover:text-green-600"><Link className="nav-link" aria-current="page" href="../component/Dashboard/Recommender">Get Started</Link></li>
                        <li className="flex text-center justify-center align-center pb-8 bg-white p-2 rounded-[20px] w-[100px]"><Link className="text-black text-center font-bold font-w-[20px]" aria-current="page" href="#">Log In</Link></li>
                    </ul>
                </div>
                
            </div>
      </nav>
    )
}