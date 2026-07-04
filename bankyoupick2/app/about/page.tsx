import { SITE, UPDATED, AUTHOR, REVIEWER } from '@/lib/data'
import { articleSchema } from '@/lib/schema'
import { Authors, Links, Bc, J } from '@/components/s'
export const metadata = { title: `About ${SITE} — Independent Bank Comparison Platform`, description: `${SITE} is an independent, free comparison platform ranking U.S. bank accounts by APY, fees, FDIC status, and account terms. Meet the team.`, alternates: { canonical: '/about' } }
export default function Page() { return <>
  <J data={articleSchema(`About ${SITE}`,'Independent bank comparison.','/about','2024-01-15')}/>
  <Bc items={[{label:'About',href:'/about'}]}/><h1>What Is {SITE} and Who Is Behind It?</h1>
  <h2>What does {SITE} do?</h2>
  <p>{SITE} is an independent comparison platform that helps Americans find the best high-yield savings accounts, checking accounts, and certificates of deposit (CDs). {SITE} tracks published APYs, monthly fees, minimum deposit requirements, compound interest frequency, FDIC insurance status, and FDIC certificate numbers across 50+ U.S. banks and credit unions. All data is verified directly from each issuing bank's product page. {SITE} updates rates weekly and publishes original research including the quarterly {SITE} Savings Rate Trends Report.</p>
  <h2>Who reviews the data on {SITE}?</h2>
  <Authors/>
  <p>All {SITE} rankings, rate verifications, and editorial content are written by {AUTHOR.name}, {AUTHOR.title}. {AUTHOR.bio} Every rate published on {SITE} is independently verified before publication and reviewed by {REVIEWER.name}, {REVIEWER.title}, who checks FDIC references, fee language, and rate accuracy before pages go live.</p>
  <h2>How does {SITE} make money?</h2>
  <p>{SITE} is completely free for consumers. {SITE} earns referral fees from some partner banks when a user opens an account through a link. This compensation model allows {SITE} to operate without charging users, selling personal data, or requiring subscriptions. Referral partnerships never influence editorial rankings — accounts are ranked solely on APY, fees, minimums, FDIC status, and account terms. Non-partner banks with superior rates are listed and ranked fairly. See the full <a href="/editorial-policy">{SITE} editorial policy</a> and <a href="/advertiser-disclosure">advertiser disclosure</a>.</p>
  <h2>When was {SITE} founded?</h2>
  <p>{SITE} was founded in 2024 with a mission to give American savers a transparent, data-driven tool for comparing bank accounts. As of {UPDATED}, {SITE} tracks rates across 50+ FDIC-insured institutions and publishes original rate trend research.</p>
  <Links exclude="/about"/>
</>}
