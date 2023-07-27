# app/controllers/api/league_systems_controller.rb
class Api::LeagueSystemsController < ApplicationController
  def index
    user = User.find(params[:user_id])
    render json: user.universe.league_systems
  end
end