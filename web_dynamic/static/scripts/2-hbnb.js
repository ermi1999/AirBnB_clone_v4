$(document).ready(function () {
  let checked = {};
  $(document).on('change', "input[type='checkbox']", function () {
    if (this.checked) {
      checked[$(this).data('id')] = $(this).data('name');
    } else {
      delete checked[$(this).data('id')];
    }
    let list = Object.values(checked);
    if (list.length > 0) {
      $('div.amenities > h4').text(Object.values(checked).join(', '));
    } else {
      $('div.amenities > h4').html('&nbsp;');
    }
  });
  $.get('http://0.0.0.0:5001/api/v1/status/', function (data, status) {
    if (status === 'success') {
      if (data.status === 'OK') {
        $("#api_status").addClass('available');
      } else {
        $("#api_status").removeClass('available');
      }
    }
  });
});
