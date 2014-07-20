class Tweet < ActiveRecord::Base
  has_many :tweet_tags
  has_many :hashtags, through: :tweet_tags
end