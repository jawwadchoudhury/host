import Image from "next/image";
import './Header.css';

export default function Header() {
    return (
        <header>

            <Image src="/logo.svg" alt="HOST Logo" width={200} height={50} className="logo-svg"/>

            <div className="header-card">
                <video className="embed-video" src='/videos/body-paint.mp4' controls />
            </div>
        </header>
    )
}