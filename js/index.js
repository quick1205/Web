$(window).scroll(function(){
    if ($(window).scrollTop() > 800)
        $('nav').addClass("fixed")
    else
        $('nav').removeClass("fixed")
})
$(document).ready(function(){
    $(".share").click(function(){
        $(".shared").fadeIn()
        setTimeout(function(){
            $(".shared").fadeOut()
        }, 1000)
    })
    $(".like").click(function(){
        $(".liked").fadeIn()
        setTimeout(function(){
            $(".liked").fadeOut()
        }, 1000)
    })
    $(".shop").click(function(){
        $(".shopped").fadeIn()
        setTimeout(function(){
            $(".shopped").fadeOut()
        }, 1000)
    })
    $("#send").submit(function(){
        $(".check").fadeIn()
        setTimeout(function(){
            $(".check").fadeOut()
        }, 1000)
        return false
    })
    $(".comments-icon").click(function(){
        $("#robot").fadeToggle()
    })
    $(".p1m1").click(function(){
        $("#News").fadeToggle()
    })
})
$(document).ready(function(){
    let recipeCarousel = document.getElementById("recipeCarousel")
    if (recipeCarousel){
        let slide = document.getElementsByClassName("carousel-item")
        if (slide.length > 0){
            slide[0].classList.add("active")
        }
    }
})
function addComment(){
    const Name = document.getElementById("Name").value
    const Email = document.getElementById("Email").value
    const Text = document.getElementById("Text").value

    if (Name && Email && Text){
        const cC =document.getElementById("cC")
        const cE = document.createElement("div")

        cC.append(cE)
        cE.innerHTML = `<b>| ${Name} (${Email})：</b><br>${Text}<br>`
    }
}
function enterl(keyCode){
    if (keyCode == 13){
        keyin ({which :13})
    }
}
function keyin(event){
    var keyCode = event.which
    if(keyCode == 13){
        $("#r-c").append("<div class='cus'>" + document.getElementById("say").value + "</div>")
        $("#r-c").val("")
        answer()
    }
}
function answer(){
    var div = document.getElementById("r-c")
    var he = div.scrollHeight
    
    setTimeout(function (){
        $("#r-c").append(QA())
        $("#r-c").scrollTop(he)
    }, 500)
}
function QA(){
    var c = Math.floor(Math.random() * 4)

    switch (c){
        case 0:
            return "<div class='staff'>處理中。請稍後</div>"
        case 1:
            return "<div class='staff'>小編快處理好啦！再等等我</div>"
        case 2:
            return "<div class='staff'>小編現在有點事，對不起，等我一下</div>"
        case 3:
            return "<div class='staff'>小編快到了，再等1分鐘</div>"
    }
}
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
 
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 5000); 
}