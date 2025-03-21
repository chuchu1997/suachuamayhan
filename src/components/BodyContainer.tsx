import { ReactNode } from 'react'

interface BodyContainerProps {
  children: ReactNode
  className?: string
}

export const BodyContainer = ({ children, className }: BodyContainerProps) => {
  return (
    <div className={`container mx-auto mt-[100px] px-4 ${className || ''}`}>
      {children}
    </div>
  )
}







