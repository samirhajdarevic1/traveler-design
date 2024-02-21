import React, { Dispatch, SetStateAction, useState } from "react";
import TravelingMembersForm from "./TravelingMembersForm";
import NavigationButtons from "./NavigationButtons";

function TravelingMembers({
  legalSpouse,
  childrenUnderEighteen,
  pets,
  setLegalSpouses,
  setChildernUnderEighteen,
  setPets,
}: {
  legalSpouse: number;
  childrenUnderEighteen: number;
  pets: number;
  setLegalSpouses: Dispatch<SetStateAction<number>>;
  setChildernUnderEighteen: Dispatch<SetStateAction<number>>;
  setPets: Dispatch<SetStateAction<number>>;
}) {
  const [withOthers, setWithOthers] = useState(true);

  const submitForm = () => {
    const confirmation = window.confirm("Are you sure you want to continue?");
    if (confirmation) {
      console.log(
        "Continue to the next step...",
        `Your data: {
      spouse: ${legalSpouse}
      children under 18: ${childrenUnderEighteen}
      pets: ${pets}
      }`
      );
    } else {
      console.log("Cancelled");
    }
  };

  return (
    <div className="traveling-members-card">
      <div className="w-[360px] h-14 mb-8 ">
        <h1 className="w-[360px] h-7 font-bold mb-1 text-xl">
          Traveling Members
        </h1>
        <p className="text-base gray-question">
          Are you traveling alone or with someone else?
        </p>
      </div>
      <div className="flex flex-col mb-[26px]">
        <button
          onClick={() => setWithOthers(false)}
          className={
            withOthers
              ? "text-sm w-[360px] h-12 font-medium hover:font-semibold py-4 px-4 rounded-lg border mb-2"
              : "gray-shadow text-sm w-[360px] h-12 hover:font-semibold py-4 px-4 rounded-lg border border-black mb-2"
          }
        >
          Alone
        </button>
        <button
          onClick={() => setWithOthers(true)}
          className={
            withOthers
              ? "gray-shadow text-sm w-[360px] h-12 hover:font-semibold py-4 px-4 rounded-lg border border-black"
              : "text-sm w-[360px] h-12 font-medium hover:font-semibold py-4 px-4 rounded-lg border mb-2"
          }
        >
          With others
        </button>
      </div>
      {withOthers && (
        <TravelingMembersForm
          legalSpouse={legalSpouse}
          childrenUnderEighteen={childrenUnderEighteen}
          pets={pets}
          setLegalSpouses={setLegalSpouses}
          setChildernUnderEighteen={setChildernUnderEighteen}
          setPets={setPets}
        />
      )}
      <NavigationButtons submitForm={submitForm} />
    </div>
  );
}

export default TravelingMembers;
