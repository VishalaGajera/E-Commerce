import { useState } from "react";
import { supabase } from "../../../../Backend/Config/supabaseClient";

export default function AddProduct() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [imageUrl, setImageUrl] = useState("");

  const [imageFile, setImageFile] = useState(null);

  const [formData, setFormData] = useState({
    image: "",
    name: "",
    description: "",
    category: "",
    price_per_lb: "",
    sizes: {},
    rating: "5",
  });

  const [errors, setErrors] = useState({});

  const [newSize, setNewSize] = useState({ size: "", price: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setImageFile(file);

      setImageUrl(URL.createObjectURL(file));
    }
  };

  const handleSizeChange = (e) => {
    const { name, value } = e.target;

    setNewSize((prevSize) => ({
      ...prevSize,
      [name]: value,
    }));
  };

  const addSize = () => {
    if (newSize.size && newSize.price) {
      setFormData((prevData) => ({
        ...prevData,
        sizes: {
          ...prevData.sizes,
          [newSize.size]: parseFloat(newSize.price),
        },
      }));

      setNewSize({ size: "", price: "" });
    }
  };

  const removeSize = (sizeToRemove) => {
    setFormData((prevData) => {
      const newSizes = { ...prevData.sizes };

      delete newSizes[sizeToRemove];

      return { ...prevData, sizes: newSizes };
    });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!imageFile) newErrors.image = "Product image is required.";

    if (!formData.name) newErrors.name = "Product name is required.";

    if (formData.description.length < 10)
      newErrors.description = "Description must be at least 10 characters.";

    if (!formData.category) newErrors.category = "Category is required.";

    if (!formData.price_per_lb || parseFloat(formData.price_per_lb) <= 0)
      newErrors.price_per_lb = "Price must be positive.";

    if (Object.keys(formData.sizes).length === 0)
      newErrors.sizes = "At least one size is required.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const resetForm = () => {
    setFormData({
      image: "",
      name: "",
      description: "",
      category: "",
      price_per_lb: "",
      sizes: {},
      rating: "5",
    });

    setImageUrl("");

    setImageFile(null);

    // fileInputRef.current.value = "";
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const fileExt = imageFile.name.split(".").pop();

      const fileName = `${Date.now()}.${fileExt}`;

      const filePath = `products/${fileName}`;

      let { error } = await supabase.storage.from("E-Commerce").upload(filePath, imageFile);

      if (error) throw error;

      const { data: url } = await supabase.storage.from("E-Commerce").getPublicUrl(filePath);

      const formDataToSubmit = {
        ...formData,
        image: url.publicUrl,
      };

      const response = await fetch("http://localhost:5000/api/product/insertData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataToSubmit),
      });

      if (response.ok) {
        alert("Product added successfully!");

        resetForm();
      } else {
        const errorData = await response.json();

        alert("Error: " + errorData.message);
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="md:p-10 w-full">
      <div className="md:border p-5 bg-white md:rounded-lg md:shadow-md">
        <h2 className="text-2xl font-bold mb-6">Add New Product</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
              Product Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleFileChange}
              // ref={fileInputRef}
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
            />
            {imageUrl && (
              <img
                src={imageUrl}
                alt="Product Preview"
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
              placeholder="IC 1121 Basmati Long Grain Steam Rice"
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
              placeholder="Enter product description"
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
            {Object.entries(formData.sizes).map(([size, price]) => (
              <div key={size} className="flex space-x-4 mb-2">
                <div className="flex-1">
                  <input
                    type="text"
                    value={size}
                    readOnly
                    className="mt-1 block w-full rounded-md border shadow-md outline-none py-3 px-2"
                  />
                </div>
                <div className="flex-1">
                  <input
                    type="number"
                    value={price}
                    readOnly
                    className="mt-1 block w-full rounded-md border shadow-md outline-none py-3 px-2"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => removeSize(size)}
                  className="mt-1 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="flex space-x-4 mb-2">
              <div className="flex-1">
                <input
                  type="text"
                  name="size"
                  value={newSize.size}
                  onChange={handleSizeChange}
                  placeholder="Size (e.g., 40LB)"
                  className="mt-1 block w-full rounded-md border shadow-md outline-none py-3 px-2"
                />
              </div>
              <div className="flex-1">
                <input
                  type="number"
                  name="price"
                  value={newSize.price}
                  onChange={handleSizeChange}
                  step="0.01"
                  placeholder="Price"
                  className="mt-1 block w-full rounded-md border shadow-md outline-none py-3 px-2"
                />
              </div>
              <button
                type="button"
                onClick={addSize}
                className="mt-1 px-4 py-1 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              >
                Add Size
              </button>
            </div>
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
            {isSubmitting ? "Adding Product..." : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
}
