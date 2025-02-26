// app/layout.tsx
import Header from "@/components/nav/header";
import ClientProviders from "./client-providers";
import "./globals.css";
import Footer from "@/components/nav/footer";
import SubHeader from "@/components/nav/sub-header";

export const metadata = {
  title: "PNR Shopping",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientProviders>
          <Header />
          <SubHeader />
            {children}
          <Footer/>
          </ClientProviders>
      </body>
    </html>
  );
}
