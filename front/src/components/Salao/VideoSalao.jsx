import video from "../../assets/videoSalao.mp4";

export function VideoSalao() {
    return (
        <div className="lg:w-full lg:h-screen lg:flex lg:justify-center lg:items-center lg:bg-zinc-950/40">
            <video autoPlay muted loop className="object-cover w-full lg:w-auto lg:h-screen">
                <source src={video} type="video/mp4" />
            </video>
        </div>
    )
}