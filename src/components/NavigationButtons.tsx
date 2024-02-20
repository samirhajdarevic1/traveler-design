import React from "react";
import Link from "next/link";
function NavigationButtons({ submitForm }: { submitForm: () => void }) {
  return (
    <div className="flex justify-between w-[360px] align-baseline">
      <Link href="/error">{"<"} Back</Link>
      <button
        className="p-4 bg-black text-white rounded-lg"
        onClick={submitForm}
      >
        Continue
      </button>
    </div>
  );
}

export default NavigationButtons;
