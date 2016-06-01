var TweetList = React.createClass({
  getInitialState: function() {
    return {tweets: []}
  },
  componentWillMount: function() {
    $.ajax({
      url: 'http://localhost:3000/tweets/recent',
      dataType: 'json'
    }).done(function(response){
      this.setState({tweets: response});
    }.bind(this));
  },
  render: function() {
    var tweets = this.state.tweets;
    return (
      <section id="tweets-container">
       <h3>Tweets</h3>
        <ul>
          {tweets.map(function(tweet){
            return(
                <Tweet key={tweet.id} tweet={tweet}/>
              )
          })}
        </ul>
      </section>
    )
  }
});