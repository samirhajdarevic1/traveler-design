"use client";
import NavigationButtons from "../components/NavigationButtons";
import FellowTravelerCard from "../components/FellowTravelerCard";
import TravelingMembers from "@/components/TravelingMembers";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className=" max-w-[1200px] mx-auto p-6">
      <Header />
      <div className=" flex p-10">
        <TravelingMembers />
        <div className=" ml-12">
          <FellowTravelerCard />
        </div>
      </div>
    </main>
  );
}
