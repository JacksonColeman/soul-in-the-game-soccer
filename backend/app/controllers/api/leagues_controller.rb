# app/controllers/api/leagues_controller.rb
class Api::LeaguesController < ApplicationController
  def index
    user = User.find(params[:user_id])
    leagues = user.universe.league_systems.flat_map(&:leagues)
    render json: leagues
  end
end