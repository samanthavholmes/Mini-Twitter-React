var TrendList = React.createClass({
  getInitialState: function() {
    return {
      trends: []
    }
  },

  componentWillMount: function() {
    $.ajax({
      url: 'hashtags/popular'
    }).done(function(response){
      this.setState({
        trends: response
      })
    }.bind(this))
  },

  render: function() {
    return (
    <section id="trends-container">
      <h3>Trends</h3>
        <ul>
        {this.state.trends.map(function(trend){
            return(
                <Trend trend={trend} onSelect={this.props.onSelect}/>
              )
          }.bind(this))}
        </ul>
    </section>
    )
  }
})