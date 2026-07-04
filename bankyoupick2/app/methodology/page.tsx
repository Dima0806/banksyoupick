import { SITE, AUTHOR, REVIEWER } from '@/lib/data'
import { articleSchema } from '@/lib/schema'
import { Authors, Links, Bc, J } from '@/components/s'
export const metadata = { title: `Methodology — How ${SITE} Scores and Ranks Bank Accounts`, description: `${SITE} scoring methodology: APY weight (35%), cost (25%), trust signals (25%), freshness (15%). Data sources, update frequency, and editorial process.`, alternates: { canonical: '/methodology' } }
export default function Page() { return <>
  <J data={articleSchema(`${SITE} Methodology`,'How BanksYouPick scores accounts.','/methodology','2024-01-15')}/>
  <Bc items={[{label:'Methodology',href:'/methodology'}]}/><h1>How Does {SITE} Score and Rank Bank Accounts?</h1><Authors/>
  <h2>What is the {SITE} scoring model?</h2>
  <p>{SITE} evaluates every bank account using a weighted scoring model with four criteria:</p>
  <table><thead><tr><th>Criterion</th><th>Weight</th><th>What {SITE} Measures</th></tr></thead><tbody>
    <tr><td><strong>Rate value</strong></td><td>35%</td><td>APY, compound frequency, tier rules, CD term length, qualification difficulty</td></tr>
    <tr><td><strong>Cost and access</strong></td><td>25%</td><td>Monthly fees, minimum deposit, ATM access, ACH transfers, withdrawal limits, branch access</td></tr>
    <tr><td><strong>Trust signals</strong></td><td>25%</td><td>FDIC status, FDIC certificate number, legal bank identity, clear account terms, disclosure quality</td></tr>
    <tr><td><strong>Freshness and clarity</strong></td><td>15%</td><td>Rate update recency, reviewed date, editorial verification, term clarity</td></tr>
  </tbody></table>
  <h2>Where does {SITE} get its rate data?</h2>
  <p>{SITE} verifies all published rates directly from each bank's official product page and public rate disclosure. {SITE} does not rely on third-party aggregators or press releases. FDIC certificate numbers are verified against the FDIC BankFind database (research.fdic.gov). Rates are reviewed weekly by the editorial team. When a bank updates its APY, {SITE} reflects the change within 24 hours.</p>
  <h2>Does advertiser compensation affect {SITE} rankings?</h2>
  <p>No. The scoring model is applied uniformly to partner and non-partner banks. A non-partner bank with a higher APY and lower fees outranks a partner bank every time. {SITE} labels all advertising relationships with a disclosure notice on every comparison page.</p>
  <h2>What accounts does {SITE} exclude?</h2>
  <p>{SITE} excludes: accounts not FDIC- or NCUA-insured, accounts limited to a single state, promotional rates lasting less than 30 days, institutions under active FDIC enforcement action, and cryptocurrency or DeFi yield products (not covered by federal deposit insurance).</p>
  <h2>Who has editorial oversight?</h2>
  <p>Content is written by {AUTHOR.name}, {AUTHOR.title}. Rate accuracy and FDIC references are reviewed by {REVIEWER.name}, {REVIEWER.title}. Editorial decisions are made independently without input from advertising partners.</p>
  <Links exclude="/methodology"/>
</>}
