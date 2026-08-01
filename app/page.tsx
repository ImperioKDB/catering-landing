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
import { getImageMap } from "@/lib/images";

// Re-check for newly uploaded images at most once a minute, so photo
// uploads from /admin show up without a full redeploy.
export const revalidate = 60;

export default async function Home() {
  const images = await getImageMap();

  return (
    <>
      <Navbar />
      <main>
        <Hero images={images} />
        <SocialProof />
        <Services images={images} />
        <Gallery images={images} />
        <WhyChooseUs images={images} />
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
