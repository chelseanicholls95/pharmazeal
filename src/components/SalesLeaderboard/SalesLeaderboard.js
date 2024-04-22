const SalesLeaderboard = ({ leaderboard }) => {
  const winner = leaderboard[0].store;
  const title = winner.toUpperCase();

  return (
    <div className="m-5 p-3 w-100 bg-dark text-light border border-dark text-center">
      <h1>CONGRATULATIONS {title}! </h1>
      <table className="mt-5 table table-dark table-bordered">
        <thead>
          <tr>
            <th>POSITION </th>
            <th>STORE</th>
            <th>NO. SALES</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-success">
            <td>1st</td>
            <td>{leaderboard[0].store}</td>
            <td>{leaderboard[0].quantity}</td>
          </tr>
          <tr className="table-dark">
            <td>2nd</td>
            <td>{leaderboard[1].store}</td>
            <td>{leaderboard[1].quantity}</td>
          </tr>
          <tr className="table-dark">
            <td>3rd</td>
            <td>{leaderboard[2].store}</td>
            <td>{leaderboard[2].quantity}</td>
          </tr>
          <tr className="table-dark">
            <td>4th</td>
            <td>{leaderboard[3].store}</td>
            <td>{leaderboard[3].quantity}</td>
          </tr>
          <tr className="table-dark">
            <td>5th</td>
            <td>{leaderboard[4].store}</td>
            <td>{leaderboard[4].quantity}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SalesLeaderboard;
