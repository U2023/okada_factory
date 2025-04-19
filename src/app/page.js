import Image from "./components/Image"
import Link from "next/link"
import {
  alumniSans,
  lexendDeca,
  mplus,
  notoSans,
  notoSerif,
  notoSerifJp,
  zenOldMincho,
} from "./layout"
import HunbargerMenu from "./components/HunbargerMenu"
import { StatusProvider } from "./components/StatusContext"
import Navi from "./components/Navi"

export default function Home() {
  return (
    <StatusProvider>
      <header className="lg:h-[700px] lg:bg-cover lg:bg-[url(./images/top_back.png)] lg:bg-no-repeat bg-[#0c1013]">
        <div className="flex justify-between">
          <div id="logo" className="lg:px-40 px-20 py-20">
            <h1>
              <Link href="#">
                <Image
                  src="/images/logo.png"
                  alt="岡田製作所"
                  width={245}
                  height={54}
                />
              </Link>
            </h1>
          </div>
          <HunbargerMenu />
        </div>
        <div
          id="catch"
          className="flex flex-col-reverse justify-center lg:py-180 lg:px-200"
        >
          <h2
            className={`${zenOldMincho.className} lg:text-[76px] text-[32px] text-(--white) tracking-[0.1em] whitespace-nowrap`}
          >
            お客様の
            <span className="text-(--yellow)">
              求<span className="tracking-[0em]">める</span>
            </span>
            形に。
          </h2>
          <div
            className={`${alumniSans.className} lg:text-[25px] text-(--white) tracking-[0.14em] lg:flex lg:items-end lg:whitespace-nowrap`}
          >
            <p className="pl-7 pr-10 tracking-[0.15em]">
              CREATE THE SHAPE THAT THE CUSTOMER DESIRES
            </p>
            <Image
              src="/images/boxicon.png"
              width={29}
              height={40}
              alt="icon"
              className="mb-5 box-icon"
            />
          </div>
        </div>
      </header>
      <Navi />
      <section
        id="about"
        className="lg:flex justify-end lg:h-[600px] bg-cover bg-[url(./images/about_left_back.png)] bg-no-repeat"
      >
        <div className="mx-20 lg:w-[580px]">
          <div className="flex flex-col-reverse pt-[100px] pb-[40px]">
            <h3 className={`${mplus.className} text-[17px] text-(--blue)`}>
              岡田製作所について
            </h3>
            <h4
              className={`${lexendDeca.className} font-[600] text-[54px] text-(--blue) `}
            >
              ABOUT US
            </h4>
          </div>
          <p>
            岡田製作所は、建築金物・産業機械・工作機械・精密機械・半導体装置部品を、
            単に部品加工を行うのではなくユーザーがそのまま生産ラインにのせられる熱処理、研磨、表面処理までトータルに対応しております。
          </p>
        </div>
        <div className="lg:w-[50%] lg:max-w-[800px]">
          <Image
            src="/images/about_img.png"
            alt="about"
            width={800}
            height={600}
            className="w-[100%] aspect-[4/3]"
          ></Image>
        </div>
      </section>
      <section id="business">
        <div className="px-20 ml-auto mr-auto lg:w-[1190px]">
          <div className="flex flex-col-reverse pt-[100px] pb-[40px]">
            <h3 className={`${mplus.className} text-[17px] text-(--blue)`}>
              業務内容
            </h3>
            <h4
              className={`${lexendDeca.className} font-[600] text-[54px] text-(--blue)`}
            >
              BUSINESS
            </h4>
          </div>
          <div className="lg:flex lg:justify-center mb-50">
            <p className="lg:mr-80 lg:w-[580px]">
              お客様の生産工程における効率化を推進し、高精度で妥協を許さない製品をお届けいたします。
            </p>
            <div className="lg:w-[580px]">
              <Link href="#">
                <button
                  className={`${notoSans.className} font-[600] view-button`}
                >
                  view more
                  <Image
                    src="/images/arrow_icon.png"
                    alt="arrow"
                    width={58}
                    height={58}
                    className="inline-block lg:ml-20 lg:w-[58px] ml-10 w-[32px]"
                  ></Image>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:flex">
          <div className="view-block my-20 ">
            <div>
              <h5 className={`${notoSerif.className}`}>
                01
                <span className={`${lexendDeca.className}`}>STRENGTH</span>
              </h5>
              <p className={`${notoSerifJp.className}`}>
                確かな技術で高精度な製品をお届け
              </p>
            </div>
          </div>
          <div className="view-block view-block2 my-20 ">
            <div>
              <h5 className={`${notoSerif.className}`}>
                02
                <span className={`${lexendDeca.className}`}>STRENGTH</span>
              </h5>
              <p className={`${notoSerifJp.className}`}>
                単品・小ロットへの対応
              </p>
            </div>
          </div>
          <div className="view-block view-block3 my-20 ">
            <div>
              <h5 className={`${notoSerif.className}`}>
                03
                <span className={`${lexendDeca.className}`}>STRENGTH</span>
              </h5>
              <p className={`${notoSerifJp.className}`}>
                納期厳守、短納期にも対応可能
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="machine">
        <div>
          <div className="title">
            <h3 className={`${mplus.className} text-[17px]`}>設備紹介</h3>
            <h4 className={`${lexendDeca.className} font-[600] text-[54px]`}>
              MACHINE
            </h4>
          </div>
          <p>
            お客様の様々なニーズに応えることのできる設備を取り揃えております。
          </p>
          <Link href="#">
            <button className={`${notoSans.className} font-[600] view-button2`}>
              view more
              <Image
                src="/images/arrow_icon2.png"
                alt="arrow"
                width={58}
                height={58}
                className="inline-block lg:ml-20 lg:w-[58px] ml-10 w-[32px]"
              ></Image>
            </button>
          </Link>
        </div>
      </section>
      <footer className="bg-(--blue2) pt-100 text-(--white) text-[15px]">
        <div className="mx-30">
          <div className="lg:flex">
            <h3 className="lg:pr-[40px] py-[10px]">
              <Link href="#">
                <img
                  src="./images/logo.png"
                  alt="岡田製作所"
                  width={245}
                  height={54}
                />
              </Link>
            </h3>
            <div className="lg:border-l lg:px-[40px] py-[10px]">
              <p className="py-[10px]">
                <span>tel.00-0000-0000</span>
                <span>fax.00-0000-0000</span>
              </p>
              <p>〒012-3456 □◎○●●●●●1-23</p>
            </div>
          </div>
          <div className="lg:flex lg:justify-between">
            <ul className="lg:flex lg:space-x-50 my-50 fnavi">
              <li style={{ cursor: "pointer" }}>
                <Link href="#">ホーム</Link>
              </li>
              <li style={{ cursor: "pointer" }}>
                <Link href="#">業務内容</Link>
              </li>
              <li style={{ cursor: "pointer" }}>
                <Link href="#">製作事例</Link>
              </li>
              <li style={{ cursor: "pointer" }}>
                <Link href="#">会社案内</Link>
              </li>
              <li style={{ cursor: "pointer" }}>
                <Link href="#">お問い合わせ</Link>
              </li>
            </ul>
            <div className="flex my-50">
              <ul className="flex space-x-30">
                <li>
                  <Link href="#">
                    <Image
                      src="/images/X_icon.png"
                      alt="X"
                      width={24}
                      height={24}
                    />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <Image
                      src="/images/facebook_icon.png"
                      alt="facebook"
                      width={24}
                      height={24}
                    />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <Image
                      src="/images/instagram_icon.png"
                      alt="instagram"
                      width={24}
                      height={24}
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          id="copyright"
          className="border-t-1 border-(--white) py-30 mx-30 text-right text-[13px]"
        >
          <button className="pr-30">
            <Link href="#">Policy</Link>
          </button>
          <span>&copy; 2025 有限会社岡田製作所</span>
        </div>
      </footer>
    </StatusProvider>
  )
}

export async function generateStaticParams() {
  return []
}
