# app/controllers/api/players_controller.rb
class Api::PlayersController < ApplicationController
    def index
      user = User.find(params[:user_id])
      players = user.universe.league_systems.flat_map { |ls| ls.leagues.flat_map { |league| league.teams.flat_map(&:players) } }
        render json: players
    end
  end