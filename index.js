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
  "processFlow": {
    "ID": "5975c54f-9486-4bb2-830d-d25c65acfe2b",
    "name": "CreateDiagnosticsProcess",
    "classification": "processFlow",
    "subClassification": "DiagnosticsService",
    "state": "active",
    "createdDateTime": "2020-12-03T03:27:34.465Z",
    "characteristics": {
      "characteristic": [
        {
          "name": "servicevalidations",
          "type": "nextAction",
          "value": "wait"
        }
      ]
    },
              "duration": {
      "retry": "60"
              }
  }
}
;
        res.json(data);
    })
    .listen(PORT, () => console.log(`Listening on ${PORT}`))
