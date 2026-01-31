import Header from '@/components/Header';
import Footer from '@/components/Footer';
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
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-12">料金表</h1>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">基本メニュー</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b pb-4">
                <div>
                  <h3 className="font-bold text-lg">眉毛ワックス</h3>
                  <p className="text-gray-600 text-sm">施術時間：約30分</p>
                </div>
                <p className="text-2xl font-bold">¥0,000</p>
              </div>
              <div className="flex justify-between items-center border-b pb-4">
                <div>
                  <h3 className="font-bold text-lg">眉毛ワックス + 眉カット</h3>
                  <p className="text-gray-600 text-sm">施術時間：約45分</p>
                </div>
                <p className="text-2xl font-bold">¥0,000</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">オプション</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b pb-4">
                <h3 className="font-bold">眉ティント</h3>
                <p className="text-xl font-bold">+¥0,000</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600">※価格は税込表示です</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
