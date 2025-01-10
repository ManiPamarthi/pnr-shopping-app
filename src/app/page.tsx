import CarouselHeader from "@/components/carousel/carousel-header";
import HappyCustomers from "@/components/happy-customers/happy-customers";
import Footer from "@/components/nav/footer";
import Header from "@/components/nav/header";
import SubHeader from "@/components/nav/sub-header";
import BeautyCard from "@/feature/beauty/components/beauty-card";
import GroceryCard from "@/feature/beauty/components/grocery-card";
import ElectronicsCard from "@/feature/best-electronics/components/electronics-card";

export default function Home() {
  return (
    <div>
      <main className="container">
        <CarouselHeader />
        <GroceryCard />
        <BeautyCard />
        <ElectronicsCard />
        <HappyCustomers />
      </main>
    </div>
  );
}
