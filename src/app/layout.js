
import "./globals.css";
import theme from "./style";
import { Inter } from "@next/font/google"
import { AuthProvider } from "@/context/authContext";
import { CssBaseline, ThemeProvider } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MG ",
  description: "...",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
            <AuthProvider> {children} </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
