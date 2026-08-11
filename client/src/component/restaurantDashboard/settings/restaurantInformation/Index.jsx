import React from "react";
import PresonalInformation from "./PersonalInformation.jsx";
import RestaurantInformation from "./RestaurantInformation.jsx";
import LeagalInformation from "./LegalInformation.jsx";

const Index = () => {
  return (
    <>
      <div className="overflow-y-auto h-full p-2 space-y-2">
        <PresonalInformation />
        <RestaurantInformation />
        <LeagalInformation />
      </div>
    </>
  );
};

export default Index;