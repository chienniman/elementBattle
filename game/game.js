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
    var count=0;
    btn.addEventListener('click',function(){
        count++;
        boss=Math.floor(Math.random()*5+1);
        messageBox.innerHTML= '玩家出的攻擊是'+`<span>${skills(index+1)}</span>`+'&nbsp&nbsp&nbsp&nbsp'+'boss的反擊是'+`<span>${skills(boss)}</span>`
        boss_message_box.innerHTML+=count+'-'+'boss的血量'+`<span>${boss_hp}</span>`+'&nbsp&nbsp'+'使用'+`<mark>${skills(boss)}</mark>`+'反擊'+'<br>'
    }
    )
}
)
//玩家與魔王技能代碼
function skills(num){
    if(num==1){
        return "水之刃"
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
