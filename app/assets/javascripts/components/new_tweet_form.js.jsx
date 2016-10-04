var NewTweetForm = React.createClass({
  getInitialState: function () {
    return {
      tweet: ""
    }
  },

  handleChange: function(e) {
    this.setState({
      tweet: e.target.value
    })
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var data = {tweet: this.state.tweet.trim()}
    $.ajax({
      url: "tweets",
      method: "POST",
      data: data
    }).done(function(response){
        this.props.onUpdate(response)
    }.bind(this))
  },

  render: function() {
    return (
      <section id="tweet-box">
        <p id="tweet-box-title">Compose New Tweet</p>
        <form id="tweet-form" method="post" onSubmit={this.handleSubmit}>
          <textarea
            id="new-tweet"
            cols="30"
            rows="5"
            maxlength="140"
            name="tweet"
            value={this.state.tweet}
            onChange={this.handleChange}
            ></textarea>
          <input type="submit" value="Tweet"/>
        </form>
      </section>
    )
  }
})