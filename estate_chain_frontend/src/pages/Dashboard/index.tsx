import { useState, useEffect } from "react";
import { Formik } from "formik";
import { ethers } from "ethers";
import UserRequestToCompany from "artifacts/contracts/AccuworkUserRequest.sol/UserRequestToCompany.json";
import { jsPDF } from "jspdf"; 
//@ts-ignore
import AccuworkVerfied from 'images/accuworkVerfied.png'; 
import Navbar from "components/layouts/Navbar";
import { WorkExperience, WorkExperienceResponseData } from './types';

const PROVIDER = `${process.env.REACT_APP_ETH_PROVIDER}`;
const CONTRACT_ADDRESS = `${process.env.REACT_APP_CONTRACT_ADDRESS}`;


function Dashboard() {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [workExperiences, setWorkExperiences] = useState<WorkExperienceResponseData[]>([]);

  const openModal = () => {
    setModalOpen(true);
  };

  const generatePDF = () => {
    const doc = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: 'a4'
    });
  
    const textX = doc.internal.pageSize.getWidth() / 2;
    const textY = 20; 
  

    doc.setFontSize(40); 
    doc.setFont('bold');
  
    doc.text("CERTIFICATE", textX, textY + 20, { align: 'center' });
  
    doc.setFontSize(16);
    doc.setFont('normal');
  
    // @ts-ignore
    doc.text("Employment Verification", textX, textY + 40, { align: 'center', css: { whiteSpace: 'nowrap' } });
  
    const lineY = textY + 30;
    const lineWidth = 160; 
    doc.setLineWidth(0.5); 
    doc.line(textX - lineWidth / 2, lineY, textX + lineWidth / 2, lineY); 


    const additionalText = "This certificate is for:";
    const additionalTextY = lineY + 30;
    // @ts-ignore
    doc.text(additionalText, textX, additionalTextY, { align: 'center', css: { whiteSpace: 'nowrap' } });
  
    const juliusDejonText = "Julius Dejon";
    doc.setFontSize(50); 
    doc.setTextColor(103,92,255); 
    doc.text(juliusDejonText, textX, additionalTextY + 25, { align: 'center' });

    const imageSize = 50; 
    const imageX = textX - imageSize / 2; 
    const imageY = additionalTextY + 40; 
    doc.addImage(AccuworkVerfied, 'PNG', imageX, imageY, imageSize, imageSize);
  

    doc.save('report.pdf');
  };
  
  const closeModal = () => {
    setModalOpen(false);
  };

  // Calls all the work experiences
  async function loadBlockchainData() {
      const provider = new ethers.providers.JsonRpcProvider(PROVIDER);
      const contract = new ethers.Contract(
        CONTRACT_ADDRESS,
        UserRequestToCompany.abi,
        provider
      );
      console.log(contract);
      try {
        const data = await contract.getWorkExperiencesBySender();
        console.log(`data`, data);
        setWorkExperiences(data);
      } catch (error) {
        console.log(error);
      }
  }

  useEffect(() => {
    loadBlockchainData();
  }, []);

  const onAddWorkExperience = async (values: WorkExperience) => {
      const provider = new ethers.providers.JsonRpcProvider(PROVIDER);

      // Get the signer
      const signer = provider.getSigner();

      const contract = new ethers.Contract(
        CONTRACT_ADDRESS,
        UserRequestToCompany.abi,
        signer
      );

      // Specify the amount of Ether to send (in Wei) using the 'value' option
      const valueToSend = ethers.utils.parseEther("0.0002"); // Sending 0.001 Ether, adjust as needed

      try {
        const data = await contract.addWorkExperienceAndVerifyAndPay(
          values.employeeName,
          values.companyName,
          values.position,
          values.location,
          values.startDate,
          values.endDate,
          {
            value: valueToSend,
          }
        );
        // Wait for the transaction to be mined
        const result = await data.wait();

        if (result) {
          // LTODO: Check data if verified
          // Now it always assumes that it is verified
          alert("Your work experience has been exported");
          closeModal();
          loadBlockchainData();
        }
      } catch (error) {
        console.log(error);
      }
  };


  return (
    <div>
      <Navbar />
      <main className="h-screen pt-20 pb-20 mb-2 bg-gradient-to-r from-yellow-200 via-pink-200 to-pink-400">
        <div className="w-full flex items-center justify-center">
          <div className="relative overflow-x-auto flex flex-col">
            <div className="flex mb-6 ml-auto">
              <button
                onClick={openModal}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Add Work Experience
              </button>
            </div>

            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Employee Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Company Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Position
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Location
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Start Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    End Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Certificate{" "}
                  </th>
                </tr>
              </thead>
              <tbody>
                {workExperiences.map((workExperience) => {
                  return (
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td className="px-6 py-4">{workExperience.employeeName}</td>
                      <td className="px-6 py-4">{workExperience.companyName}</td>
                      <td className="px-6 py-4">{workExperience.position}</td>
                      <td className="px-6 py-4">{workExperience.location}</td>
                      <td className="px-6 py-4">
                        {parseInt(workExperience.startDate._hex)}
                      </td>
                      <td className="px-6 py-4">
                        {parseInt(workExperience.endDate._hex)}
                      </td>
                      <td className="px-6 py-4">
                        {workExperience.isVerified ? "Verified" : "Pending"}
                      </td>
                      <td className="px-6 py-4">
                        <button onClick={generatePDF} className="text-blue-500 hover:underline">
                          View Certificate
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div
              className="modal-overlay fixed inset-0 bg-black opacity-50"
              onClick={closeModal}
            ></div>
            <div className="modal-container bg-white w-3/4 md:w-2/3 rounded shadow-lg z-50">
              <div className="modal-header flex justify-between items-center p-4 bg-blue-500 text-white rounded-t">
                <h3 className="text-lg font-semibold">Add Work Experience</h3>
                <button className="text-white" onClick={closeModal}>
                  Close
                </button>
              </div>
              <div className="modal-body p-4 h-100vh bg-gradient-to-r from-yellow-200 via-pink-200 to-pink-400">
                <div className="flex items-center justify-center">
                  <div className="grid grid-cols-2 w-full m-10 ">
                    <div className="bg-gray-100 items-center justify-center p-10">
                      <h1 className="text-3xl font-semibold mb-4">Accuwork</h1>
                      <p className=" mb-4">
                        Get the proof of work experience and secure it
                      </p>
                      <p>0.001 ethereum for one request</p>
                    </div>
                    <Formik
                      initialValues={{
                        employeeName: "",
                        companyName: "",
                        position: "",
                        location: "",
                        startDate: 0,
                        endDate: 0,
                      }}
                      onSubmit={async (values: WorkExperience) => {
                        onAddWorkExperience(values);
                      }}
                    >
                      {({ values, handleSubmit, handleChange }) => {
                        const {
                          employeeName,
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
                                    type="text"
                                    name="employeeName"
                                    className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Your Name"
                                    required
                                    value={employeeName}
                                    onChange={handleChange("employeeName")}
                                  />
                                  <input
                                    type="text"
                                    name="companyName"
                                    className="bg-gray-50  border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Company Name"
                                    required
                                    value={companyName}
                                    onChange={handleChange("companyName")}
                                  />
                                  <input
                                    type="text"
                                    name="employeePosition"
                                    className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Position"
                                    required
                                    value={position}
                                    onChange={handleChange("position")}
                                  />
                                  <input
                                    type="text"
                                    name="workLocation"
                                    className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Location"
                                    required
                                    value={location}
                                    onChange={handleChange("location")}
                                  />
                                  <div
                                    date-rangepicker
                                    className="flex items-center mt-3"
                                  >
                                    <div className="relative">
                                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg
                                          className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                          aria-hidden="true"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="currentColor"
                                          viewBox="0 0 20 20"
                                        >
                                          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                        </svg>
                                      </div>
                                      <input
                                        name="startDate"
                                        type="text"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Select date start"
                                        value={startDate}
                                        onChange={handleChange("startDate")}
                                      />
                                    </div>
                                    <span className="mx-4 text-gray-500">to</span>
                                    <div className="relative">
                                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg
                                          className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                          aria-hidden="true"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="currentColor"
                                          viewBox="0 0 20 20"
                                        >
                                          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                        </svg>
                                      </div>
                                      <input
                                        name="endDate"
                                        type="text"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Select date end"
                                        value={endDate}
                                        onChange={handleChange("endDate")}
                                      />
                                    </div>
                                  </div>
                                </>
                              </div>
                              <div>
                                <div className="mt-5 text-right">
                                  <button
                                    type="submit"
                                    onClick={() => handleSubmit()}
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                  >
                                    Create Request
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
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Dashboard;
