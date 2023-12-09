import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// css
import "../css/productContainer.css";

// product data
import { productDB } from "../database/data";

//
function ProductContainerLoader({
  limit,
  page,
  random,
  price,
  callback,
  pageFilter,
  searchText,
  stock,
  manufacturer,
}) {
  const [dataNavFilter, setDataNavFilter] = useState([]);
  const [finalData, setFinalData] = useState([]);

  // navigation tag filter
  useEffect(() => {
    let data = [];
    switch (pageFilter) {
      case "mechanical":
        data = productDB.filter((data) =>
          data.tech === "mechanical" ? data : null
        );
        break;
      case "quartz":
        data = productDB.filter((data) =>
          data.tech === "quartz" ? data : null
        );
        break;
      case "sales":
        data = productDB.filter((data) => (data.sale > 0 ? data : null));
        break;
      case "her":
        data = productDB.filter((data) => (data.gift === "her" ? data : null));
        break;
      case "him":
        data = productDB.filter((data) => (data.gift === "him" ? data : null));
        break;
      default:
        data = productDB;
        break;
    }
    setDataNavFilter(data);
  }, [pageFilter]);

  // filter and pagination
  useEffect(() => {
    let sortData;
    let inStock = [],
      outStock = [];

    // in stock and out stock filter
    dataNavFilter.forEach((data) => {
      if (data.availability.status) inStock.push(data);
      else outStock.push(data);
    });

    sortData = dataNavFilter;

    // search
    if (searchText) {
      sortData = dataNavFilter.filter((data) =>
        data.name.includes(searchText.toUpperCase()) ? data : null
      );
    }

    if (stock) {
      // in stock filter
      if (!stock.inStock) {
        sortData = sortData.filter((data) =>
          data.availability.status ? null : data
        );
      }

      // out stock filter
      if (!stock.outStock) {
        sortData = sortData.filter((data) =>
          !data.availability.status ? null : data
        );
      }
    }

    // price filter
    if (price) {
      sortData = sortData.filter((data) =>
        data.price >= price.priceFrom && data.price <= price.priceTo
          ? data
          : null
      );
    }
    
    if (manufacturer) {
      let temp = sortData;
      sortData = [];
      //
      manufacturer.manufacturerFilterList.forEach((filterStatus, index) => {
        if (filterStatus) {
          let arrayTemp = temp.filter((data) =>
            data.manufacturer === manufacturer.manufacturerList[index]
              ? data
              : null
          );
          sortData = [...sortData, ...arrayTemp];
        }
      });
      if (!sortData.length) sortData = temp;
    }

    // pagination
    let dataOnOnePage = sortData.filter((data, index) =>
      index >= (page - 1) * limit && index < page * limit ? data : false
    );

    // set data to load items
    setFinalData(dataOnOnePage);
    // return data
    callback(sortData, inStock, outStock);
  }, [
    page,
    limit,
    callback,
    price,
    random,
    searchText,
    stock,
    manufacturer,
    dataNavFilter,
  ]);

  return (
    <>
      {finalData.map((data, index) => (
        <Link to={`/product/${data.id}`} className="productLink" key={index}>
          <div className="items-box">
            {data.sale ? (
              <div className="items-label">
                <span>-</span>
                {data.sale}%
              </div>
            ) : null}
            {data.availability.status ? null : (
              <p className="sold-out-box">SOLD OUT</p>
            )}
            <img src={data.imgUrl.no1} alt={data.name} className="items-img" />
            <img
              src={data.imgUrl.no2}
              alt={data.name}
              className="items-img-1"
            />
            <p className="items-name">{data.name}</p>
            <p id="product-load-rate-star">{"⭐".repeat(data.rate.star)}</p>
            <div className="items-price-container">
              <p className="items-price">
                {data.price.toLocaleString("VN-vi", {
                  style: "currency",
                  currency: "VND",
                })}
              </p>
              <p className="items-price-discounted">
                {data.sale
                  ? ((data.price / (100 - data.sale)) * 100).toLocaleString(
                      "VN-vi",
                      {
                        style: "currency",
                        currency: "VND",
                      }
                    )
                  : null}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}

ProductContainerLoader.propTypes = {
  limit: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  random: PropTypes.bool,
  price: PropTypes.object,
  callback: PropTypes.func.isRequired,
  pageFilter: PropTypes.string,
  searchText: PropTypes.string,
  stock: PropTypes.object,
  manufacturer: PropTypes.object,
};

export default React.memo(ProductContainerLoader);
