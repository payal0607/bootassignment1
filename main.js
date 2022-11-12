function validate() {
    let str = document.getElementById('user').value;

    
    let regexpe = /^[a-zA-Z]+$/g;
     if (regexpe.test(str)) {
        alert('alphbetic value');
    } else {
        alert('');
    }

}
    
    function checknumber() {
        let str = document.getElementById('number').value;

        let regexpe = /^[0-9]{10}$/g;

        if (str == '') {
            alert("enter number");
        }
        else if (!regexpe.test(str)) {
            alert("number is not valid");
        } else {
            alert("done");
        }


    }

function hide() {
    document.getElementById("hide").style.visibility = "hidden";
    document.getElementById("hide2").style.visibility = "hidden";

}
hide();


