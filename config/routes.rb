TwitterDashboardApi::Application.routes.draw do
  get 'tweets/recent', to: 'tweets#recent'
  get 'tweets/search/:keyword', to: 'tweets#search'
  post 'tweets', to: 'tweets#create'
  get 'hashtags/popular', to: 'hashtags#popular'
end
