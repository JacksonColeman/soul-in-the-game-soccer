export function getGameDate() {
    const storedGameDate = localStorage.getItem('gameDate');
    if (storedGameDate) {
      const gameDate = JSON.parse(storedGameDate)
      return gameDate;
    }
  };

export function saveGameDate(year: number, week: number): void{
    const gameDate = {
      year: year,
      week: week
    };
    localStorage.setItem('gameDate', JSON.stringify(gameDate));
  };
