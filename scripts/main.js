

//// TODO: Put all on vanilla js or all on jquery!!

var stickyOffset = $('.sticky-nav').offset().top;

$(window).scroll(function(){
  var sticky = $('.sticky-nav'), scroll = $(window).scrollTop()

  if (scroll >= stickyOffset)
    sticky.addClass('top')
  else
    sticky.removeClass('top')
})

window.addEventListener('load', function(){
  var allimages= document.getElementsByTagName('img');
  for (var i=0; i<allimages.length; i++) {
    if (allimages[i].getAttribute('data-src')) {
      allimages[i].setAttribute('src', allimages[i].getAttribute('data-src'));
    }
  }
}, false)

function showImage(element) {
  document.getElementById("imageModal").src = element.src;
  document.getElementById("imageModalWindow").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}
