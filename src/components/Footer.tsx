export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">01（O-ONE）</h3>
            <p className="text-gray-400 text-sm md:text-base">
              メンズ専門 眉毛ワックスサロン
            </p>
            <p className="text-gray-500 text-xs md:text-sm mt-2">
              アイブロウリスト：Hitomi
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">所在地</h4>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              〒900-0006<br />
              沖縄県那覇市おもろまち4-6-19<br />
              フレックスおもろまち401<br />
              <span className="text-xs text-gray-500">（シェアサロン内）</span>
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">営業時間</h4>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              10:00〜19:00（最終受付）<br />
              <span className="text-xs text-gray-500">定休日：不定休</span>
            </p>
            <p className="text-gray-400 text-sm mt-4">
              <span className="text-xs text-gray-500">完全予約制</span>
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 01（O-ONE）</p>
        </div>
      </div>
    </footer>
  );
}
