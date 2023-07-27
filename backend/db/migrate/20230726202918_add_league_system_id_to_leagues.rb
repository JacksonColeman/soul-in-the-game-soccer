class AddLeagueSystemIdToLeagues < ActiveRecord::Migration[7.0]
  def change
    add_reference :leagues, :league_system, null: false, foreign_key: true
  end
end
