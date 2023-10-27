import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { ethers } from "ethers";
import UserRequestToCompany from "../artifacts/contracts/AccuworkUserRequest.sol/UserRequestToCompany.json";
import Navbar from "components/layouts/Navbar";

function Dashboard() {
  const onExport = async (values) => {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(
        process.env.COMPANY_WALLET_ADDRESS,
        UserRequestToCompany.abi,
        provider.getSigner()
      );
      try {
        console.log(values);
        const data = await contract.addWorkExperienceAndVerifyAndPay(
          values.name,
          values.companyName,
          values.position,
          values.location,
          values.startDate,
          values.endDate
        );
        console.log(data);
        if (data) {
          alert("Your work experience has been exported");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <Navbar />
      <main className=" pt-20 pb-20 mb-2 bg-gradient-to-r from-yellow-200 via-pink-200 to-pink-400">
        <div className="flex items-center justify-center ">
          <div className="grid grid-cols-2 w-3/4 p-10 m-10">
            <div className="bg-gray-100 items-center justify-center p-10">
              <h1 className="text-3xl font-semibold mb-4">Accuwork</h1>
              <p className=" mb-4">
                Get the proof of work experience and secure it
              </p>
              <p>0.001 ethereum for one request</p>
            </div>
            <Formik
              initialValues={{
                name: "",
                companyName: "",
                position: "",
                location: "",
                startDate: "",
                endDate: "",
              }}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                onExport(values);
              }}
            >
              {({ values, handleSubmit, handleChange }) => {
                const {
                  name,
                  companyName,
                  position,
                  location,
                  startDate,
                  endDate,
                } = values;
                return (
                  <div className="bg-gray-100 flex items-center justify-center">
                    <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-xl">
                      <div>
                        <>
                          <input
                            type="url"
                            id="website"
                            className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Your Name"
                            required
                            value={name}
                            onChange={handleChange("name")}
                          />
                          <input
                            type="url"
                            id="website"
                            className="bg-gray-50  border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Company Name"
                            required
                            value={companyName}
                            onChange={handleChange("companyName")}
                          />
                          <input
                            type="url"
                            id="website"
                            className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Position"
                            required
                            value={position}
                            onChange={handleChange("position")}
                          />
                          <input
                            type="url"
                            id="website"
                            className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Location"
                            required
                            value={location}
                            onChange={handleChange("location")}
                          />
                          <div date-rangepicker class="flex items-center mt-3">
                            <div class="relative">
                              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg
                                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                              </div>
                              <input
                                name="start"
                                type="text"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Select date start"
                                value={startDate}
                                onChange={handleChange("startDate")}
                              />
                            </div>
                            <span class="mx-4 text-gray-500">to</span>
                            <div class="relative">
                              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg
                                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                              </div>
                              <input
                                name="end"
                                type="text"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Select date end"
                                value={endDate}
                                onChange={handleChange("endDate")}
                              />
                            </div>
                          </div>
                        </>
                      </div>
                      <div>
                        <div class="mt-5 text-right">
                          <button
                            type="submit"
                            onClick={handleSubmit}
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                            Export
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }}
            </Formik>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
