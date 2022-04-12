import { useEffect, useState } from "react";
const useFetch = ({ url }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [url]);

  async function fetchData() {
    try {
      const response = await fetch(url);
      const responseData = await response.json();
      setData(responseData);
    } catch (e) {
      console.log(e);
    }
  }
  return { data };
};

export default useFetch;
