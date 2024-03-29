/*
питання, які виникали:
- як запитати дозвіл на надання геоолкації у форматі, як питають зазвичай? я так і не зміг зайти

*/


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

function practice9addImgs() {
    let links = document.getElementById("IDpractice9input").value;
    let splited = links.split("\n").map(e => e.trim()).filter(e => e.length > 0)

    document.getElementById("IDpractice9PictureField").innerHTML = "";
    for (let link of splited) {
        let img = `<img src="${link}" alt="alt text">`

        fetch(link).then(function (response) {
            return response;
        }).then(function (a) {
            if (a.status == 200) {
                document.getElementById("IDpractice9PictureField").innerHTML += `${img}<br>`
            } else {
                console.log(`bad url(${a.status}):`, link)
            }
        }).catch(function (e) {
            console.log("bad url:", link)
            console.log(e)
        });
    }

}

// body onload
function practice10trackMouse() {
    addEventListener('mousemove', (e) => {
        document.getElementById("IDpractice10pointerCoordinates").innerHTML = `X:${e.clientX}, Y:${e.clientY}`
    });
}


function practice13saveLocalStorageInput() {
    let inputValue = document.getElementById('IDLocalStorageInput').value;
    window.localStorage.setItem('IDLocalStorageInput', inputValue);
}

function practice13saveSessionStorageInput() {
    let inputValue = document.getElementById('IDSessionStorageInput').value;
    window.sessionStorage.setItem('IDSessionStorageInput', inputValue);
}

function practice13saveCookiesInput() {
    let inputValue = document.getElementById('IDCookiesInput').value;
    console.log(document.cookie)
    document.cookie = `IDCookiesInput=${inputValue}`;

}

function practice15init() {

    document.getElementById("IDpr15divParent").addEventListener("click",
        function (e) {
            alert("parent")
            e.stopPropagation()
        }
    );

    document.getElementById("IDpr15divCHILD").addEventListener("click",
        function (e) {
            alert("child");
            e.stopPropagation()
        }
    );
}


function pr16blockScroll() {
    document.body.style.overflow = "hidden"
    let scrollTop = document.documentElement.scrollTop;
    document.getElementById("IDp16blocker").style.display = "block";
    document.getElementById("IDp16blocker").style.top = scrollTop + "px"
    document.getElementById("IDp16blocker").style.position = "absolute" 
}

function pr16unblockScroll() {
    document.body.style.overflow = "scroll"
    document.getElementById("IDp16blocker").style.display = "none";
}
