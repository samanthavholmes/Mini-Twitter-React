class TweetsController < ApplicationController
  def recent
    tweets = Tweet.order("created_at DESC").limit(50).to_json(methods: :hashtag_names)
    render json: tweets
  end
end