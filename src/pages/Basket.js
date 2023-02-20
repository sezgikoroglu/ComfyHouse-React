import { useEffect, useState } from "react";
import { useBasket } from "../context/basketcontext";
import { Link } from "react-router-dom";

const Basket = () => {
  const { items } = useBasket();
  const { setItems } = useBasket();
  const { show } = useBasket();
  const { setShow } = useBasket();
  const [total, setTotal] = useState();

  useEffect(() => {
    let totalAmount = 0;
    items.forEach((item) => {
      totalAmount += Math.floor(
        Number(item.fields.price) * Number(item.sys.amount)
      );
    });
    setTotal(totalAmount);
  }, [items]);

  const handleChange = (item, val) => {
    item.sys.amount += val;
    if (item.sys.amount < 1) {
      item.sys.amount = 1;
    }
    setItems([...items]);
  };

  const removeItem = (item, index) => {
    item.sys.amount = 1;
    setItems([...items.slice(0, index), ...items.slice(index + 1)]);
  };

  const clearItems = () => {
    items.forEach((item) => {
      item.sys.amount = 1;
    });
    setItems([]);
  };

  return (
    <>
      {show && (
        <div className="card-overlay transparentBcg ">
          <div className="cart showCart">
         
            <Link className="close-cart" onClick={() => setShow(false)}  to={`/Products`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                fill="currentColor"
                className="bi bi-x-square-fill"
                viewBox="0 0 16 16"
              >
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
              </svg>
            </Link>
            <h2>Your Cart</h2>
            {items.map((item, index) => (
              <div key={item.sys.id} className="cart-content">
                <div className="cart-item">
                  <img src={item.fields.image.fields.file.url} alt="product" />
                  <div className="price">
                    <h4>{item.fields.title}</h4>
                    <h5>{item.fields.price}</h5>
                    <span
                      className="remove-item"
                      data-id="2"
                      onClick={() => removeItem(item, index)}
                    >
                      remove
                    </span>
                  </div>
                  <div className="amount">
                    <svg
                      onClick={() => handleChange(item, 1)}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-chevron-up"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                      />
                    </svg>
                    <p className="item-amount">{item.sys.amount}</p>
                    <svg
                      onClick={() => handleChange(item, -1)}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-chevron-down"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}

            <div className="cart-footer">
              <h3>
                Your Total : <span className="cart-total">{total}</span> ${" "}
              </h3>
              <Link className="clear-cart banner-btn" onClick={clearItems} to={`/Products`}>
                clear cart
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Basket;
