class AddYearToPlayerseasonstat < ActiveRecord::Migration[7.0]
  def change
    add_column :player_season_stats, :year, :integer
  end
end
