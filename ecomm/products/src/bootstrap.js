import faker from "faker";

const mount = (elm) => {
  let products = "";
  for (let i = 0; i < 10; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }
  elm.innerHTML = products;
};

if (process.env.NODE_ENV === "development") {
  const el = document.getElementById("dev-products");
  if (el) {
    mount(el);
  }
}

export { mount };
