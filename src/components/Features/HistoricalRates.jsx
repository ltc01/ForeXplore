import React from 'react'
import { useEffect, useState } from 'react'
import ReactCountryFlag from 'react-country-flag';
import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';


const HistoricalRates = () => {
  const [base, setBase] = useState('USD');
  const [loading, setLoading] = useState(true);
  const [rates, setRates] = useState({});
  const [date, setDate] = useState('');
  const [currency, setCurrency] = useState('');
  const apikey = '01a0ec3eda0668e2ee86aa79787ca162';

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const res = await fetch(`https://api.forexrateapi.com/v1/latest?api_key=${apikey}`);
        // if(!res.ok){
        //   throw new Error('Failed to fetch exchange rates');
        // }
        const resData = await res.json();
        setRates(resData.conversion_rates);
        setLoading(false);
      } catch (error) {
        console.error('ERROR fetching data: ', error);
        setLoading(false);
      }
    };
    fetchData();

  }, [])

  console.log(rates);
  
  return (
    <>
      <div className='lg:py-24 lg:px-40 py-28 px-10 w-full'>
        <Link to='/features' >
          <ArrowLeftCircleIcon className='md:h-10 h-8 relative text-slate-900' />
        </Link>
        <h1 className='font-semibold text-3xl text-center'>Get Historical Exchange Rate </h1>
        <div className='flex gap-8 flex-wrap-left flex-wrap bg-slate-800 my-10 py-5 lg:py-10 px-10 rounded-xl'>
        <div className="">
            <label htmlFor="base" className='font-semibold text-lg text-yellow-200'>Base: <br />
            <input type="text" value={base}
            onChange={(e)=> setBase(e.target.value)}
            className='p-2 rounded mt-3 text-slate-800 text-md' />
            </label>
          </div>
          <div className="">
            <label htmlFor="date" className='font-semibold text-lg text-yellow-200'>Date: <br />
            <input type="date" value={date}
            onChange={(e)=> setDate(e.target.value)}
            className='p-2 rounded mt-3 text-slate-800 text-md' />
            </label>
          </div>
          <div className="">
            <label htmlFor="currency" className='font-semibold text-lg text-yellow-200'>Currency: <br />
            <input type="text" value={currency}
            onChange={(e)=> setCurrency(e.target.value)}
            className='p-2 rounded mt-3 text-slate-800 text-md' />
            </label>
          </div>
          <div className='flex items-center'>
            <button className='bg-yellow-300 rounded font-medium hover:bg-yellow-400 px-8 py-3 h-fit'>Get Data</button></div>
          
        </div>

      </div>

    </>
  )
}

export default HistoricalRates