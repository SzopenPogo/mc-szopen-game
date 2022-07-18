import useDetectDevice from 'hooks/useDetectDevice/useDetectDevice';
import MainLayoutContent from 'layouts/MainLayout/components/MainLayoutContent';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const MainLayout = ({children}: Props) => {
  useDetectDevice();

  return (
    <>
      <MainLayoutContent>
        {children}
      </MainLayoutContent>
    </>
  )
}

export default MainLayout;