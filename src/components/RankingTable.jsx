import { Swords } from 'lucide-react';
import SelectField from './SelectField';

export default function RankingTable({ ranking, rankingFilter, setRankingFilter, days }) {
  return (
    <section className="panel-card">
      <div className="panel-card__header panel-card__header--between">
        <div className="panel-card__title-wrap">
          <div className="panel-card__icon">
            <Swords size={18} />
          </div>
          <div className="panel-card__title">Ranking</div>
        </div>

        <div className="panel-card__filter">
          <SelectField value={rankingFilter} onChange={(event) => setRankingFilter(event.target.value)}>
            <option value="all">Total</option>
            {days.map((day) => (
              <option key={day} value={day}>
                Día {day}
              </option>
            ))}
          </SelectField>
        </div>
      </div>

      <div className="table-shell">
        <div className="table-scroll">
          <table className="ranking-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Slot</th>
                <th>Pts</th>
                <th>Kills</th>
                <th>A</th>
                <th>R</th>
              </tr>
            </thead>
            <tbody>
              {ranking.map((team, index) => {
                const isTopThree = index < 3;

                return (
                  <tr key={`${team.id}-${team.rank}`} className={isTopThree ? 'ranking-table__row--top' : ''}>
                    <td data-label="Puesto">
                      <span className={`rank-chip ${isTopThree ? 'rank-chip--top' : ''}`}>{team.rank}</span>
                    </td>
                    <td data-label="Slot" className="ranking-table__slot">
                      {team.name}
                    </td>
                    <td data-label="Puntos" className="ranking-table__strong">
                      {team.totalPoints}
                    </td>
                    <td data-label="Kills">{team.killsTotal}</td>
                    <td data-label="Amarillas">{team.yellowCount}</td>
                    <td data-label="Rojas">{team.redCount}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}