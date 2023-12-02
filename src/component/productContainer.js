import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// css
import "../css/productContainer.css";

// product data
import { productDB } from "../database/data";

//
function ProductContainerLoader({ limit, page, random, sort, callback }) {
  const [data, setData] = useState([]);

  

  // create, update data to load item
  useEffect(() => {
    let data = productDB.filter((data, index) => {
      if (index >= (page - 1) * limit && index < page * limit) {
        return data;
      }
      return false;
    });
    setData(data);
    callback(productDB);
  }, [page, limit, callback]);

  return (
    <>
      {data.map((data, index) => (
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
