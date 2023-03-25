import Header from "@/components/Header";
import { DarkModeProvider } from "../context/DarkModeContext";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const setThemeMode = `
     if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        localStorage.theme = "dark";
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.theme = "light";
      }
  `;
  return (
    <html lang="en">
      <body className="flex flex-col w-full max-w-screen-2xl mx-auto relative">
        <script dangerouslySetInnerHTML={{ __html: setThemeMode }} />
        <DarkModeProvider>
          <Header />
          <main className="h-full w-full absolute">{children}</main>
        </DarkModeProvider>
      </body>
    </html>
  );
}
