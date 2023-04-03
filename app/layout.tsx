import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import { DarkModeProvider } from "../context/DarkModeContext";
import "./globals.css";
import { getSortedPostsData } from "@/utils/post";
import Recoil from "@/components/Recoil";
import OutsideDetector from "@/hooks/OutsideDetector";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: {
    default: 'Moon.dev',
    template: '%s'
  }, 
  description: '프론트엔드 개발자 Moon',
  icons: {
    icon: '/favicon.ico',
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const posts = await getSortedPostsData();

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
      <body className="flex flex-col w-full h-full max-w-screen-2xl mx-auto relative">
        <script dangerouslySetInnerHTML={{ __html: setThemeMode }} />
        <DarkModeProvider>
          <Recoil>
            <Header />
            <section className="flex w-full">
              <SideBar posts={posts} />
              <OutsideDetector>
                <main className="h-full w-full items-end">{children}</main>
              </OutsideDetector>
            </section>
          </Recoil>
        </DarkModeProvider>
      </body>
    </html>
  );
}
