import React from "react";
import banner from "/books-banner.png";
import Container from "../Container/Container";
import { Link } from "react-router";
const Banner = () => {
  return (
    <div className="my-12">
      <Container>
        <div className="bg-[#1313130D] rounded-xl">
          <div className="flex flex-col-reverse lg:flex lg:flex-row  justify-between gap-4 items-center py-10 lg:py-20 lg:px-28 px-10 ">
            <div className="text-center lg:text-left">
              <h1 className="lg:text-6xl text-3xl font-bold ">
                Books to freshen up your bookshelf
              </h1>
              <Link
                to="/listedBooks"
                className="btn bg-[#23BE0A] text-white font-work lg:mt-12 mt-4"
              >
                Visit the List
              </Link>
            </div>
            <img className="h-[394px]" src={banner} alt="Books" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
