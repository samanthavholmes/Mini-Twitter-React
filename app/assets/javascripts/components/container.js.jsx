var Container = React.createClass ({
  render: function() {
    return (
      <section className="container">
        <NewTweetForm/>
        <TrendList/>
        <TweetList/>
      </section>
      )
  }
})