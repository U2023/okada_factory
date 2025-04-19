"use client"
import { createContext, useContext, useState } from "react"

// Contextの作成
const StatusContext = createContext()

// Providerコンポーネント
export function StatusProvider({ children }) {
  const [isHbgActive, setIsHbgActive] = useState(false)

  return (
    <StatusContext.Provider value={{ isHbgActive, setIsHbgActive }}>
      {children}
    </StatusContext.Provider>
  )
}

// useStatusカスタムフック
export function useStatus() {
  return useContext(StatusContext)
}
