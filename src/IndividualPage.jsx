import { useFirebasePublicData } from './useFirebasePublicData';
import { pageData_IndividualPage_rateHistoryRows, pageData_IndividualPage_insuranceCompanies, pageData_IndividualPage_appraisalCompanies, pageData_IndividualPage_filterTabs, pageData_IndividualPage_topTabs, pageData_IndividualPage_loans } from './sitePageData';
import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Tr, useLang } from './i18n';

// ----------------------------------------------------------------------
// Helper Components
// ----------------------------------------------------------------------

function BulletList({ items }) {
  const { t } = useLang();
  return (
    <ul className="list-disc pl-5 space-y-1.5 mb-4">
      {items.map((item, idx) => (
        <li key={idx} className="text-sm text-gray-700 leading-relaxed">
          {t(item)}
        </li>
      ))}
    </ul>
  );
}

function WarningBox({ title, children }) {
  const { t } = useLang();
  return (
    <div className="bg-purple-50 border border-purple-200 rounded-2xl px-6 py-5 mb-8">
      {title && (
        <h3 className="text-sm font-black text-purple-800 mb-2">{t(title)}</h3>
      )}
      <div className="text-sm text-purple-900 leading-relaxed">{children}</div>
    </div>
  );
}

function DataTable({ head, rows }) {
  const { t } = useLang();
  return (
    <div className="overflow-x-auto mb-6 rounded-xl border border-gray-200">
      <table className="min-w-full text-xs text-left">
        <thead className="bg-purple-50 text-purple-800">
          <tr>
            {head.map((h, idx) => (
              <th key={idx} className="px-3 py-2.5 font-bold whitespace-nowrap">
                {t(h)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ridx) => (
            <tr
              key={ridx}
              className={ridx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
            >
              {row.map((cell, cidx) => (
                <td key={cidx} className="px-3 py-2.5 text-gray-700 align-top">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DocumentsFooter({ label }) {
  const { t } = useLang();
  return (
    <div className="mt-10 pt-6 border-t border-gray-200">
      <h3 className="text-sm font-bold text-gray-900 mb-2">
        {t('Փաստաթղթեր')}
      </h3>
      <a
        href="#"
        className="text-sm text-purple-700 font-semibold hover:underline"
      >
        {t(label)}
      </a>
    </div>
  );
}

/* =========================================================================
   Ընդհանուր (reusable) տարրեր տեքստային էջերի համար
   ========================================================================= */

function ShareIcons() {
  return (
    <div className="flex items-center gap-3 text-gray-400 mb-6">
      <a href="#" className="hover:text-purple-700 font-bold text-sm">f</a>
      <a href="#" className="hover:text-purple-700 font-bold text-sm">𝕏</a>
      <a href="#" className="hover:text-purple-700 font-bold text-sm">in</a>
      <a href="#" className="hover:text-purple-700 font-bold text-sm">P</a>
    </div>
  );
}

function SectionTitle({ children }) {
  return (
    <h2 className="text-xl font-black text-gray-900 mt-10 mb-3">{children}</h2>
  );
}

function SubTitle({ children }) {
  return (
    <h3 className="text-base font-bold text-gray-800 mt-6 mb-2">{children}</h3>
  );
}

function Paragraph({ children }) {
  return (
    <p className="text-sm text-gray-700 leading-relaxed mb-4">{children}</p>
  );
}

/* =========================================================================
   Ընդհանուր բովանդակություն՝ «Վարկային պատմություն» բաժնի համար
   ========================================================================= */

function CreditHistoryContent() {
  return (
    <Tr>
      <SectionTitle>Ի՞նչ է վարկային պատմությունը</SectionTitle>
      <Paragraph>
        «Վարկային տեղեկատվության շրջանառության և վարկային բյուրոների գործունեության մասին» ՀՀ օրենքի համաձայն վարկային տեղեկատվությունը վարկային տեղեկատվության սուբյեկտի կողմից ստանձնած պարտավորությունների վերաբերյալ տեղեկատվությունն է, որը ցույց է տալիս վարկային տեղեկատվության սուբյեկտի պարտքերը, վճարումները, վճարումների սովորությունները կամ պարտավորությունների կամ դրանց կատարման վերաբերյալ տեղեկատվություններ:
      </Paragraph>
      <Paragraph>
        Այն, որպես կանոն, օգտագործվում է ֆինանսական կազմակերպությունների կողմից վարկերի տրամադրման, ինչպես նաև արտադրող և վաճառող կամ ծառայություններ մատուցող կազմակերպությունների կողմից՝ տարաժամկետ վճարման սկզբունքով («ապառիկ») ապրանքների/ծառայությունների իրացման վերաբերյալ որոշում կայացնելու ընթացքում:
      </Paragraph>

      <SectionTitle>Որոնք են վարկային պատմության ձևավորման աղբյուրները</SectionTitle>
      <Paragraph>
        Վարկային պատմության ձևավորման աղբյուրներն են ԱՔՌԱ գործընկերները (բանկերը, վարկային կազմակերպությունները, ապահովագրական ընկերությունները, հետաձգված վճարումներով գործարքներ իրականացնող կազմակերպությունները, ինչպես նաև՝ հանրային տվյալների բազաներից ՀՀ կառավարության սահմանած կարգով վարկային բյուրոյին անձանց վերաբերյալ տեղեկություններ տրամադրող պետական մարմինները), որոնք տրամադրում են վարկային տեղեկատվության սուբյեկտի վերաբերյալ տեղեկություններ (տվյալներ):
      </Paragraph>

      <SectionTitle>Ի՞նչ է վարկային բյուրոն</SectionTitle>
      <Paragraph>
        Վարկային բյուրոն իրականացնում է իրավաբանական և ֆիզիկական անձանց ֆինանսական պարտավորությունների կատարման վերաբերյալ տեղեկության (վարկային տեղեկատվության) հավաքագրում, մշակում, պահպանում, տրամադրում, ինչպես նաև դրանց հիման վրա վարկային զեկույցի պատրաստման գործունեություն:
      </Paragraph>
      <Paragraph>Վարկային բյուրոյի ծառայությունների շնորհիվ յուրաքանչյուր իրավաբանական կամ ֆիզիկական անձ հնարավորություն է ստանում.</Paragraph>
      <BulletList
        items={[
          'ժամանակին կատարելով իր ֆինանսական պարտավորությունները՝ կերտել դրական վարկային պատմություն և օգտագործել այն որպես ծանրակշիռ ակտիվ ֆինանսական ծառայություններից արտոնյալ պայմաններով օգտվելու համար,',
          'ճիշտ կառավարել սեփական ֆինանսական պարտավորությունները և մշտապես տեղեկացված լինել սեփական ֆինանսական պարտավորությունների կատարման ընդհանուր պատկերի մասին:',
        ]}
      />
      <Paragraph>
        Վարկային բյուրոյի ծառայությունները թույլ են տալիս վարկատուներին (բանկեր, վարկային կազմակերպություններ), ինչպես նաև տարաժամկետ վճարման սկզբունքով («ապառիկ») ապրանքներ վաճառող կամ ծառայություններ մատուցող կազմակերպություններին կանխելու վարկառուների/հաճախորդների կողմից ավելորդ պարտավորությունների ստանձնումը, կրճատելու անհուսալի պարտավորությունները և աջակցելու պարտավորությունների ժամանակին կատարմանը:
      </Paragraph>

      <SectionTitle>Ինչ է վարկային զեկույցը</SectionTitle>
      <Paragraph>
        Վարկային զեկույցը գրավոր կամ էլեկտրոնային փաստաթուղթ է, որը պարունակում է վարկային տեղեկատվության սուբյեկտի (ֆիզիկական կամ իրավաբանական) և նրա կողմից ստանձնած տնտեսվարող կազմակերպությունների նկատմամբ ֆինանսական պարտավորությունների կատարման վերաբերյալ տեղեկատվություն:
      </Paragraph>
      <Paragraph>
        Զեկույցը կազմված է ԱՔՌԱ գործընկեր կազմակերպություններից ստացված տվյալների հիման վրա և արտացոլում է հարցման պահից վերջին 5 տարվա վարկային տվյալները:
      </Paragraph>

      <SectionTitle>Որքան ժամանակ է պահպանվում վարկային պատմությունը</SectionTitle>
      <Paragraph>
        Համաձայն «Վարկային տեղեկատվության շրջանառության և վարկային բյուրոների գործունեության մասին» ՀՀ օրենքի 11-րդ հոդվածի դրույթների, վարկային բյուրոյի կողմից տրամադրվող վարկային զեկույցներում չպետք է ներառվի վարկային զեկույցի տրամադրման պահին նախորդող հինգ տարուց ավելի վարկային տեղեկատվություն:
      </Paragraph>

      <SectionTitle>Ինչպես բարելավել վարկային պատմությունը</SectionTitle>
      <Paragraph>
        Նախ, անհրաժեշտ է լիովին մարել նախկինում գոյացած ժամկետանց պարտավորությունների վճարումները: Բացի այդ, ներկա պահին գործող վարկերի մասով անհրաժեշտ է բացառել ժամկետանց՝ նույնիսկ մեկ օրվա կտրվածքով պարտավորությունների գոյացումը:
      </Paragraph>

      <SectionTitle>Ուր դիմել, եթե վարկային պատմությունը սխալ է</SectionTitle>
      <Paragraph>
        Եթե վարկառուի վարկային պատմության մեջ առկա են սխալ կամ թերի տվյալներ, ապա պարզաբանման և ուղղման նպատակով վարկառուն՝ համաձայն «Վարկային տեղեկատվության շրջանառության և վարկային բյուրոների գործունեության մասին» ՀՀ օրենքի 20-րդ հոդվածի դրույթների, կարող է այդ մասին տեղեկացնել վարկային բյուրոյին կամ ուղղակիորեն դիմել տեղեկատվություն տրամադրող սուբյեկտներին (վարկային տեղեկատվության աղբյուրին): Տեղեկացումը կարող է իրականացվել համապատասխան գրավոր դիմում վարկային բյուրոյին ներկայացնելու միջոցով կամ էլեկտրոնային եղանակով՝ առցանց ռեժիմով Իմ ԱՔՌԱ անձնական գրասենյակից: ԱՔՌԱ-ի կողմից տրամադրված վարկային զեկույցների վերաբերյալ հաճախորդների բողոքների ընդունման/ստացման, քննարկման և վերջիններիս արձագանքման գործընթացը, գործողությունների հաջորդականությունը սահմանվում է «ԱՔՌԱ Քրեդիտ Ռեփորթինգ» ՓԲԸ-ի «Վեճերի լուծման ընթացակարգ»-ով:
      </Paragraph>

      <SectionTitle>Վարկի տրամադրման վերաբերյալ որոշման կայացման չափանիշները</SectionTitle>
      <SubTitle>Դրական որոշման կայացման չափանիշները՝</SubTitle>
      <BulletList
        items={[
          'Մեր կողմից ընդունելի գրավադրվող գույքը և երաշխավորությունները,',
          'Մշտական բնակության վայրը,',
          'Կայուն եկամտի աղբյուրը,',
          'Դրական կամ չեզոք վարկային պատմությունը,',
          'Արժանահավատ և լիարժեք փաստաթղթերը:',
        ]}
      />
      <SubTitle>Բացասական որոշման կայացման չափանիշները՝</SubTitle>
      <BulletList
        items={[
          'Ոչ արժանահավատ փաստաթղթերը ներկայացնելը,',
          'Բացասական վարկային պատմությունը,',
          'Եկամտի աղբյուրի ռիսկայնությունը (անկայուն եկամուտներ, ոչ հստակ պարբերականությամբ եկամուտներ),',
          'Գրավի պայմանագրի կամ երաշխավորության համաձայնագրերի կնքման համար անհրաժեշտ փաստաթղթեր չներկայացնելը:',
        ]}
      />

      <SectionTitle>Վարկային սքոր</SectionTitle>
      <Paragraph>
        Բանկը կիրառում է իր կողմից մշակված վարկային սքորը վարկավորման վերաբերյալ որոշումների կայացման ժամանակ։ Վարկային սքորը հաճախորդի վարկային պատմության և որակական ցուցանիշների ուսումնասիրության հիման վրա ձևավորվող վիճակագրական գնահատականն է, որն արտահայտում է հավանականությունը հայցվող վարկը ժամանակին և պատշաճ մարելու գծով։ Վարկային պատմությունը ներառվում է սքորի հաշվարկի մեջ դիմելու պահից վերջին 5 տարվա վաղեմությամբ։
      </Paragraph>
      <Paragraph>
        Բանկի ներքին սքոր գնահատականի վրա ազդող հիմնական գործոններն են՝ ՖԱՅԿՈ սքորը (բարձր ՖԱՅԿՈ սքոր – դրական ազդեցություն), գործող վարկերի քանակը (գործող վարկերի քանակի ավելացում – բացասական ազդեցություն), վարկային բեռը (բարձր վարկային բեռ – բացասական ազդեցություն), վարկային պարտավորությունների ժամանակին կատարման փաստը (ժամկետանցների առկայություն – բացասական ազդեցություն), նոր վարկային հայտեր ներկայացնելու հաճախականությունը (հայտերի քանակի ավելացում – բացասական ազդեցություն), հաճախորդի աշխատանքային փորձը (քիչ փորձառություն – բացասական ազդեցություն), եկամուտների մեծությունը (բարձր եկամուտների առկայություն – դրական ազդեցություն)։
      </Paragraph>
      <Paragraph>
        Վարկային պատմությունը և/կամ սքոր գնահատականը հնարավոր է բարելավել վարկն առանց ժամկետանցների մարելու, նպատակային օգտագործելու, վարկերի մնացորդային գումարը և քանակը նվազեցնելու, տրված երաշխավորությունների գծով պարտավորությունները ժամանակին կատարելու դեպքում։
      </Paragraph>
      <Paragraph>
        Վարկային պատմության և սքոր վատթարացումից խուսափելու նպատակով հաճախորդները չպետք է ունենան ժամկետանցներ, անհիմն ավելացնեն վարկային ծանրաբեռնվածությունը, վարկերի քանակը, հաճախակի վարկավորման հարցումներ ուղարկեն տարբեր կազմակերպություններին, հանդիսանան երաշխավոր անվստահելի անձանց համար։
      </Paragraph>
      <Paragraph>
        Վարկային պատմության և ՖԱՅԿՈ սքորի վերաբերյալ առավել մանրամասն տեղեկատվություն կարելի է ստանալ այցելելով՝ www.abcfinance.am, «Հաճախ տրվող հարցեր» բաժինը acra.am կայքում, ինչպես նաև www.acra.am կայքերում։
      </Paragraph>
    </Tr>
  );
}

/* =========================================================================
   ԷՋ 2. «Վարկային պատմություն և սքոր»
   ========================================================================= */

function CreditHistoryPage() {
  return (
    <Tr>
      <div className="max-w-4xl pb-16">
        <h1 className="text-3xl font-black text-gray-900 mb-4">
          Վարկային պատմություն և սքոր
        </h1>
        <ShareIcons />

        <WarningBox title="Կարևոր տեղեկատվություն վարկային պատմության վերաբերյալ">
          Վարկային պարտավորությունները չկատարելը կամ ոչ պատշաճ կատարելը կազդի Ձեր ՎԱՐԿԱՅԻՆ ՊԱՏՄՈՒԹՅԱՆ վրա:
        </WarningBox>

        <CreditHistoryContent />

        <DocumentsFooter label="Տեղեկատվական ամփոփագիր (Վարկային պրոդուկտներ) 07.04.2026" />
      </div>
    </Tr>
  );
}

/* =========================================================================
   ԷՋ 3. «Կարևոր տեղեկատվություն»
   ========================================================================= */

function ImportantInfoPage() {
  const rateHistoryRows = useFirebasePublicData('siteContent/pageData/IndividualPage/rateHistoryRows', pageData_IndividualPage_rateHistoryRows);;

  const insuranceCompanies = useFirebasePublicData('siteContent/pageData/IndividualPage/insuranceCompanies', pageData_IndividualPage_insuranceCompanies);;

  const appraisalCompanies = useFirebasePublicData('siteContent/pageData/IndividualPage/appraisalCompanies', pageData_IndividualPage_appraisalCompanies);;

  return (
    <Tr>
      <div className="max-w-4xl pb-16">
        <h1 className="text-3xl font-black text-gray-900 mb-4">Կարևոր տեղեկատվություն</h1>
        <ShareIcons />

        <SectionTitle>Ուշադրություն</SectionTitle>
        <BulletList
          items={[
            'Տոկոսագումարների գծով հաշվարկները կատարվում են 365 օրացուցային օրերի համար: Եթե վճարման օրը ոչ աշխատանքային է, ապա վճարում եք դրան հաջորդող աշխատանքային օրվա ընթացքում:',
            'Հիփոթեքային վարկերի դեպքում Դուք իրավունք ունեք ժամկետից շուտ իրականացնել վարկի մասնակի կամ ամբողջական մարում, որի դեպքում Բանկի կողմից տույժեր չեն կիրառվում:',
            'Վարկի մարման ժամանակացույցը խախտելու դեպքում վարկի ժամկետանց մասի վրա կարող է կիրառվել ՀՀ կենտրոնական բանկի կողմից սահմանված բանկային տոկոսի հաշվարկային դրույքը, որը ամրագրվում է վարկային պայմանագրով։',
            'Դուք իրավունք ունեք նախքան վարկային պայմանագիր կնքելը ծանոթանալ պայմանագրի նախագծի հետ։',
            'Վարկ ստանալու համար դիմելիս վարկատուն Ձեզ կտրամադրի սպառողական վարկի էական պայմանների անհատական թերթիկ, որում կներկայացվեն Ձեզ տրամադրվելիք վարկի անհատական պայմանները:',
            'Վարկի տոկոսագումարները հաշվարկվում են անվանական տոկոսադրույքի հիման վրա, իսկ տարեկան փաստացի տոկոսադրույքը ցույց է տալիս, թե որքան կարժենա վարկը Ձեզ համար՝ տոկոսագումարները և այլ վճարները սահմանված ժամկետներում և չափերով կատարելու դեպքում: Տարեկան փաստացի տոկոսադրույքի հաշվարկման կարգին (ՀՀ ԿԲ Կանոնակարգ 8/01) կարող եք ծանոթանալ ՀՀ Կենտրոնական բանկի պաշտոնական կայքում (www.cba.am):',
            'Արտարժույթով տրամադրվող վարկերի գծով արտարժույթի փոխարժեքի փոփոխությունները կարող են ազդեցություն ունենալ վարկի մարումների վրա:',
            'Բանկը Ձեզ, ՀՀ օրենսդրությամբ սահմանված կարգով և դեպքերում, Ձեր նախընտրած հաղորդակցման եղանակով 30-օրյա պարբերականությամբ կտրամադրի վարկի վերաբերյալ քաղվածք:',
            'Պայմանագրի գործողության ընթացքում բողոքներ ունենալու դեպքում կարող եք դրանք ներկայացնել Բանկին: Դուք հնարավորություն ունեք պայմանագրից բխող բողոք-պահանջները ՀՀ օրենսդրությամբ սահմանված կարգով ներկայացնել Ֆինանսական համակարգի հաշտարարին, ինչպես նաև պաշտպանել Ձեր իրավունքները դատարանի միջոցով:',
          ]}
        />

        <WarningBox title="Զգուշացում">
          <div className="space-y-3">
            <p>
              Պարտավորության մարման գրաֆիկով սահմանված ժամկետներում Ձեր կողմից պարտավորությունը չկատարելու կամ թերի կատարելու դեպքերում Բանկը 3 աշխատանքային օրվա ընթացքում Ձեր տվյալները (պարտավորության չկատարման, թերի կատարման մասին տեղեկությունները) ուղարկում է վարկային բյուրո:
            </p>
            <p>
              Ձեր կողմից ներկայացված վարկի ստացման դիմում-հայտերի քանակը, այդ թվույն՝ հեռահար եղանակներով, անկախ հաստատումից կամ մերժումից, բացասական ազդեցություն է ունենալու Ձեր վարկային ամփոփ գնահատականի վրա:
            </p>
            <p>
              Վարկային պայմանագրով Ձեր կողմից ստանձնած պարտավորությունները չկատարելու կամ ոչ պատշաճ կատարելու դեպքում Դուք կարող եք զրկվել անշարժ գույքի նկատմամբ Ձեր իրավունքներից, իսկ գրավադրված գույքը՝ օրենքով սահմանված կարգով բռնագանձվել:
            </p>
            <p>
              Եթե գրավի արժեքը չի բավարարում Ձեր վարկային պարտավորությունները ծածկելու համար, Բանկը ՀՀ օրենսդրությամբ սահմանված կարգով կարող է կատարել վարկային պարտավորությունների մարումներ Ձեր այլ գույքերի հաշվին:
            </p>
          </div>
        </WarningBox>

        <CreditHistoryContent />

        <SectionTitle>Պետական տուրքեր և այլ ծախսեր</SectionTitle>
        <Paragraph>Գրավադրման պայմանով վարկերի դեպքում առկա են հետևյալ վճարները՝</Paragraph>
        <BulletList
          items={[
            'Գրավադրվող գույքի գնահատում՝ 10,000–150,000 դրամ, կախված գույքի տեսակից, մակերեսից և գնահատող կազմակերպության սակագներից: Վճարը մուտքագրվում է գնահատող կազմակերպության հաշվին, գնահատումը իրականացվում է վարկի տրամադրումից առաջ,',
            'Նոտարական ձևակերպման ծախսեր՝ 10,000–30,000 դրամ (վճարումը կատարվում է նոտարական գրասենյակում),',
            'Գրավի գրանցման ծախսեր՝ անշարժ գույքի գրավի գրանցման դեպքում՝ սկսած 26,400 ՀՀ դրամից, եռակողմ պայմանագրով իրավունքների գրանցման դեպքում՝ սկսած 71,400 դրամից (գրանցումը կատարվում է 4 աշխատանքային օրում; ավելի կարճ ժամկետների սակագներին կարող եք ծանոթանալ www.cadastre.am կայքում),',
            'Գրավադրվող գույքի ապահովագրում (պահանջվելու դեպքում)՝ վարկի մնացորդի 0.15%–2.5%-ի չափով, լիցենզավորված ապահովագրական ընկերությունների կողմից: Ապահովագրության շահառուն պետք է հանդիսանա Բանկը:',
          ]}
        />

        <SectionTitle>Տարեկան փաստացի տոկոսադրույքի հաշվարկման օրինակ</SectionTitle>
        <Paragraph>
          Բանկը իր կողմից տրամադրած վարկի դիմաց հաշվարկում է տարեկան փաստացի տոկոսադրույք (Annual Percentage Rate, APR)՝ սպառողի կրեդիտավորման ընդհանուր ծախսը՝ արտահայտված տրամադրված կրեդիտի տարեկան տոկոսով, ՀՀ Կենտրոնական բանկի սահմանած բանաձևի հիման վրա:
        </Paragraph>
        <Paragraph>Ենթադրենք՝ Բանկը սպառողին տրամադրում է վարկ հետևյալ պայմաններով.</Paragraph>
        <BulletList
          items={[
            'Վարկի գումար – 700,000 ՀՀ դրամ,',
            'Անվանական տարեկան տոկոսադրույքը – 18%,',
            'Վարկի մարման ժամկետը – 12 ամիս,',
            'Վարկի մարման եղանակը – անուիտետային (վարկի գումարի և տոկոսագումարի հանրագումարը մարվում է ամենամսյա հավասարաչափ),',
            'Վարկային հայտի ուսումնասիրման միանվագ վճար – 1,000 ՀՀ դրամ:',
          ]}
        />
        <Paragraph>
          Այս պայմաններով հաշվարկված տարեկան փաստացի տոկոսադրույքը կազմում է՝ <strong>i = 19.95%</strong>:
        </Paragraph>

        <SubTitle>Տարեկան փաստացի տոկոսադրույքի հաշվարկի մեջ չներառվող վճարներ</SubTitle>
        <BulletList
          items={[
            'Նոտարական ձևակերպման վճարներ,',
            'Գրավի գրանցման վճարները,',
            'Կանխիկացման վճարները:',
          ]}
        />

        <SectionTitle>Լողացող տոկոսադրույքի հաշվարկման կարգ</SectionTitle>
        <Paragraph>
          Լողացող տոկոսադրույքի կիրառման դեպքում անվանական տոկոսադրույքի հաշվարկն իրականացվում է հետևյալ բանաձևով՝ ՏԼ = ՏՀ + ՏՓ, որտեղ ՏԼ-ն Լողացող տոկոսադրույքն է, ՏՀ-ն՝ Լողացող տոկոսադրույքի հաստատուն բաղադրիչը, իսկ ՏՓ-ն՝ Լողացող տոկոսադրույքի փոփոխուն բաղադրիչը:
        </Paragraph>
        <Paragraph>
          Լողացող տոկոսադրույքի կիրառման դեպքում յուրաքանչյուր վարկի համար վարկային պայմանագրերում սահմանվում են անվանական տոկոսադրույքի առավելագույն և նվազագույն շեմեր, որոնցից ավելի տոկոսադրույքը չի կարող բարձրանալ կամ իջնել՝ անկախ հաշվարկման հիմքում ընկած ցուցանիշների փոփոխության չափից: Բարձրացման առավելագույն շեմը չի կարող գերազանցել իջեցման առավելագույն շեմը:
        </Paragraph>
        <Paragraph>
          Բանկը տարին երկու անգամ՝ ոչ ուշ, քան յուրաքանչյուր տարվա փետրվարի 1-ը և օգոստոսի 1-ը, փոփոխում է լողացող տոկոսադրույքի փոփոխուն բաղադրիչը (ՏՓ) և հրապարակում է այդ մասին տեղեկատվությունը Բանկի պաշտոնական կայքում:
        </Paragraph>

        <SubTitle>ՀՀ դրամով հիմնական</SubTitle>
        <Paragraph>
          Փոփոխուն բաղադրիչի հաշվարկման հիմք է հանդիսանում 6 ամիս ժամկետայնությամբ ՀՀ պետական (գանձապետական) պարտատոմսերի մինչև մարում եկամտաբերությունը (աղբյուր՝ ՀՀ ԿԲ պաշտոնական կայքի եկամտաբերության կոր): Եթե ցուցանիշը դառնում է անհասանելի, տոկոսադրույքը հաջորդ ժամանակահատվածի համար սահմանվում է՝ հիմք ընդունելով Բանկի կողմից սահմանվող երկրորդային ցուցանիշը:
        </Paragraph>

        <SubTitle>ՀՀ դրամով երկրորդային</SubTitle>
        <Paragraph>
          Հաշվարկման հիմք է հանդիսանում ՀՀ ԿԲ կողմից հրապարակված ֆիզիկական անձանցից մինչև 1 տարի ժամկետով (բացառությամբ ցպահանջ ավանդների) ներգրավված ՀՀ դրամով ավանդների տոկոսադրույքները:
        </Paragraph>

        <SubTitle>ԱՄՆ դոլարով հիմնական</SubTitle>
        <Paragraph>
          Հաշվարկման հիմք է հանդիսանում ԱՄՆ դոլարով 6 ամիս ժամկետայնությամբ ժամկետային ապահովված օվերնայթ ֆոնդային տոկոսադրույքը (CME Term SOFR USD 6 Month, աղբյուր՝ Bloomberg TSFR6M):
        </Paragraph>

        <SubTitle>ԱՄՆ դոլարով երկրորդային</SubTitle>
        <Paragraph>
          Հաշվարկման հիմք է հանդիսանում ՀՀ ԿԲ կողմից հրապարակված ֆիզիկական անձանցից մինչև 1 տարի ժամկետով ԱՄՆ դոլարով ներգրավված ավանդների տոկոսադրույքները:
        </Paragraph>

        <SubTitle>Եվրոյով հիմնական</SubTitle>
        <Paragraph>
          Հաշվարկման հիմք է հանդիսանում Եվրոյով 6 ամիս ժամկետայնությամբ Եվրոպական Միջբանկային Առաջարկի տոկոսադրույքը (EMMI EURIBOR 6 Month, աղբյուր՝ Bloomberg EUR006M):
        </Paragraph>

        <SubTitle>Եվրոյով երկրորդային</SubTitle>
        <Paragraph>
          Հաշվարկման հիմք է հանդիսանում Գերմանիայի եվրոյով պետական պարտատոմսերի եկամտաբերության կորի 6 ամիս ժամկետայնության տոկոսադրույքը (աղբյուր՝ Bloomberg YCGT0016):
        </Paragraph>

        <Paragraph>
          Ֆոփոխուն բաղադրիչի ամսաթվերն են յուրաքանչյուր տարվա փետրվարի 1-ը և օգոստոսի 1-ը՝ հաշվարկվելով նախորդող 6-ամսյա ժամանակահատվածների հրապարակված տոկոսադրույքների միջին թվաբանականով: Առաջնայինից երկրորդային փոփոխուն բաղադրիչի անցնելու դեպքում կարող է կիրառվել ճշգրտման գործակից՝ հիմնական և երկրորդային բաղադրիչների նախորդ ժամանակահատվածի արժեքների տարբերության հիման վրա, որը ներկայացվում է Վարչության հաստատմանը: Փոփոխուն բաղադրիչի միջին թվաբանականը կլորացվում է 0.5%-ի քայլով, իսկ բացասական արժեքի դեպքում կիրառվում է 0% նվազագույն շեմ:
        </Paragraph>

        <SubTitle>Անցյալ և ներկա փոփոխական բաղադրիչների արժեքները</SubTitle>
        <DataTable head={['Ամսաթիվ', 'ՀՀ դրամ', 'ԱՄՆ դոլար', 'Եվրո']} rows={rateHistoryRows} />

        <SectionTitle>«ԷՎՈԿԱԲԱՆԿ» ԲԲԸ կողմից կիրառվող վարկային սքոր</SectionTitle>
        <Paragraph>
          «ԷՎՈԿԱԲԱՆԿ» ԲԲԸ կողմից մշակված սքորինգային համակարգը վիճակագրական ուսումնասիրության և վերլուծության ենթարկելով հաճախորդի վարկային պատմությունը՝ տալիս է վարկառուի վարկային ռիսկի (վարկարժանության) թվային գնահատականը՝ որպես սպառողական կրեդիտավորման ռիսկի մակարդակի չափորոշման առանցքային գործիք:
        </Paragraph>
        <Paragraph>«ԷՎՈԿԱԲԱՆԿ» ԲԲԸ կողմից կիրառվող վարկային սքոր հաշվարկման մոդելը հաշվի է առնում վարկառուի հետևյալ չափանիշները՝</Paragraph>
        <BulletList
          items={[
            'Վճարումների (մարումների) պատմություն,',
            'Վարկային բեռի մեծություն,',
            'Վարկային պատմության երկարություն,',
            'Օգտագործված փոխառությունների տեսակներ,',
            'Նոր վարկային դիմումներ,',
            'Այլ չափանիշներ:',
          ]}
        />

        <SubTitle>Բանկի հետ համագործակցող ապահովագրական ընկերությունների ցանկ</SubTitle>
        <DataTable
          head={['№', 'Անվանում', 'Գտնվելու վայր', 'Հեռախոսահամարներ', 'Էլ. փոստի հասցե']}
          rows={insuranceCompanies}
        />

        <SubTitle>Բանկի հետ համագործակցող գնահատող կազմակերպությունների ցանկ</SubTitle>
        <DataTable
          head={['№', 'Անվանում', 'Գտնվելու վայր', 'Հեռախոսահամարներ', 'Էլ. փոստի հասցե']}
          rows={appraisalCompanies}
        />

        <Paragraph>
          Հարգելի Հաճախորդ, հայտնում ենք Ձեզ, որ նախքան վարկային հայտ ներկայացնելը և վարկային պայմանագիր կնքելը Դուք կարող եք Բանկի +374 10 605555 հեռախոսահամարին զանգահարելով կամ Բանկի գործունեության վայր այցելելով Բանկի աշխատակցից ստանալ բանավոր տեղեկություններ Ձեզ հետաքրքրող վարկային պրոդուկտի վերաբերյալ:
        </Paragraph>

        <DocumentsFooter label="Տեղեկատվական ամփոփագիր (Վարկային պրոդուկտներ) 01.07.2026" />
      </div>
    </Tr>
  );
}

// ----------------------------------------------------------------------
// Main Component: IndividualPage
// ----------------------------------------------------------------------

export default function IndividualPage() {
  const filterTabs = useFirebasePublicData('siteContent/pageData/IndividualPage/filterTabs', pageData_IndividualPage_filterTabs);;

  const [activeFilter, setActiveFilter] = useState('all');

  const topTabs = useFirebasePublicData('siteContent/pageData/IndividualPage/topTabs', pageData_IndividualPage_topTabs);;
  const [activeTab, setActiveTab] = useState('loans');

  const loans = useFirebasePublicData('siteContent/pageData/IndividualPage/loans', pageData_IndividualPage_loans);;

  const filteredLoans =
    activeFilter === 'all'
      ? loans
      : loans.filter((loan) => loan.category === activeFilter);

  return (
    <Tr>
      <div className="min-h-screen bg-white text-gray-800 font-sans flex flex-col justify-between">
        <div>
          {/* Մանուշակագույն ենթամենյու */}
          <div className="bg-purple-700 text-white px-8">
            <div className="flex items-center gap-4 text-sm font-semibold">
              {topTabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-4 sm:px-6 py-3.5 transition ${
                    activeTab === tab.key
                      ? 'bg-purple-900 border-b-4 border-white font-bold'
                      : 'hover:bg-purple-800'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <main className="max-w-7xl mx-auto px-8 py-6">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-2 text-xs text-gray-500 mb-6">
              <span>🏠</span>
              <ChevronRight size={12} />
              <span>Անհատ</span>
              <ChevronRight size={12} />
              <span>Վարկեր</span>
              <ChevronRight size={12} />
              <span className="text-gray-800 font-medium">
                {topTabs.find((t) => t.key === activeTab)?.label}
              </span>
            </nav>

            {/* Բովանդակություն ըստ ընտրված tab-ի */}
            {activeTab === 'loans' && (
              <>
                {/* Title */}
                <h1 className="text-3xl font-black text-gray-900 mb-8">
                  Վարկեր
                </h1>

                {/* Filter Tabs */}
                <div className="flex flex-wrap gap-3 mb-10">
                  {filterTabs.map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => setActiveFilter(tab.key)}
                      className={`px-5 py-2.5 rounded-full text-sm font-semibold transition ${
                        activeFilter === tab.key
                          ? 'bg-purple-700 text-white shadow-sm'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Loan Cards Grid/List */}
                <div className="space-y-12 mb-16">
                  {filteredLoans.length === 0 && (
                    <p className="text-sm text-gray-500">
                      Այս բաժնում ներկայումս վարկեր չկան:
                    </p>
                  )}

                  {filteredLoans.map((loan) => (
                    <div
                      key={loan.id}
                      className="flex flex-col md:flex-row items-stretch gap-8 bg-white rounded-2xl p-2 transition"
                    >
                      {/* Image Container */}
                      <div className="w-full md:w-80 h-56 rounded-2xl overflow-hidden shrink-0 shadow-sm bg-gray-100">
                        <img
                          src={loan.image}
                          alt={loan.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Content Box */}
                      <div className="flex flex-col justify-between flex-grow py-2">
                        <div>
                          <h2 className="text-2xl font-black text-gray-900 mb-2">
                            {loan.title}
                          </h2>
                          <p className="text-sm text-gray-600 max-w-2xl leading-relaxed mb-6">
                            {loan.description}
                          </p>
                        </div>

                        {/* Dynamic Stats Grid */}
                        {loan.stats.length > 0 && (
                          <div
                            className={`grid grid-cols-2 md:grid-cols-${Math.min(
                              loan.stats.length,
                              4
                            )} gap-6 mb-6 max-w-2xl`}
                          >
                            {loan.stats.map((stat, idx) => (
                              <div key={idx}>
                                {stat.prefix && (
                                  <div className="text-xs text-gray-500 font-medium">
                                    {stat.prefix}
                                  </div>
                                )}
                                <div className="text-2xl font-black text-purple-700">
                                  {stat.value}
                                </div>
                                <div className="text-xs text-gray-400 mt-0.5">
                                  {stat.label}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Details Link */}
                        <div>
                          <Link
                            to={`/loans/${loan.id}`}
                            className="bg-purple-100 hover:bg-purple-200 text-purple-700 font-bold px-6 py-2.5 rounded-full text-sm inline-flex items-center gap-2 transition"
                          >
                            Մանրամասն <ChevronRight size={16} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {activeTab === 'history' && <CreditHistoryPage />}

            {activeTab === 'important' && <ImportantInfoPage />}
          </main>
        </div>

        {/* FOOTER SECTION */}
        <footer className="bg-white border-t border-gray-100 text-gray-700 text-sm">
          <div className="max-w-7xl mx-auto px-8 pt-12 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
              {/* Column 1: Logo, Address, Legal info */}
              <div className="space-y-4">
                <div className="text-2xl font-black text-purple-700 flex items-center">
                  evoca<span className="text-gray-400 font-light">BANK</span>
                </div>
                <div className="text-xs text-gray-600 leading-relaxed">
                  <p>ք. Երևան, 0010,</p>
                  <p>Հանրապետության 44/2</p>
                </div>
                <div className="text-xs text-gray-800 font-semibold pt-2">
                  <p>Evocabank-ը վերահսկվում է</p>
                  <p>Հայաստանի Հանրապետության</p>
                  <p>Կենտրոնական բանկի կողմից</p>
                </div>
                <p className="text-[10px] text-gray-400 pt-2">
                  1990 - 2026, © ԲՈԼՈՐ ԻՐԱՎՈՒՆՔՆԵՐԸ ՊԱՇՏՊԱՆՎԱԾ ԵՆ
                </p>
              </div>

              {/* Column 2: Բանկի մասին */}
              <div>
                <h3 className="font-bold text-gray-900 mb-4">Բանկի մասին</h3>
                <ul className="space-y-2 text-xs text-gray-700">
                  <li><a href="#" className="hover:underline">Մեր մասին</a></li>
                  <li><a href="#" className="hover:underline">Ղեկավարություն</a></li>
                  <li><a href="#" className="hover:underline">Բաժնետերեր</a></li>
                  <li><a href="#" className="hover:underline">Հաշվետվություններ</a></li>
                  <li><a href="#" className="hover:underline">Իրավական ակտեր</a></li>
                  <li><a href="#" className="hover:underline">Սակագներ</a></li>
                  <li><a href="#" className="hover:underline">Օտարվող գույք</a></li>
                  <li><a href="#" className="hover:underline">Կառուցապատողներ</a></li>
                  <li><a href="#" className="hover:underline">Գործընկեր ավտոսրահներ</a></li>
                  <li><a href="#" className="hover:underline">Սակագների արխիվ</a></li>
                </ul>
              </div>

              {/* Column 3: Օգտակար հղումներ */}
              <div>
                <h3 className="font-bold text-gray-900 mb-4">Օգտակար հղումներ</h3>
                <ul className="space-y-2 text-xs text-gray-700">
                  <li><a href="#" className="hover:underline">Հաճախորդի իրավունքները (Բողոքի ներկայացման կանոններ)</a></li>
                  <li><a href="#" className="hover:underline">Հաճախորդի ռեզիդենտության չափանիշներ</a></li>
                  <li><a href="#" className="hover:underline">Կարգավորում</a></li>
                  <li><a href="#" className="hover:underline">Գաղտնիության քաղաքականություն</a></li>
                  <li><a href="#" className="hover:underline">Ֆին. հաշտարար</a></li>
                  <li><a href="#" className="hover:underline">Ֆինանսական հանցագործությունների կանխարգելում</a></li>
                  <li><a href="#" className="hover:underline">Հղումներ Բանկի քարտապանների համար</a></li>
                </ul>
              </div>

              {/* Column 4: Այլ հղումներ */}
              <div>
                <h3 className="font-bold text-gray-900 mb-4">Այլ հղումներ</h3>
                <ul className="space-y-2 text-xs text-gray-700">
                  <li><a href="#" className="hover:underline">EvocaONLINE</a></li>
                  <li><a href="#" className="hover:underline">Պահատուփեր</a></li>
                  <li><a href="#" className="hover:underline">Հաճախ տրվող հարցեր</a></li>
                  <li><a href="#" className="hover:underline">Հայտարարություններ</a></li>
                  <li><a href="#" className="hover:underline">Dibrary</a></li>
                  <li><a href="#" className="hover:underline">Բուկլետներ</a></li>
                  <li><a href="#" className="hover:underline">Հետադարձ կապ</a></li>
                  <li><a href="#" className="hover:underline">Կայքի քարտեզ</a></li>
                </ul>
              </div>

              {/* Column 5: Social, Apps & Contact */}
              <div className="space-y-4">
                {/* Social icons */}
                <div className="flex items-center gap-3 text-gray-400">
                  <a href="#" className="hover:text-purple-700 font-bold">f</a>
                  <a href="#" className="hover:text-purple-700 font-bold">📷</a>
                  <a href="#" className="hover:text-purple-700 font-bold">P</a>
                  <a href="#" className="hover:text-purple-700 font-bold">▶</a>
                  <a href="#" className="hover:text-purple-700 font-bold">in</a>
                </div>

                {/* Mobile Apps */}
                <div className="flex items-center gap-2 pt-2">
                  <a href="#" className="bg-black text-white text-[10px] px-3 py-1.5 rounded-md flex items-center gap-1">
                    <span> App Store</span>
                  </a>
                  <a href="#" className="bg-black text-white text-[10px] px-3 py-1.5 rounded-md flex items-center gap-1">
                    <span>► Google Play</span>
                  </a>
                </div>

                {/* Links */}
                <div className="space-y-1 text-xs pt-2">
                  <a href="#" className="block text-purple-700 font-bold hover:underline">
                    Բանկի հասցեները և աշխատաժամերը
                  </a>
                  <a href="#" className="block text-purple-700 font-bold hover:underline">
                    Կապ մեզ հետ
                  </a>
                </div>

                {/* Phones */}
                <div className="text-xs space-y-1 pt-1">
                  <div className="font-bold text-gray-800">+374 10 605555</div>
                  <div className="font-black text-purple-700 text-lg">8444</div>
                </div>
              </div>
            </div>
          </div>

          {/* Disclaimer & Partner Logos Strip */}
          <div className="bg-gray-100 py-6 px-8 text-[10px] text-gray-500 border-t border-gray-200">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="leading-relaxed max-w-3xl">
                Կայքում՝ անգլերեն, ռուսերեն կամ այլ լեզուներով տեղեկատվության վերաբերյալ տարբեր լեզուներում անհամապատասխանության, ինչպես նաև տեքստային և անգլերեն թարգմանության ոչ ամբողջական նյութ տեսնելու դեպքում խնդրում ենք առաջնորդվել հայերեն տարբերակով: «Էվոկաբանկ» ՓԲԸ-ն պատասխանատվություն չի կրում իր ինտերնետային կայքում հղված այլ անձանց ինտերնետային կայքերի բովանդակության ստուգության և արժանահավատության, այնտեղ տեղադրված գովազդների, ինչպես նաև երրորդ անձանց կողմից այդ կայքերում տեղադրված տեղեկատվության օգտագործման հնարավոր հետևանքների համար:
              </p>
              {/* Logos mockup */}
              <div className="flex items-center gap-4 shrink-0 opacity-60">
                <span className="font-bold text-xs tracking-wider">fininfo</span>
                <span className="font-bold text-xs">abcfinance.am</span>
                <span className="font-black text-xs">arca</span>
                <span className="font-bold text-xs">AAC</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Tr>
  );
}