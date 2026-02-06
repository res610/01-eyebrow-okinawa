import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'よくあるご質問',
  description: '沖縄・那覇のメンズ眉毛サロン01（O-ONE）のよくあるご質問。眉毛ワックスの痛み、施術時間、来店頻度など、メンズ眉毛施術に関するQ&Aをご紹介。',
  keywords: ['眉毛ワックス 痛み', 'メンズ眉毛 施術時間', '眉毛サロン 頻度', '眉毛 Q&A'],
  openGraph: {
    title: 'よくあるご質問 | 01（O-ONE）沖縄メンズ眉毛サロン',
    description: '沖縄・那覇のメンズ眉毛サロン01（O-ONE）のよくあるご質問。眉毛ワックスに関するQ&Aをご紹介。',
  },
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
          <div className="flex items-center justify-center gap-4 mb-12">
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/mascot-flying-left.webp`}
              alt=""
              className="w-20 h-20 object-contain"
            />
            <h1 className="text-4xl font-bold">よくあるご質問</h1>
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/mascot-flying-right.webp`}
              alt=""
              className="w-20 h-20 object-contain"
            />
          </div>

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
            <a
              href="https://lin.ee/JfpRgB1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full md:w-auto md:inline-flex bg-[#06C755] text-white px-8 py-3 rounded-lg hover:bg-[#05b34d] transition-colors min-h-[44px] font-bold"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
              </svg>
              友だち追加
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
