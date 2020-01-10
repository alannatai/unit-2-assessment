$(document).ready(function() {

  $('input[type="checkbox"]').click(function(e){
    if($(e.target).is(":checked")) {
      $(`li#${e.target.id}`).css('text-decoration', 'line-through');
      $.ajax({
        "async": true,
        "url": `https://peaceful-stream-96627.herokuapp.com//checkTodo/${e.target.id}`,
        "method": "PUT",
        "data": { "checked": true }
      })
        .done(function (response) {
          console.log(response);
          window.location.reload();
       });
    } else {
      $(`li#${e.target.id}`).css('text-decoration', 'none');
      $.ajax({
        "async": true,
        "url": `https://peaceful-stream-96627.herokuapp.com//checkTodo/${e.target.id}`,
        "method": "PUT",
        "data": { "checked": false }
      })
      .done(function (response) {
        console.log(response);
        window.location.reload();
     });
    }
  });
});
