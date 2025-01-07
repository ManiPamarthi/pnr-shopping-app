import { CarouselStyle } from "@/components/carousel";
import Footer from "@/components/nav/footer";
import Header from "@/components/nav/header";
import SubHeader from "@/components/nav/sub-header";
import BeautyCard from "@/feature/beauty/components/beauty-card";
import ElectronicsCard from "@/feature/best-electronics/components/electronics-card";
import CategoryBar from "@/feature/categories/components/category-bar";
import MainLayout from "@/feature/categories/components/mainlayout";
import Sale from "@/feature/sale";


export default function Home() {
  return (
    <div>
      <Header />
      <SubHeader />
      <main className="container">
        <CarouselStyle />
        <MainLayout />
        <ElectronicsCard />
        <BeautyCard />
      </main>
      <Sale />
      <Footer />
    </div>
  );
}
