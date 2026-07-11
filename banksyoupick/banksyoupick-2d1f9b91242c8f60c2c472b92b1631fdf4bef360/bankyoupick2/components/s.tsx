import { Bank, AUTHOR, REVIEWER, UPDATED, SITE } from '@/lib/data'

export function Table({ banks, showCd }: { banks: Bank[]; showCd?: boolean }) {
  return <table><thead><tr><th>Bank</th><th>APY</th><th>Monthly Fee</th><th>Min. Deposit</th>{showCd&&<th>Term</th>}<th>FDIC (Cert #)</th><th>Compound</th><th>Best For</th></tr></thead><tbody>
    {banks.map((b,i)=><tr key={i}><td><strong>{b.name}</strong></td><td><strong>{b.apy.toFixed(2)}%</strong></td><td>${b.monthlyFee}</td><td>${b.minDeposit.toLocaleString()}</td>{showCd&&<td>{b.cdTerm||'—'}</td>}<td>{b.fdic?`✅ #${b.fdicCert}`:'❌'}</td><td>{b.compoundFreq}</td><td>{b.bestFor}</td></tr>)}
  </tbody></table>
}

export function RateHistory({ history }: { history: {month:string;apy:number}[] }) {
  if(!history.length) return null
  return <><h3>How has this bank's savings APY changed over time?</h3><table><thead><tr><th>Month</th><th>APY</th><th>Change</th></tr></thead><tbody>
    {history.map((h,i)=><tr key={i}><td>{h.month}</td><td><strong>{h.apy.toFixed(2)}%</strong></td><td>{i>0?`${(h.apy-history[i-1].apy)>0?'+':''}${((h.apy-history[i-1].apy)*100).toFixed(0)} bps`:'—'}</td></tr>)}
  </tbody></table><p><em>Source: {SITE} proprietary daily rate tracking. Data verified from bank product pages.</em></p></>
}

export function Authors() {
  return <div className="author-box">
    <p><strong>Written by {AUTHOR.name}</strong> — {AUTHOR.title}</p>
    <p className="bio">{AUTHOR.bio} <a href={AUTHOR.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn →</a></p>
    <p><strong>Reviewed by {REVIEWER.name}</strong> — {REVIEWER.title}</p>
    <p className="bio">{REVIEWER.bio}</p>
  </div>
}

export function Updated() { return <p className="updated">Updated {UPDATED}. Reviewed {UPDATED}. Rates verified from each bank.</p> }

export function Disclosure() {
  return <div className="disclosure"><strong>Advertiser Disclosure:</strong> {SITE} is free to use. Some banks pay us referral fees when you open an account through our links. This never affects our editorial rankings, which are based on APY, fees, minimums, FDIC status, and account terms. See our <a href="/editorial-policy">editorial policy</a> and <a href="/advertiser-disclosure">advertiser disclosure</a>.</div>
}

export function Links({ exclude }: { exclude?: string }) {
  const all = [
    {href:'/',label:'Home'},{href:'/best-high-yield-savings',label:'Best Savings'},{href:'/best-checking-accounts',label:'Best Checking'},{href:'/best-cd-rates',label:'Best CDs'},
    {href:'/compare/sofi-vs-marcus',label:'SoFi vs Marcus'},{href:'/best/students',label:'Best for Students'},{href:'/best/seniors',label:'Best for Seniors'},
    {href:'/research/q2-2026-savings-rate-trends',label:'Q2 2026 Rate Report'},{href:'/savings-rate-history',label:'Rate History'},
    {href:'/guides/what-is-apy',label:'What Is APY?'},{href:'/guides/fdic-insurance-basics',label:'FDIC Basics'},
    {href:'/banks/sofi-bank',label:'SoFi Review'},{href:'/banks/ally-bank',label:'Ally Review'},
    {href:'/faq',label:'FAQ'},{href:'/about',label:'About'},{href:'/methodology',label:'Methodology'},
  ].filter(l=>l.href!==exclude)
  return <div className="internal-links"><h3>Explore more from {SITE}</h3><ul>{all.map(l=><li key={l.href}><a href={l.href}>{l.label}</a></li>)}</ul></div>
}

export function Bc({ items }: { items:{label:string;href:string}[] }) {
  return <div className="breadcrumb"><a href="/">{SITE}</a>{items.map((it,i)=><span key={i}> › <a href={it.href}>{it.label}</a></span>)}</div>
}

export function J({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data)}} />
}
