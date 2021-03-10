const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const PORT = process.env.PORT || 3000;
var jogadores = {
    primeiro: player,
    segundo: player2,
};

// Disparar evento quando jogador entrar na partida
io.on("connection", function (socket) {
    if (jogadores.primeiro === player) {
        jogadores.primeiro = socket.id;
    } else if (
        jogadores.segundo === player2
    ) {
        jogadores.segundo = socket.id;
    }
    io.emit("jogadores", jogadores);
    console.log("+Lista de jogadores: %s", jogadores);

    // Disparar evento quando jogador sair da partida
    socket.on("disconnect", function () {
        if (jogadores.primeiro === socket.id) {
            jogadores.primeiro = player;
        }
        if (jogadores.segundo === socket.id) {
            jogadores.segundo = player2;
        }
        io.emit("jogadores", jogadores);
        console.log("-Lista de jogadores: %s", jogadores);
    });

    socket.on("estadoDoJogador", function (estado) {
        socket.broadcast.emit("desenharOutroJogador", estado)
    })
});

app.use(express.static("../cliente"));
server.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));
