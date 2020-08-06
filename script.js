    function func() {
        if (window.innerHeight > 600) {
            window.innerHeight = 600;
        }
        //Creating variable for two #container s
        var ctr = document.querySelectorAll(".container");
        //Noting all nodes of two #container s
        var ctrNodes = [...ctr[0].childNodes, ...ctr[1].childNodes];
        ctrNodes.splice(6, 1);
        //Creating array which holds all nodes of ctrNodes
        var blockArray = [];
        var count = 0;
        for (let i = 1; i < ctrNodes.length; i = i + 2) {
            blockArray[count] = ctrNodes[i];
            count++;
        }
        //Reducing the style of previus click 
        for (let val of blockArray) {
            if (val.style.opacity = "0") {
                val.style.opacity = "1";
                val.style.transition = "1.2s";
            }
        }
        //Declearing global variables
        var transition = (Math.random() * 1.2);
        var animation = Math.random() * (innerHeight - (450));
        //Giving style to random child of #container
        var blockStyle = blockArray[Math.floor(Math.random() * blockArray.length)];
        blockStyle.style.opacity = "0";
        //Giving random position for #container in vertical
        ctr[0].style.top = animation + "px";
        ctr[1].style.top = animation / 2 + "px";
        //Giving random transition delay
        ctr[0].style.transitionDuration = transition + "s";
        ctr[1].style.transitionDuration = transition + "s";


        //line
        var line = document.getElementById('line');
        line.style.top = animation + "px";
        line.style.transitionDuration = transition + "s";
        line.style.transform = "skew(0deg," + (-animation / 8) + "deg)";
        if (animation > innerHeight / 2 - 136) {
            line.style.top = animation - (animation / 8) + "px";
        } else if (animation < innerHeight / 2 - 136) {
            line.style.top = animation - 30 + "px";
        }
    }