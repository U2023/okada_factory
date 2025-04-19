"use client"
import { useState, useEffect } from "react"

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const media = window.matchMedia(query)
      const listener = () => setMatches(media.matches)
      media.addEventListener("change", listener)
      return () => media.removeEventListener("change", listener)
    }
  }, [query])

  return matches
}

export default useMediaQuery
