import React, { Fragment, useState, useEffect } from "react";
import styles from "../../../../styles/products/productDetails.module.scss";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import no_image_found from "../../../../assets/images/no_image_found.png";
import Navbar from "../../../shared/navbar/navbar";
import OrderSummary from "../order-summary/orderSummary";
import { useContext } from "react";
import { CartContext } from "../../../../context/cartContext";
import returnableSvg from "../../../../assets/images/returnable_product.svg";
import cancelableSvg from "../../../../assets/images/cancelable_product.svg";
import Subtract from "../../../shared/svg/subtract";
import Add from "../../../shared/svg/add";

export default function ProductDetails() {
  const location = useLocation();
  const {
    product,
    price,
    bpp_provider_descriptor,
    bpp_provider_id,
    bpp_id,
    location_id,
  } = location.state;
  const { id, descriptor } = product;
  const { name: product_name, images } = descriptor;
  const { name: provider_name } = bpp_provider_descriptor;
  const [quantityCount, setQuantityCount] = useState(0);
  const [toggleAddToCart, setToggleAddToCart] = useState();
  const {
    cartItems,
    onReduceQuantity,
    onAddQuantity,
    onAddProduct,
  } = useContext(CartContext);

  useEffect(() => {
    const isProductPresent = cartItems.find(({ product }) => product.id === id);
    if (isProductPresent) {
      setToggleAddToCart(true);
      setQuantityCount(isProductPresent.quantity.count);
    } else {
      setToggleAddToCart(false);
      setQuantityCount(0);
    }
  }, [cartItems, id]);

  const product_details = [
    {
      key: "Manufactor Name:",
      value: "Grocery Retail",
    },
    {
      key: "Net Quantity:",
      value: "500 grams",
    },
    {
      key: "Manufactoring Date:",
      value: "25th June 2022",
    },
    {
      key: "Country of Origin:",
      value: "India",
    },
    {
      key: "Brand Owner Name:",
      value: "ONDc",
    },
  ];

  function typeChips(img, text) {
    return (
      <div className="d-flex align-items-center">
        <div className="px-2">
          <div className={styles.order_type_image_container}>{img}</div>
        </div>
        <div className="px-2">
          <p className={styles.order_type_value}>{text}</p>
        </div>
      </div>
    );
  }

  function renderOrderTypes(type) {
    if (type === "return") {
      return typeChips(
        <img src={returnableSvg} alt="returnable" width="20" />,
        "Returnable"
      );
    }
    if (type === "cancel") {
      return typeChips(
        <img src={cancelableSvg} alt="cancelable" width="20" />,
        "Cancelable"
      );
    }
  }

  return (
    <Fragment>
      <Navbar />

      <div className={styles.playground_height}>
        <div
          className={`py-2 ${
            cartItems.length > 0
              ? styles.product_list_with_summary_wrapper
              : styles.product_list_without_summary_wrapper
          }`}
        >
          <div className="container">
            <div className="row py-3 px-2">
              <div className="d-inline-flex">
                <Link to={{ pathname: "/application/products" }}>
                  <p className={styles.back_text}>back</p>
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-lg-4 p-3">
                {/* PRODUCT IMAGE  */}
                <div className={styles.product_img_container}>
                  <img
                    src={images?.length > 0 ? images[0] : no_image_found}
                    alt={product_name}
                    width="300"
                    height="300"
                    className={styles.product_img}
                    onError={(event) => {
                      event.target.onerror = null;
                      event.target.src = no_image_found;
                    }}
                  />
                </div>
              </div>
              <div className="col-md-12 col-lg-8 p-3">
                {/* NAME AND ORDERING FROM  */}
                <div className="pb-2">
                  <p className={`${styles.product_name} ${styles.width}`}>
                    {product_name}
                  </p>
                  <p className={styles.ordered_from}>
                    Ordering from{" "}
                    <span className={styles.bold}>{provider_name}</span>
                  </p>
                </div>
                {/* DESCRIPTION  */}
                <div className="pb-3">
                  <p
                    className={`${styles.product_description} ${styles.width}`}
                  >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Molestias sequi minima atque modi, vel quo provident
                    consectetur delectus iusto repellat.
                  </p>
                </div>
                {/* PRICE  */}
                <div className="pb-2">
                  <p className={styles.product_price}>
                    ₹ {Math.round(price.value)}
                  </p>
                </div>
                {/* DIVIDER  */}
                <div className={styles.width}>
                  <hr style={{ border: "1px solid #aaa" }} />
                </div>
                {/* ORDER TYPES  */}
                <div className="d-flex align-items-center flex-wrap py-2">
                  <div className="pe-3">{renderOrderTypes("return")}</div>
                  <div className="pe-3">{renderOrderTypes("cancel")}</div>
                </div>
                {/* PRODUCT DETAILS  */}
                <div className="pt-4 pb-2">
                  <p className={styles.product_details_header}>
                    Product Details
                  </p>
                  <div className={`${styles.width} pt-2`}>
                    {product_details.map(({ key, value }, index) => {
                      return (
                        <div
                          className="d-flex align-items-center py-1"
                          key={`id-${index}`}
                        >
                          <p className={styles.prodcut_details_key}>{key}</p>
                          <p className={styles.prodcut_details_value}>
                            {value}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
                {/* ADD TO CART BUTTON  */}
                <div className="py-3">
                  {toggleAddToCart && quantityCount > 0 ? (
                    <div className={styles.quantity_count_wrapper}>
                      <div
                        className={`${styles.subtract_svg_wrapper} d-flex align-items-center justify-content-center`}
                        onClick={() => {
                          setQuantityCount(quantityCount - 1);
                          onReduceQuantity(id);
                          if (quantityCount - 1 === 0) {
                            setToggleAddToCart(false);
                            return;
                          }
                        }}
                      >
                        <Subtract
                          width="13"
                          classes={styles.subtract_svg_color}
                        />
                      </div>
                      <div className="d-flex align-items-center justify-content-center">
                        <p className={styles.quantity_count}>{quantityCount}</p>
                      </div>
                      <div
                        className={`${styles.add_svg_wrapper} d-flex align-items-center justify-content-center`}
                        onClick={() => {
                          setQuantityCount(
                            (quantityCount) => quantityCount + 1
                          );
                          onAddQuantity(id);
                        }}
                      >
                        <Add
                          width="13"
                          height="13"
                          classes={styles.add_svg_color}
                        />
                      </div>
                    </div>
                  ) : (
                    <button
                      className={styles.add_to_cart_button}
                      onClick={() => {
                        setToggleAddToCart(true);
                        setQuantityCount((quantityCount) => quantityCount + 1);
                        onAddProduct({
                          id,
                          quantity: { count: quantityCount + 1 },
                          bpp_id,
                          provider: {
                            id: bpp_provider_id,
                            locations: [location_id],
                          },
                          product: {
                            id,
                            descriptor: product.descriptor,
                            price: {
                              ...product.price,
                              value: Math.round(price.value),
                            },
                            provider_name,
                          },
                        });
                      }}
                    >
                      Add
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {cartItems.length > 0 && <OrderSummary />}
      </div>
    </Fragment>
  );
}
