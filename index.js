const express = require('express')
const app = express()
const port = 8080

const games = [
    {name: "Witcher 3", price: 29.99},
    {name: "Cyberpunk 2077", price: 59.99},
    {name: "Minecraft", price: 26.99},
    {name: "Counter-Strike: Global Offensive", price: 0},
    {name: "Roblox", price: 0},
    {name: "Grand Theft Auto V", price: 29.99},
    {name: "Valorant", price: 0},
    {name: "Forza Horizon 5", price: 59.99},
]

app.use(express.json())

app.get('/games', (req, res) => {
    res.send(games)
})

app.get('/games/:id', (req, res) => {
    res.send(games[req.params.id])
})

app.post('/games', (req, res) => {

    if (!req.body.name || !req.body.price) {
        return res.status(400).send({
            error: 'One or all params are missing'
        })
    }

    games.push({
        price: req.body.price,
        name: req.body.name
    })

    res.status(201).location('localhost:8080/games/' + (games.length - 1)).send(
        games[games.length - 1]
    )
})

app.listen(port, () => {
    console.log(`API up at: http://localhost:${port}`)
})