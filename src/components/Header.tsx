'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/title.webp`}
              alt="01（O-ONE）"
              width={200}
              height={50}
              className="h-10 md:h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-6">
            <li>
              <Link href="/" className="hover:text-gray-600 transition-colors text-base">
                ホーム
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-gray-600 transition-colors text-base">
                料金表
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-gray-600 transition-colors text-base">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-gray-600 transition-colors text-base">
                利用規約
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="メニュー"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/"
                  className="block py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ホーム
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="block py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  料金表
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="block py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="block py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  利用規約
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
