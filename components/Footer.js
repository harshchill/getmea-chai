import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-900/75 border-t border-t-slate-700 text-white mt-20">
      <div className="container mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <img src="/tea.gif" alt="Chai" className="w-8 invert" />
              <span className="text-xl font-bold">Get Me a Chai</span>
            </div>
            <p className="text-slate-300 text-sm">
              Fueling creators with support, one chai at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-slate-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/explore" className="text-slate-300 hover:text-white transition-colors">
                  Explore Creators
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-slate-300 hover:text-white transition-colors">
                  Get Started
                </Link>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div className="space-y-3">
            <h3 className="font-semibold">Features</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-slate-300">Secure Payments</li>
              <li className="text-slate-300">Instant Checkout</li>
              <li className="text-slate-300">Creator Profiles</li>
              <li className="text-slate-300">Support Tracking</li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div className="space-y-3">
            <h3 className="font-semibold">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:support@getmeachai.com" className="text-slate-300 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <Link href="/privacy" className="text-slate-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-300 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li className="text-slate-300">
                Powered by Razorpay
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-400 text-sm">
            © 2024 Get Me a Chai. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-sm">
            <span className="text-slate-400">Built with</span>
            <span className="text-slate-300">Next.js</span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-300">React</span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-300">Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
