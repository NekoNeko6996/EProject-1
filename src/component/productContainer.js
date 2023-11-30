import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// css
import "../css/productContainer.css";

//
function ProductContainerLoader({ limit, page, random, sort, callback }) {
  const [dataResponse, setDataResponse] = useState([]);
  const [data, setData] = useState([]);

  // fetch data
  useEffect(() => {
    fetch("https://655ef68a879575426b443edb.mockapi.io/api/v1/productDB", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setDataResponse(data);
        callback(data);
      })
      .catch((err) => console.error(err));
  }, [callback]);

  // create, update data to load item
  useEffect(() => {
    let data = dataResponse.filter((data, index) => {
      if (index >= (page - 1) * limit && index < page * limit) {
        return data;
      }
      return false;
    });
    setData(data);
  }, [page, limit, dataResponse]);
  
  return (
    <>
      {data.map((data) => (
        <Link to={`/product/${data.id}`} className="productLink" key={data.id}>
          <div className="items-box">
            <img src={data.imgUrl.no1} alt={data.name} className="items-img" />
            <p className="items-name">{data.name}</p>
            <div className="items-price-container">
              <p className="items-price">
                {data.price.toLocaleString("VN-vi", {
                  style: "currency",
                  currency: "VND",
                })}
              </p>
              {data.sale ? (
                <div className="items-label">{data.sale}% off</div>
              ) : null}
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}

ProductContainerLoader.propTypes = {
  limit: PropTypes.number,
  page: PropTypes.number,
  random: PropTypes.bool,
  sort: PropTypes.object,
  callback: PropTypes.func,
};

export default ProductContainerLoader;
