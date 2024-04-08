import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Error from "../components/Error";
import LoadingSpinner from "../components/LoadingSpinner";
import ThikrItem from "../components/ThikrItem";
const ThikrPage = () => {
  const [thikr, setThikr] = useState([]);
  const { id } = useParams();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [thikrTitle, setThikrTitle] = useState("");
  useEffect(() => {
    fetch(`https://www.hisnmuslim.com/api/ar/${id}.json`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const title = Object.keys(data)[0];
        setThikrTitle(title);
        setThikr(data[title]);
      })
      .catch((error) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <section className="bg-grayColor py-4 md:py-8 min-h-screen">
      <div className="container">
        <div>
          <div class="relative flex py-5 items-center">
            <div class="flex-grow border-t border-greenColor"></div>
            <h1 class="flex-shrink mx-4 text-xl sm:text-2xl md:text-3xl font-extrabold text-blackColor my-2 ">
              {thikrTitle}
            </h1>
            <div class="flex-grow border-t border-greenColor"></div>
          </div>
        </div>
        {loading && <LoadingSpinner />}
        {error && (
          <Error errorMessage="حدث خطأ أثناء تحميل البيانات، الرجاء المحاولة لاحقًا" />
        )}
        {!loading && !error && (
          <>
            {thikr.map((element) => {
              return (
                <ThikrItem
                  key={element.ID}
                  text={element.ARABIC_TEXT}
                  repeat={element.REPEAT}
                  audio={element.AUDIO}
                />
              );
            })}
          </>
        )}
      </div>
    </section>
  );
};

export default ThikrPage;
