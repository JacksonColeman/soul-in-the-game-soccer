Rails.application.routes.draw do
  namespace :api do
    resources :users, param: :user_id, only: [:show, :create] do
      # Use 'member' instead of 'collection' for the show action
      member do
        get 'universe', to: 'universes#show', as: :universe_api
        get 'leagues', to: 'leagues#index', as: :leagues_api
        get 'league_systems', to: 'league_systems#index', as: :league_systems_api
        get 'teams', to: 'teams#index', as: :teams_api
        get 'players', to: 'players#index', as: :players_api
      end

      # Additional custom routes for login and logout
      collection do
        post 'login', to: 'users#login', as: :login_api
        delete 'logout', to: 'users#logout', as: :logout_api
      end
    end
  end
end
