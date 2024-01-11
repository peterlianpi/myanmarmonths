import "./Item.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Detials from "../../Pages/Detials";
import { useNavigate } from "react-router-dom";

const Item = (prop) => {
  // Ensure currentPage and itemsPerPage are numbers
  const currentPageNumber = Number(prop.currentPage);
  const itemsPerPageNumber = Number(prop.itemsPerPage);
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();

  // Validate that currentPage and itemsPerPage are valid numbers
  if (
    isNaN(currentPageNumber) ||
    isNaN(itemsPerPageNumber) ||
    itemsPerPageNumber <= 0
  ) {
    console.error("Invalid currentPage or itemsPerPage values.");
    return null;
  }

  const startIndex = (currentPageNumber - 1) * itemsPerPageNumber;

  const endIndex = startIndex + itemsPerPageNumber;

  const month = prop.months;
  const visibleItems = month.slice(startIndex, endIndex);

  const onClickItems = (item) => {
    setSelectedItem(item);
    navigate(`${item}`);
  };

  return (
    <>
      {visibleItems.map((month) => (
        <div
          key={month.Id}
          className="item-main"
          onClick={() => onClickItems(month.Id)}
        >
          {selectedItem === month.Id && (
            <div>
              <Detials />
            </div>
          )}
          {!selectedItem && (
            <>
              <img className="item-image" src={`/img/${month.Id}.jpg`} alt="" />
              <h2 className="item-title">
                {month.MonthMm} <br />
                <FontAwesomeIcon icon={faCircleInfo} />
              </h2>
            </>
          )}
        </div>
      ))}
    </>
  );
};
export default Item;
