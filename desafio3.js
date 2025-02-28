function iniciarJogo() {
    alert("Bem-vindo ao Jogo de Desenvolvimento de Carreira!");

    
    let area = prompt("Você quer seguir para a área de Front-End ou Back-End? (Digite 'Front-End' ou 'Back-End')");

    if (area === "Front-End") {
        
        let framework = prompt("Você quer aprender React ou Vue? (Digite 'React' ou 'Vue')");
        if (framework === "React") {
            alert("Ótima escolha! React é uma biblioteca poderosa e amplamente usada no mercado.");
        } else if (framework === "Vue") {
            alert("Excelente! Vue é uma ferramenta versátil e fácil de aprender.");
        } else {
            alert("Opção inválida. Por favor, reinicie o jogo e escolha entre 'React' ou 'Vue'.");
            return;
        }
    } else if (area === "Back-End") {
        
        let linguagem = prompt("Você quer aprender C# ou Java? (Digite 'C#' ou 'Java')");
        if (linguagem === "C#") {
            alert("C# é uma linguagem robusta, ideal para desenvolvimento de aplicativos corporativos e jogos.");
        } else if (linguagem === "Java") {
            alert("Java é uma linguagem versátil e amplamente utilizada em sistemas empresariais.");
        } else {
            alert("Opção inválida. Por favor, reinicie o jogo e escolha entre 'C#' ou 'Java'.");
            return;
        }
    } else {
        alert("Opção inválida. Por favor, reinicie o jogo e escolha entre 'Front-End' ou 'Back-End'.");
        return;
    }

    
    let especializacao = prompt("Você quer se especializar na área escolhida ou se tornar Fullstack? (Digite 'Especializar' ou 'Fullstack')");
    if (especializacao === "Especializar") {
        alert("Focar em uma área específica é uma ótima maneira de se destacar no mercado!");
    } else if (especializacao === "Fullstack") {
        alert("Tornar-se Fullstack abrirá muitas oportunidades, pois você dominará tanto o Front-End quanto o Back-End.");
    } else {
        alert("Opção inválida. Por favor, reinicie o jogo e escolha entre 'Especializar' ou 'Fullstack'.");
        return;
    }

    
    let continuar = true;
    while (continuar) {
        let tecnologia = prompt("Tem mais alguma tecnologia que você gostaria de aprender? (Digite o nome da tecnologia ou 'não' para sair)");

        if (tecnologia.toLowerCase() === "não") {
            continuar = false;
        } else {
            alert(`Legal! ${tecnologia} é uma excelente escolha. Boa sorte nos seus estudos!`);
        }
    }

    alert("Obrigado por jogar! Esperamos que você tenha um ótimo aprendizado e sucesso na sua carreira de programação!");
}


iniciarJogo();