//responsive nav
$(document).ready(function() {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
  
    });
  });


//owl carousel
jQuery(document).ready(function($) {
    // smooth scrolling
    $('a').click(function(){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
        return false;
    });

    "use strict";
    //  TESTIMONIALS CAROUSEL HOOK
    $('.owl-carousel').owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots:false,
        autoplayTimeout: 4000,
        smartSpeed: 450,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          1170: {
            items: 3
          }
        }
    });
  });

//pricing js

  function myFunction(){
  var chooseIssue = $("#select-issue").val();
  var chooseDevice = $("#select-device").val();

  if (chooseIssue == "screen" && chooseDevice =="8plus"){
  $("#total-price-text").text("Our Price:$149");
  } if (chooseIssue == "battery" && chooseDevice =="8plus"){
  $("#total-price-text").text("Our Price:$80");
  $("#warranty-text").text("90 Day Warranty");
  } if (chooseIssue == "screen" && chooseDevice =="8"){
  $("#total-price-text").text("Our Price:$139");
  } if (chooseIssue == "battery" && chooseDevice =="8"){
  $("#total-price-text").text("Our Price:$70");
  $("#warranty-text").text("90 Day Warranty");
  } if (chooseIssue == "screen" && chooseDevice =="7plus"){
  $("#total-price-text").text("Our Price:$109");
  } if (chooseIssue == "battery" && chooseDevice =="7plus"){
  $("#total-price-text").text("Our Price:$70");
  $("#warranty-text").text("90 Day Warranty");
  } if (chooseIssue == "screen" && chooseDevice =="7"){
  $("#total-price-text").text("Our Price:$109");
  } if (chooseIssue == "battery" && chooseDevice =="7"){
  $("#total-price-text").text("Our Price:$70");
  $("#warranty-text").text("90 Day Warranty");
  } if (chooseIssue == "screen" && chooseDevice =="6splus"){
  $("#total-price-text").text("Our Price:$99");
  } if (chooseIssue == "battery" && chooseDevice =="6splus"){
  $("#total-price-text").text("Our Price:$65");
  $("#warranty-text").text("90 Day Warranty");
  } if (chooseIssue == "screen" && chooseDevice =="6s"){
  $("#total-price-text").text("Our Price: $99");
  } if (chooseIssue == "battery" && chooseDevice =="6s"){
  $("#total-price-text").text("Our Price:$60");
  $("#warranty-text").text("90 Day Warranty");
  } if (chooseIssue == "screen" && chooseDevice =="SE"){
  $("#total-price-text").text("Our Price:$70");
  } if (chooseIssue == "screen" && chooseDevice =="SE"){
  $("#total-price-text").text("Our Price:$65");
  } if (chooseIssue == "screen" && chooseDevice =="6plus"){
  $("#total-price-text").text("Our Price:$90");
  } if (chooseIssue == "battery" && chooseDevice =="6plus"){
  $("#total-price-text").text("Our Price:$60");
  $("#warranty-text").text("90 Day Warranty");
  } if (chooseIssue == "screen" && chooseDevice =="6"){
  $("#total-price-text").text("Our Price:$80");
  } if (chooseIssue == "battery" && chooseDevice =="6"){
  $("#total-price-text").text("Our Price:$50");
  $("#warranty-text").text("90 Day Warranty");
  } if (chooseIssue == "screen" && chooseDevice =="5s"){
  $("#total-price-text").text("Our Price:$70");
  } if (chooseIssue == "battery" && chooseDevice =="5s"){
  $("#total-price-text").text("Our Price:$50");
  $("#warranty-text").text("90 Day Warranty");
  } if (chooseIssue == "screen" && chooseDevice =="5"){
  $("#total-price-text").text("Our Price:$70");
  } if (chooseIssue == "battery" && chooseDevice =="5"){
  $("#total-price-text").text("Our Price:$45");
  $("#warranty-text").text("90 Day Warranty");
  } if (chooseIssue == "battery" && chooseDevice == "x"){
  $("#total-price-text").text("Our Price:$89");
  $("#warranty-text").text("90 Day Warranty");
  } if (chooseIssue == "screen" && chooseDevice == "x"){
  $("#total-price-text").text("Our Price:$259")
  } if (chooseIssue == "screen" && chooseDevice == "xs"){
  $("#total-price-text").text("Our Price:$280")
  } if (chooseIssue == "screen" && chooseDevice == "xsmax"){
  $("#total-price-text").text("Our Price:$330")
  } if (chooseIssue == "screen" && chooseDevice == "xr"){
  $("#total-price-text").text("Our Price:$200")
  } if (chooseIssue == "battery" && chooseDevice == "xsmax"){
  $("#total-price-text").text("Our Price:$92")
  } if (chooseIssue == "battery" && chooseDevice == "xs"){
  $("#total-price-text").text("Our Price:$87")
  } if (chooseIssue == "battery" && chooseDevice == "xr"){
  $("#total-price-text").text("Our Price:$79")
  } if (chooseDevice == "x"){
  $("#select-color").hide();
  } else{
  $("#select-color").show();
  }
  
  // hide color on iphone x models
  if (chooseDevice == "x"){
    $("#select-color").hide();
} 
else if (chooseDevice == "xs"){
    $("#select-color").hide();
}
else if (chooseDevice == "xsmax"){
    $("#select-color").hide();
} 
else if (chooseDevice == "xr"){
    $("#select-color").hide();
}
else{
    $("#select-color").show();
}

$("#phone").inputmask({"mask": "(999) 999-9999"});

  var selectIpadDevice = $("#select-ipad-device").val();
  var selectIpadIssue = $("#select-ipad-issue").val();
  //ipad if statements
  if (selectIpadIssue == "screen" && selectIpadDevice =="mini4"){
  $("#total-price-text-ipad").text("Our Price:$249");
  } if (selectIpadIssue == "screen" && selectIpadDevice =="mini3"){
  $("#total-price-text-ipad").text("Our Price:$209");
  } if (selectIpadIssue == "screen" && selectIpadDevice =="mini2"){
  $("#total-price-text-ipad").text("Our Price:$159");
  } if (selectIpadIssue == "screen" && selectIpadDevice =="mini1"){
  $("#total-price-text-ipad").text("Our Price:$159");
  } if (selectIpadIssue == "screen" && selectIpadDevice =="ipad5"){
  $("#total-price-text-ipad").text("Our Price:$209");
  } if (selectIpadIssue == "screen" && selectIpadDevice =="air1"){
  $("#total-price-text-ipad").text("Our Price:$159");
  } if (selectIpadIssue == "screen" && selectIpadDevice =="air2"){
  $("#total-price-text-ipad").text("Our Price:$329");
  } if (selectIpadIssue == "screen" && selectIpadDevice =="pro"){
  $("#total-price-text-ipad").text("Our Price:$249");
  } if (selectIpadIssue == "screen" && selectIpadDevice =="ipad4"){
  $("#total-price-text-ipad").text("Our Price:$89");
  } if (selectIpadIssue == "screen" && selectIpadDevice =="ipad3"){                                                                                         $("#total-price-text-ipad").text("Our Price:$89");
  } if (selectIpadIssue == "screen" && selectIpadDevice =="ipad2"){
    $("#total-price-text-ipad").text("Our Price:$89")                                                                                             }

  }
$(function(){     
  var d = new Date(),        
      h = d.getHours(),
      m = d.getMinutes();
  if(h < 10) h = '0' + h; 
  if(m < 10) m = '0' + m; 
  $('input[type="time"][value="now"]').each(function(){ 
    $(this).attr({'value': h + ':' + m});
  });
});