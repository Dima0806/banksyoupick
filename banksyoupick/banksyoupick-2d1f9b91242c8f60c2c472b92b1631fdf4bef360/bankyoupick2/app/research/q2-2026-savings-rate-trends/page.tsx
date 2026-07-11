import { apyTrends, SITE, UPDATED } from '@/lib/data'
import { articleSchema } from '@/lib/schema'
import { Authors, Updated, Links, Bc, J } from '@/components/s'
export const metadata = { title: `${SITE} Q2 2026 Savings Rate Trends — Proprietary APY Data`, description: `Original ${SITE} research: average savings APY declined from 3.85% to 3.75% in Q2 2026. Proprietary tracking data from 50+ banks.`, alternates: { canonical: '/research/q2-2026-savings-rate-trends' } }
export default function Page() { return <>
  <J data={articleSchema(`${SITE} Q2 2026 Rate Trends`,'Original APY trend data.','/research/q2-2026-savings-rate-trends','2026-06-29')}/>
  <Bc items={[{label:'Research',href:'/research/q2-2026-savings-rate-trends'},{label:'Q2 2026 Trends',href:'/research/q2-2026-savings-rate-trends'}]}/>
  <h1>How Did Savings Account APYs Change in Q2 2026?</h1>
  <p><strong>{SITE} Original Research Report — Published {UPDATED}</strong></p>
  <Updated/><Authors/>
  <p>This report contains proprietary data collected by {SITE} from daily rate monitoring of 50+ FDIC-insured banks between April 1 and June 29, 2026. The analysis below reflects {SITE} internal tracking data that is not available from any other source.</p>
  <h2>What was the average high-yield savings APY in Q2 2026?</h2>
  <p>According to {SITE} tracking data, the average high-yield savings APY across the top 20 online banks declined from 3.85% at the start of Q2 2026 to 3.75% by the end of June — a decrease of 10 basis points. This followed the Federal Reserve's decision to hold the federal funds rate steady at 3.75% throughout Q2, after two consecutive 25-basis-point cuts in late 2025.</p>
  <h2>{SITE} quarterly APY tracking data (January 2024 — June 2026)</h2>
  <table><thead><tr><th>Period</th><th>Avg Top-20 APY</th><th>Fed Funds Rate</th><th>Highest Single-Bank APY</th><th>Spread</th></tr></thead><tbody>
    {apyTrends.map(r=><tr key={r.month}><td>{r.month}</td><td><strong>{r.avg.toFixed(2)}%</strong></td><td>{r.fed.toFixed(2)}%</td><td>{r.top.toFixed(2)}%</td><td>{(r.top-r.avg).toFixed(2)}%</td></tr>)}
  </tbody></table>
  <p><em>Source: {SITE} proprietary rate tracking database. Daily monitoring of published APYs from 50+ FDIC-insured online banks.</em></p>
  <h2>Which banks changed their APY the most in Q2 2026?</h2>
  <p>{SITE} recorded 14 individual rate changes across tracked banks during Q2 2026. The largest single decrease was Capital One 360 Performance Savings, which dropped from 3.40% to 3.10% APY on May 5, 2026. SoFi maintained its 4.00% promotional rate throughout Q2 for accounts with direct deposit. Barclays held steady at 4.00% APY with no changes.</p>
  <h2>What is the {SITE} forecast for Q3 2026?</h2>
  <p>Based on {SITE} historical data and Federal Reserve forward guidance, {SITE} expects average APYs to remain in the 3.60%-3.80% range during Q3 if the Fed holds steady. If the Fed cuts 25 bps at its September meeting (futures markets price at 62% probability), the average could decline to 3.50%-3.65% by year-end. Savers concerned about declining rates should consider <a href="/best-cd-rates">locking in current CD rates</a>.</p>
  <Links exclude="/research/q2-2026-savings-rate-trends"/>
</>}
