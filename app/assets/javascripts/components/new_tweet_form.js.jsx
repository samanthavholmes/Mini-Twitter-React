var NewTweetForm = React.createClass({
  render: function() {
    return (
      <section id="tweet-box">
        <p id="tweet-box-title">Compose New Tweet</p>
        <form id="tweet-form">
          <textarea id="new-tweet" cols="30" rows="5" maxlength="140" name="tweet"></textarea>
          <input type="submit" value="Tweet"/>
        </form>
      </section>
    )
  }
})