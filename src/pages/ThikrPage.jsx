import React, { useState, useEffect } from "react";

const ThikrPage = () => {
  const [thikr, setThikr] = useState([]);

  useEffect(() => {
    fetch(`https://www.hisnmuslim.com/api/ar/4.json`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setThikr(data["العربية"]);
      });
  }, []);
  return <div>ThikrPage</div>;
};

export default ThikrPage;
