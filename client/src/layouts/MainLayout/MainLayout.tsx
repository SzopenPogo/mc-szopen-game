import { Dispatch } from '@reduxjs/toolkit';
import useDetectDevice from 'hooks/useDetectDevice/useDetectDevice';
import MainLayoutContent from 'layouts/MainLayout/components/MainLayoutContent';
import { ReactNode, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { getAccount } from 'store/account/actions/account-get-actions';

interface Props {
  children: ReactNode;
}

const MainLayout = ({children}: Props) => {
  const dispatch = useDispatch() as Dispatch<any>;
  useDetectDevice();

  const { token } = useSelector((state: RootState) => state.account);

  useEffect(() => {
    // Fetch accound data if token
    if(token) {
      dispatch(getAccount(token));
    }
  }, [dispatch, token])
  

  return (
    <>
      <MainLayoutContent>
        {children}
      </MainLayoutContent>
    </>
  )
}

export default MainLayout;