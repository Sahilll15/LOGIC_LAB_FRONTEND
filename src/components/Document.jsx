import React, { useEffect, useState } from 'react';
import Alternate from "../components/Layout/User";
import axios from 'axios';

const host = process.env.REACT_APP_API_HOST;

const Document = () => {
    const [documents, setDocuments] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [file, setFile] = useState(null);

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const getDocuments = async () => {
        try {
            const response = await axios.get(`${host}/api/v1/document/get`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('authtoken')}`
                }
            });
            if (response.status === 200) {
                setDocuments(response.data);
            }
        } catch (error) {
            console.error('Error fetching documents:', error);
        }
    }

    const createDocument = async () => {
        try {
            const formData = new FormData();
            formData.append('name', firstName);
            formData.append('image', file);

            const response = await axios.post(`${host}/api/v1/document/create`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${localStorage.getItem('authtoken')}`
                }
            });
            if (response.status === 200) {
                alert('Document created');
                getDocuments(); // Refresh documents after creation
            }
        } catch (error) {
            console.error('Error creating document:', error);
        }
    }

    useEffect(() => {
        getDocuments();
    }, []);

    return (
        <Alternate>
            <br />
            <div className="extraOutline p-4 bg-white w-max bg-whtie m-auto rounded-lg">
                <div>
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                    <input
                        type="text"
                        id="first_name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="John"
                        value={firstName}
                        onChange={handleFirstNameChange}
                        required
                    />
                </div>
                <div className="file_upload p-5 relative border-4 border-dotted border-gray-300 rounded-lg" style={{ width: 450 }}>
                    <svg className="text-indigo-500 w-24 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                    <div className="input_field flex flex-col w-max mx-auto text-center">
                        <label>
                            <input
                                className="text-sm cursor-pointer w-36 hidden"
                                type="file"
                                multiple
                                onChange={handleFileChange}
                            />
                            <div className="text bg-indigo-600 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 p-2 hover:bg-indigo-500">Upload Documents</div>
                        </label>
                    </div>
                </div>

            </div>
            <button className="text-sm cursor-pointer w-36 bg-blue-500 text-white py-2 px-4 rounded" onClick={createDocument}>Create Document</button>
            {documents.map((doc, index) => (
                <div key={index} className="max-w-7xl mt-8 mx-auto">
                    <div className="relative group">
                        <div className="absolute -inset-1 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                            <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={doc.icon} />
                            </svg>
                            <div className="space-y-2">
                                <p className="text-slate-800">{doc.name}</p>
                                <a onClick={() => {
                                    window.open(`${host}/${doc.file}`, `_blank`)
                                }} className="block text-indigo-400 group-hover:text-slate-800 transition duration-200" target="_blank">View Document →</a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Alternate>
    );
};

export default Document;
