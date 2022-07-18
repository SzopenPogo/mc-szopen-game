import { Dispatch } from "@reduxjs/toolkit";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { clientSetMobile } from "store/client/actions/client-set-mobile-action";

const useDetectDevice = () => {
  const dispatch = useDispatch() as Dispatch<any>;

  const setDevice = useCallback(() => {
    dispatch(clientSetMobile(window.innerWidth))
  }, [dispatch])

  useEffect(() => {
    window.addEventListener('resize', setDevice);
    return () => {
      window.removeEventListener('resize', setDevice);
    }
  }, [setDevice])
}

export default useDetectDevice;