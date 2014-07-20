TwitterDashboardApi::Application.routes.draw do
  get 'tweets/recent', to: 'tweets#recent'
  get 'tweets/search/:keyword', to: 'tweets#search'
end
