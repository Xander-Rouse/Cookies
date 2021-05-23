var count = 0;
var Clickbonus = 1;
var clicktotal = 0;
var buytotal = 0;
var AC2Cost = 25
function Click() {
    var d = new Date();
    document.getElementById("infotext").innerHTML = d.getHours() + ":" + d.getMinutes() + " " + "You clicked the cookie <br>" + document.getElementById("infotext").innerHTML;
    count = count + (1 * Clickbonus);
    document.getElementById("count").innerHTML = count;
    clicktotal++;
    document.getElementById("ctotal").innerHTML = "Total cookie clicks: " + clicktotal;
}
function Doubler1() {
    var d = new Date();
    if (count >= 10) {
        count -= 10;
        document.getElementById("infotext").innerHTML = d.getHours() + ":" + d.getMinutes() + " " + "You bought double clicks <br>" + document.getElementById("infotext").innerHTML;
        document.getElementById("count").innerHTML = count;
        document.getElementById("1").style.display = "none";
        document.getElementById("2").style.display = "block";
        Clickbonus *= 2;
        buytotal++;
        document.getElementById("btotal").innerHTML = "Total upgrades bought: " + buytotal;
    }
}
function Doubler2() {
    var d = new Date();
    if (count >= 20) {
        count -= 20;
        document.getElementById("infotext").innerHTML = d.getHours() + ":" + d.getMinutes() + " " + "You bought your second click doubler <br>" + document.getElementById("infotext").innerHTML;
        document.getElementById("count").innerHTML = count;
        document.getElementById("2").style.display = "none";
        Clickbonus *= 2;
        buytotal++;
        document.getElementById("btotal").innerHTML = "Total upgrades bought: " + buytotal;
    }
}
function AutoC1() {
    var d = new Date();
    if (count >= 15) {
        count -= 15;
        document.getElementById("infotext").innerHTML = d.getHours() + ":" + d.getMinutes() + " " + "You bought an auto clicker <br>" + document.getElementById("infotext").innerHTML;
        document.getElementById("count").innerHTML = count;
        document.getElementById("3").style.display = "none";
        document.getElementById("4").style.display = "block";
        Autoclicker = setInterval(Click, 1000);
        buytotal++;
        document.getElementById("btotal").innerHTML = "Total upgrades bought: " + buytotal;
    }
}
function AutoC2() {
    var d = new Date();
    if (count >= AC2Cost) {
        count -= AC2Cost;
        document.getElementById("infotext").innerHTML = d.getHours() + ":" + d.getMinutes() + " " + "You bought another auto clicker <br>" + document.getElementById("infotext").innerHTML;
        document.getElementById("count").innerHTML = count;
        Autoclicker = setInterval(Click, 1000);
        buytotal++;
        AC2Cost = AC2Cost * 1.2;
        document.getElementById("4").innerHTML = "Buy another Auto Clicker for " + AC2Cost + " Cookies";
        document.getElementById("btotal").innerHTML = "Total upgrades bought: " + buytotal;
    }
}
