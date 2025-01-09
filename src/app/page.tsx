import Footer from "@/components/nav/footer";
import Header from "@/components/nav/header";
import SubHeader from "@/components/nav/sub-header";
import BeautyCard from "@/feature/beauty/components/beauty-card";
import ElectronicsCard from "@/feature/best-electronics/components/electronics-card";

export default function Home() {
  return (
    <div>
      <main className="container">
        <ElectronicsCard />
        <BeautyCard />
      </main>
    </div>
  );
}
