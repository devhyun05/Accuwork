import React, { useState } from 'react';
import Navbar from './Navbar';

const Share = () => {
    const [selectedCompany, setSelectedCompany] = useState(null);
    const [email, setEmail] = useState('');

    const companies = [
        { name: 'Linkedin', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg' },
        { name: 'Indeed', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Indeed_logo.png' },
        { name: 'Meetup', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Meetup_Logo.png' },
        { name: 'AngeList', logo: 'https://upload.wikimedia.org/wikipedia/en/2/28/AngelList_logo.svg' },
    ];

    const handleCompanyClick = (index) => {
        // Toggle selection on click
        setSelectedCompany((prevSelected) => (prevSelected === index ? null : index));
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleExportClick = () => {
        // Add logic to handle the export button click, e.g., sending an email with the selected company and entered email.
        // You can use the selectedCompany index and email state.
        console.log(`Exporting ${companies[selectedCompany].name} to ${email}`);
    };

    return (
        <>
            <Navbar />
            <body className='min-h-screen bg-gradient-to-r from-yellow-200 via-pink-200 to-pink-400'>
                <div className="container mx-auto py-8">
                    <h1 className="text-3xl font-bold text-center mb-8">Company to Export</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {companies.map((company, index) => (
                            <div
                                key={index}
                                className={`bg-white p-4 rounded shadow-md ${
                                    selectedCompany === index ? 'border-4 border-blue-500' : ''
                                }`}
                                onClick={() => handleCompanyClick(index)}
                            >
                                <img src={company.logo} alt={`${company.name} Logo`} className="w-full h-24 object-contain mb-4" />
                                <p className="text-center font-semibold">{company.name}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col items-center mt-8">
                        <label className="text-3xl font-bold text-center mb-8">Email to export</label>
                        <input
                            type="email"
                            className="p-2 border border-gray-300 rounded-md w-1/2 h-12 text-center" // Adjusted width and height, added text-center
                            placeholder="Enter the email address that you want to export"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>

                    <div className="flex justify-end mt-8">
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                            onClick={handleExportClick}
                            disabled={!selectedCompany || !email}
                        >
                            Export
                        </button>
                    </div>
                </div>
            </body>
        </>
    );
};

export default Share;
