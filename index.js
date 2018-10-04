let cloudContainer = document.getElementById("cloudContainer");
let cloudPosition = -50;
let barishPosition = 0;
// cloud Div**********************************
var cloudDiv = document.createElement("div");
cloudDiv.setAttribute("class", 'cloud-img-div')

// cloud Image and style**********************************
var cloudImg = document.createElement("IMG");
cloudImg.setAttribute("src", './images/cloud.png')
cloudImg.setAttribute("class", 'cloud-img')

// Set to parant**********************************
cloudDiv.appendChild(cloudImg)
cloudContainer.appendChild(cloudDiv)
// Set to parant**********************************

var barishContainer = document.createElement("div")
barishContainer.setAttribute("id", "barishContainer")
Object.assign(barishContainer.style, {
    textAlign: "center",
    display: "flex",
    justifyContent: "space-between"
})
cloudContainer.appendChild(barishContainer)
var barishContainer = document.getElementById("barishContainer")

const cloudMove = () => {
    cloudPosition = cloudPosition + 1
    Object.assign(cloudDiv.style, {
        left: cloudPosition + "px",
    })
    if (cloudPosition === window.screen.width) {
        cloudContainer.removeChild(cloudDiv)
        cloudPosition = -450;
        cloudContainer.appendChild(cloudDiv)
    }
}


const barishMove = () => {
    var screenHeight = window.screen.height
    var randomNumber = Math.random()
    var top = 90;
    var top_2 = 90;
    var top_3 = 90;
    var top_4 = 90;




    var drop = document.createElement("div");
    var drop2 = document.createElement("div");
    var drop3 = document.createElement("div");
    var drop4 = document.createElement("div");
    barishContainer.appendChild(drop);
    barishContainer.appendChild(drop2);
    barishContainer.appendChild(drop3);
    barishContainer.appendChild(drop4);




    var randomNumber = Math.random()
    Object.assign(drop.style, {
        backgroundColor: "gray",
        height: "10px",
        width: "2px",
        margin: "10px",
        borderRadius: "100%",
        transform: "skewY(100deg)",
        marginLeft: Math.floor((randomNumber * 450) + 1) + "px",
        position: "absolute",
        left: cloudPosition + randomNumber + "px"
    })

    var a = setInterval(() => {
        if (screenHeight - 200 >= top) {
            drop.style.top = ++top + "px";
        }
        else {
            barishContainer.removeChild(drop)
            clearInterval(a)
        }
    }, 5)

    var randomNumber2 = Math.random()
    Object.assign(drop2.style, {
        backgroundColor: "gray",
        height: "10px",
        width: "2px",
        // margin: "10px",
        marginLeft: Math.floor((randomNumber2 * 450) + 1) + "px",
        borderRadius: "100%",
        position: "absolute",
        transform: "skewY(100deg)",
        left: cloudPosition + randomNumber2 + "px"


    })

    var b = setInterval(() => {
        if (screenHeight - 200 >= top_2) {
            drop2.style.top = ++top_2 + 10 + "px";
        }
        else {
            barishContainer.removeChild(drop2)
            clearInterval(b)
        }
    }, 5)

    var randomNumber3 = Math.random()
    Object.assign(drop3.style, {
        backgroundColor: "gray",
        height: "10px",
        width: "2px",
        // margin: "10px",
        marginLeft: Math.floor((randomNumber3 * 450) + 1) + "px",
        borderRadius: "100%",
        position: "absolute",
        transform: "skewY(100deg)",
        left: cloudPosition + randomNumber3 + "px"
    })

    var c = setInterval(() => {
        if (screenHeight - 200 >= top_3) {
            drop3.style.top = ++top_3 + "px";
        }
        else {
            barishContainer.removeChild(drop3)
            clearInterval(c)
        }
    }, 5)

    var randomNumber4 = Math.random()
    Object.assign(drop4.style, {
        backgroundColor: "gray",
        height: "10px",
        width: "2px",
        // margin: "10px",
        marginLeft: Math.floor((randomNumber4 * 450) + 1) + "px",
        borderRadius: "100%",
        position: "absolute",
        display: "flex",
        textAlign: "center",
        transform: "skewY(100deg)",
        left: cloudPosition + randomNumber4 + "px"

    })
    var d = setInterval(() => {
        if (screenHeight - 200 >= top_4) {
            drop4.style.top = ++top_4 + "px";
        }
        else {
            barishContainer.removeChild(drop4)
            clearInterval(d)
        }
    }, 5)
}
setInterval(() => {
    cloudMove()
}, 20)

setInterval(() => {
    barishMove()
}, 200)
