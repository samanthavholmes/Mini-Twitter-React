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


end