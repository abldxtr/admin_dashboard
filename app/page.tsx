// import Image from "next/image";

import { Base } from "@/components/base";
// import { Chart_num } from "@/components/chart_num";
// import { Charts } from "@/components/charts";
import { Header } from "@/components/header";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Header />
      <section className="flex pt-16">
        <Navbar />
        <Base />
      </section>
    </>
  );
}
