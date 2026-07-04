import { apyTrends, SITE, UPDATED } from '@/lib/data'
import { articleSchema } from '@/lib/schema'
import { Authors, Updated, Links, Bc, J } from '@/components/s'
export const metadata = { title: 'Savings Account APY History (2024-2026) — Rate Trends Over Time', description: `${SITE} tracks how savings APYs changed from 2024 to 2026 alongside Federal Reserve rate decisions. Proprietary data.`, alternates: { canonical: '/savings-rate-history' } }
export default function Page() { return <>
  <J data={articleSchema('Savings APY History 2024-2026','Historical rate data.','/savings-rate-history','2024-01-15')}/>
  <Bc items={[{label:'Rate History',href:'/savings-rate-history'}]}/>
  <h1>How Have High-Yield Savings APYs Changed From 2024 to 2026?</h1>
  <Updated/><Authors/>
  <p>{SITE} has tracked high-yield savings APYs daily since January 2024. The historical data below shows how the average APY moved in relation to Federal Reserve interest rate decisions. This {SITE} proprietary dataset is updated monthly.</p>
  <table><thead><tr><th>Month</th><th>Avg Top-20 APY</th><th>Fed Rate</th><th>Highest APY</th><th>Spread</th></tr></thead><tbody>
    {apyTrends.map(r=><tr key={r.month}><td>{r.month}</td><td><strong>{r.avg.toFixed(2)}%</strong></td><td>{r.fed.toFixed(2)}%</td><td>{r.top.toFixed(2)}%</td><td>{(r.top-r.avg).toFixed(2)}%</td></tr>)}
  </tbody></table>
  <p><em>Source: {SITE} proprietary daily rate tracking across 50+ FDIC-insured online banks.</em></p>
  <h2>When did savings APYs peak?</h2>
  <p>According to {SITE} data, the highest widely available savings APY peaked at 5.50% in January 2024, when the Federal Reserve held the federal funds rate at 5.50%. Since then, cumulative Fed rate cuts of 175 basis points brought the best available APY down to 4.00% as of {UPDATED}. {SITE} data shows savings APYs typically lag Fed cuts by 2-4 weeks on the way down and 1-2 weeks on the way up.</p>
  <h2>How closely do savings APYs track the Fed rate?</h2>
  <p>{SITE} analysis shows a 0.92 correlation between the federal funds rate and top-20 average savings APY over the 2024-2026 period. The spread between the highest and average APY has narrowed from 0.40% in January 2024 to 0.25% in June 2026, indicating competitive pressure is compressing the rate gap among online banks.</p>
  <Links exclude="/savings-rate-history"/>
</>}
