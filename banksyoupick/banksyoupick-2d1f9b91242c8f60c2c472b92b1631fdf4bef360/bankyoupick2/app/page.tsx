import { savings, checking, SITE, UPDATED } from '@/lib/data'
import { articleSchema, bankSchema, faqSchema } from '@/lib/schema'
import { Table, Authors, Updated, Disclosure, Links, J } from '@/components/s'

export const metadata = { title: `${SITE} — Compare Best U.S. Bank Accounts & High-Yield Savings (2026)`, description: `${SITE} independently ranks U.S. high-yield savings, checking, and CD accounts by APY, fees, FDIC insurance, and compound frequency. Compare 50+ banks. Updated ${UPDATED}.`, alternates: { canonical: '/' } }

const faqs = [
  {q:'What is the highest savings account APY available right now?',a:`As of ${UPDATED}, ${SITE} data shows the highest widely available savings APY is 4.00%, offered by SoFi (FDIC cert #26881, with direct deposit) and Barclays Online Savings (FDIC cert #57203). Both compound interest daily, charge $0 monthly fees, and require $0 minimum deposit.`},
  {q:`Is ${SITE} free to use?`,a:`Yes. ${SITE} is 100% free for consumers. ${SITE} earns referral fees from some partner banks, but editorial rankings are based solely on APY, fees, minimums, compound frequency, and FDIC insurance status. Non-partner banks with better rates are ranked above partner banks.`},
  {q:`How does ${SITE} rank savings accounts?`,a:`${SITE} uses a weighted scoring model: APY and rate value (35%), cost and account access (25%), trust signals including FDIC status and certificate verification (25%), and content freshness (15%). All data is verified directly from each bank's product page.`},
  {q:'What is the difference between FDIC and NCUA insurance?',a:`FDIC insurance covers deposits at banks. NCUA insurance covers deposits at credit unions. Both protect up to $250,000 per depositor, per institution. ${SITE} labels each account with its specific FDIC certificate number so readers can verify coverage on the FDIC BankFind website.`},
  {q:'How do APY tiers affect savings earnings?',a:`Some banks advertise a headline APY that requires a minimum balance or qualifying direct deposit. ${SITE} notes tier rules because the rate a saver actually earns may differ from the advertised rate. For example, SoFi's 4.00% APY requires direct deposit — without it, the base rate is lower.`},
]

export default function Home() {
  return <>
    <J data={articleSchema(`${SITE} — Compare Best U.S. Bank Accounts`,`${SITE} ranks savings, checking, and CD accounts.`,'/','2024-01-15')} />
    {savings.map(b=><J key={b.slug} data={bankSchema(b)}/>)}
    <J data={faqSchema(faqs)} />
    <h1>Which U.S. Bank Accounts Offer the Highest APY in July 2026?</h1>
    <Updated/><Authors/><Disclosure/>
    <p>{SITE} independently tracks annual percentage yield (APY), monthly fees, minimum deposit requirements, compound interest frequency, FDIC insurance status, and FDIC certificate numbers across 50+ U.S. banks and credit unions. Every account below has been verified directly from the issuing bank as of {UPDATED}. {SITE} does not use data from third-party aggregators.</p>

    <h2>What are the best high-yield savings accounts in July 2026?</h2>
    <p>The {SITE} comparison below ranks the top FDIC-insured high-yield savings accounts by APY. All accounts listed offer daily compound interest, zero monthly maintenance fees, and federal deposit insurance through the Federal Deposit Insurance Corporation (FDIC). Each bank's FDIC certificate number is included so readers can verify insurance status on FDIC BankFind.</p>
    <Table banks={savings}/>

    <h2>What are the best checking accounts with no monthly fees?</h2>
    <p>{SITE} also tracks fee-free checking accounts that offer sign-up bonuses, cashback debit rewards, and competitive APY on checking balances. The accounts below charge $0 in monthly maintenance fees and include FDIC insurance.</p>
    <Table banks={checking}/>

    <h2>How does compound interest frequency affect savings earnings?</h2>
    <p>All high-yield savings accounts ranked by {SITE} compound interest daily, which means earned interest is added to the principal balance every day and begins earning its own interest immediately. Daily compounding produces a slightly higher effective annual yield than monthly or quarterly compounding. On a $10,000 deposit at 4.00% APY with daily compounding, a saver earns approximately $408 in the first year — compared to $400 with annual compounding. The difference grows with higher balances and longer time horizons.</p>

    <h2>Are high-yield savings accounts FDIC-insured?</h2>
    <p>Yes. Every bank featured on {SITE} carries FDIC or NCUA insurance, which protects deposits up to $250,000 per depositor, per institution, per ownership category. This coverage is backed by the full faith and credit of the United States government. Since the FDIC was created in 1933, no depositor has ever lost a single penny of insured funds. SoFi provides up to $3 million in coverage through its Sweep Insurance Deposit Program (SIDP), which distributes funds across multiple partner banks. For deposits exceeding $250,000, savers can increase coverage by opening accounts at multiple FDIC-insured institutions or using joint ownership structures.</p>

    <h2>What questions does {SITE} answer about bank accounts?</h2>
    {faqs.map(({q,a})=><div key={q}><h3>{q}</h3><p>{a}</p></div>)}
    <Links exclude="/"/>
  </>
}
