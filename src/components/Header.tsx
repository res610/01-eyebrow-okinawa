import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/01-eyebrow-okinawa/images/title.png"
              alt="01（O-ONE）"
              width={200}
              height={50}
              className="h-12 w-auto"
              priority
            />
          </Link>
          <ul className="flex gap-6">
            <li>
              <Link href="/" className="hover:text-gray-600 transition-colors">
                ホーム
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-gray-600 transition-colors">
                料金表
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-gray-600 transition-colors">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
