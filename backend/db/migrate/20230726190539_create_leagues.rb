class CreateLeagues < ActiveRecord::Migration[7.0]
  def change
    create_table :leagues do |t|
      t.string :name
      t.integer :tier
      t.integer :relegation_count
      t.float :transfer_budget_multiplier

      t.timestamps
    end
  end
end
