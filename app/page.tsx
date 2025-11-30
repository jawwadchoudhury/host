import Link from "next/link";
import Image from "next/image";
import Header from "./components/Header";
import './home.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faItunes, faItunesNote, faSpotify } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div className="">
      <Header/>

      <section className="merch">
        <Link href={'https://buy.stripe.com/test_28EcN780cbwzd3r7Ky6Zy01'} target="_blank">
          <div className="merch-card">
            <Image src="/protest-t-shirt.jpg" width={250} height={250} alt="HOST Eye T-Shirt" className="merch-card-image"/>
            <p className="merch-title">£7 - PROTEST T-SHIRT</p>
          </div>
        </Link>
      </section>
      <section className="bio">
        <div className="bio-card">
          <h1 className="bio-title"><b>WHO/WHAT IS HOST?</b></h1>
          <p className="bio-description">host is the middle finger that couldn't be held high enough, host is your weapon, host is a protest, host is a collective voice of the good, host was made for you and me, there's a bit of it in all of us…</p>
        </div>
      </section>
      <section className="socials">
        <h1 className="bio-title"><b>WHAT ARE YOU WAITING FOR?</b></h1>
        <p>
          <Link href={'https://www.instagram.com/host.ununofficial'} target="_blank"><FontAwesomeIcon icon={faInstagram} className="faicon"/></Link>
          <Link href={'https://open.spotify.com'} target="_blank"><FontAwesomeIcon icon={faSpotify} className="faicon"/></Link>
          <Link href={'https://music.apple.com'} target="_blank"><FontAwesomeIcon icon={faItunesNote} className="faicon"/></Link>
        </p>
      </section>

    </div>
  );
}
