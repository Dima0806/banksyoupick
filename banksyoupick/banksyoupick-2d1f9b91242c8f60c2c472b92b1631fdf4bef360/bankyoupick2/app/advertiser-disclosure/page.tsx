import { SITE } from '@/lib/data'
import { articleSchema } from '@/lib/schema'
import { Links, Bc, J } from '@/components/s'
export const metadata = { title: `Advertiser Disclosure — How ${SITE} Earns Revenue`, description: `${SITE} advertiser disclosure: how referral compensation works, what it does and does not affect, and how editorial independence is maintained.`, alternates: { canonical: '/advertiser-disclosure' } }
export default function Page() { return <>
  <J data={articleSchema(`${SITE} Advertiser Disclosure`,'Revenue disclosure.','/advertiser-disclosure','2024-01-15')}/>
  <Bc items={[{label:'Advertiser Disclosure',href:'/advertiser-disclosure'}]}/><h1>How Does {SITE} Earn Revenue?</h1>
  <h2>What is {SITE}'s compensation model?</h2>
  <p>{SITE} is free for consumers. {SITE} earns referral fees from some partner banks when a reader opens an account through a link on the site. The compensation is paid by the bank, not the consumer. Readers receive the same APY, bonus, and terms whether they apply through {SITE} or directly through the bank.</p>
  <h2>Does compensation affect rankings?</h2>
  <p>No. {SITE} rankings are based on the published scoring methodology: APY and rate value (35%), cost and access (25%), trust signals including FDIC verification (25%), and freshness (15%). Partner banks receive no ranking advantage. Non-partner banks with better terms rank higher. See the full <a href="/methodology">{SITE} methodology</a>.</p>
  <h2>How are affiliate links identified?</h2>
  <p>Pages that contain affiliate links display an Advertiser Disclosure notice at the top. {SITE} does not use undisclosed affiliate links or sponsored content disguised as editorial content.</p>
  <Links exclude="/advertiser-disclosure"/>
</>}
