export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-100 text-gray-900">
        <header className="bg-blue-800 text-white p-4 text-xl font-bold">News World</header>
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
