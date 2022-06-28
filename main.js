//function to return a randon prize
function shuffle(array){
    var currentIndex= array.length, randomIndex;
    while(0 !== currentIndex){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[currentIndex], array[currentIndex],
    ];
    }
    return array;
}

//spin function to spin the wheel
function spin(){
    const box = document.getElementById("box");
    const element = document.getElementById("mainbox");
    let selectItem = "";


    let fifty_off = shuffle([1890, 2250, 2610]);
    let twenty_off = shuffle([1850, 2210, 2570]);
    let free_shipping = shuffle([1770, 2130, 2490]);


    let results = shuffle([
        fifty_off[0],
        twenty_off[0],
        free_shipping[0]
    ]);


    if(fifty_off.includes(results[0])) selectItem = "50% OFF";
    if(twenty_off.includes(results[0])) selectItem = "20% OFF";
    if(free_shipping.includes(results[0])) selectItem = "Free Shipping";

    //wheel rotating animation
    box.style.setProperty("transition", "all ease 10s");
    box.style.transform = "rotate(" + results[0] + "deg";
    element.classList.remove("animate");
    setTimeout(function(){
        element.classList.add("animate");
    }, 11000);

    //alert message
    setTimeout(function(){
        
        Swal.fire({
            title: 'Hooray!',
            html: 'Congrats!! You got a ' + selectItem + '.',
          })
    },11000)

    // returns to initial position after the spin
    setTimeout(function(){
        box.style.setProperty("transition", "initial");
        box.style.transform = "rotate(90deg)";
    }, 11500);

}