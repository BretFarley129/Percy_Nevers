//This is the script that I have written for the desktop version of the site.

/*-----------------------------------------------------------------------------------------
    This section is my "brute force" solution to my jQuery not working as expected when
    working along with express. I will trouble shoot that later.
-----------------------------------------------------------------------------------------*/

function showAbout(){
    var disp = document.getElementById('disp');
    disp.innerHTML = `
        <br>
        <div class="jumbotron bg-primary py-5" style="height: 85%">
            <h1 class="display-5">About Percy</h1>
            <br>
            <h5>
                Percy grew up listening to his parents Best Of X records until Led Zeppelin 
                warped his world view. His next epiphany was hearing Tom Waits sing about 
                commonly strange behaviors. Years later, Percy doesn't know quite what to think 
                anymore, he just sings songs from his sub conscience - quasiatures formed from 
                reality and memory that mingle and blur elements of the blues and the abstract truth.
            </h5>

            <a href="https://icons8.com">Icon pack by Icons8</a>
            
        </div>
        `;
    return false;
}
function showProjects(){
    var disp = document.getElementById('disp');
    disp.innerHTML = `
    <br>
    <div class="row">
        <div class="col">
            <div class="bg-warning" style="height:175px; width:175px">
            <img src= "graphics/xmas_cvr.jpg" alt="woops" style="height:100%; width: 100%">
            </div>
        </div>
        <div class="col-6">
            <h4> A Percy Nevers Christmas </h4>
        </div>
    </div>
    <br>

    <div>
        <h6 class="d-inline-block"> <button id="xmas1">play</button> 1 - The First Noel </h6>
        <a class="text-muted" href="#" data-toggle="modal" data-target="#noel" onclick="openTab(event, 'noel_lyrics')"> Track FAQ </a>
    </div>
    <div>
        <h6 class="d-inline-block"> <button id="xmas2">play</button> 2 - O Little Town Of Bethlehem </h6>
        <a class="text-muted" href="#" data-toggle="modal" data-target="#bethlehem" onclick="openTab(event, 'bethlehem_lyrics')"> Track FAQ </a>
    </div>
    <div>
        <h6 class="d-inline-block"> <button id="xmas3">play</button> 3 - Frosty The Dragon </h6>
        <a class="text-muted" href="#" data-toggle="modal" data-target="#frosty" onclick="openTab(event, 'frosty_lyrics')"> Track FAQ </a>
    </div>
    <div>
        <h6 class="d-inline-block"> <button id="xmas4">play</button> 4 - O Tannenbaum </h6>
        <a class="text-muted" href="#" data-toggle="modal" data-target="#tannenbaum" onclick="openTab(event, 'tannenbaum_lyrics')"> Track FAQ </a>
    </div>
    <div>
        <h6 class="d-inline-block"> <button id="xmas5">play</button> 5 - O Come O Come Emmanuel </h6>
        <a class="text-muted" href="#" data-toggle="modal" data-target="#emmanuel" onclick="openTab(event, 'emmanuel_lyrics')"> Track FAQ </a>
    </div>
    <div>
        <h6 class="d-inline-block"> <button id="xmas6">play</button> 6 - God Rest Ye Merry Gentlemen </h6>
        <a class="text-muted" href="#" data-toggle="modal" data-target="#gentlemen" onclick="openTab(event, 'gentlemen_lyrics')"> Track FAQ </a>
    </div>
    <hr>
    <br>

    
    `;
    return false;
}

/*-----------------------------------------------------------------------------------------------------
- This is old code that I was using to change the music on the music player. While I'm not using it,
I want to keep it for further study
-------------------------------------------------------------------------------------------------------
function setSong(file){
    alert(`setting song to ${file}`);
    document.getElementById("foot").innerHTML = `
        <audio controls="controls" autoplay src="xmas/${file}.mp3" type="audio/mp3" style="width:100%; border-radius:0px">
        </audio>
    `
}


window.mobileAndTabletcheck = function() {
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};

var test = window.mobileAndTabletcheck();
alert(test)

-----------------------------------------------------------------------------------------------------*/


/*---------------------------------------------------------------------------------------------------
                                            Jquery
---------------------------------------------------------------------------------------------------*/
$(document).ready(function(){

    $('audio, video').mediaelementplayer();

    var disp = document.getElementById('disp')

    /*---------------------------------------------------------------------------------------------------
                                            About Page
    ---------------------------------------------------------------------------------------------------*/
    $('#about').click(function(event){
        event.preventDefault();
        disp.innerHTML = `
        <br>
        <div class="jumbotron bg-primary py-5" style="height: 85%">
            <h1 class="display-5">About Percy</h1>
            <br>
            <h5>
                Percy grew up listening to his parents Best Of X records until Led Zeppelin 
                warped his world view. His next epiphany was hearing Tom Waits sing about 
                commonly strange behaviors. Years later, Percy doesn't know quite what to think 
                anymore, he just sings songs from his sub conscience - quasiatures formed from 
                reality and memory that mingle and blur elements of the blues and the abstract truth.
            </h5>
            <a href="https://percynevers.bandcamp.com/releases"> Check out his bandcamp! </a>
        </div>
        `;
        return false;
    })

    
    /*---------------------------------------------------------------------------------------------------
                                            Projects Page
    ---------------------------------------------------------------------------------------------------*/
    
    
    $('#projects').click(function(event){
        event.preventDefault();
        disp.innerHTML = `
        <br>
        <div class="jumbotron bg-primary py-5" style="height: 88%">
            <div class="row">
                <div class="col">
                    <div class="bg-warning" style="height:150px; width:150px">
                    <img src= "graphics/xmas_cvr.jpg" alt="woops" style="height:100%; width: 100%">
                    </div>
                </div>
                <div class="col">
                    <h4> A Percy Nevers Christmas </h4>
                </div>
            </div>
            <br>

            <div>
                <h6 class="d-inline-block"> <img id="xmas1" src="icons/play.png" class="pointer"> 1 - The First Noel </h6>
                <a class="text-muted" href="#" data-toggle="modal" data-target="#noel" onclick="openTab(event, 'noel_lyrics')"> Track FAQ </a>
            </div>
            <div>
                <h6 class="d-inline-block"> <img id="xmas2" src="icons/play.png" class="pointer"> 2 - O Little Town Of Bethlehem </h6>
                <a class="text-muted" href="#" data-toggle="modal" data-target="#bethlehem" onclick="openTab(event, 'bethlehem_lyrics')"> Track FAQ </a>
            </div>
            <div>
                <h6 class="d-inline-block"> <img id="xmas3" src="icons/play.png" class="pointer"> 3 - Frosty The Dragon </h6>
                <a class="text-muted" href="#" data-toggle="modal" data-target="#frosty" onclick="openTab(event, 'frosty_lyrics')"> Track FAQ </a>
            </div>
            <div>
                <h6 class="d-inline-block"> <img id="xmas4" src="icons/play.png" class="pointer"> 4 - O Tannenbaum </h6>
                <a class="text-muted" href="#" data-toggle="modal" data-target="#tannenbaum" onclick="openTab(event, 'tannenbaum_lyrics')"> Track FAQ </a>
            </div>
            <div>
                <h6 class="d-inline-block"> <img id="xmas6" src="icons/play.png" class="pointer"> 5 - God Rest Ye Merry Gentlemen </h6>
                <a class="text-muted" href="#" data-toggle="modal" data-target="#gentlemen" onclick="openTab(event, 'gentlemen_lyrics')"> Track FAQ </a>
            </div>
        </div>
        

        
        `;
        return false;
    })

    /*---------------------------------------------------------------------------------------------------
                                            Events Page
    ---------------------------------------------------------------------------------------------------*/

    $('#events').click(function(event){
        event.preventDefault();
        disp.innerHTML = `
        <br>
        <h5> 1/1/18 - Percy Does Something</h5>
        <h5> 1/1/18 - Percy Does Something</h5>
        <h5> 1/1/18 - Percy Does Something</h5>
        <h5> 1/1/18 - Percy Does Something</h5>
        <h5> 1/1/18 - Percy Does Something</h5>
        <h5> 1/1/18 - Percy Does Something</h5>
        <h5> 1/1/18 - Percy Does Something</h5>
        <h5> 1/1/18 - Percy Does Something</h5>
        `
    })

    /*---------------------------------------------------------------------------------------------------
                    -Jquery for setting all the different songs to the audio player
    ---------------------------------------------------------------------------------------------------*/
    $('#disp').on('click', '#xmas1', function(event){
        document.getElementById("foot").innerHTML = `
            <audio controls="controls" autoplay src="xmas/S1.mp3" type="audio/mp3" style="width:100%; border-radius:0px">
            </audio>
        `
        $('audio, video').mediaelementplayer();
    })
    $('#disp').on('click', '#xmas2', function(event){
        document.getElementById("foot").innerHTML = `
            <audio controls="controls" autoplay src="xmas/S2.mp3" type="audio/mp3" style="width:100%; border-radius:0px">
            </audio>
        `
        $('audio, video').mediaelementplayer();
    })
    $('#disp').on('click', '#xmas3', function(event){
        document.getElementById("foot").innerHTML = `
            <audio controls="controls" autoplay src="xmas/S3.mp3" type="audio/mp3" style="width:100%; border-radius:0px">
            </audio>
        `
        $('audio, video').mediaelementplayer();
    })
    $('#disp').on('click', '#xmas4', function(event){
        document.getElementById("foot").innerHTML = `
            <audio controls="controls" autoplay src="xmas/S4.mp3" type="audio/mp3" style="width:100%; border-radius:0px">
            </audio>
        `
        $('audio, video').mediaelementplayer();
    })
    $('#disp').on('click', '#xmas5', function(event){
        document.getElementById("foot").innerHTML = `
            <audio controls="controls" autoplay src="xmas/5.mp3" type="audio/mp3" style="width:100%; border-radius:0px">
            </audio>
        `
        $('audio, video').mediaelementplayer();
    })
    $('#disp').on('click', '#xmas6', function(event){
        document.getElementById("foot").innerHTML = `
            <audio controls="controls" autoplay src="xmas/S6.mp3" type="audio/mp3" style="width:100%; border-radius:0px">
            </audio>
        `
        $('audio, video').mediaelementplayer();
    })
    $('#disp').on('click', '#covers1', function(event){
        document.getElementById("foot").innerHTML = `
            <audio controls="controls" autoplay src="covers/C1.mp3" type="audio/mp3" style="width:100%; border-radius:0px">
            </audio>
        `
        $('audio, video').mediaelementplayer();
    })
    $('#disp').on('click', '#covers2', function(event){
        document.getElementById("foot").innerHTML = `
            <audio controls="controls" autoplay src="covers/C2.mp3" type="audio/mp3" style="width:100%; border-radius:0px">
            </audio>
        `
        $('audio, video').mediaelementplayer();
    })
    $('#disp').on('click', '#covers3', function(event){
        document.getElementById("foot").innerHTML = `
            <audio controls="controls" autoplay src="covers/C3.mp3" type="audio/mp3" style="width:100%; border-radius:0px">
            </audio>
        `
        $('audio, video').mediaelementplayer();
    })
    $('#disp').on('click', '#covers4', function(event){
        document.getElementById("foot").innerHTML = `
            <audio controls="controls" autoplay src="covers/C4.mp3" type="audio/mp3" style="width:100%; border-radius:0px">
            </audio>
        `
        $('audio, video').mediaelementplayer();
    })
    $('#disp').on('click', '#covers5', function(event){
        document.getElementById("foot").innerHTML = `
            <audio controls="controls" autoplay src="covers/C5.mp3" type="audio/mp3" style="width:100%; border-radius:0px">
            </audio>
        `
        $('audio, video').mediaelementplayer();
    })

})
    // var disp = document.getElementById("disp")
    // function setAbout(){
    //     alert("About Clicked");

    // }
    // function setProjects(){
    //     alert("Projects Clicked");
    //     disp.innerHTML = "<h5> Projects </h5>"
    // }
    // function setEvents(){
    //     alert("Events Clicked");

    // }