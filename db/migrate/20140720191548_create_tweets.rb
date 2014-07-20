class CreateTweets < ActiveRecord::Migration
  def change
    create_table :tweets do |column|
      column.string :content, :username, :handle
      column.timestamps
    end
  end
end
