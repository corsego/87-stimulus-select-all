Rails.application.routes.draw do
  resources :users do
    collection do
      patch :bulk_update
    end
  end
  root 'users#index'
end
