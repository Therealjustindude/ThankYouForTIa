Rails.application.routes.draw do
  
  resources :orders
  resources :menu_selections
  resources :menu_items

  namespace :api do
    scope :v1 do
      mount_devise_token_auth_for 'User', at: 'auth'
    end
  end

end
