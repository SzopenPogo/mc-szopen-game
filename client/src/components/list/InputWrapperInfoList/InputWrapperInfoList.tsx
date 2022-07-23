import classes from './InputWrapperInfoList.module.scss';

interface Props {
  inputInfo: Array<string>
}

const InputWrapperInfoList = ({inputInfo}: Props) => {
  const renderinputInfo = inputInfo && inputInfo.map(info => (
    <li 
      key={Math.random()}
      className={classes['input-wrapper-info__item']}
    >
      - {info}
    </li>
  ));

  return (
    <ul className={classes['input-wrapper-info']}>
      {renderinputInfo}
    </ul>
  )
}

export default InputWrapperInfoList;