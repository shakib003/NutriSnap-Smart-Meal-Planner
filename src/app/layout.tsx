import { Inter } from "next/font/google"
import "./globals.css"
import { SidebarProvider } from "@/components/ui/sidebar"
import Sidebar from "@/components/Sidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Sidebar Layout Example",
  description: "A page with a sidebar and dynamic content",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarProvider>
          <div className="flex h-screen">
            <Sidebar />
            <main className="flex-1 p-4 overflow-auto">{children}</main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  )
}