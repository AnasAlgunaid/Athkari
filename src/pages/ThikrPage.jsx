import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import Error from "../components/Error";
import LoadingSpinner from "../components/LoadingSpinner";
import ThikrItem from "../components/ThikrItem";
import AthkariAudioPlayer from "../components/AthkariAudioPlayer";
import { HiSpeakerWave } from "react-icons/hi2";
import { IoIosArrowForward } from "react-icons/io";

const ThikrPage = () => {
  const [thikr, setThikr] = useState([]);
  const { id } = useParams();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [thikrTitle, setThikrTitle] = useState("");
  const [listenToWholeThikr, setListenToWholeThikr] = useState(false);
  const state = useLocation();
  const navigate = useNavigate();
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
    <section className="bg-grayColor dark:bg-dark_blackColor dark:text-white py-4 md:py-8 min-h-screen">
      <div className="container">
        <div>
          {/*  go back  */}
          <button
            className="  border-greenColor border-2 font-extrabold text-greenColor px-4 pb-2 pt-1 rounded-full text-lg md:text-xl hover:bg-greenColor hover:text-white active:bg-greenColor active:text-white duration-300 "
            onClick={() => {
              navigate(-1);
            }}
          >
            <IoIosArrowForward className="inline ml-1 text-lg md:text-xl" />
            رجوع
          </button>
        </div>
        {loading && <LoadingSpinner />}
        {error && (
          <Error errorMessage="حدث خطأ أثناء تحميل البيانات، الرجاء المحاولة لاحقًا" />
        )}
        {!loading && !error && (
          <>
            <div className="relative flex py-5 items-center">
              <div className="flex- grow border-t border-greenColor"></div>
              <h1 className="flex-shrink mx-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-blackColor dark:text-white my-2 ">
                {thikrTitle}{" "}
                <HiSpeakerWave
                  className="inline mr-2 hover:text-greenColor active:text-greenColor cursor-pointer hover:scale-105 duration-300"
                  onClick={() => {
                    setListenToWholeThikr(!listenToWholeThikr);
                  }}
                />
              </h1>
              <div className="flex-grow border-t border-greenColor"></div>
            </div>
            {listenToWholeThikr && (
              <div>
                <AthkariAudioPlayer source={state.state.source} />
              </div>
            )}
            {thikr.map((element, index) => {
              return (
                <ThikrItem
                  key={element.ID}
                  elementIndex={index + 1}
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
