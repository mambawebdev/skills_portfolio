import memojiImage from '@/assets/images/asian_memoji_no_braces.png'
import ArrowDown from '@/assets/icons/arrow-down.svg'
import StarIcon from '@/assets/icons/star.svg'
import Image from 'next/image';
import grainImage from '@/assets/images/grain.jpg'
import { HeroOrbit } from '@/components/HeroOrbit';
import SparkleIcon from '@/assets/icons/sparkle.svg'
 
export const HeroSection = () => {
  return <div className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>
            <div className="absolute inset-0 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
                <div className="absolute inset-0 -z-30 opacity-5" style={{ backgroundImage: `url(${grainImage.src})`}}></div>
                <div className="size-[620px] hero-ring"></div>
                <div className="size-[870px] hero-ring"></div>
                <div className="size-[1120px] hero-ring"></div>
                <div className="size-[1370px] hero-ring"></div>
                <HeroOrbit size={800} rotation={-72}>
                  <StarIcon className="size-28 text-emerald-300"/>
                </HeroOrbit>
                <HeroOrbit size={500} rotation={18}>
                  <StarIcon className="size-12 text-emerald-300"/>
                </HeroOrbit>
                <HeroOrbit size={620} rotation={100}>
                  <StarIcon className="size-6 text-emerald-300"/>
                </HeroOrbit>
                <HeroOrbit size={345} rotation={-10}>
                  <SparkleIcon className="size-6 text-emerald-300/20"/>
                </HeroOrbit>
                <HeroOrbit size={400} rotation={77}>
                  <SparkleIcon className="size-4 text-emerald-300/20"/>
                </HeroOrbit>
                <HeroOrbit size={530} rotation={200}>
                  <SparkleIcon className="size-10 text-emerald-300/20"/>
                </HeroOrbit>
                <HeroOrbit size={710} rotation={145}>
                  <SparkleIcon className="size-14 text-emerald-300/20"/>
                </HeroOrbit>
                <HeroOrbit size={720} rotation={77}>
                  <div className="size-2 bg-emerald-300/10 rounded-full"></div>
                </HeroOrbit>
                <HeroOrbit size={520} rotation={-41}>
                  <div className="size-2 bg-emerald-300/10 rounded-full"></div>
                </HeroOrbit>
                <HeroOrbit size={650} rotation={-5}>
                  <div className="size-2 bg-emerald-300/10 rounded-full"></div>
                </HeroOrbit>
            </div>
            <div className="container">
              <div className="flex flex-col items-center">
                <Image src={memojiImage} className='size-[100px]' alt='Person peaking'/>
                <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
                  <div className="bg-green-500 size-2.5 rounded-full"></div>
                  <div className="text-sm font-medium">Available for new projects</div>
                </div>
              </div>
                <div className="max-w-lg mx-auto">
                  <h1 className='font-serif text-3xl text-center mt-8 md:text-5xl'>Building Incredible User Experiences</h1>
                  <p className="mt-4 text-center text-white/60 md:text-lg">
                    I specialize in making the web look and feel nice, while high-performing and being highly functional. Let us discuss your next idea.
                  </p>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
                  <a
                    href="/tonyresume.docx"
                    download="Tony_Resume.docx"
                    className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl"
                  >
                    <span className="font-semibold">Download Resume</span>
                    <ArrowDown className="size-4" />
                  </a>
                  <button className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl'>
                    <a
                      href="mailto:yourname@email.com?subject=Project Inquiry&body=Hi Tony,%0D%0A%0D%0AI'd like to talk about..."
                      className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl"
                    >
                      <span>🙋‍♂️</span>
                      <span className='font-semibold'>Let's Connect</span>
                    </a>
                    
                  </button>
                </div>
            </div>
        </div>;
};


/* https://www.youtube.com/watch?v=ELssXP1sTC8&t=273s 1:17 */