import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { CursorGlow } from "@/components/portfolio/CursorGlow";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shridhar Segdar — Technical Project Manager & Agile Delivery" },
      {
        name: "description",
        content:
          "Portfolio of Shridhar Segdar, Technical Project Manager specialising in Agile delivery, enterprise banking platforms and cybersecurity programs.",
      },
      { property: "og:title", content: "Shridhar Segdar — Technical Project Manager" },
      {
        property: "og:description",
        content:
          "Agile delivery, enterprise banking & cybersecurity program coordination.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <CursorGlow />
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
