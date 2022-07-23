import InputWrapperInfoList from 'components/list/InputWrapperInfoList/InputWrapperInfoList';
import { ReactNode } from 'react';
import classes from './InputWrapper.module.scss';

interface Props {
  children: ReactNode,
  focusInput: () => void;
  isInputFocus: boolean;
  title: string;
  inputId: string;
  isValid: boolean;
  inputInfo?: Array<string>
}

const InputWrapper = ({
  children, 
  focusInput,
  isInputFocus,
  title,
  inputId,
  isValid,
  inputInfo
}: Props) => {

  const setWrapperActive = () => {
    focusInput();
  }

  const inputWrapperClass = isInputFocus
    ? `${classes['input-wrapper']} ${classes['input-wrapper--active']}`
    : isValid
      ? `${classes['input-wrapper']}`
      : `${classes['input-wrapper']} ${classes['input-wrapper--invalid']}`;  

  return (
    <div className={classes.wrapper}>
      <div className={inputWrapperClass} onClick={setWrapperActive}>
        {children}
        <label 
            htmlFor={inputId}
            className={classes.title}
          >
            {title}
        </label>
      </div>
      {inputInfo && inputInfo.length > 0 &&
        <InputWrapperInfoList inputInfo={inputInfo} />}
    </div>
  )
}

export default InputWrapper;