function output(thought) {
    if(event.key === 'Enter') {
        document.getElementById("outtext").innerText = thought.value;       
    }
}
function generatenewtext(thought) {
    if(event.key === 'Enter') {
        var newfloatingtext = thought.value;
        var $newtag = $('<p class="floatingtext white-blurred-edge"></p>');
        $newtag.text(newfloatingtext);
        $newtag.appendTo($('#eraserboard'));
    }
}

// $(document).ready(function () {
//     animateDiv();
// });
// function generatenewtext(thought) {
//     var newfloatingtext = thought.value;
//     var $newtag = $('<p class="floatingtext white-blurred-edge"></p>');
//     $newtag.text(newfloatingtext);
//     $newtag.appendTo($('#eraserboard'));
//     var newq = makeNewPosition();
//     $newtag.css({ top: newq[0], left: newq[1] });
//     newq = makeNewPosition();
//     $newtag.animate({ top: newq[0], left: newq[1] }, 10000, 'swing', function () {
//         animateEachDiv(this);
//     });
// };
// function makeNewPosition() {
//     var h = $('#eraserboard').height() - 20;
//     var w = $('#eraserboard').width() - 20;
//     var nh = Math.floor(Math.random() * h);
//     var nw = Math.floor(Math.random() * w);
//     return [nh, nw];
// }
// function animateDiv() {
//     $('.floatingtext').each(function (index, obj) {
//         var newq = makeNewPosition();
//         $(obj).css({ top: newq[0], left: newq[1] });
//         newq = makeNewPosition();
//         $(obj).animate({ top: newq[0], left: newq[1] }, 10000, 'swing', function () {
//             animateEachDiv(this);
//         });
//     });
// };
// function animateEachDiv(each) {
//     var newq = makeNewPosition();
//     $(each).animate({ top: newq[0], left: newq[1] }, 10000, 'swing', function () {
//         animateEachDiv(this);
//     });
// }
