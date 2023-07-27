class AddUserIdToUniverses < ActiveRecord::Migration[7.0]
  def change
    add_reference :universes, :user, null: false, foreign_key: true
  end
end
