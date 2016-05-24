$(document).ready(function() {
  $('#particles').particleground({
    dotColor: '#517DCA',
    lineColor: '#517DCA'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});