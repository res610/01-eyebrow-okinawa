export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">01（O-ONE）</h3>
            <p className="text-gray-400">
              メンズ専門 眉毛ワックスサロン
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">所在地</h4>
            <p className="text-gray-400">
              沖縄県那覇市おもろまち
              <br />
              （シェアサロン内）
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">営業時間</h4>
            <p className="text-gray-400">
              予約制
              <br />
              詳細はお問い合わせください
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 01（O-ONE）</p>
        </div>
      </div>
    </footer>
  );
}
