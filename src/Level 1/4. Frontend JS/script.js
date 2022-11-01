function switchToNextVisibility(e) {
    return e === "none" ? "inherit" : "none";
}




function changeVisibility(collection) {
    collection.forEach(e => { e.style.display = switchToNextVisibility(e.style.display) })
}


function practice1_way2() {
    document.getElementById("frontJSpractice_1").remove();
}

function practice1_way3() {
    document.getElementById("frontJSpractice_1").classList.add('hidden');
}

// 2 
function practice2() {
    let classes = document.getElementById("frontJSpractice_1").classList;

    if (classes.contains("hidden")) {
        classes.remove("hidden")
    } else {
        classes.add("hidden")
    }
}

function practice3() {
    changeVisibility(document.querySelectorAll(".practice3"))
}

function practice4() {
    let input = document.getElementById('practice4inputField').value
    changeVisibility(document.querySelectorAll(input))
}

function practice5() {
    let square = document.getElementById("IDpractice5")
    alert("hello")
    square.onclick = document.getElementById("IDpractice5").remove

}

function practice6() {
    let currentVis = document.getElementById("IDpractice6").style.visibility;
    document.getElementById("IDpractice6").style.visibility = (currentVis === "hidden" ? "visible" : "hidden")
}


function practice7show() {
    document.getElementById("IDpractice7").style.visibility = "visible";
}

function practice7hide() {
    document.getElementById("IDpractice7").style.visibility = "hidden";
}

function practice8AddImg() {
    let link = document.getElementById("IDpractice8input").value;
    let img = `<img src="${link}" alt="alt text">`
    fetch(link).then(function (response) {
        return response;
    }).then(function () {
        document.getElementById("IDpractice8PictureField").innerHTML = `<br><br>${img}`
    }).catch(function () {
        document.getElementById("IDpractice8PictureField").innerHTML = "<br><br>Invalid image url"
    });







}


