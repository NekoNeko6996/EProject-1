import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//
import "../css/productContainer.css";

//
function ProductContainerLoader({ quantity, random, sort }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://655ef68a879575426b443edb.mockapi.io/api/v1/productDB", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, []);

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

export default ProductContainerLoader;
