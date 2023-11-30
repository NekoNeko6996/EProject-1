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

// banner img url
const dataBanner = [
  {
    url: "https://lh3.googleusercontent.com/pw/ADCreHeuy2aOq5XfJfiRe2Nas3iy7-5mPsN4ffkzzcsAYy1dUR-PpwW-8MS18xE23CKM4KQSJ1-tNX29iQyS_qiI0LXwra4djQK3ze8Nm1-o0AGkqt6ga33tjG38K0GZfAw63Vu9ti-XZjhwviyarvRW708hFJZ6QdFZxF-zlIAT9TdS7XMqGiR_2COkkXFDzgg-P1uaaj1_gQrWGtasMaEz6l6REsYz3O0i5AZjmJcyIZ01oD9jgymYLbfk2YzI2ecWzudv6p8yN-EWTc_VwMOzVOX8YxpYuH-w3ehOt7OJ23HAtfig5mue34pPhQuVP6YJseciBoKcMuaxOO0Ei86nxfCWlVBHiFx505aZM-ElrpIQ2032_uPtHR7z_sJT4qLllaxnjPoPJE3YsQr90dMTi5GJ3lAD7_UN1aVW23AxDfFtTWUIXS0Wpx9-YVvhdX6BHxbO41H6EcvQFoPA7QA2DKgsio19TxpSGxW6y6ilZp9K3B_3aSKEHcj6lTXGLyn2AWddlRY2W-wGMz2usjzBN6Bpf2DN-yhnR8I4QJvHo6gqldfWa3Em8uCfvqxar2FWJOWGcRIGIZxU8BPRBsNYcmyJT67bRWOKBm_xWUWwa0W151m1ucxrYui9rc-aENVYkq8ArRvX_iRNi7ZowP8TSXwTOGPMlZttrDTuBlHC5FKlriWKLqRuJMRbfCWGfIYki2sM1S2evb56Qu2Zx4dgttdP8ogvRoNjjmu22vBhSbIvC6A-fIGwxtAb3GO1CFiK3b1Rb9MlF4JswaZkr5ZVy8SzyRruKB2Cfqwx0yC6sUOQI6H3rz7JcLN9OWklNHWibnX9HfTzaRuzlYiH9YSiLKqZObZvBMieOzlkyexEa9HbXZdWNN_XQ7-7TDCZFGT9WvSStFl0e09O7fPm3zni557yTwwq65BNrl5NVAU5HE-EvaSrjuypMval4iRsFe6k0oKzdworFByg9Q=w1440-h500-s-no?authuser=1",
    link: "/",
  },
  {
    url: "https://lh3.googleusercontent.com/pw/ADCreHdLXYfBfpkumhXm8VfiWQZFjIJSwtcdrDS1WTaUHxwszHAmH4T8coSRYuc0UCMycU261zETx1iuP1UjxriN4Fp7vl2Ry5TOjFH_LVctHuJV6wpz-puqeSbpFCHlo_rXLL0ijIP6ZOzOSyO110fcVjbFOozosF3cGxRKLKG_tbxhjoD6Sfl4RLlC00XNpCa9hSg1SBlgYLo6iDVxIk_g5FmlP_lkTOsezMVvn-6jpvDnL95fupj4yFxpVBqTReE4WA7JHFaPi-fDrYhg5Jp_YctfHmg0K_h2_tDkCLWqED4z-RLXxY74re2lFv-kkV4OVGMUqEZLnJp5jKMQ9sOJDfhZG8robrlcnhn1WKK2R37nxL7N5z_rDWLEA5rQRV-KoEt-TdDQujfWV4LUB13JF8xz-8IjRemLaxw_QfoGrNWESSdO1usICuAWFSGsuHHKzHD35yj7uEGn38I9kklU13Vhgdmr4YmMYGLg9trpWj33xdF-rs5S2EA5rW-A08IRGFWBbDVNieUsFdjKKOrzNi5aDP8w7xBYZn8yDos5ZdzuKscu8TRt6ke70D2XfPViRZ-c1Hpewwfl4SKl7EEP-c7vPkprlqzysgZAceSzjO1FWGxpJupGvF9myStgJhgFoL7kattBY85k1CRgYj54PQSB2LV8ROcIUdR27vQK5bO-57UOQK5v3ZFT9t4ej6p7evXs0PXgl8iAn1oWQkMMy3V8RX125VQv2PJ8N-uMH6LtJq2paS-citMDk8Ir0L1CDgnP_MgkTG_BC13T_mB68cTz450g0RYnq0y7smNm4aKBii8EmwQRZenD3j61EBOGySb3pphbXz-vjaGbfd8pPddO5BDwvjRbwZBWI177wEQkR0HpbcrlYQ1vujLzs6UPkl4ThiCShtLW3oj4Uyrz-HrB9fH8v9c2HTnubObJe0bWFiapntlL-rhcpk98fvuqUcVaT_TcW4S5sag=w1440-h500-s-no?authuser=1",
    link: "/",
  },
];

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
        <form action="#" id="search-box">
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
