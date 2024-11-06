import Image from "next/image";
import memojiImage from "@/assets/images/avatarGua.png";
// import memojiImage from "@/assets/images/memoji-computer.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from '@/assets/images/grain.jpg';
import classNames from 'classnames';
import HeroOrbit from "@/components/HeroOrbit";
import StarIcon from '@/assets/icons/star.svg';
import SparkleIcon from '@/assets/icons/sparkle.svg';


const ring = "absolute inset-0 border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-cyan-500/10"

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%, transparent)] ">
        <div className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}>
        </div>
        {/* <div className={`size-[620px] ${ring}`}></div> */}
        <div className={classNames('size-[320px]', ring)}></div>
        <div className={classNames('size-[720px]', ring)}></div>
        <div className={classNames('size-[1020px]', ring)}></div>
        <div className={classNames('size-[1220px]', ring)}></div>

        <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="3s" >
          <SparkleIcon className='size-8 text-cyan-300/20' />
        </HeroOrbit>

        <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration="32s" shouldSpin spinDuration="3s">
          <SparkleIcon className='size-5 text-cyan-300/20' />
        </HeroOrbit>

        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34">
          <div className='size-2 rounded-full bg-cyan-300/20' />
        </HeroOrbit>

        <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration="36s" shouldSpin spinDuration="3s">
          <SparkleIcon className='size-10 text-cyan-300/20' />
        </HeroOrbit>

        <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration="38s" shouldSpin spinDuration="6s">
          <StarIcon className='size-12 text-cyan-300' />
        </HeroOrbit>

        <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration="38s" shouldSpin spinDuration="6s">
          <StarIcon className='size-8 text-cyan-300' />
        </HeroOrbit>

        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="40s">
          <div className='size-2 rounded-full bg-cyan-300/20' />
        </HeroOrbit>

        <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration="42s" shouldSpin spinDuration="3s">
          <SparkleIcon className='size-14 text-cyan-300/20' />
        </HeroOrbit>

        <HeroOrbit size={720} rotation={0} shouldOrbit orbitDuration="44s">
          <div className='size-3 rounded-full bg-cyan-300/20' />
        </HeroOrbit>

        <HeroOrbit size={800} rotation={45} shouldOrbit orbitDuration="46s" shouldSpin spinDuration="6s">
          <StarIcon className='size-28 text-cyan-300' />
        </HeroOrbit>
      </div>


      <div className="container -translate-y-[60px]">
        <div className="flex flex-col items-center">
          <Image className="size-[100px]" src={memojiImage} alt="hero"></Image>

          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-cyan-500 size-2.5 rounded-full relative">
              <div className="bg-cyan-500 absolute inset-0 animate-ping-large rounded-full
              "></div>
            </div>
            <div className="text-sm font-medium">Available for new projects</div>
          </div>

        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl  text-center mt-8 tracking-wide">Hi, I&apos;m Shyra Athaya</h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
          As a Developer, System Analyst, and UI/UX Designer, I&apos;m skilled in creating user-focused digital solutions. She combines technical expertise with strong problem-solving and collaboration skills to deliver impactful products that align with business goals
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className='size-4 ' />
          </button>
          <a href="https://www.linkedin.com/in/shyrath3104" target="_blank" >
            <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
              <span>👋</span>
              <span className="font-semibold">Let`s Connect</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};