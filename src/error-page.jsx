import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
  return (
    <div className="bg-yellow-400 text-black w-96 rounded-xl py-20 mx-auto text-center mt-40">
        <h1 className='text-3xl font-bold'>Oops!</h1>
        <p className='my-3 text-xl text-semibold'>Sorry, an unexpected error has occured.</p>
        <p>
            <i>{error.statusText || error.message}</i>
        </p>
    </div>
  )
}

export default ErrorPage