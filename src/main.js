$(function () {
  $('form').on('submit', function(e) {
    e.preventDefault();
    var id = $('#pokeName').val() || $('#pokeNum').val()
    $.ajax({
      method: 'GET', url: 'http://pokeapi.co/api/v2/pokemon/' + id
    }).done(function(pokemon) {
      var sprite = pokemon.sprites.front_default;
      var $img = $('<img src="' + sprite + '">');
      $('.pokemon.row').append($img);
    })
  })
});
