import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { MenuPreview } from "@/components/MenuPreview";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Services />
        <Gallery />
        <WhyChooseUs />
        <MenuPreview />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
