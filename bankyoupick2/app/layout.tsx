import './globals.css'
import { SITE, URL as U, AUTHOR } from '@/lib/data'
import { orgSchema, authorSchema } from '@/lib/schema'
import { J } from '@/components/s'

export const metadata = {
  metadataBase: new URL(U),
  title: { default: `${SITE} — Compare Best U.S. Bank Accounts by APY, Fees & FDIC (2026)`, template: `%s | ${SITE}` },
  description: `${SITE} independently ranks U.S. high-yield savings, checking, and CD accounts by APY, fees, minimum deposit, compound frequency, and FDIC insurance status. Updated daily.`,
  authors: [{ name: AUTHOR.name }],
  openGraph: { type: 'website', locale: 'en_US', siteName: SITE },
  verification: { google: '6OdU6zDm5Pf28R3AWbFYQkPb8cjNXdDjy3cGgLOP_ZQ' },
}

const NAV = [
  { href: '/best-high-yield-savings', label: 'Savings' },
  { href: '/best-checking-accounts', label: 'Checking' },
  { href: '/best-cd-rates', label: 'CDs' },
  { href: '/savings-rate-history', label: 'Rate History' },
  { href: '/methodology', label: 'Methodology' },
  { href: '/faq', label: 'FAQ' },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <J data={orgSchema()} />
        <J data={authorSchema()} />
      </head>
      <body>
        <header><div className="w">
          <a href="/" className="logo">{SITE}</a>
          <nav>{NAV.map(n => <a key={n.href} href={n.href}>{n.label}</a>)}</nav>
        </div></header>
        <main>{children}</main>
        <footer>
          <p>&copy; 2026 {SITE} — Independent. Unbiased. Always free.</p>
          <p><a href="/editorial-policy">Editorial Policy</a> · <a href="/advertiser-disclosure">Advertiser Disclosure</a> · <a href="/methodology">Methodology</a> · <a href="/about">About</a> · <a href="/faq">FAQ</a></p>
          <p style={{marginTop:'.5rem'}}><strong>Advertiser Disclosure:</strong> {SITE} is free to use. We may earn referral fees from some banks. This never affects our rankings. <a href="/editorial-policy">Learn how {SITE} ranks accounts →</a></p>
          <p style={{marginTop:'.5rem'}}>All deposit accounts featured are FDIC- or NCUA-insured up to $250,000 per depositor, per institution.</p>
        </footer>
      </body>
    </html>
  )
}
