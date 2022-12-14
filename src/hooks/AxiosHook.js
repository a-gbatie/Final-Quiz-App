import { useEffect, useState } from 'react'
import axios from 'axios'
// require('dotenv').config()


axios.defaults.baseURL = 'https://opentdb.com'

const AxiosHook = ({ url }) => {
  const [res, setRes] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(url)
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