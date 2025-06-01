"use client";

import { useState, useEffect } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    description: "",
  });

  // Validation states
  const [validationErrors, setValidationErrors] = useState({
    email: "",
    phone: "",
  });

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message:
            "Thank you! Your request has been received. We'll get back to you soon!",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          description: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to submit form. Please try again.",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again or call us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
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
