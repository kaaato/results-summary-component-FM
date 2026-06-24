const Card = ({ results, children }) => {
  const getScore = () => Math.round(results.reduce((acc, cur) => cur.score + acc, 0) / results.length)
  const score = String(getScore())
  const status = (getScore() > 75) ? 'Great' : 'Ok'

  return (
    <div className="card grid">
      <div className="container-result flex-col">
        <h2 className="text-title-result">Your Result</h2>
        <div className="container-total-score flex-col">
          <span className="text-total-score">{score}</span>
          <span className="text-total-score-shadow">of 100</span>
        </div>
        <div className="container-description flex-col">
          <div className="text-status">{status}</div>
          <div className="text-description">You scored higher than 65% of the people who have taken these tests.</div>
        </div>
      </div>
      <div className="container-summary grid">
        <h2 className="text-title-summary">Summary</h2>
        <ul className="score-card-list flex-col">
          {children}
        </ul>
        <div className="container-btn-continue flex-row">
          <a className="text-btn-continue btn-continue flex-row" href="#">Continue</a>
        </div>
      </div>
    </div>
  )

}

export default Card