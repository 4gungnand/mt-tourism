import localFont from "next/font/local";
import { metadata } from "../../public/metadata";

const poppins = localFont({
  src: [
    {
      path: "../../public/fonts/Poppins-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Poppins-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/Poppins-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-poppins",
});

const krifon = localFont({
  src: [
    {
      path: "../../public/fonts/DMSerifDisplay-Regular.ttf",
      weight: "400",
    },
  ],
  variable: "--font-dmserifdisplay",
});
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
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>{children}</body>
    </html>
  );
}
