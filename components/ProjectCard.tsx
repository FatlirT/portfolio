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
            <div className={className + " overflow-clip shadow-lg shadow-black/30 bg-light-acc/35 rounded-3xl flex flex-row text-center items-center p-8 text-2xl active:opacity-80 cursor-pointer relative"}>
                <div id='wip-hazard-tape' className={(wip ? "" : "hidden") + " overflow-clip bg-black top-2 shadow-gray-800 shadow-lg -left-16 absolute -rotate-45 w-60 h-12 p-0"}>

                    <div className='bg-yellow-300 w-10 rotate-12 h-20 absolute top-0 left-0' ></div>
                    <div className='bg-yellow-300 w-10 rotate-12 h-20 absolute -top-2 left-1/3 -z-30' ></div>
                    <div className='bg-yellow-300 w-10 rotate-12 h-20 absolute -top-2 left-2/3' ></div>
                    <div className='bg-white/10 shadow-white/5 shadow-xl w-60 h-20 absolute -top-16 left-0'></div>
                    <h1 className='absolute top-2 left-20 drop-shadow-md italic font-black'>WIP</h1>
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
