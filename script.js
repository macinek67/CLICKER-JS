var timer = document.getElementById("timePlayed");
let seconds = 0;
let minutes = 0;
let hours = 0;
var seconds0 = "0" + seconds;
var minutes0 = "0" + minutes;
var hours0 = "0" + hours;
var achievement4 = $("#achievementProgresV4");
setInterval(function () { 
    seconds++;
    if(seconds==60)
    {
        minutes++;
        seconds-=60;
    }
    if(minutes==60)
    {
        hours++;
        minutes-=60;
    }
    if(seconds<10)
        seconds0 = "0" + seconds;
    else
        seconds0 = seconds;
    if(minutes<10)
        minutes0 = "0" + minutes;
    else
        minutes0 = minutes;
    if(hours<10)
        hours0 = "0" + hours;
    else
        minutes0 = minutes;
    timer.textContent = hours0 + ":" + minutes0 + ":" + seconds0;
    if(minutes>10 || hours>0)
        return;
    achievement4.css({"background": `linear-gradient(to left, transparent +${100-minutes*10}%, gold 0%)`});
    achievement4.attr('value', minutes + "/10");
},1000);

let clicks = 0;
let ScorePerClick = 1;
var clicksScore = document.getElementById("score");
var achievement3 = $("#achievementProgresV3");
var itemBoughtCount = 0;
itemBoughtCount = Math.min(10, Math.max(0, itemBoughtCount));

function clickerClicked()
{
    clicks += ScorePerClick;
    clicksScore.textContent = clicks + "$";
}

var buttonBuy1 = $("#buyButton");
buttonBuy1.mouseover(function(){buttonBuy1.attr('value', '250$');});
buttonBuy1.mouseleave(function(){buttonBuy1.attr('value', 'ZAKUP');});
buttonBuy1.click(function(){
    if(clicks>=1)
    {
        clicks-=1;
        ScorePerClick*=2;
        buttonBuy1.attr('value', 'ZAKUPIONO');
        buttonBuy1.prop( "disabled", true );
        clicksScore.textContent = clicks + "$";
        itemBoughtCount++;
        if(itemBoughtCount<=10)
        {
            achievement3.css({"background": `linear-gradient(to left, transparent +${100-itemBoughtCount*10}%, gold 0%)`});
            achievement3.attr('value', itemBoughtCount + "/10");
        }
    }
});

var buttonBuy2 = $("#buyButton1");
buttonBuy2.mouseover(function(){buttonBuy2.attr('value', '1250$');});
buttonBuy2.mouseleave(function(){buttonBuy2.attr('value', 'ZAKUP');});
let cashFromTimer = 0;
buttonBuy2.click(function(){
    if(clicks>=1)
    {
        clicks-=1;
        cashFromTimer=1;
        buttonBuy2.attr('value', 'ZAKUPIONO');
        buttonBuy2.prop( "disabled", true );
        clicksScore.textContent = clicks + "$";
        var achievement2 = $("#achievementProgresV2");
        let ticks = 0;
        itemBoughtCount++;
        if(itemBoughtCount<=10)
        {
            achievement3.css({"background": `linear-gradient(to left, transparent +${100-itemBoughtCount*10}%, gold 0%)`});
            achievement3.attr('value', itemBoughtCount + "/10");
        }
        setInterval(function () { 
            clicks+=cashFromTimer;
            clicksScore.textContent = clicks + "$";
            ticks+=cashFromTimer;
            if(ticks>300)
                return;
            achievement2.css({"background": `linear-gradient(to left, transparent +${(300-ticks)/3}%, gold 0%)`});
            achievement2.attr('value',  + ticks + "/300");
        },2000);
    }
});

var buttonBuy3 = $("#buyButton2");
buttonBuy3.mouseover(function(){buttonBuy3.attr('value', '4000$');});
buttonBuy3.mouseleave(function(){buttonBuy3.attr('value', 'ZAKUP');});
buttonBuy3.click(function(){
    if(clicks>=1 && cashFromTimer!=0)
    {
        clicks-=1;
        cashFromTimer*=2;
        buttonBuy3.attr('value', 'ZAKUPIONO');
        buttonBuy3.prop( "disabled", true );
        clicksScore.textContent = clicks + "$";
        itemBoughtCount++;
        if(itemBoughtCount<=10)
        {
            achievement3.css({"background": `linear-gradient(to left, transparent +${100-itemBoughtCount*10}%, gold 0%)`});
            achievement3.attr('value', itemBoughtCount + "/10");
        }
    }
});

var buttonBuy4 = $("#buyButton3");
buttonBuy4.mouseover(function(){buttonBuy4.attr('value', '2000$');});
buttonBuy4.mouseleave(function(){buttonBuy4.attr('value', 'ZAKUP');});
buttonBuy4.click(function(){
    if(clicks>=1)
    {
        clicks-=1;
        cashFromTimer*=2;
        ScorePerClick*=2;
        buttonBuy4.attr('value', 'ZAKUPIONO');
        buttonBuy4.prop( "disabled", true );
        clicksScore.textContent = clicks + "$";
        itemBoughtCount++;
        if(itemBoughtCount<=10)
        {
            achievement3.css({"background": `linear-gradient(to left, transparent +${100-itemBoughtCount*10}%, gold 0%)`});
            achievement3.attr('value', itemBoughtCount + "/10");
        }
        var x = setTimeout(function(){
            cashFromTimer/=2;
            ScorePerClick/=2;
            buttonBuy4.attr('value', '2000$');
            buttonBuy4.prop( "disabled", false );
            clearInterval(x);
        },300);
    }
});

var achievement1 = $("#achievementProgresV1");
var square = $("#clicker");
let clicksAchievement = 0;
square.click(function(){
    clicksAchievement++;
    if(clicksAchievement>100)
        return;
    achievement1.css({"background": `linear-gradient(to left, transparent +${100-clicksAchievement}%, gold 0%)`});
    achievement1.attr('value', clicksAchievement + "/100");
});