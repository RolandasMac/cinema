// Dom elements
export const adminChose = document.querySelector('#adminChose') as HTMLHtmlElement;
export const userChose = document.querySelector('#userChose') as HTMLHtmlElement;
export const loginPage = document.querySelector('#loginPage') as HTMLHtmlElement;
export const movieListPage = document.querySelector('#movieListPage') as HTMLHtmlElement;
export const toolbar = document.querySelector('#toolbar') as HTMLElement;
export const toolbarBtnsList = toolbar.querySelectorAll('button') as NodeListOf <Element>;
export const pageList = document.querySelectorAll('.page') as NodeListOf <Element>;
export const addMoviePage = document.querySelector('#addMoviePage') as HTMLHtmlElement;
export const addMovie = document.querySelector('#addMovie') as HTMLHtmlElement;
export const addNewMovieBtn = document.querySelector('#addNewMovie') as HTMLButtonElement;
export const oneMoviePage = document.querySelector('#oneMoviePage') as HTMLHtmlElement;
export const showRole = document.querySelector('#role') as HTMLElement;


// Data
export interface Row{
    reserved: boolean;
    userName:string|null,
    seatNr:number
}
export type Collumn = Row[];
export type Reservation = Collumn[];
export interface Movie {
    title:string,
    img:string,
    totalSeats:number,
    reservedSeats:number,
    reservation:Reservation
}
export const movieListHardCode:Array<Movie> =[
    {
        "title": "Animal",
        "img": "https://occ-0-5169-2774.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeYOwt43Qbc_MdUj7_ijb7rWI4t9INWI8Gzlh36Bgd3jlQiNWT3lt2cxKmXfysTMgRfHSbjLbt62U0s9I_W8Lbu-JFZXuG6N0dE.jpg?r=434",
        "totalSeats": 30,
        "reservedSeats":0,
        "reservation": [
            [
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 0
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 1
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 2
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 3
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 4
                }
            ],
            [
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 0
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 1
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 2
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 3
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 4
                }
            ],
            [
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 0
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 1
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 2
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 3
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 4
                }
            ],
            [
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 0
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 1
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 2
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 3
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 4
                }
            ],
            [
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 0
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 1
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 2
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 3
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 4
                }
            ],
            [
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 0
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 1
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 2
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 3
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 4
                }
            ]
        ]
    },
    {
        "title": "Dunki",
        "img": "https://occ-0-5169-2774.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfF6DDP9H0k3knc4_Uh2-SECtSrqoG6SQmvrWAmf12GWPRHP--iiQclbKu6xhsdzYz4_BTBj7g3LJWlcOK7P-3AUUNgdeerNUfk.jpg?r=e65",
        "totalSeats": 40,
        "reservedSeats":0,
        "reservation": [
            [
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 0
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 1
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 2
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 3
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 4
                }
            ],
            [
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 0
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 1
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 2
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 3
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 4
                }
            ],
            [
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 0
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 1
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 2
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 3
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 4
                }
            ],
            [
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 0
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 1
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 2
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 3
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 4
                }
            ],
            [
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 0
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 1
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 2
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 3
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 4
                }
            ],
            [
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 0
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 1
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 2
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 3
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 4
                }
            ],
            [
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 0
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 1
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 2
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 3
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 4
                }
            ],
            [
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 0
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 1
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 2
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 3
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 4
                }
            ]
        ]
    },
    {
        "title": "12th Fail",
        "img": "https://occ-0-5169-2774.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTsSh6h5SBiSLVeJdrrUS1bBysZmE7qA1gjDc6gLs4JpCZcIIoNeskRTPIHYugJojmFz1qhK_0lbTFwqkZfLBef7e-nLtwkpC8A.jpg?r=f15",
        "totalSeats": 42,
        "reservedSeats":0,
        "reservation": [
            [
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 0
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 1
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 2
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 3
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 4
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 5
                }
            ],
            [
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 0
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 1
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 2
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 3
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 4
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 5
                }
            ],
            [
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 0
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 1
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 2
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 3
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 4
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 5
                }
            ],
            [
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 0
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 1
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 2
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 3
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 4
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 5
                }
            ],
            [
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 0
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 1
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 2
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 3
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 4
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 5
                }
            ],
            [
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 0
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 1
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 2
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 3
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 4
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 5
                }
            ],
            [
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 0
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 1
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 2
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 3
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 4
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 5
                }
            ]
        ]
    },
    {
        "title": "Gangubai Kathiawadi",
        "img": "https://occ-0-5169-2774.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUy2wJ6wXEzuLK4rk5X_O_RNAKLxII8U1IVjvUrAJF1Ox4y1rRjoCXTOLnl0IcttOJwT5xNII6vUS0mtZdlPutob50RIZHzyFKo.jpg?r=006",
        "totalSeats": 110,
        "reservedSeats":0,
        "reservation": [
            [
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 0
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 1
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 2
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 3
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 4
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 5
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 6
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 7
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 8
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 9
                }
            ],
            [
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 0
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 1
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 2
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 3
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 4
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 5
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 6
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 7
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 8
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 9
                }
            ],
            [
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 0
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 1
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 2
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 3
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 4
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 5
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 6
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 7
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 8
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 9
                }
            ],
            [
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 0
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 1
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 2
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 3
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 4
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 5
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 6
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 7
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 8
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 9
                }
            ],
            [
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 0
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 1
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 2
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 3
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 4
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 5
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 6
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 7
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 8
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 9
                }
            ],
            [
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 0
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 1
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 2
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 3
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 4
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 5
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 6
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 7
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 8
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 9
                }
            ],
            [
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 0
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 1
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 2
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 3
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 4
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 5
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 6
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 7
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 8
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 9
                }
            ],
            [
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 0
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 1
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 2
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 3
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 4
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 5
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 6
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 7
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 8
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 9
                }
            ],
            [
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 0
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 1
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 2
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 3
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 4
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 5
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 6
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 7
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 8
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 9
                }
            ],
            [
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 0
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 1
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 2
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 3
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 4
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 5
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 6
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 7
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 8
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 9
                }
            ],
            [
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 0
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 1
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 2
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 3
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 4
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 5
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 6
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 7
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 8
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 9
                }
            ]
        ]
    },
    {
        "title": "2 Fast 2 Furious",
        "img": "https://occ-0-5169-2774.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABciy075If8uklHrSxfcOQ3tLHSLrZifIN1rbZxl6erse8HabrG0AjeJkJLHP39JL8gObszGMPLqfQI36BSmJCna34G-3ze2FU-Yu7Gb6xWhPLPeoF05V2qKYEncFuiNe4e8rnhmK_AZpMt9SySAo4-h3M-nm1q1Lhyfv-Wo95EaUgrzW_rVB7J2f0sNABlhNVwnKgqeKHoq8cTDlv7idJoToW5qLoLHs7lX7xdEdRaWNZd97WgQotua0iP4cUhiZuEKpb3jGWNxOVgIFG3oYdjIJhQ.jpg?r=784",
        "totalSeats": 45,
        "reservedSeats":0,
        "reservation": [
            [
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 0
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 1
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 2
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 3
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 4
                }
            ],
            [
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 0
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 1
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 2
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 3
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 4
                }
            ],
            [
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 0
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 1
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 2
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 3
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 4
                }
            ],
            [
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 0
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 1
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 2
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 3
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 4
                }
            ],
            [
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 0
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 1
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 2
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 3
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 4
                }
            ],
            [
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 0
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 1
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 2
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 3
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 4
                }
            ],
            [
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 0
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 1
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 2
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 3
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 4
                }
            ],
            [
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 0
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 1
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 2
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 3
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 4
                }
            ],
            [
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 0
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 1
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 2
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 3
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 4
                }
            ]
        ]
    }
];

