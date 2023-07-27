# Find or create a user to associate with the template universe
user = User.create(name: 'Template')
# Create a template universe and associate it with the user
template_universe = Universe.create(year:2023, week:1, game_state:0, week_state:0)
user.universe = template_universe

# # Create league systems for the template universe
england = template_universe.league_systems.create(name: 'England')
spain = template_universe.league_systems.create(name: 'Spain')
germany = template_universe.league_systems.create(name: 'Germany')
italy = template_universe.league_systems.create(name: 'Italy')
france = template_universe.league_systems.create(name: 'France')
netherlands = template_universe.league_systems.create(name: 'Netherlands')
portugal = template_universe.league_systems.create(name: 'Portugal')

#England
# Premier League
premier_league = england.leagues.create(
  name: 'Premier League',
  relegation_count: 3,
  tier: 1,
  transfer_budget_multiplier: 500000
)

premier_teams = [
  { name: 'Arsenal', reputation: 81, transfer_budget: 0 },
  { name: 'Aston Villa', reputation: 69, transfer_budget: 0 },
  { name: 'Bournemouth', reputation: 63, transfer_budget: 0 },
  { name: 'Brentford', reputation: 63, transfer_budget: 0 },
  { name: 'Brighton', reputation: 66, transfer_budget: 0 },
  { name: 'Burnley', reputation: 60, transfer_budget: 0 },
  { name: 'Chelsea', reputation: 88, transfer_budget: 0 },
  { name: 'Crystal Palace', reputation: 66, transfer_budget: 0 },
  { name: 'Everton', reputation: 67, transfer_budget: 0 },
  { name: 'Fulham', reputation: 64, transfer_budget: 0 },
  { name: 'Liverpool', reputation: 90, transfer_budget: 0 },
  { name: 'Luton Town', reputation: 56, transfer_budget: 0 },
  { name: 'Man City', reputation: 91, transfer_budget: 0 },
  { name: 'Man United', reputation: 84, transfer_budget: 0 },
  { name: 'Newcastle', reputation: 74, transfer_budget: 0 },
  { name: 'Nottm Forest', reputation: 62, transfer_budget: 0 },
  { name: 'Sheffield Utd', reputation: 61, transfer_budget: 0 },
  { name: 'Tottenham', reputation: 81, transfer_budget: 0 },
  { name: 'West Ham', reputation: 70, transfer_budget: 0 },
  { name: 'Wolves', reputation: 66, transfer_budget: 0 }
]

premier_teams.each do |team|
  premier_league.teams.create(team)
end

# EFL Championship
championship = england.leagues.create(
  name: 'EFL Championship',
  relegation_count: 3,
  tier: 2,
  transfer_budget_multiplier: 125000
)

championship_teams = [
  { name: 'Birmingham', reputation: 56, transfer_budget: 0 },
  { name: 'Blackburn', reputation: 58, transfer_budget: 0 },
  { name: 'Bristol City', reputation: 58, transfer_budget: 0 },
  { name: 'Cardiff City', reputation: 58, transfer_budget: 0 },
  { name: 'Coventry', reputation: 55, transfer_budget: 0 },
  { name: 'Huddersfield', reputation: 58, transfer_budget: 0 },
  { name: 'Hull City', reputation: 57, transfer_budget: 0 },
  { name: 'Ipswich Town', reputation: 53, transfer_budget: 0 },
  { name: 'Leeds United', reputation: 66, transfer_budget: 0 },
  { name: 'Leicester City', reputation: 73, transfer_budget: 0 },
  { name: 'Middlesbrough', reputation: 59, transfer_budget: 0 },
  { name: 'Millwall', reputation: 56, transfer_budget: 0 },
  { name: 'Norwich City', reputation: 61, transfer_budget: 0 },
  { name: 'Plymouth', reputation: 52, transfer_budget: 0 },
  { name: 'Preston', reputation: 58, transfer_budget: 0 },
  { name: 'QPR', reputation: 58, transfer_budget: 0 },
  { name: 'Rotherham', reputation: 52, transfer_budget: 0 },
  { name: 'Sheffield Wed', reputation: 55, transfer_budget: 0 },
  { name: 'Southampton', reputation: 66, transfer_budget: 0 },
  { name: 'Stoke City', reputation: 58, transfer_budget: 0 },
  { name: 'Sunderland', reputation: 59, transfer_budget: 0 },
  { name: 'Swansea', reputation: 59, transfer_budget: 0 },
  { name: 'Watford', reputation: 61, transfer_budget: 0 },
  { name: 'West Brom', reputation: 60, transfer_budget: 0 }
]

championship_teams.each do |team|
  championship.teams.create(team)
end

# EFL League One
league_one = england.leagues.create(
  name: 'EFL League One',
  relegation_count: 4,
  tier: 3,
  transfer_budget_multiplier: 50000
)

league_one_teams = [
  { name: 'Barnsley', reputation: 53, transfer_budget: 0 },
  { name: 'Blackpool', reputation: 54, transfer_budget: 0 },
  { name: 'Bolton', reputation: 53, transfer_budget: 0 },
  { name: 'Bristol Rovers', reputation: 49, transfer_budget: 0 },
  { name: 'Burton', reputation: 46, transfer_budget: 0 },
  { name: 'Cambridge United', reputation: 44, transfer_budget: 0 },
  { name: 'Carlisle', reputation: 41, transfer_budget: 0 },
  { name: 'Charlton', reputation: 53, transfer_budget: 0 },
  { name: 'Cheltenham', reputation: 44, transfer_budget: 0 },
  { name: 'Derby County', reputation: 55, transfer_budget: 0 },
  { name: 'Exeter City', reputation: 44, transfer_budget: 0 },
  { name: 'Fleetwood', reputation: 44, transfer_budget: 0 },
  { name: 'Leyton Orient', reputation: 41, transfer_budget: 0 },
  { name: 'Lincoln City', reputation: 46, transfer_budget: 0 },
  { name: 'Northampton Town', reputation: 43, transfer_budget: 0 },
  { name: 'Oxford Utd', reputation: 50, transfer_budget: 0 },
  { name: 'Peterborough', reputation: 51, transfer_budget: 0 },
  { name: 'Portsmouth', reputation: 53, transfer_budget: 0 },
  { name: 'Port Vale', reputation: 44, transfer_budget: 0 },
  { name: 'Reading', reputation: 56, transfer_budget: 0 },
  { name: 'Shrewsbury', reputation: 45, transfer_budget: 0 },
  { name: 'Stevenage', reputation: 39, transfer_budget: 0 },
  { name: 'Wigan Athletic', reputation: 51, transfer_budget: 0 },
  { name: 'Wycombe', reputation: 50, transfer_budget: 0 }
]

league_one_teams.each do |team|
  league_one.teams.create(team)
end

# EFL League Two
league_two = england.leagues.create(
  name: 'EFL League Two',
  relegation_count: nil,
  tier: 4,
  transfer_budget_multiplier: 25000
)

league_two_teams = [
  { name: 'Accrington Stanley', reputation: 44, transfer_budget: 0 },
  { name: 'AFC Wimbledon', reputation: 43, transfer_budget: 0 },
  { name: 'Barrow', reputation: 35, transfer_budget: 0 },
  { name: 'Bradford City', reputation: 43, transfer_budget: 0 },
  { name: 'Colchester', reputation: 41, transfer_budget: 0 },
  { name: 'Crawley Town', reputation: 39, transfer_budget: 0 },
  { name: 'Crewe Alexandra', reputation: 42, transfer_budget: 0 },
  { name: 'Doncaster Rovers', reputation: 44, transfer_budget: 0 },
  { name: 'Forest Green', reputation: 44, transfer_budget: 0 },
  { name: 'Gillingham', reputation: 44, transfer_budget: 0 },
  { name: 'Grimsby Town', reputation: 40, transfer_budget: 0 },
  { name: 'Harrogate Town', reputation: 35, transfer_budget: 0 },
  { name: 'Mansfield Town', reputation: 42, transfer_budget: 0 },
  { name: 'MK Dons', reputation: 51, transfer_budget: 0 },
  { name: 'Morecambe', reputation: 41, transfer_budget: 0 },
  { name: 'Newport County', reputation: 41, transfer_budget: 0 },
  { name: 'Notts County', reputation: 39, transfer_budget: 0 },
  { name: 'Salford City', reputation: 42, transfer_budget: 0 },
  { name: 'Stockport', reputation: 39, transfer_budget: 0 },
  { name: 'Sutton United', reputation: 36, transfer_budget: 0 },
  { name: 'Swindon Town', reputation: 44, transfer_budget: 0 },
  { name: 'Tranmere', reputation: 43, transfer_budget: 0 },
  { name: 'Walsall', reputation: 41, transfer_budget: 0 },
  { name: 'Wrexham', reputation: 40, transfer_budget: 0 }
]

league_two_teams.each do |team|
  league_two.teams.create(team)
end

# Spain - La Liga
la_liga = spain.leagues.create(
  name: 'La Liga',
  relegation_count: nil,
  tier: 1,
  transfer_budget_multiplier: 400000
)

la_liga_teams_data = [
  { name: 'Alavés', reputation: 66, transfer_budget: 0 },
  { name: 'Almería', reputation: 66, transfer_budget: 0 },
  { name: 'Athletic Club', reputation: 75, transfer_budget: 0 },
  { name: 'Atlético Madrid', reputation: 86, transfer_budget: 0 },
  { name: 'Barcelona', reputation: 90, transfer_budget: 0 },
  { name: 'Cádiz', reputation: 65, transfer_budget: 0 },
  { name: 'Celta Vigo', reputation: 69, transfer_budget: 0 },
  { name: 'Getafe', reputation: 68, transfer_budget: 0 },
  { name: 'Girona', reputation: 63, transfer_budget: 0 },
  { name: 'Granada', reputation: 64, transfer_budget: 0 },
  { name: 'Las Palmas', reputation: 63, transfer_budget: 0 },
  { name: 'Mallorca', reputation: 64, transfer_budget: 0 },
  { name: 'Osasuna', reputation: 67, transfer_budget: 0 },
  { name: 'Rayo Vallecano', reputation: 65, transfer_budget: 0 },
  { name: 'Real Betis', reputation: 73, transfer_budget: 0 },
  { name: 'Real Madrid', reputation: 92, transfer_budget: 0 },
  { name: 'Real Sociedad', reputation: 76, transfer_budget: 0 },
  { name: 'Sevilla', reputation: 80, transfer_budget: 0 },
  { name: 'Valencia', reputation: 76, transfer_budget: 0 },
  { name: 'Villarreal', reputation: 79, transfer_budget: 0 }
]

la_liga_teams_data.each do |team_data|
  la_liga.teams.create(team_data)
end

# Germany - Bundesliga
bundesliga = germany.leagues.create(
  name: 'Bundesliga',
  relegation_count: nil,
  tier: 1,
  transfer_budget_multiplier: 300000
)

bundesliga_teams_data = [
  { name: 'Bayer Leverkusen', reputation: 77, transfer_budget: 0 },
  { name: 'Borussia Dortmund', reputation: 84, transfer_budget: 0 },
  { name: 'Darmstadt', reputation: 58, transfer_budget: 0 },
  { name: 'Eintracht Frankfurt', reputation: 73, transfer_budget: 0 },
  { name: 'FC Augsburg', reputation: 70, transfer_budget: 0 },
  { name: 'FC Bayern', reputation: 91, transfer_budget: 0 },
  { name: 'FC Köln', reputation: 71, transfer_budget: 0 },
  { name: 'FSV Mainz', reputation: 71, transfer_budget: 0 },
  { name: 'Gladbach', reputation: 76, transfer_budget: 0 },
  { name: 'Heidenheim', reputation: 55, transfer_budget: 0 },
  { name: 'RB Leipzig', reputation: 75, transfer_budget: 0 },
  { name: 'SC Freiburg', reputation: 68, transfer_budget: 0 },
  { name: 'TSG Hoffenheim', reputation: 74, transfer_budget: 0 },
  { name: 'Union Berlin', reputation: 66, transfer_budget: 0 },
  { name: 'VfB Stuttgart', reputation: 72, transfer_budget: 0 },
  { name: 'VfL Bochum', reputation: 61, transfer_budget: 0 },
  { name: 'VfL Wolfsburg', reputation: 75, transfer_budget: 0 },
  { name: 'Werder Bremen', reputation: 70, transfer_budget: 0 }
]

bundesliga_teams_data.each do |team_data|
  bundesliga.teams.create(team_data)
end

# Italy - Serie A
serie_a = italy.leagues.create(
  name: 'Serie A',
  relegation_count: nil,
  tier: 1,
  transfer_budget_multiplier: 200000
)

serie_a_teams_data = [
  { name: 'AC Milan', reputation: 83, transfer_budget: 0 },
  { name: 'AS Roma', reputation: 81, transfer_budget: 0 },
  { name: 'Atalanta', reputation: 74, transfer_budget: 0 },
  { name: 'Bologna', reputation: 66, transfer_budget: 0 },
  { name: 'Cagliari', reputation: 64, transfer_budget: 0 },
  { name: 'Empoli', reputation: 63, transfer_budget: 0 },
  { name: 'Fiorentina', reputation: 73, transfer_budget: 0 },
  { name: 'Frosinone', reputation: 59, transfer_budget: 0 },
  { name: 'Genoa', reputation: 65, transfer_budget: 0 },
  { name: 'Hellas Verona', reputation: 66, transfer_budget: 0 },
  { name: 'Internazionale', reputation: 85, transfer_budget: 0 },
  { name: 'Juventus', reputation: 87, transfer_budget: 0 },
  { name: 'Lazio', reputation: 78, transfer_budget: 0 },
  { name: 'Lecce', reputation: 61, transfer_budget: 0 },
  { name: 'Monza', reputation: 62, transfer_budget: 0 },
  { name: 'Napoli', reputation: 80, transfer_budget: 0 },
  { name: 'Salernitana', reputation: 62, transfer_budget: 0 },
  { name: 'Sassuolo', reputation: 68, transfer_budget: 0 },
  { name: 'Torino', reputation: 68, transfer_budget: 0 },
  { name: 'Udinese', reputation: 66, transfer_budget: 0 }
]

serie_a_teams_data.each do |team_data|
  serie_a.teams.create(team_data)
end

ligue_1 = france.leagues.create(
  name: 'Ligue 1',
  tier: 1,
  transfer_budget_multiplier: 300000
)

ligue_1_teams = [
  { name: 'AS Monaco', reputation: 75, transfer_budget: 0 },
  { name: 'Brest', reputation: 64, transfer_budget: 0 },
  { name: 'Clermont', reputation: 63, transfer_budget: 0 },
  { name: 'FC Metz', reputation: 62, transfer_budget: 0 },
  { name: 'FC Nantes', reputation: 67, transfer_budget: 0 },
  { name: 'Havre AC', reputation: 58, transfer_budget: 0 },
  { name: 'Lille', reputation: 72, transfer_budget: 0 },
  { name: 'Lorient', reputation: 63, transfer_budget: 0 },
  { name: 'Lyon', reputation: 78, transfer_budget: 0 },
  { name: 'Marseille', reputation: 78, transfer_budget: 0 },
  { name: 'Montpellier', reputation: 66, transfer_budget: 0 },
  { name: 'OGC Nice', reputation: 71, transfer_budget: 0 },
  { name: 'Paris Saint-Germain', reputation: 88, transfer_budget: 0 },
  { name: 'RC Lens', reputation: 66, transfer_budget: 0 },
  { name: 'Reims', reputation: 65, transfer_budget: 0 },
  { name: 'Rennes', reputation: 73, transfer_budget: 0 },
  { name: 'Strasbourg', reputation: 66, transfer_budget: 0 },
  { name: 'Toulouse', reputation: 64, transfer_budget: 0 }
]

ligue_1_teams.each do |team_data|
  ligue_1.teams.create(team_data)
end

eredivisie = netherlands.leagues.create(
  name: 'Eredivisie',
  tier: 1,
  transfer_budget_multiplier: 125000
)

eredivisie_teams = [
  { name: 'Ajax', reputation: 79, transfer_budget: 0 },
  { name: 'Almere City', reputation: 51, transfer_budget: 0 },
  { name: 'AZ', reputation: 68, transfer_budget: 0 },
  { name: 'Excelsior', reputation: 49, transfer_budget: 0 },
  { name: 'FC Twente', reputation: 60, transfer_budget: 0 },
  { name: 'FC Utrecht', reputation: 66, transfer_budget: 0 },
  { name: 'FC Volendam', reputation: 50, transfer_budget: 0 },
  { name: 'Feyenoord', reputation: 70, transfer_budget: 0 },
  { name: 'Fortuna Sittard', reputation: 56, transfer_budget: 0 },
  { name: 'Go Ahead', reputation: 50, transfer_budget: 0 },
  { name: 'Heerenveen', reputation: 61, transfer_budget: 0 },
  { name: 'Heracles', reputation: 58, transfer_budget: 0 },
  { name: 'NEC', reputation: 55, transfer_budget: 0 },
  { name: 'PEC Zwolle', reputation: 57, transfer_budget: 0 },
  { name: 'PSV', reputation: 73, transfer_budget: 0 },
  { name: 'RKC', reputation: 52, transfer_budget: 0 },
  { name: 'Sparta', reputation: 58, transfer_budget: 0 },
  { name: 'Vitesse', reputation: 64, transfer_budget: 0 }
]

eredivisie_teams.each do |team_data|
  eredivisie.teams.create(team_data)
end

primeira_liga = portugal.leagues.create(
  name: 'Primeira Liga',
  tier: 1,
  transfer_budget_multiplier: 125000
)

primeira_liga_teams = [
  { name: 'Arouca', reputation: 55, transfer_budget: 0 },
  { name: 'Benfica', reputation: 82, transfer_budget: 0 },
  { name: 'Boavista', reputation: 61, transfer_budget: 0 },
  { name: 'Braga', reputation: 67, transfer_budget: 0 },
  { name: 'Casa Pia', reputation: 55, transfer_budget: 0 },
  { name: 'Chaves', reputation: 56, transfer_budget: 0 },
  { name: 'Estoril', reputation: 58, transfer_budget: 0 },
  { name: 'Estrela da Amadora SAD', reputation: 53, transfer_budget: 0 },
  { name: 'Famalicão', reputation: 58, transfer_budget: 0 },
  { name: 'Farense', reputation: 59, transfer_budget: 0 },
  { name: 'Gil Vicente', reputation: 59, transfer_budget: 0 },
  { name: 'Moreirense', reputation: 57, transfer_budget: 0 },
  { name: 'Portimonense', reputation: 57, transfer_budget: 0 },
  { name: 'FC Porto', reputation: 83, transfer_budget: 0 },
  { name: 'Rio Ave', reputation: 58, transfer_budget: 0 },
  { name: 'Sporting CP', reputation: 72, transfer_budget: 0 },
  { name: 'Vitória Guimarães', reputation: 63, transfer_budget: 0 },
  { name: 'Vizela', reputation: 53, transfer_budget: 0 }
]

primeira_liga_teams.each do |team_data|
  primeira_liga.teams.create(team_data)
end

# test player on vizela
primeira_liga.teams.last.players.create(first_name:"John", last_name:"Doe", age:21, position: :GK)
puts 'Leagues and teams seeded successfully!'

