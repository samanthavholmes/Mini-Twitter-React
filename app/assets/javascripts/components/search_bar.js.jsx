var SearchBar = React.createClass({
  getInitialState: function() {
    return {
      query: ""
    }
  },

  handleChange: function (e) {
    this.setState({
      query: e.target.value
    })
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var url = "http://localhost:3000/tweets/search/" + this.state.query
    $.ajax({
      url: url
    }).done(function(response){
      this.props.onSearch(response)
  }.bind(this))},

  render: function() {
    return (
      <div>
      <form id="search-form" onSubmit={this.handleSubmit}>
        <input
          id="search"
          type="text"
          name="query"
          value={this.state.query}
          onChange={this.handleChange} />
      </form>
      <i class="fa fa-search"></i>
      </div>
    )
  }
})