class CreatePlayerAttributes < ActiveRecord::Migration[7.0]
  def change
    create_table :player_attributes do |t|
      t.integer :gk_agility
      t.integer :gk_handling
      t.integer :gk_kicking
      t.integer :gk_positioning
      t.integer :gk_reach
      t.integer :gk_reflexes
      t.integer :defending
      t.integer :mental
      t.integer :passing
      t.integer :physical
      t.integer :shooting
      t.integer :speed

      t.timestamps
    end
  end
end
