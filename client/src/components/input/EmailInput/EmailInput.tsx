import InputWrapper from 'components/input/InputWrapper/InputWrapper';
import useAssignRefs from 'hooks/useAssignRefs/useAssignRefs';
import { ChangeEvent, forwardRef, useEffect, useId, useRef, useState } from 'react';
import validator from 'validator';

interface Props {
  title: string;
  value?: string;
  isReadonly?: boolean;
}

const EmailInput = forwardRef<HTMLInputElement, Props>(({
  title,
  value = '',
  isReadonly
}, ref) => {
  const emailLocalRef = useRef<HTMLInputElement>(null);
  const emailRef = useAssignRefs(emailLocalRef, ref);

  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [emailValue, setEmailValue] = useState<string>(value);
  const [isValid, setIsValid] = useState<boolean>(true);

  useEffect(() => {
    //Validate email
    if(!isFocus && emailValue.length > 0) {
      const isValidEmail = validator.isEmail(emailValue);
      setIsValid(isValidEmail);
    }
  }, [isFocus, emailValue])
  

  const focusEmail = () => {
    emailLocalRef.current?.focus();
    setFocus();
  }

  const setFocus = () => {
    setIsFocus(true);
  }

  const setBlur = () => {
    setIsFocus(false);
  }

  const emailValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setEmailValue(newValue);
  }

  const emailId = useId();
  return (
    <InputWrapper
      focusInput={focusEmail}
      isInputFocus={isFocus}
      title={title}
      inputId={emailId}
      isValid={isValid}
    >
      <input
        ref={emailRef}
        id={emailId}
        autoCapitalize='none'
        autoCorrect='off'
        spellCheck='false'
        onBlur={setBlur}
        maxLength={100}
        type='email'
        title='Email'
        readOnly={isReadonly}
        value={emailValue}
        onChange={emailValueHandler}
      />
    </InputWrapper>
  )
})

export default EmailInput;