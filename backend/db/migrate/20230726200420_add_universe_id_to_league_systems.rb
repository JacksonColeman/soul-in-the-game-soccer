class AddUniverseIdToLeagueSystems < ActiveRecord::Migration[7.0]
  def change
    add_reference :league_systems, :universe, null: false, foreign_key: true
  end
end
