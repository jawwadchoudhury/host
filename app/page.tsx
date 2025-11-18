import Link from "next/link";
import Image from "next/image";
import Header from "./components/Header"
import './home.css'

export default function Home() {
  return (
    <div className="">
      <Header/>

      <div className="merch">
        <Link href={'https://buy.stripe.com/test_5kQ5kF1BO9or4wV1ma6Zy00'} target="_blank">
          <div className="merch-card">
            <Image src="/host-eye-t-shirt.png" width={250} height={250} alt="HOST Eye T-Shirt" className="merch-card-image"/>
            <p className="merch-title">£7 - HOST EYE T-SHIRT</p>
          </div>
        </Link>
      </div>

    </div>
  );
}
