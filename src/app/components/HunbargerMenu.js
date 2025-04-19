"use client"

import { useStatus } from "./StatusContext"

const HunbargerMenu = (props) => {
  const { isHbgActive, setIsHbgActive } = useStatus()

  const openHbgMenu = () => {
    setIsHbgActive((prev) => !prev)
  }
  return (
    <div className={`hbg ${isHbgActive ? "active" : ""}`} onClick={openHbgMenu}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}
export default HunbargerMenu
