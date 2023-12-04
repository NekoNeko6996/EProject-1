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
    let sortData;

    //sort data
    switch (sort.action) {
      case "search":
        // find key word
        sortData = productDB.filter((data) =>
          data.name.toLowerCase().includes(sort.value.toLowerCase())
            ? data
            : false
        );
        break;
      case "price":
        // find price
        sortData = productDB.filter((data) =>
          data.price >= sort.value.priceFrom && data.price <= sort.value.priceTo
            ? data
            : false
        );
        break;
      case "sale":
        // find sale
        sortData = productDB.filter((data) => (data.sale !== 0 ? data : false));
        break;

      default:
        sortData = productDB;
        break;
    }

    // get random
    if(random) {
      let shuffled = sortData.sort(() => 0.5 - Math.random());
      sortData = shuffled.slice(limit)
    }

    // pagination
    let data = sortData.filter((data, index) =>
      (index >= (page - 1) * limit && index < page * limit) ? data : false
    );
    
    // set and return callback data
    setData(data);  
    callback(sort.action ? data : productDB);
  }, [page, limit, callback, sort, random]);

  return (
    <>
      {data.map((data, index) => (
        <Link to={`/product/${data.id}`} className="productLink" key={index}>
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
