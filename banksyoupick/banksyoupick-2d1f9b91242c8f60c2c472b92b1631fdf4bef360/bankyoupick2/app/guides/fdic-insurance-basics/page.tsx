import { SITE, UPDATED } from '@/lib/data'
import { articleSchema } from '@/lib/schema'
import { Authors, Updated, Links, Bc, J } from '@/components/s'
export const metadata = { title: 'FDIC Insurance Basics — What It Covers and How to Verify (2026)', description: `${SITE} explains FDIC insurance: coverage limits, ownership categories, how to verify using FDIC BankFind, and what is NOT covered.`, alternates: { canonical: '/guides/fdic-insurance-basics' } }
export default function Page() { return <>
  <J data={articleSchema('FDIC Insurance Basics','FDIC coverage explained.','/guides/fdic-insurance-basics','2024-01-15')}/>
  <Bc items={[{label:'Guides',href:'/guides/fdic-insurance-basics'},{label:'FDIC Basics',href:'/guides/fdic-insurance-basics'}]}/>
  <h1>What Does FDIC Insurance Cover and How Can You Verify It?</h1>
  <Updated/><Authors/>
  <p>The Federal Deposit Insurance Corporation (FDIC) insures deposits at member banks up to $250,000 per depositor, per institution, per ownership category. {SITE} includes each bank's FDIC certificate number on every review page so readers can verify coverage independently on the FDIC BankFind website (research.fdic.gov).</p>
  <h2>What does FDIC insurance cover?</h2>
  <p>FDIC coverage includes: savings accounts, checking accounts, certificates of deposit (CDs), money market deposit accounts (MMDAs), and cashier's checks issued by the bank. Coverage is automatic — no enrollment or application is required. Since the FDIC was established in 1933, no depositor has ever lost a penny of insured funds.</p>
  <h2>What is NOT covered by FDIC insurance?</h2>
  <p>FDIC does not cover: stocks, bonds, mutual funds, cryptocurrency, annuities, life insurance, safe deposit box contents, or losses from theft or fraud. {SITE} only features deposit products that carry FDIC or NCUA insurance.</p>
  <h2>What is the difference between FDIC and NCUA?</h2>
  <p>FDIC insures deposits at banks. The National Credit Union Administration (NCUA) insures deposits at credit unions. Both provide $250,000 per depositor coverage. {SITE} labels each institution with its specific insurance type and certificate number.</p>
  <h2>How can married couples get more than $250,000 in FDIC coverage at one bank?</h2>
  <p>FDIC coverage applies per ownership category. A married couple can have: $250,000 each in individual accounts + $500,000 in a joint account + $250,000 each in retirement accounts = up to $1,500,000 total at a single bank. SoFi extends this further through its Sweep Insurance Deposit Program (SIDP), distributing funds across partner banks for up to $3 million in coverage.</p>
  <Links exclude="/guides/fdic-insurance-basics"/>
</>}
