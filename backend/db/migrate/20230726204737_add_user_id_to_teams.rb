class AddUserIdToTeams < ActiveRecord::Migration[7.0]
  def change
    add_reference :teams, :user, foreign_key: true, null: true
  end
end
