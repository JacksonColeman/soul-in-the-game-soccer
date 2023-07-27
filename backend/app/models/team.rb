class Team < ApplicationRecord
    belongs_to :league
    belongs_to :user, optional: true
    has_many :players
    has_one :stadium
    has_one :standings_info
    has_one :manager
end
