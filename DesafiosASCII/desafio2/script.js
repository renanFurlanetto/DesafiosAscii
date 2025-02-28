document.getElementById("btnJogo").addEventListener("click", function() {
    const jogos = [
        { 
            nome: "Minecraft", 
            descricao: "Voce certamente ja entrou numa caverna pra minerar rapidinho e quando se deu conta ja haviam passado horas. Não me diga que ainda joga", 
            imagem: "img/minecraft.jpeg" 
        },
        { 
            nome: "Call of Duty 2", 
            descricao: "Voce ja ouviu e se irritou quando falaram que esse jogo incitava violencia. Todo mundo espionava a tela do amigo", 
            imagem: "img/bo2.jpeg" 
        },
        { 
            nome: "Resident Evil", 
            descricao: "Voce fechava o olho e morria de medo, mas dificilmente parava de jogar", 
            imagem: "img/residentEvil.jpeg" 
        },
        { 
            nome: "GTA San Andreas", 
            descricao: "Voce roubou muito carro, participou de uma gangue e foi pego pela policia, que infancia linda", 
            imagem: "img/gta.jpeg" 
        },
        { 
            nome: "The Sims 2", 
            descricao: "Aqui voce foi dono da sua vida mais cedo, teve seu primeiro amor e se sentiu adulto", 
            imagem: "img/theSims2.jpeg" 
        },
        { 
            nome: "Club Penguin", 
            descricao: "Lutar karate, pescar, cuidar do seu pet e tudo isso sendo um pinguim, isso é felicidade", 
            imagem: "img/clubPenguin.jpeg" 
        }
    ];

    let jogoSorteado = jogos[Math.floor(Math.random() * jogos.length)];

   
    document.getElementById("jogoInfo").innerHTML = `
        <div class="card">
            <h2>${jogoSorteado.nome}</h2>
            <p>${jogoSorteado.descricao}</p>
            <img src="${jogoSorteado.imagem}" alt="${jogoSorteado.nome}">
        </div>
    `;

    let jogoDiv = document.getElementById("jogoInfo");
    jogoDiv.style.display = "block";
    setTimeout(() => {
        jogoDiv.style.opacity = "1";
    }, 100);
});
