import { Link } from 'react-router-dom';
import { Instagram, MessageCircle, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="text-3xl tracking-tighter">
                UN<span className="text-lime-400">BRAND</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Premium streetwear for the everyday individual. From unbranded to branded.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/unbrand"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-zinc-900 rounded-full hover:bg-lime-400 hover:text-black transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-zinc-900 rounded-full hover:bg-lime-400 hover:text-black transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="mailto:hello@unbrand.in"
                className="p-3 bg-zinc-900 rounded-full hover:bg-lime-400 hover:text-black transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-lime-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/collection"
                  className="text-gray-400 hover:text-lime-400 transition-colors"
                >
                  Collection
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-lime-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-lime-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="uppercase tracking-wider mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-lime-400 transition-colors"
                >
                  Order via WhatsApp
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-lime-400 transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-lime-400 transition-colors">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-lime-400 transition-colors">
                  Size Guide
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} UNBRAND. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-lime-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-lime-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
