import React, { useState } from "react";
import Sidebar from "../../component/userDashboard/Sidebar";
import Overview from "../../component/userDashboard/Overview";
import Orders from "../../component/userDashboard/Orders";
import Settings from "../../component/userDashboard/Setting";
import WishList from "../../component/userDashboard/WishList";

const UserDashboard = () => {
  const [active, setActive] = useState("Overview");

  return (
    <>
      <div className=" flex h-[92vh]">
        <div className=" w-1/6 border border-red-500 h-full">
        <Sidebar active={active} setActive={setActive} />
        </div>
        <div className=" w-5/6 border border-green-500 h-full">
        {active === "Overview" && <Overview />}
        {active === "Orders" && <Orders />}
        {active === "WishList" && <WishList />}
        {active === "Setting" && <Setting />}
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
