import { savings, SITE, UPDATED } from '@/lib/data'
import { articleSchema, bankSchema } from '@/lib/schema'
import { RateHistory, Authors, Updated, Disclosure, Links, Bc, J } from '@/components/s'
export const metadata = { title: 'Ally Bank Review — 3.80% APY, FDIC #57803, Savings Buckets (2026)', description: `${SITE} reviews Ally Bank Online Savings: 3.80% APY, unlimited withdrawals, FDIC certificate #57803, daily compounding, savings buckets.`, alternates: { canonical: '/banks/ally-bank' } }
export default function Page() { const b = savings.find(s=>s.slug==='ally-bank')!; return <>
  <J data={articleSchema(`Ally Bank Review — ${SITE}`,`${SITE} reviews Ally savings.`,'/banks/ally-bank','2024-06-01')}/>
  <J data={bankSchema(b)}/>
  <Bc items={[{label:'Banks',href:'/best-high-yield-savings'},{label:'Ally Bank',href:'/banks/ally-bank'}]}/>
  <h1>What APY Does Ally Bank Pay on Savings in 2026?</h1>
  <Updated/><Authors/><Disclosure/>
  <table><thead><tr><th>Feature</th><th>Details</th></tr></thead><tbody>
    <tr><td><strong>Savings APY</strong></td><td>{b.apy.toFixed(2)}%</td></tr>
    <tr><td><strong>Monthly Fee</strong></td><td>${b.monthlyFee}</td></tr>
    <tr><td><strong>Minimum Deposit</strong></td><td>${b.minDeposit}</td></tr>
    <tr><td><strong>Compound Frequency</strong></td><td>{b.compoundFreq}</td></tr>
    <tr><td><strong>FDIC Insured</strong></td><td>Yes — Certificate #{b.fdicCert}</td></tr>
    <tr><td><strong>Withdrawal Limit</strong></td><td>{b.withdrawalLimit}</td></tr>
    <tr><td><strong>{SITE} Score</strong></td><td><strong>{b.score}/10</strong></td></tr>
  </tbody></table>
  <h2>Who is Ally Bank best for?</h2>
  <p>Ally Bank is best for savers who want a full-service online banking relationship with checking, savings, CDs, investing, and mortgage — all in one platform. Ally's savings buckets feature allows organizing funds by goal (emergency fund, vacation, car) within a single account. Ally offers unlimited withdrawals with no Regulation D cap, which gives it a liquidity advantage over banks that limit withdrawals to 6 per month. {SITE} rates Ally at {b.score}/10 for its combination of competitive APY, zero fees, and comprehensive banking features.</p>
  <RateHistory history={b.history}/>
  <Links exclude="/banks/ally-bank"/>
</>}
