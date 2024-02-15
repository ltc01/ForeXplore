import React, { useEffect, useState } from 'react'
import ReactCountryFlag from 'react-country-flag';
import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const LiveRates = () => {
  const [base, setBase] = useState('USD');
  const [loading, setLoading] = useState(true);
  const [rates, setRates] = useState({});
  const apikey = '8d5dfba1a50e6dd008f4fbd7';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://v6.exchangerate-api.com/v6/${apikey}/latest/USD`);
        if(!res.ok){
          throw new Error('Failed to fetch exchange rates');
        }
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
        <h1 className='font-semibold text-3xl text-center'>Live Exchange Rates </h1>
        <div className='flex flex-wrap bg-slate-800 my-10 py-5 lg:py-10 justify-center rounded-xl text-white'>
          {loading ? <h1 className='text-yellow-200 text-2xl font-bold'>Loading...</h1> : (
            Object.entries(rates).map(([currency, rate]) => (
              <div key={currency}
                className='md:w-56 w-48 py-2 pl-5'>
                <span className='font-semibold text-yellow-200'>
                  <ReactCountryFlag countryCode={currency.slice(0, 2)} svg style={{ marginRight: '8px' }} />{currency}: </span><span className='p-2 text-slate-100'>{rate}</span>
              </div>
            )))}
        </div>

      </div>

    </>
  )
}

export default LiveRates