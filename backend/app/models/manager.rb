class Manager < ApplicationRecord
    enum mentality: {very_defensive:-2, defensive:-1, balanced:0, attacking:1, very_attacking:2}
    belongs_to :team
end
