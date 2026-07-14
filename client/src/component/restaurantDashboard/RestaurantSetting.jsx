import React, { useState } from "react";

const RestaurantSetting = () => {
  const Tabs = [
    { id: "information", label: "Information" },
    { id: "coreDetails", label: "Core Details" },
    { id: "photos", label: "Photos" },
  ];
  const [activeTab, setActiveTab] = useState("coreDetails");

  return (
    <>
      <div className=" p-3">
        <div className=" border-b-2 border-(--color-secondary) flex gap-3">
          {Tabs.map((tab, idx) => (
            <>
              <div
                key={idx}
                className={`p-2 uppercase ${activeTab === tab.id ? " text-(--color-primary)"}`}
                onClick={() => {} }
              >
                {tab.label}
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default RestaurantSetting;

// import React,{useState, useEffect} from "react";
// import { MdEdit } from "react-icons/md";
// import { useAuth } from "../../context/AuthContext";
// import api from "../../config/api.config";
// import toast from "react-hot-toast";
// import { MdOutlineAddAPhoto, MdOutlineLockReset } from "react-icons/md";
// import PasswordChangeModal from "../commonModals/PasswordChangeModal";
// import RunningLoader from "../../assets/runningLoader.gif";

// const RestaurantSetting = () => {
//     const { user, setUser} = userAuth();

//     const [isLoading, setisLoading] = useState(false);

// }
