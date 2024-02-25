import fields from '@/assets/fields';
import projects from '@/assets/projects';
import Splash from '@/components/Splash';
import Typewriter from '@/components/Typewriter';
import Image from 'next/image';

export default function Home() {

  const projs = projects;
  const felds = fields;

  return (
    <>
      <Splash></Splash>
      <main className="flex flex-col items-center justify-between w-full max-w-7xl mx-auto px-16 mb-16">

        <div className="flex flex-row justify-between w-full items-center">
          <div className='w-full flex-col'>
            <h1 className="text-5xl font-black w-full justify-start flex">Hey! <span id="wave">👋</span></h1><br /><br /><br className="" />
            <div className="w-full mb-16">
              <div className="pb-2">
                <h1 className="inline-block text-xl">I&apos;m </h1><h1 className='font-bold inline-block text-xl pl-[7px]'>@</h1><h1 className="inline-block text-2xl font-bold pr-[7px]">FatlirT,</h1><h1 className="inline-block text-xl">the</h1>
              </div>
              <Typewriter fields={felds}></Typewriter>
              <h1 className='text-xl'>enthusiast!</h1>
            </div>
          </div>
          <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic   after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-sky-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0180ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1] mb-16">
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
              src="/images/ft.png"
              alt="Next.js Logo"
              width={360}
              height={74}
              priority
            />
          </div>
        </div>



        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">

          {
            projects.map((project) =>
              <div>
                <h1>{project.name}</h1>
                <h2>{project.description}</h2>
                <h3>{project.sourceCode}</h3>
                <h4>{project.webApp}</h4>
              </div>
            )}
        </div>



      </main >
    </>
  );
}
