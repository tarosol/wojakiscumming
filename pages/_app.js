import { Inter } from "next/font/google";
import "../src/app/globals.css";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Wojak Is Cumming",
//   description: "Generated by create next app",
  
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;