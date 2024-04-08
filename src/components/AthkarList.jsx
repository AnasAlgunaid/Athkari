import React, { useEffect, useState } from "react";
import AthkarListItem from "./AthkarListItem";
import SectionTitle from "./SectionTitle";
import SearchBar from "./SearchBar";
import LoadingSpinner from "./LoadingSpinner";
import Error from "./Error";

const AthkarList = () => {
  const [athkars, setAthkars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [originalAthkars, setOriginalAthkars] = useState([]);
  const [error, setError] = useState(false);

  // Fetching data from API
  useEffect(() => {
    fetch("https://www.hisnmuslim.com/api/ar/husn_ar.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        data["العربية"].forEach((element) => {
          element.TITLE = element.TITLE.replaceAll(/[\u064B-\u065F]/g, "");
        });
        setAthkars(data["العربية"]);
        setOriginalAthkars(data["العربية"]);
      })
      .catch((error) => {
        console.error(error);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Function to handle search query change
  const handleSearchChange = (searchQuery) => {
    const filteredAthkars = originalAthkars.filter((item) =>
      item.TITLE.includes(searchQuery)
    );
    setAthkars(filteredAthkars);
  };

  return (
    <section className="bg-grayColor py-4 md:py-8 min-h-screen">
      <div className="container">
        {/* <SectionTitle title="الأذكار" /> */}
        <SearchBar placeholder="البحث عن أذكار" onChange={handleSearchChange} />
        {loading && <LoadingSpinner />}
        {error && (
          <Error errorMessage="حدث خطأ أثناء تحميل البيانات، الرجاء المحاولة لاحقًا" />
        )}
        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  ">
            {athkars.length === 0 ? (
              <p>لا توجد نتائج </p>
            ) : (
              athkars.map((item) => {
                return (
                  <AthkarListItem
                    key={item.ID}
                    id={item.ID}
                    title={item.TITLE}
                    subtitle="5 دقائق"
                  />
                );
              })
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default AthkarList;
