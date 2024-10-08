import Image from 'next/image';
import { ImgHTMLAttributes } from "react";

interface props extends ImgHTMLAttributes<HTMLImageElement> {
    name: string;
    description: string,
    imageUrls: string[],
    tech:
    {
        name: string,
        imageUrl: string;
    }[],
    soureCodeUrl: string,
    url: string,
    wip: boolean;
};


const ProjectCard = ({ name, description, imageUrls, tech, wip, className, soureCodeUrl, url }: props) => {
    return (
        <>
            <div className={"w-full max-w-full overflow-clip text-wrap shadow-lg shadow-dark-acc/30 bg-light-acc/35 rounded-3xl flex flex-row text-center items-center p-8 text-xl sm:text-2xl active:opacity-80 cursor-pointer relative " + className}>
                <div id='wip-hazard-tape' className={(wip ? "" : "hidden") + " overflow-clip bg-black top-2 shadow-slate-700/70 shadow-lg -left-16 absolute text-center justify-center items-center sm:text-2xl text-[1rem] -rotate-45 w-60 h-9 sm:h-12"}>

                    <div className='bg-yellow-300 w-9 rotate-[22.5deg] h-20 absolute -top-1 left-1' ></div>
                    <div className='bg-yellow-300 w-9 rotate-[22.5deg] h-20 absolute -top-3 left-[35%] -z-30' ></div>
                    <div className='bg-yellow-300 w-9 rotate-[22.5deg] h-20 absolute -top-4 left-2/3' ></div>
                    <div className='bg-white/10 shadow-white/5 shadow-xl blur w-60 h-20 absolute -top-16 left-0'></div>
                    <h1 className='absolute sm:top-2 top-1 left-20 italic font-black drop-shadow-[0_1.5px_6px_rgba(0,0,0,0.8)]'>WIP</h1>
                </div>
                {name}
                <div className="image-container flex flex-col justify-center h-full items-center text-center center pb-5">
                    {imageUrls}
                </div>
                < div className="caption-container items-center text-center flex flex-col font-black">
                    <div>{description}</div>
                    {tech.map(technology => <div key={technology.name}>{technology.name}</div>)}
                </div>
                {soureCodeUrl}
                {url}
            </div >
        </>
    );
};

export default ProjectCard;
