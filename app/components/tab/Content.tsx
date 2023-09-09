interface ContentType {
  contentClass?: string,
  isHidden?: boolean,
  content?: string
}

const Content = ({contentClass = "", isHidden = true, content = "Content 'n'"}) => {
  if (isHidden) {
    contentClass = contentClass + " " + "hidden"
  } else { 
    contentClass = contentClass.replace("hidden", "")!
  }

  return (
    <li className={contentClass}>{content}</li>
  )
}

export default Content;