var SearchBar = React.createClass({
  render: function() {
    return (
      <div>
      <form id="search-form">
        <input id="search" type="text" name="query"/>
      </form>
      <i class="fa fa-search"></i>
      </div>
    )
  }
})