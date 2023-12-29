function changeHours1(val)
{
    document.getElementById("hours1out").innerHTML = val;
}

function changeMinutes1(val)
{
    document.getElementById("minutes1out").innerHTML = val;
}

function changeSeconds1(val)
{
    document.getElementById("seconds1out").innerHTML = val;
}

function changeIncrement1(val)
{
    document.getElementById("increment1out").innerHTML = val;
}

function changeDelay1(val)
{
    document.getElementById("delay1out").innerHTML = val;
}


function changeHours2(val)
{
    document.getElementById("hours2out").innerHTML = val;
}

function changeMinutes2(val)
{
    document.getElementById("minutes2out").innerHTML = val;
}

function changeSeconds2(val)
{
    document.getElementById("seconds2out").innerHTML = val;
}

function changeIncrement2(val)
{
    document.getElementById("increment2out").innerHTML = val;
}

function changeDelay2(val)
{
    document.getElementById("delay2out").innerHTML = val;
}

function testValid()
{
    if(document.getElementById("hours1").value == "0" &&
        document.getElementById("minutes1").value == "0" &&
        document.getElementById("seconds1").value == "0")
    {
       document.getElementById("seconds1").value = "15";
       changeSeconds1("15");
    }

    if(document.getElementById("hours2").value == "0" &&
            document.getElementById("minutes2").value == "0" &&
            document.getElementById("seconds2").value == "0")
        {
           document.getElementById("seconds2").value = "15";
           changeSeconds2("15");
        }
}
function submitData() {

    var hours1 = document.getElementById('hours1').value;
    window.localStorage.setItem("hours1", hours1);
    localStorage.setItem("minutes1", document.getElementById("minutes1").value);
    localStorage.setItem("seconds1", document.getElementById("seconds1").value);
    localStorage.setItem("increment1", document.getElementById("increment1value").value);
    localStorage.setItem("delay1", document.getElementById("delay1value").value);

    localStorage.setItem("hours2", document.getElementById("hours2").value);
    localStorage.setItem("minutes2", document.getElementById("minutes2").value);
    localStorage.setItem("seconds2", document.getElementById("seconds2").value);
    localStorage.setItem("increment2", document.getElementById("increment2value").value);
    localStorage.setItem("delay2", document.getElementById("delay2value").value);
};

