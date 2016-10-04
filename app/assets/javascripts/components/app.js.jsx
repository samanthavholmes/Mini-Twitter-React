var App = React.createClass ({
  getInitialState: function () {
    return {
      tweets: []
    }
  },

  componentWillMount: function() {
    $.ajax({
      url: 'http://localhost:3000/tweets/recent',
      dataType: 'json'
    }).done(function(response){
      this.setState({
        tweets: response
      });
    }.bind(this));
  },

  displaySearchedTweets: function(searchedTweets){
    this.setState({
      tweets: searchedTweets
    })
  },

  updateTweetList: function (newTweet) {
    this.setState({
      tweets: [newTweet].concat(this.state.tweets)
    })
  },

  render: function() {
    return (
      <section className="app">
        <header id="top-nav">
          <div id="brand">Lil Twitter API</div>
          <SearchBar onSearch={this.displaySearchedTweets}/>
        </header>

        <section className="container">
          <NewTweetForm onUpdate={this.updateTweetList} />
          <TrendList onSelect={this.displaySearchedTweets} />
          <TweetList tweets={this.state.tweets}/>
        </section>
      </section>
      )
  }
})