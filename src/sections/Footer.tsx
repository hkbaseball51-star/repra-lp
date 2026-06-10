import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Smartphone } from 'lucide-react';
import { APP_STORE_URL } from '../config/appStore';

export function Footer() {
  return (
    <footer className="relative py-12 border-t" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span
              className="text-xl font-black tracking-wider"
              style={{ color: '#F97316' }}
            >
              REPRA
            </span>
            <span className="text-xs text-white/25 font-medium">Every rep becomes proof.</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <a
              href="https://www.instagram.com/repra_jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-white/35 hover:text-white/70 transition-all duration-200 hover:scale-[1.03] opacity-90 hover:opacity-100"
            >
              <Instagram size={14} />
              Instagram
            </a>
            {/* Only show App Store link once APP_STORE_URL is set in src/config/appStore.ts */}
            {APP_STORE_URL && (
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-white/35 hover:text-white/70 transition-colors duration-200"
              >
                <Smartphone size={14} strokeWidth={1.7} />
                App Store
              </a>
            )}
            <Link to="/privacy" className="text-sm text-white/35 hover:text-white/70 transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-white/35 hover:text-white/70 transition-colors duration-200">
              Terms of Use
            </Link>
            <Link to="/support" className="text-sm text-white/35 hover:text-white/70 transition-colors duration-200">
              Support
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t text-center" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
          <p className="text-xs text-white/18">© 2026 REPRA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
