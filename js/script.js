/* jQuery */

$(function () {
    function animationStart() {
        $('#container').addClass('fin');
    }
    setTimeout(animationStart, 500);


    // 페이지 로딩 시 바로 애니메이션 시작
    //setTimeout(animationStart, 1);

});

(function () {
    //skill bar

    let offset = $('#slide05').offset().top + 11300;
    let executed = false;

    $(window).scroll(function () {
        let wScroll = $(this).scrollTop();
        console.log(wScroll)
        if (wScroll > offset) {
            if (!executed) {
                $('.skill-per').each(function () {
                    let $this = $(this);
                    let per = $this.attr('per');
                    $this.css({
                        width: per + "%"
                    })
                    $({
                        aniValue: 0
                    }).animate({
                        aniValue: per
                    }, {
                        duration: 1000,
                        step: function () {
                            $this.attr("per", Math.ceil(this.aniValue) + "%")
                        }
                    })
                });
                executed = true;
            }


        }

    })

})();



function openFrame(openframe){
    let tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("indesign_work")
    // console.log(tabcontent);
  
    for(let i=0; i<tabcontent.length; i++){
        tabcontent[i].style.display="none";
    }
  
    document.getElementById(openframe).style.display="block";
  
  }
  
  document.getElementById('defaultOpen').click();



