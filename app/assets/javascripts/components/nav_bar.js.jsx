var NavBar = React.createClass({
  render: function() {
    return (
      <header id="top-nav">
        <div id="brand">Lil Twitter API</div>
        <SearchBar/>
      </header>
    )
  }
})