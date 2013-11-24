Reveal.addEventListener( 'ready', function( event ) {
  console.log("ready");
  var query = $('#api-query');
  update(query[0].value);
  query.change(function(evt) {
    var path = evt.target.value;
    update(path);
  });
  $('#start-demo').click(function (evt) {
    window.open('demo.html');
  });
});

function update(path) {
  console.log('path=' + path);
  var output = $('#api-output');
  output.text('');
  var base = 'https://marketplace.firefox.com';
  var url = base + path;
  $.get(url, function(data, textStatus, jqXHR) {
    output.text(JSON.stringify(data, null, '  '));
    hljs.highlightBlock(output[0]);
  });
} 
