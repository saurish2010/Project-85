canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");

r_width=80;
r_height=100;

rover_x=10;
rover_y=360;
b_image="parkingLot.jpg"
console.log("b_image="+b_image);
r_image="car2.png";
function add()
{
   bg=new Image(); 
   bg.onload=uploadbackground;
   bg.src=b_image;

   r=new Image(); 
   r.onload=uploadrover;
   r.src=r_image;
}
function uploadbackground()
{
    ctx.drawImage(bg,0,0,canvas.width,canvas.height);
}
function uploadrover()
{
    ctx.drawImage(r,rover_x,rover_y,r_width,r_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=='37')
    {
        left();
        console.log("left");
    }
    if(keypressed=='38')
    {
        up();
        console.log("up");
    }
    if(keypressed=='39')
    {
        right();
        console.log("right");
    }
    if(keypressed=='40')
    {
        down();
        console.log("down");
    }
}
function up()
{
    if(rover_y>=10)
    {
        rover_y=rover_y-10;
        console.log("when up arrow is pressed="+rover_x+"|"+rover_y);
        uploadbackground();
        uploadrover();
    }
}
function down()
{
    if(rover_y<=500)
    {
        rover_y=rover_y+10;
        console.log("when up arrow is pressed="+rover_x+"|"+rover_y);
        uploadbackground();
        uploadrover();
    }
}
function right()
{
    if(rover_x<=700)
    {
        rover_x=rover_x+10;
        console.log("when up arrow is pressed="+rover_x+"|"+rover_y);
        uploadbackground();
        uploadrover();
    }
}
function left()
{
    if(rover_x>=0)
    {
        rover_x=rover_x-10;
        console.log("when up arrow is pressed="+rover_x+"|"+rover_y);
        uploadbackground();
        uploadrover();
    }
}