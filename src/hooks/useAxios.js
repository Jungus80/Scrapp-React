import { useState, useEffect } from 'react';
import axios from 'axios';

//axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

const useAxios = (axiosParams) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);

    const fetchData =  async (params) => {
        try{
             const  result = await axios.request(params) // request get the method of the object params
            setResponse(result.data) //  data is the body of response 
        }catch(error){
            setError(error)
        }finally{
            ()=>setloading(false)
        }
    }

    useEffect(() => {
        fetchData(axiosParams);
    }, []); // use only one time 

    return { response, error, loading };
};

export default useAxios;