import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'IIT Guwahati Alumni Association',
  description: 'Welcome to the official platform for the alumni of the Indian Institute of Technology Guwahati. Reconnect, share, and grow with your fellow graduates.',
  keywords: ['IIT Guwahati', 'Alumni', 'Association', 'IITG', 'Alumni Network'],
  authors: [{ name: 'IIT Guwahati Alumni Association' }],
  icons: {
    icon: '/assets/images/iitgaa_logo.png', // Change this to your favicon file
  },
  openGraph: {
    title: 'IIT Guwahati Alumni Association',
    description: 'Connecting Alumni, Forever.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-display bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
