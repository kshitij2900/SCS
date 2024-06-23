import Whyus from "@/components/Home/WhyUs";
import Client from "@/components/Home/client";
import Hero from "@/components/Home/Hero";
import Experience from "@/components/Home/Experience";
import AiProducts from "@/components/Home/AiProducts";


export default function Home() {
  return (
    <div className=" bg-white w-full">
      <Hero/>
    <Client/>
    <Whyus/>
    <Experience/>
    <AiProducts/>
    </div>
  );
}
