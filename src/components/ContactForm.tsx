"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    description: "",
    hasStairs: false,
    itemLocation: "",
    hasHeavyItems: false,
    heavyItemsDescription: "",
    itemsBagged: "",
  });

  // State for multiple image uploads
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [imageError, setImageError] = useState("");

  // Validation states
  const [validationErrors, setValidationErrors] = useState({
    email: "",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  // Format phone number as user types
  const formatPhoneNumber = (value: string) => {
    // Remove all non-digit characters
    const digits = value.replace(/\D/g, "");

    // Format according to length
    if (digits.length <= 3) {
      return digits;
    } else if (digits.length <= 6) {
      return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    } else {
      return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(
        6,
        10
      )}`;
    }
  };

  // Validate email format
  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) {
      return "Email is required";
    } else if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }
    return "";
  };

  // Validate phone format
  const validatePhone = (phone: string) => {
    // Remove formatting to check digit count
    const digits = phone.replace(/\D/g, "");
    if (!phone) {
      return "Phone number is required";
    } else if (digits.length !== 10) {
      return "Please enter a complete 10-digit phone number";
    }
    return "";
  };

  // Convert file to base64
  const convertFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  };

  // Handle multiple image uploads
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    setImageError("");
    
    if (!files || files.length === 0) {
      return;
    }
    
    // Convert FileList to array for easier processing
    const fileArray = Array.from(files);
    
    // Validate each file
    const validTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/webp'];
    const invalidTypeFile = fileArray.find(file => !validTypes.includes(file.type));
    if (invalidTypeFile) {
      setImageError("Please upload only valid image files (JPEG, PNG, or WebP)");
      return;
    }
    
    // Validate file sizes (max 5MB each)
    const oversizedFile = fileArray.find(file => file.size > 5 * 1024 * 1024);
    if (oversizedFile) {
      setImageError(`Image '${oversizedFile.name}' exceeds the 5MB size limit`);
      return;
    }
    
    // Limit total number of images to 5
    const totalFiles = [...imageFiles, ...fileArray];
    if (totalFiles.length > 5) {
      setImageError("You can upload a maximum of 5 images");
      return;
    }
    
    // Add new files to existing files
    setImageFiles(prevFiles => [...prevFiles, ...fileArray]);
    
    // Create previews for all new files
    fileArray.forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviews(prevPreviews => [...prevPreviews, reader.result as string]);
      };
      reader.readAsDataURL(file);
    });
  };
  
  // Remove a specific image
  const removeImage = (index: number) => {
    setImageFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
    setImagePreviews(prevPreviews => prevPreviews.filter((_, i) => i !== index));
  };
  
  // Validate form before submission
  const validateForm = () => {
    const emailError = validateEmail(formData.email);
    const phoneError = validatePhone(formData.phone);

    setValidationErrors({
      email: emailError,
      phone: phoneError,
    });

    return !emailError && !phoneError;
  };
  
  // Reset form function
  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      description: "",
      hasStairs: false,
      itemLocation: "",
      hasHeavyItems: false,
      heavyItemsDescription: "",
      itemsBagged: "",
    });
    setImageFiles([]);
    setImagePreviews([]);
    setImageError("");
    setSubmitStatus({ type: null, message: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Prepare form data with multiple images if available
      const imageDataPromises = imageFiles.map(file => convertFileToBase64(file));
      const imageDataArray = await Promise.all(imageDataPromises);
      
      const submitData = {
        ...formData,
        images: imageFiles.length > 0 ? imageFiles.map((file, index) => ({
          data: imageDataArray[index],
          fileName: file.name,
          type: file.type
        })) : [],
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message:
            "Thank you! Your request has been received. We'll get back to you soon!",
        });
        resetForm();
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to submit form. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again or call us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Get a Free Estimate</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-jbg-red)]"
            placeholder="Your name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={`w-full px-4 py-2 border ${
              validationErrors.email ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-jbg-red)]`}
            placeholder="Your email address"
            required
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              if (validationErrors.email) {
                setValidationErrors({
                  ...validationErrors,
                  email: validateEmail(e.target.value),
                });
              }
            }}
            onBlur={(e) => {
              setValidationErrors({
                ...validationErrors,
                email: validateEmail(e.target.value),
              });
            }}
          />
          {validationErrors.email && (
            <p className="text-red-500 text-sm mt-1">
              {validationErrors.email}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className={`w-full px-4 py-2 border ${
              validationErrors.phone ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-jbg-red)]`}
            placeholder="(XXX) XXX-XXXX"
            required
            value={formData.phone}
            onChange={(e) => {
              const formattedPhone = formatPhoneNumber(e.target.value);
              setFormData({ ...formData, phone: formattedPhone });
              if (validationErrors.phone) {
                setValidationErrors({
                  ...validationErrors,
                  phone: validatePhone(formattedPhone),
                });
              }
            }}
            onBlur={(e) => {
              setValidationErrors({
                ...validationErrors,
                phone: validatePhone(e.target.value),
              });
            }}
          />
          {validationErrors.phone && (
            <p className="text-red-500 text-sm mt-1">
              {validationErrors.phone}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-jbg-red)]"
            placeholder="Where the junk is located"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Description of Items
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-jbg-red)]"
            placeholder="Please describe the items you need removed"
            required
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          ></textarea>
        </div>

        <div className="space-y-4">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="hasStairs"
                name="hasStairs"
                type="checkbox"
                className="focus:ring-[var(--color-jbg-red)] h-4 w-4 text-[var(--color-jbg-red)] border-gray-300 rounded"
                checked={formData.hasStairs}
                onChange={(e) =>
                  setFormData({ ...formData, hasStairs: e.target.checked })
                }
              />
            </div>
            <div className="ml-3">
              <label
                htmlFor="hasStairs"
                className="text-sm font-medium text-gray-700"
              >
                Are there stairs?
              </label>
            </div>
          </div>

          <div>
            <label
              htmlFor="itemLocation"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Where are the items located?
            </label>
            <select
              id="itemLocation"
              name="itemLocation"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-jbg-red)]"
              value={formData.itemLocation}
              onChange={(e) =>
                setFormData({ ...formData, itemLocation: e.target.value })
              }
            >
              <option value="">Select location...</option>
              <option value="Basement">Basement</option>
              <option value="Main floor">Main floor</option>
              <option value="Upstairs">Upstairs</option>
              <option value="Garage">Garage</option>
              <option value="Backyard">Backyard</option>
              <option value="Front yard">Front yard</option>
              <option value="Multiple locations">Multiple locations</option>
              <option value="Other">Other (please specify in description)</option>
            </select>
          </div>

          <div className="space-y-2">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="hasHeavyItems"
                  name="hasHeavyItems"
                  type="checkbox"
                  className="focus:ring-[var(--color-jbg-red)] h-4 w-4 text-[var(--color-jbg-red)] border-gray-300 rounded"
                  checked={formData.hasHeavyItems}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      hasHeavyItems: e.target.checked,
                      heavyItemsDescription: e.target.checked
                        ? formData.heavyItemsDescription
                        : "",
                    });
                  }}
                />
              </div>
              <div className="ml-3">
                <label
                  htmlFor="hasHeavyItems"
                  className="text-sm font-medium text-gray-700"
                >
                  Is there anything extremely heavy? (Safes, pianos, concrete, etc)
                </label>
              </div>
            </div>

            {formData.hasHeavyItems && (
              <div className="ml-7">
                <input
                  type="text"
                  id="heavyItemsDescription"
                  name="heavyItemsDescription"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-jbg-red)]"
                  placeholder="Please describe the heavy items"
                  value={formData.heavyItemsDescription}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      heavyItemsDescription: e.target.value,
                    })
                  }
                />
              </div>
            )}
          </div>

          <div>
            <label
              htmlFor="itemsBagged"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Are the items bagged or would you like us to bag them?
            </label>
            <select
              id="itemsBagged"
              name="itemsBagged"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-jbg-red)]"
              value={formData.itemsBagged}
              onChange={(e) =>
                setFormData({ ...formData, itemsBagged: e.target.value })
              }
            >
              <option value="">Select option...</option>
              <option value="Already bagged">Items are already bagged</option>
              <option value="Need bagging">Please bag the items for me</option>
              <option value="Mix of both">Some are bagged, some need bagging</option>
              <option value="Not applicable">Not applicable</option>
            </select>
          </div>
        </div>

        <div>
          <p className="block text-sm font-medium text-gray-700 mb-3">
            Please include photos of the items you need removed (optional but recommended)
          </p>
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Upload Photos (Optional)
          </label>
          <div className="mt-1 flex items-center">
            <input
              type="file"
              id="image"
              name="image"
              accept="image/jpeg,image/png,image/webp"
              multiple
              className="w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-red-50 file:text-[var(--color-jbg-red)]
                hover:file:bg-red-100"
              onChange={handleImageChange}
            />
          </div>
          <p className="text-xs text-gray-500 mt-1">You can upload up to 5 images (max 5MB each)</p>
          {imageError && (
            <p className="text-red-500 text-sm mt-1">{imageError}</p>
          )}
          {imagePreviews.length > 0 && (
            <div className="mt-3">
              <p className="text-sm text-gray-500 mb-2">Previews:</p>
              <div className="flex flex-wrap gap-3">
                {imagePreviews.map((preview, index) => (
                  <div key={index} className="relative w-32 h-32 border border-gray-300 rounded-md overflow-hidden">
                    <img
                      src={preview}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                      onClick={() => removeImage(index)}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-[var(--color-jbg-red)] hover:bg-red-600 text-white font-bold py-3 px-6 rounded-md transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Request"}
          </button>

          {submitStatus.type && (
            <div
              className={`mt-4 p-4 rounded-md ${
                submitStatus.type === "success"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {submitStatus.message}
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
