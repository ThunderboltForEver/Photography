import "./globals.css";
import { Playfair_Display } from "next/font/google";
import Header from "./components/Header";

const playfair_display = Playfair_Display({ subsets: ["latin"] });

interface Metadata {
  title: string;
  description: string;
}

export const metadata:Metadata = {
  title: "Photography",
  description: "Save all your images",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={playfair_display.className + " selection:bg-[#E4F1F4]"}>
        <div className=" overflow-hidden">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
