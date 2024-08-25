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
            <div className={className + " shadow-lg shadow-black/30 bg-light-acc/35 rounded-3xl flex flex-row text-center items-center p-8 text-2xl"}>
                <div>{wip ? "wip" : ""}</div>
                {name}
                <div className="image-container flex flex-col justify-center h-full items-center text-center center pb-5">
                    {imageUrls}
                </div>
                < div className="caption-container items-center text-center flex flex-col font-black">
                    <div>{description}</div>
                    {tech.map(technology => <div>{technology.name}</div>)}
                </div>
                {soureCodeUrl}
                {url}
            </div >
        </>
    );
};

export default ProjectCard;
