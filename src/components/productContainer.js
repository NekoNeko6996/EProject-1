import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// css
import "../css/productContainer.css";

// resource
import notFoundIcon from "../resource/icon/Icon-Notfound-Black.png";
import noImgData from "../resource/img/no_img_data.png";

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
  currency,
  locale,
}) {
  // useState
  const [dataNavFilter, setDataNavFilter] = useState([]);
  const [finalData, setFinalData] = useState([]);
  const [showItems, setShowItems] = useState([]);

  const finalCurrency = currency || "VND";
  const finalLocale = locale || "VN-vi";

  // filter by tags
  useEffect(() => {
    const filterConditions = {
      mechanical: (item) => item.tech === "mechanical",
      quartz: (item) => item.tech === "quartz",
      sales: (item) => item.sale > 0,
      her: (item) => item.gift === "her",
      him: (item) => item.gift === "him",
      personalized: (item) => item.gift === "personalized",
      vintage: (item) => item.product === "vintage",
      luxury: (item) => item.product === "luxury",
      smart: (item) => item.product === "smart-watch",
    };

    const filteredData = pageFilter
      ? productDB.filter((item) => filterConditions[pageFilter](item))
      : productDB;
    setDataNavFilter(filteredData);
  }, [pageFilter]);

  // filter and pagination
  useEffect(() => {
    const filterData = () => {
      let inStock = 0,
        outStock = 0;

      // search filter
      const searchTextFilter = (data) => {
        if (searchText)
          return data.name.toUpperCase().includes(searchText.toUpperCase());
        else return true;
      };

      // stock filter
      const stockFilter = (data) => {
        if (stock) {
          if (data.availability.status) inStock++;
          else outStock++;
          return (
            (stock.inStock && data.availability.status) ||
            (stock.outStock && !data.availability.status)
          );
        }
        return true;
      };

      // price filter
      const priceFilter = (data) => {
        if (price)
          return data.price >= price.priceFrom && data.price <= price.priceTo;
        else return true;
      };

      // manufacturer filter
      let manufacturerStatus = false;
      if (manufacturer) {
        manufacturer.manufacturerFilterList.forEach((value) =>
          value ? (manufacturerStatus = true) : null
        );
      }
      const manufacturerFilter = (data) => {
        if (manufacturerStatus) {
          return manufacturer.manufacturerFilterList[
            manufacturer.manufacturerList.indexOf(data.manufacturer)
          ];
        }
        return true;
      };

      // random
      const randomFilter = (data, count) => {
        let copyData = [...data];
        let result = [];

        if (count > copyData.length || copyData.length === 0) {
          return copyData;
        }

        for (let i = 0; i < copyData.length; i++) {
          let randomIndex = Math.floor(Math.random() * copyData.length);
          let randomElement = copyData[randomIndex];

          result.push(randomElement);
          copyData.splice(randomIndex, 1);
        }
        return result;
      };

      /// main ///
      let filteredData = [];
      if (!random) {
        filteredData = dataNavFilter.filter(
          (data) =>
            searchTextFilter(data) &&
            stockFilter(data) &&
            priceFilter(data) &&
            manufacturerFilter(data)
        );
      } else {
        filteredData = randomFilter(dataNavFilter, limit);
      }

      // pagination
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const dataOnOnePage = filteredData.slice(startIndex, endIndex).length
        ? filteredData.slice(startIndex, endIndex)
        : filteredData.slice(0, limit);

      setFinalData(dataOnOnePage);
      callback(filteredData, inStock, outStock);
    };

    filterData();
  }, [
    page,
    limit,
    callback,
    price,
    searchText,
    stock,
    manufacturer,
    random,
    dataNavFilter,
  ]);

  // load items animation
  useEffect(() => {
    const setShowItemsWithDelay = () => {
      const delayInterval = 40; // Delay interval between each box in milliseconds
      const updatedShowItems = [];
      finalData.forEach((_, index) => {
        setTimeout(() => {
          updatedShowItems[index] = true;
          setShowItems([...updatedShowItems]);
        }, index * delayInterval);
      });
    };
    setShowItemsWithDelay();
  }, [finalData]);


  useEffect(() => {

  }, [])


  return (
    <div id="product-loader">
      {finalData.map((data, index) => (
        <Link
          to={`/product/${data.id}`}
          className={`productLink ${showItems[index] ? "show" : ""}`}
          key={index}
        >
          <div className={`items-box ${showItems[index] ? "show" : ""}`}>
            {data.sale ? (
              <div className="items-label">
                <span>-</span>
                {data.sale}%
              </div>
            ) : null}
            {data.availability.status ? null : (
              <p className="sold-out-box">SOLD OUT</p>
            )}
            <img
              src={data.imgUrl.no1}
              alt={data.name}
              className="items-img"
              onError={(event) => event.target.src = noImgData}
            />
            <img
              src={data.imgUrl.no2}
              alt={data.name}
              className="items-img-1"
              onError={(event) => event.target.src = noImgData}
            />
            <p className="items-name">{data.name}</p>
            <p id="product-load-rate-star">{"★".repeat(data.rate.star)}</p>
            <div className="items-price-container">
              <p className="items-price">
                {data.price.toLocaleString(finalLocale, {
                  style: "currency",
                  currency: finalCurrency,
                })}
              </p>
              <p className="items-price-discounted">
                {data.sale
                  ? ((data.price / (100 - data.sale)) * 100).toLocaleString(
                      finalLocale,
                      {
                        style: "currency",
                        currency: finalCurrency,
                      }
                    )
                  : null}
              </p>
            </div>
          </div>
        </Link>
      ))}

      {/* no product found */}
      {!finalData.length ? (
        <div id="not-found-box">
          <img src={notFoundIcon} alt="not found icon" />
          <h3>No products found that match the filter</h3>
        </div>
      ) : null}
    </div>
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
  currency: PropTypes.string,
  locale: PropTypes.string,
};

export default React.memo(ProductContainerLoader);
