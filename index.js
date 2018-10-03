let cloudContainer = document.getElementById("cloudContainer");

let cloudPosition = 0;
let barishPosition = 0
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
    // width:
})
cloudDiv.appendChild(barishContainer)
var barishContainer = document.getElementById("barishContainer")






const cloudMove = () => {
    cloudPosition = cloudPosition + 1
    Object.assign(cloudDiv.style, {
        left: cloudPosition + "px",
    })
    if (cloudPosition === window.screen.width - 430) {
        cloudContainer.removeChild(cloudDiv)
        cloudPosition = 0;
        cloudContainer.appendChild(cloudDiv)
    }
}


const barishMove = () => {
    var num = Math.random()
    var newNum = Math.floor((num * 10) + 1)
    console.log(newNum)

    barishPosition = barishPosition + 1
    // var barishDiv = document.createElement("div")
    // barishDiv.setAttribute("class", "barish-div")
    // Object.assign(barishDiv.style, {
    //     width: (newNum ) + "%"
    // })








    // for (var i = 0; i < 30; i++) {
    //     var drop = document.createElement("div")
    //     Object.assign(drop.style, {
    //         backgroundColor: "gray",
    //         height: "10px",
    //         width: "3px",
    //         borderRadius: "100%",
    //         transform: "skewY(-100deg)",
    //     })
    //     barishContainer.appendChild(drop)
    //     // console.log(barishDiv.children)
    // }





    if (barishContainer.children.length < 22) {
        barishContainer.insertBefore(barishDiv, cloudDiv[0])
    }
    else {
        barishContainer.children.length
        barishContainer.lastChild.remove(() => {
            // console.log(barishContainer.lastChild)
        })
    }
}



setInterval(() => {
    cloudMove()
}, 10)


setInterval(() => {
    barishMove()
}, 100)
