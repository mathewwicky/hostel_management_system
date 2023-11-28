import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const history = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Make a POST request to your Django backend
    try {
      const response = await fetch('http://localhost:8000/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: formData.email, password: formData.password }),
      });

      if (response.ok) {
        // Redirect to the dashboard or any other page upon successful login
        history('/dashboard');
      } else {
        // Handle login error, show an error message, or set state accordingly
      }
    } catch (error) {
      // Handle network error or other issues
      console.error('Login failed:', error);
    }
  };


  
//   <input type='text' placeholder='username' onChange={(e)=>setEmail(e.target.value)} name='email' />
// <input type='password' placeholder='password' onChange={(e)=>setPword(e.target.value)} name='pword' />
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <h5 style={{textAlign: 'center'}} className="text-xl font-medium text-gray-900 dark:text-white">Sign in to Hostel Mgt App</h5>
          <div>
                <label htmlFor="studentno" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                <input type="text" name="email" id="email" onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required />
              </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input type="password" onChange={handleInputChange} value={formData.password} name='password' id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
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
            Login to your Account
          </button> 

          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500"><Link to='/register'>Create account</Link></a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

