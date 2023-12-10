var waterbk;
var f1,f2,f3,f4

function preload(){
waterbk=loadImage("wf.jpg")

f1=loadImage("fish1.png")
f2=loadImage("fish2.png")
f3=loadImage("fish3.png")
f4=loadImage("fish4.png")
sharkimg=loadImage("shark.png")

}

function setup(){
createCanvas(2000,755)
w1=createSprite(650,400,480,600)
w1.addImage(waterbk)
w1.scale=2.7


}

function draw(){
background("white")

spawnFish()
drawSprites()
}
function spawnFish(){
    if (frameCount%100===0){
    var fish=createSprite(1000,random(300,700),20,20)
    fish.velocityX=-10
    var r1=Math.round(random(1,4))
    switch(r1){
        case 1:fish.addImage(f1)
        break
        case 2:fish.addImage(f2)
        break
        case 3:fish.addImage(f3)
        break
        case 4:fish.addImage(f4)
        break
        default:break
    }
    fish.scale=0.5
    fish.lifetime=800
}

}