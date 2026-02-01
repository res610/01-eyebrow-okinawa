import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'よくあるご質問 | EYEBROW STYLING FOR MEN OKINAWA',
  description: '01（O-ONE）のよくあるご質問。施術内容や予約方法など、お客様からよくいただく質問にお答えします。',
};

export default function FaqPage() {
  const faqs = [
    {
      question: '予約は必要ですか？',
      answer: 'はい、完全予約制となっております。お電話またはLINEにてご予約ください。',
    },
    {
      question: '施術時間はどのくらいかかりますか？',
      answer: '眉毛ワックスが約60分、眉毛パーマは約90分です。',
    },
    {
      question: '痛みはありますか？',
      answer: '個人差はありますが、ワックス脱毛特有の一時的な痛みがあります。数時間〜3日間で落ち着きます。',
    },
    {
      question: '施術後のケアは必要ですか？',
      answer: '施術当日は激しい運動やサウナ、長時間の入浴は避けてください。詳しくは施術後にご説明いたします。',
    },
    {
      question: 'どのくらいの頻度で通えばいいですか？',
      answer: '個人差がありますが、3週間〜1ヵ月に1度のペースをおすすめしています。',
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-12">よくあるご質問</h1>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-3 flex items-start">
                  <span className="bg-gray-900 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1 flex-shrink-0">
                    Q
                  </span>
                  {faq.question}
                </h2>
                <div className="ml-9 text-gray-700">
                  <p className="flex items-start">
                    <span className="bg-gray-200 text-gray-900 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1 flex-shrink-0">
                      A
                    </span>
                    <span className="flex-1">{faq.answer}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">その他ご質問がある場合</h2>
            <p className="text-gray-600 mb-6">
              お気軽にお問い合わせください。
            </p>
            <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
              お問い合わせ
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
