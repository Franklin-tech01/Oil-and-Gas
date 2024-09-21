import Nav from "@/components/global/Nav";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import AboutUs from "@/components/aboutus";
import Solution from "@/components/solution";
import Parallax from "@/components/parallax";
import Projects from "@/components/projects";
import GetTogether from "@/components/together";


export async function generateMetadata() {
  return {
    title: 'Hen & Associates - Leading Oil & Gas Procurement and Innovative Solutions',
    description: 'Hen & Associates provides world-class procurement services and project solutions across the oil and gas sector. With a proven track record and partnerships with leading OEMs globally, we deliver high-quality equipment and materials to meet our clients\' needs. Explore our commitment to excellence, innovative solutions, and the vision driving our success.',
  };
}

// export default function Home() {
//   return (
//     <section className="border  relative flex flex-col ">
//       <Nav />
//       <Hero />
//       <AboutUs />
//       <Solution />
//       <Parallax />
//       <GetTogether />
//       <Projects />
//       <Footer />
//     </section>
//   );
// }

export default function Home() {
  return (
    <section className="border relative flex flex-col">
      <Nav />
      <div id="hero"><Hero /></div>
      <div id="aboutUs"><AboutUs /></div>
      <div id="solution"><Solution /></div>
      <div id="parallax"><Parallax /></div>
      <div id="getTogether"><GetTogether /></div>
      <div id="projects"><Projects /></div>
      <div id="footer"><Footer /></div>
    </section>
  );
}
