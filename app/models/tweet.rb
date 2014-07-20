class Tweet < ActiveRecord::Base
  attr_accessible :content, :avatar_url, :username, :handle
  has_many :tweet_tags
  has_many :hashtags, through: :tweet_tags
end