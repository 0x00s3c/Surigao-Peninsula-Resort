import React from "react";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import { Link } from "react-router-dom";
import Services from "../Components/Services";
import FeaturedRooms from "../Components/FeaturedRooms";

const Home = () => {
  return (
    <>
      <Hero hero="defaultHero"></Hero>
      <Banner title="Luxurious Rooms" subtitle="Deluxe Rooms starting at ₱1,000/=">
        <Link to="/rooms" className="btn btn-primary">
          Our Accommodations.
        </Link>
          </Banner>
          <Services />
          <FeaturedRooms />
    </>
  );
};

export default Home;
