import { useParams, useNavigate } from "react-router-dom";

const Detials = (prop) => {
  const months = prop.data.Tbl_Months;
  const { id } = useParams();
  const navigate = useNavigate();

  // Filter month using id
  const filteredMonth = months.filter((month) => id.includes(month.Id));

  const month = filteredMonth[0];

  const onClickHandler = () => {
    navigate("/");
  };

  return (
    <div className="detail-container">
      <div className="title-column-1">
        <h1>
          {month.MonthMm} ({month.MonthEn})
          <br />
          {month.FestivalMm} ({month.FestivalEn})
        </h1>
      </div>
      <div className="title-column-2">
        <button onClick={() => onClickHandler()}>Back</button>
      </div>

      <div className="left-row-text">
        <p>{month.Description}</p>
      </div>
      <div className="right-row-text">
        <p>{month.Detail}</p>
      </div>
    </div>
  );
};
export default Detials;
