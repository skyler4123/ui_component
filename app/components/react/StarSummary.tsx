import Star from "../icons/Star"

interface StarSummaryType {
  averageStar: number
  initStar?: number
}
const StarSummary: React.FC<StarSummaryType> = ({averageStar, initStar = 5}) => {
  const starDivs = []
  for (let i = 0; i < initStar; i++) {
    if (i > averageStar) {
      starDivs[i] = <Star key={i} starClass="w-4 h-4 text-gray-300 mr-1"/>
    } else {
      starDivs[i] = <Star key={i} />
    }
  }
  
  return (
    <div className="flex flex-row">
      {starDivs.map(starDiv => starDiv)}
    </div>
  )
}

export default StarSummary;