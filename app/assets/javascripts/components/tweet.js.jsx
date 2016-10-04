var Tweet = React.createClass({
  render: function() {
    return (
      <li className="tweet">
        <img className="avatar" src={this.props.tweet.avatar_url} alt=""/>
        <div className="tweet-content">
          <p>
            <span className="full-name">{this.props.tweet.username}</span>
            <span className="username">{this.props.tweet.handle}</span>
            <span className="timestamp">- 5m</span>
          </p>
          <p>{this.props.tweet.content}</p>
        </div>
      </li>
      )
  }
})

// trend list