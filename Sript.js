function StartDadoGame() {
    const videoDado = document.getElementById("videoDado");
    const dadosom = new Audio("Videos/dadoSom.mp3");
    var numero = Math.floor(Math.random() * 6) + 1;
    dadosom.play();
    
    if (numero === 1) {
        videoDado.src = "Videos/dado(1).mp4";
    }
    else if (numero === 2) {
        videoDado.src = "Videos/dado(2).mp4";
    }
    else if (numero === 3) {
        videoDado.src = "Videos/dado(3).mp4";
    }
    else if (numero === 4) {
        videoDado.src = "Videos/dado(4).mp4";
    }
    else if (numero === 5) {
        videoDado.src = "Videos/dado(5).mp4";
    }
    else if (numero === 6) {
        videoDado.src = "Videos/dado(6).mp4";
    }

}