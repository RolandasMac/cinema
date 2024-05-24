import {
    userChose,
    adminChose,
    loginPage,
    movieListPage,
    toolbarBtnsList,
    pageList,
    Movie,
    addMoviePage,
    addNewMovieBtn,
    oneMoviePage,
    showRole,
    movieListHardCode,
    addMovie
} from './constants.js';

// EventListeners
userChose.addEventListener('click', choseRole );

adminChose.addEventListener('click', choseRole );

toolbarBtnsList[0].addEventListener('click', (event:Event):void=>{
    openPageByUser(role, loginPage);
    toolbarBtnsList[0].classList.add('d-none');
    toolbarBtnsList[1].classList.add('d-none');
})

toolbarBtnsList[1].addEventListener('click', (event ):void=>{
    openPageByUser(role, addMoviePage);
    toolbarBtnsList[0].classList.add('d-none');
    toolbarBtnsList[1].classList.add('d-none');
    toolbarBtnsList[2].classList.remove('d-none');
})

toolbarBtnsList[2].addEventListener('click', (event ):void=>{
    openPageByUser(role, movieListPage);
    createMovieListPage();
    toolbarBtnsList[0].classList.remove('d-none');
    // toolbarBtnsList[1].classList.remove('d-none');
    toolbarBtnsList[2].classList.add('d-none');
})

addNewMovieBtn.addEventListener('click', addNeewMovie)

// Action data
type Role ='admin'|'user'|""
let role:Role = "";
type Reservation = {
    name:string,
    row:number|null,
    column:number|null
};
let reservedPlaces:Reservation[] = [
    // {
    //   name:"",
    //   row:null,
    //   column:null
    // },
]
let canceledReservation:Reservation[] = []
type Places = {columns:number, rows:number};

//Functions

function choseRole(e:MouseEvent):void{
    role = (((((e.currentTarget) as HTMLHtmlElement).children[0].textContent) as string).toLowerCase()) as Role;
    localStorage.setItem('currentUser', role);
    showRole.textContent = `You are: ${localStorage.getItem('currentUser')}`;
    openPageByUser(role, movieListPage);
    toolbarBtnsList[0].classList.remove('d-none');
    createMovieListPage();
}

function openPageByUser(user:string, targetPage:HTMLElement):void{
    let curPage:Element = (Array.from(pageList).filter((cur:Element)=>!cur.classList.contains('d-none')))[0];
    curPage.classList.add("d-none");
    targetPage.classList.remove('d-none');
}

function createMovieListPage():void{
    if(role==="admin") {
        toolbarBtnsList[1].classList.remove('d-none');
    }
    movieListPage.innerHTML = "";
    console.log((localStorage.getItem('movieList')));
    if(localStorage.getItem('movieList')===null||localStorage.getItem('movieList')===undefined||((localStorage.getItem('movieList'))as string).length===2){
        alert('Tuščia');
        localStorage.setItem('movieList', JSON.stringify(movieListHardCode))
    }
    let movieList = JSON.parse((localStorage.getItem("movieList")) as string);
    movieList.map((cur:Movie):void=>{
        let oneMovie:HTMLDivElement = document.createElement('div');
        oneMovie.classList.add('oneMovie');
        oneMovie.addEventListener('click', openOneMovePage);
        let h5:HTMLHeadingElement = document.createElement('h5');
        h5.textContent = cur.title;
        oneMovie.appendChild(h5);
        let img:HTMLImageElement = document.createElement('img');
        img.addEventListener('error', imgError)
        img.src = cur.img;
        oneMovie.appendChild(img);
        let div :HTMLDivElement= document.createElement('div');
        div.classList.add('movieFooter');
            let label:HTMLLabelElement = document.createElement('label');
            label.setAttribute('for', 'totalSeats');
            label.textContent = "Reserved seats:";
            div.appendChild(label);
            let span:HTMLSpanElement = document.createElement('span');
            span.setAttribute('id','totalSeats');
            span.textContent = `${cur.reservedSeats}/${cur.totalSeats}`
            div.appendChild(span);
            if(role==="admin"){
                let span1:HTMLSpanElement = document.createElement('span');
                span1.classList.add('removeMovie');
                span1.textContent = "❌";
                span1.addEventListener('click', removeMovie, );
                div.appendChild(span1);
            }
        oneMovie.appendChild(div);
        movieListPage.appendChild(oneMovie);
    })
}

function addNeewMovie(e:Event):void{
    if((String(((addMovie.children[0].children[0].children[1]) as HTMLInputElement).value).length>2)&&(((addMovie.children[0].children[1].children[1]) as HTMLInputElement).value).length>2&& Number(((addMovie.children[0].children[2].children[1]) as HTMLInputElement).value)>4){
        e.preventDefault();
        // Make seats from total seats number //
        let places:Places = calcSeats(Number(((addMovie.children[0].children[2].children[1]) as HTMLInputElement).value));
        let formData:Movie = {
            title: `${((addMovie.children[0].children[0].children[1]) as HTMLInputElement).value}`,
            img: `${((addMovie.children[0].children[1].children[1]) as HTMLInputElement).value}`,
            totalSeats:Number(((addMovie.children[0].children[2].children[1]) as HTMLInputElement).value),
            // Clear triggers
            reservedSeats:0,
            reservation:[]
        };
        for(let r:number = 0; r<places.rows; r++){
            formData.reservation.push([])
            for(let c:number = 0; c<places.columns; c++){
                let onePlace:{reserved:boolean,userName:string, seatNr:number} = {reserved:false,userName:"", seatNr:c}
                formData.reservation[r].push(onePlace)
            }
        }

        ((addMovie.children[0].children[0].children[1]) as HTMLInputElement).value = "";
        ((addMovie.children[0].children[1].children[1]) as HTMLInputElement).value = "";
        ((addMovie.children[0].children[2].children[1]) as HTMLInputElement).value = "";

        let movieList = JSON.parse((localStorage.getItem("movieList")) as string);
        movieList.push(formData);
        localStorage.setItem('movieList', JSON.stringify(movieList));
        console.log(formData, movieList);
        ((e.target) as HTMLButtonElement).classList.remove("btn-primary");
        ((e.target) as HTMLButtonElement).classList.remove("btn-danger");
        ((e.target) as HTMLButtonElement).classList.add("btn-success");
    }else{
        e.preventDefault();
        ((e.target) as HTMLButtonElement).classList.remove("btn-primary");
        ((e.target) as HTMLButtonElement).classList.remove("btn-success");
        ((e.target) as HTMLButtonElement).classList.add("btn-danger");
    }
}

function removeMovie(e:Event):void{
    e.stopPropagation();
    let movieTitle:string|null = ((((e.currentTarget) as HTMLElement).parentElement as HTMLElement).parentElement as HTMLElement).children[0].textContent;
    let currentEl:HTMLElement = (((e.currentTarget) as HTMLElement).parentElement as HTMLElement).parentElement as HTMLElement;

    let movieList = (JSON.parse((localStorage.getItem("movieList")) as string)).filter((cur:HTMLElement)=>{
        return cur.title !== movieTitle;
    })
    localStorage.setItem('movieList', JSON.stringify(movieList));
    currentEl.remove();
}

function openOneMovePage(e:Event):void{
    openPageByUser(role, oneMoviePage);
    toolbarBtnsList[0].classList.add('d-none');
    toolbarBtnsList[2].classList.remove('d-none');
    let movieTitle = ((e.currentTarget) as HTMLHtmlElement).children[0].textContent;

    let movieList1 = (JSON.parse((localStorage.getItem("movieList")) as string)).filter((cur:HTMLElement)=>{
        return cur.title === movieTitle;
    })
    createOnePage(movieList1)
}

function createOnePage(movieList:Movie[]):void{
    let cinemaPlaces:Places = calcSeats(movieList[0].totalSeats);
    oneMoviePage.textContent = "";
    const movieInfo:HTMLDivElement = document.createElement('div');
        movieInfo.classList.add('movieInfo');
        const h3:HTMLHeadingElement = document.createElement('h3');
        h3.textContent = movieList[0].title;
        movieInfo.appendChild(h3);
        const img:HTMLImageElement = document.createElement('img');
        img.addEventListener('error', imgError)
        img.src = movieList[0].img;
        movieInfo.appendChild(img);
    oneMoviePage.appendChild(movieInfo)

    const reservation:HTMLDivElement = document.createElement('div');
        reservation.classList.add('reservation');
        const screen:HTMLDivElement = document.createElement('div') as HTMLDivElement;
        screen.setAttribute('id', 'screen');
        screen.style.backgroundImage = `url("css/img/screen.png")`;
        reservation.appendChild(screen);
        const places:HTMLDivElement = document.createElement('div');
        places.classList.add('places');
        places.style.gridTemplateColumns = `repeat(${cinemaPlaces.columns},1fr)`
        places.style.gridTemplateRows = `repeat(${cinemaPlaces.rows},1fr)`
        console.log(movieList[0]);
            for(let r:number = 0; r<movieList[0].reservation.length; r++){
                for(let c:number = 0; c<movieList[0].reservation[r].length; c++){
                    const oneSeat:HTMLDivElement = document.createElement('div');
                    oneSeat.classList.add('oneSeat');
                    if(movieList[0].reservation[r][c].reserved){
                        oneSeat.style.backgroundImage = `url("css/img/chair.png")`;
                        oneSeat.setAttribute('reserved', 'true');
                        oneSeat.setAttribute('row', `${r+1}`);
                        oneSeat.setAttribute('column', `${c+1}`);
                        oneSeat.innerHTML = `
                    Eilė: ${r+1}<br>
                    Vieta: ${c+1}<br>
                    Reserved: ${movieList[0].reservation[r][c].userName}
                    `
                    }else{
                        oneSeat.setAttribute('reserved', 'false');
                        oneSeat.setAttribute('prereserved', 'false');
                        oneSeat.setAttribute('row', `${r+1}`);
                        oneSeat.setAttribute('column', `${c+1}`);
                        oneSeat.innerHTML = `
                    Eilė: ${r+1}<br>
                    Vieta: ${c+1}
                    `
                    }
                    oneSeat.addEventListener('click', reservePlace)
                    places.appendChild(oneSeat);
                }
            }
        reservation.appendChild(places);
        const btn:HTMLButtonElement = document.createElement('button');
        btn.textContent = 'Confirm reservation';
        btn.classList.add('btn');
        btn.classList.add('btn-primary');
        btn.addEventListener('click', confirmReservation);
    reservation.appendChild(btn);
    oneMoviePage.appendChild(reservation);
    reservedPlaces = [];
    canceledReservation = [];
}

function calcSeats(num:number):Places{
    let a:number = Math.floor(Math.sqrt(num));
    let eiliuSk:number = 0;
    let vietuSk:number = 0
    for(let i:number = a; i>0; i--){
        if(num%i===0){
            vietuSk = i;
            eiliuSk = num/i;
            break;
        }
    }
    return {columns:vietuSk,rows:eiliuSk}

}

function reservePlace(e:Event):void{
    if(((e.currentTarget) as HTMLHtmlElement).getAttribute('reserved') === 'false'){
        if(((e.currentTarget) as HTMLHtmlElement).getAttribute('prereserved') === 'false'){
            ((e.currentTarget) as HTMLHtmlElement).style.backgroundImage = `url("css/img/chair.png")`;
            ((e.currentTarget) as HTMLHtmlElement).setAttribute('prereserved','true');
            let reservedPlace:Reservation = {
                name:role,
                row:Number(((e.currentTarget) as HTMLHtmlElement).getAttribute('row')),
                column:Number(((e.currentTarget) as HTMLHtmlElement).getAttribute('column'))
            }
            reservedPlaces.push(reservedPlace);
            console.log(reservedPlaces);
        }else{
            ((e.currentTarget) as HTMLHtmlElement).setAttribute('prereserved','false');
            ((e.currentTarget) as HTMLHtmlElement).style.backgroundImage = `url("css/img/chair1.png")`;
            let reservedPlace:Reservation = {
                name:role,
                row:Number(((e.currentTarget) as HTMLHtmlElement).getAttribute('row')),
                column:Number(((e.currentTarget) as HTMLHtmlElement).getAttribute('column'))
            }
            reservedPlaces = reservedPlaces.filter((cur:Reservation)=>{
                return (cur.name!=reservedPlace.name||cur.row!=reservedPlace.row||cur.column!=reservedPlace.column);
            });
        }
    }else if((((e.currentTarget) as HTMLHtmlElement).getAttribute('reserved') === 'true')&&role==="admin"){
        alert('Jūs norite panaikinti rezervaciją?!');
            ((e.currentTarget) as HTMLHtmlElement).style.backgroundImage = `url("css/img/chair1.png")`;
            ((e.currentTarget) as HTMLHtmlElement).setAttribute('prereserved','false');
            ((e.currentTarget) as HTMLHtmlElement).setAttribute('reserved','false');
            let cancelReservedPlace:Reservation = {
                name:role,
                row:Number(((e.currentTarget) as HTMLHtmlElement).getAttribute('row')),
                column:Number(((e.currentTarget) as HTMLHtmlElement).getAttribute('column'))
            }
            canceledReservation.push(cancelReservedPlace);
    }else{
        alert('Ši vieta jau rezervuota!');
    }
}

function confirmReservation(e:Event):void{
    let currentMovie = ((((e.currentTarget) as HTMLHtmlElement).parentElement as HTMLHtmlElement).parentElement as HTMLHtmlElement).children[0].children[0].textContent;
    let currentMovieList = (JSON.parse((localStorage.getItem("movieList")) as string));
    let curOneMovie:Movie[]=[];
    for(let cur of currentMovieList){
        if(cur.title===currentMovie){
            if(canceledReservation.length){
                for(let place of canceledReservation){
                    (cur.reservation[((place.row)as number)-1][((place.column)as number)-1].reserved) = false;
                    cur.reservation[((place.row)as number)-1][((place.column)as number)-1].userName = "";
                    cur.reservedSeats -= 1;
                }
            }
            if(reservedPlaces.length){
                for(let place of reservedPlaces){
                    cur.reservation[((place.row)as number)-1][((place.column)as number)-1].reserved = true;
                    cur.reservation[((place.row)as number)-1][((place.column)as number)-1].userName = role;
                    cur.reservedSeats += 1;
                }
            }
            curOneMovie.push(cur);
        }
    }
    localStorage.setItem('movieList', JSON.stringify(currentMovieList));
    console.log(currentMovieList);
    createOnePage(curOneMovie)
}

function imgError (e:Event):void {
    ((e.target) as HTMLImageElement).src = 'https://cdn.pixabay.com/photo/2019/04/24/21/55/cinema-4153289_640.jpg'; // place your error.png image instead
}