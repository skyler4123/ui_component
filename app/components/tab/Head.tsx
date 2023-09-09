import { useDispatch, useSelector } from "react-redux";

interface HeadType {
  label?: string,
  headClass?: string,
  tabIndex: number
}
const Head: React.FC<HeadType> = ({label = "Head 'n'", headClass, tabIndex}) => {
  const todo = useSelector((state: any) => state.activeTabIndex)
  console.log(todo)
  const dispatch = useDispatch()
  const handleOnClick = () => {
    dispatch({type: "ASC99"})
  }
  return (
    <li onClick={handleOnClick} className={headClass}>{label}</li>
  )
}

export default Head;