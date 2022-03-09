/** @author Ravi Manthena */
function getdevice() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        //document.write("mobile");
        //alert("it's Mobile\n" + navigator.userAgent);
        return "mobile";
    } else {
        return "web";
        //alert("Not Mobile\n" + navigator.userAgent);
        //document.write("not mobile");
    }
}

function validateform(frm)
{
    event.preventDefault();
    var inputname = document.getElementById("name").value;
    var username = document.getElementById("username").value;
    
    if (inputname == "")
    {
        alert("Please enter valid Name");
        frm.name.focus();
        return false;
    }
    if (username == "")
    {
        alert("Please enter valid Pi username");
        frm.username.focus();
        return false;
    }
    
    alert("Submit request to PiMainNet\n"+
    "name: "+inputname+
    "\nPi :"+username);
    // PiMainNet submit with action when ready
    return false;
}