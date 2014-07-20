class TweetsController < ApplicationController
  def recent
    tweets = Tweet.order("created_at DESC").limit(50)
    render json: tweets
  end
end