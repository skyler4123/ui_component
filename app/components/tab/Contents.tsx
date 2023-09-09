'use client'
interface ContentsType {
  children: React.ReactElement[]
}
const Contents: React.FC<ContentsType> = ({children}) => {
  return (
    <ol>{children}</ol>
  )
}

export default Contents;