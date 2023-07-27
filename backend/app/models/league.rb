class League < ApplicationRecord
    belongs_to :league_system
    has_many :teams
end
