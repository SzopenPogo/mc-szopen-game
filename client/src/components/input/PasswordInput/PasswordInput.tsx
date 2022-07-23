import { Dispatch } from '@reduxjs/toolkit';
import ToggleVisibilityButton from 'components/button/ToggleVisibilityButton/ToggleVisibilityButton';
import InputWrapper from 'components/input/InputWrapper/InputWrapper';
import useAssignRefs from 'hooks/useAssignRefs/useAssignRefs';
import { ChangeEvent, forwardRef, useEffect, useId, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { setPasswordValid } from 'store/authentication/actions/authentication-password-actions';

interface Props {
  title: string;
  value?: string;
  isReadonly?: boolean;
}

const PasswordInput = forwardRef<HTMLInputElement, Props>(({
  title,
  value = '',
  isReadonly
}, ref) => {
  const dispatch = useDispatch() as Dispatch<any>;
  
  const passwordLocalRef = useRef<HTMLInputElement>(null);
  const passwordRef = useAssignRefs(passwordLocalRef, ref);

  const {PASSWORD_REG_EXP, PASSWORD_MIN_LENGTH} = useSelector((state: RootState) => state.config.configData);
  const isValid = useSelector((state: RootState) => state.authentication.isPasswordValid);

  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [passwordValue, setPasswordValue] = useState<string>(value);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isValidStructure, setIsValidStructure] = useState<boolean>(false);
  const [isValidLength, setIsValidLength] = useState<boolean>(false);

  useEffect(() => {
    //Reset password valid on first render
    dispatch(setPasswordValid(false));
  }, [dispatch])
  

  useEffect(() => {
    //Validate Password
    const passwordRegExp = new RegExp(PASSWORD_REG_EXP);
    setIsValidStructure(!!passwordRegExp.test(passwordValue));
    setIsValidLength(passwordValue.length >= PASSWORD_MIN_LENGTH);

    const isValidPassword = isValidStructure && isValidLength;
    dispatch(setPasswordValid(isValidPassword));
  }, [passwordValue, 
      PASSWORD_REG_EXP, 
      PASSWORD_MIN_LENGTH, 
      isValidStructure, 
      isValidLength,
      dispatch
    ])
  

  const focusPassword = () => {
    passwordLocalRef.current?.focus();
    setFocus();
  }

  const setFocus = () => {
    setIsFocus(true);
  }

  const setBlur = () => {
    setIsFocus(false);
  }

  const passwordValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setPasswordValue(newValue);
  }

  const togglePasswordVisibility = () => {
    setIsVisible(!isVisible);
  }

  const passwordId = useId();
  const inputType = isVisible ? 'text' : 'password';
  
  const passwordInfo = [] as Array<string>;
  !isValidStructure && passwordInfo.push('A least one number and one CAPITAL letter');
  !isValidLength && passwordInfo.push(`Minimum ${PASSWORD_MIN_LENGTH} characters`);
  
  return (
    <InputWrapper
      focusInput={focusPassword}
      isInputFocus={isFocus}
      title={title}
      inputId={passwordId}
      isValid={isValid}
      inputInfo={passwordInfo}
    >
      <input
        ref={passwordRef}
        id={passwordId}
        autoCapitalize='none'
        autoCorrect='off'
        spellCheck='false'
        onBlur={setBlur}
        maxLength={100}
        minLength={PASSWORD_MIN_LENGTH}
        type={inputType}
        title='Password'
        readOnly={isReadonly}
        value={passwordValue}
        onChange={passwordValueHandler}
      />
      <ToggleVisibilityButton
        onClick={togglePasswordVisibility}
        isActive={isVisible}
      />
    </InputWrapper>
  )
})

export default PasswordInput;