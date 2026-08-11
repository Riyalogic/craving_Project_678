import React from "react";
import RestaurantAddress from "./RestaurantAddress.jsx";
import RestaurantBankingDocument from "./RestaurantBankingDocument.jsx";
import RestaurantSocialMediaLinks from "./RestaurantSocialMediaLinks.jsx";

const Index = () => {
  return (
    <>
      <div className="overflow-y-auto h-full p-2 space-y-2">
        <RestaurantAddress />
        <RestaurantBankingDocument />
        <RestaurantSocialMediaLinks />
      </div>
    </>
  );
};

export default Index;