var TweetList = React.createClass({
  getInitialState: function() {
    return {tweets: []}
  },

  render: function() {
    var tweets = this.props.tweets;
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