import classes from './PresentationSelectButton.module.scss';

interface Props {
  title: string;
  value: number;
  isSelected: boolean;
  image: string;
  onClick: (sliderId: number) => void;
}

const PresentationSelectButton = ({
  title,
  value,
  isSelected,
  image,
  onClick
}: Props) => {

  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const buttonValue = event.currentTarget.value;
    onClick(+buttonValue);
  }

  const buttonClass = isSelected
    ? `${classes['presentation-select']} ${classes['presentation-select--selected']}`
    : `${classes['presentation-select']}`;

  return (
    <button className={buttonClass}
      type='button'
      title={title}
      value={value}
      onClick={onClickHandler}
      style={{backgroundImage: `url('${image}')`}}
    />
  )
}

export default PresentationSelectButton;