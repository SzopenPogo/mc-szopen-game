import classes from './Spinner.module.scss'

interface IProps {
  size: string;
  borderSize: string;
  color: string;
}

const Spinner = ({size, borderSize, color}: IProps) => {
  return (
    <div className={classes['lds-ring']} style={{height: `${size}`, width: `${size}`}}>
      <div style={{
        height: `${size}`,
        width: `${size}`,
        borderWidth: `${borderSize}`,
        borderColor: `${color} transparent transparent transparent`
      }} />
      <div style={{
        height: `${size}`,
        width: `${size}`,
        borderWidth: `${borderSize}`,
        borderColor: `${color} transparent transparent transparent`
      }} />
      <div style={{
        height: `${size}`,
        width: `${size}`,
        borderWidth: `${borderSize}`,
        borderColor: `${color} transparent transparent transparent`
      }} />
      <div style={{
        height: `${size}`,
        width: `${size}`,
        borderWidth: `${borderSize}`,
        borderColor: `${color} transparent transparent transparent`
      }} />
    </div>
  )
}

export default Spinner