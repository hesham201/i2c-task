"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import formImg from "@/assets/images/form-img.png";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const savedFormData = localStorage.getItem("formData");
    if (savedFormData) {
      setSubmitted(true);
      toast.info("Form already submitted!");
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    if (formData.name.length < 3 || formData.company.length < 3) {
      toast.error("Name and company name must be at least 3 characters long.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    // Save form data to local storage
    localStorage.setItem("formData", JSON.stringify(formData));
    setSubmitted(true);
    toast.success("Form submitted successfully!");
  };

  return (
    <section>
      <ToastContainer />
      <div className="container mx-auto">
        <div className="flex lg:flex-row flex-col lg:gap-2 gap-4 ">
          <div className="lg:w-1/2">
            <Image className="w-full h-auto" src={formImg} alt="form img" />
          </div>
          <div className="rounded lg:w-1/2 p-6 bg-white shadow-md flex flex-col justify-center">
            <div className="max-w-sm mb-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Registration
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae,
                in tristique senectus dui pharetra sit.
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <Label htmlFor="name">Name *</Label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-2">
                <Label htmlFor="company">Company *</Label>
                <Input
                  type="text"
                  id="company"
                  placeholder="Enter your company name"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <Label htmlFor="email">Email *</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Button
                  className="bg-custom-gold shadow-lg px-12 shadow-custom-gold rounded-full text-white"
                  type="submit"
                  disabled={submitted}
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
