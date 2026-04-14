import realBoardsPage from "@/assets/images/Real-BoardsV2.png"
import phaserGame from "@/assets/images/phaserGame.png";
import CheckIcon from '@/assets/icons/check-circle.svg'
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'
import grainImage from '@/assets/images/grain.jpg'
import Image from "next/image";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";

const portfolioProjects = [
  {
    company: "Freelance Project",
    year: "2025",
    title: "Real Boards",
    results: [
      { title: "Enhanced productivity by 40%" },
      { title: "Improved organization skills 50%" },
      { title: "Increased programming knowledge 100%" },
    ],
    link: "https://real-boards.vercel.app",
    image: realBoardsPage,
  },
  {
    company: "Freelance Project",
    year: "2024",
    title: "PhaserJS Game",
    results: [
      { title: "Increased JavaScript knowledge 100%" },
      { title: "Enhanced Technical Skills 45%" },
      { title: "Simulating real-world productivity 30%" },
    ],
    link: "https://phaser.io/tutorials/making-your-first-phaser-3-game",
    image: phaserGame,
  },
];

export const ProjectsSection = () => {
  return <section id="#projects" className="pb-16 lg:py-24">
    <div className="container">
      <SectionHeader title="Featured Products" eyebrow="Real World Projects" desc="Watch how I have transformed your vision into real life digital experiences" />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {
            portfolioProjects.map((project) => (
              <Card key={project.title} className="px-8 md:px-10 pt-8 pb-0 md:pt-12 lg:pt-16 lg:px-20">
                  <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                    <div className="lg:pb-16">
                      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                        <span>{project.company}</span> 
                        <span>&bull;</span>
                        <span>{project.year}</span> 
                      </div>                 
                    
                    <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">{project.title}</h3>
                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                    <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                      {
                        project.results.map((result, index) => (
                          <li key={index} className="flex gap-2 text-sm text-white/50 md:text-base">
                            <CheckIcon className="size-5" />
                            <span className="">{result.title}</span>
                          </li>
                        ))
                      }
                    </ul>
                    <a href={project.link}>
                      <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                        <span>View Live Site</span>
                        <ArrowUpRightIcon className="size-5 md:size-6"/>
                      </button>
                    </a>
                    </div>
                    <div className="relative">
                      <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"/>
                    </div>
                </div>
              </Card>
            ))
          }
        </div>
    </div>
  </section>;
};

/* 1:52:00 Projects https://www.youtube.com/watch?v=ELssXP1sTC8&t=273s Desktop View */
