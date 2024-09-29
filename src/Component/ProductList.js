import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Redux/Action/productActions";
import { fetchCategories } from "../Redux/Action/categoryActions";
import {
  FiTruck,
  FiTag,
  FiShoppingCart,
  FiStar,
  FiHeart,
} from "react-icons/fi";

// Define your category URLs based on the provided data
const categoryUrls = {
  beauty: "https://dummyjson.com/products/category/beauty",
  fragrances: "https://dummyjson.com/products/category/fragrances",
  furniture: "https://dummyjson.com/products/category/furniture",
  groceries: "https://dummyjson.com/products/category/groceries",
  "home-decoration": "https://dummyjson.com/products/category/home-decoration",
  "kitchen-accessories":
    "https://dummyjson.com/products/category/kitchen-accessories",
  laptops: "https://dummyjson.com/products/category/laptops",
  "mens-shirts": "https://dummyjson.com/products/category/mens-shirts",
  "mens-shoes": "https://dummyjson.com/products/category/mens-shoes",
  "mens-watches": "https://dummyjson.com/products/category/mens-watches",
  "mobile-accessories":
    "https://dummyjson.com/products/category/mobile-accessories",
  motorcycle: "https://dummyjson.com/products/category/motorcycle",
  "skin-care": "https://dummyjson.com/products/category/skin-care",
  smartphones: "https://dummyjson.com/products/category/smartphones",
  "sports-accessories":
    "https://dummyjson.com/products/category/sports-accessories",
  sunglasses: "https://dummyjson.com/products/category/sunglasses",
  tablets: "https://dummyjson.com/products/category/tablets",
  tops: "https://dummyjson.com/products/category/tops",
  vehicle: "https://dummyjson.com/products/category/vehicle",
  "womens-bags": "https://dummyjson.com/products/category/womens-bags",
  "womens-dresses": "https://dummyjson.com/products/category/womens-dresses",
  "womens-jewellery":
    "https://dummyjson.com/products/category/womens-jewellery",
  "womens-shoes": "https://dummyjson.com/products/category/womens-shoes",
  "womens-watches": "https://dummyjson.com/products/category/womens-watches",
};

const ProductList = () => {
  const [visibleProducts, setVisibleProducts] = useState(10);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();
  const productState = useSelector((state) => state.productData);
  const categories = useSelector((state) => state.category.categories);

  useEffect(() => {
    // Fetch categories when the component mounts
    dispatch(fetchCategories());
  }, [dispatch]);

  // Fetch products whenever the selected category changes
  useEffect(() => {
    if (selectedCategory) {
      const categoryUrl = categoryUrls[selectedCategory];
      dispatch(fetchProducts(categoryUrl)); // Fetch products from the selected category URL
    } else {
      dispatch(fetchProducts("https://dummyjson.com/products")); // Fetch all products if no category is selected
    }
  }, [dispatch, selectedCategory]);

  const handleShowMore = () => {
    setVisibleProducts((prev) => Math.min(prev + 10, 30));
  };

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setSelectedCategory(null); // Deselect any selected category when "Select All" is checked
    if (!selectAll) {
      dispatch(fetchProducts("https://dummyjson.com/products")); // Fetch all products
    }
  };

  const handleCategoryChange = (categorySlug) => {
    setSelectedCategory((prevCategory) =>
      prevCategory === categorySlug ? null : categorySlug
    );
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const { products, loading, error } = productState;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Filter products based on selected category and search query
  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory
      ? product.category === selectedCategory
      : true;
    const matchesSearchQuery = product.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearchQuery;
  });

  return (
    <section className="bg-white py-8 antialiased md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
          Products
        </h2>

        {/* Search Input */}
        <div className="mb-4 mt-2">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search products..."
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="md:gap-6 lg:flex lg:items-start xl:gap-8">

                  <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
            <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Categories</h3>
              <div>
                <div className="flex items-center">
                  <input
                    id="select-all"
                    type="checkbox"
                    checked={selectAll}
                    onChange={handleSelectAll}
                    className="mr-2 h-4 w-4"
                  />
                  <label
                    htmlFor="select-all"
                    className="text-sm font-medium text-gray-700"
                  >
                    Select All
                  </label>
                </div>

                <div className="mt-2 space-y-2">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center">
                      <input
                        id={`category-${index}`}
                        type="radio" // Change to radio for single select
                        checked={selectedCategory === category.slug} // Compare with the category slug
                        onChange={() => handleCategoryChange(category.slug)}
                        className="mr-2 h-4 w-4"
                      />
                      <label
                        htmlFor={`category-${index}`}
                        className="text-sm font-medium text-gray-700"
                      >
                        {category.name} {/* Render the category name */}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>


          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            <div className="mt-6 mb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:mt-8">
              {filteredProducts.slice(0, visibleProducts).map((product) => (
                <div
                  key={product.id}
                  className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <div className="h-56 w-full">
                    <a href="#">
                      <img
                        className="mx-auto h-full object-contain"
                        src={product.images[0]}
                        alt={product.name}
                      />
                    </a>
                  </div>
                  <div className="pt-6">
                    <div className="flex justify-between items-center">
                      <a
                        href="#"
                        className="text-lg font-semibold leading-tight text-gray-900 hover:underline"
                      >
                        {product.title}
                      </a>
                      <FiHeart className="h-5 w-5 text-gray-500 hover:text-red-500 cursor-pointer" />
                    </div>

                    <div className="mt-2 flex items-center gap-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, index) => (
                          <FiStar
                            key={index}
                            className={`h-4 w-4 ${
                              index < product.rating
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-sm font-medium text-gray-900">
                        {product.rating}
                      </p>
                      <p className="text-sm font-medium text-gray-500">(455)</p>
                    </div>

                    <ul className="mt-2 flex items-center gap-4">
                      <li className="flex items-center gap-2">
                        <FiTruck className="h-4 w-4 text-gray-500" />
                        <p className="text-sm font-medium text-gray-500">
                          {product.brand}
                        </p>
                      </li>
                      <li className="flex items-center gap-2">
                        <FiTag className="h-4 w-4 text-gray-500" />
                        <p className="text-sm font-medium text-gray-500">
                          {product.category}
                        </p>
                      </li>
                    </ul>

                    <div className="mt-4 flex items-center justify-between gap-4">
                      <p className="text-2xl font-extrabold leading-tight text-gray-900">
                        ${product.price}
                      </p>
                      <button
                        type="button"
                        className="inline-flex items-center rounded-lg bg-[#0c2d67] px-7 py-2.5 text-sm font-medium text-white border border-black hover:bg-[#011e50]"
                      >
                        <FiShoppingCart className="-ms-2 me-2 h-5 w-5" /> Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {visibleProducts < Math.min(filteredProducts.length, 30) && (
              <div className="w-full text-center">
                <button
                  type="button"
                  onClick={handleShowMore}
                  className="inline-flex items-center rounded-lg bg-[#0c2d67] px-5 py-2.5 text-sm font-medium text-white border border-black hover:bg-[#011e50]"
                >
                  Show more
                </button>
              </div>
            )}
          </div>


        </div>
      </div>
    </section>
  );
};

export default ProductList;
