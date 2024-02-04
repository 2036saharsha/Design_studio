import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import { Room } from "./Room";

import "./globals.css";

const workSans = Work_Sans({ 
  subsets: ["latin"],
  variable: '--font-work-sans',
  weight: ['400', '600', '700']
 });

export const metadata: Metadata = {
  title: "Design_studio",
  description: "Create UI design with live collaboration ",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang='en'>
    <body className={`${workSans.className} bg-primary-grey-200`}>
      <Room>
        {children}
      </Room>
    </body>
  </html>
);

export default RootLayout;