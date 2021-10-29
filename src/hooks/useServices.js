import { useEffect, useState } from "react";

const useService = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('https://desolate-oasis-18622.herokuapp.com/services')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return { services };
};

export default useService;