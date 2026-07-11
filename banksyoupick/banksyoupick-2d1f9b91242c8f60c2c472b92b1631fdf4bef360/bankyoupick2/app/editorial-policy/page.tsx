import { SITE, AUTHOR, REVIEWER } from '@/lib/data'
import { articleSchema } from '@/lib/schema'
import { Links, Bc, J } from '@/components/s'
export const metadata = { title: `Editorial Policy — ${SITE} Independence and Accuracy Standards`, description: `${SITE} editorial policy: data independence, rate verification process, conflict of interest management, correction procedures.`, alternates: { canonical: '/editorial-policy' } }
export default function Page() { return <>
  <J data={articleSchema(`${SITE} Editorial Policy`,'Editorial standards.','/editorial-policy','2024-01-15')}/>
  <Bc items={[{label:'Editorial Policy',href:'/editorial-policy'}]}/><h1>How Does {SITE} Maintain Editorial Independence?</h1>
  <h2>What is {SITE}'s editorial independence policy?</h2>
  <p>{SITE} editorial rankings are determined solely by the scoring methodology. Advertising partners cannot pay for higher placement, influence scoring weights, or preview content before publication. The editorial team, led by {AUTHOR.name} ({AUTHOR.title}), makes all ranking decisions independently.</p>
  <h2>How does {SITE} verify rate accuracy?</h2>
  <p>Every rate published on {SITE} is verified directly from the issuing bank's product page. {REVIEWER.name} ({REVIEWER.title}) reviews FDIC references, fee language, and rate accuracy before publication. Each page displays both an "Updated" date (when data was last changed) and a "Reviewed" date (when editorial verification last occurred).</p>
  <h2>How does {SITE} handle errors and corrections?</h2>
  <p>When an APY, fee, FDIC certificate number, or account term is found to be incorrect, {SITE} updates the affected page immediately, adjusts the reviewed date, and keeps the correction tied to the page where readers saw the issue. {SITE} does not retroactively change historical rate tracking data.</p>
  <h2>How does {SITE} manage conflicts of interest?</h2>
  <p>{SITE} earns referral fees from some banks. This is disclosed on every page with an Advertiser Disclosure notice. The key principle: a non-partner bank with better rates and terms always outranks a partner bank. See <a href="/methodology">{SITE} methodology</a> for the full scoring model and <a href="/advertiser-disclosure">advertiser disclosure</a> for compensation details.</p>
  <Links exclude="/editorial-policy"/>
</>}
