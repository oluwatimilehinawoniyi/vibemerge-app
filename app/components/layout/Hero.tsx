import HeroText from "../UI/HeroText";
import TitBits from "../UI/TitBits/TitBits";
import MediaStory from "./MediaStory";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <main className="flex w-full h-full md:h-screen p-4 gap-4 flex-col md:flex-row">
      <section className="flex flex-col w-full md:w-1/2 h-full md:justify-between">
        <Navbar />
        <HeroText />
        <TitBits />
      </section>
      <section className="w-full h-full md:w-1/2">
        <MediaStory />
      </section>
    </main>
  );
}
