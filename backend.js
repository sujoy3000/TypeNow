console.log( "We're in bacend.js") ;

let about = `
<div class="container-fluid my-3" style id="aboutBody">
    <!-- Navbar -->
    <nav class="navbar-expand-lg navbar-light bg-light px-5 py-3">
        <div class="container px-5">
            <div class="container px-5">

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active mr-5">
                            <a class="nav-link" id='home' onclick="giveHome()" href="#">Home</a>
                        </li>
                        <li class="nav-item active mr-5">
                            <a class="nav-link" id='home' onclick="giveRec()" href="#">Records</a>
                        </li>
                        <li class="nav-item active mr-5">
                            <a class="nav-link" id="about" onclick="giveAbout()" href="#">About</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" id = "info" onclick="giveInfo()" href="#">Info</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    <header class="masthead my-2">
        <div class="overlay">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-10 mx-auto">
                        <div class="page-heading">
                            <h1>About Me</h1>
                            <span class="subheading">This is what I do.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</div>
<div id="aboutMiddle">
    <div class="container my-4">
        <h5>I Am Sujoy , Currently Doing My Btech , Highly Interested In Coding And Problem Solving. Aaro Ki Janar Aache :)</h5>
    </div>
</div>
`


let info = `
<div class="container-fluid my-3">
    <nav class="navbar-expand-lg navbar-light bg-light px-5 py-3">
        <div class="container px-5">
            <div class="container px-5">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active mr-5">
                            <a class="nav-link" id='home' onclick="giveHome()" href="#">Home</a>
                        </li>
                        <li class="nav-item active mr-5">
                            <a class="nav-link" id='home' onclick="giveRec()" href="#">Records</a>
                        </li>
                        <li class="nav-item active mr-5">
                            <a class="nav-link" id="about" onclick="giveAbout()" href="#">About</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" id = "info" onclick="giveInfo()" href="#">Info</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    <div class="container my-5">
        <div class="card">
            <h5 class="card-header">Кeyboard scheme</h5>
            <div class="card-body">
              <ul>
                  <li>Hit keys only with the fingers for which they have been reserved.</li>
                  <li>Always return to the starting position of the fingers "ASDF – JKL;".</li>
                  <li>When typing, imagine the location of the symbol on the keyboard.</li>
                  <li>Establish and maintain a rhythm while typing. Your keystrokes should come at equal intervals.</li>
                  <li>The SHIFT key is always pressed by the pinky finger opposite to the one hitting the other key.</li>
              </ul>
            </div>
        </div>
        <div class="card">
            <h5 class="card-header">Sitting posture for typing</h5>
            <div class="card-body">
              <ul>
                  <li>Sit straight and remember to keep your back straight.</li>
                  <li>Keep your elbows bent at the right angle.</li>
                  <li>Face the screen with your head slightly tilted forward.</li>
                  <li>Keep at least 45 - 70 cm of distance between your eyes and the screen.</li>
              </ul>
            </div>
        </div>
        <div class="card">
            <h5 class="card-header">Fingers motion</h5>
            <div class="card-body">
              <ul>
                  <li>Don't look at the keys when you type.</li>
                  <li>Just slide your fingers around until they find the home row marking.</li>
                  <li>Limit your hand and finger movement only to what is necessary to press a specific key. </li>
                  <li> Keep your hands and fingers close to the base position.</li>
                  <li>Pay attention to ring fingers and little fingers, since they are considerably underdeveloped.</li>
              </ul>
            </div>
        </div>
        <div class="card">
            <h5 class="card-header">Typing speed</h5>
            <div class="card-body">
              <ul>
                  <li>Do not rush when you just started learning. Speed up only when your fingers hit the right keys out of habit.</li>
                  <li>Take your time when typing to avoid mistakes. The speed will pick up as you progress.</li>
                  <li>Always scan the text a word or two in advance.</li>
                  <li>Take a break if you feel that you get distracted easily and are making a lot of mistakes.</li>
              </ul>
            </div>
        </div>
        <div class="card">
            <h5 class="card-header">Colors</h5>
            <div class="card-body">
              <ul>
                  <li>If your speed is Less than 20 , you will get Red.</li>
                  <li>If your speed is Greater Equal to 20 , you will get Blue.</li>
                  <li>If your speed is Greater Equal to 40 , you will get Green.</li>
                  <li>If your Accuracy is Less than 95 , you will get Red.</li>
                  <li>If your Accuracy is Greater Equal to 95 , you will get Blue.</li>
                  <li>If your Accuracy is Greater Equal to 98 , you will get green.</li>
              </ul>
            </div>
        </div>
        <button type="button" class="btn btn-info btn-lg " onclick="givePractice()">Practice Now</button>
    </div>
</div>
`

let preRecord =`
<div class="container-fluid my-3">
    <nav class="navbar-expand-lg navbar-light bg-light px-5 py-3">
        <div class="container px-5">
            <div class="container px-5">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active mr-5">
                            <a class="nav-link" id='home' onclick="giveHome()" href="#">Home</a>
                        </li>
                        <li class="nav-item active mr-5">
                            <a class="nav-link" id='home' onclick="giveRec()" href="#">Records</a>
                        </li>
                        <li class="nav-item active mr-5">
                            <a class="nav-link" id="about" onclick="giveAbout()" href="#">About</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" id = "info" onclick="giveInfo()" href="#">Info</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
`

let result = `
<div class="container-fluid my-3">
    <nav class="navbar-expand-lg navbar-light bg-light px-5 py-3">
        <div class="container px-5">
            <div class="container px-5">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active mr-5">
                            <a class="nav-link" id='home' onclick="giveHome()" href="#">Home</a>
                        </li>
                        <li class="nav-item active mr-5">
                            <a class="nav-link" id='home' onclick="giveRec()" href="#">Records</a>
                        </li>
                        <li class="nav-item active mr-5">
                            <a class="nav-link" id="about" onclick="giveAbout()" href="#">About</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" id = "info" onclick="giveInfo()" href="#">Info</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
<div class="container my-4">
<div class="row">
    <div class="col-sm-5">
        <div class="card" id = "speedCard">
            <div class="card-body">
                <h4 class="card-title">SPEED</h4>
                <h5 class="card-text" id="mySpeed">0 WPM</h5>
            </div>
        </div>
    </div>
    <div class="col-sm-5">
        <div class="card" id = "accuracyCard">
            <div class="card-body">
                <h4 class="card-title">ACCURACY</h4>
                <h5 class="card-text" id="myAccuracy">100 %</h5>
            </div>
        </div>
    </div>
    <div class="col-sm-2 my-4">
        <div class="card">
            <a href="#" class="btn btn-info" id = "restart" onclick="giveRestart()">Restart</a>
        </div>
    </div>
</div>
</div>

<div class="container" id="uMessage"><div class="alert alert-success" role="alert">
<h4 class="alert-heading">Well done!</h4>
<h6>Press Restart To Take The Typing Test Again</h6>
</div></div>
</div>`


let myText = document.getElementById('text').innerHTML ;

let Length = myText.length ;

let  i , words = 0 ;

for( i = 0 ; i < Length ; i++ )

    if( myText[i] == ' ' ) words++ ;

let avgWordLen = Length / words ;

let factor = 60000 / avgWordLen ;

let preTime = 0 , count = 0 , totalCount = 0 , preCount = 0 , speed = 0 , accuracy = 0 , curTime ;

let sCol , aCol ;



function displaySpeed() {
        
    curTime = new Date() ;

    speed = parseInt( ( count * factor ) / ( curTime - preTime ) ) ;

    accuracy = 100 - ( ( 100 * ( totalCount - count ) ) / Length ).toFixed(1) ;
    
    if( accuracy < 0 ) accuracy = 0 ;

    if( speed < 20 ) document.getElementById('speedCard').setAttribute( 'style' , 'background-color: #F36747 ;') ;

    else if( speed < 40 ) document.getElementById('speedCard').setAttribute( 'style' , 'background-color: #17a2b8;') ;

    else document.getElementById('speedCard').setAttribute( 'style' , 'background-color: #5bc538;') ;

    if( accuracy < 95 ) document.getElementById('accuracyCard').setAttribute( 'style' , 'background-color: #F36747 ;') ;

    else if( accuracy < 98 ) document.getElementById('accuracyCard').setAttribute( 'style' , 'background-color: #17a2b8;') ;

    else document.getElementById('accuracyCard').setAttribute( 'style' , 'background-color: #5bc538;') ;

    if( preTime ){
        
        document.getElementById('mySpeed').innerHTML = `${speed}  WPM` ;

        document.getElementById('myAccuracy').innerHTML = `${accuracy} %` ;
    }
}


let interval = setInterval( displaySpeed , 100 ) ;

let preLength = 0 , curLength = 0 , extraChar = 0 , len ;


//INITIALIZATION

let myHtml = "" ;

for( i = 0 ; i < Length ; i++ ){

    if( i == 0 ) myHtml += `<span class = "giveGreenColor" >${myText[i]}</span>` ;

    else myHtml += `<span>${myText[i]}</span>` ;
}
        
document.getElementById('text').innerHTML = myHtml ;



function textFunc(){

    if( preTime == 0 ) preTime = new Date() ;

    let UText = document.getElementById("userText").value ;

    curLength = UText.length ;

    if( curLength > preLength ){

        if( UText[count] == myText[count] ) count++ ;

        else extraChar++ ;

        myHtml = "" ;

        for( i = 0 ; i < Length ; i++ ){

            if( i == count && preCount != count ) myHtml += `<span class = "giveGreenColor" >${myText[i]}</span>` ;

            else if( i == count ) myHtml += `<span class = "giveRedColor" >${myText[i]}</span>` ;

            else myHtml += `<span>${myText[i]}</span>` ;
        }
        
        document.getElementById('text').innerHTML = myHtml ;

        totalCount++ ;

        preCount = count ;

        preLength =  curLength ;

        if( count == Length ){

            clearInterval(interval) ;

            let tempRec = localStorage.getItem("rex");

            if (tempRec == null){
                recObj = [];
            }
            
            else {
                recObj = JSON.parse(tempRec);
            }
            let uObj = {
                spd: speed ,
                Acr: accuracy ,
                date: preTime 
            }
            recObj.push(uObj);
            
            localStorage.setItem("rex", JSON.stringify(recObj));

            document.getElementById('myBody').innerHTML = result ;

            displaySpeed() ;
        }
    }

    else if( count != Length ){

        if( extraChar > 1 ) extraChar-- ;

        else if( extraChar == 1 ){

            extraChar = 0 ;

            preCount-- ;
        }

        else{

            if(count) count--;

            preCount -= 2 ;
        }

        
        myHtml = "" ;

        for( i = 0 ; i < Length ; i++ ){

            if( i == count && preCount != count ) myHtml += `<span class = "giveGreenColor" >${myText[i]}</span>` ;

            else if( i == count ) myHtml += `<span class = "giveRedColor" >${myText[i]}</span>` ;

            else myHtml += `<span>${myText[i]}</span>` ;
        }
        
        document.getElementById('text').innerHTML = myHtml ;

        totalCount++ ;

        preLength = curLength ;
    }
}

// NAVBAR

function giveAbout() {

    clearInterval(interval) ;
    
    document.getElementById('myBody').innerHTML = about ;
}

function giveHome() {

    location.reload();
}

function giveInfo() {

    clearInterval(interval) ;

    document.getElementById('myBody').innerHTML = info ;
}

function givePractice() {
    
    location.reload();
}

function giveRestart() {
    
    location.reload() ;
}

function giveRec(){

    clearInterval(interval) ;

    let startHtml = `<div class="container px-5 my-3 py-2" id = "userRecord" style = " border: 0px">` ;
        
    let uRec = JSON.parse( localStorage.getItem("rex") ) ;

    let inHtml = `` ;

    let maxSpd = 0 , maxAccuracy = 0 ;
    
    if( uRec == null ){

        inHtml = `<h3>Nothing To Show!</h3>
        <button type="button" class="btn my-2 btn-info btn-lg " onclick="givePractice()">Practice Now</button>` ;
    }

    else{

        recObj = uRec ;

        function prettyFy(date) {

            var hours = date.getHours();

            var minutes = date.getMinutes();
            
            var ampm = hours >= 12 ? 'pm' : 'am';
            
            hours = hours % 12;
            
            hours = hours ? hours : 12; // the hour '0' should be '12'
            
            minutes = minutes < 10 ? '0'+minutes : minutes;
            
            var strTime = hours + ':' + minutes + ' ' + ampm;
            
            return strTime;
        }

        recObj.forEach(function(element, index){

            var date = new Date(element.date) ;

            // ${date.getFullYear()} To get year

            if( element.spd > maxSpd ) maxSpd = element.spd ;

            if( element.Acr > maxAccuracy ) maxAccuracy = element.Acr ;

            inHtml = `
            <div class="container py-1 my-4" style = "background-color: #728622; border-radius: 15px">
                <div class="card mt-3">
                    <div class="card-body" style = "background-color: #ca6565;">
                        <h5 style = {text-align: center;}>Date: ${date.getDate()}'th ${date.toLocaleString('default', { month: 'long' })}</h5>
                        <h5>Time: ${prettyFy(date)}</h5>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm">
                        <div class="card" id = "speed${index}">
                            <div class="card-body">
                                <h4 class="card-title">SPEED</h4>
                                <h5 class="card-text">${element.spd} WPM</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm">
                        <div class="card" id =>
                            <div class="card-body" id = "acr${index}">
                                <h4 class="card-title">ACCURACY</h4>
                                <h5 class="card-text">${element.Acr} %</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>` + inHtml ;
        }) ;

        inHtml = `
        <div class="container py-1 my-4" style = "background-color: #728622; border-radius: 15px">
            <h1><span class="badge badge-secondary">Your  Records</span></h1>
            <div class="row mt-4">
                <div class="col-sm">
                    <div class="card" id = "speed">
                        <div class="card-body">
                            <h4 class="card-title">MAX SPEED</h4>
                            <h5 class="card-text">${maxSpd} WPM</h5>
                        </div>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="card" id ="acr">
                        <div class="card-body">
                            <h4 class="card-title">MAX ACCURACY</h4>
                            <h5 class="card-text">${maxAccuracy} %</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>` + inHtml ;
    }

    inHtml += `</div></div>` ;

    let curRecord = ( preRecord + startHtml + inHtml ) ;

    document.getElementById('myBody').innerHTML = curRecord ;

    if( uRec != null ){

        recObj = uRec ;



        if( maxSpd < 20 ) document.getElementById(`speed`).setAttribute( 'style' , 'background-color: #F36747 ;') ;

        else if( maxSpd < 40 ) document.getElementById(`speed`).setAttribute( 'style' , 'background-color: #17a2b8;') ;

        else document.getElementById(`speed`).setAttribute( 'style' , 'background-color: #5bc538;') ;


        if( maxAccuracy < 95 ) document.getElementById(`acr`).setAttribute( 'style' , 'background-color: #F36747 ;') ;

        else if( maxAccuracy < 98 ) document.getElementById(`acr`).setAttribute( 'style' , 'background-color: #17a2b8;') ;

        else document.getElementById(`acr`).setAttribute( 'style' , 'background-color: #5bc538;') ;



        recObj.forEach(function(element, index){
        
            if( element.spd < 20 ) document.getElementById(`speed${index}`).setAttribute( 'style' , 'background-color: #F36747 ;') ;

            else if( element.spd < 40 ) document.getElementById(`speed${index}`).setAttribute( 'style' , 'background-color: #17a2b8;') ;

            else document.getElementById(`speed${index}`).setAttribute( 'style' , 'background-color: #5bc538;') ;


            if( element.Acr < 95 ) document.getElementById(`acr${index}`).setAttribute( 'style' , 'background-color: #F36747 ;') ;

            else if( element.Acr < 98 ) document.getElementById(`acr${index}`).setAttribute( 'style' , 'background-color: #17a2b8;') ;

            else document.getElementById(`acr${index}`).setAttribute( 'style' , 'background-color: #5bc538;') ;

        });
    }
}
