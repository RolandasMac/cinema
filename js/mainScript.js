import { userChose, adminChose, loginPage, movieListPage, toolbarBtnsList, pageList, addMoviePage, addNewMovieBtn, oneMoviePage, showRole, movieListHardCode, addMovie } from './constants.js';
// EventListeners
userChose.addEventListener('click', choseRole);
adminChose.addEventListener('click', choseRole);
toolbarBtnsList[0].addEventListener('click', () => {
    openPageByUser(loginPage);
    toolbarBtnsList[0].classList.add('d-none');
    toolbarBtnsList[1].classList.add('d-none');
});
toolbarBtnsList[1].addEventListener('click', () => {
    openPageByUser(addMoviePage);
    toolbarBtnsList[0].classList.add('d-none');
    toolbarBtnsList[1].classList.add('d-none');
    toolbarBtnsList[2].classList.remove('d-none');
});
toolbarBtnsList[2].addEventListener('click', () => {
    openPageByUser(movieListPage);
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
    localStorage.setItem('currentUser', role);
    showRole.textContent = `You are: ${localStorage.getItem('currentUser')}`;
    openPageByUser(movieListPage);
    toolbarBtnsList[0].classList.remove('d-none');
    createMovieListPage();
}
function openPageByUser(targetPage) {
    let curPage = (Array.from(pageList).filter((cur) => !cur.classList.contains('d-none')))[0];
    curPage.classList.add("d-none");
    targetPage.classList.remove('d-none');
}
function createMovieListPage() {
    if (role === "admin") {
        toolbarBtnsList[1].classList.remove('d-none');
    }
    movieListPage.innerHTML = "";
    if (localStorage.getItem('movieList') === null || localStorage.getItem('movieList') === undefined || (localStorage.getItem('movieList')).length === 2) {
        alert('Tuščia');
        localStorage.setItem('movieList', JSON.stringify(movieListHardCode));
    }
    let movieList = JSON.parse((localStorage.getItem("movieList")));
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
        label.textContent = "Reserved seats:";
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
        movieListPage.appendChild(oneMovie);
    });
}
function addNeewMovie(e) {
    if ((String((addMovie.children[0].children[0].children[1]).value).length > 2) && ((addMovie.children[0].children[1].children[1]).value).length > 2 && Number((addMovie.children[0].children[2].children[1]).value) > 4) {
        e.preventDefault();
        // Make seats from total seats number //
        let places = calcSeats(Number((addMovie.children[0].children[2].children[1]).value));
        let formData = {
            title: `${(addMovie.children[0].children[0].children[1]).value}`,
            img: `${(addMovie.children[0].children[1].children[1]).value}`,
            totalSeats: Number((addMovie.children[0].children[2].children[1]).value),
            // Clear triggers
            reservedSeats: 0,
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
        let movieList = JSON.parse((localStorage.getItem("movieList")));
        movieList.push(formData);
        localStorage.setItem('movieList', JSON.stringify(movieList));
        (e.target).classList.remove("btn-primary");
        (e.target).classList.remove("btn-danger");
        (e.target).classList.add("btn-success");
    }
    else {
        e.preventDefault();
        (e.target).classList.remove("btn-primary");
        (e.target).classList.remove("btn-success");
        (e.target).classList.add("btn-danger");
    }
}
function removeMovie(e) {
    e.stopPropagation();
    let movieTitle = (e.currentTarget).parentElement.parentElement.children[0].textContent;
    let currentEl = (e.currentTarget).parentElement.parentElement;
    let movieList = (JSON.parse((localStorage.getItem("movieList")))).filter((cur) => {
        return cur.title !== movieTitle;
    });
    localStorage.setItem('movieList', JSON.stringify(movieList));
    currentEl.remove();
}
function openOneMovePage(e) {
    openPageByUser(oneMoviePage);
    toolbarBtnsList[0].classList.add('d-none');
    toolbarBtnsList[2].classList.remove('d-none');
    let movieTitle = (e.currentTarget).children[0].textContent;
    let movieList1 = (JSON.parse((localStorage.getItem("movieList")))).filter((cur) => {
        return cur.title === movieTitle;
    });
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
    let eiliuSk = 0;
    let vietuSk = 0;
    for (let i = a; i > 0; i--) {
        if (num % i === 0) {
            vietuSk = i;
            eiliuSk = num / i;
            break;
        }
    }
    return { columns: vietuSk, rows: eiliuSk };
}
function reservePlace(e) {
    if ((e.currentTarget).getAttribute('reserved') === 'false') {
        if ((e.currentTarget).getAttribute('prereserved') === 'false') {
            (e.currentTarget).style.backgroundImage = `url("css/img/chair.png")`;
            (e.currentTarget).setAttribute('prereserved', 'true');
            let reservedPlace = {
                name: role,
                row: Number((e.currentTarget).getAttribute('row')),
                column: Number((e.currentTarget).getAttribute('column'))
            };
            reservedPlaces.push(reservedPlace);
        }
        else {
            (e.currentTarget).setAttribute('prereserved', 'false');
            (e.currentTarget).style.backgroundImage = `url("css/img/chair1.png")`;
            let reservedPlace = {
                name: role,
                row: Number((e.currentTarget).getAttribute('row')),
                column: Number((e.currentTarget).getAttribute('column'))
            };
            reservedPlaces = reservedPlaces.filter((cur) => {
                return (cur.name != reservedPlace.name || cur.row != reservedPlace.row || cur.column != reservedPlace.column);
            });
        }
    }
    else if (((e.currentTarget).getAttribute('reserved') === 'true') && role === "admin") {
        alert('Jūs norite panaikinti rezervaciją?!');
        (e.currentTarget).style.backgroundImage = `url("css/img/chair1.png")`;
        (e.currentTarget).setAttribute('prereserved', 'false');
        (e.currentTarget).setAttribute('reserved', 'false');
        let cancelReservedPlace = {
            name: role,
            row: Number((e.currentTarget).getAttribute('row')),
            column: Number((e.currentTarget).getAttribute('column'))
        };
        canceledReservation.push(cancelReservedPlace);
    }
    else {
        alert('Ši vieta jau rezervuota!');
    }
}
function confirmReservation(e) {
    let currentMovie = (e.currentTarget).parentElement.parentElement.children[0].children[0].textContent;
    let currentMovieList = (JSON.parse((localStorage.getItem("movieList"))));
    let curOneMovie = [];
    for (let cur of currentMovieList) {
        if (cur.title === currentMovie) {
            if (canceledReservation.length) {
                for (let place of canceledReservation) {
                    (cur.reservation[(place.row) - 1][(place.column) - 1].reserved) = false;
                    cur.reservation[(place.row) - 1][(place.column) - 1].userName = "";
                    cur.reservedSeats -= 1;
                }
            }
            if (reservedPlaces.length) {
                for (let place of reservedPlaces) {
                    cur.reservation[(place.row) - 1][(place.column) - 1].reserved = true;
                    cur.reservation[(place.row) - 1][(place.column) - 1].userName = role;
                    cur.reservedSeats += 1;
                }
            }
            curOneMovie.push(cur);
        }
    }
    localStorage.setItem('movieList', JSON.stringify(currentMovieList));
    createOnePage(curOneMovie);
}
function imgError(e) {
    (e.target).src = 'https://cdn.pixabay.com/photo/2019/04/24/21/55/cinema-4153289_640.jpg'; // place your error.png image instead
}
