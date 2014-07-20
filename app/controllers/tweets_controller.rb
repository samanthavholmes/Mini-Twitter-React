class TweetsController < ApplicationController
  def recent
    tweets = Tweet.order("created_at DESC").limit(50).to_json(methods: :hashtag_names)
    render json: tweets
  end

  def search
    hashtag = Hashtag.where(name: params[:keyword]).first
    if hashtag
      render json: hashtag.tweets.order("created_at DESC").limit(50).to_json(methods: :hashtag_names)
    else
      render :nothing => true, status: 404
    end
  end

end