import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
const NotFoundPage = () => {
  return (
    <section className="flex flex-col justify-center items-center min-h-[90vh] text-center container">
      <h1 className="text-6xl font-extrabold text-greenColor my-4">404</h1>
      <p className="text-lg sm:text-xl">
        عذراً، الصفحة التي تبحث عنها غير موجودة
      </p>

      <Link to="/">
        <Button text="العودة للصفحة الرئيسية" bg="bg-greenColor" />
      </Link>
    </section>
  );
};

export default NotFoundPage;
