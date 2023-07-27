class LeagueSystem < ApplicationRecord
    belongs_to :universe
    has_many :leagues
end
