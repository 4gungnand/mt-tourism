import "./globals.css";
import localFont from "next/font/local";

const poppins = localFont({
  src: [
    {
      path: "/fonts/Poppins-Regular.ttf",
      weight: "400",
    },
    {
      path: "/fonts/Poppins-Medium.ttf",
      weight: "500",
    },
    {
      path: "/fonts/Poppins-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-poppins",
});

const krifon = localFont({
  src: [
    {
      path: "/fonts/DMSerifDisplay-Regular.ttf",
      weight: "400",
    },
  ],
  variable: "--font-dmserifdisplay",
});

export const metadata = {
  title: "Muara Takus Unofficial Website",
  description: "An unofficial website for Muara Takus made by kamparmemancar team KKN-PPM UGM 2024",
  icons: {
    icon: "/logos/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${krifon.variable} bg-color1 font-sans`}
    >
      <body>{children}</body>
    </html>
  );
}
