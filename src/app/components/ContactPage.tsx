import { motion } from 'motion/react';
import { MessageCircle, Instagram, Mail } from 'lucide-react';
import { useState } from 'react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Name: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/?text=${whatsappMessage}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-16 md:pt-20 min-h-screen">
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl mb-4 tracking-tighter uppercase">
            Get in <span className="text-lime-400">Touch</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Questions? Custom orders? Collaborations? We'd love to hear from you.
          </p>
        </motion.div>
      </section>

      {/* Contact Options & Form */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl mb-8 tracking-tighter uppercase">
                Connect with Us
              </h2>

              {/* WhatsApp */}
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-6 bg-zinc-900 rounded-2xl hover:bg-zinc-800 transition-colors group mb-4"
              >
                <div className="p-3 bg-lime-400 rounded-full group-hover:scale-110 transition-transform">
                  <MessageCircle className="text-black" size={24} />
                </div>
                <div>
                  <h3 className="text-xl uppercase tracking-wider mb-2">WhatsApp</h3>
                  <p className="text-gray-400">Chat with us directly for instant responses</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:hello@unbrand.in"
                className="flex items-start gap-4 p-6 bg-zinc-900 rounded-2xl hover:bg-zinc-800 transition-colors group mb-4"
              >
                <div className="p-3 bg-lime-400 rounded-full group-hover:scale-110 transition-transform">
                  <Mail className="text-black" size={24} />
                </div>
                <div>
                  <h3 className="text-xl uppercase tracking-wider mb-2">Email</h3>
                  <p className="text-gray-400">hello@unbrand.in</p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/unbrand"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-6 bg-zinc-900 rounded-2xl hover:bg-zinc-800 transition-colors group"
              >
                <div className="p-3 bg-lime-400 rounded-full group-hover:scale-110 transition-transform">
                  <Instagram className="text-black" size={24} />
                </div>
                <div>
                  <h3 className="text-xl uppercase tracking-wider mb-2">Instagram</h3>
                  <p className="text-gray-400">@unbrand - Follow for latest drops</p>
                </div>
              </a>
            </div>

            <div className="p-8 bg-lime-400 text-black rounded-2xl">
              <h3 className="text-2xl uppercase tracking-wider mb-4">Quick Order</h3>
              <p className="mb-6">
                Want to order now? Click the button below to chat with us on WhatsApp and place your
                order instantly.
              </p>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full uppercase tracking-wider hover:bg-zinc-900 transition-colors"
              >
                <MessageCircle size={18} />
                Order Now
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm uppercase tracking-wider mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-lime-400 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm uppercase tracking-wider mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-lime-400 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-lime-400 transition-colors resize-none"
                  placeholder="Tell us what you're looking for..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-lime-400 text-black py-4 rounded-full uppercase tracking-wider hover:bg-lime-300 transition-colors"
              >
                Send via WhatsApp
              </button>

              <p className="text-sm text-gray-400 text-center">
                Your message will be sent to us via WhatsApp
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Location / Additional Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl mb-6 tracking-tighter uppercase">
              Based in India,
              <br />
              <span className="text-lime-400">Shipping Nationwide</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              We're a homegrown brand bringing premium streetwear to every corner of India. Fast
              shipping, secure packaging, and customer satisfaction guaranteed.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
