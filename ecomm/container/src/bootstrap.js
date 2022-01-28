import { mount as productsMount } from "products/ProductsIndex";
import { mount as cartMount } from "cart/CartIndex";

const productElm = document.getElementById("my-products");
productsMount(productElm);

const cartElm = document.getElementById("my-cart");
cartMount(cartElm);
