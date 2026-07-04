import { savings, SITE, UPDATED } from '@/lib/data'
import { articleSchema, bankSchema } from '@/lib/schema'
import { RateHistory, Authors, Updated, Disclosure, Links, Bc, J } from '@/components/s'
export const metadata = { title: 'SoFi Bank Review — 4.00% APY, $300 Bonus, FDIC #26881 (2026)', description: `${SITE} reviews SoFi Checking and Savings: 4.00% APY with direct deposit, $300 bonus, FDIC certificate #26881, daily compounding, $0 fees.`, alternates: { canonical: '/banks/sofi-bank' } }
export default function Page() { const b = savings.find(s=>s.slug==='sofi-bank')!; return <>
  <J data={articleSchema(`SoFi Bank Review — ${SITE}`,`${SITE} reviews SoFi savings.`,'/banks/sofi-bank','2024-06-01')}/>
  <J data={bankSchema(b)}/>
  <Bc items={[{label:'Banks',href:'/best-high-yield-savings'},{label:'SoFi Bank',href:'/banks/sofi-bank'}]}/>
  <h1>What APY Does SoFi Bank Pay on Savings and Checking in 2026?</h1>
  <Updated/><Authors/><Disclosure/>
  <table><thead><tr><th>Feature</th><th>Details</th></tr></thead><tbody>
    <tr><td><strong>Savings APY</strong></td><td>{b.apy.toFixed(2)}% (with qualifying direct deposit)</td></tr>
    <tr><td><strong>Checking APY</strong></td><td>0.50%</td></tr>
    <tr><td><strong>Monthly Fee</strong></td><td>${b.monthlyFee}</td></tr>
    <tr><td><strong>Minimum Deposit</strong></td><td>${b.minDeposit}</td></tr>
    <tr><td><strong>Compound Frequency</strong></td><td>{b.compoundFreq}</td></tr>
    <tr><td><strong>FDIC Insured</strong></td><td>Yes — Certificate #{b.fdicCert}</td></tr>
    <tr><td><strong>FDIC Coverage</strong></td><td>Up to $3,000,000 via Sweep Insurance Deposit Program (SIDP)</td></tr>
    <tr><td><strong>Sign-Up Bonus</strong></td><td>{b.bonus}</td></tr>
    <tr><td><strong>Withdrawal Limit</strong></td><td>{b.withdrawalLimit}</td></tr>
    <tr><td><strong>{SITE} Score</strong></td><td><strong>{b.score}/10</strong></td></tr>
  </tbody></table>
  <h2>Who is SoFi Bank best for?</h2>
  <p>SoFi Bank is best for savers who want an all-in-one mobile banking platform that combines checking, savings, investing, and lending in a single app. The 4.00% savings APY (with direct deposit) is among the highest tracked by {SITE}, and the $300 sign-up bonus adds significant first-year value. SoFi's Sweep Insurance Deposit Program (SIDP) provides up to $3 million in FDIC coverage by distributing funds across partner banks — substantially more than the standard $250,000 per institution.</p>
  <h2>What are the drawbacks of SoFi Bank?</h2>
  <p>The 4.00% APY requires qualifying direct deposit of at least $1,000 per month. Without direct deposit, the base savings rate is lower. SoFi has no physical branches — all banking is mobile and online. Cash deposits require using the Allpoint ATM network or mobile check deposit. {SITE} recommends SoFi for savers comfortable with fully digital banking.</p>
  <RateHistory history={b.history}/>
  <h2>How does SoFi compare to other savings accounts?</h2>
  <p>See the full <a href="/compare/sofi-vs-marcus">{SITE} SoFi vs Marcus comparison</a> for a head-to-head analysis. Or browse all <a href="/best-high-yield-savings">{SITE} savings account rankings</a> for the latest rates across 50+ banks.</p>
  <Links exclude="/banks/sofi-bank"/>
</>}
