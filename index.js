const express = require("express")
const app = express()
const engine = require("express-handlebars").engine
const port = 5000

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('form')
})

app.post('/form/signup', (req, res) => {
  const { username, password } = req.body
  
  // Pour redirect vers la route `/signup`
  // Avec les paramateres url username et password
  // On démarre la séquence de parametres avec '?'
  // parametre_name=paramatre_value
  // On sépare nos parametres par '&'
  res.redirect(`/signup?username=${username}&password=${password}`)

  // affichage direct du template signup avef les variables
  // res.render('signup', {
  //   username: req.body.username,
  //   password: req.body.password
  // })
})

app.get('/signup', (req, res) => {
  const { username, password } = req.query

  res.render('signup', {
    username,
    password
  })
})

app.listen(5000, () => {
  console.log(`Server is running on port ${port}`)
})