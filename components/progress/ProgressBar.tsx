interface ProgressBarType {
  percentage: number,
  componentClass?: string,
  barClass?: string,
  hasLabel?: boolean
}
const ProgressBar: React.FC<ProgressBarType> = ({percentage, componentClass = "w-full bg-gray-200 rounded-full dark:bg-gray-700", barClass = "bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full", hasLabel = false}) => {
  return (
    <div className={componentClass}>
      <div className={barClass} style={{width: `${percentage}%`}}>{hasLabel ? `${percentage}%` : null}</div>
    </div>
  )
}

export default ProgressBar;