random_number=Math.floor((Math.random()*quick_draw_data_set.length)+1);

console.log(Element_of_array = quick_draw_data_set[random_number]);

sketch=Element_of_array=quick_draw_data_set[random_number];

document.getElementById("draw").indexHTML='Sketch To be Drawn:'+sketch;

timer_counter=0;
timer_check="";
drawn_sketch="";
answer_holder="";
score=0;

function draw()
{
 check_sketch()
 if(drawn_sketch==sketch)
 {
    answer_holder="set";
    score=score+1;
    document.getElementById("score").innerHTML="Score:"+score;
 }
}

function check_sketch()
{
 timer_counter=timer_counter+1;
 document.getElementById("Timer").innerHTML="Timer:"+timer_counter;
 console.log(timer_counter);

 if(timer_counter>400)
 {
    timer_counter=0;
    timer_check="completed";
 }

 if(timer_check=="completed"||answer_holder=="set")
 {
    timer_check="";
    answer_holder="";
    updateCanvas();
 };
}

function updateCanvas()
{
    background("white");
}

function setup()
{
    canvas=createCanvas(280,280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas); 
}

function draw()
{
   strokeWeight(8);
   stroke("Black")
   if(mouseIsPressed)
    {
        line(pmouseX,pmouseY,mouseX,mouseY);
    } 
}
   function preload()
{
    classifier=ml5.imageClassifier('DoodleNet');

}

function classifyCanvas()
{
   classifier.classify(canvas,gotResult)
}

function gotResult(error,results)
{
 if(error)
 {
   console.error(error)
 }
 else
 {
 console.log(results);
 }
}