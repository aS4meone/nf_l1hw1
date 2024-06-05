import {Inter} from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import Head from "next/head";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "Blog",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <Head>
            <meta name="description"
                  content="Explore our latest blog posts about various topics including technology, health, lifestyle, and more. Stay updated with BLOG"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <body className={inter.className}>
        <Header/>
        {children}
        </body>
        </html>
    );
}
