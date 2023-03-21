import { useState, useEffect } from "react";
import { useBasket } from "../context/basketcontext";
import Data from "../component/product_list/productslist.json";
import Modal from "../component/modal";

const initialProduct = {
  sys: {
    id: "",
    type: "",
    amount: 1,
  },
  fields: {
    title: "",
    price: 0,
    image: {
      fields: {
        file: {
          url: "",
        },
      },
    },
  },
};

function Products() {
  const { items } = useBasket();
  const { addToBasket } = useBasket();
  const { setShowHero } = useBasket();

  const [showModal, setShowModal] = useState();
  const [select, setSelect] = useState();
  const [product, setProduct] = useState(initialProduct);
  const [priceVal, setPriceVal] = useState(550);
  const [categories, setCategories] = useState(["all"]);
  const [check, setCheck] = useState();

  const data = Data.items;
  const [filterList, setFilterList] = useState(data);
  const [searchInput, setSearchInput] = useState("");

  data.forEach((item) => {
    if (!categories.some((ctg) => ctg == item.sys.type)) {
      setCategories([...categories, item.sys.type]);
    }
  });

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
            {categories.map((ctg) => (
              <button
                key={ctg + { ctg }}
                name={ctg}
                onClick={filter}
                className="company-btn"
              >
                {ctg}{" "}
              </button>
            ))}
          </div>
          <h4>Price</h4>
          <div className="range">
            <input
              type="range"
              className="price-filter"
              min="10"
              value={priceVal}
              max="550"
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
        {filterList.length !== 0 &&
          filterList.map((item, index) => (
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
                      <img
                        src="images/search.png"
                        alt=""
                        onClick={() => {
                          setShowModal(true);
                          setProduct(item);
                        }}
                      />
                    </div>
                    <button
                      style={{ display: check ? "none" : "flex" }}
                      onClick={() => {
                        addToBasket(item);
                        setCheck(true);
                      }}
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
        {filterList.length === 0 && (
          <p className="not-found">
            The product which you were looking for was not found
          </p>
        )}
      </div>
      {showModal && (
        <Modal
          closeModal={() => {
            setShowModal(false);
          }}
        >
          <>
            <div className="single-product">
              <div className="container">
                <div className="left-bar">
                  <img src={product.fields.image.fields.file.url} />
                </div>
                <div className="right-bar">
                  <h2>{product.fields.title}</h2>
                  <p>{product.fields.price} $</p>
                  <p className="desc">
                    Lorem ipsum dolor, ecusm eaque cum unde adipisci obcaecati
                    eos.Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Maiores voluptas ipsum aperiam, hic recusandae numquam
                    inventore iste ex consectetur nemo vero ipsa, laboriosam
                    eaque cum unde adipisci obcaecati eos.
                  </p>
                </div>
              </div>
            </div>
          </>
        </Modal>
      )}
    </div>
  );
}

export default Products;
