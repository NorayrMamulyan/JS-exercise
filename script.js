    var click = 0;

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
        //Declearing global variables
        var transition = (Math.random() * 3) + 1;
        var animation = Math.random(4) * (600 - 132) /*((Math.random() * (innerHeight - (450))) + 100)*/ ;
        ctr[1].style.left = container2Left + 'px';
        //Giving random position for #container in vertical
        ctr[0].style.top = animation + "px";
        ctr[1].style.top = animation / 2 + "px";
        //Giving random transition delay
        ctr[0].style.transitionDuration = transition + "s";
        ctr[1].style.transitionDuration = transition + "s";

        //line
        var line = document.getElementById('line');


        //rewriting



        //tuning
        //placeholders
        var img = document.getElementsByTagName('img');
        var title = document.getElementsByTagName('h4');
        var par = document.getElementsByTagName('p');
        var containerWidth = 200;
        var container2Left = 400;
        var container1Height = 220;
        var container1Left = 0;
        var container1Top = animation;
        var container2Top = animation / 2;

        if (click < 2) {
            click++;
        } else { click = 1 };

        //at first click
        if (click == 1) {
            //place changing at first
            container2Left += Math.random() * 38;
            container1Left += Math.random() * 40;
            //for first cont
            img[0].classList.add('imgBot');
            ctr[0].style.height = container1Height + 'px';
            ctr[0].style.width = containerWidth + 'px';
            ctr[0].style.left = container1Left + 'px';
            title[0].style.fontSize = 20 + 'px';
            title[0].style.color = 'black';
            par[0].style.fontSize = 18 + 'px';

            //for second cont
            img[1].classList.add('imgBot');
            ctr[1].style.height = container1Height + 'px';
            ctr[1].style.width = containerWidth + 'px';
            ctr[1].style.left = container2Left + 'px';
            title[1].style.fontSize = 20 + 'px';
            title[1].style.color = 'black';
            par[1].style.fontSize = 18 + 'px';


            //line
            var x1 = containerWidth + container1Left + 7, //additional 7 for paddingMargin
                x2 = container2Left + 2, //additional 2 for paddingMargin
                y1 = container1Top + (container1Height / 2),
                y2 = container2Top + (container1Height / 2);
            line.style.width = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)) + 'px';
            line.style.left = ((x1 + x2) / 2) - (Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)) / 2) + "px";
            line.style.top = ((y1 + y2) / 2) + "px";
            let slopeInRadian = Math.atan2(y1 - y2, x1 - x2);
            line.style.transform = `rotate(${(slopeInRadian * 180) / Math.PI}deg)`;
            document.getElementById('parRotate').classList.add('rotating');
            //line transDurat
            line.style.transitionDuration = transition + "s";
        }
        //at second click
        if (click == 2) {
            //place changing at second 
            container1Height -= 47;
            container2Left += Math.random() * 118;
            container1Left += Math.random() * 40;
            //for first cont
            img[0].classList.remove('imgBot');
            img[0].style.height = 113 + 'px';
            ctr[0].style.height = container1Height + 'px';
            ctr[0].style.left = container1Left + 'px';
            title[0].style.color = '#B50744';

            //for second cont
            img[1].classList.remove('imgBot');
            img[1].style.height = 113 + 'px';
            ctr[1].style.height = container1Height + 'px';
            ctr[1].style.left = container2Left + 'px';
            title[1].style.color = '#B50744';

            //line         
            var x1 = containerWidth + container1Left + 7, //additional 7 for paddingMargin
                x2 = container2Left + 2, //additional 2 for paddingMargin
                y1 = container1Top + (container1Height / 2),
                y2 = container2Top + (container1Height / 2);
            line.style.width = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)) + 'px';
            line.style.left = ((x1 + x2) / 2) - (Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)) / 2) + "px";
            line.style.top = ((y1 + y2) / 2) + "px";
            let slopeInRadian = Math.atan2(y1 - y2, x1 - x2);
            line.style.transform = `rotate(${(slopeInRadian * 180) / Math.PI}deg)`;
            document.getElementById('parRotate').classList.add('rotating');
            //transDurat
            line.style.transitionDuration = transition + "s";

        }
        /*
                var x1 = 50,
                    x2 = 100,
                    y1 = 50,
                    y2 = 100;
                var check = document.getElementById('check');
                check.style.width = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)) + 'px';
                check.style.top = (y1 + y2) / 2 + 'px';
                check.style.left = (x1 + x2) / 2 - (Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2))) / 2 + 'px';
                var radian = Math.atan2(y2 - y1, x2 - x1);
                check.style.transform = `rotate(${radian * 180/ Math.PI}deg)`;*/
    }
