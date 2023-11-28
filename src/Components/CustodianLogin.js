import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'

function CustodianLogin() {
    const [email, setEmail] = useState("");
    const [pword, setPword] = useState("");
    const [errors, setErrors] = useState(false);
    const err_msg = "please supply both the Email and a password";
    
    const handleLogin = (e) => {
      e.preventDefault();
      if(email.length === 0 || pword.length === 0){
          setErrors(true);
          return
      }
   }

    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-6" action="#" onSubmit={handleLogin}>
            <h5 style={{textAlign: 'center'}} className="text-xl font-medium text-gray-900 dark:text-white">Sign in to Hostel Mgt App</h5>
            <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                  <input type="email" name="userEmail" id="email" onChange={(e)=>setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />
                </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
              <input type="password" onChange={(e)=>setPword(e.target.value)} name='pword' id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
            </div>
            <div className="flex items-start">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                </div>
                <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
              </div>
              {/* <a href="#" className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Forgot Password?</a> */}
              {/* <Link to="/forgot" className="text-blue-700 hover:underline dark:text-blue-500">Forgot Password?</Link> */}
                  <Link to="/forgot" className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Forgot Password?</Link>
  
            </div>
            {/* <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><Link to='/dashboard'>Login to your Account</Link></button>  */}
            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <Link to='/dashboard'>Login to your Account</Link>
            </button> 
  
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500"><Link to='/register'>Create account</Link></a>
            </div>
          </form>
        </div>
      </div>
    );
  }

export default CustodianLogin