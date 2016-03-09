$(function(){
  /* 画像ビューアにマウスホイールでの拡大縮小機能をつける */
  var deltasum = 0;
  var mousewheelevent = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
  $('.viewer').on(mousewheelevent, function (e) {
    e.preventDefault();
    var delta = e.originalEvent.deltaY ? -(e.originalEvent.deltaY) : e.originalEvent.wheelDelta ? e.originalEvent.wheelDelta : -(e.originalEvent.detail);
    if (delta < 0) {
      console.log(Math.abs(delta));
      $('.zoomer-zoom-out')
        .queue(function () {
        $('.zoomer-zoom-out').trigger('mousedown').dequeue();
      })
        .delay(Math.abs(delta))
        .queue(function () {
        $('.zoomer-zoom-out').trigger('mouseup').dequeue();
      });
    }
    if(delta > 0){
      console.log(delta);
      $('.zoomer-zoom-in')
        .queue(function () {
          $('.zoomer-zoom-in').trigger('mousedown').dequeue();
        })
        .delay(delta)
        .queue(function () {
          $('.zoomer-zoom-in').trigger('mouseup').dequeue();
        });
    }
  });
})
