import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useParams } from "react-router-dom";

// css
import "../css/home.css";
import "bootstrap/dist/css/bootstrap.min.css";

// component
import ProductContainerLoader from "../component/productContainer";
import SlideShow from "../component/slideShow";
import MultiRangeSlider from "./multiRangeSlide";

// resource
import iconFreeShip from "../resource/icon/free_ship_icon_small.png";
import iconContact from "../resource/icon/contact_icon_small.png";
import iconPayment from "../resource/icon/payment_icon_small.png";

import { dataBanner } from "../database/data";

function HomeComponent() {
  const [maxPage, setMaxPage] = useState(0);
  const [page, setPage] = useState(1);
  const [stock, setStock] = useState({ inStock: true, outStock: true });
  const [inStock, setInStock] = useState(0);
  const [outStock, setOutStock] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [priceFrom, setPriceFrom] = useState(0);
  const [priceTo, setPriceTo] = useState(0);
  const [pageFilter, setPageFilter] = useState("");
  const [manufacturer, setManufacturer] = useState({
    manufacturerFilterList: [false, false, false, false, false],
    manufacturerList: [
      "citizen",
      "michael-kors",
      "movado",
      "nautica",
      "swatch",
    ],
  });

  // url params
  const params = useParams();

  // limit item in one page
  const limitItems = 20;

  // min, max, unit of price slider
  const min = 10,
    max = 500,
    unit = "00000"; // unit is 100.000 VND 100.000 * 500 = 50.000.000 (max)

  // scroll
  const scrollFunction = (step, delay) => {
    setTimeout(() => {
      window.scroll({
        top: step,
        behavior: "smooth",
      });
    }, delay);
  };

  // act based on params
  useEffect(() => {
    if (params.status) {
      let step = 800;
      if (window.innerWidth < 850) step = 500;
      scrollFunction(step, 300);
      setPageFilter(params.status);
    }
  }, [params]);

  // on page change
  const handlePageClick = (page) => {
    let step = 750;
    setPage(page.selected + 1);

    if (window.innerWidth < 850) step = 500;

    window.scroll({
      top: step,
      behavior: "smooth",
    });
  };

  // set maximum number of pages, in stock and out stock
  const productCallBackFunc = (data, inStock, outStock) => {
    setInStock(inStock.length);
    setOutStock(outStock.length);
    setMaxPage(Math.ceil(data.length / 20));

    manufacturer.manufacturerList.forEach((value, index) => {
      let count = 0;
      data.forEach((data) => {
        if (data.manufacturer === manufacturer.manufacturerList[index])
          count += 1;
      });
      document.getElementById(
        `manufacturer-${value}-span-amount`
      ).textContent = `${count}`;
    });
  };

  // sort hide
  const onHideBtnClick = () => {
    const sortBox = document.getElementById("home-sort-option");
    const hiddenLayer = document.getElementById("hidden-layer");

    if (sortBox.className === "sort-option-close") {
      sortBox.className = "sort-option-open";
      hiddenLayer.className = "hidden-layer-on";
    } else {
      sortBox.className = "sort-option-close";
      hiddenLayer.className = "hidden-layer-off";
    }
  };

  // when clicking on the manufacturer name to filter
  const onManufacturerFilterClick = (index) => {
    setManufacturer((prev) => {
      const updatedManufacturerFilterList = prev.manufacturerFilterList.map(
        (value, idx) => {
          if (idx === index) {
            return !value;
          }
          return value;
        }
      );
      return {
        ...prev,
        manufacturerFilterList: updatedManufacturerFilterList,
      };
    });
  };

  const onResetFilterClick = () => {
    setManufacturer((prev) => {
      return {
        ...prev,
        manufacturerFilterList: [false, false, false, false, false],
      };
    });
    setStock({ inStock: true, outStock: true });
    setSearchText("");
  };

  return (
    <>
      <div
        id="hidden-layer"
        className="hidden-layer-off"
        onClick={onHideBtnClick}
      ></div>
      <div id="home-banner">
        <SlideShow data={dataBanner} scrollStep={1440} />
      </div>
      <div id="home-2-banner-box">
        <div className="home-2-banner-item">
          <img
            src={iconFreeShip}
            alt="2-banner-img"
            className="home-2-banner-item-img"
          />
          <p className="home-2-banner-item-p1">Free Shipping</p>
          <p className="home-2-banner-item-p2">Fast and safe</p>
        </div>
        <div className="home-2-banner-item">
          <img
            src={iconContact}
            alt="2-banner-img"
            className="home-2-banner-item-img"
          />
          <p className="home-2-banner-item-p1">Support 24/7</p>
          <p className="home-2-banner-item-p2">Contact us 24 hrs a day</p>
        </div>
        <div className="home-2-banner-item">
          <img
            src={iconPayment}
            alt="2-banner-img"
            className="home-2-banner-item-img"
          />
          <p className="home-2-banner-item-p1">Payment secure</p>
          <p className="home-2-banner-item-p2">Strictly managed</p>
        </div>
      </div>
      <nav id="home-2-nav">
        <form action="/" id="search-box">
          <input
            type="text"
            name="search"
            id="search-input"
            placeholder="Search Watch..."
            onInput={(event) => setSearchText(event.target.value)}
            value={searchText}
          />
        </form>
        <button id="sort-option-open-btn" onClick={onHideBtnClick}>
          FILTER
        </button>
      </nav>
      <nav id="section-title">
        <h1>{pageFilter ? pageFilter.toUpperCase() : "PRODUCT"}</h1>
      </nav>
      <section id="home-section">
        <aside id="home-sort-option" className="sort-option-close">
          <button id="sort-option-close-btn" onClick={onHideBtnClick}></button>
          <div>
            <div>
              <h5 id="home-availability">Availability</h5>
              <p
                id="in-stock-p"
                onClick={() =>
                  setStock((prev) => {
                    return { ...prev, inStock: !prev.inStock };
                  })
                }
              >
                {stock.inStock ? "• " : null}In stock ({inStock})
              </p>
              <p
                id="out-stock-p"
                onClick={() =>
                  setStock((prev) => {
                    return { ...prev, outStock: !prev.outStock };
                  })
                }
              >
                {stock.outStock ? "• " : null}Out stock ({outStock})
              </p>
            </div>
            <div id="price-input-box">
              <h5 id="home-aside-price">Price</h5>
              <MultiRangeSlider
                min={min}
                max={max}
                unit={unit}
                onChange={({ min, max }) => {
                  setPriceFrom(min);
                  setPriceTo(max);
                }}
              />
            </div>

            <div id="manufacturer-filter">
              {manufacturer.manufacturerList.map((value, index) => {
                return (
                  <span key={index} className="manufacturer-span-list">
                    <label htmlFor={`${value}-filter-p`}></label>
                    <p
                      id={`${value}-filter-p`}
                      onClick={() => onManufacturerFilterClick(index)}
                    >
                      {value.replace(/-/g, " ").toUpperCase()} (
                      <span id={`manufacturer-${value}-span-amount`}>0</span>)
                    </p>
                  </span>
                );
              })}
            </div>
            <button
              id="reset-filter-btn"
              className="black-hover-btn"
              onClick={onResetFilterClick}
            >
              RESET FILTER
            </button>
          </div>
        </aside>
        <div id="paginate-container">
          <section id="home-product-section">
            <ProductContainerLoader
              callback={(data, inStock, outStock) =>
                productCallBackFunc(data, inStock, outStock)
              }
              limit={limitItems}
              page={page}
              price={{ priceFrom, priceTo }}
              pageFilter={pageFilter}
              searchText={searchText}
              stock={stock}
              manufacturer={manufacturer}
            />
          </section>
          <ReactPaginate
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={maxPage}
            previousLabel="<"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
            linkClass="page-link"
          />
        </div>
      </section>
    </>
  );
}

export default React.memo(HomeComponent);
