import React from "react";
import TravelingMembersForm from "./TravelingMembersForm";
import NavigationButtons from "./NavigationButtons";

function TravelingMembers() {
  return (
    <div className="traveling-members-card">
      <div className="w-[360px] h-14 mb-8 ">
        <h1 className="w-[360px] h-7 text-2xl font-bold mb-1 pb-2">
          Traveling members
        </h1>
        <p className="text-base gray-question">
          Are you traveling alone or with someone else?
        </p>
      </div>
      <div className="flex flex-col mb-8">
        <button className=" w-[360px] hover:font-semibold py-2 px-4 rounded-lg border mb-2">
          Alone
        </button>
        <button className=" w-[360px] hover:font-semibold py-2 px-4 rounded-lg border border-black">
          With others
        </button>
      </div>
      <TravelingMembersForm />
    </div>
  );
}

export default TravelingMembers;
