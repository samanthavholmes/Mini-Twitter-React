var Trend = React.createClass({
  handleClick: function(e) {
    e.preventDefault();
    var url = "http://localhost:3000/tweets/search/" + this.props.trend.name
    $.ajax({
      url: url
    }).done(function(response){
      this.props.onSelect(response)
    }.bind(this))
  },

  render: function() {
    return (
      <li><a href= "#" onClick={this.handleClick} onSelect={this.props.onSelect}>{this.props.trend.name}</a></li>
    )
  }
})