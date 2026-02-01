import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '利用規約 | EYEBROW STYLING FOR MEN OKINAWA',
  description: '01（O-ONE）の利用規約ページ。サービスのご利用条件をご案内します。',
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">利用規約</h1>

          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <div className="text-sm md:text-base text-gray-700 leading-relaxed space-y-6">
              <p className="text-center text-gray-500">内容準備中</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
