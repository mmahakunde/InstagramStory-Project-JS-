var arr = [
       {dp:
        "https://images.pexels.com/photos/2065195/pexels-photo-2065195.jpeg?auto=compress&cs=tinysrgb&w=400",story:
        "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=400"},

        {dp:
        "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=400",
        story:
        "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400"},

       {dp:
        "https://images.pexels.com/photos/2774197/pexels-photo-2774197.jpeg?auto=compress&cs=tinysrgb&w=400",
        story:
        "https://images.pexels.com/photos/837306/pexels-photo-837306.jpeg?auto=compress&cs=tinysrgb&w=400"},

        {dp:
        "https://images.pexels.com/photos/792385/pexels-photo-792385.jpeg?auto=compress&cs=tinysrgb&w=600",story:"https://images.pexels.com/photos/1416736/pexels-photo-1416736.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {dp:
         "https://images.pexels.com/photos/2774197/pexels-photo-2774197.jpeg?auto=compress&cs=tinysrgb&w=400",
        story:
        "https://images.pexels.com/photos/837306/pexels-photo-837306.jpeg?auto=compress&cs=tinysrgb&w=400"},
        {dp:
        "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=400",
         story:
        "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400"}
]

var Instastory=document.querySelector(".Instastory")
var clutter=""
arr.forEach(function(elem,idx){
 clutter += ` <div class="story">
 <img id="${idx}" src="${elem.dp}" alt="">
</div> `
})

document.querySelector(".Instastory").innerHTML=clutter

Instastory.addEventListener("click", function(dets){
    document.querySelector("#full-screen").style.display="block"
    document.querySelector("#full-screen").style.backgroundImage=`url(${arr[dets.target.id].story})`

    setTimeout(function () {
        document.querySelector("#full-screen").style.display= "none"
    },1000)
});


