import React, { useEffect, useState } from 'react'

const LiveRates = () => {
  const [base, setBase] = useState('USD')
  const [rates, setRates] = useState(null);
  const apikey = '8d5dfba1a50e6dd008f4fbd7';
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch(`https://v6.exchangerate-api.com/v6/${apikey}/latest/USD`);
  //       const resData = await res.json();
  //       const rates = await resData.conversion_rates
  //       const ratesArray = Object.entries(rates).map(([key, value]) => ({
  //        currency: key,
  //         rate: value,
  //       }))
  //       setRates(ratesArray);
  //       console.log(rates)
  //     } catch (error) {
  //       console.error('ERROR fetching data: ',error);
  //     }
  //   };
  //   fetchData();

  // }, [])
  

  return (
    <>
      <div className='pt-32 px-40 w-full bg-yellow-100'>
        <h1 className='font-semibold text-2xl'>LiveRates </h1>
        <div>
          <h2 className='font-semibold text-xl'>Base: 1 {base}</h2>
          <h2 className='font-semibold text-xl'>
            { rates.map((key, index)=>(
              <li key={index}>
              Currency: {rates.currency}, Rate: {rates.rate}
            </li>
            ))}
             </h2>
        </div>

      </div>

    </>
  )
}

export default LiveRates