var btn=document.querySelector('.btn')
var hpBar=document.querySelector('.hpBar')
var hp=300;
btn.addEventListener('click',function(){
     if(hp==0){
         hp=0;
         alert('您的召喚獸小痔已經被擊殺');
         var keepPlaying=confirm('是否重新開始')
         if(keepPlaying){
             window.location.reload();
         }else{
             alert('Game Over gg')
         }
     }else{
         hp-=30
     }
     container.hpStatus.width = hp;
     hpBar.innerHTML='小痔的剩餘血量是:'+hp
})
// 當玩家點擊使用技能時，相關戰鬥結果統計以及顯示
var boss;
var boss_hp=300;
var player=document.querySelectorAll('.buttons button')
var messageBox=document.querySelector('.message_box')
var boss_message_box=document.querySelector('.boss_message_box')
player.forEach((btn,index)=>{
    var count=1;
    btn.addEventListener('click',function(){
        boss_attack=skills(Math.floor(Math.random()*5+1))
        //boss隨機攻擊
        player_attack=skills(index+1)
        //player攻擊
        messageBox.innerHTML= 
        '玩家出的攻擊是'+`<span id="player_msg_color">${player_attack}</span>`+'&nbsp&nbsp&nbsp&nbsp'+'boss的反擊是'+`<span id="boss_msg_color">${boss_attack}</span>`
        boss_message_box.innerHTML+=`第${count}回&nbsp<br>`+'boss的血量'+`<span>${boss_hp}</span>`+'&nbsp&nbsp'+'使用'+boss_attack+'<br>'
        count++;
        //在頁面顯示boss、player出的招式
        var player_msg_color=document.querySelector('#player_msg_color')
        player_msg_color.style.color=color(player_attack)
        //根據玩家出的招改顏色
        var boss_msg_color=document.querySelector('#boss_msg_color')
        boss_msg_color.style.color=color(boss_attack)
    }
    )
}
)

//玩家與魔王技能代碼
function skills(num){
    if(num==1){
        return "水之刃";
    }else if(num==2){
        return "火之刃"
    }else if(num==3){
        return "風之刃"
    }else if(num==4){
        return "雷之刃"
    }else if(num==5){
        return "土之刃"
    }
}

//技能對應色碼，用於對話框的顏色顯示
function color(skill){
    if(skill=="水之刃"){
        return "blue"
    }else if(skill=="火之刃"){
        return "red"
    }else if(skill=="風之刃"){
        return "aqua"
    }else if(skill=="雷之刃"){
        return "yellowgreen"
    }else if(skill=="土之刃"){
        return "chocolate"
    }
}
//boss攻擊模式程式碼
function boss_attack_mode(boss_hp){
    if(boss_hp==300){
        return 2
    }else if(boss_hp>=220 && boss_hp<=240){
        return 5 
    }else if(boss_hp>=160 && boss_hp<=180){
        return 4 
    }else if(boss_hp>=80 && boss_hp<=100){
        return 1 
    }else if(boss_hp>=20 && boss_hp<=40){
        return 3 
    }else{
        boss=Math.floor(Math.random()*5+1)
        return boss
    }   
}
//玩家剩餘血量顯示 
const app = new PIXI.Application({
view: document.getElementById('main'),
width: 300,
height: 30,
antialias: true,
transparent: false,
});

const container = new PIXI.Container();
app.stage.addChild(container);

let graphics = new PIXI.Graphics();
graphics.beginFill(0x000000);
graphics.drawRoundedRect(0, 0, 300, 30, 10);
graphics.endFill();
container.addChild(graphics);

let graphics2 = new PIXI.Graphics();
graphics2.beginFill(0xFF0000);
graphics2.drawRoundedRect(0, 0, 300, 30, 10);
graphics2.endFill();
container.addChild(graphics2);
container.hpStatus = graphics2;

container.x =0;
container.y = 0;

container.hpStatus.width = hp;
