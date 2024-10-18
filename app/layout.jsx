// app/layout.js
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 my-5">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
