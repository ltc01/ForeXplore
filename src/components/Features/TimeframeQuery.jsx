import React, { useState } from 'react'
import ReactCountryFlag from 'react-country-flag';
import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const TimeframeQuery = () => {
  const [startDate, setStateDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [base, setBase] = useState('USD');
  const [currency, setCurrency] = useState('');
  const [rates, setRates] = useState({});
  const [ loading, setLoading] = useState(true);

  const fetchData = (e) => {
    e.preventDefault();
    try {
      // const res = fetch(`https://api.forexrateapi.com/v1/timeframe?api_key=${apikey}&start_date=${startDate}&end_date=${endDate}&base=${base}&currencies=${currency}`)
      // if(!res.ok){
      //   throw new Error("Error fetching data!!!")
      // }
      // const resData = res.json();
      const resData = {
        "success": true,
        "base": "USD",
        "start_date": "2021-04-22",
        "end_date": "2021-04-23",
        "rates": {
          "2021-04-22": {
            "EUR": 0.83233837,
            "INR": 75.09793267,
            "JPY": 107.97997033
          },
          "2021-04-23": {
            "EUR": 0.82657397,
            "INR": 75.00244667,
            "JPY": 107.88867591
          },
        }
      }
      setRates(resData.rates);
      setLoading(false)
    } catch (err) {
      console.error(err)
      setLoading(false)
    }
  }
  return (
    <>
      <div className='lg:py-24 lg:px-40 py-28 px-10 w-full'>
        <Link to='/features' >
          <ArrowLeftCircleIcon className='md:h-10 h-8 inline relative hover:text-yellow-600' />
        </Link>
        <h1 className='font-semibold text-3xl text-slate-800 text-center'>Forex currency converter</h1>

        {/* Conversion form */}
        <div className='bg-slate-800 my-10 py-5 lg:py-10 px-10 rounded-xl'>
          <form action='' onSubmit={(e) => fetchData(e)} className='flex justify-center flex-wrap gap-6 lg:gap-16 items-center'>
            <div>
              <h3 className='text-white font-semibold mb-2'>Start Date: </h3>
              <input type="date" name="startDate" id="startDate" required value={startDate} onChange={(e)=>setStateDate(e.target.value)} />
            </div>
            <div>
              <h3 className='text-white font-semibold mb-2'>End Date: </h3>
              <input type="date" name="startDate" id="startDate" required value={endDate} onChange={(e)=> setEndDate(e.target.value)} />
            </div>
            <button className='bg-yellow-300 rounded-lg uppercase font-semibold tracking-wide lg:text-lg hover:bg-yellow-400 px-20 py-5 h-fit'
            >Convert
            </button>
          </form>
        </div>
        {loading ? <h2 className="font-semibold text-center text-slate-800 text-2xl">Select date range to get started!</h2>
          : <h2 className="font-semibold text-center text-slate-800 text-xl">
            <span className="font-normal">Exchange rates From</span> {startDate} <span className='font-normal'> to </span> {endDate}
          </h2>
        }
        <div className={`flex flex-wrap w-fit px-5 bg-slate-300 ${loading && 'animate-pulse bg-yellow-400'} my-4 mx-auto py-2 justify-center rounded-lg text-white`}>
          {loading ? <h1 className='text-slate-900 text-lg font-semibold'>Loading...</h1> : (
            <>

              {Object.entries(rates).map(([date, rate]) => (
                <div key={date}
                  className='md:w-56 w-48 py-2 pl-5'>
                  <h2 className='font-semibold text-lg text-slate-900'>
                    {date}:
                  </h2>
                  <ul className='p-2 text-slate-900'>
                  {Object.entries(rate).map(([key, value])=>(
                  <li key={key} className='p-2'>
                  <ReactCountryFlag countryCode={key.slice(0, 2)} svg style={{ marginRight: '8px' }} />
                  <span className="font-semibold ">{key}</span>: {value}</li>
                  ))}
                  </ul>
                </div>
              ))}
            </>
          )}
        </div>
        
      </div >

    </>
  )
}

export default TimeframeQuery