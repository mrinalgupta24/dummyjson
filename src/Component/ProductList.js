import React, { useState } from "react";
import {
  FiTruck,
  FiTag,
  FiShoppingCart,
  FiStar,
  FiHeart,
  FiSearch,
} from "react-icons/fi";

const products = [
  {
    id: 1,
    name: "Apple iMac 27",
    image:
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
    price: "$1,699",
    rating: 5,
    delivery: "Fast Delivery",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Samsung Galaxy S21",
    image:
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/2.png",
    price: "$799",
    rating: 4.5,
    delivery: "Fast Delivery",
    category: "Electronics",
  },
  {
    id: 3,
    name: "Sony WH-1000XM4",
    image:
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/3.png",
    price: "$348",
    rating: 4.8,
    delivery: "Fast Delivery",
    category: "Electronics",
  },
  {
    id: 4,
    name: "Dell XPS 13",
    image:
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/4.png",
    price: "$1,199",
    rating: 4.7,
    delivery: "Fast Delivery",
    category: "Electronics",
  },
  {
    id: 5,
    name: "Apple AirPods Pro",
    image:
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/5.png",
    price: "$249",
    rating: 4.6,
    delivery: "Fast Delivery",
    category: "Electronics",
  },
  {
    id: 6,
    name: "Google Pixel 6",
    image:
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/6.png",
    price: "$599",
    rating: 4.4,
    delivery: "Fast Delivery",
    category: "Electronics",
  },
  {
    id: 7,
    name: "Microsoft Surface Laptop 4",
    image:
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/7.png",
    price: "$1,299",
    rating: 4.5,
    delivery: "Fast Delivery",
    category: "Electronics",
  },
  {
    id: 8,
    name: "HP Spectre x360",
    image:
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/8.png",
    price: "$1,499",
    rating: 4.6,
    delivery: "Fast Delivery",
    category: "Electronics",
  },
  {
    id: 9,
    name: "Lenovo ThinkPad X1",
    image:
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/9.png",
    price: "$1,499",
    rating: 4.6,
    delivery: "Fast Delivery",
    category: "Electronics",
  },
  {
    id: 10,
    name: "Asus ZenBook 14",
    image:
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/10.png",
    price: "$1,299",
    rating: 4.5,
    delivery: "Fast Delivery",
    category: "Electronics",
  },
  {
    id: 11,
    name: "Razer Blade 15",
    image:
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/11.png",
    price: "$1,999",
    rating: 4.8,
    delivery: "Fast Delivery",
    category: "Electronics",
  },
  {
    id: 12,
    name: "Acer Aspire 5",
    image:
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/12.png",
    price: "$499",
    rating: 4.4,
    delivery: "Fast Delivery",
    category: "Electronics",
  },
  {
    id: 13,
    name: "Apple MacBook Pro 16",
    image:
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/13.png",
    price: "$2,399",
    rating: 4.9,
    delivery: "Fast Delivery",
    category: "Electronics",
  },
  {
    id: 14,
    name: "Samsung Galaxy Note 20",
    image:
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/14.png",
    price: "$999",
    rating: 4.7,
    delivery: "Fast Delivery",
    category: "Electronics",
  },
  {
    id: 15,
    name: "Sony PlayStation 5",
    image:
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/15.png",
    price: "$499",
    rating: 4.9,
    delivery: "Fast Delivery",
    category: "Electronics",
  },
  {
    id: 16,
    name: "Microsoft Xbox Series X",
    image:
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/16.png",
    price: "$499",
    rating: 4.8,
    delivery: "Fast Delivery",
    category: "Electronics",
  },
  {
    id: 17,
    name: "Nintendo Switch",
    image:
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/17.png",
    price: "$299",
    rating: 4.7,
    delivery: "Fast Delivery",
    category: "Electronics",
  },
  {
    id: 18,
    name: "Apple Watch Series 6",
    image:
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/18.png",
    price: "$399",
    rating: 4.8,
    delivery: "Fast Delivery",
    category: "Electronics",
  },
  {
    id: 19,
    name: "Samsung Galaxy Watch 4",
    image:
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/19.png",
    price: "$249",
    rating: 4.6,
    delivery: "Fast Delivery",
    category: "Electronics",
  },
  {
    id: 20,
    name: "Sony Bravia 4K TV",
    image:
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/20.png",
    price: "$1,199",
    rating: 4.7,
    delivery: "Fast Delivery",
    category: "Electronics",
  },
  {
    id: 21,
    name: "LG OLED 65-inch 4K TV",
    image:
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/21.png",
    price: "$2,499",
    rating: 4.9,
    delivery: "Fast Delivery",
    category: "Electronics",
  },
  {
    id: 22,
    name: "Bose QuietComfort 35 II",
    image:
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/22.png",
    price: "$299",
    rating: 4.8,
    delivery: "Fast Delivery",
    category: "Electronics",
  },
  {
    id: 23,
    name: "JBL Flip 5",
    image:
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/23.png",
    price: "$119",
    rating: 4.7,
    delivery: "Fast Delivery",
    category: "Electronics",
  },
  {
    id: 24,
    name: "Canon EOS R5",
    image:
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/24.png",
    price: "$3,899",
    rating: 4.9,
    delivery: "Fast Delivery",
    category: "Electronics",
  },
  {
    id: 25,
    name: "Nikon Z6 II",
    image:
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/25.png",
    price: "$1,999",
    rating: 4.8,
    delivery: "Fast Delivery",
    category: "Electronics",
  },
  {
    id: 26,
    name: "DJI Mavic Air 2",
    image:
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/26.png",
    price: "$799",
    rating: 4.7,
    delivery: "Fast Delivery",
    category: "Electronics",
  },
  {
    id: 27,
    name: "GoPro HERO9 Black",
    image:
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/27.png",
    price: "$399",
    rating: 4.6,
    delivery: "Fast Delivery",
    category: "Electronics",
  },
  {
    id: 28,
    name: "Fitbit Charge 4",
    image:
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/28.png",
    price: "$149",
    rating: 4.5,
    delivery: "Fast Delivery",
    category: "Electronics",
  },
  {
    id: 29,
    name: "Garmin Forerunner 945",
    image:
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/29.png",
    price: "$599",
    rating: 4.8,
    delivery: "Fast Delivery",
    category: "Electronics",
  },
  {
    id: 30,
    name: "Apple iPad Pro 12.9",
    image:
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/30.png",
    price: "$1,099",
    rating: 4.9,
    delivery: "Fast Delivery",
    category: "Electronics",
  },
];

const categories = [
  "Electronics",
  "Books",
  "Clothing",
  "Home & Kitchen",
  "Beauty & Personal Care",
  "Sports & Outdoors",
  "Toys & Games",
  "Automotive",
  "Health & Household",
  "Grocery",
  "Pet Supplies",
  "Office Products",
  "Garden & Outdoor",
  "Tools & Home Improvement",
  "Baby",
  "Musical Instruments",
  "Industrial & Scientific",
  "Software",
  "Video Games",
  "Movies & TV",
  "Arts, Crafts & Sewing",
  "Cell Phones & Accessories",
  "Jewelry",
  "Watches",
  "Luggage & Travel Gear"
];

const ProductList = () => {
  const [visibleProducts, setVisibleProducts] = useState(10);

  const handleShowMore = () => {
    setVisibleProducts((prev) => Math.min(prev + 10, 30)); // Increase visible products by 10, max 30
  };

  const [selectAll, setSelectAll] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState(
    new Array(categories.length).fill(false)
  );

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setSelectedCategories(new Array(categories.length).fill(!selectAll));
  };

  const handleCategoryChange = (index) => {
    const updatedSelectedCategories = [...selectedCategories];
    updatedSelectedCategories[index] = !updatedSelectedCategories[index];
    setSelectedCategories(updatedSelectedCategories);
  };

  return (
    <section className="bg-white py-8 antialiased md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
          Products
        </h2>

        <div className=" md:gap-6 lg:flex lg:items-start xl:gap-8">
          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            <div className="hidden xl:mt-8 xl:block">
              <div className="mt-6 mb-6 grid grid-cols-3 gap-4 sm:mt-8">
                {products.slice(0, visibleProducts).map((product) => (
                  <div
                    key={product.id}
                    className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
                  >
                    <div className="h-56 w-full">
                      <a href="#">
                        <img
                          className="mx-auto h-full"
                          src={product.image}
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
                          {product.name}
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
                        <p className="text-sm font-medium text-gray-500">
                          (455)
                        </p>
                      </div>

                      <ul className="mt-2 flex items-center gap-4">
                        <li className="flex items-center gap-2">
                          <FiTruck className="h-4 w-4 text-gray-500" />
                          <p className="text-sm font-medium text-gray-500">
                            {product.delivery}
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
                          {product.price}
                        </p>

                        <button
                          type="button"
                          className="inline-flex items-center rounded-lg bg-[#0c2d67] px-5 py-2.5 text-sm font-medium text-white border border-black hover:bg-[#011e50]"
                        >
                          <FiShoppingCart className="-ms-2 me-2 h-5 w-5" />
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {visibleProducts < Math.min(products.length, 30) && (
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

          <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
      <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
        <p className="text-xl font-semibold text-gray-900">
          Search Products
        </p>

        <button
          href="#"
          className="flex w-full items-center justify-center rounded-lg bg-[#0c2d67] px-5 py-2.5 text-sm font-medium text-white border border-black hover:bg-[#011e50]"
        >
          <FiSearch className="mr-2" />
          Search
        </button>

        <p className="text-xl font-semibold text-gray-900">Categories</p>

        <div className="box flex flex-col gap-2">
          <div className="flex items-center">
            <input
              id="checkbox-select-all"
              type="checkbox"
              checked={selectAll}
              onChange={handleSelectAll}
              className="w-5 h-5 appearance-none border border-gray-300 rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"
            />
            <label
              htmlFor="checkbox-select-all"
              className="text-base font-semibold text-gray-600 leading-4 cursor-pointer"
            >
              Select All
            </label>
          </div>
          {categories.map((category, index) => (
            <div className="flex items-center" key={index}>
              <input
                id={`checkbox-default-${index}`}
                type="checkbox"
                checked={selectedCategories[index]}
                onChange={() => handleCategoryChange(index)}
                className="w-5 h-5 appearance-none border border-gray-300 rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"
              />
              <label
                htmlFor={`checkbox-default-${index}`}
                className="text-base font-semibold text-gray-600 leading-4 cursor-pointer"
              >
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
        </div>
      </div>
    </section>
  );
};

export default ProductList;

