"use client"

import Link from "next/link"
import { useStatus } from "./StatusContext"
import { use, useEffect, useState } from "react"

const Navi = () => {
  const { isHbgActive } = useStatus()
  const [mdSize, setMdSize] = useState(false)
  const [isResize, setIsResize] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setMdSize(window.innerWidth >= 768)
    }
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])
  return (
    <>
      {mdSize && (
        <nav className="md:absolute md:top-0 md:right-0 md:ml-auto">
          <ul
            className={`md:flex md:m-20 md:space-x-12 lg:space-x-30 text-(--white) tnavi ${isHbgActive ? "active" : ""}`}
          >
            <li className="cursor-pointer md:my-8 lg:my-15">
              <Link href="#">業務内容</Link>
            </li>
            <li className="cursor-pointer md:my-8 lg:my-15">
              <Link href="#">製作事例</Link>
            </li>
            <li className="cursor-pointer md:my-8 lg:my-15">
              <Link href="#">会社案内</Link>
            </li>
            <li className="contact-button cursor-pointer">
              <Link
                href="#"
                className="inline-flex justify-center space-x-5 
					                md:border-1 md:border-(--white) items-center 
                          lg:px-50 lg:py-25 md:px-20 md:py-15"
              >
                <p>お問い合わせ</p>
              </Link>
            </li>
          </ul>
        </nav>
      )}
      {isHbgActive && !mdSize && (
        <nav className="fixed top-[-100px] left-0 w-[100%] z-90">
          <ul
            className={`text-(--white) pt-[100px] pb-[20px] tnavi ${isHbgActive ? "active" : ""}`}
          >
            <li className="cursor-pointer">
              <Link href="#">業務内容</Link>
            </li>
            <li className="cursor-pointer">
              <Link href="#">製作事例</Link>
            </li>
            <li className="cursor-pointer">
              <Link href="#">会社案内</Link>
            </li>
            <li className="cursor-pointer">
              <Link href="#">
                <p>お問い合わせ</p>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  )
}
export default Navi
