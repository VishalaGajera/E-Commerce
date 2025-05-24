import { useState, useEffect } from "react";

export default function EditProduct() {
  const [isLoading, setIsLoading] = useState(true);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    image: "",
    name: "",
    description: "",
    category: "",
    price_per_lb: "",
    sizes: [],
    rating: "5",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Simulate fetching product data
    const fetchProductData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setFormData({
        image: "",
        name: "IC 1121 Basmati Long Grain Steam Rice",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        category: "Rice",
        price_per_lb: "1.38",
        sizes: [
          { size: "40LB", price: "55.00" },
          { size: "10LB", price: "15.00" },
        ],
        rating: "5",
      });

      setIsLoading(false);
    };

    fetchProductData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          image: reader.result,
        }));
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSizeChange = (index, field, value) => {
    const newSizes = [...formData.sizes];

    newSizes[index][field] = value;

    setFormData((prevData) => ({
      ...prevData,
      sizes: newSizes,
    }));
  };

  const addSize = () => {
    setFormData((prevData) => ({
      ...prevData,
      sizes: [...prevData.sizes, { size: "", price: "" }],
    }));
  };

  const removeSize = (index) => {
    setFormData((prevData) => ({
      ...prevData,
      sizes: prevData.sizes.filter((_, i) => i !== index),
    }));
  };

  // eslint-disable-next-line sonarjs/cognitive-complexity
  const validateForm = () => {
    let newErrors = {};

    if (!formData.image) newErrors.image = "Product image is required";

    if (!formData.name) newErrors.name = "Product name is required";

    if (formData.description.length < 10)
      newErrors.description = "Description must be at least 10 characters";

    if (!formData.category) newErrors.category = "Category is required";

    if (!formData.price_per_lb || parseFloat(formData.price_per_lb) <= 0)
      newErrors.price_per_lb = "Price must be positive";

    if (formData.sizes.length === 0) newErrors.sizes = "At least one size is required";

    formData.sizes.forEach((size, index) => {
      if (!size.size) newErrors[`size-${index}`] = "Size is required";

      if (!size.price || parseFloat(size.price) <= 0)
        newErrors[`price-${index}`] = "Price must be positive";
    });

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Here you would typically send the updated data to your backend
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);

    alert("Product updated successfully!");
  };

  if (isLoading) {
    return <div className="text-center">Loading product data...</div>;
  }

  return (
    <div className="md:p-10 w-full">
      <div className="md:border p-5 bg-white md:rounded-lg md:shadow-md">
        <h2 className="text-2xl font-bold mb-6">Edit Product</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
              Product Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleImageChange}
              accept="image/*"
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
            />
            {formData.image && (
              <img
                src={formData.image}
                alt="Product preview"
                className="mt-2 h-32 object-cover rounded-md"
              />
            )}
            {errors.image && <p className="mt-1 text-sm text-red-600">{errors.image}</p>}
          </div>

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Product Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border shadow-md outline-none py-3 px-2"
            />
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
              className="mt-1 block w-full rounded-md border shadow-md outline-none py-3 px-2"
            ></textarea>
            {errors.description && (
              <p className="mt-1 text-sm text-red-600">{errors.description}</p>
            )}
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border shadow-md outline-none py-3 px-2"
            >
              <option value="">Select a category</option>
              <option value="Rice">Rice</option>
              <option value="Beans & Lentils">Beans & Lentils</option>
              <option value="Flours">Flours</option>
              <option value="Spices">Spices</option>
            </select>
            {errors.category && <p className="mt-1 text-sm text-red-600">{errors.category}</p>}
          </div>

          <div>
            <label htmlFor="price_per_lb" className="block text-sm font-medium text-gray-700">
              Price per lb ($)
            </label>
            <input
              type="number"
              id="price_per_lb"
              name="price_per_lb"
              value={formData.price_per_lb}
              onChange={handleChange}
              step="0.01"
              className="mt-1 block w-full rounded-md border shadow-md outline-none py-3 px-2"
            />
            {errors.price_per_lb && (
              <p className="mt-1 text-sm text-red-600">{errors.price_per_lb}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Sizes and Prices</label>
            {formData.sizes.map((size, index) => (
              <div key={index} className="flex space-x-4 mb-2">
                <div className="flex-1">
                  <input
                    type="text"
                    value={size.size}
                    onChange={(e) => handleSizeChange(index, "size", e.target.value)}
                    placeholder="Size (e.g., 40LB)"
                    className="mt-1 block w-full rounded-md border shadow-md outline-none py-3 px-2"
                  />
                  {errors[`size-${index}`] && (
                    <p className="mt-1 text-sm text-red-600">{errors[`size-${index}`]}</p>
                  )}
                </div>
                <div className="flex-1">
                  <input
                    type="number"
                    value={size.price}
                    onChange={(e) => handleSizeChange(index, "price", e.target.value)}
                    step="0.01"
                    placeholder="Price"
                    className="mt-1 block w-full rounded-md border shadow-md outline-none py-3 px-2"
                  />
                  {errors[`price-${index}`] && (
                    <p className="mt-1 text-sm text-red-600">{errors[`price-${index}`]}</p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => removeSize(index)}
                  className="mt-1 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addSize}
              className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              Add Size
            </button>
            {errors.sizes && <p className="mt-1 text-sm text-red-600">{errors.sizes}</p>}
          </div>

          <div>
            <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
              Rating
            </label>
            <select
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border shadow-md outline-none py-3 px-2"
            >
              {[1, 2, 3, 4, 5].map((rating) => (
                <option key={rating} value={rating.toString()}>
                  {rating}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
          >
            {isSubmitting ? "Updating Product..." : "Update Product"}
          </button>
        </form>
      </div>
    </div>
  );
}
