import { useEffect, useState } from "react";

const Pagination = () => {
  // State to store the list of products fetched from the API
  const [products, setProducts] = useState([]);

  // State to store the current page number (starts at 1 to avoid zero-index issues)
  const [page, setPage] = useState(1);

  // Function to fetch products from the API
  const fetchProducts = async () => {
    try {
      // Fetch data from the dummy JSON API (100 products in total)
      const response = await fetch(`https://dummyjson.com/products?limit=100`);
      const data = await response.json();

      // If the response contains products, update the 'products' state
      if (data && data.products) {
        setProducts(data.products); // Set the fetched products into state
      }
    } catch (error) {
      // Log any error if the API call fails
      console.error("Error fetching products:", error);
    }
  };

  // Function to handle the page change when a user selects a page
  const selectPageHandler = (selectedPage) => {
    // Ensure the selected page is valid (within the range of pages) and not the same as the current page
    if (
      selectedPage >= 1 &&
      selectedPage <= Math.ceil(products.length / 10) && // Divide total products by 10 for pagination
      selectedPage !== page
    ) {
      setPage(selectedPage); // Update the current page number in the state
    }
  };

  // useEffect hook to fetch products when the component first mounts
  useEffect(() => {
    fetchProducts(); // Fetch the products once when the component is loaded
  }, []); // Empty dependency array ensures it runs only once on component load

  return (
    <div className="max-w-3xl mx-auto w-full p-4 bg-white shadow-lg rounded-lg mt-2 mr-44">
      {/* Header for the pagination section */}
      <h1 className="text-3xl font-semibold text-blue-600 mb-6 text-center">
        Pagination
      </h1>

      {/* Display products in a grid layout if products exist */}
      {products.length > 0 && (
        <div className="grid grid-cols-3 gap-3">
          {/* Show only 10 products per page by slicing the products array */}
          {products
            .slice((page - 1) * 10, page * 10) // Calculate start and end indexes for the current page
            .map((prod) => (
              <div key={prod.id} className="p-4 bg-white shadow-lg w-48 h-auto">
                {/* Display product thumbnail */}
                <img
                  src={prod.thumbnail}
                  alt={prod.title}
                  className="w-full h-40 object-cover"
                />
                {/* Display product title and price */}
                <p className="text-blue-500 font-semibold">
                  {prod.title} - ₹{prod.price}
                </p>
              </div>
            ))}
        </div>
      )}

      {/* Pagination Controls */}
      {products.length > 0 && (
        <div className="border-2 border-gray-300 p-2 cursor-pointer mt-2 flex justify-center items-center">
          {/* Previous page button (disabled if on the first page) */}
          <span
            onClick={() => selectPageHandler(page - 1)}
            className={`px-3 py-2 rounded mr-2 ${
              page === 1 ? "cursor-not-allowed bg-gray-200" : "bg-blue-500 text-white"
            }`}
          >
            ⏮️
          </span>

          {/* Dynamic rendering of page numbers
          
            - Array(Math.ceil(products.length / 10)) => This creates an empty array with a length equal to the total number of pages needed for pagination.
            - ..Array() => The spread operator (...) is used to convert the array-like object (created by Array()) into an actual array. This step is necessary because we're working with an empty array, and we want to map over its indices to generate page numbers.
            - The underscore (_) is used for the first argument to indicate that we're not interested in the actual value (since it’s an empty array).
            - i index, starting from 0, which represents the page number.
          */}
          {[...Array(Math.ceil(products.length / 10))].map((_, i) => (
            <span
              key={i}
              className={`px-3 py-2 rounded m-2 cursor-pointer ${
                page === i + 1 ? "bg-blue-400 text-white" : "bg-gray-200"
              }`}
              onClick={() => selectPageHandler(i + 1)}
            >
              {i + 1} {/* Display the page number */}
            </span>
          ))}

          {/* Next page button (disabled if on the last page) */}
          <span
            onClick={() => selectPageHandler(page + 1)}
            className={`px-3 py-2 rounded ml-2 ${
              page === Math.ceil(products.length / 10)
                ? "cursor-not-allowed bg-gray-200"
                : "bg-blue-500 text-white"
            }`}
          >
            ⏭️
          </span>
        </div>
      )}
    </div>
  );
};

export default Pagination;
