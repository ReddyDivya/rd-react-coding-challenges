import { useState, useEffect } from "react";

const Accordion = () => {
  const [products, setProducts] = useState('');
  
  // State to manage visibility of each accordion item, using an object for dynamic control
  const [visible, setVisible] = useState({});

  // Function to fetch products data from the API
  const fetchProductsData = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products?limit=100`);
      const data = await response.json();

      // Set the fetched products data into the state
      if (data && data.products) setProducts(data.products);

      if(data.products.length > 0){
        // First item's ID is set to true
        setVisible({[data.products[0].id] : true})
      }

    } catch (error) {
      console.error(error);
    }
  };

  /**
   * Function to toggle the visibility of an accordion item dynamically.
   * @param {number} id - The ID of the accordion item to toggle.
   * 
   * Explanation:
   * - `setVisible` is used to update the `visible` state, which tracks the visibility of all accordion items.
   * - `prevState` contains the current state of `visible` before the update.
   * - `...prevState` keeps the visibility state of all other items unchanged.
   * - `[id]: !prevState[id]` toggles the visibility state of the specific item:
   *    - If the item is visible (`true`), it becomes hidden (`false`).
   *    - If the item is hidden (`false`), it becomes visible (`true`).
   * 
   * This dynamic approach allows independent and scalable control of multiple accordion items.
   */
  const toggleVisibility = (id) => {
    setVisible((prevState) => ({
      ...prevState, // Keep the visibility states of all other items
      [id]: !prevState[id], // Toggle the visibility state for the item with the given ID, The key 'id' is dynamically added with [].
    }));
  };

  // Fetch products data when the component is mounted
  useEffect(() => {
    fetchProductsData();
  }, []);

  return (
    <div className="max-w-3xl mx-auto w-full p-4 bg-white shadow-lg rounded-lg mt-2 mr-44">
      <h2 className="text-3xl text-blue-700">Accordion</h2>
      {
        // Render the list of products if data exists
        products && products.map((item) => (
          <div key={item.id} className="bg-white shadow-lg mt-2 w-full p-4 rounded-lg">
            {/* Button to toggle the visibility of the item's description */}
            <button
              onClick={() => toggleVisibility(item.id)} // Call toggleVisibility with the item's ID
              className="bg-gray-200 p-4 text-blue-600 semi-bold w-full text-left rounded"
            >
              {item.title}
            </button>

            {/* Conditional rendering of the description based on visibility state */}
            <div style={{ display: visible[item.id] ? 'block' : 'none' }}>
              <p className="p-2">{item.description}</p>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Accordion;
