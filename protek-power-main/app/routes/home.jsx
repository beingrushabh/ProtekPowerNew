import Banner from "../components/organisms/Banner";
import CategorySectionHome from "../components/organisms/CategorySectionHome";
import Header from "../components/organisms/Header";
import SupportSection from "../components/organisms/SupportSection";
import TopProductCarousel from "../components/organisms/TopProductCarousel";
import WhyChooseUs from "../components/organisms/WhyChooseUs";
import Layout from "../components/Layout";
export function meta() {
  return [
    { title: "Protek Power - Power Management Solutions" },
    { name: "description", content: "Leading provider of power management solutions" },
  ];
}

export default function Home() {
  return (
    <Layout>
      <Banner />
      <CategorySectionHome />
      <WhyChooseUs />
      <TopProductCarousel />
      <SupportSection />
    </Layout>
  );
}