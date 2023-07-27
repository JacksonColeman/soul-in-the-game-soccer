class CreateLeagueSystems < ActiveRecord::Migration[7.0]
  def change
    create_table :league_systems do |t|
      t.string :name

      t.timestamps
    end
  end
end
