import fields from '@/data/fields';
import projects from '@/data/projects';
import Nebula from '@/components/Nebula';
import Typewriter from '@/components/Typewriter';
import skills from '@/data/skills';
import SkillCard from '@/components/SkillCard';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {

  // Format Project Data

  const skillsMap: {
    [key: string]: {
      name: string;
      imageUrl: string;
    };
  } = {};

  Object.keys(skills).map(category => skills[category]).flat().forEach(skill => {
    const { future, ...projectSkill } = skill;
    skillsMap[skill.name.toLowerCase()] = projectSkill;
  }
  );

  return (
    <>
      <div className="flex flex-row justify-between w-full items-center">
        <div className='w-full flex-col'>
          <h1 className="text-5xl font-black w-full justify-start flex">Hey! <span>👋</span></h1><br /><br /><br className="" />
          <div className="w-full mb-16">
            <div className="pb-2">
              <h1 className="inline-block text-xl">I&apos;m </h1><h1 className='font-bold inline-block text-xl pl-[7px]'>@</h1><h1 className="inline-block text-2xl font-bold pr-[7px]">FatlirT,</h1><h1 className="inline-block text-xl">the</h1>
            </div>
            <Typewriter fields={fields}></Typewriter>
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


      <div id="skills" className="w-full flex flex-col mb-16 justify-center items-center pt-32">
        <h1 className='text-4xl font-bold mb-16 drop-shadow-xl'>Skills</h1>
        {
          Object.keys(skills).map((skillCategory) => {
            return <>
              <h1 className='text-3xl font-black mb-10'>{skillCategory}</h1>
              <div key={skillCategory} className="mb-32 grid text-center lg:sm:grid-cols-4 lg:text-left">
                {
                  skills[skillCategory].map((skill) =>
                    <div key={skill.name} className={'flex flex-row justify-center m-4 ' + (skill.future ? 'saturate-0 opacity-50' : '')}>
                      <SkillCard className='w-44' skillImageUrl={skill.imageUrl} skillName={skill.name} skillFuture={skill.future}></SkillCard>
                    </div>

                  )
                }
              </div>
            </>;
          })
        }
      </div>

      <div id="projects" className="w-full flex flex-col mb-16 justify-center items-center pt-32">
        <h1 className='text-4xl font-bold mb-16 drop-shadow-xl'>Projects</h1>
        <div className="mb-32 flex flex-col text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          {
            projects.map((project) =>
              <ProjectCard name={project.name} description={project.description} imageUrls={project.imageUrls} tech={project.tech.map(tech => {
                return skillsMap[tech];
              })} soureCodeUrl={project.sourceCodeUrl} url={project.url} wip={project.wip} className='mb-6'></ProjectCard>
            )
          }
        </div>
      </div >

      <div id="featured_articles" className="w-full flex flex-col mb-16 justify-center items-center pt-32">
        <h1 className='text-4xl font-bold mb-16 drop-shadow-xl'>Featured Articles</h1>
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <p>COMING SOON</p>
        </div>
      </div>
    </>
  );
}