class Hashtag < ActiveRecord::Base
  attr_accessible :name
  validates :name, uniqueness: true
  has_many :tweet_tags
  has_many :tweets, through: :tweet_tags
end