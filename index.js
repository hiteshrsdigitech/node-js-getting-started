const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    // .get('/', (req, res) => res.render('pages/index'))
    .get('/createDiagnosticsProcess', (req, res) => {
        const data = {
            "status": true,
            "message": null,
            "data": {
                "states": [{
                    "id": 30,
                    "name": "Andaman and Nicobar Islands",
                    "is_active": 1,
                    "created_at": "2021-03-08T11:34:42.000000Z",
                    "updated_at": "2021-03-08T11:34:42.000000Z"
                }, {
                    "id": 1,
                    "name": "Andhra Pradesh",
                    "is_active": 0,
                    "created_at": "2021-03-08T11:34:42.000000Z",
                    "updated_at": "2021-03-14T11:53:12.000000Z"
                }, {
                    "id": 2,
                    "name": "Arunachal Pradesh",
                    "is_active": 1,
                    "created_at": "2021-03-08T11:34:42.000000Z",
                    "updated_at": "2021-03-08T11:34:42.000000Z"
                }, {
                    "id": 3,
                    "name": "Assam",
                    "is_active": 1,
                    "created_at": "2021-03-08T11:34:42.000000Z",
                    "updated_at": "2021-03-08T11:34:42.000000Z"
                }, {
                    "id": 4,
                    "name": "Bihar",
                    "is_active": 1,
                    "created_at": "2021-03-08T11:34:42.000000Z",
                    "updated_at": "2021-03-08T11:34:42.000000Z"
                }, {
                    "id": 31,
                    "name": "Chandigarh",
                    "is_active": 1,
                    "created_at": "2021-03-08T11:34:42.000000Z",
                    "updated_at": "2021-03-08T11:34:42.000000Z"
                }, {
                    "id": 5,
                    "name": "Chhattisgarh",
                    "is_active": 1,
                    "created_at": "2021-03-08T11:34:42.000000Z",
                    "updated_at": "2021-03-08T11:34:42.000000Z"
                }, {
                    "id": 32,
                    "name": "Dadra and Nagar Haveli",
                    "is_active": 1,
                    "created_at": "2021-03-08T11:34:42.000000Z",
                    "updated_at": "2021-03-08T11:34:42.000000Z"
                }, {
                    "id": 33,
                    "name": "Daman and Diu",
                    "is_active": 1,
                    "created_at": "2021-03-08T11:34:42.000000Z",
                    "updated_at": "2021-03-08T11:34:42.000000Z"
                }, {
                    "id": 6,
                    "name": "Goa",
                    "is_active": 1,
                    "created_at": "2021-03-08T11:34:42.000000Z",
                    "updated_at": "2021-03-08T11:34:42.000000Z"
                }, {
                    "id": 7,
                    "name": "Gujarat",
                    "is_active": 1,
                    "created_at": "2021-03-08T11:34:42.000000Z",
                    "updated_at": "2021-03-08T11:34:42.000000Z"
                }, {
                    "id": 8,
                    "name": "Haryana",
                    "is_active": 1,
                    "created_at": "2021-03-08T11:34:42.000000Z",
                    "updated_at": "2021-03-08T11:34:42.000000Z"
                }, {
                    "id": 9,
                    "name": "Himachal Pradesh",
                    "is_active": 1,
                    "created_at": "2021-03-08T11:34:42.000000Z",
                    "updated_at": "2021-03-08T11:34:42.000000Z"
                }, {
                    "id": 10,
                    "name": "Jammu and Kashmir",
                    "is_active": 1,
                    "created_at": "2021-03-08T11:34:42.000000Z",
                    "updated_at": "2021-03-08T11:34:42.000000Z"
                }, {
                    "id": 11,
                    "name": "Jharkhand",
                    "is_active": 1,
                    "created_at": "2021-03-08T11:34:42.000000Z",
                    "updated_at": "2021-03-08T11:34:42.000000Z"
                }, {
                    "id": 12,
                    "name": "Karnataka",
                    "is_active": 1,
                    "created_at": "2021-03-08T11:34:42.000000Z",
                    "updated_at": "2021-03-08T11:34:42.000000Z"
                }, {
                    "id": 13,
                    "name": "Kerala",
                    "is_active": 1,
                    "created_at": "2021-03-08T11:34:42.000000Z",
                    "updated_at": "2021-03-08T11:34:42.000000Z"
                }, {
                    "id": 34,
                    "name": "Lakshadweep",
                    "is_active": 1,
                    "created_at": "2021-03-08T11:34:42.000000Z",
                    "updated_at": "2021-03-08T11:34:42.000000Z"
                }, {
                    "id": 14,
                    "name": "Madhya Pradesh",
                    "is_active": 1,
                    "created_at": "2021-03-08T11:34:42.000000Z",
                    "updated_at": "2021-03-08T11:34:42.000000Z"
                }, {
                    "id": 15,
                    "name": "Maharashtra",
                    "is_active": 1,
                    "created_at": "2021-03-08T11:34:42.000000Z",
                    "updated_at": "2021-03-08T11:34:42.000000Z"
                }, {
                    "id": 16,
                    "name": "Manipur",
                    "is_active": 1,
                    "created_at": "2021-03-08T11:34:42.000000Z",
                    "updated_at": "2021-03-08T11:34:42.000000Z"
                }, {
                    "id": 17,
                    "name": "Meghalaya",
                    "is_active": 1,
                    "created_at": "2021-03-08T11:34:42.000000Z",
                    "updated_at": "2021-03-08T11:34:42.000000Z"
                }, {
                    "id": 18,
                    "name": "Mizoram",
                    "is_active": 1,
                    "created_at": "2021-03-08T11:34:42.000000Z",
                    "updated_at": "2021-03-08T11:34:42.000000Z"
                }, {
                    "id": 19,
                    "name": "Nagaland",
                    "is_active": 1,
                    "created_at": "2021-03-08T11:34:42.000000Z",
                    "updated_at": "2021-03-08T11:34:42.000000Z"
                }, {
                    "id": 35,
                    "name": "National Capital Territory of Delhi",
                    "is_active": 1,
                    "created_at": "2021-03-08T11:34:42.000000Z",
                    "updated_at": "2021-03-08T11:34:42.000000Z"
                }, {
                    "id": 20,
                    "name": "Odisha",
                    "is_active": 1,
                    "created_at": "2021-03-08T11:34:42.000000Z",
                    "updated_at": "2021-03-08T11:34:42.000000Z"
                }, {
                    "id": 36,
                    "name": "Puducherry",
                    "is_active": 1,
                    "created_at": "2021-03-08T11:34:42.000000Z",
                    "updated_at": "2021-03-08T11:34:42.000000Z"
                }, {
                    "id": 21,
                    "name": "Punjab",
                    "is_active": 1,
                    "created_at": "2021-03-08T11:34:42.000000Z",
                    "updated_at": "2021-03-08T11:34:42.000000Z"
                }, {
                    "id": 22,
                    "name": "Rajasthan",
                    "is_active": 1,
                    "created_at": "2021-03-08T11:34:42.000000Z",
                    "updated_at": "2021-03-08T11:34:42.000000Z"
                }, {
                    "id": 23,
                    "name": "Sikkim",
                    "is_active": 1,
                    "created_at": "2021-03-08T11:34:42.000000Z",
                    "updated_at": "2021-03-08T11:34:42.000000Z"
                }, {
                    "id": 24,
                    "name": "Tamil Nadu",
                    "is_active": 1,
                    "created_at": "2021-03-08T11:34:42.000000Z",
                    "updated_at": "2021-03-08T11:34:42.000000Z"
                }, {
                    "id": 25,
                    "name": "Telangana",
                    "is_active": 1,
                    "created_at": "2021-03-08T11:34:42.000000Z",
                    "updated_at": "2021-03-08T11:34:42.000000Z"
                }, {
                    "id": 26,
                    "name": "Tripura",
                    "is_active": 1,
                    "created_at": "2021-03-08T11:34:42.000000Z",
                    "updated_at": "2021-03-08T11:34:42.000000Z"
                }, {
                    "id": 27,
                    "name": "Uttar Pradesh",
                    "is_active": 1,
                    "created_at": "2021-03-08T11:34:42.000000Z",
                    "updated_at": "2021-03-08T11:34:42.000000Z"
                }, {
                    "id": 28,
                    "name": "Uttarakhand",
                    "is_active": 1,
                    "created_at": "2021-03-08T11:34:42.000000Z",
                    "updated_at": "2021-03-08T11:34:42.000000Z"
                }, {
                    "id": 29,
                    "name": "West Bengal",
                    "is_active": 1,
                    "created_at": "2021-03-08T11:34:42.000000Z",
                    "updated_at": "2021-03-08T11:34:42.000000Z"
                }]
            }
        }
        res.json(data);
    })
    .listen(PORT, () => console.log(`Listening on ${PORT}`))
