import React, { useCallback, useEffect, useState } from "react";
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
import searchIcon from "../resource/icon/search.png";

import { dataBanner } from "../database/data";

function HomeComponent() {
  const [maxPage, setMaxPage] = useState(0);
  const [page, setPage] = useState(1);
  const [inStock, setInStock] = useState(0);
  const [outStock, setOutStock] = useState(0);
  const [sortObject, setSortObject] = useState({});
  const [searchText, setSearchText] = useState("");
  const [priceFrom, setPriceFrom] = useState(0);
  const [priceTo, setPriceTo] = useState(0);

  // url params
  const params = useParams();

  // limit item in one page
  const limitItems = 20;

  // min, max, unit of price slider
  const min = 10,
    max = 500,
    unit = "00000"; // unit is 100.000 VND 100.000 * 400 = 40.000.000 (max)

  // search
  const onSort = useCallback(
    (action, event) => {
      if (event) event.preventDefault();

      switch (action) {
        case "search":
          setSortObject({
            action: action,
            value: searchText,
          });
          break;
        case "price":
          setSortObject({
            action: action,
            value: { priceFrom, priceTo },
          });
          break;
        case "sale":
          window.scroll({
            top: 800,
            behavior: "smooth",
          });
          setSortObject({
            action: "sale",
            value: "",
          });
          break;

        default:
          break;
      }
    },
    [priceFrom, priceTo, searchText]
  );

  // act based on params
  useEffect(() => {
    if (params.saleStatus) {
      onSort("sale");
    }
  }, [params, onSort]);

  // on page change
  const handlePageClick = (page) => {
    setPage(page.selected + 1);
    window.scroll({
      top: 750,
      behavior: "smooth",
    });
  };

  // set maximum number of pages, in stock and out stock
  const productCallBackFunc = (data) => {
    setInStock(data.length);
    setOutStock(1);
    setMaxPage(Math.ceil(data.length / 20));
  };

  return (
    <>
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
        <form
          action="/"
          id="search-box"
          onSubmit={(event) => onSort("search", event)}
        >
          <input
            type="text"
            name="search"
            id="search-input"
            placeholder="Search Watch..."
            onChange={(event) => setSearchText(event.target.value)}
          />
          <img src={searchIcon} alt="searchIcon" id="search-btn" onClick={() => onSort("search")} />
        </form>
      </nav>
      <section id="home-section">
        <aside id="home-sort-option">
          <h5 id="home-availability">Availability</h5>
          <p id="in-stock-p">
            In stock (<span>{inStock}</span>)
          </p>
          <p id="out-stock-p">
            Out stock (<span>{outStock}</span>)
          </p>
          <h5 id="home-aside-price">Price</h5>
          <div id="price-input-box">
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
          <button
            id="price-sort-btn"
            className="black-hover-btn"
            onClick={() => onSort("price")}
          >
            Sort
          </button>
        </aside>
        <div id="paginate-container">
          <section id="home-product-section">
            <ProductContainerLoader
              callback={(data) => productCallBackFunc(data)}
              limit={limitItems}
              page={page}
              sort={sortObject}
            />
          </section>
          <ReactPaginate
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={maxPage}
            previousLabel="< previous"
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
