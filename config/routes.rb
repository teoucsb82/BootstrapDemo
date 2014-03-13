NewAuthDemo::Application.routes.draw do
  root :to => "static_pages#home"

  get "static_pages/home"
  get "static_pages/contact"
  get "static_pages/about"
  resources :users, :only => [:create, :new, :show]
  resource :session, :only => [:create, :destroy, :new]
end
