
import "./globals.css";
import theme from "./style";
import Internet from "./internet";
import { Roboto } from "next/font/google"
import { AuthProvider } from "@/context/authContext";
import { CssBaseline, ThemeProvider } from "@mui/material";

const inter = Roboto({ 
  subsets: ["latin"],
  weight: ['400', '700'], 
});

export const metadata = {
  title: "MG-LOCAL",
  description: "...",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider> 
          <ThemeProvider theme={theme}>
            <Internet />
            <CssBaseline />
              {children} 
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
