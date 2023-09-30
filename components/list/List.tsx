import Link from "next/link";
import CheckCircle from "../icons/CheckCircle";
interface IItem {
  label: string,
  url: string,
  icon?: React.ReactNode
}
interface IList {
  label?: string,
  items: IItem[]
}
const List: React.FC<IList> = ({label = "List Name", items}) => {
  return (
    <>
      {label && 
        <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">{label}</h2>
      }
      <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
        {items.map((item, index) => {
          return (
            <li key={index} className="flex items-center">
              <Link href={item.url} className="flex flex-row items-center justify-center">{item.icon}{item.label}</Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default List;