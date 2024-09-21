import Nav from "@/components/global/Nav";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import AboutUs from "@/components/aboutus";
import Solution from "@/components/solution";
import Parallax from "@/components/parallax";
import Projects from "@/components/projects";
import GetTogether from "@/components/together";
export default function Home() {
  return (
    <section className="border  relative flex flex-col ">
      <Nav />
      <Hero />
      <AboutUs />
      <Solution />
      <Parallax />
      <GetTogether />
      <Projects />
      <Footer />
    </section>
  );
}