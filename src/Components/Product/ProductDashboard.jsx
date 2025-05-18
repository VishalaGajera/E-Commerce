import { useEffect, useState } from "react";

export default function ProductDashboard() {
  const [products, setProducts] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState({}); // To track selected prices for each product

  // Fetch products from the API
  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/product/getAllProducts");
      const data = await response.json();
      if (response.ok) {
        setProducts(data.products);
        // Initialize selectedPrices with the first price of each product
        const initialPrices = data.products.reduce((acc, product) => {
          const firstSize = Object.keys(product.sizes)[0];
          acc[product._id] = firstSize ? product.sizes[firstSize] : null;
          return acc;
        }, {});
        setSelectedPrices(initialPrices);
      } else {
        alert(data.message || "Failed to fetch products.");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Handle size change for a specific product
  const handleSizeChange = (productId, selectedSize, sizes) => {
    setSelectedPrices((prevPrices) => ({
      ...prevPrices,
      [productId]: sizes[selectedSize],
    }));
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Product Dashboard</h1>
      {products.length === 0 ? (
        <p className="text-gray-600">No products available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product._id} className="border rounded-lg bg-white shadow-md p-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-gray-600 mb-4">Category: {product.category}</p>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Size</label>
                <select
                  className="block w-full border rounded-md py-2 px-3"
                  onChange={(e) => handleSizeChange(product._id, e.target.value, product.sizes)}
                >
                  {Object.entries(product.sizes).map(([size, price]) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
              <p className="text-lg font-bold">
                Price: $
                {selectedPrices[product._id] !== undefined
                  ? selectedPrices[product._id].toFixed(2)
                  : "Select a size"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
