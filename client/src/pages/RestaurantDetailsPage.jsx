import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../config/api.config.js";
import toast from "react-hot-toast";
import Loader from "../component/Loader";
import { IoArrowBack } from "react-icons/io5";
import { TbChefHat } from "react-icons/tb";
import RestaurantHero from "../component/publicRestaurantDetails/RestaurantHero.jsx";
import RestaurantInfoStrip from "../component/publicRestaurantDetails/RestaurantInfoStrip.jsx";
import RestaurantAbout from "../component/publicRestaurantDetails/RestaurantAbout.jsx";
import RestaurantGallery from "../component/publicRestaurantDetails/RestaurantGallery.jsx";
import RestaurantContact from "../component/publicRestaurantDetails/RestaurantContact.jsx";
import RestaurantSocialLinks from "../component/publicRestaurantDetails/RestaurantSocialLinks.jsx";
import RestaurantMenu from "../component/publicRestaurantDetails/RestaurantMenu.jsx";

const RestaurantDetailsPage = () => {
  const { restaurantId } = useParams();
    const navigate = useNavigate();

  const [details, setDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
const fetchDetails = async () => {
    try {
      setIsLoading(true);
      const response = await api.get( `/public/restaurant-detail/${restaurantId}`,);
      setDetails(response.data.data);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Unknown error occurred during fetching restaurant details. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };
  fetchDetails();
  }, [restaurantId]);


  if (isLoading) return <Loader height="100vh" width="100%" />;
  
if (!details || !details.restaurantId) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-(--color-base-content)">
        <TbChefHat className="text-6xl text-(--color-secondary)" />
        <p className="text-lg font-semibold">Restaurant not found.</p>
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 px-4 py-2 bg-(--color-primary) text-(--color-primary-content) rounded-lg text-sm"
        >
          <IoArrowBack /> Go Back
        </button>
      </div>
    );
  }
 
    const restaurant = details.restaurantId;

  return (
    <div className="min-h-screen bg-(--color-base-200)">
      <RestaurantHero restaurant={restaurant} onBack={() => navigate(-1)} />
      <RestaurantInfoStrip restaurant={restaurant} />
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-6 grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6 items-start">
        {/* Left sidebar */}
        <div className="space-y-4">
          <RestaurantAbout description={restaurant.description} />
          <RestaurantGallery images={restaurant.restaurantImage} />
          <RestaurantContact restaurant={restaurant} />
          <RestaurantSocialLinks socialMediaLinks={restaurant.socialMediaLinks} />
        </div>

 <RestaurantMenu menuItems={details.menuItems} restaurantId={restaurant._id} restaurantName={restaurant.restaurantName} />
      </div>
    </div>
  );
};

export default RestaurantDetailsPage;