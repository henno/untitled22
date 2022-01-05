const app = require('express')()
const port = 8080

app.get('/games', (req, res) => {
    res.send(["Witcher 3", "Cyberpunk 2077"])
})

app.listen(port, () => {
    console.log(`API up at: http://localhost:${port}`)
})