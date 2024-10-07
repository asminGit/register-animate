
const login = document.getElementById("login");
login.onclick = function(){
    console.log("hello")
    const box1 = document.getElementById("box1");
    const container = document.getElementById("container")
    const sukses = document.getElementById("sukses");
    const gagal = document.getElementById("gagal");
    var username = document.getElementById("user").value;
    var password= document.getElementById("pass").value;

    if (username === "" || password === ""){
        box1.style.display = "block";
        box1.classList.add("anim");
        container.style.filter = "opacity(30%)";

        setTimeout(function(){
            box1.classList.remove("anim")
            gagal.style.display = "block";
            gagal.style.display = "flex";
        },2000)
    }else{

    box1.style.display = "block";
    box1.classList.add("anim");
    container.style.filter = "opacity(30%)";

    setTimeout(function() {
        box1.classList.remove("anim");
        container.style.filter = "opacity(40%)";
        sukses.style.display = "block";
        sukses.style.display = "flex"
    }, 2000);
    }
}

const back = document.getElementById("ok");
const kembali = document.getElementById("back");

back.onclick = function(){
    const suksess = document.getElementById("sukses")

    suksess.style.display = "none";
    container.style.filter = "none";
}

kembali.onclick = function(){
    const gagal = document.getElementById("gagal");

    gagal.style.display = "none";
    container.style.filter = "none";
}

const check = document.getElementById("check");

check.addEventListener('change', function(){
    var passInput = document.getElementById("pass");

    if(this.checked) {
        passInput.type = "text";

    }else{
        passInput.type = "password";
    }
})


