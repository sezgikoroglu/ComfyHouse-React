import { Link } from "react-router-dom"
import { useRef } from "react";
import Data from "../component/product_list/productslist.json"

const About = () => {

    const data=Data.items;
    const item=data[0]
    const refH = useRef();
     const changecolor=()=>{
        refH.current.style.opacity="0.9"
        refH.current.style.color="red"
        refH.current.style.border="2px solid red"
     }

     const color=()=>{
       
        refH.current.style.opacity=0
     }

    return (
        <div className="about">
                <h2>Our History</h2>
                <p>
                Our History
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente tempora sed dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt sequi blanditiis est exercitationem molestiae delectus saepe odio eligendi modi porro eaque in libero minus unde sapiente consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed quos similique amet. Ex, voluptate accusamus nesciunt totam vitae esse iste.
                </p>
        </div>
    );
}

export default About;