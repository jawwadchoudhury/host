import Link from "next/link";
import Image from "next/image";
import Header from "./components/Header";
import './home.css';

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

    </div>
  );
}
