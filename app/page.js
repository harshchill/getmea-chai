import BlurText from "@/components/BlurText";
import SpotlightCard from "@/components/SpotlightCard";

export default function Home() {
  return (
    <main className="">
      <div className="absolute top-0 z-[-2] text-white h-[230vh] w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>

      <div className="flex flex-col gap-4 items-center justify-center mt-24 p-2 text-white ">
        <div className="flex gap-2">
          <BlurText
            text="Get Me a Chai!"
            delay={250}
            animateBy="words"
            direction="top"
            className="text-5xl text-white font-bold m-4"
          />
          <img className="w-16 invert animate-pulse" src="/tea.gif" alt="video"></img>
        </div>
        <div className="text-center">
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
        <div className="line h-[1px] w-[90%] mx-auto my-8 bg-slate-300"></div>
        <div className="my-6 font-semibold text-2xl">Your Fans fund you !</div>
        <div className="container w-full md:w-[80%] flex flex-col md:flex-row justify-center items-center gap-5">
          <SpotlightCard
            className="custom-spotlight-card cards"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <div className="icon"><img className="w-28 invert animate-pulse" src="/fans.gif" alt="video"></img></div>
            <div className="content text-center">
              Hello this the the content which will be inside the card
            </div>
          </SpotlightCard>
          <SpotlightCard
            className="custom-spotlight-card cards"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <div className="icon"><img className="w-28 invert animate-pulse" src="/dollar.gif" alt="video"></img></div>
            <div className="content text-center">
              Hello this the the content which will be inside the card
            </div>
          </SpotlightCard>
          <SpotlightCard
            className="custom-spotlight-card cards"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <div className="icon"><img className="w-28 invert animate-pulse" src="/fund.gif" alt="video"></img></div>
            <div className="content text-center">
              Hello this the the content which will be inside the card
            </div>
          </SpotlightCard>
          <SpotlightCard
            className="custom-spotlight-card cards"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <div className="icon"><img className="w-28 invert animate-pulse" src="/coffee.gif" alt="video"></img></div>
            <div className="content text-center">
              Hello this the the content which will be inside the card
            </div>
          </SpotlightCard>
        </div>
        <div className="line "></div>
        <div className="my-6 font-semibold text-2xl">What You can do!</div>
        <div className="container w-full md:w-[80%] flex flex-col md:flex-row justify-center items-center gap-5">
          <SpotlightCard
            className="custom-spotlight-card cards"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <div className="icon"><img className="w-28 invert animate-pulse" src="/connect.gif" alt="video"></img></div>
            <div className="content text-center">
              Hello this the the content which will be inside the card
            </div>
          </SpotlightCard>
          <SpotlightCard
            className="custom-spotlight-card cards"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <div className="icon"><img className="w-28 invert animate-pulse" src="/monetize.gif" alt="video"></img></div>
            <div className="content text-center">
              Hello this the the content which will be inside the card
            </div>
          </SpotlightCard>
          <SpotlightCard
            className="custom-spotlight-card cards"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <div className="icon"><img className="w-28 invert animate-pulse" src="/secured.gif" alt="video"></img></div>
            <div className="content text-center">
              Hello this the the content which will be inside the card
            </div>
          </SpotlightCard>
          <SpotlightCard
            className="custom-spotlight-card cards"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <div className="icon"><img className="w-28 invert animate-pulse" src="/support.gif" alt="video"></img></div>
            <div className="content text-center">
              Hello this the the content which will be inside the card
            </div>
          </SpotlightCard>
        </div>
      </div>
    </main>
  );
}
