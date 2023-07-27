class CreatePlayers < ActiveRecord::Migration[7.0]
  def change
    create_table :players do |t|
      t.integer :age
      t.integer :position
      t.string :first_name
      t.string :last_name
      t.integer :condition
      t.boolean :injured
      t.integer :injury_time
      t.boolean :transfer_listed

      t.timestamps
    end
  end
end
