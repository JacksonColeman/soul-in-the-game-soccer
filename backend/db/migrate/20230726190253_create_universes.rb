class CreateUniverses < ActiveRecord::Migration[7.0]
  def change
    create_table :universes do |t|
      t.integer :year
      t.integer :week
      t.integer :game_state
      t.integer :week_state

      t.timestamps
    end
  end
end
