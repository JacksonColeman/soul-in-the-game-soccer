class Universe < ApplicationRecord
    belongs_to :user
    has_many :league_systems
end
