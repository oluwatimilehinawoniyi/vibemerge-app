import HeroText from "../UI/HeroText";
import TitBits from "../UI/TitBits/TitBits";
import MediaStory from "./MediaStory";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <main className="flex w-full h-screen p-4 gap-4">
      <section className="flex flex-col w-full md:w-1/2 h-full justify-between">
        <Navbar />
        <HeroText />
        <TitBits />
      </section>
      <section className="w-full md:w-1/2">
        <MediaStory />
      </section>
    </main>
  );
}
