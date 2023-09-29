import ProgressBar from "../progress/ProgressBar"
import StarSummary from "./StarSummary"

interface SummaryType {
  rates: number[]
}
const Summary: React.FC<SummaryType> = ({rates}) => {
  const totalRate = rates.reduce((total, rate) => total + rate)
  const avarageRate = rates.reduce((total, rate, index) => total + rate*(index +1))/(totalRate)
  const percentages = rates.map(rate => (rate/totalRate)*100)
  
  return (
    <div className="w-1/3">
      <div className="flex flex-row justify-start items-center gap-x-2">
        <StarSummary averageStar={avarageRate}/>
        <div className="">{avarageRate} out of 5</div>
      </div>
      <div className="">{totalRate} global ratings</div>
      <div className="w-full flex flex-col-reverse">
        {percentages.map((percentage, index) => {
          return (
            <div key={index} className="w-full flex flex-row justify-between">
              <div className="">{index + 1} star </div>
              <ProgressBar percentage={percentage} componentClass='w-full h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700' barClass='h-5 bg-yellow-300 rounded'/>
              <div className="">{percentage}%</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Summary;