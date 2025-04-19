"use client"

import Link from "next/link"
import { useStatus } from "./StatusContext"
import useMediaQuery from "./useMediaQuery"

const Navi = () => {
  const { isHbgActive } = useStatus()
  const lg = useMediaQuery("(min-width: 1024px)")
  return (
    <nav className="lg:absolute lg:top-0 lg:right-0 lg:ml-auto">
      {(isHbgActive || lg) && (
        <ul
          className={`lg:flex lg:m-20 lg:space-x-30 text-(--white) tnavi ${isHbgActive ? "active" : ""}`}
        >
          <li className="cursor-pointer lg:my-15 ">
            <Link href="#">業務内容</Link>
          </li>
          <li className="cursor-pointer lg:my-15">
            <Link href="#">製作事例</Link>
          </li>
          <li className="cursor-pointer lg:my-15">
            <Link href="#">会社案内</Link>
          </li>
          <li className="contact-button cursor-pointer">
            <Link
              href="#"
              className="inline-flex justify-center space-x-5 
					lg:border-1 lg:border-(--white) lg:px-50 lg:py-25 items-center"
            >
              <p>お問い合わせ</p>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  )
}
export default Navi
