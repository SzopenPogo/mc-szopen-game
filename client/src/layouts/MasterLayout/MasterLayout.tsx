import { Dispatch } from "@reduxjs/toolkit";
import { ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getConfig } from "store/config/actions/config-get-actions";

interface Props {
  children: ReactNode
}

const MasterLayout = ({children}: Props) => {
  const dispatch = useDispatch() as Dispatch<any>;

  useEffect(() => {
    // Fetch config data from backend
    dispatch(getConfig());
  }, [dispatch])
  
  return (
    <>
      {children}
    </>
  )
}

export default MasterLayout;