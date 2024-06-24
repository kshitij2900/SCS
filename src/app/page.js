import Whyus from "@/components/Home/WhyUs";
import Client from "@/components/Home/client";
import Hero from "@/components/Home/Hero";
import Experience from "@/components/Home/Experience";
import AiProducts from "@/components/Home/AiProducts";
import Counter from "@/components/Home/Counter";
import Gigs from "@/components/Home/Gigs";
import Testimonials from "@/components/Home/Testimonials";
import Banner from "@/components/Home/Banner";



export default function Home() {
  return (
    <div className=" bg-white">
      <Hero/>
    <Client/>
    <Whyus/>
    <Counter/>
    <Experience/>
    <AiProducts/>
    <Gigs/>
    <Testimonials/>
    <Banner/>
    </div>
  );
}
