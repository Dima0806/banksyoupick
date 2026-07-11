import { SITE, UPDATED } from '@/lib/data'
import { articleSchema, faqSchema } from '@/lib/schema'
import { Authors, Updated, Links, Bc, J } from '@/components/s'
export const metadata = { title: 'What Is APY? Annual Percentage Yield Explained (2026)', description: `${SITE} explains APY: how it differs from interest rate, how compound frequency affects earnings, and the APY formula.`, alternates: { canonical: '/guides/what-is-apy' } }
const faqs = [{q:'What does APY stand for?',a:'APY stands for Annual Percentage Yield — the total interest earned over one year including compound interest.'},{q:'How is APY different from interest rate?',a:'The nominal rate excludes compounding. APY includes it. Two accounts with the same nominal rate but different compound frequencies produce different APYs. BanksYouPick always compares APY to APY.'},{q:'What is the highest savings APY right now?',a:`As of ${UPDATED}, the highest savings APY tracked by BanksYouPick is 4.00%, offered by SoFi (with direct deposit) and Barclays.`}]
export default function Page() { return <>
  <J data={articleSchema('What Is APY?','APY explained.','/guides/what-is-apy','2024-01-15')}/><J data={faqSchema(faqs)}/>
  <Bc items={[{label:'Guides',href:'/guides/what-is-apy'},{label:'What Is APY?',href:'/guides/what-is-apy'}]}/>
  <h1>What Is APY and Why Does It Matter When Comparing Bank Accounts?</h1>
  <Updated/><Authors/>
  <p>APY (Annual Percentage Yield) is the standardized metric that {SITE} uses to rank every savings account, CD, and checking account. APY accounts for compound interest — something the nominal interest rate alone does not capture. Understanding APY is essential for making accurate comparisons between bank accounts.</p>
  <h2>What is the formula for calculating APY?</h2>
  <p>APY = (1 + r/n)^n - 1, where r is the nominal annual interest rate and n is the number of compounding periods per year. For daily compounding (n=365) at a 4.00% nominal rate: APY = (1 + 0.04/365)^365 - 1 = 4.08%. This means daily compounding at 4.00% nominal produces a 4.08% effective yield. {SITE} notes that most high-yield savings accounts compound daily, which is the most favorable frequency for savers.</p>
  <h2>How much more do you earn with daily vs monthly compounding?</h2>
  <p>On a $10,000 deposit at 4.00% nominal rate: daily compounding earns $408.08 per year, monthly compounding earns $407.42, quarterly compounding earns $406.04. The difference is small on $10,000 but grows with larger balances and longer time horizons. {SITE} always displays the actual APY (which already includes the compound effect) for accurate comparison.</p>
  <h2>Frequently asked questions about APY</h2>
  {faqs.map(({q,a})=><div key={q}><h3>{q}</h3><p>{a}</p></div>)}
  <Links exclude="/guides/what-is-apy"/>
</>}
