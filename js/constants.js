// Dom elements
export const adminChose = document.querySelector('#adminChose');
export const userChose = document.querySelector('#userChose');
export const loginPage = document.querySelector('#loginPage');
export const movieListPage = document.querySelector('#movieListPage');
export const toolbar = document.querySelector('#toolbar');
export const toolbarBtnsList = toolbar.querySelectorAll('button');
export const pageList = document.querySelectorAll('.page');
export const addMoviePage = document.querySelector('#addMoviePage');
export const addNewMovieBtn = document.querySelector('#addNewMovie');
export const oneMoviePage = document.querySelector('#oneMoviePage');
export const showRole = document.querySelector('#role');
const movieListHardCode = [
    {
        "title": "Animal",
        "img": "https://occ-0-5169-2774.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeYOwt43Qbc_MdUj7_ijb7rWI4t9INWI8Gzlh36Bgd3jlQiNWT3lt2cxKmXfysTMgRfHSbjLbt62U0s9I_W8Lbu-JFZXuG6N0dE.jpg?r=434",
        "totalSeats": 30,
        "reservation": [
            [
                {
                    "reserved": true,
                    "userName": "user",
                    "seatNr": 0
                },
                {
                    "reserved": true,
                    "userName": "user",
                    "seatNr": 1
                },
                {
                    "reserved": true,
                    "userName": "user",
                    "seatNr": 2
                },
                {
                    "reserved": true,
                    "userName": "user",
                    "seatNr": 3
                },
                {
                    "reserved": true,
                    "userName": "user",
                    "seatNr": 4
                }
            ],
            [
                {
                    "reserved": true,
                    "userName": "user",
                    "seatNr": 0
                },
                {
                    "reserved": true,
                    "userName": "user",
                    "seatNr": 1
                },
                {
                    "reserved": true,
                    "userName": "user",
                    "seatNr": 2
                },
                {
                    "reserved": true,
                    "userName": "user",
                    "seatNr": 3
                },
                {
                    "reserved": true,
                    "userName": "user",
                    "seatNr": 4
                }
            ],
            [
                {
                    "reserved": true,
                    "userName": "user",
                    "seatNr": 0
                },
                {
                    "reserved": true,
                    "userName": "user",
                    "seatNr": 1
                },
                {
                    "reserved": true,
                    "userName": "user",
                    "seatNr": 2
                },
                {
                    "reserved": true,
                    "userName": "user",
                    "seatNr": 3
                },
                {
                    "reserved": true,
                    "userName": "user",
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
                    "reserved": true,
                    "userName": "user",
                    "seatNr": 1
                },
                {
                    "reserved": true,
                    "userName": "admin",
                    "seatNr": 2
                },
                {
                    "reserved": true,
                    "userName": "admin",
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
                    "reserved": true,
                    "userName": "admin",
                    "seatNr": 1
                },
                {
                    "reserved": true,
                    "userName": "admin",
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
                    "reserved": true,
                    "userName": "admin",
                    "seatNr": 1
                },
                {
                    "reserved": true,
                    "userName": "admin",
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
                    "reserved": true,
                    "userName": "user",
                    "seatNr": 1
                },
                {
                    "reserved": true,
                    "userName": "user",
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
                    "reserved": true,
                    "userName": "admin",
                    "seatNr": 2
                },
                {
                    "reserved": true,
                    "userName": "admin",
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
                    "reserved": true,
                    "userName": "user",
                    "seatNr": 2
                },
                {
                    "reserved": true,
                    "userName": "user",
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
                    "reserved": true,
                    "userName": "user",
                    "seatNr": 2
                },
                {
                    "reserved": true,
                    "userName": "user",
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
                    "reserved": true,
                    "userName": "admin",
                    "seatNr": 2
                },
                {
                    "reserved": true,
                    "userName": "admin",
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
                    "reserved": true,
                    "userName": "user",
                    "seatNr": 3
                },
                {
                    "reserved": true,
                    "userName": "user",
                    "seatNr": 4
                },
                {
                    "reserved": true,
                    "userName": "user",
                    "seatNr": 5
                },
                {
                    "reserved": true,
                    "userName": "user",
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
                    "reserved": true,
                    "userName": "user",
                    "seatNr": 4
                },
                {
                    "reserved": true,
                    "userName": "user",
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
                    "reserved": true,
                    "userName": "admin",
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
                    "reserved": true,
                    "userName": "user",
                    "seatNr": 2
                },
                {
                    "reserved": true,
                    "userName": "user",
                    "seatNr": 3
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 4
                },
                {
                    "reserved": true,
                    "userName": "admin",
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
                    "reserved": true,
                    "userName": "user",
                    "seatNr": 2
                },
                {
                    "reserved": true,
                    "userName": "user",
                    "seatNr": 3
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 4
                },
                {
                    "reserved": true,
                    "userName": "admin",
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
                    "reserved": true,
                    "userName": "admin",
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
                    "reserved": true,
                    "userName": "admin",
                    "seatNr": 3
                },
                {
                    "reserved": true,
                    "userName": "admin",
                    "seatNr": 4
                },
                {
                    "reserved": true,
                    "userName": "admin",
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
                    "reserved": true,
                    "userName": "admin",
                    "seatNr": 3
                },
                {
                    "reserved": true,
                    "userName": "admin",
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
        "title": "Bohemian Rhapsody",
        "img": "https://occ-0-5169-2774.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTAlJxAHNsr4iqo_AkFokJtx9dEOKac5N23RDIdmMuRmt3Oitf5yt29CmHImXnbh4TNPlLQFdYpvm0y_k6bF9nuZQTr6WjQoF8c.jpg?r=704",
        "totalSeats": 45,
        "reservation": [
            [
                {
                    "reserved": true,
                    "userName": "admin",
                    "seatNr": 0
                },
                {
                    "reserved": true,
                    "userName": "admin",
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
                    "reserved": true,
                    "userName": "user",
                    "seatNr": 0
                },
                {
                    "reserved": true,
                    "userName": "admin",
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
                    "reserved": true,
                    "userName": "user",
                    "seatNr": 4
                }
            ],
            [
                {
                    "reserved": true,
                    "userName": "user",
                    "seatNr": 0
                },
                {
                    "reserved": true,
                    "userName": "admin",
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
                    "reserved": true,
                    "userName": "admin",
                    "seatNr": 4
                }
            ],
            [
                {
                    "reserved": true,
                    "userName": "user",
                    "seatNr": 0
                },
                {
                    "reserved": true,
                    "userName": "user",
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
                    "reserved": true,
                    "userName": "user",
                    "seatNr": 4
                }
            ],
            [
                {
                    "reserved": true,
                    "userName": "user",
                    "seatNr": 0
                },
                {
                    "reserved": true,
                    "userName": "admin",
                    "seatNr": 1
                },
                {
                    "reserved": true,
                    "userName": "admin",
                    "seatNr": 2
                },
                {
                    "reserved": true,
                    "userName": "admin",
                    "seatNr": 3
                },
                {
                    "reserved": true,
                    "userName": "user",
                    "seatNr": 4
                }
            ],
            [
                {
                    "reserved": true,
                    "userName": "user",
                    "seatNr": 0
                },
                {
                    "reserved": true,
                    "userName": "admin",
                    "seatNr": 1
                },
                {
                    "reserved": true,
                    "userName": "user",
                    "seatNr": 2
                },
                {
                    "reserved": true,
                    "userName": "user",
                    "seatNr": 3
                },
                {
                    "reserved": true,
                    "userName": "user",
                    "seatNr": 4
                }
            ],
            [
                {
                    "reserved": true,
                    "userName": "user",
                    "seatNr": 0
                },
                {
                    "reserved": true,
                    "userName": "admin",
                    "seatNr": 1
                },
                {
                    "reserved": true,
                    "userName": "admin",
                    "seatNr": 2
                },
                {
                    "reserved": true,
                    "userName": "admin",
                    "seatNr": 3
                },
                {
                    "reserved": true,
                    "userName": "user",
                    "seatNr": 4
                }
            ],
            [
                {
                    "reserved": true,
                    "userName": "user",
                    "seatNr": 0
                },
                {
                    "reserved": true,
                    "userName": "admin",
                    "seatNr": 1
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 2
                },
                {
                    "reserved": true,
                    "userName": "user",
                    "seatNr": 3
                },
                {
                    "reserved": true,
                    "userName": "user",
                    "seatNr": 4
                }
            ],
            [
                {
                    "reserved": true,
                    "userName": "user",
                    "seatNr": 0
                },
                {
                    "reserved": true,
                    "userName": "user",
                    "seatNr": 1
                },
                {
                    "reserved": false,
                    "userName": "",
                    "seatNr": 2
                },
                {
                    "reserved": true,
                    "userName": "user",
                    "seatNr": 3
                },
                {
                    "reserved": true,
                    "userName": "user",
                    "seatNr": 4
                }
            ]
        ]
    },
    {
        "title": "2 Fast 2 Furious",
        "img": "https://occ-0-5169-2774.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABciy075If8uklHrSxfcOQ3tLHSLrZifIN1rbZxl6erse8HabrG0AjeJkJLHP39JL8gObszGMPLqfQI36BSmJCna34G-3ze2FU-Yu7Gb6xWhPLPeoF05V2qKYEncFuiNe4e8rnhmK_AZpMt9SySAo4-h3M-nm1q1Lhyfv-Wo95EaUgrzW_rVB7J2f0sNABlhNVwnKgqeKHoq8cTDlv7idJoToW5qLoLHs7lX7xdEdRaWNZd97WgQotua0iP4cUhiZuEKpb3jGWNxOVgIFG3oYdjIJhQ.jpg?r=784",
        "totalSeats": 45,
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
const movieListHardCode2 = [
    { title: 'Top Gun: Maverick',
        img: 'https://occ-0-5169-2774.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZ_rblqcHBS4lWmBXoMr-JRL6-oiSRFQ6E7MK-fjDNzHYvnqMFBZ3HRAmWVbMGxQtZtegrI-3qLlGyBKggmn-ES-lwULU9Qao1M.jpg?r=67e',
        totalSeats: 20,
        reservation: [[{ reserved: false, userName: 'user', seatNr: 1 },],]
    },
];
// const movieListHardCode1:Array<Movie> = [
//     {
//         title:'Top Gun: Maverick',
//         img:'https://occ-0-5169-2774.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZ_rblqcHBS4lWmBXoMr-JRL6-oiSRFQ6E7MK-fjDNzHYvnqMFBZ3HRAmWVbMGxQtZtegrI-3qLlGyBKggmn-ES-lwULU9Qao1M.jpg?r=67e',
//         totalSeats:20
//     },
//     {
//         title:'Minions: The Rise of Gru',
//         img:'https://occ-0-5169-2774.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXVurm4pB9C_bi0uyWAb6bhJPTk1iFekrkzZ0oQuVTOP7R19D-rWx6EoikLaQL-MEzTv4WzwAK3Vc6_eKtDolkDT-ewhv0xw7pHyizuOAoHznRs-m9zl7ZF_gep_PAqGU39QV8stzexV2igdV39HYAC8mtm75SaXa6d-9jjeqFaZyUSOgpQdKDbwBSOKrN2uLRVbTM05yB6jc7NrOtR9yKHWaisx3_ILcL0q7Lr3HS-Lvl4Hfau02jjsMG7WylQFKFR17mtK2EJQ9_ukPDCrSsSf_Y-YnlTC5np46hQF6QefiFdCL_HgvooSAvsuQ2lNuSEYdlqd6mDNsRg7LiHkqsI.jpg?r=8da',
//         totalSeats:20
//     },
//     {
//         title:'The Devil Wears Prada',
//         img:'https://occ-0-5169-2774.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbVa2z7Sj76sb8JUunoYoBmKelPKBmxy2V8YBc8zD2NjpkHUcV26pYulR3bArkb5Xbg3wptZBNulC1C1NnzQAKKnMbTWpgbGol8.jpg?r=3e8',
//         totalSeats:20
//     },
//     {
//         title:'Thelma the Unicorn',
//         img:'https://occ-0-5169-2774.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeQz2GITVpyjRu4wkmEryX20ahIrVvnVpim5uFGI9U-Db_LyLCdcMIkWz1QGtxCzsQRIBo_VeBExt7bhh38kZZbeQKJeE9xO_5xX03H28u0YUM-T3rk8HRprX1Kd6O27rUXxYZD2l1wxg5oaRgmdRxvLtwaOlHDD44VHWhuJeVMczfaRvYWG-XLxxLY7pjzNoXxLFWx8O9T5B8DDaARKQVOHB5HoYh-7j5za4r-LZBAHq7omRKAie2pPL5aZ3toitpFfxqdOCZa7uTsNkVOEHkWXs4PsqirKQhhIxbvLM8Utft2xSEF7msywP0QMyFeZ1ysNZZipAdvnWx-Za8_8oJQCWb6a9bBChPPBUuZimE00TQaGxHY.jpg?r=f0a',
//         totalSeats:20
//     },
//     {
//         title:'Damsel',
//         img:'https://occ-0-5169-2774.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRhybUqTpg08T8TnfSlW1TPvVx4rMoeyARJusNHmFijC4KWeaoSl9QSkEFSlLFXCZC4pITSugdJhfWa1jkM8Ina1EMepcEIntBvhg4f1kvs3f51AEJbfEFSx6B718Jng8r3j.jpg?r=e0f',
//         totalSeats:20
//     },
//     {
//         title:'Lift',
//         img:'https://occ-0-5169-2774.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQNcmvqUa298uWoIvfqlHQQ2pXCGJtM8MBPOWX2yVC394ityzKyt1cfWE-TZmUa6mhX5BYJ_2d5_MQijbUyIMcnsk0OxjrCYHgexbDwN_jwuDyhWWYwx6aVHUplBAYfBJ3PU.jpg?r=ed2',
//         totalSeats:20
//     },
//     {
//         title:'Sonic the Hedgehog 2',
//         img:'https://occ-0-5169-2774.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYYE8fgoW_2N_7jGHzif--PnU3JNurNpU3MbgJPyXre17wANIbHKCJf9xC4GtYRpH-J4PjRrYCt6a04-SNtTnmiuJXxbxaGa83c.jpg?r=9ee',
//         totalSeats:20
//     },
//     {
//         title:'Disturbia',
//         img:'https://occ-0-5169-2774.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRyNRgYtxvBCn8fJKF_9DEBq-3ib0Q1DUAzb3hQGQHHPSNyzAlm55YPJm0VkZcrcovtorN47IvOMHEyJk2EX_JZbO8UOUEG0g56Wq4fY7BFEukGqgkK5OQRilvU44OBMt_eYMshcF_ownr1bzykXI4a-G2og0t9zam4.jpg?r=f7c',
//         totalSeats:20
//     },
//     {
//         title:'Ford v. Ferrari',
//         img:'https://occ-0-5169-2774.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVSZdra4y7ZMAdeG9JDcydBeGyZy4z5u4rf9f25qjiWJPkBMgTtm0j2I6rrPTbUhjn-LSE6kv2lRs1i76wLB090XlNsAUw0cLGg.jpg?r=593',
//         totalSeats:20
//     },
//     {
//         title:'Sonic the Hedgehog',
//         img:'https://occ-0-5169-2774.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXbPK5UndaBfe9nKO0u3Y7t1dJh5OV7hrd4K4b1AVkEknJ9lkAuGxPmBZSCOLP6yzfF8lyEvT9BNuF_jhURytfveJwReToLZfzaQ3by9_9lOkURZ0WGB4w0uJAbyKgWlcFEnVQ5VxnnG8GYCpe-uIFc1ejrgOBJhKtg.jpg?r=19e',
//         totalSeats:20
//     },
//     {
//         title:'All Quiet on the Western Front',
//         img:'https://occ-0-5169-2774.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABX3PUXEZ0Aff3KweOJwBDpReZZxAktV4WIth-zwfdcpA-uVZn86Hp8v-qHA4gs2_DpEWwuq2esLEIJ5napYQRog9oJNI-5iEmvFRB8suRO04PQq-JoqQevNOSvNLfPmKiA1a.jpg?r=af1',
//         totalSeats:20
//     },
//     {
//         title:'No Hard Feelings',
//         img:'https://occ-0-5169-2774.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbpoIXYUlc8ZZ5yGoe8MPJidBne8sRIQxBq65Ohu8aSXf6Z7sAsgaLFyxu7sCbh2HdGPIAei5ESG8fTlU9aYXseVYsjR7E-UZe8.jpg?r=41e',
//         totalSeats:20
//     },
//     {
//         title:'The Lost City',
//         img:'https://occ-0-5169-2774.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTnuvImgZzPAtJl-ZVpaJuSt418iNuyRFTyPiIVpNbptB9mz8nRPzwRBZDTJPkR2qO-N3o4bKHix5I336TZRAT3xSlK_jyiPXwo.jpg?r=396',
//         totalSeats:20
//     },
//     {
//         title:'The Equalizer 3',
//         img:'https://occ-0-5169-2774.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABWkYP9Wvpumlnytvcp2t0iLt-PTdBMuZEhE9vmenb7IUg5OTffqEGhjW3TGW88JiODlmvBcT2SCTkU7Uc_Rh8r4Kmpul84OjCPY.jpg?r=653',
//         totalSeats:20
//     },{
//         title:'The Maze Runner',
//         img:'https://occ-0-5169-2774.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaxZ2R49Fl8toNxOnH7UvKm4XRgTPQA_gwv5MEUftS4HGvzQiZ5CsJrS6g6c2bLn9nCFgzB8RCea4jCjpjHDUkG0qMK5guu1p9Q.jpg?r=4d6',
//         totalSeats:20
//     },
//
//
// ]
// export let movieList:Array<Movie> = [
//     {
//         title:'Top Gun: Maverick',
//         img:'https://occ-0-5169-2774.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZ_rblqcHBS4lWmBXoMr-JRL6-oiSRFQ6E7MK-fjDNzHYvnqMFBZ3HRAmWVbMGxQtZtegrI-3qLlGyBKggmn-ES-lwULU9Qao1M.jpg?r=67e',
//         totalSeats:20
//     },
// ]
if (localStorage.getItem('movieList') === null || undefined) {
    localStorage.setItem('movieList', JSON.stringify(movieListHardCode));
}
