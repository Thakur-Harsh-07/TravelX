import { useState } from "react";
import toast from "react-hot-toast";

export default function Contact() {
    const[formData, setFormData] = useState({
        name:"",
        email:"",
        message:"",
    })
    const handleChange=(e)=>{
        setFormData((prev)=>({
          ...prev,
          [e.target.name]:e.target.value
        }))
    }
        
    const handleOnClick = (e) => {
        e.preventDefault();
        
        // Validate form data
        if (!formData.name || !formData.email || !formData.message) {
            toast.error("Please fill in all fields");
            return;
        }


        // If validation passes, show success message and reset form
        toast.success("Message sent successfully!");
        setFormData({
            name: "",
            email: "",
            message: ""
        });
    }
    
  return (
    <section className="min-h-screen bg-gray-900 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <div className="bg-gray-800 p-8 rounded-lg">
          <form className="space-y-6" onSubmit={handleOnClick}>
            <div>
              <label htmlFor="name" className="block mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                required
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
                placeholder="Your email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea
                id="message"
                rows="4"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
               
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
