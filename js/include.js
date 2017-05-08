$(function(){
    var includes = $('.include');
    jQuery.each(includes, function(){
      var file = 'slides/' + $(this).data('include');
      $(this).load(file);
    });
});