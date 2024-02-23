import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom'
import { apidataState, handleState } from "../store/atoms";
import axios from "axios";


const LandingPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [handle, setHandle] = useRecoilState(handleState);
  const [apiData,setApiData]=useRecoilState(apidataState);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
   
    try {
      const response = await axios.get(`https://codeforces.com/api/user.status?handle=${handle}`);

      const response1 = await axios.get(`https://codeforces.com/api/user.status?handle=${handle}`);

      setApiData(response1.data.result);
      

      if (response.data.status === 'OK') {
        const userInfo = response.data.result[0];
        console.log('User Information:', userInfo);
        navigate(`/dashboard/${handle}`);

      } else {
        console.log('User not found.');
      }
    } catch (error) {
      console.error('Error fetching user information:', error.message);
    } finally {
      setLoading(false);

    }
  };





  return (
    <div className="flex flex-col items-center justify-center min-w-96 ">
      <div className="mt-16 p-6 bg-gray-500 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30">
        <form onSubmit={handleFormSubmit}>
          <label className="form-control w-full max-w-md">
            <input
              type="text"
              placeholder="Enter Codeforces User Handle"
              className="input input-bordered w-full max-w-md"
              value={handle}
              onChange={(e) => setHandle(e.target.value)}
              required
            />
            <div className="label">
              <span className="label-text-alt ">Codeforces User Handle</span>
            </div>
          </label>
          <button className="btn bg-blue-500 glass" type="submit" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LandingPage;
