$(document).ready(function(){
    

var product=[{"productImage":"banner.jpeg","imgurl":"http://img5a.flixcart.com/image/shirt/g/z/s/873182-roadster-s-400x400-imaee3fpusraxz8y.jpeg","MRP":"$99","Rate":"$999"},{"productImage":"bannerjson2.jpeg","imgurl":"http://img6a.flixcart.com/image/fabric/d/d/j/sg-227-shree-ganesh-400x400-imae3fsr9xepcszv.jpeg","MRP":"$89","Rate":"$99"},{"productImage":"bannerjson3.jpeg","imgurl":"http://img6a.flixcart.com/image/sari/s/r/g/1-1-bg0008-bluegene-275x340-imaeagfmhkvzc5cf.jpeg","MRP":"$19","Rate":"$59"},{"productImage":"bannerjson4.jpeg","imgurl":"http://img5a.flixcart.com/image/jean/6/e/k/bhdb5029-black-being-human-40-275x340-imaebxu9ec7ghysw.jpeg","MRP":"$56","Rate":"$123"},{"productImage":"bannerjson5.jpeg","imgurl":"http://img6a.flixcart.com/image/short/g/j/u/9411ch-mel-shred1-jockey-m-275x340-imaebpa3tyfcsycv.jpeg","MRP":"$69","Rate":"$899"}];
    
var change_img_time = 3000,
    transition_speed = 400;

var listItems = $("#slider").children('li'),
      dotItems = $('#dots').children('li'),
      listLen = listItems.length,
      current,count=0,
      changeTimeout;
var van=document.getElementById('mrp');
var pin=document.getElementById('disc');
//var jin=document.getElementById('chanti');

changeTimeout = setTimeout(function() { moveTo('next'); }, change_img_time); 

    function moveTo(newIndex) {
        count=count+change_img_time;
        if(count>=30000){
             clearTimeout(changeTimeout);
            }else{
                var i = newIndex;
                if (newIndex == 'prev') {
                    i = (current > 0) ? (current - 1) : (listLen - 1);
                    }
                if (newIndex == 'next') {
                    i = (current < listLen - 1) ? (current + 1) : 0;
                    }
                van.innerHTML=product[i].MRP;
                pin.innerHTML=product[i].Rate;
                // jin.innerHTML=product[i].imgurl;
                dotItems.removeClass('active')
                .eq(i).addClass('active');

               listItems.fadeOut(transition_speed)
               .eq(i).fadeIn(transition_speed);
                current = i; 
                $('#myAnchor').attr('href',$($('#dots li')[i]).find('a').attr('href'));
                
//                switch(current){
//                    case 0:
//                    document.getElementById("myAnchor").href = "http://img5a.flixcart.com/image/shirt/g/z/s/873182-roadster-s-400x400-imaee3fpusraxz8y.jpeg";
//                        break;
//                    case 1:
//                        document.getElementById("myAnchor").href = "http://img6a.flixcart.com/image/fabric/d/d/j/sg-227-shree-ganesh-400x400-imae3fsr9xepcszv.jpeg";
//                        break;
//                    case 2:
//                        document.getElementById("myAnchor").href = "http://img6a.flixcart.com/image/sari/s/r/g/1-1-bg0008-bluegene-275x340-imaeagfmhkvzc5cf.jpeg";
//                        break;
//                    case 3:
//                        document.getElementById("myAnchor").href = "http://img5a.flixcart.com/image/jean/6/e/k/bhdb5029-black-being-human-40-275x340-imaebxu9ec7ghysw.jpeg";
//                        break;
//                    case 4:
//                        document.getElementById("myAnchor").href = "http://img6a.flixcart.com/image/short/g/j/u/9411ch-mel-shred1-jockey-m-275x340-imaebpa3tyfcsycv.jpeg";
//                        break;
//                    
//                    
//                }
                
                
                clearTimeout(changeTimeout);
                changeTimeout = setTimeout(function() { moveTo('next'); }, change_img_time);
                 }
         };
    
      $("#dots li").hover(function () {
          var i = $('#dots li').index(this);
          if (i== 'prev') {
              i = (current > 0) ? (current - 1) : (listLen - 1);
              }
          if (i == 'next') {
              i = (current < listLen - 1) ? (current + 1) : 0;
              }
          
          $('#myAnchor').attr('href',$($('#dots li')[i]).find('a').attr('href'));
          van.innerHTML=product[i].MRP;
          pin.innerHTML=product[i].Rate;
          //jin.innerHTML=product[i].imgurl;
          dotItems.removeClass('active')
          .eq(i).addClass('active');
          listItems.fadeOut(transition_speed)
          .eq(i).fadeIn(transition_speed);
           current = i;
          // timer.pause();
          clearTimeout(changeTimeout);
          }
                          ,function () {
          changeTimeout = setTimeout(function() { moveTo('next'); }, change_img_time);
          });
    });
    
