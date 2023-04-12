$(document).ready(function () {
    $("a").on("click", function (event) {
      if (this.hash !== "") {
        event.preventDefault();
  
        var hash = this.hash;
  
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          800,
          function () {
            window.location.hash = hash;
          }
        );
      }
    });
});

var counter = 1;
        setInterval(function (){
            document.getElementById('radio'+ counter).checked = true
            counter++;
            if(counter > 5)
            counter = 1;
        }, 6000);

const slideAnimation = new IntersectionObserver {(entries) => {
      entries.forEach (entry) => {
      console.log (entry)
      if (entry.isIntersecting){
        entry.target.classList.add ('play');
      } else {
        entry.target.classList.remove ('stop');
      }
    }
  }};