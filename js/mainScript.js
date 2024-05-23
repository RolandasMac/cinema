import { userChose, adminChose, loginPage, movieListPage, toolbarBtnsList, pageList, addMoviePage, addNewMovieBtn, oneMoviePage, showRole, movieListHardCode, addMovie } from './constants.js';
// EventListeners
userChose.addEventListener('click', choseRole);
adminChose.addEventListener('click', choseRole);
toolbarBtnsList[0].addEventListener('click', (event) => {
    openPageByUser(role, loginPage);
    toolbarBtnsList[0].classList.add('d-none');
    toolbarBtnsList[1].classList.add('d-none');
});
toolbarBtnsList[1].addEventListener('click', (event) => {
    openPageByUser(role, addMoviePage);
    toolbarBtnsList[0].classList.add('d-none');
    toolbarBtnsList[1].classList.add('d-none');
    toolbarBtnsList[2].classList.remove('d-none');
});
toolbarBtnsList[2].addEventListener('click', (event) => {
    openPageByUser(role, movieListPage);
    createMovieListPage();
    toolbarBtnsList[0].classList.remove('d-none');
    // toolbarBtnsList[1].classList.remove('d-none');
    toolbarBtnsList[2].classList.add('d-none');
});
addNewMovieBtn.addEventListener('click', addNeewMovie);
let role = "";
let reservedPlaces = [
// {
//   name:"",
//   row:null,
//   column:null
// },
];
let canceledReservation = [];
//Functions
function choseRole(e) {
    role = (((e.currentTarget).children[0].textContent).toLowerCase());
    // console.log(role);
    localStorage.setItem('currentUser', role);
    showRole.textContent = `Role: ${localStorage.getItem('currentUser')}`;
    openPageByUser(role, movieListPage);
    toolbarBtnsList[0].classList.remove('d-none');
    createMovieListPage();
}
function openPageByUser(user, targetPage) {
    let curPage = (Array.from(pageList).filter((cur) => !cur.classList.contains('d-none')))[0];
    curPage.classList.add("d-none");
    targetPage.classList.remove('d-none');
}
function createMovieListPage() {
    if (role === "admin") {
        toolbarBtnsList[1].classList.remove('d-none');
    }
    movieListPage.innerHTML = "";
    console.log((localStorage.getItem('movieList')));
    // @ts-ignore
    if (localStorage.getItem('movieList') === null || localStorage.getItem('movieList') === undefined || (localStorage.getItem('movieList')).length === 2) {
        alert('Tuščia');
        localStorage.setItem('movieList', JSON.stringify(movieListHardCode));
    }
    // @ts-ignore
    let movieList = JSON.parse(localStorage.getItem("movieList"));
    movieList.map((cur) => {
        let oneMovie = document.createElement('div');
        oneMovie.classList.add('oneMovie');
        oneMovie.addEventListener('click', openOneMovePage);
        let h5 = document.createElement('h5');
        h5.textContent = cur.title;
        oneMovie.appendChild(h5);
        let img = document.createElement('img');
        img.addEventListener('error', imgError);
        img.src = cur.img;
        oneMovie.appendChild(img);
        let div = document.createElement('div');
        div.classList.add('movieFooter');
        let label = document.createElement('label');
        label.setAttribute('for', 'totalSeats');
        label.textContent = "Total seats:";
        div.appendChild(label);
        let span = document.createElement('span');
        span.setAttribute('id', 'totalSeats');
        span.textContent = `${cur.reservedSeats}/${cur.totalSeats}`;
        div.appendChild(span);
        if (role === "admin") {
            let span1 = document.createElement('span');
            span1.classList.add('removeMovie');
            span1.textContent = "❌";
            span1.addEventListener('click', removeMovie);
            div.appendChild(span1);
        }
        oneMovie.appendChild(div);
        // oneMovie.innerHTML += `
        //     <h4>${cur.title}</h4>
        //     <img src="${cur.img}" alt="">
        //     <div class="movieFooter">
        //         <label for="totalSeats">Totall seats:</label>
        //         <span id="totalSeats">${cur.totalSeats}</span>
        //         ${role==="admin"?'<span class="removeMovie" onclick=\"removeMovie()\">❌</span>':''}
        //     </div>`
        movieListPage.appendChild(oneMovie);
    });
}
function addNeewMovie(e) {
    if ((String((addMovie.children[0].children[0].children[1]).value).length > 2) && ((addMovie.children[0].children[1].children[1]).value).length > 2 && Number((addMovie.children[0].children[2].children[1]).value) > 4) {
        e.preventDefault();
        let places = calcSeats(Number((addMovie.children[0].children[2].children[1]).value));
        let formData = {
            title: `${(addMovie.children[0].children[0].children[1]).value}`,
            img: `${(addMovie.children[0].children[1].children[1]).value}`,
            totalSeats: Number((addMovie.children[0].children[2].children[1]).value),
            reservedSeats: 0,
            // reservation:[[{reserved:false,userName:'user', seatNr:1},],]
            reservation: []
        };
        for (let r = 0; r < places.rows; r++) {
            formData.reservation.push([]);
            for (let c = 0; c < places.columns; c++) {
                let onePlace = { reserved: false, userName: "", seatNr: c };
                formData.reservation[r].push(onePlace);
            }
        }
        (addMovie.children[0].children[0].children[1]).value = "";
        (addMovie.children[0].children[1].children[1]).value = "";
        (addMovie.children[0].children[2].children[1]).value = "";
        // Patikrinimas onChange metu
        // @ts-ignore
        let movieList = JSON.parse(localStorage.getItem("movieList"));
        movieList.push(formData);
        localStorage.setItem('movieList', JSON.stringify(movieList));
        console.log(formData, movieList);
        (e.target).classList.remove("btn-primary");
        (e.target).classList.remove("btn-danger");
        (e.target).classList.add("btn-success");
    }
    else {
        e.preventDefault();
        (e.target).classList.remove("btn-primary");
        (e.target).classList.remove("btn-success");
        (e.target).classList.add("btn-danger");
        // alert('Validation')
    }
}
function removeMovie(e) {
    e.stopPropagation();
    // alert('removed')
    let movieTitle = (e.currentTarget).parentElement.parentElement.children[0].textContent;
    let currentEl = (e.currentTarget).parentElement.parentElement;
    // @ts-ignore
    let movieList = (JSON.parse(localStorage.getItem("movieList"))).filter((cur) => {
        return cur.title !== movieTitle;
    });
    localStorage.setItem('movieList', JSON.stringify(movieList));
    // createMovieListPage();
    currentEl.remove();
}
function openOneMovePage(e) {
    // alert("One movie page opn f veikia!");
    openPageByUser(role, oneMoviePage);
    // toolbarBtnsList[0].classList.remove('d-none');
    toolbarBtnsList[0].classList.add('d-none');
    toolbarBtnsList[2].classList.remove('d-none');
    let movieTitle = (e.currentTarget).children[0].textContent;
    // let currentEl = (((e.currentTarget) as HTMLHtmlElement).parentElement as HTMLHtmlElement).parentElement as HTMLHtmlElement;
    // @ts-ignore
    let movieList1 = (JSON.parse(localStorage.getItem("movieList"))).filter((cur) => {
        return cur.title === movieTitle;
    });
    // console.log(movieList1, 1)
    createOnePage(movieList1);
}
function createOnePage(movieList) {
    let cinemaPlaces = calcSeats(movieList[0].totalSeats);
    oneMoviePage.textContent = "";
    const movieInfo = document.createElement('div');
    movieInfo.classList.add('movieInfo');
    const h3 = document.createElement('h3');
    h3.textContent = movieList[0].title;
    movieInfo.appendChild(h3);
    const img = document.createElement('img');
    img.addEventListener('error', imgError);
    img.src = movieList[0].img;
    movieInfo.appendChild(img);
    oneMoviePage.appendChild(movieInfo);
    const reservation = document.createElement('div');
    reservation.classList.add('reservation');
    const screen = document.createElement('div');
    screen.setAttribute('id', 'screen');
    screen.style.backgroundImage = `url("css/img/screen.png")`;
    reservation.appendChild(screen);
    const places = document.createElement('div');
    places.classList.add('places');
    places.style.gridTemplateColumns = `repeat(${cinemaPlaces.columns},1fr)`;
    places.style.gridTemplateRows = `repeat(${cinemaPlaces.rows},1fr)`;
    console.log(movieList[0]);
    for (let r = 0; r < movieList[0].reservation.length; r++) {
        for (let c = 0; c < movieList[0].reservation[r].length; c++) {
            const oneSeat = document.createElement('div');
            oneSeat.classList.add('oneSeat');
            if (movieList[0].reservation[r][c].reserved) {
                oneSeat.style.backgroundImage = `url("css/img/chair.png")`;
                oneSeat.setAttribute('reserved', 'true');
                oneSeat.setAttribute('row', `${r + 1}`);
                oneSeat.setAttribute('column', `${c + 1}`);
                oneSeat.innerHTML = `
                    Eilė: ${r + 1}<br>
                    Vieta: ${c + 1}<br>
                    Reserved: ${movieList[0].reservation[r][c].userName}
                    `;
            }
            else {
                oneSeat.setAttribute('reserved', 'false');
                oneSeat.setAttribute('prereserved', 'false');
                oneSeat.setAttribute('row', `${r + 1}`);
                oneSeat.setAttribute('column', `${c + 1}`);
                oneSeat.innerHTML = `
                    Eilė: ${r + 1}<br>
                    Vieta: ${c + 1}
                    `;
            }
            oneSeat.addEventListener('click', reservePlace);
            places.appendChild(oneSeat);
        }
    }
    // for(let i = 0; i<movieList[0].totalSeats; i++){
    //     const oneSeat = document.createElement('div');
    //     oneSeat.classList.add('oneSeat');
    //     oneSeat.textContent = `${i+1}`
    //     // const seatImg:HTMLImageElement = document.createElement('img');
    //     // seatImg.src = "./css/img/chair.png";
    //     // oneSeat.appendChild(seatImg);
    //     // oneSeat.style.backgroundImage = url("./css/img/chair.png")
    //     places.appendChild(oneSeat);
    // }
    reservation.appendChild(places);
    const btn = document.createElement('button');
    btn.textContent = 'Confirm reservation';
    btn.classList.add('btn');
    btn.classList.add('btn-primary');
    btn.addEventListener('click', confirmReservation);
    reservation.appendChild(btn);
    oneMoviePage.appendChild(reservation);
    reservedPlaces = [];
    canceledReservation = [];
}
function calcSeats(num) {
    let a = Math.floor(Math.sqrt(num));
    // console.log(a);
    let eiliuSk = 0;
    let vietuSk = 0;
    for (let i = a; i > 0; i--) {
        if (num % i === 0) {
            vietuSk = i;
            eiliuSk = num / i;
            break;
        }
    }
    // console.log({vietuSK:vietuSk,eiliuSk:eiliuSk})
    return { columns: vietuSk, rows: eiliuSk };
}
function reservePlace(e) {
    if ((e.currentTarget).getAttribute('reserved') === 'false') {
        if ((e.currentTarget).getAttribute('prereserved') === 'false') {
            // alert('Reservation clicked!');
            (e.currentTarget).style.backgroundImage = `url("css/img/chair.png")`;
            // console.log(((e.currentTarget) as HTMLHtmlElement).textContent.replace(/\s/g, ''));
            (e.currentTarget).setAttribute('prereserved', 'true');
            let reservedPlace = {
                name: role,
                // @ts-ignore
                row: Number((e.currentTarget).getAttribute('row')),
                // @ts-ignore
                column: Number((e.currentTarget).getAttribute('column'))
            };
            reservedPlaces.push(reservedPlace);
            console.log(reservedPlaces);
        }
        else {
            (e.currentTarget).setAttribute('prereserved', 'false');
            // alert('Reservation clicked!');
            (e.currentTarget).style.backgroundImage = `url("css/img/chair1.png")`;
            // console.log(((e.currentTarget) as HTMLHtmlElement).textContent.replace(/\s/g, ''));
            let reservedPlace = {
                name: role,
                // @ts-ignore
                row: Number((e.currentTarget).getAttribute('row')),
                // @ts-ignore
                column: Number((e.currentTarget).getAttribute('column'))
            };
            reservedPlaces = reservedPlaces.filter((cur) => {
                return (cur.name != reservedPlace.name || cur.row != reservedPlace.row || cur.column != reservedPlace.column);
            });
            console.log(reservedPlaces);
        }
    }
    else if (((e.currentTarget).getAttribute('reserved') === 'true') && role === "admin") {
        alert('Jūs norite panaikinti rezervaciją?!');
        // console.log((((e.currentTarget) as HTMLHtmlElement).textContent).trim());
        (e.currentTarget).style.backgroundImage = `url("css/img/chair1.png")`;
        // console.log(((e.currentTarget) as HTMLHtmlElement).textContent.replace(/\s/g, ''));
        (e.currentTarget).setAttribute('prereserved', 'false');
        (e.currentTarget).setAttribute('reserved', 'false');
        let cancelReservedPlace = {
            name: role,
            // @ts-ignore
            row: Number((e.currentTarget).getAttribute('row')),
            // @ts-ignore
            column: Number((e.currentTarget).getAttribute('column'))
        };
        canceledReservation.push(cancelReservedPlace);
        console.log(canceledReservation);
    }
    else {
        alert('Ši vieta jau rezervuota!');
    }
}
function confirmReservation(e) {
    // alert('confirm reservation veikia!');
    let currentMovie = (e.currentTarget).parentElement.parentElement.children[0].children[0].textContent;
    // @ts-ignore
    let currentMovieList = (JSON.parse(localStorage.getItem("movieList")));
    // let curMovie = (JSON.parse(localStorage.getItem("movieList"))).filter((cur, index)=>{
    //     return cur.title === currentMovie;
    // })
    // let curMovieIndex = currentMovieList.indexOf(curMovie[0]);
    //
    // console.log(currentMovieList, curMovie, curMovieIndex);
    let curOneMovie = [];
    for (let cur of currentMovieList) {
        if (cur.title === currentMovie) {
            if (canceledReservation.length) {
                for (let place of canceledReservation) {
                    // @ts-ignore
                    cur.reservation[(place.row) - 1][(place.column) - 1].reserved = false;
                    // @ts-ignore
                    cur.reservation[(place.row) - 1][(place.column) - 1].userName = "";
                    cur.reservedSeats -= 1;
                }
            }
            if (reservedPlaces.length) {
                for (let place of reservedPlaces) {
                    // @ts-ignore
                    cur.reservation[(place.row) - 1][(place.column) - 1].reserved = true;
                    // @ts-ignore
                    cur.reservation[(place.row) - 1][(place.column) - 1].userName = role;
                    cur.reservedSeats += 1;
                }
            }
            curOneMovie.push(cur);
        }
    }
    localStorage.setItem('movieList', JSON.stringify(currentMovieList));
    console.log(currentMovieList);
    createOnePage(curOneMovie);
}
function imgError(e) {
    (e.target).src = 'https://cdn.pixabay.com/photo/2019/04/24/21/55/cinema-4153289_640.jpg'; // place your error.png image instead
}
