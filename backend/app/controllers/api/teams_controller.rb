# app/controllers/api/teams_controller.rb
class Api::TeamsController < ApplicationController
  def index
    user = User.find(params[:user_id])
    league = user.universe.league_systems.find(params[:league_id]).leagues.find(params[:league_id])
    teams = league.teams
    render json: teams
  end
end