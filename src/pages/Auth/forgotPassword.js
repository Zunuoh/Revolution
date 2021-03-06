import React, { useState } from "react";

const ForgotpasswordScreen = () => {
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [status, setStatus] = useState("");
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Oops, forgot your password?
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          <a href="#" className="font-medium text-gray-900 ">
            Enter your email or phone number
          </a>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                How do we verify your account?
              </label>
              <div className="mt-1">
                <div>
                  <select
                    id="location"
                    name="location"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    defaultValue="Email"
                    value={status}
                    onChange={(e) =>{setStatus(e.target.value);
                    }}
                  >
                    <option value="email">Email</option>
                    <option value="phonenumber">Phone Number</option>
                  </select>
                </div>
              </div>
            </div>

            {status === 'email' ? (
                <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                 Enter email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="current-password"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            ) : 
            (
                <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Enter phone number
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="number"
                  autoComplete="current-password"
                  value={phonenumber}
                  onChange={(e)=>setPhonenumber(e.target.value)}
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            )}

            {/* <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div> */}

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Reset password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotpasswordScreen;
