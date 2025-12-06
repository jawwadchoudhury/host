import Link from "next/link";
import Image from "next/image";
import Header from "./components/Header";
import './home.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faItunes, faItunesNote, faSpotify } from "@fortawesome/free-brands-svg-icons";
import { createClient } from '@vercel/edge-config';

export default async function Home() {
  const config = createClient(process.env.EDGE_CONFIG);
  const instagramUrl = await config.get<string>("instagram-url");
  const spotifyUrl = await config.get<string>("spotify-url");
  const appleMusicUrl = await config.get<string>("applemusic-url");

  const merchImageUrl = await config.get<string>("merch-image-url");
  const merchPaymentUrl = await config.get<string>("merch-payment-url");
  return (
    <div className="">
      <Header/>

      <section className="merch">
        <Link href={merchPaymentUrl!} target="_blank">
          <div className="merch-card">
            <Image src={merchImageUrl!} width={250} height={250} alt="HOST Eye T-Shirt" className="merch-card-image"/>
            <p className="merch-title">£{config.get("merch-price")} - {config.get("merch-title")}</p>
          </div>
        </Link>
      </section>
      <section className="bio">
        <div className="bio-card">
          <h1 className="bio-title"><b>{config.get("bio-title")}</b></h1>
          <p className="bio-description">{config.get("bio-description")}</p>
        </div>
      </section>
      <section className="socials">
        <h1 className="bio-title"><b>{config.get("socials-header")}</b></h1>
        <p>
          <Link href={instagramUrl!} target="_blank"><FontAwesomeIcon icon={faInstagram} className="faicon"/></Link>
          <Link href={spotifyUrl!} target="_blank"><FontAwesomeIcon icon={faSpotify} className="faicon"/></Link>
          <Link href={appleMusicUrl!} target="_blank"><FontAwesomeIcon icon={faItunesNote} className="faicon"/></Link>
        </p>
      </section>

    </div>
  );
}
