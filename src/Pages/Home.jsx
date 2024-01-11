import { useState } from "react";
import Item from "../Components/Item/Item";
import data from "../assets/MyanmarMonths.json";
import "./CSS/Home.css";

const Home = () => {
  const months = data.Tbl_Months;
  const itemsPerPage = 4;
  const totalRows = Math.ceil(months.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h1 className="item-main-title">မြန်မာလအ‌သေးစိတ်များ</h1>
      <div className="item-container">
        <Item
          months={months}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
        />
      </div>
      <div className="pagination-container">
        {[...Array(totalRows)].map((_, index) => (
          <div
            key={index + 1}
            className={`page-square ${
              currentPage === index + 1 ? "active" : ""
            }`}
            onClick={() => handlePageClick(index + 1)}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;
