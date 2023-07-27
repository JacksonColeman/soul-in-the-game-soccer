class CreateStandingsInfos < ActiveRecord::Migration[7.0]
  def change
    create_table :standings_infos do |t|
      t.integer :year
      t.integer :wins
      t.integer :draws
      t.integer :losses
      t.integer :goalsFor
      t.integer :goalsAgainst

      t.timestamps
    end
  end
end
