import { Inter } from "next/font/google";

import { QueryHydrate } from "@/components/Query/QueryHydrate";
import QueryProvider from "@/components/Query/QueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>
          <QueryHydrate>{children}</QueryHydrate>
        </QueryProvider>
      </body>
    </html>
  );
}
