import React, { useEffect } from 'react'
import { useState } from 'react'
import ReactCountryFlag from 'react-country-flag';
import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';


const CurrencyConverter = () => {
  const [base, setBase] = useState('USD');
  const [loading, setLoading] = useState(true);
  const [rates, setRates] = useState({});
  const [date, setDate] = useState('');
  const [currency, setCurrency] = useState('');
  const [symbol, setSymbol] = useState({
    "AED": "UAE Dirham",
    "AFN": "Afghan Afghani",
    "ALL": "Albanian Lek",
  })
  const [amount, setAmount] = useState(1)
  const [result, setResult] = useState(null)
  const apikey = '01a0ec3eda0668e2ee86aa79787ca162';

  const fetchData = async (e) => {
    e.preventDefault();
    try {
      // const res = await fetch(`https://api.forexrateapi.com/v1/convert?api_key=${apikey}&from=${base}&to=${currency}&amount=${amount}`);
      // if(!res.ok){
      //   throw new Error('Failed to fetch exchange rates');
      // }
      // const resData = await res.json();
      const resData = {
        "success": true,
        "query": {
          "from": "USD",
          "to": "EUR",
          "amount": 100
        },
        "info": {
          "quote": 0.82657397,
          "timestamp": 1619135999
        },
        "result": 82.65739676
      }
      setResult(resData.result);
      setLoading(false);
    } catch (error) {
      console.error('ERROR fetching data: ', error);
      setLoading(false);
    }
  }

  // useEffect(()=>{
  //   const getSymbols = async()=>{
  //     const res = await fetch(`https://api.forexrateapi.com/v1/symbols?api_key=${apikey}`)
  //     const resData = res.json();
  //     setSymbol(resData.symbols)
  //   }
  //   getSymbols();
  // }, [apikey]);
  return (
    <>
      <div className='lg:py-24 lg:px-40 py-28 px-10 w-full'>
        <Link to='/features' >
          <ArrowLeftCircleIcon className='md:h-10 h-8 inline relative text-slate-900' />
        </Link>
        <h1 className='font-semibold text-3xl text-slate-800 text-center'>Convert currency from one to another</h1>

        {/* Conversion form */}
        <div className='bg-slate-800 my-10 py-5 lg:py-10 px-10 rounded-xl'>
          <form action='' onSubmit={(e) => fetchData(e)} className='flex justify-center flex-wrap gap-6 lg:gap-16 items-center'>
            <div>
              <h3 className='text-white font-semibold mb-2'>From: </h3>
              <select onChange={(e) => setBase(e.target.value)} id="base" class=" py-5 w-full font-semibold mb-3 border border-gray-300  rounded-lg block p-2.5">
                <option disabled aria-required={true}>Choose a base</option>
                {Object.entries(symbol).map(
                  ([code, name]) => (
                    <option value={code} key={code}>{name} | {code}</option>
                  )
                )}
              </select>
              <input type="number" name="base" id="baseValue" value={amount} min={1}
                onChange={(e) => setAmount(e.target.value)}
                className='text-lg h-11 w-full pl-4 rounded-lg' />
            </div>
            <div>
            <h3 className='text-white font-semibold mb-2'>To: </h3>
              <select onChange={(e) => setCurrency(e.target.value)} id="currency" class="w-full font-semibold mb-3 py-5 border border-gray-300 rounded-lg block p-2.5">
                <option disabled>Conversion choice</option>
                {Object.entries(symbol).map(
                  ([code, name]) => (
                    <option value={code} key={code}>{name} | {code}</option>
                  )
                )}
              </select>
              <input type="number" name="base" id="baseValue" value={result} disabled
                className={`text-lg bg-white text-green-950 font-semibold w-full h-11 pl-4 rounded-lg border-[3px] ${result ? 'border-green-600': 'animate-pulse'}`} />
            </div>
            <button className='bg-yellow-300 rounded-lg uppercase font-semibold tracking-wide lg:text-lg hover:bg-yellow-400 px-20 py-5 h-fit'
            >Convert
            </button>
          </form>
        </div>        
      </div >

    </>
  )
}

export default CurrencyConverter