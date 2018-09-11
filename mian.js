var reid1=document.getElementById('cans')
var context=reids.getContext('2d')
autoSetCanvasSize(reid1)
listenToMouse(reid1)
var eraserEnable=false
eraser.onclick=function(){
    eraserEnable=true
    actions.className='actions x'


}
brush.onclick=function(){
    eraserEnable=false
    action.className='actions'
}
function autoSetCanvasSize(canvas){
    autoSetCanvasSize()
    window.onresize=function(){
        autoSetCanvasSize()
    }
    function setCanvasSize(){
        var pageWidth=document.documentElement.clientWidth
        var pageHeight=document.documentElement.clientHeight
        canvas.width=pageWidth
        canvas.height=pageHeight
    }
}
function drawCircle(x,y,radius){
    context.beginPath()
    context.fillstyle='black'
    context.arc(x,y,radius,0,Math.PI*2)
    context.fill()
}
