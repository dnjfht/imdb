import Providers from "./Providers";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import SearchBox from "./components/SearchBox";
import "./globals.css";

export const metadata = {
  title: "IMDb Clobe",
  description: "This is the IMDb clone website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body>
        <Providers>
          {/* Header */}
          <Header />

          {/* Navbar */}
          <Navbar />

          {/* SearchBox */}
          <SearchBox />

          {children}
        </Providers>
      </body>
    </html>
  );
}

export const dynamic = "force-dynamic";
