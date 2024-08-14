import "./Product.css";
import Price from "./Price.jsx";

// eslint-disable-next-line react/prop-types
const Product = ( { title,idx } )=> {
    let oldPrices = ["12,495", "11,900", "1,599", "599"];
    let newPrices = ["8,999", "9,199", "899", "278"];
    let description = [
        ["8,000 DPI", "Programmable buttons"],
        ["Intutive Surface", "designed for iPad Pro"],
        ["Designed for iPad Pro", "intuitive surface"], 
        ["Wireless", "Optical Orientation"]
    ];
    return (
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <p>Description</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    );
}

export default Product;