"use client";

import bgImage from "../assets/bg-cafe.jpg";
import vectorImg from "../assets/vector.svg";
import ProductList from "@/components/ProductList";
import { useEffect, useState } from "react";
import Tab from "@/components/Tab";

const tabs = [
  {
    "id": 1,
    "label": "All Products",
  },
  {
    "id": 2,
    "label": "Available Now",
  },
];

const Home = () => {
  const [ data, setData ] = useState([]);
  const [ products, setProducts ] = useState([]);
  const [ activeTab, setActiveTab ] = useState(tabs[0].id);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json');
      const data = await response.json();
      setData(data);
      setProducts(data);
    };
    fetchData();
  }, []);

  const filterProducts = () => {
    return data.filter((item) => item.available);
  };

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    if(tabId == 1) {
      setProducts(data);
    } else {
      setProducts(filterProducts());
    }
  };

  return (
    <main className="w-full relative p-[160px] flex flex-col items-center">
      <img src={ bgImage.src } 
        style={{ width: "100%", height: "300px", position: "absolute", left: 0, top: 0, zIndex: -10 }} 
      />
      <div className="bg-list-bg px-[40px] py-[80px] rounded-xl relative flex flex-col items-center lg:px-[80px] xl:px-[124px]">
        <div className="flex flex-col items-center w-[480px] mb-[20px]">
          <p className="text-[#FEF7EE] text-[2rem] font-bold mb-[8px] z-10">
            Our Collection
          </p>
          <p className="text-center text-base text-[#6F757C] font-medium z-10">
            Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.
          </p>
        </div>
        <img 
          src={ vectorImg.src } 
          style={{ width: "256px", height: "149px", position: "absolute", top: "48px", left: "49%" }} 
        />
        <Tab tabs={ tabs } activeTab={ activeTab } setActiveTab={ handleTabClick } />
        {
          products && <ProductList data={ products } />
        }
      </div>
    </main>
  );
}

export default Home;