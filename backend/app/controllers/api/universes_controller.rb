# app/controllers/api/universes_controller.rb
class Api::UniversesController < ApplicationController
  def show
    user = User.find(params[:user_id])
    render json: user.universe
  end
end