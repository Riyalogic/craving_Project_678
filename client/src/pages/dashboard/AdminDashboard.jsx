import React from "react";
import { useLocation, useNavigate} from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import AdminOrders from "../../component/adminDashboard/AdminOrders";
import AdminOverview from "../../component/adminDashboard/AdminOverview"
import AdminSetting from "../../component/adminDashboard/AdminSetting";
import AdminSidebar from "../../component/adminDashboard/AdminSidebar";

const AdminDashboard = () => {
    const {isLogin, role} = useAuth();
    const navigate = useNavigate();
    const active = useLocation().state?.activeTab;
    const [activeTab, setActiveTab] = React.useState(active || "overview");

    if (!isLogin || role !== "admin") {
        return(
            <div className=" h-[92vh] bg-[-url('/foodTable.webp)] bg-cover bg-center">
                <div className=" h-full backdrop-blur-lg flex flex-col items-center"></div>
            </div>
        )
    }
}