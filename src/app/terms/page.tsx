import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '利用規約',
    description: '沖縄・那覇のメンズ眉毛サロン01（O-ONE）の利用規約。サービスのご利用条件、キャンセルポリシー、個人情報の取り扱いについてご案内します。',
    robots: {
        index: false,
        follow: true,
    },
};

export default function TermsPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
                    <div className="flex items-center justify-center gap-4 mb-8 md:mb-12">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/mascot-arms-crossed.webp`}
                            alt=""
                            width={80}
                            height={80}
                            className="w-14 h-14 md:w-20 md:h-20 object-contain scale-x-[-1]"
                        />
                        <h1 className="text-3xl md:text-4xl font-bold text-brand">利用規約</h1>
                        <Image
                            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/mascot-arms-crossed.webp`}
                            alt=""
                            width={80}
                            height={80}
                            className="w-14 h-14 md:w-20 md:h-20 object-contain"
                        />
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                        <div className="text-sm md:text-base text-gray-700 leading-relaxed space-y-8">
                            {/* 前文 */}
                            <p>
                                この利用規約（以下「本規約」）は、メンズ眉毛サロン 01（以下「当サロン」）が提供するサービスのご利用条件を定めるものです。ご来店・ご予約をもって、本規約に同意いただいたものとさせていただきます。
                            </p>

                            {/* 第1条 */}
                            <section>
                                <h2 className="text-lg font-bold mb-3 text-brand">第1条（サービス内容）</h2>
                                <div className="space-y-2">
                                    <p>当サロンは、眉毛スタイリングを主とした美容サービスを提供しています。</p>
                                    <p>風俗営業、性的サービス、またはこれらに類する行為を目的としたご利用は固くお断りいたします。不適切なご利用が確認された場合、施術を中止し、以後のご利用をお断りさせていただきます。</p>
                                </div>
                            </section>

                            {/* 第2条 */}
                            <section>
                                <h2 className="text-lg font-bold mb-3 text-brand">第2条（ご予約・キャンセルについて）</h2>
                                <div className="space-y-2">
                                    <p>当サロンは完全予約制です。</p>
                                    <p>キャンセル・変更をされる場合は、前日までにご連絡ください。</p>
                                    <p>無断キャンセルや当日キャンセルが続いた場合、今後のご予約をお断りさせていただくことがございます。</p>
                                </div>
                            </section>

                            {/* 第3条 */}
                            <section>
                                <h2 className="text-lg font-bold mb-3 text-brand">第3条（利用料金・お支払い）</h2>
                                <div className="space-y-2">
                                    <p>利用料金は、店内掲示およびWebサイトに記載のとおりです。</p>
                                    <p>お支払いは施術後に現金でお願いしております。</p>
                                </div>
                            </section>

                            {/* 第4条 */}
                            <section>
                                <h2 className="text-lg font-bold mb-3 text-brand">第4条（未成年者のご利用）</h2>
                                <div className="space-y-2">
                                    <p>未成年（18歳未満）の方が施術を受ける場合、保護者の同意が必要です。</p>
                                    <p>ご来店前に保護者の方へご確認のうえ、ご予約ください。</p>
                                    <p>当サロンが必要と判断した場合、保護者への確認のご連絡をさせていただくことがあります。</p>
                                </div>
                            </section>

                            {/* 第5条 */}
                            <section>
                                <h2 className="text-lg font-bold mb-3 text-brand">第5条（施術に関する注意事項）</h2>
                                <ol className="list-decimal list-inside space-y-2">
                                    <li>施術部位に炎症・傷・重度の肌荒れ等がある場合、施術をお断りすることがあります。</li>
                                    <li>施術当日は、激しい運動・サウナ・長時間の入浴はお避けください。</li>
                                    <li>施術の仕上がりには個人差があります。あらかじめご了承ください。</li>
                                    <li>アレルギーや肌トラブルについてご心配がある方は、施術前にスタッフへご相談ください。</li>
                                </ol>
                            </section>

                            {/* 第6条 */}
                            <section>
                                <h2 className="text-lg font-bold mb-3 text-brand">第6条（禁止行為）</h2>
                                <p className="mb-2">お客様には、サロン内およびLINE等の連絡手段において、以下の行為をお控えいただくようお願いいたします。</p>
                                <ul className="list-disc list-inside space-y-1 ml-2">
                                    <li>スタッフへの暴言、威圧、脅迫等のハラスメント行為</li>
                                    <li>性的な発言、接触、要求等のセクシャルハラスメント</li>
                                    <li>他のお客様やスタッフへの迷惑行為</li>
                                    <li>LINEでの予約・お問い合わせの範囲を超えた執拗な連絡や不適切なメッセージの送信</li>
                                    <li>当サロンのLINEアカウント情報を無断で第三者に共有・拡散する行為</li>
                                    <li>サロン内での営業・勧誘行為</li>
                                    <li>法令または公序良俗に反する行為</li>
                                    <li>その他、サロンの運営に支障をきたす行為</li>
                                </ul>
                                <p className="mt-3">上記に該当する行為があった場合、施術の中止および今後のご利用をお断りさせていただきます。</p>
                            </section>

                            {/* 第7条 */}
                            <section>
                                <h2 className="text-lg font-bold mb-3 text-brand">第7条（免責事項）</h2>
                                <ol className="list-decimal list-inside space-y-2">
                                    <li>当サロンは施術において細心の注意を払いますが、施術に伴う軽微な肌の赤み・かぶれ等について、当サロンに過失がない場合は責任を負いかねます。</li>
                                    <li>お客様が事前に肌の状態やアレルギー等について正確にお申し出いただけなかった場合に生じたトラブルについては、責任を負いかねます。</li>
                                    <li>天災・災害等の不可抗力により施術の提供が困難になった場合、当サロンはその責任を負いません。</li>
                                </ol>
                                <p className="mt-3 text-xs text-gray-500">※本規約の免責条項は、消費者契約法その他の法令に反しない範囲で適用されます。</p>
                            </section>

                            {/* 第8条 */}
                            <section>
                                <h2 className="text-lg font-bold mb-3 text-brand">第8条（個人情報の取り扱い）</h2>
                                <ol className="list-decimal list-inside space-y-2">
                                    <li>当サロンは、予約・施術に必要な範囲でお客様の個人情報（氏名、連絡先等）をお預かりします。</li>
                                    <li>お預かりした個人情報は、予約管理・施術の提供・ご連絡の目的にのみ使用いたします。</li>
                                    <li>法令に基づく場合を除き、お客様の同意なく第三者に提供することはありません。</li>
                                </ol>
                            </section>

                            {/* 第9条 */}
                            <section>
                                <h2 className="text-lg font-bold mb-3 text-brand">第9条（反社会的勢力の排除）</h2>
                                <div className="space-y-2">
                                    <p>当サロンは、反社会的勢力との一切の関係を遮断しています。</p>
                                    <p>お客様が反社会的勢力に該当する場合、またはそれに準ずる関係にあると判明した場合は、サービスの提供をお断りし、以後のご利用をお断りさせていただきます。</p>
                                </div>
                            </section>

                            {/* 第10条 */}
                            <section>
                                <h2 className="text-lg font-bold mb-3 text-brand">第10条（規約の変更）</h2>
                                <p>当サロンは、必要に応じて本規約を変更することがあります。変更後の規約は、当サロンのWebサイトに掲載した時点で効力を生じるものとします。</p>
                            </section>

                            {/* 第11条 */}
                            <section>
                                <h2 className="text-lg font-bold mb-3 text-brand">第11条（準拠法・裁判管轄）</h2>
                                <ol className="list-decimal list-inside space-y-2">
                                    <li>本規約の解釈にあたっては、日本法を準拠法とします。</li>
                                    <li>本サービスに関して紛争が生じた場合には、当サロンの所在地を管轄する裁判所を専属的合意管轄とします。</li>
                                </ol>
                            </section>

                            {/* 制定日 */}
                            <p className="text-right text-sm text-gray-500 mt-4">
                                2026年1月10日 制定
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
