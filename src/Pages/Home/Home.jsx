import React from "react";
import Banner from "../../Components/Banner/Banner";
import Books from "../Books/Books";
import { useLoaderData } from "react-router";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Books></Books>
    </div>
  );
};

export default Home;
