import { Icon } from "ionicons/dist/types/components/icon/icon";
import Image from "next/image";

export default function Newsletter(){
    return (
        <div className="">
            <div className="">
                <Image 
                src=""
                alt="stay updated"
                height="20px"
                width="20px"
                />
                <h2 className="">Stay updated!</h2>
                <div className="">
                    <Icon />
                    <input type="text" placeholder="Your email" />
                </div>
                <button type="button" className="">SUBSCRIBE</button>
                
            </div>
        </div>
    )
}