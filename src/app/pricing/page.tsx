import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '料金表 | EYEBROW STYLING FOR MEN OKINAWA',
  description: '01（O-ONE）の料金表ページ。眉毛ワックス施術の詳細な料金をご案内します。',
};

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">料金表</h1>

          {/* 基本メニュー */}
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">基本メニュー</h2>
            <div className="space-y-6">
              <div className="border-b pb-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24">
                    <Image
                      src="/images/menu-icon.png"
                      alt="メニューアイコン"
                      width={96}
                      height={96}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold text-sm md:text-xl">
                        ★人気No.1｜眉毛＋毛穴ケア〈ワックス〉
                      </h3>
                      <p className="text-xl md:text-2xl font-bold text-gray-900 ml-4">¥8,000</p>
                    </div>
                    <p className="text-gray-700 text-[10px] md:text-sm mb-2">
                      眉毛を整えながら、鼻まわりの毛穴汚れも一緒にケアできるセット。
                      清潔感・肌印象を同時に整えたい方におすすめです。
                      初回はこちらを選ばれる方が多いメニューです。
                    </p>
                    <p className="text-gray-600 text-[10px] md:text-sm">所要時間：約120分</p>
                  </div>
                </div>
              </div>

              <div className="border-b pb-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24">
                    <Image
                      src="/images/menu-icon.png"
                      alt="メニューアイコン"
                      width={96}
                      height={96}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold text-sm md:text-xl">
                        ★人気No.1｜眉毛＋毛穴ケア〈パーマ〉
                      </h3>
                      <p className="text-xl md:text-2xl font-bold text-gray-900 ml-4">¥9,000</p>
                    </div>
                    <p className="text-gray-700 text-[10px] md:text-sm mb-2">
                      眉毛パーマ（ワックス込み）と毛穴ケアを組み合わせたセットメニューです。
                      眉の形・毛流れ・肌印象までまとめて整えたい方におすすめです。
                    </p>
                    <p className="text-gray-600 text-[10px] md:text-sm">所要時間：約150分</p>
                  </div>
                </div>
              </div>

              <div className="border-b pb-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24">
                    <Image
                      src="/images/menu-icon.png"
                      alt="メニューアイコン"
                      width={96}
                      height={96}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold text-sm md:text-xl">眉毛デザイン〈ワックス〉</h3>
                      <p className="text-xl md:text-2xl font-bold text-gray-900 ml-4">¥5,000</p>
                    </div>
                    <p className="text-gray-700 text-[10px] md:text-sm mb-2">
                      眉周りのムダ毛をワックスで整え、骨格に合わせて清潔感のある眉に仕上げます。
                      ※眉毛のみのシンプルなメニューです
                    </p>
                    <p className="text-gray-600 text-[10px] md:text-sm">所要時間：約60分</p>
                  </div>
                </div>
              </div>

              <div className="pb-2">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24">
                    <Image
                      src="/images/menu-icon.png"
                      alt="メニューアイコン"
                      width={96}
                      height={96}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold text-sm md:text-xl">
                        眉毛デザイン〈パーマ〉※ワックス込み
                      </h3>
                      <p className="text-xl md:text-2xl font-bold text-gray-900 ml-4">¥6,000</p>
                    </div>
                    <p className="text-gray-700 text-[10px] md:text-sm mb-2">
                      眉毛の生えグセを整えるパーマ施術です。
                      ワックス処理込みで、毎日のスタイリングが楽になります。
                      ※眉毛のみのシンプルなメニューです。
                    </p>
                    <p className="text-gray-600 text-[10px] md:text-sm">所要時間：約90分</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* オプションメニュー */}
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">オプション</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b pb-4">
                <div>
                  <h3 className="font-bold text-base md:text-lg">爪研ぎケア（ナチュラル仕上げ）</h3>
                  <p className="text-gray-600 text-xs md:text-sm mt-1">
                    爪の表面や先端を整え、形やツヤをキレイにする施術です。
                    デコボコ・二枚爪・割れやすい爪もケアして、清潔感のある指先に仕上げます。
                  </p>
                  <p className="text-gray-500 text-xs mt-1">所要時間：約30分</p>
                </div>
                <p className="text-lg md:text-xl font-bold text-gray-900 ml-4">¥2,000</p>
              </div>

              <div className="flex justify-between items-center border-b pb-4">
                <div>
                  <h3 className="font-bold text-base md:text-lg">鼻毛ワックス</h3>
                  <p className="text-gray-500 text-xs mt-1">所要時間：約20分</p>
                </div>
                <p className="text-lg md:text-xl font-bold text-gray-900">¥800</p>
              </div>

              <div className="flex justify-between items-center border-b pb-4">
                <div>
                  <h3 className="font-bold text-base md:text-lg">毛穴洗浄（鼻のみ）</h3>
                  <p className="text-gray-600 text-xs md:text-sm mt-1">
                    ニキビや肌荒れが目立つ場合は施術ができないことがあります。
                  </p>
                  <p className="text-gray-500 text-xs mt-1">所要時間：約30分</p>
                </div>
                <p className="text-lg md:text-xl font-bold text-gray-900 ml-4">¥1,500</p>
              </div>

              <div className="flex justify-between items-center border-b pb-4">
                <h3 className="font-bold text-base md:text-lg">耳毛ワックス</h3>
                <p className="text-lg md:text-xl font-bold text-gray-900">¥1,000</p>
              </div>

              <div className="flex justify-between items-center border-b pb-4">
                <h3 className="font-bold text-base md:text-lg">小鼻ワックス</h3>
                <p className="text-lg md:text-xl font-bold text-gray-900">¥500</p>
              </div>

              <div className="flex justify-between items-center border-b pb-4">
                <div>
                  <h3 className="font-bold text-base md:text-lg">おでこワックス</h3>
                  <p className="text-gray-500 text-xs mt-1">所要時間：約10分</p>
                </div>
                <p className="text-lg md:text-xl font-bold text-gray-900">¥2,500</p>
              </div>

              <div className="flex justify-between items-center pb-2">
                <h3 className="font-bold text-base md:text-lg">頬ワックス</h3>
                <p className="text-lg md:text-xl font-bold text-gray-900">¥2,000</p>
              </div>
            </div>
          </div>

          {/* ご予約ボタン */}
          <div className="text-center mt-8 md:mt-12">
            <a
              href="https://tol-app.jp/s/ah63epbbc2ejsctgvpzm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-900 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg font-bold hover:bg-gray-800 transition-colors min-h-[44px] w-full sm:w-auto"
            >
              ご予約はこちら
            </a>
          </div>

          {/* 注意事項 */}
          <div className="mt-8 space-y-4">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
              <p className="text-sm md:text-base text-gray-800 leading-relaxed">
                ※当店はシェアサロンを利用しているため、まれに他の利用者様と予約時間が重なってしまう場合がございます。その際は、こちらからご連絡の上、日程の再調整をお願いすることがございます。何卒ご理解・ご協力のほどよろしくお願いいたします。
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm md:text-base text-gray-600">※価格は税込表示です</p>
              <p className="text-sm md:text-base text-gray-600">※お支払い方法：現地支払い</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
