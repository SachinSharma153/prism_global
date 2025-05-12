import React, { useState } from 'react';

const ContactUs = () => {
  const [openFaqs, setOpenFaqs] = useState([]);

  const toggleFaq = (index) => {
    if (openFaqs.includes(index)) {
      setOpenFaqs(openFaqs.filter(i => i !== index));
    } else {
      setOpenFaqs([...openFaqs, index]);
    }
  };

  const faqs = [
    { question: "What is Prism?", answer: "Prism is a streaming service that offers a wide variety of TV shows, movies, and more." },
    { question: "How much does Prism cost?", answer: "Prism offers several subscription plans starting from $9.99 per month." },
    { question: "What can I watch on Prism?", answer: "You can watch thousands of TV shows, movies, and Prism Originals." },
    { question: "Where can I watch Prism?", answer: "You can watch Prism on your TV, computer, tablet, or mobile device." },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Us Heading */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Contact Us</h1>

        {/* Contact Cards */}
        <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-80">
            <div className="flex items-center mb-4">
              <svg
                className="w-8 h-8 text-blue-600 mr-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <h2 className="text-2xl font-semibold text-gray-800">Call Us</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Reach out to our support team by phone for immediate assistance.
            </p>
            <button className="bg-white text-purple-600 border border-purple-600 px-4 py-2 rounded hover:bg-purple-50">
              Chat with us
            </button>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-80">
            <div className="flex items-center mb-4">
              <svg
                className="w-8 h-8 text-blue-600 mr-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <h2 className="text-2xl font-semibold text-gray-800">Email Us</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Drop us an email, and we’ll respond within 24 hours.
            </p>
            <button className="bg-white text-purple-600 border border-purple-600 px-4 py-2 rounded hover:bg-purple-50">
              Chat with us
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="faq bg-gray-200 text-black p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="faqbox bg-white p-4 rounded cursor-pointer">
                <div className="flex justify-between items-center" onClick={() => toggleFaq(index)}>
                  <span>{faq.question}</span>
                  {openFaqs.includes(index) ? (
                    <svg width="30" height="30" viewBox="0 0 58 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="29" cy="29.5" r="28.5" fill="#F3F3F3" stroke="#191A23"/>
                      <path d="M20 32.14V26.5H37.76V32.14H20Z" fill="black"/>
                    </svg>
                  ) : (
                    <svg width="30" height="30" viewBox="0 0 58 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="29" cy="29.5" r="28.5" fill="#F3F3F3" stroke="#191A23"/>
                      <path d="M25.6 41.58V31.86H16V26.22H25.6V16.5H31.48V26.22H41.08V31.86H31.48V41.58H25.6Z" fill="#191A23"/>
                    </svg>
                  )}
                </div>
                <div className={`answer mt-2 text-gray-700 overflow-hidden transition-all duration-300 ${openFaqs.includes(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Email Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
                  First Name*
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
                  Last Name*
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email*
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mt-4">
              <label htmlFor="phone" className="block text-gray-800 font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="bookingNumber" className="block text-gray-700 font-medium mb-2">
                Booking Number (if applicable)
              </label>
              <input
                type="text"
                id="bookingNumber"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                Subject*
              </label>
              <input
                type="text"
                id="subject"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mt-4">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Questions and Comments*
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full p-2 border border-gray-300 rounded"
                required
              ></textarea>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
              >
                Contact Us
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;