$(window).load(function(){
    $('.collapse-btn').click(function(){
        setTimeout(function(){
            window.onresize();
        },800);
    })
    // $('#treeButton').click(function(){
    //     setTimeout(function(){
    //         window.onresize();
    //     },300);
    // })
});