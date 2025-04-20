import {
  Alumni_Sans,
  BIZ_UDGothic,
  Zen_Old_Mincho,
  Lexend_Deca,
  Noto_Sans_JP,
  M_PLUS_1p,
  Noto_Serif,
  Noto_Serif_JP,
  Noto_Sans,
} from "next/font/google"
import "./globals.css"

export const alumniSans = Alumni_Sans({
  variable: "--font-alumni-sans",
  subsets: ["latin"],
  weight: "300",
})

export const bizUdgothic = BIZ_UDGothic({
  variable: "--font-biz-udgothic",
  subsets: ["latin"],
  weight: "400",
})

export const zenOldMincho = Zen_Old_Mincho({
  variable: "--font-zen-old-mincho",
  subsets: ["latin"],
  weight: "400",
})

export const lexendDeca = Lexend_Deca({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["400", "600"],
})

export const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: "400",
})

export const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "600"],
})

export const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: "400",
})

export const notoSerifJp = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
  weight: "600",
})

export const mplus = M_PLUS_1p({
  variable: "--font-mplus",
  subsets: ["latin"],
  weight: "400",
})

export const metadata = {
  title: "岡田製作所",
  description:
    "岡田製作所では、様々な試作品の精密板金加工をお引き受けしています。",
  keywords:
    "精密,板金,加工,ステンレス,アルミ,銅,鉄,医療機器,電子機器,制御盤,計測ラック,JIS Q 9001,ISO9001",
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.className} --proportional h-[100vh] lg:text-[21px] md:text-[18px] text-[14px]`}
      >
        {children}
      </body>
    </html>
  )
}
