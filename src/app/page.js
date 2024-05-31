"use client";

import bgImage from "../assets/bg-cafe.jpg";
import vectorImg from "../assets/vector.svg";
import ProductList from "@/components/ProductList";
import { useEffect, useState } from "react";

const Home = () => {
  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json');
      const data = await response.json();
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <main className="w-full relative p-[160px] flex flex-col items-center">
      <img src={ bgImage.src } 
        style={{ width: "100%", height: "300px", position: "absolute", left: 0, top: 0, zIndex: -10 }} 
      />
      <div className="bg-list-bg px-[124px] py-[80px] rounded-xl relative flex flex-col items-center">
        <div className="flex flex-col items-center w-[480px] mb-[40px]">
          <p className="text-[#FEF7EE] text-[2rem] font-bold mb-[8px] z-10">
            Our Collection
          </p>
          <p className="text-center text-base text-[#6F757C] font-medium z-10">
            Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.
          </p>
        </div>
        <img 
          src={ vectorImg.src } 
          style={{ width: "256px", height: "149px", position: "absolute", top: 10, left: "40%" }} 
        />
        {
          products && <ProductList data={ products } />
        }
      </div>
    </main>
  );
}

export default Home;