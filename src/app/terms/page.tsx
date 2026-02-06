import Header from '@/components/Header';
import Footer from '@/components/Footer';
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
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/mascot-arms-crossed.webp`}
              alt=""
              className="w-14 h-14 md:w-20 md:h-20 object-contain scale-x-[-1]"
            />
            <h1 className="text-3xl md:text-4xl font-bold">利用規約</h1>
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/mascot-arms-crossed.webp`}
              alt=""
              className="w-14 h-14 md:w-20 md:h-20 object-contain"
            />
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <div className="text-sm md:text-base text-gray-700 leading-relaxed space-y-8">
              {/* 前文 */}
              <p>
                この利用規約（以下、「本規約」といいます。）は、01（以下、「当サロン」といいます。）がこのウェブサイト上で提供するサービス（以下、「本サービス」といいます。）の利用条件を定めるものです。お客様の皆さま（以下、「お客様」といいます。）には、本規約に従って、本サービスをご利用いただきます。
              </p>

              {/* 第1条 */}
              <section>
                <h2 className="text-lg font-bold mb-3">第1条（サービスの利用目的）</h2>
                <div className="space-y-2">
                  <p>当サロンは美容、健康、リラクゼーションを目的としたサービスを提供しております。</p>
                  <p>風俗営業、性的サービス、またはこれらに該当・類似する行為を目的とした利用は固くお断りいたします。</p>
                  <p>不適切な利用が確認された場合、サービスの提供を中止し、以後の利用をお断りさせていただきます。</p>
                </div>
              </section>

              {/* 第2条 */}
              <section>
                <h2 className="text-lg font-bold mb-3">第2条（禁止行為）</h2>
                <p className="mb-2">お客様には、当サロンスタッフに対して以下の行為を行わないことをお約束いただきます：</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>暴言、威圧、脅迫等のハラスメント行為</li>
                  <li>性的な発言、接触、要求等のセクシャルハラスメント</li>
                  <li>わいせつな言動または行為</li>
                  <li>業務の円滑な遂行を妨げる行為</li>
                  <li>その他、社会通念上不適切と判断される行為</li>
                </ul>
                <p className="mt-3">違反があった場合、サービスの提供を中止し、予約の取消、今後の利用停止等の措置を取らせていただきます。</p>
              </section>

              {/* 第3条 */}
              <section>
                <h2 className="text-lg font-bold mb-3">第3条（利用料金および支払方法）</h2>
                <ol className="list-decimal list-inside space-y-2">
                  <li>お客様は、本サービスの有料部分の対価として、当サロンが別途定め、本ウェブサイトに表示する利用料金を、当サロンが指定する方法により支払うものとします。</li>
                  <li>お客様が利用料金の支払を遅滞した場合には、お客様は年14.6％の割合による遅延損害金を支払うものとします。</li>
                </ol>
              </section>

              {/* 第4条 */}
              <section>
                <h2 className="text-lg font-bold mb-3">第4条（禁止事項）</h2>
                <p className="mb-2">お客様は、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
                <ol className="list-none space-y-1 ml-2">
                  <li>（1）法令または公序良俗に違反する行為</li>
                  <li>（2）犯罪行為に関連する行為</li>
                  <li>（3）本サービスの内容等、本サービスに含まれる著作権、商標権ほか知的財産権を侵害する行為</li>
                  <li>（4）当サロン、ほかのお客様、またはその他第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
                  <li>（5）本サービスによって得られた情報を商業的に利用する行為</li>
                  <li>（6）当サロンのサービスの運営を妨害するおそれのある行為</li>
                  <li>（7）不正アクセスをし、またはこれを試みる行為</li>
                  <li>（8）他のお客様に関する個人情報等を収集または蓄積する行為</li>
                  <li>（9）不正な目的を持って本サービスを利用する行為</li>
                  <li>（10）本サービスの他のお客様またはその他の第三者に不利益、損害、不快感を与える行為</li>
                  <li>（11）他のお客様に成りすます行為</li>
                  <li>（12）当サロンが許諾しない本サービス上での宣伝、広告、勧誘、または営業行為</li>
                  <li>（13）面識のない異性との出会いを目的とした行為</li>
                  <li>（14）当サロンのサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為</li>
                  <li>（15）その他、当サロンが不適切と合理的に判断する行為</li>
                </ol>
              </section>

              {/* 第5条 */}
              <section>
                <h2 className="text-lg font-bold mb-3">第5条（本サービスの提供の停止等）</h2>
                <ol className="list-decimal list-inside space-y-2">
                  <li className="leading-relaxed">
                    当サロンは、以下のいずれかの事由があると合理的に判断した場合、お客様に事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
                    <ol className="list-none space-y-1 ml-6 mt-2">
                      <li>（1）本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                      <li>（2）地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
                      <li>（3）コンピュータまたは通信回線等が事故により停止した場合</li>
                      <li>（4）その他、当サロンが本サービスの提供が困難と合理的に判断した場合</li>
                    </ol>
                  </li>
                  <li>当サロンは、本サービスの提供の停止または中断により、お客様または第三者が被ったいかなる不利益または損害についても、一切の責任を負わないものとします。</li>
                </ol>
              </section>

              {/* 第6条 */}
              <section>
                <h2 className="text-lg font-bold mb-3">第6条（利用制限および登録抹消）</h2>
                <ol className="list-decimal list-inside space-y-2">
                  <li className="leading-relaxed">
                    当サロンは、お客様が以下のいずれかに該当する場合には、事前の通知なく、お客様に対して、本サービスの全部もしくは一部の利用を制限し、またはお客様としての登録を抹消することができるものとします。
                    <ol className="list-none space-y-1 ml-6 mt-2">
                      <li>（1）本規約のいずれかの条項に違反した場合</li>
                      <li>（2）登録事項に虚偽の事実があることが判明した場合</li>
                      <li>（3）料金等の支払債務の不履行があった場合</li>
                      <li>（4）当サロンからの連絡に対し、7日以内に返答がない場合</li>
                      <li>（5）その他、当サロンが本サービスの利用を適当でないと合理的に判断した場合</li>
                    </ol>
                  </li>
                  <li>当サロンは、本条に基づき当サロンが行った行為によりお客様に生じた損害について、一切の責任を負いません。</li>
                </ol>
              </section>

              {/* 第7条 */}
              <section>
                <h2 className="text-lg font-bold mb-3">第7条（退会）</h2>
                <p>お客様は、当サロンの定める退会手続により、本サービスから退会できるものとします。</p>
              </section>

              {/* 第8条 */}
              <section>
                <h2 className="text-lg font-bold mb-3">第8条（保証の否認および免責事項）</h2>
                <ol className="list-decimal list-inside space-y-2">
                  <li>当サロンは、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。</li>
                  <li>当サロンは、本サービスに起因してお客様に生じたあらゆる損害について一切の責任を負いません。ただし、本サービスに関する当サロンとお客様との間の契約（本規約を含みます。）が消費者契約法に定める消費者契約となる場合、この免責規定は適用されません。</li>
                  <li>前項ただし書に定める場合であっても、当サロンは、当サロンの過失（重過失を除きます。）による債務不履行または不法行為によりお客様に生じた損害のうち特別な事情から生じた損害（当サロンまたはお客様が損害発生につき予見し、または予見し得た場合を含みます。）について一切の責任を負いません。また、当サロンの過失（重過失を除きます。）による債務不履行または不法行為によりお客様に生じた損害の賠償は、お客様から当該損害が発生した月に受領した利用料の額を上限とします。</li>
                  <li>当サロンは、本サービスに関して、お客様と他のお客様または第三者との間において生じた取引、連絡または紛争等について一切責任を負いません。ただし、当サロンに帰責事由がある場合には、この限りではありません。</li>
                </ol>
              </section>

              {/* 第9条 */}
              <section>
                <h2 className="text-lg font-bold mb-3">第9条（サービス内容の変更等）</h2>
                <p>当サロンは、お客様に通知することなく、本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし、これによってお客様に生じた損害について一切の責任を負いません。</p>
              </section>

              {/* 第10条 */}
              <section>
                <h2 className="text-lg font-bold mb-3">第10条（利用規約の変更）</h2>
                <p className="mb-2">当サロンは、以下の各号のいずれかに該当する場合に、お客様に通知することなくいつでも本規約を変更することができるものとします。なお、本規約の変更後、本サービスの利用を開始した場合には、当該お客様は変更後の規約に同意したものとみなします。</p>
                <ol className="list-none space-y-1 ml-2">
                  <li>（1）本規約の変更がお客様の一般の利益に適合するとき</li>
                  <li>（2）本規約の変更が、本規約の目的に反するものではなく、かつ変更の必要性、変更後の本規約の内容の相当性及び合理性があるとき</li>
                </ol>
              </section>

              {/* 第11条 */}
              <section>
                <h2 className="text-lg font-bold mb-3">第11条（個人情報の取扱い）</h2>
                <p>当サロンは、本サービスの利用によって取得する個人情報については、当サロン「プライバシーポリシー」に従い適切に取り扱うものとします。</p>
              </section>

              {/* 第12条 */}
              <section>
                <h2 className="text-lg font-bold mb-3">第12条（通知または連絡）</h2>
                <p>お客様と当サロンとの間の通知または連絡は、当サロンの定める方法によって行うものとします。当サロンは、お客様から、当サロンが別途定める方式に従った変更届け出がない限り、現在登録されている連絡先が有効なものとみなして当該連絡先へ通知または連絡を行い、これらは、発信時にお客様へ到達したものとみなします。</p>
              </section>

              {/* 第13条 */}
              <section>
                <h2 className="text-lg font-bold mb-3">第13条（権利義務の譲渡の禁止）</h2>
                <p>お客様は、当サロンの書面による事前の承諾なく、利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し、または担保に供することはできません。</p>
              </section>

              {/* 第14条 */}
              <section>
                <h2 className="text-lg font-bold mb-3">第14条（反社会的勢力の排除）</h2>
                <ol className="list-decimal list-inside space-y-2">
                  <li className="leading-relaxed">
                    お客様は、次の各号に該当しないことを表明保証し、将来にわたり該当しないことを誓約します。
                    <ol className="list-none space-y-1 ml-6 mt-2">
                      <li>（1）自ら並びにその親会社、子会社、関連会社、役員及び重要な従業員が、反社会的勢力であること。</li>
                      <li>（2）自ら並びにその親会社、子会社、関連会社、役員及び重要な従業員が反社会的勢力と社会的に非難されるべき関係を有すること。</li>
                      <li>（3）前二号に該当しなくなったときから５年を経過していないこと。</li>
                      <li>（4）自ら又は第三者を利用して、当サロンに対し、次に掲げる行為又はこれに準ずる行為を行うこと。
                        <ol className="list-none space-y-1 ml-6 mt-1">
                          <li>① 暴力的な要求行為</li>
                          <li>② 法的な責任を超えた不当な要求行為</li>
                          <li>③ 取引に関して、脅迫的な言動をし、又は暴力を用いる行為</li>
                          <li>④ 風説を流布し、偽計を用い又は威力を用いて、当サロンの信用を毀損し、又は当サロンの業務を妨害する行為</li>
                        </ol>
                      </li>
                    </ol>
                  </li>
                  <li>当サロンは、お客様が前項に違反した場合、お客様の本サービスにおける登録を抹消することができるものとし、かつ、当サロンが被った一切の損害の賠償を請求することができるものとします。</li>
                  <li>前項に基づく登録抹消によりお客様に生じたいかなる損害についても、当サロンは責任を負わないものとします。</li>
                </ol>
              </section>

              {/* 第15条 */}
              <section>
                <h2 className="text-lg font-bold mb-3">第15条（準拠法・裁判管轄）</h2>
                <ol className="list-decimal list-inside space-y-2">
                  <li>本規約の解釈にあたっては、日本法を準拠法とします。</li>
                  <li>本サービスに関して紛争が生じた場合には、当サロンの所在地を管轄する裁判所を専属的合意管轄とします。</li>
                </ol>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
