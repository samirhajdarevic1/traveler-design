"use client";
import FellowTravelerCard from "../components/FellowTravelerCard";
import TravelingMembers from "@/components/TravelingMembers";
import Header from "@/components/Header";
import { useState } from "react";

export default function Home() {
  const [legalSpouse, setLegalSpouses] = useState(1);
  const [childrenUnderEighteen, setChildernUnderEighteen] = useState(2);
  const [pets, setPets] = useState(5);

  return (
    <main className=" max-w-[1200px] mx-auto p-6">
      <Header />
      <div className=" flex p-9 pt-[4.5rem] h-[744px]">
        <TravelingMembers
          legalSpouse={legalSpouse}
          childrenUnderEighteen={childrenUnderEighteen}
          pets={pets}
          setLegalSpouses={setLegalSpouses}
          setChildernUnderEighteen={setChildernUnderEighteen}
          setPets={setPets}
        />
        <div className=" ml-[74px]">
          <FellowTravelerCard
            legalSpouse={legalSpouse}
            childrenUnderEighteen={childrenUnderEighteen}
            pets={pets}
          />
        </div>
      </div>
    </main>
  );
}
