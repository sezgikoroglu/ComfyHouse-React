import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useBasket } from "../context/basketcontext";
import Data from "../component/product_list/productslist.json";

function Products() {
  const [select, setSelect] = useState();
  const { addToBasket } = useBasket();
  const { setShowHero } = useBasket();
  const [priceVal, setPriceVal] = useState(1000);
  const { items } = useBasket();
  const [check, setCheck] = useState();

  const data = Data.items;
  const [filterList, setFilterList] = useState(data);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    setShowHero(false);
  }, []);

  const changePrice = (e) => {
    setPriceVal(e.target.value);
    const newlist = data.filter((item) => item.fields.price <= priceVal);
    setFilterList(newlist);
  };

  const mouseOver = (e, item) => {
    setSelect(item.sys.id);
  };

  const mouseLeave = (e) => {
    setSelect("");
  };

  const filter = (e) => {
    const type = e.target.name;
    const newlist = data.filter((item) => item.sys.type === type);
    type === "all" ? setFilterList(data) : setFilterList(newlist);
    setSearchInput("");
  };

  const regex = (e) => {
    const regex = new RegExp(e.target.value, "gi");
    setSearchInput(e.target.value);
    const newlist = data.filter((item) => {
      return item.fields.title.match(regex);
    });
    setFilterList(newlist);
  };

  //const control=true

  const control = (item) => {
    let control2 = items.some((x) => x.sys.id === item.sys.id);
    setCheck(control2);
  };

  return (
    <div className="products-container">
      <div className="filters">
        <div className="filter-container">
          <form className="input-form">
            <input
              type="text"
              onChange={regex}
              value={searchInput}
              className="search-input"
              placeholder="search..."
            />
          </form>
          <h4>Rooms</h4>
          <div className="companies">
            <button name="all" onClick={filter} className="company-btn">
              all{" "}
            </button>
            <button name="bedroom" onClick={filter} className="company-btn">
              bedroom{" "}
            </button>
            <button name="living room" onClick={filter} className="company-btn">
              living Rooms{" "}
            </button>
            <button name="kitchen" onClick={filter} className="company-btn">
              kitchen{" "}
            </button>
            <button name="bathroom" onClick={filter} className="company-btn">
              bathroom{" "}
            </button>
          </div>
          <h4>Price</h4>
          <div className="range">
            <input
              type="range"
              class="price-filter"
              min="10"
              value={priceVal}
              max="1000"
              onChange={(e) => changePrice(e)}
              style={{
                appearance: "auto",
                cursor: "default",
                color:
                  " -internal-light-dark(rgb(16, 16, 16), rgb(255, 255, 255))",
                padding: "initial",
                border: "initial",
                margin: "2px",
              }}
            />
          </div>
          <p className="price-value">Value = {priceVal}$</p>
        </div>
      </div>
      <div className="product-container">
        {filterList.map((item, index) => (
          <article key={index} className="product">
            <div
              key={item.sys.id}
              className="img-container"
              id={item.sys.id}
              onMouseOver={(e) => {
                {
                  mouseOver(e, item);
                }
                {
                  control(item);
                }
              }}
              onMouseLeave={(e) => mouseLeave(e, item)}
            >
              <img
                src={item.fields.image.fields.file.url}
                className="product-img"
                alt=""
              />
              {select === item.sys.id && (
                <div className="product-icons">
                  <div className="product-icon">
                    <Link to={`/product/${item.sys.id}`}>
                      <img src="images/search.png" alt="" />
                    </Link>
                  </div>
                  <button
                    style={{ display: check ? "none" : "flex" }}
                    onClick={() => addToBasket(item)}
                    className="product-cart-btn product-icon"
                    data-id="rec43w3ipXvP28vog"
                  >
                    <img src="images/PngItem_1771991.png" alt="" />
                  </button>
                </div>
              )}
            </div>
            <p>{item.fields.title}</p>
            <h4>${item.fields.price}</h4>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Products;
