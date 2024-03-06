import { useState } from 'react';

function Resumepredictor() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleGenerateContent = async () => {
    setLoading(true);

    // Replace the following with your backend API endpoint
    const response = await fetch('YOUR_BACKEND_API_ENDPOINT', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ datainput }),
    });

    const data = await response.json();
    setResult(data.text);

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6">Generative AI App</h2>
        <div className="mb-4">
          <label htmlFor="resumeImage" className="block text-sm font-medium text-gray-600">
            Upload Resume Image
          </label>
          <input
            type="file"
            id="resumeImage"
            accept="image/*"
            onChange={(e) => {
              // Handle file upload and set datainput state
            }}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <button
          onClick={handleGenerateContent}
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Generate Content
        </button>
        {loading && <p className="mt-4 text-gray-600">Loading...</p>}
        {result && (
          <div className="mt-4">
            <h3 className="text-lg font-bold mb-2">Generated Content:</h3>
            <p>{result}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Resumepredictor;
