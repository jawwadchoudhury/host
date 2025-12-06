import Image from "next/image";
import './Header.css';
import MuxPlayer from "@mux/mux-player-react";
import { createClient } from "@vercel/edge-config";

export default async function Header() {
    const config = createClient(process.env.EDGE_CONFIG);
    const playbackId = await config.get<string>("header-video-playback-id")
    return (
        <header>
            <Image src="/logo.svg" alt="HOST Logo" width={200} height={50} className="logo-svg"/>
            <div className="header-card">
                <MuxPlayer
                    streamType="on-demand"
                    playbackId={playbackId!}
                    style={{ aspectRatio: '16/9' }}
                    accentColor="#000"
                />
            </div>
        </header>
    )
}