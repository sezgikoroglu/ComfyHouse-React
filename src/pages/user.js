import { useParams } from "react-router-dom";
import Data from "../component/product_list/productslist.json"

function User(){
    const { id }=useParams();
    const data=Data.items;
    const product=data.find((item)=>{ return item.sys.id==id})
    console.log(product)
    let src=product.fields.image.fields.file.url;
    let newsrc=src.slice(1,src.length)
    
    return(
       <>

            <div className="single-product">
                <div className="container">
                    <div className="left-bar">
                        <img src={newsrc} />    
                    </div>
                    <div className="right-bar">
                        <h2>{product.fields.title}</h2>
                        <p>{product.fields.price} $</p>
                        <p className="desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores voluptas ipsum aperiam, hic recusandae numquam inventore iste ex consectetur nemo vero ipsa, laboriosam eaque cum unde adipisci obcaecati eos.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores voluptas ipsum aperiam, hic recusandae numquam inventore iste ex consectetur nemo vero ipsa, laboriosam eaque cum unde adipisci obcaecati eos</p>
                  
                    </div>
                </div>
            </div>
       </>
    )
}

export default User;