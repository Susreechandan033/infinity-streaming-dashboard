import './globals.css'
import { ReactNode } from 'react'
import Header from '../components/Header'
export const metadata={title:'Infinity',description:'Infinity - Streaming dashboard clone'}
export default function RootLayout({children}:{children:ReactNode}) {
 return (<html lang="en"><body><Header/><main className="mx-auto max-w-7xl px-4 md:px-8 py-6">{children}</main></body></html>)
}