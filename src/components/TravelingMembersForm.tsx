import React, { Dispatch, SetStateAction, useState } from "react";
import NavigationButtons from "./NavigationButtons";

function TravelingMembersForm({
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
  return (
    <>
      <form className="border w-[360px] h-[268px] border-gray-300 p-4 rounded-2xl mb-8">
        <div className="border-b mb-4 flex">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.24999 4.16667C5.32951 4.16667 4.58332 4.91286 4.58332 5.83333C4.58332 6.75381 5.32951 7.5 6.24999 7.5C7.17046 7.5 7.91665 6.75381 7.91665 5.83333C7.91665 4.91286 7.17046 4.16667 6.24999 4.16667ZM2.91665 5.83333C2.91665 3.99238 4.40904 2.5 6.24999 2.5C8.09094 2.5 9.58332 3.99238 9.58332 5.83333C9.58332 7.67428 8.09094 9.16667 6.24999 9.16667C4.40904 9.16667 2.91665 7.67428 2.91665 5.83333ZM13.75 4.16667C12.8295 4.16667 12.0833 4.91286 12.0833 5.83333C12.0833 6.75381 12.8295 7.5 13.75 7.5C14.6705 7.5 15.4167 6.75381 15.4167 5.83333C15.4167 4.91286 14.6705 4.16667 13.75 4.16667ZM10.4167 5.83333C10.4167 3.99238 11.909 2.5 13.75 2.5C15.5909 2.5 17.0833 3.99238 17.0833 5.83333C17.0833 7.67428 15.5909 9.16667 13.75 9.16667C11.909 9.16667 10.4167 7.67428 10.4167 5.83333ZM17.6513 15.1282C16.8696 12.3222 14.7098 11.3318 12.9253 11.7657C12.4781 11.8744 12.0274 11.6 11.9187 11.1528C11.81 10.7056 12.0844 10.2549 12.5316 10.1462C15.2943 9.47453 18.2638 11.1166 19.2568 14.681C19.6984 16.2658 18.3452 17.5 16.9615 17.5H14.1666C13.7064 17.5 13.3333 17.1269 13.3333 16.6667C13.3333 16.2064 13.7064 15.8333 14.1666 15.8333H16.9615C17.2079 15.8333 17.4168 15.7268 17.5415 15.5848C17.6579 15.4523 17.6986 15.2981 17.6513 15.1282ZM6.24999 11.6667C4.69553 11.6667 3.018 12.7285 2.34919 15.1258C2.3018 15.2957 2.34242 15.4509 2.4593 15.5843C2.58422 15.7268 2.79291 15.8333 3.03827 15.8333H9.4617C9.70707 15.8333 9.91575 15.7268 10.0407 15.5843C10.1576 15.4509 10.1982 15.2957 10.1508 15.1258C9.48197 12.7285 7.80445 11.6667 6.24999 11.6667ZM6.24999 10C8.6423 10 10.9116 11.6505 11.7561 14.6779C12.1978 16.2609 10.8477 17.5 9.4617 17.5H3.03827C1.65231 17.5 0.302217 16.2609 0.743831 14.6779C1.58842 11.6505 3.85767 10 6.24999 10Z"
              fill="#1F2327"
            />
          </svg>

          <p className=" ml-2 font-medium mb-1  text-sm">Traveling members</p>
        </div>
        <div className="mb-4 flex items-center border-b">
          <div className="mb-[18px] flex flex-col">
            <div className="flex flex-col">
              <label
                htmlFor="legal-spouse"
                className="mr-2 text-sm font-medium mb-1"
              >
                Legal Spouse
              </label>
              <span className=" text-xs text-gray-500">
                Must have marriage certificate
              </span>
            </div>
          </div>
          <div className="flex items-center ml-auto">
            <button
              className="w-8 h-8 bg-gray-100 rounded-md"
              type="button"
              onClick={() => setLegalSpouses(Math.max(legalSpouse - 1, 0))}
            >
              -
            </button>
            <span className="p-2 rounded text-center w-10 text-base font-semibold">
              {legalSpouse}
            </span>
            <button
              className="w-8 h-8 bg-gray-100 rounded-md"
              type="button"
              onClick={() => setLegalSpouses(legalSpouse + 1)}
            >
              +
            </button>
          </div>
        </div>
        <div className="mb-4 flex items-center border-b">
          <div className="mb-[18px] flex flex-col">
            <div className="flex flex-col">
              <label
                htmlFor="children-under-18"
                className="mr-2 font-medium mb-1 text-sm"
              >
                Children under 18
              </label>
              <span className="text-xs text-gray-500">
                Must have birth certificate
              </span>
            </div>
          </div>
          <div className="flex items-center ml-auto">
            <button
              className=" w-8 h-8 bg-gray-100 rounded-md"
              type="button"
              onClick={() =>
                setChildernUnderEighteen(Math.max(childrenUnderEighteen - 1, 0))
              }
            >
              -
            </button>
            <span className="p-2 rounded text-center w-10 text-base font-semibold">
              {childrenUnderEighteen}
            </span>
            <button
              className="w-8 h-8 bg-gray-100 rounded-md"
              type="button"
              onClick={() =>
                setChildernUnderEighteen(childrenUnderEighteen + 1)
              }
            >
              +
            </button>
          </div>
        </div>
        <div className=" mb-0 flex items-center">
          <div className="mb-4 flex flex-col">
            <div className="flex flex-col">
              <label htmlFor="pets" className="mr-2 font-medium mb-1 text-sm">
                Pets
              </label>
              <span className="text-xs text-gray-500">Must have documents</span>
            </div>
          </div>
          <div className="flex items-center ml-auto">
            <button
              className="w-8 h-8 bg-gray-100 rounded-md"
              type="button"
              onClick={() => setPets(Math.max(pets - 1, 0))}
            >
              -
            </button>
            <span className="p-2 rounded text-center w-10 text-base font-semibold">
              {pets}
            </span>
            <button
              className="w-8 h-8 bg-gray-100 rounded-md"
              type="button"
              onClick={() => setPets(pets + 1)}
            >
              +
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default TravelingMembersForm;
