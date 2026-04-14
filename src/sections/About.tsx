import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from '@/assets/icons/star.svg'
import BookImage from '@/assets/images/book-cover.png'
import MapImage from '@/assets/images/mapv1.png'
import SmileMemoji from '@/assets/images/asian_memoji_no_braces.png'
import Image from "next/image";

import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";



const hobbies = [
  {
    title: 'Basketball',
    emoji: '🏀',
    left: '50%',
    top: '50%',
  },
  {
    title: 'Painting',
    emoji: '🎨',
    left: '52%',
    top: '1%',
  },
  {
    title: 'Painting',
    emoji: '🎨',
    left: '52%',
    top: '1%',
  },
  {
    title: 'Photography',
    emoji: '📷',
    left: '10%',
    top: '28%',
  },
  {
    title: 'Fitness',
    emoji: '💪',
    left: '17%',
    top: '43%',
  },
  {
    title: 'Cooking',
    emoji: '👨‍🍳',
    left: '15%',
    top: '70%',
  },
  {
    title: 'Hiking',
    emoji: '🚶‍♂️',
    left: '20%',
    top: '0.3%',
  },
  {
    title: 'Music',
    emoji: '🎵',
    left: '58%',
    top: '30%',
  },
]

export const AboutSection = () => {
  return <div className="py-20">
      <div className="container" id="#projects">

      
      <SectionHeader eyebrow="About Me" title="A Real Look at My Environment" desc="Learn more about what inspires me to be a developer." />
      <div className="mt-20 flex flex-col gap-8">
        <div className="md:grid md:grid-cols-5 md:gap-8 flex flex-col gap-8">
          <Card className="h-[320px] md:col-span-2">
            <CardHeader title="My Reads" desc="Explore books that shape my vision." className="md:-mt-3.5"/>
            <div className="w-40 mx-auto mt-8">
              <Image src={BookImage} alt="Book Cover" className=""/>
            </div>
          </Card>
          <Card className="h-[320px] p-0 md:col-span-3">
            <CardHeader title="My Toolbox" desc="Explore all the tools that I have in my resources to craft remarkable digital experiences." className="px-6 pt-6 md:-mt-10"/>
            <ToolboxItems toolItems={ToolboxItems} className="mt-6" />
            <ToolboxItems toolItems={ToolboxItems} className="mt-6" itemsWrapperClassName="-translate-x-1/2" />
          </Card>
        </div>
        <Card className="h-[320px] p-0 flex flex-col">
        <CardHeader title="Beyond the Code" desc="Explore my interests and hobbies beyond the digital realm." className="px-6 py-6"/>
          <div className="relative flex-1">
            {
              hobbies.map(((hobby,ind) => (
                <div key={ind} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute" style={{left: hobby.left, top: hobby.top}}>
                  <span className="font-medium text-gray-950">{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
              )))
            }
          </div>
          
        </Card>
        <Card className="h-[320px] p-0 relative">
            <Image src={MapImage} alt="Map" className="h-full w-full object-cover"/>
            <div 
            className=
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
              <Image src={SmileMemoji} alt="smiling-emoji" className="size-20"/>
            </div>
        </Card>
      </div>
    </div>
  </div>;
};
