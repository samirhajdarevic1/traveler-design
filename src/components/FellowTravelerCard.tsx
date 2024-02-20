import React from "react";

function FellowTravelerCard() {
  return (
    <div className="card">
      <div>
        <div className="flex p-5 justify-between pl-0 pr-0">
          <div className="text-white flex">
            <p className=" w-12 h-12 bg-black rounded-3xl text-center p-3 mr-3 text-lg font-medium">
              FT
            </p>
            <div>
              <p>Fellow Traveler</p>
              <p className=" gray-email">travelermail@gmail.com</p>
            </div>
          </div>
          <div className="flex">
            <p className="mr-2">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_5_176)">
                  <path d="M0 21.3313H32V32H0V21.3313Z" fill="#FFCE00" />
                  <path d="M0 0H32V10.6687H0V0Z" fill="black" />
                  <path d="M0 10.6687H32V21.3312H0V10.6687Z" fill="#DD0000" />
                </g>
                <defs>
                  <clipPath id="clip0_5_176">
                    <rect width="32" height="32" rx="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </p>

            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_5_181)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 0H32V32H0V0Z"
                  fill="#FFD700"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 0H32V16H0V0Z"
                  fill="#0057B8"
                />
              </g>
              <defs>
                <clipPath id="clip0_5_181">
                  <rect width="32" height="32" rx="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className="white-card">
          <div className="mb-5 text-gray-500">
            <p className="w-32  h-4 text-xs font-medium border-b border-dotted">
              Finance information
            </p>
          </div>
          <div>
            <div className=" mb-4">
              <p className="text-prim-gray">Full Remote Job</p>
              <p className="text-black">Yes, for over 6 months</p>
            </div>
            <div className=" mb-4">
              <p className="text-prim-gray">Self employed</p>
              <p className="text-black">
                {"I'm"} self employed {"<"} 3 years business
              </p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex bg-gray-100 w-44 h-11 p-3 rounded-xl justify-between">
              <p className="text-prim-gray">Income</p>
              <p className="text-black">$1,000</p>
            </div>
            <div className="flex bg-gray-100 w-44 p-3 rounded-xl justify-between">
              <p className="text-prim-gray">Savings</p>
              <p className=" text-black">$10,000</p>
            </div>
          </div>
          <div className="white-card-bottom-border"></div>
          <div className=" mt-5">
            <div className="mb-5 text-gray-500 ">
              <p className="w-28 h-4 text-xs font-medium border-b border-dotted">
                Traveling Members
              </p>
            </div>
            <div className="flex justify-between">
              <p className=" text-black">
                <span className=" w-5 h-4 bg-gray-100 mr-3 p-1 rounded-xl text-xs font-semibold">
                  1
                </span>
                Legal spouce
              </p>
              <p className=" text-black">
                <span className="w-5 h-4 bg-gray-100 mr-3 p-1 rounded-xl text-xs font-semibold">
                  2
                </span>
                Children under 18
              </p>
              <p className=" text-black">
                <span className="w-5 h-4 bg-gray-100 mr-3 p-1 rounded-xl text-xs font-semibold">
                  5
                </span>
                Pets
              </p>
            </div>
            <div className="white-card-bottom-border"></div>

            <div className="mb-4 mt-5 text-gray-500">
              <p className="w-14  h-4 text-xs font-medium border-b border-dotted mb-5">
                Additions
              </p>
              <p className=" w-40 h-5 bg-gray-100 rounded-2xl"></p>
            </div>
          </div>
        </div>
        <div className="flex justify-center p-2 font-semibold text-xs traveler-footer">
          <p>Personal Travel Card by Citizen Remote</p>
        </div>
      </div>
    </div>
  );
}

export default FellowTravelerCard;
