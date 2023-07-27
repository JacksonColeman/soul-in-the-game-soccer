class Api::UsersController < ApplicationController
    def show
      user = User.find(params[:user_id])
      render json: user
    end
  
    # POST /api/users
    def create
      user = User.new(user_params)
  
      if user.save
        session[:user_id] = user.id
        render json: { user: user, message: 'User created successfully' }, status: :created
      else
        render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    # POST /api/users/login
    def login
      user = User.find_by(name: params[:name])
  
      if user
        session[:user_id] = user.id
        render json: { user: user, message: 'Login successful' }, status: :ok
      else
        render json: { error: 'Invalid name' }, status: :unauthorized
      end
    end
  
    # DELETE /api/users/logout
    def logout
      session[:user_id] = nil
      head :no_content
    end
  
    private
  
    def user_params
      params.require(:user).permit(:name)
    end
  end
  