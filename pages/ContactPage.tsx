import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Contact Form Submission:', formData);
    setSubmitted(true);
  };
  
  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6 py-16">
        <div className="bg-white rounded-3xl border-4 border-dashed border-[#16B6A1] p-12 shadow-lg max-w-2xl">
          <div className="text-6xl text-[#FFC145]">💌</div>
          <h1 className="text-4xl font-extrabold text-[#0B7CC1] mt-4">Message Sent!</h1>
          <p className="mt-4 text-2xl text-gray-600 font-display">Thanks for reaching out!</p>
          <p className="mt-2 text-lg text-gray-500">We've got your message and will get back to you faster than a dolphin can swim. Well, almost!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-extrabold text-center text-[#0B7CC1]">Get In Touch</h1>
        <p className="text-center text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
          Have a question? A brilliant idea? Or just want to say hello? We’re all ears (and fins)!
        </p>
        
        <div className="mt-12 max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 bg-[#F6F4EE] p-8 rounded-3xl border-4 border-[#0FA3E2]">
          {/* Contact Form */}
          <form onSubmit={handleSubmit}>
            <h2 className="text-3xl font-bold text-[#0B7CC1] mb-6">Send Us a Message</h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-bold text-[#0B7CC1] mb-2">Full Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border-2 border-[#16B6A1] focus:ring-[#FFC145] focus:border-[#FFC145] transition" />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-bold text-[#0B7CC1] mb-2">Email Address</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border-2 border-[#16B6A1] focus:ring-[#FFC145] focus:border-[#FFC145] transition" />
              </div>
               <div>
                <label htmlFor="subject" className="block text-lg font-bold text-[#0B7CC1] mb-2">Subject</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border-2 border-[#16B6A1] focus:ring-[#FFC145] focus:border-[#FFC145] transition" />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-bold text-[#0B7CC1] mb-2">Your Message</label>
                <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border-2 border-[#16B6A1] focus:ring-[#FFC145] focus:border-[#FFC145] transition"></textarea>
              </div>
              <button type="submit" className="w-full bg-[#FF6F61] text-white font-bold text-xl px-12 py-4 rounded-full shadow-lg transform transition-transform hover:scale-105 duration-300">
                Send
              </button>
            </div>
          </form>

          {/* Contact Info */}
          <div className="bg-white p-8 rounded-2xl border-4 border-dashed border-[#FFC145]">
             <h2 className="text-3xl font-bold text-[#0B7CC1] mb-6">Other Ways to Reach Us</h2>
             <div className="space-y-6 text-lg">
                <div className="flex items-start gap-4">
                    <div className="text-3xl mt-1">📞</div>
                    <div>
                        <h4 className="font-bold text-[#0B7CC1]">9am to 5pm</h4>
                        <p className="text-gray-600">+91 9832778485</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="text-3xl mt-1">📧</div>
                    <div>
                        <h4 className="font-bold text-[#0B7CC1]">Email Us</h4>
                        <p className="text-gray-600">hello@andamanabode.com</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="text-3xl mt-1">📍</div>
                    <div>
                        <h4 className="font-bold text-[#0B7CC1]">Our Office</h4>
                        <p className="text-gray-600">Prothrapur, Port Blair, Andaman & Nicobar Islands</p>
                    </div>
                </div>
             </div>
             <button className="mt-8 w-full bg-[#16B6A1] text-white font-bold py-3 px-4 rounded-full hover:bg-teal-500 transition-transform hover:scale-105">
                Chat on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;