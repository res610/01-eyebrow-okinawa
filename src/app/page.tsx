import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section - モバイルファースト */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
              {/* マスコットキャラクター */}
              <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 flex-shrink-0">
                <Image
                  src="/01-eyebrow-okinawa/images/mascot.png"
                  alt="01（O-ONE）マスコット"
                  width={192}
                  height={192}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* テキストコンテンツ */}
              <div className="text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                  EYEBROW STYLING<br />FOR MEN OKINAWA
                </h1>
                <p className="text-2xl sm:text-3xl mb-3 md:mb-4 font-bold">01（O-ONE）</p>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 md:mb-8 px-2 md:px-0">
                  沖縄県那覇市おもろまちのメンズ専門眉毛ワックスサロン
                </p>
                {/* モバイルで最低44pxのタップ領域を確保 */}
                <a
                  href="https://tol-app.jp/s/ah63epbbc2ejsctgvpzm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gray-900 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg hover:bg-gray-800 transition-colors min-h-[44px] w-full sm:w-auto text-center"
                >
                  ご予約はこちら
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section - Hitomi紹介 */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">
              眉で印象は大きく変わる<br className="md:hidden" />顔立ちからベストな眉をご提案
            </h2>
            <div className="bg-gray-50 rounded-lg p-6 md:p-8">
              <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-4">
                こんにちは。アイブロウリストHitomiです。<br />
                この度は当店のWEBサイトをご覧いただきありがとうございます。
              </p>
              <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-4">
                01（O-ONE）はメンズ専用のアイブロウサロンです。<br />
                私はこのお店をオープンする前から、男性の眉毛をスタイリングしていました。<br />
                ありがたいことに、その頃から、「Hitomiさんにやってもらいたい！」と言われることが増えたことをきっかけに、01（O-ONE）をオープンさせました。
              </p>
              <p className="text-sm md:text-base leading-relaxed text-gray-700">
                昨今、男性もメイクをする時代。眉毛は整えるだけで印象が変わるものです。<br />
                当店では、お客様のお顔立ちを拝見させていただき、ベストな眉に仕上げてまいります。<br />
                誰でも親しみやすい空間作りを心がけているので、ぜひお気軽にお越しください。
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">当サロンの特徴</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center p-6 bg-white rounded-lg">
                <div className="text-4xl mb-4">👨</div>
                <h3 className="text-lg md:text-xl font-bold mb-2">メンズ専門</h3>
                <p className="text-sm md:text-base text-gray-600">男性専門の眉毛ワックスサロン</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-lg md:text-xl font-bold mb-2">ワックス脱毛</h3>
                <p className="text-sm md:text-base text-gray-600">プロの技術で美しい眉に</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg">
                <div className="text-4xl mb-4">📍</div>
                <h3 className="text-lg md:text-xl font-bold mb-2">好立地</h3>
                <p className="text-sm md:text-base text-gray-600">那覇市おもろまち</p>
              </div>
            </div>
          </div>
        </section>

        {/* Access Section - Googleマップと店舗外観 */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">アクセス</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Googleマップ */}
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229038.4356175784!2d127.56311287910155!3d26.230915100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e569e1c84de5e5%3A0x8c8e1e1e1e1e1e1e!2z44CSOTAwLTAwMDYg5rKW57iE55yM6YKj6KaH5biC44GK44KC44KN44G-44Gh77yU5LiB55uu77yW4oiS77yR77yZIOODleODrOODg-OCr-OCueOBiuOCguOCjeOBvuOBoeOAgTQwMQ!5e0!3m2!1sja!2sjp!4v1706774400000!5m2!1sja!2sjp"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-64 md:h-80"
                ></iframe>
                <div className="bg-gray-900 text-white p-4">
                  <p className="text-sm md:text-base font-bold mb-2">01（O-ONE）</p>
                  <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                    〒900-0006<br />
                    沖縄県那覇市おもろまち4-6-19<br />
                    フレックスおもろまち401
                  </p>
                  <a
                    href="https://maps.app.goo.gl/q8astkDzWxpiktEX6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 bg-white text-gray-900 px-4 py-2 rounded text-sm font-bold hover:bg-gray-100 transition-colors min-h-[44px] flex items-center justify-center"
                  >
                    Googleマップで開く
                  </a>
                </div>
              </div>

              {/* 店舗外観写真 */}
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/01-eyebrow-okinawa/images/exterior.jpg"
                  alt="01（O-ONE）店舗外観"
                  width={600}
                  height={400}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="bg-gray-900 text-white p-4">
                  <p className="text-sm md:text-base font-bold mb-2">店舗外観</p>
                  <p className="text-xs md:text-sm text-gray-300">
                    フレックスおもろまち401<br />
                    シェアサロン内で営業しております
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">詳しい情報はこちら</h2>
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
              <Link
                href="/pricing"
                className="bg-white border-2 border-gray-900 text-gray-900 px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg hover:bg-gray-900 hover:text-white transition-colors min-h-[44px] flex items-center justify-center"
              >
                料金表を見る
              </Link>
              <Link
                href="/faq"
                className="bg-white border-2 border-gray-900 text-gray-900 px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg hover:bg-gray-900 hover:text-white transition-colors min-h-[44px] flex items-center justify-center"
              >
                よくあるご質問
              </Link>
            </div>

            {/* お問い合わせ - LINE */}
            <div className="mt-8 pt-8 border-t border-gray-300">
              <h3 className="text-xl md:text-2xl font-bold mb-4">お問い合わせ</h3>
              <p className="text-sm md:text-base text-gray-600 mb-4">
                ご質問やご相談はLINEからお気軽にどうぞ
              </p>
              <a
                href="https://lin.ee/JfpRgB1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block min-h-[44px] hover:opacity-80 transition-opacity"
              >
                <Image
                  src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
                  alt="友だち追加"
                  width={144}
                  height={36}
                  className="h-9 w-auto"
                />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
