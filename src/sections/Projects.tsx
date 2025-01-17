import Tatrpl from "@/assets/images/Tatrpl.png";
import BeMCU from "@/assets/images/bemcu.png";
import SDPPI from "@/assets/images/sdppi.png";
import pluit from "@/assets/images/pluit.png";
import Image from "next/image";
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';
import SectionHeader from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "PT Berau Coal",
    year: "2024",
    title: "BeHealth Website",
    results: [
      { title: "Enhanced user experience by 60%" },
    ],
    link: "https://behealth.beraucoal.co.id/login",
    button: "View Website",
    image: BeMCU,
  },
  {
    company: "Gemastik XVII",
    year: "2024",
    title: "UX Finalist - PluIT",
    results: [
      { title: "Finalist of UX Division on GEMASTIK 2024" },
      { title: "Testing with 84 SUS Result" },
      { title: "Increased SMEs Inovation" },
    ],
    link: "https://s.id/ProtoPionir_Prototype",
    button: "View Prototype",
    image: pluit,
  },
  {
    company: "Kementerian Komunikasi dan Digital Republik Indonesia (KOMINFO)",
    year: "2024",
    title: "SDPPI Website",
    results: [
      { title: "Enhanced user experience by 70%" },
      { title: "Expanded customer reach by 75%" },
    ],
    link: "https://portaldata.postel.go.id/login",
    button: "Not yet Published",
    image: SDPPI,
  },
  {
    company: "DTEDI SV UGM",
    year: "2024",
    title: "Final Project Dashboard",
    results: [
      { title: "Enhanced user experience by 40%" },
    ],
    link: "#",
    button: "Not yet Published",
    image: Tatrpl,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24 -translate-y-[60px]" id="projects" >
      <div className="container" >
        <SectionHeader eyebrow="Real-World Results" title="Feature Projects" description="See how I transformed concepts into engaging digital experiences." />
        <div className="flex flex-col md:mt-20 mt-10 gap-20" >
          {portfolioProjects.map((project , projectIndex) => (
            <Card key={project.title} className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:px-20 lg:pt-16 sticky" style={{ top:`calc(100px + ${projectIndex * 40}px)` }}>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16" >
                  <div className="bg-gradient-to-r from-slate-300 to-sky-400 text-transparent bg-clip-text inline-flex font-bold uppercase tracking-widest text-sm gap-2">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">{project.title}</h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      // <li key={project.title}>{result.title}</li>
                      <li key={project.title} className="flex gap-2 text-sm md:text-base text-white/50" >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 " >
                      <span>{project.button}</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-lg" />
                </div>
              </div>
            </Card>
          ))}
        </div>

      </div>

    </section>
  );
};
