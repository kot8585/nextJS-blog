import SideBar from "@/components/organisms/SideBar";
import { DarkModeProvider } from "../context/DarkModeContext";
import "./globals.css";
import { getSortedPostsData } from "@/service/post";
import Recoil from "@/components/Recoil";
import { Metadata } from "next";
import Header from "@/components/organisms/Header";

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
            <SideBar posts={posts} />
            <Header />
            <section className="flex w-full">
                <main className="h-full w-full items-end">{children}</main>
            </section>
          </Recoil>
        </DarkModeProvider>
      </body>
    </html>
  );
}
