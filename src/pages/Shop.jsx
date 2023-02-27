import React, { useState } from "react";
import { Container, Row } from "reactstrap";
import { Helmet } from "../components/helmet/Helmet";
import { CommonSection } from "../components/ui/CommonSection";
import products from "../assets/data/products";
import { ProductList } from "../components/ui/ProductList";

const Shop = () => {
  const [productsData, setProductData] = useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "juice") {
      const filteredProducts = products.filter((item) =>
        item.category.includes("juice")
      );
      setProductData(filteredProducts);
    }
    if (filterValue === "oil") {
      const filteredProducts = products.filter((item) =>
        item.category.includes("oil")
      );
      setProductData(filteredProducts);
    }
    if (filterValue === "beauty") {
      const filteredProducts = products.filter((item) =>
        item.category.includes("beauty")
      );
      setProductData(filteredProducts);
    }
    if (filterValue === "all") {
      const filteredProducts = products;
      setProductData(filteredProducts);
    }
  };
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    const searchedProduts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProductData(searchedProduts);
  };
  return (
    <Helmet title="Shop">
      <CommonSection title="Products" />
      <section className="p-8">
        <Container className="flex w-fit flex-wrap md:px-40 md:p-5 gap-3 md:gap-20">
          <div className="flex gap-3 md:gap-7 flex-col md:flex-row w-full">
            <select
              onChange={handleFilter}
              name=""
              id=""
              className="filter_widget py-3 px-5 border-[1px] border-dark-green border-solid cursor-pointer rounded bg-dark-green text-white !outline-none text-sm"
            >
              <option>Filter By Category</option>
              <option value="all">All products</option>
              <option value="juice">Juice</option>
              <option value="oil">Oil</option>
              <option value="beauty">Beauty</option>
            </select>
            <select
              name=""
              id=""
              className="filter_widget py-3 px-5 border-[1px] border-dark-green border-solid cursor-pointer rounded bg-dark-green text-white !outline-none text-sm "
            >
              <option>Sort By</option>
              <option value="ascending">Ascending</option>
              <option value="descending">Descending</option>
            </select>
            <div className="search_box  flex items-center justify-between grow border-[1px] border-dark-green border-solid rounded pr-3 pl-1 cursor-pointer">
              <input
                onChange={handleSearch}
                type="text"
                placeholder="Search....."
                className=" border-none outline-none py-2 px-3"
              />
              <span className=" text-dark-green">
                <i className="ri-search-line"></i>
              </span>
            </div>
          </div>
        </Container>
      </section>
      <section className="trending_products">
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h2 className="text-center text-3xl">No products are found!</h2>
            ) : (
              <ProductList products={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};
export default Shop;
