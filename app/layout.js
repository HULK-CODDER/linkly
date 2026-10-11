
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
export const metadata = {
  title: "Linkly — friendly and brandable",
  description: "A simple URL shortener",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`h-screen w-screen`}
    >
      <body className="flex flex-col justify-between h-screen w-screen">
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
