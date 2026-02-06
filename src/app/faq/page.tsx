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
      question: '支払い方法を教えてください。',
      answer: 'お支払いは現金のみになります。',
    },
    {
      question: '施術までに手入れは必要ですか？',
      answer: 'できれば3週間以上は自己処理をせず、できるだけ眉毛を生やした状態でご来店ください。5〜7mm生やした状態が眉毛を整えやすい理想の状態です。',
    },
    {
      question: '施術当日はすっぴんで行ったほうがいいでしょうか？',
      answer: 'はい。メイクしたままでもご来店可能ですが、眉周りはクレンジングでオフさせていただきます。',
    },
    {
      question: '施術中の痛みはどれぐらいですか？',
      answer: 'ワックス脱毛なので、抜く時の痛みを感じる方もいれば、眠ってしまうぐらい落ち着いている方もいらっしゃいます。また、眉毛ワックスは刺激があるので肌に赤みが出る場合がございます。その場合、人によっては2〜3日続くこともあります。力加減の調節も可能ですので、お気軽にお申し付けください。',
    },
    {
      question: '施術時間はどれぐらいですか？',
      answer: 'メニュー内容によりますが、基本的な眉毛ワックスで約60分、眉カットを含む場合は約90分程度、セットメニューの場合はそれ以上お時間がかかります。',
    },
    {
      question: '施術は1回で終わりですか？',
      answer: 'アイブロウの場合、定期的に通っていただくことで毛が生えにくくなり、整った状態がキープされやすくなります。継続的なご来店がおすすめです。',
    },
    {
      question: '次回来店まで、どれだけ期間を空ければいいですか？',
      answer: '個人差がありますが、3週間〜1ヵ月に1度のペースをおすすめしています。',
    },
    {
      question: '施術後はお風呂に入ったり、ジムに行ったりしても良いですか？',
      answer: '施術当日は激しい運動やサウナ、長時間の入浴は避けてください。眉毛パーマをご利用された方は、5時間は眉を濡らさないでください。',
    },
    {
      question: '親子や友達同士で一緒に行くことは可能ですか？',
      answer: 'ペアでのご利用は可能です。ただし、お一人様ずつのご案内になります。',
    },
    {
      question: '子供を連れて行ってもいいですか？',
      answer: '施術中お一人で待っていられるお子様であれば、ご一緒に来店していただけます。',
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
