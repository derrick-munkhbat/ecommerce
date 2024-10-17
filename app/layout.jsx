// app/layout.js
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 min-h-screen flex flex-col">
        <header className="py-4 bg-white shadow">
          <h1 className="text-4xl font-bold text-center">My Blog</h1>
        </header>
        <main className="flex-grow container mx-auto px-4">{children}</main>
        <footer className="py-4 text-center bg-white shadow">
          <p>© 2024 My Blog</p>
        </footer>
      </body>
    </html>
  );
}
