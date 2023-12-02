import React, { useState } from "react";
import ReactPaginate from "react-paginate";

// css
import "../css/home.css";
import "bootstrap/dist/css/bootstrap.min.css";

// component
import ProductContainerLoader from "../component/productContainer";
import SlideShow from "../component/slideShow";

// resource
import iconFreeShip from "../resource/icon/free_ship_icon_small.png";
import iconContact from "../resource/icon/contact_icon_small.png";
import iconPayment from "../resource/icon/payment_icon_small.png";

import { dataBanner } from "../database/data";

function HomeComponent() {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(1);
  const limitItems = 20;

  // on page change
  const handlePageClick = (page) => {
    setPage(page.selected + 1);
    window.scroll({
      top: 750,
      behavior: "smooth",
    });
  };

  // on item data load success
  const productCallBackFunc = (data) => {
    setPageCount(Math.ceil(data.length / 20));
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
        <form action="/" id="search-box">
          <input
            type="text"
            name="search"
            id="search-input"
            placeholder="Search Watch..."
          />
          <input type="button" value="Search" id="search-btn" />
        </form>
      </nav>
      <section id="home-section">
        <aside id="home-sort-option">
          <h5 id="home-availability">Availability</h5>
          <p>
            In stock (<span>231</span>)
          </p>
          <p>
            Out stock (<span>12</span>)
          </p>
          <h5 id="home-aside-price">Price</h5>
          <div id="price-input-box">
            <p>$</p>
            <input type="number" name="price-from" id="price-input-from" />
            <p>-</p>
            <p>$</p>
            <input type="number" name="price" id="price-input-to" />
          </div>
          <button id="price-sort-btn" className="black-hover-btn">
            Sort
          </button>
        </aside>
        <div id="paginate-container">
          <section id="home-product-section">
            <ProductContainerLoader
              callback={(data) => productCallBackFunc(data)}
              limit={limitItems}
              page={page}
            />
          </section>
          <ReactPaginate
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
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
