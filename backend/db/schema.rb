# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_07_26_211913) do
  create_table "league_systems", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "universe_id", null: false
    t.index ["universe_id"], name: "index_league_systems_on_universe_id"
  end

  create_table "leagues", force: :cascade do |t|
    t.string "name"
    t.integer "tier"
    t.integer "relegation_count"
    t.float "transfer_budget_multiplier"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "league_system_id", null: false
    t.index ["league_system_id"], name: "index_leagues_on_league_system_id"
  end

  create_table "managers", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.integer "mentality"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "player_attributes", force: :cascade do |t|
    t.integer "gk_agility"
    t.integer "gk_handling"
    t.integer "gk_kicking"
    t.integer "gk_positioning"
    t.integer "gk_reach"
    t.integer "gk_reflexes"
    t.integer "defending"
    t.integer "mental"
    t.integer "passing"
    t.integer "physical"
    t.integer "shooting"
    t.integer "speed"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "player_season_stats", force: :cascade do |t|
    t.integer "matches_played"
    t.integer "goals"
    t.integer "assists"
    t.integer "goals_conceded"
    t.integer "clean_sheets"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "year"
  end

  create_table "players", force: :cascade do |t|
    t.integer "age"
    t.integer "position"
    t.string "first_name"
    t.string "last_name"
    t.integer "condition"
    t.boolean "injured"
    t.integer "injury_time"
    t.boolean "transfer_listed"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "team_id", null: false
    t.index ["team_id"], name: "index_players_on_team_id"
  end

  create_table "stadia", force: :cascade do |t|
    t.string "name"
    t.integer "capacity"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "standings_infos", force: :cascade do |t|
    t.integer "year"
    t.integer "wins"
    t.integer "draws"
    t.integer "losses"
    t.integer "goalsFor"
    t.integer "goalsAgainst"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "teams", force: :cascade do |t|
    t.string "name"
    t.float "reputation"
    t.integer "transfer_budget"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "league_id", null: false
    t.integer "user_id"
    t.index ["league_id"], name: "index_teams_on_league_id"
    t.index ["user_id"], name: "index_teams_on_user_id"
  end

  create_table "universes", force: :cascade do |t|
    t.integer "year"
    t.integer "week"
    t.integer "game_state"
    t.integer "week_state"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id", null: false
    t.index ["user_id"], name: "index_universes_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "league_systems", "universes"
  add_foreign_key "leagues", "league_systems"
  add_foreign_key "players", "teams"
  add_foreign_key "teams", "leagues"
  add_foreign_key "teams", "users"
  add_foreign_key "universes", "users"
end
