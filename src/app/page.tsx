import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CustomerVoices from '@/components/CustomerVoices';
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
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/mascot.webp`}
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

        {/* 01が選ばれる3つの理由 Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            {/* タイトル */}
            <div className="text-center mb-10 md:mb-14">
              <h2 className="text-2xl md:text-3xl font-bold tracking-widest mb-2">01が選ばれる3つの理由</h2>
              <div className="w-48 h-0.5 bg-gray-800 mx-auto mb-2"></div>
              <p className="text-sm tracking-widest text-gray-600">3 REASONS TO CHOOSE 01</p>
            </div>

            <div className="space-y-12 md:space-y-16">
              {/* 1. 完全個室のプライベートサロン */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center text-xl font-bold z-10">
                    01
                  </div>
                  <img
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/kodawari-private.webp`}
                    alt="完全個室のプライベートサロン"
                    className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="md:pl-4">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 border-b-2 border-gray-300 pb-2">
                    完全個室のプライベートサロン
                  </h3>
                  <div className="text-sm md:text-base text-gray-700 leading-relaxed space-y-3">
                    <p>01（オーワン）は、完全個室のプライベートサロンです。<br />周りの目を気にすることなく、落ち着いた空間で施術を受けていただけます。</p>
                    <p>初めてのアイブロウサロンで「人目が気になる」「緊張してしまう」<br />そんな方でも、リラックスしてお過ごしいただける環境をご用意しています。</p>
                    <p>眉を整えることで顔全体の印象が明るくなり、<br />清潔感のある自然な印象へとアップデートできます。</p>
                  </div>
                </div>
              </div>

              {/* 2. 丁寧なカウンセリング */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
                <div className="relative md:order-2">
                  <div className="absolute -top-4 -right-4 md:-left-4 md:right-auto w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center text-xl font-bold z-10">
                    02
                  </div>
                  <img
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/kodawari-counseling.webp`}
                    alt="丁寧なカウンセリング"
                    className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="md:order-1 md:pr-4">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 border-b-2 border-gray-300 pb-2">
                    丁寧なカウンセリング
                  </h3>
                  <div className="text-sm md:text-base text-gray-700 leading-relaxed space-y-3">
                    <p>顔の印象を大きく左右する眉毛。<br />骨格や筋肉のつき方は一人ひとり異なるため、似合う眉の形も人それぞれです。</p>
                    <p>01（オーワン）では、丁寧なカウンセリングを通して、骨格や顔立ち、なりたい印象をしっかりとヒアリング。<br />お客様一人ひとりに合わせたオーダーメイドの眉デザインをご提案します。</p>
                    <p>自然で清潔感のある仕上がりはもちろん、<br />ご希望に応じてトレンドを取り入れたデザイン提案も可能です。</p>
                    <p>「自分に似合う眉が分からない」「印象を変えたい」<br />そんな方も、安心してご相談ください。</p>
                  </div>
                </div>
              </div>

              {/* 3. 身だしなみを、さらに整える */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center text-xl font-bold z-10">
                    03
                  </div>
                  <img
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/kodawari-grooming.webp`}
                    alt="身だしなみを、さらに整える"
                    className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="md:pl-4">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 border-b-2 border-gray-300 pb-2">
                    身だしなみを、さらに整える
                  </h3>
                  <div className="text-sm md:text-base text-gray-700 leading-relaxed space-y-3">
                    <p>01（オーワン）では、眉毛パーマ・眉毛ワックスに加え、<br />身だしなみをトータルで整えられるオプションメニューをご用意しています。</p>
                    <p>毛穴洗浄や各種ワックスケア、爪磨きなど、<br />顔まわりから指先まで、清潔感を高めたい方におすすめです。</p>
                    <p>必要なものだけを、必要な分だけ。<br />眉毛施術と組み合わせることで、<br />より完成度の高い仕上がりを実感していただけます。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* お客様の声 Section */}
        <CustomerVoices />

        {/* Access Section - Googleマップと店舗外観 */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">アクセス</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Googleマップ */}
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps?q=26.2271985,127.6961874&output=embed&z=15"
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
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/exterior.webp`}
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

        {/* キャンセルポリシー Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            {/* タイトル部分 */}
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold tracking-widest mb-2">キャンセルポリシー</h2>
              <div className="w-48 h-0.5 bg-gray-800 mx-auto mb-2"></div>
              <p className="text-sm tracking-widest text-gray-600">CANCELLATION POLICY</p>
            </div>

            {/* 封蝋風の装飾 */}
            <div className="flex justify-center -mb-6 relative z-10">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-800 via-red-900 to-red-950 shadow-lg flex items-center justify-center border-2 border-red-700">
                <span className="text-amber-200 text-xl font-serif">01</span>
              </div>
            </div>

            {/* メインコンテンツ - ペライチ風デザイン */}
            <div className="relative border-4 border-double border-red-900 bg-amber-50 p-6 md:p-8 pt-10">
              {/* 装飾的な飾り線（上） */}
              <div className="flex items-center justify-center mb-6">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
                <div className="mx-4 flex items-center gap-1">
                  <span className="text-amber-400 text-lg">❧</span>
                  <span className="text-amber-600 text-xs">✦</span>
                  <span className="text-amber-400 text-lg">❧</span>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
              </div>

              {/* サブタイトル */}
              <h3 className="text-xl md:text-2xl text-red-800 font-bold text-center mb-4" style={{ fontFamily: 'serif' }}>
                ご予約についてのお願い
              </h3>

              {/* 装飾的な飾り線（下） */}
              <div className="flex items-center justify-center mb-6">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
                <div className="mx-4 flex items-center gap-1">
                  <span className="text-amber-400 text-lg">❧</span>
                  <span className="text-amber-600 text-xs">✦</span>
                  <span className="text-amber-400 text-lg">❧</span>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
              </div>

              {/* 本文 */}
              <div className="text-sm md:text-base text-gray-800 leading-relaxed space-y-4 text-center">
                <p>
                  当サロンは完全予約制のため、一人ひとりのお時間を大切にし、施術枠を確保しております。
                </p>
                <p>
                  ご予約のキャンセル・変更は、必ず前日までにご連絡をお願いいたします。<br />
                  無断キャンセル、または当日キャンセルがあった場合は、今後のご予約をお断りさせていただく場合がございます。
                </p>
                <p>
                  すべてのお客様に気持ちよくご利用いただくため、何卒ご理解とご協力をお願いいたします。
                </p>
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

      {/* フッター固定LINEボタン（メインページ専用） */}
      <a
        href="https://lin.ee/JfpRgB1"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-4 md:right-6 z-50 transition-all hover:opacity-80 hover:scale-105"
      >
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/line-button.webp`}
          alt="LINEで問い合わせ"
          width={180}
          height={180}
          className="w-20 h-20 md:w-28 md:h-28"
        />
      </a>
    </>
  );
}
