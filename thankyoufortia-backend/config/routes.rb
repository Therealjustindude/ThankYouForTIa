Rails.application.routes.draw do
  resources :users
  resources :orders
  resources :menu_selections
  resources :menu_items

  resources :users, param: :_username
  post '/auth/login', to: 'authentication#login'
  get '/*a', to: 'application#not_found'
end
