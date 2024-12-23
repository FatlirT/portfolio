import { ImgHTMLAttributes } from "react";
import ImageCarousel from './ImageCarousel';

interface props {
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


const ProjectCard = ({ name, description, imageUrls, tech, wip, soureCodeUrl, url }: props) => {
    return (
        <>
            <div id="project-card-main" className="w-full max-w-full overflow-clip text-wrap shadow-lg shadow-dark-acc/30 bg-light-acc/35 rounded-3xl p-8 text-xl active:opacity-80 cursor-pointer relative flex flex-col items-center text-center justify-center space-y-6 space-y-reverse">
                <div id='wip-hazard-tape' className={(wip ? "" : "hidden") + " overflow-clip bg-black top-2 shadow-slate-700/70 shadow-lg -left-16 absolute text-center justify-center items-center sm:text-2xl text-[1rem] -rotate-45 w-60 h-9 sm:h-12"}>
                    <div className='bg-yellow-300 w-9 rotate-[22.5deg] h-20 absolute -top-1 left-1' ></div>
                    <div className='bg-yellow-300 w-9 rotate-[22.5deg] h-20 absolute -top-3 left-[35%] -z-30' ></div>
                    <div className='bg-yellow-300 w-9 rotate-[22.5deg] h-20 absolute -top-4 left-2/3' ></div>
                    <div className='bg-white/10 shadow-white/5 shadow-xl blur w-60 h-20 absolute -top-16 left-0'></div>
                    <h1 className='absolute sm:top-2 top-1 left-20 italic font-black drop-shadow-[0_1.5px_6px_rgba(0,0,0,0.8)]'>WIP</h1>
                </div>

                <div id="project-card-top" className="font-black text-4xl pb-6 pt-4">
                    {name}
                </div>
                <div id="project-card-bot" className="w-full flex-col flex lg:flex-row justify-between space-y-6 px-8 lg:space-x-8">
                    <div id="project-card-bot-lhs" className="lg:w-[30rem] w-full flex justify-center">

                        <div id="project-image-carousel-container" className="lg:w-full w-full md:w-3/4">
                            <ImageCarousel images={["/images/seaborn.svg", "/images/prom.svg", "/images/scikit.svg"]} />
                        </div>


                    </div>
                    <div id="project-card-bot-rhs" className="w-full space-y-6 flex flex-col items-center h-full">
                        <div id="project-desc">
                            <div>{description}</div>
                        </div>
                        <div id="project-links">
                            <a href="" id="project-source">
                                {soureCodeUrl}
                            </a>
                            <a href="" id="project-hosted">
                                {url}
                            </a>
                        </div>
                        <div id="project-stack">
                            < div className="caption-container items-center text-center flex flex-row justify-center space-x-6 font-black flex-wrap">
                                {tech.map(technology => <p key={technology.name}>{technology.name}</p>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ProjectCard;
