// app/layout.js
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>My Blog</title>
        <meta name="description" content="Description of your site" />
      </Head>
      <body className="bg-gray-100 text-gray-900 min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
