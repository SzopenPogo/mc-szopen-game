import { ReactNode } from "react";

interface Props {
  children: ReactNode
}

const MasterLayout = ({children}: Props) => {
  return (
    <>
      {children}
    </>
  )
}

export default MasterLayout;