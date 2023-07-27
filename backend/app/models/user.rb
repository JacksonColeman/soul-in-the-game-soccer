class User < ApplicationRecord
    has_one :universe
    has_one :team
  
    after_create :create_universe_from_template
  
    private
  
    def create_universe_from_template
      # Assuming the template universe has an ID of 1, you can adjust this ID as per your database setup.
      template_universe = Universe.find(1) # Change 1 to the actual ID of the template universe
      new_universe = template_universe.dup
      new_universe.user_id = id
      new_universe.save!
  
      # Duplicate league_systems and their associations (leagues, teams) from the template universe
      template_universe.league_systems.each do |template_ls|
        new_ls = template_ls.dup
        new_ls.universe_id = new_universe.id
        new_ls.save!
  
        # Duplicate leagues and their associations (teams) from the template league_system
        template_ls.leagues.each do |template_league|
          new_league = template_league.dup
          new_league.universe_id = new_universe.id
          new_league.league_system_id = new_ls.id
          new_league.save!
  
          # Duplicate teams from the template league
          template_league.teams.each do |template_team|
            new_team = template_team.dup
            new_team.universe_id = new_universe.id
            new_team.league_id = new_league.id
            new_team.save!
  
            # If teams have associations (e.g., players), you may need to duplicate them too and
            # associate them with the correct team in the new universe.
          end
        end
      end
    end
  end
  