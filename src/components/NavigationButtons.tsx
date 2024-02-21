import React from "react";
import Link from "next/link";
function NavigationButtons({ submitForm }: { submitForm: () => void }) {
  return (
    <div className="flex justify-between w-[360px] h-12 items-baseline">
      <Link className=" text-sm font-semibold" href="/error">
        {"<"} Back
      </Link>
      <button
        className=" w-[94px] h-12 bg-black text-white rounded-lg"
        onClick={submitForm}
      >
        Continue
      </button>
    </div>
  );
}

export default NavigationButtons;
