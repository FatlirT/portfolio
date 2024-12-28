import Image from 'next/image';
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
            <div id="project-card-main" className="w-full max-w-full overflow-clip text-wrap sm:shadow-lg shadow-dark-acc/30 sm:bg-light-acc/35 rounded-3xl sm:p-8 text-xl relative flex flex-col items-center text-center justify-center space-y-6 space-y-reverse">
                <div id='wip-hazard-tape' className={(wip ? "" : "hidden") + " overflow-clip bg-black top-2 sm:shadow-slate-700/70 shadow-lg -left-16 absolute text-center justify-center items-center sm:text-2xl text-[1rem] -rotate-45 w-60 h-9 sm:h-12"}>
                    <div className='bg-yellow-300 w-9 rotate-[22.5deg] h-20 absolute -top-1 left-1' ></div>
                    <div className='bg-yellow-300 w-9 rotate-[22.5deg] h-20 absolute -top-3 left-[35%] -z-30' ></div>
                    <div className='bg-yellow-300 w-9 rotate-[22.5deg] h-20 absolute -top-4 left-2/3' ></div>
                    <div className='bg-white/10 shadow-white/5 shadow-xl blur w-60 h-20 absolute -top-16 left-0'></div>
                    <h1 className='absolute sm:top-2 top-1 left-20 italic font-black drop-shadow-[0_1.5px_6px_rgba(0,0,0,0.8)]'>WIP</h1>
                </div>

                <div id="project-card-top" className="font-black text-4xl pb-6 pt-4 underline ">
                    {name}
                </div>
                <div id="project-card-bot" className="w-full flex-col flex lg:flex-row justify-between space-y-6 md:px-8 lg:space-x-8">
                    <div id="project-card-bot-lhs" className="lg:w-[30rem] w-full flex justify-center">

                        <div id="project-image-carousel-container" className="lg:w-full w-full md:w-3/4">
                            <ImageCarousel images={imageUrls} />
                        </div>


                    </div>
                    <div id="project-card-bot-rhs" className="w-full space-y-6 flex flex-col items-center justify-between break-words">
                        <div id="project-desc">
                            <div>{description} </div>
                        </div>
                        <div id="project-card-bot-rhs-bot" className="space-y-6 w-full">
                            <div id="project-links" className="w-full flex flex-row justify-center space-x-4">
                                <a target="_blank" href={soureCodeUrl} id="project-source" className="bg-blue-500/70 px-5 py-3 rounded-2xl active:bg-light-acc hover:bg-blue-400/70">
                                    Code
                                </a>
                                <a target="_blank" href={url} id="project-hosted" className=" bg-green-500/70 px-5 py-3 rounded-2xl active:bg-light-acc hover:bg-green-400/70">
                                    View
                                </a>
                            </div>
                            <div id="project-stack" className='flex flex-row space-x-4 items-center justify-center'>
                                <div className="py-4 flex lg:flex-row items-center text-center flex-col justify-center lg:space-x-6 font-extralight flex-wrap bg-white/45 lg:py-2 px-8 rounded-3xl md:space-y-0 space-y-6 space-y-reverse">
                                    <h1 className='lg:pb-0 pb-4'>Stack:</h1>
                                    <div id="project-skills-grid" className='grid md:grid-cols-3 grid-cols-4 lg:grid-flow-col gap-4 items-center'>
                                        {tech.map(technology => <div key={technology.name}>
                                            <Image
                                                src={technology.imageUrl}
                                                alt={technology.name}
                                                width={50} // Set an appropriate width
                                                height={50} // Set an appropriate height
                                                className="rounded" // Add Tailwind classes for styling
                                                title={technology.name}
                                            />
                                        </div>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        </>
    );
};

export default ProjectCard;
