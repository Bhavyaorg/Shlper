import '../../styles/globals.css'
import { Questrial } from 'next/font/google'
import { Metadata } from "next";
import { Providers } from "./providers";
import { Link } from "@nextui-org/link";
import { getServerSession } from 'next-auth';
import clsx from "clsx";
import { publicIp } from 'public-ip';
(async () => {
    console.log(await publicIp.v4());
    //=> '46.5.21.123'
})
// If loading a variable font, you don't need to specify the font weight
const QuestrialFont = Questrial({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
})
 
export default async function RootLayout({ children }) {
  const session = await getServerSession();

  return (
    <html lang="en" className='dark'>
      <body className={QuestrialFont.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}