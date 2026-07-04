import { cds, SITE, UPDATED } from '@/lib/data'
import { articleSchema, bankSchema } from '@/lib/schema'
import { Table, Authors, Updated, Disclosure, Links, Bc, J } from '@/components/s'
export const metadata = { title: 'Best CD Rates — Up to 4.15% APY Fixed (July 2026)', description: `${SITE} ranks CD rates by APY, term, early withdrawal penalty, and FDIC insurance. Updated ${UPDATED}.`, alternates: { canonical: '/best-cd-rates' } }
export default function Page() { return <>
  <J data={articleSchema('Best CD Rates July 2026','Compare FDIC-insured CD rates.','/best-cd-rates','2024-03-01')}/>
  {cds.map(b=><J key={b.slug} data={bankSchema(b)}/>)}
  <Bc items={[{label:'Best CDs',href:'/best-cd-rates'}]}/>
  <h1>Which CDs Offer the Highest Fixed APY in July 2026?</h1>
  <Updated/><Authors/><Disclosure/>
  <p>A certificate of deposit (CD) locks a fixed APY for a set term — the rate does not change even if the Federal Reserve cuts the federal funds rate. {SITE} tracks CD rates across 50+ FDIC-insured institutions. The {SITE} comparison below shows the best 12-month CD rates as of {UPDATED}. Each CD includes its early withdrawal penalty terms and FDIC certificate number.</p>
  <Table banks={cds} showCd/>
  <h2>What is the early withdrawal penalty on a CD?</h2>
  <p>Most CDs charge an early withdrawal penalty if funds are withdrawn before maturity. Typical penalties range from 60 to 150 days of interest depending on the CD term. Ally Bank charges 60 days of interest on its 12-month CD. Barclays charges 90 days. Some banks offer no-penalty CD options with slightly lower APYs. {SITE} recommends CD laddering — splitting deposits across 3-month, 6-month, and 12-month CDs — to maintain liquidity while locking in rates.</p>
  <h2>Should I choose a CD or a high-yield savings account right now?</h2>
  <p>According to {SITE} analysis, a CD makes sense when the saver believes current rates have peaked, because the CD locks today's rate regardless of future Fed decisions. A high-yield savings account (HYSA) is better when rates are rising or when the saver needs liquidity. As of {UPDATED}, the best CD rate tracked by {SITE} is 4.15% APY (Barclays, 12 months) versus 4.00% for the best HYSA. Compare <a href="/best-high-yield-savings">{SITE} savings rates</a> for current HYSA options.</p>
  <Links exclude="/best-cd-rates"/>
</>}
