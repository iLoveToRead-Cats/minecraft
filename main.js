canvas = new fabric.Canvas("myCanvas");
block_img_width = 30;
block_img_height = 30;
player_x = 10;
player_y = 10;
var player_object = "";
function player_update() {
    fabric.Image.fromURL("player.png", function(Img) {
    player_object = Img;
    player_object.scaleTowidth(150);
    player_object.scaleToheight(140);
    player_object.set({top:player_y,left:player_x});
    canvas.add(player_object);
    }
    );
}

block_img_object= "";

function newImage(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        block_img_object = Img;
        block_img_object.scaleTowidth(block_img_width);
        block_img_object.scaleToheight(block_img_height);
        block_img_object.set({top:player_y,left:player_x});
        canvas.add(block_img_object);
        }
        );
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keyPressed = e.keycode;
    console.log(keyPressed);
    if (e.shiftKey==true && keyPressed=='80') {
        console.log("shift+p");
        block_img_height=block_img_height+10;
        block_img_width=block_img_width+10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;

    }
    if (e.shiftKey==true && keyPressed=='77') {
        console.log("shift+m");
        block_img_height=block_img_height-10;
        block_img_width=block_img_width-10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;

    }
    if (keyPressed=='30') {
        up();
        console.log("UP");
    }
    if (keyPressed=='40') {
        down();
        console.log("DOWN");
    }
    if (keyPressed=='37') {
        left();
        console.log("LEFT");
    }
    if (keyPressed=='39') {
        right();
        console.log("RIGHT");
    }
    if (keyPressed=='87') {
        newImage('wall.jpg');
        console.log("w");
    }
    if (keyPressed=='71') {
        newImage('ground.png');
        console.log("g");
    }
    if (keyPressed=='76') {
        newImage('light_green.png');
        console.log("l");
    }
    if (keyPressed=='84') {
        newImage('trunk.jpg');
        console.log("t");
    }
    if (keyPressed=='82') {
        newImage('roof.jpg');
        console.log("r");
    }
    if (keyPressed=='89') {
        newImage('yellow_wall.png');
        console.log("y");
    }
    if (keyPressed=='68') {
        newImage('dark_green.png');
        console.log("d");
    }
    if (keyPressed=='85') {
        newImage('unique.jpg');
        console.log("u");
    }
    if (keyPressed=='67') {
        newImage('cloud.jpg');
        console.log("c");
    }
     
}
function up() {
    if (player_y>=0) {
player_y = player_y - block_img_height;
canvas.remove(player_object);
player_update();
}
}
function down() {
    if (player_y<700) {
player_y = player_y + block_img_height;
canvas.remove(player_object);
player_update();
}
}
function left() {
    if (player_x>=0) {
player_x = player_x - block_img_width;
canvas.remove(player_object);
player_update();
}
}
function right() {
    if (player_x<=850) {
player_x = player_x + block_img_width;
canvas.remove(player_object);
player_update();
}
}