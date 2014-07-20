require 'spec_helper'


describe TweetsController do
  describe '#recent' do
    it "returns 50 tweets" do
      50.times do
        Tweet.create(content: 'some content')
      end
      get :recent

      expect(JSON.parse(response.body).length).to eq(50)
    end

    it "does not return older tweets" do
      Tweet.create(content: 'some other content')
      50.times do
        Tweet.create(content: 'some content')
      end
      get :recent

      expect(JSON.parse(response.body).length).to eq(50)
    end
  end

  describe '#search' do
    it "returns tweets associated with the given hashtag" do
      fake_hashtag = Hashtag.create(name: 'some name')
      unmatched_hashtag = Tweet.create
      5.times do
        fake_hashtag.tweets.create
      end
      get :search, keyword: fake_hashtag.name
      expect(JSON.parse(response.body).length).to eq(5)
    end
    it "returns a maximum of 50 tweets" do
      fake_hashtag = Hashtag.create(name: 'some name')
      51.times do
        fake_hashtag.tweets.create
      end
      get :search, keyword: fake_hashtag.name
      expect(JSON.parse(response.body).length).to eq(50)
    end

    it "returns status code 404 if the hashtag doesn't exist" do
      get :search, keyword: 'unlisted keyword'
      expect(response.status).to eq(404)
    end
  end


end