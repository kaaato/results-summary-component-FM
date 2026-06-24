const ScoreCard = ({ category, score, children }) => {
  return (
    <>
      {children}
      <div className={`text-title-sub-score text-${category.toLowerCase()}`}>{category}</div>
      <div className="text-sub-score margin-left">{score} <span className="text-sub-score-shadow">/ 100</span></div>
    </>
  )
}

export default ScoreCard