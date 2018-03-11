Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show] do
      resources :photos, only: [:create, :update, :destroy, :index, :show]
    end
    resource :session, only: [:create, :destroy]
    resources :businesses, only: [:create, :update, :destroy, :index, :show] do
      resources :photos, only: [:create, :update, :destroy, :index, :show]
    end

  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
