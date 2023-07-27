class CreatePlayerSeasonStats < ActiveRecord::Migration[7.0]
  def change
    create_table :player_season_stats do |t|
      t.integer :matches_played
      t.integer :goals
      t.integer :assists
      t.integer :goals_conceded
      t.integer :clean_sheets

      t.timestamps
    end
  end
end
