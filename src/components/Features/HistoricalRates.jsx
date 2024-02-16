import React from 'react'
import { useState } from 'react'
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

  const fetchData = async (e) => {
    e.preventDefault();
    try {
      // const res = await fetch(`https://api.forexrateapi.com/v1/${date}?api_key=${apiKey}&base=${base}}&currencies=${currency}`);
      // if(!res.ok){
      //   throw new Error('Failed to fetch exchange rates');
      // }
      // const resData = await res.json();
      const resData = {
        "success": true,
        "base": "USD",
        "timestamp": 1616543999,
        "rates": {
          "EUR": 0.84654595,
          "INR": 72.62723433,
          "JPY": 108.78333233
        }
      }
      setRates(resData.rates);
      setLoading(false);
    } catch (error) {
      console.error('ERROR fetching data: ', error);
      setLoading(false);
    }
  }
  console.log(rates);

  return (
    <>
      <div className='lg:py-24 lg:px-40 py-28 px-10 w-full'>
        <Link to='/features' >
          <ArrowLeftCircleIcon className='md:h-10 h-8 inline relative hover:text-yellow-600' />
        </Link>
        <h1 className='font-semibold text-3xl text-slate-800 text-center'>Get Historical Exchange Rate </h1>
        <form action='' onSubmit={(e) => fetchData(e)}>
          <div className='flex gap-8 flex-wrap-left flex-wrap bg-slate-800 my-10 py-5 lg:py-10 px-10 rounded-xl'>
            <div >
              <label htmlFor="base" className='font-semibold text-lg text-yellow-200'>Base: <br />
                <input type="text" value={base}
                  onChange={(e) => {
                    setBase((e.target.value).toUpperCase())
                    setLoading(true)
                  }}
                  required={true}
                  className='p-2 uppercase rounded mt-3 text-slate-800 text-md' />
              </label>
            </div>
            <div >
              <label htmlFor="date" className='font-semibold text-lg text-yellow-200'>Date: <br />
                <input type="date" value={date}
                  onChange={(e) => {
                    setDate(e.target.value);
                    setLoading(true);
                  }}
                  required={true}
                  className='p-2 rounded mt-3 text-slate-800 text-md' />
              </label>
            </div>
            <div>
              <label htmlFor="currency" className='font-semibold text-lg text-yellow-200'>Currency: <br />
                <input type="text" value={currency}
                  onChange={(e) => {
                    setCurrency((e.target.value).toUpperCase())
                    setLoading(true)
                  }}
                  required={true}
                  className='p-2 rounded uppercase mt-3 text-slate-800 text-md' />
              </label>
            </div>
            <div className='flex items-end'>
              <button className='bg-yellow-300 rounded uppercase font-medium hover:bg-yellow-400 px-12 py-3 h-fit'
                type=''>Get Data
              </button>
            </div>
          </div>
        </form>
        {loading ? <h2 className="font-semibold text-center text-slate-800 text-2xl">Select data range to get started!</h2>
          : <h2 className="font-bold text-center tracking-wider text-slate-800 text-xl">
            {base}
            <span className='font-semibold'> vs </span> {currency} <span className='font-semibold'>on</span> {date}
          </h2>
        }
        <div className={`flex flex-wrap w-fit px-5 bg-slate-300 ${loading && 'animate-pulse bg-yellow-400'} my-4 mx-auto py-2 justify-center rounded-lg text-white`}>
          {loading ? <h1 className='text-slate-900 text-lg font-semibold'>Loading...</h1> : (
            <>

              {Object.entries(rates).map(([currency, rate]) => (
                <div key={currency}
                  className='md:w-56 w-48 py-2 pl-5'>
                  <span className='font-semibold text-slate-900'>
                    <ReactCountryFlag countryCode={currency.slice(0, 2)} svg style={{ marginRight: '8px' }} />
                    {currency}:
                  </span>
                  <span className='p-2 text-slate-900'>{rate}</span>
                </div>
              ))}
            </>
          )}
        </div>
      </div>

    </>
  )
}

export default HistoricalRates