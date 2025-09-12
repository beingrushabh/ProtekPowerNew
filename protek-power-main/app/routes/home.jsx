import Banner from "../components/organisms/Banner";
import CategorySectionHome from "../components/organisms/CategorySectionHome";
import Header from "../components/organisms/Header";
import SupportSection from "../components/organisms/SupportSection";
import TopProductCarousel from "../components/organisms/TopProductCarousel";
import WhyChooseUs from "../components/organisms/WhyChooseUs";
import Layout from "../components/Layout";
import WhatsAppFloat from "../components/molecules/Whatsapp";
export function meta() {
  return [
    { title: "Protek Power - Power Management Solutions" },
    { name: "description", content: "Leading provider of power management solutions" },
  ];
}
import BlogWidget from '../components/organisms/BlogWidget';
// Inside your page’s JSX


export default function Home() {
  return (
    <Layout>

      <Banner />
      <CategorySectionHome />
      <WhyChooseUs />
      <TopProductCarousel />
      <BlogWidget />
      <SupportSection />
       <WhatsAppFloat
        phone="919426067762"   // change to Protek's number
        defaultMessage="Hi Protek, I’m interested in your stabilizers."
        enableChatBox={true}   // false = direct WhatsApp open
        position="bottom-right"
      />
    </Layout>
  );
}