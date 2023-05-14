import * as React from "react";
import { cartContext } from "../../context/CartContextProvider";
import "../Cart/Cart.css";

export default function Cart() {
  const cartCleaner = () => {
    localStorage.removeItem("cart");
    getCart();
  };
  const { getCart, cart, changeProductCount, deleteCartProduct } =
    React.useContext(cartContext);
  console.log(cart.products);
  React.useEffect(() => {
    getCart();
  }, []);
  return (
    <>
      <h3>YOU CART</h3>
      <div className="cartContanier">
        <div className="cartLeft">
          {cart.products.map((elem) => (
            <div className="cartElem" key={elem.item.id}>
              <img src={elem.item.image_1} alt="" width={100} />
              <h5>{elem.item.title}</h5>
              <div className="counterBlock">
                <button
                  onClick={() => {
                    const newCount = elem.count + 1;

                    changeProductCount(newCount, elem.item.id);
                  }}
                >
                  +
                </button>
                <span>{elem.count}</span>
                <button
                  onClick={() => {
                    if (elem.count > 1) {
                      const newCount = elem.count - 1;

                      changeProductCount(newCount, elem.item.id);
                    }
                  }}
                >
                  -
                </button>
              </div>
              <h5>${elem.subPrice}</h5>
              <button
                onClick={() => {
                  deleteCartProduct(elem.item.id);
                }}
              >
                delete
              </button>
            </div>
          ))}
        </div>
        <div className="cartRight">
          <h5>TOTAL PRICE</h5>
          <h4>${cart?.totalPrice}</h4>
          <button>BUY ALL</button>
          <button onClick={cartCleaner}>CLERAR CART</button>
        </div>
      </div>
    </>
  );
}
