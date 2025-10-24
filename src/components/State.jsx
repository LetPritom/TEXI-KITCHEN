import { CookingPot, Heater, ScrollText } from "lucide-react";
import React from "react";

const State = ({orderTotal, cookingTotal,currentReady}) => {
  return (
    <div className="w-11/12 mx-auto grid grid-cols-1 gap 3 py-10 lg:grid-cols-3 gap-5">
        {/* order card */}
      <div className="border-4 border-dotted rounded-2xl border-amber-400 p-5">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <ScrollText className="animate-pulse" color="#fcb700" size={100} />
          <div className="text-xl text-center">
            Current Orders
            <h2 className="text-6xl font-bold">{orderTotal}</h2>
          </div>
        </div>
      </div>
        {/* order Cooking */}
      <div className="border-4 border-dotted rounded-2xl border-amber-400 p-5">
        <div className="flex flex-col lg:flex-row items-center justify-between">
            <Heater className="animate-pulse" color="#fcb700" size={100} />
          {/* <ScrollText className="animate-pulse" color="#fcb700" size={100} /> */}
          <div className="text-xl text-center">
            Current Cooking
            <h2 className="text-6xl font-bold">{cookingTotal}</h2>
          </div>
        </div>
      </div>
        {/* order Ready */}
      <div className="border-4 border-dotted rounded-2xl border-amber-400 p-5">
        <div className="flex flex-col lg:flex-row items-center justify-between">
         <CookingPot className="animate-pulse" color="#fcb700" size={100} />
          {/* <ScrollText className="animate-pulse" color="#fcb700" size={100} /> */}
          <div className="text-xl text-center">
            Current Ready
            <h2 className="text-6xl font-bold">{currentReady}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default State;
