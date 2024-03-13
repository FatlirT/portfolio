import fields from '@/assets/fields';
import projects from '@/assets/projects';
import Footer from '@/components/Footer';
import Nebula from '@/components/Nebula';
import Splash from '@/components/Splash';
import Typewriter from '@/components/Typewriter';
import Image from 'next/image';

export default function Home() {

  const projs = projects;
  const felds = fields;

  return (
    <>
      <Splash></Splash>
      <main id="main" className="drop-shadow-2xl overflow-visible flex flex-col items-center justify-between w-full max-w-7xl mx-auto px-16 mb-16">

        <div className="flex flex-row justify-between w-full items-center">
          <div className='w-full flex-col'>
            <h1 className="text-5xl font-black w-full justify-start flex">Hey! <span>👋</span></h1><br /><br /><br className="" />
            <div className="w-full mb-16">
              <div className="pb-2">
                <h1 className="inline-block text-xl">I&apos;m </h1><h1 className='font-bold inline-block text-xl pl-[7px]'>@</h1><h1 className="inline-block text-2xl font-bold pr-[7px]">FatlirT,</h1><h1 className="inline-block text-xl">the</h1>
              </div>
              <Typewriter fields={felds}></Typewriter>
              <h1 className='text-xl'>enthusiast!</h1>
            </div>
          </div>
          <div className="relative">
            <div className='absolute'>
              <div className="absolute">
                <Nebula></Nebula>
              </div>
            </div>
          </div>
        </div>
      </main >

      <div id="projects" className="w-full flex flex-col mb-16 justify-center items-center pt-32">
        <h1 className='text-4xl font-bold mb-16'>Projects</h1>
        <Nebula></Nebula>
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          {
            projects.map((project) =>
              <div key={project.name}>
                <h1>{project.name}</h1>
                <h2>{project.description}</h2>
                <h3>{project.sourceCode}</h3>
                <h4>{project.webApp}</h4>
              </div>
            )}
        </div>
      </div>


      <div id="about" className="w-full flex flex-col mb-16 justify-center items-center pt-32">
        <h1 className='text-4xl font-bold mb-16'>About me</h1>
        <Nebula></Nebula>
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <p>ABOUTME</p>
        </div>
      </div>

      <div id="featured-articles" className="w-full flex flex-col mb-16 justify-center items-center pt-32">
        <h1 className='text-4xl font-bold mb-16'>Featured Articles</h1>
        <Nebula></Nebula>
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <p>ABOUTME</p>
        </div>
      </div>
    </>
  );
}
