class Player < ApplicationRecord
    belongs_to :team
    enum position: {GK:1,LB:2,CB:3,RB:4,LWB:5,CDM:6,RWB:7,LM:8,CM:9,RM:10,LW:11,CAM:12,RW:13,ST:14}
    has_many :player_season_stats
    has_one :player_attribute
end
