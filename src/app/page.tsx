import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              EYEBROW STYLING<br />FOR MEN OKINAWA
            </h1>
            <p className="text-3xl mb-4 font-bold">01（O-ONE）</p>
            <p className="text-xl text-gray-600 mb-8">
              沖縄県那覇市おもろまちのメンズ専門眉毛ワックスサロン
            </p>
            <button className="bg-gray-900 text-white px-8 py-4 rounded-lg text-lg hover:bg-gray-800 transition-colors">
              ご予約はこちら
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">当サロンの特徴</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="text-4xl mb-4">👨</div>
                <h3 className="text-xl font-bold mb-2">メンズ専門</h3>
                <p className="text-gray-600">男性専門の眉毛ワックスサロン</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-xl font-bold mb-2">ワックス脱毛</h3>
                <p className="text-gray-600">プロの技術で美しい眉に</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-4">📍</div>
                <h3 className="text-xl font-bold mb-2">好立地</h3>
                <p className="text-gray-600">那覇市おもろまち</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">詳しい情報はこちら</h2>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="bg-white border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg text-lg hover:bg-gray-900 hover:text-white transition-colors"
              >
                料金表を見る
              </Link>
              <Link
                href="/faq"
                className="bg-white border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg text-lg hover:bg-gray-900 hover:text-white transition-colors"
              >
                よくあるご質問
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
