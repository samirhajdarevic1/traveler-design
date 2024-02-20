import React from "react";

function Header() {
  return (
    <div className="header flex">
      <div className="mr-auto flex justify-start ">
        <div className="mr-2">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="28" height="28" rx="14" fill="#1F2327" />
            <path
              d="M19.7651 21C21.5587 21 23 19.5765 23 17.8402C23 16.1039 21.5587 14.6805 19.7651 14.6805C18.0676 14.571 17.331 15.9788 16.242 16.9173C15.6335 17.3866 14.8648 17.6525 14 17.6525C13.1352 17.6525 12.3826 17.3866 11.758 16.9173C10.6851 15.9944 9.9484 14.571 8.23488 14.6805C6.44128 14.6805 5 16.1039 5 17.8402C5 19.5765 6.44128 21 8.23488 21H19.7651Z"
              fill="#FCFCFD"
            />
            <path
              d="M19.7651 7C21.5587 7 23 8.42347 23 10.1598C23 11.8961 21.5587 13.3195 19.7651 13.3195C18.0676 13.429 17.331 12.0212 16.242 11.0827C15.6335 10.6134 14.8648 10.3475 14 10.3475C13.1352 10.3475 12.3826 10.6134 11.758 11.0827C10.6851 12.0056 9.9484 13.429 8.23488 13.3195C6.44128 13.3195 5 11.8961 5 10.1598C5 8.42347 6.44128 7 8.23488 7H19.7651Z"
              fill="#FCFCFD"
            />
          </svg>
        </div>
        <h2 className=" ml-auto mb-10 w-[122px] h-[13px] font-semibold">
          citizen remote
        </h2>
      </div>
      <div className="mr-auto">
        <svg
          width="92"
          height="20"
          viewBox="0 0 92 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="10" cy="10" r="4" fill="#EBEBEF" />
          <circle cx="34" cy="10" r="4" fill="#EBEBEF" />
          <rect x="49" y="5" width="18" height="10" rx="5" fill="#1F2327" />
          <circle cx="82" cy="10" r="4" fill="#EBEBEF" />
        </svg>
      </div>
    </div>
  );
}

export default Header;
