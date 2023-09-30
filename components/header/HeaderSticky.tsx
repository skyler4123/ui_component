interface IHeaderSticky {
  children?: React.ReactNode,
  headerClass?: string
}

const HeaderSticky: React.FC<IHeaderSticky> = ({children, headerClass = "sticky top-0 flex flex-row bg-white"}) => {
  return (
    <header className={headerClass}>{children}</header>
  )
}

export default HeaderSticky;