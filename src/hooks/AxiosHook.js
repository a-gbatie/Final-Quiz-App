import React, { useEffect, useState } from 'react'
import axios from 'axios'


// axios.defaults.baseURL = 'https://api.api-ninjas.com/v1/trivia?category=fooddrink'
const options = {
  method: 'GET',
  url: 'https://trivia-by-api-ninjas.p.rapidapi.com/v1/trivia',
  headers: {
    'X-RapidAPI-Key': '0eda48c85fmsh5e0bb42796e8194p1008e5jsn9180d0cd9a9f',
    'X-RapidAPI-Host': 'trivia-by-api-ninjas.p.rapidapi.com'
  }
};


const AxiosHook = ({ url }) => {
  const [res, setRes] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = () => {
      axios
        .request(options)
        .then((res) => setRes(res.data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false))
    }
    fetchData()
  }, [url])
  
  return {
    res, error, loading
  }
}

export default AxiosHook;