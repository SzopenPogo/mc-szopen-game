import { ReactNode } from 'react';
import classes from './InputWrapper.module.scss';

interface Props {
  children: ReactNode,
  focusInput: () => void;
  isInputFocus: boolean;
  title: string;
  inputId: string;
  isValid: boolean;
}

const InputWrapper = ({
  children, 
  focusInput,
  isInputFocus,
  title,
  inputId,
  isValid
}: Props) => {

  const setWrapperActive = () => {
    focusInput();
  }

  const wrapperClass = isInputFocus
    ? `${classes['input-wrapper']} ${classes['input-wrapper--active']}`
    : isValid
      ? `${classes['input-wrapper']}`
      : `${classes['input-wrapper']} ${classes['input-wrapper--invalid']}`;  

  return (
    <div className={wrapperClass} onClick={setWrapperActive}>
      {children}
      <label 
          htmlFor={inputId}
          className={classes.title}
        >
          {title}
      </label>
    </div>
  )
}

export default InputWrapper;