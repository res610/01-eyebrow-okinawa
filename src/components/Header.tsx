import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            01（OONE）
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
