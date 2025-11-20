import Image from "next/image";
import Video from 'next-video';
import video from "../../videos/body-paint.mp4"
import './Header.css';

export default function Header() {
    return (
        <header>
            <Image src="/logo.svg" alt="HOST Logo" width={200} height={50} className="logo-svg"/>
            <div className="header-card">
                <Video src={video}/>
            </div>
        </header>
    )
}