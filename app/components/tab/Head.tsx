interface HeadType {
  label?: string,
  headClass?: string
}
const Head: React.FC<HeadType> = ({label = "Head 'n'", headClass}) => {
  return (
    <li className={headClass}>{label}</li>
  )
}

export default Head;