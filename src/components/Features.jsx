import React from "react";
import { Link } from "react-router-dom";
import { features } from "./NavBar";

const Features = () => {
  const details = [
        "Stay up-to-date with real-time exchange rates for various currency pairs from around the world. Our live rates feature provides you with accurate and reliable data, ensuring you always have the latest information at your fingertips.",
        "Analyze past trends and patterns with our historical exchange rate data. Access historical data for specific time periods, currencies, and exchange rates to gain valuable insights into market performance and make informed trading decisions.",
        "Convert currencies quickly and easily with our intuitive currency converter tool. Whether you're traveling abroad, conducting international business, or managing personal finances, our currency converter makes it simple to calculate accurate exchange rates and convert currencies with ease.",
        "Explore currency rates for custom timeframes using our timeframe query feature. Specify start and end dates to retrieve historical exchange rates for the selected period, allowing you to analyze trends and fluctuations in currency rates over time.",
        "Analyze changes in currency rates over time with our change query tool. Compare exchange rates between two dates to identify trends, patterns, and fluctuations in currency markets, empowering you to make informed trading decisions.",        
  ];
  return (
    <section id="features">
      <div className="mx-auto pt-32 px-10 md:px-0 md:w-1/2 text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-8">
          Explore Our Features
        </h2>
        <p className="text-slate-600 mb-14">
          ForeXplore offers a comprehensive range of features designed to
          empower your currency exchange experience. Whether you're a beginner
          or an experienced trader, our platform provides you with the tools and
          resources you need to succeed in the global financial markets.
        </p>
      </div>
      <div className="px-10 pb-32">
        <ul className="flex justify-center flex-wrap gap-10">
          {features.map((item, index) => (
            <Link to={`/features${item.href}`}
              key={index}
              className="text-center w-72 rounded-3xl py-7 px-5 shadow-lg shadow-black/30 bg-slate-900 cursor-pointer"
            ><item.icon className="h-8 inline text-yellow-300 mr-3 " />
              <h2 className="inline text-yellow-300 hover:underline font-semibold text-xl">
                {item.name}
              </h2>
              <p className="text-slate-100 text-[0.95em] mt-2 w-56 mx-auto text-center">
                {details[index]}
              </p>
            </Link>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Features;
