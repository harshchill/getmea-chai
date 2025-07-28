import BlurText from "@/components/BlurText";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      
      <div className="flex flex-col gap-4 items-center justify-center mt-24 text-white ">
        <BlurText
          text="Get Me a Chai!"
          delay={250}
          animateBy="words"
          direction="top"
          className="text-4xl text-white font-bold "
        />
        <div>
          A croundfunding platform to fund your favorite Creator with some Chai
        </div>
        <div className="buttons flex  gap-4 m-5">
          <button className="group relative z-0 h-12 overflow-hidden overflow-x-hidden rounded-md bg-slate-900 px-4 py-1 text-neutral-50">
            <span className="relative z-10 font-semibold">Get started</span>
            <span className="absolute inset-0 overflow-hidden rounded-md">
              <span className="absolute left-0 aspect-square w-full origin-center translate-x-full rounded-full bg-emerald-400 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
            </span>
          </button>
          <button className="group relative h-12 overflow-hidden overflow-x-hidden rounded-md bg-slate-900 px-4 py-1 text-neutral-50">
            <span className="relative z-10 font-semibold">Read More</span>
            <span className="absolute inset-0 overflow-hidden rounded-md">
              <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-emerald-400 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
            </span>
          </button>
        </div>
        <div className="line h-[1px] w-[90%] mx-auto bg-slate-200"></div>
        <div className="container w-full md:w-[80%] flex flex-col md:flex-row justify-center items-center gap-5">
          <div className="cards">f</div>
          <div className="cards">g</div>
          <div className="cards">h</div>
          <div className="cards">j</div>
        </div>
      </div>
    </main>
  );
}
