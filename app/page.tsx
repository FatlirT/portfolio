import fields from '@/data/fields';
import projects from '@/data/projects';
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
      <div id="hero" className="drop-shadow-[0_1.5px_6px_rgba(0,0,0,0.3)] flex flex-row w-full justify-center sm:text-center sm:justify-between text-center shrink-1">
        <div className='flex flex-col text-nowrap text-center sm:text-left'>
          <h1 className="text-5xl font-black mb-8">Hey! <span>👋</span></h1>
          <div className="w-full mb-16 flex flex-col justify-center">
            <div className="pb-2">
              <h1 className="inline-block text-xl">I&apos;m </h1><h1 className='font-bold inline-block text-xl pl-[7px]'>@</h1><h1 className="inline-block text-2xl font-bold pr-[7px]">FatlirT,</h1><h1 className="inline-block text-xl">the</h1>
            </div>
            <div id="tw-container" className='w-full text-center flex sm:justify-start justify-center'>
              <Typewriter className="sm:text-3xl pb-2" fields={fields}></Typewriter>
            </div>

            <h1 className='text-xl'>enthusiast!</h1>
          </div>
        </div>
      </div>


      <div id="skills" className="w-full flex flex-col mb-16 justify-center items-center pt-32 text-center">
        <h1 className='text-4xl font-bold mb-16 drop-shadow-[0_1.5px_6px_rgba(0,0,0,0.3)]'>Skills</h1>
        {
          Object.keys(skills).map((skillCategory) => {
            return <>
              <h1 className='text-3xl font-black mb-10 drop-shadow-[0_1.5px_6px_rgba(0,0,0,0.3)]'>{skillCategory}</h1>
              <div
                key={skillCategory}
                className="grid md:gap-8 gap-4 mb-32 text-left lg:grid-cols-4 md:grid-cols-3 grid-cols-3"
              >
                {skills[skillCategory].map((skill) => (
                  <SkillCard
                    key={skill.name}
                    skillImageUrl={skill.imageUrl}
                    skillName={skill.name}
                    skillFuture={skill.future}
                    className="md:text-2xl text-[3vw]"

                  />
                ))}
              </div>

            </>;
          })
        }
      </div>

      <div id="projects" className="w-full flex flex-col mb-16 justify-center items-center pt-32">
        <h1 className='text-4xl font-bold mb-16 drop-shadow-xl'>Projects</h1>
        <div className="text-wrap w-full mb-32 flex flex-col text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:text-left space-y-44">
          {
            projects.map((project) =>
              <ProjectCard key={project.name} name={project.name} description={project.description} imageUrls={project.imageUrls} tech={project.tech.map(tech => {
                return skillsMap[tech];
              })} soureCodeUrl={project.sourceCodeUrl} url={project.url} wip={project.wip}></ProjectCard>
            )
          }
        </div>
      </div >

      <div id="featured_articles" className="w-full flex flex-col mb-16 justify-center items-center text-center pt-32">
        <h1 className='text-4xl font-bold mb-16 drop-shadow-xl'>Featured Articles</h1>
        <div className="mb-32 grid text-center lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
          {/* DISPLAY 3 MOST POPULAR ARTICLES USING ARTICLE VIEW COUNT */}
          <p>GRID OF MOST POPULAR ARTICLES CARDS WITH TITLE, AUTHOR, DATE AND MAIN IMAGE</p>
          <p>GRID OF MOST POPULAR ARTICLES CARDS WITH TITLE, AUTHOR, DATE AND MAIN IMAGE</p>
          <p>GRID OF MOST POPULAR ARTICLES CARDS WITH TITLE, AUTHOR, DATE AND MAIN IMAGE</p>
        </div>
      </div>
    </>
  );
}