import { Link } from "react-router-dom";
import Data from "../component/product_list/productslist.json";
import { useBasket } from "../context/basketcontext";
const Home = () => {
  const { setShowHero } = useBasket();
  const data = Data.items;
  const data3 = data.slice(0, 3);
  setShowHero(true);

  return (
    <>
      <div className="home">
        <h2>Our Products</h2>
        <div className="products">
          {data3.map((item, index) => (
            <article key={index} className="product">
              <div className="img-container" id={item.sys.id}>
                <img
                  src={item.fields.image.fields.file.url}
                  className="product-img"
                  alt=""
                />
              </div>
              <p>{item.fields.title}</p>
              <h4>${item.fields.price}</h4>
            </article>
          ))}
        </div>
        <Link className="all-btn-home" to={`/Products`}>
          ALL PRODUCTS
        </Link>
      </div>
    </>
  );
};

export default Home;
