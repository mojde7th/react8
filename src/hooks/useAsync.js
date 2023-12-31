import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../libs/constant";
function useAsync(pr) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  function getData() {
    setLoading(true);

    axios
      .get(BASE_URL  + pr)
      .then((res) => {
        setData(res.data);
        setLoading(false);
        console.log(res.data);
      })
      .catch((er) => {
        console.log("er:", er);
      });
  }
  return { data, loading, getData };
}

export default useAsync;
