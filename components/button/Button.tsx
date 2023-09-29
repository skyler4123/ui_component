'use client'
interface IButton {
  children?: React.ReactNode,
  id?: string,
  componentClass?: string,
  buttonClass?: string,
  label?: string,
  onClickFunction?: React.MouseEventHandler<HTMLElement>
}

const Button: React.FC<IButton> = ({children ,id, label = "Button", onClickFunction, componentClass, buttonClass = "text-white text-lg bg-blue-700 hover:bg-blue-800 active:bg-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center"}) => {
  return (
    <div id={id} className={componentClass} onClick={onClickFunction}>
      <button className={buttonClass}>{label}</button>
      {children}
    </div>
  )
}

export default Button;