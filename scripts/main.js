
var headerHeight = 0;

function updateMargin() {
    headerHeight = document.getElementsByTagName("HEADER")[0].scrollHeight
    document.getElementsByTagName("MAIN")[0].style.marginTop =  headerHeight+"px"
}

  document.getElementsByTagName("BODY")[0].onresize = updateMargin
  
  updateMargin()
/*
  function scrollEvent() {
    let title = document.getElementById('title')

    console.log(document.documentElement.scrollTop)

    if (document.documentElement.scrollTop > 1) {
      title.classList.add("smaller");
    } else {
      title.classList.remove("smaller");
    }

    setTimeout(updateMargin(), 1001);
    
}

 window.addEventListener('scroll', scrollEvent)
*/