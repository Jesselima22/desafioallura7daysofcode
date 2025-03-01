// Função principal do programa
function listaDeCompras() {
    // Estrutura para armazenar os itens por categoria
    const lista = {
        Frutas: [],
        Laticínios: [],
        Congelados: [],
        Doces: [],
        Outros: []
    };

    // Loop principal para adicionar itens
    while (true) {
        // Pergunta se o usuário deseja adicionar um item
        const desejaAdicionar = prompt("Deseja adicionar um item à lista de compras? (Sim/Não)");

        if (desejaAdicionar.toLowerCase() === "não" || desejaAdicionar.toLowerCase() === "nao") {
            break; // Sai do loop se o usuário não quiser adicionar mais itens
        }

        if (desejaAdicionar.toLowerCase() !== "sim") {
            alert("Resposta inválida. Por favor, responda com 'Sim' ou 'Não'.");
            continue; // Volta ao início do loop
        }

        // Pergunta o nome do item
        const item = prompt("Qual comida você deseja inserir?");

        // Pergunta a categoria do item
        const categoria = prompt(`Em qual categoria "${item}" se encaixa? 
Opções: Frutas, Laticínios, Congelados, Doces, Outros`);

        // Verifica se a categoria é válida
        if (lista.hasOwnProperty(categoria)) {
            lista[categoria].push(item); // Adiciona o item à categoria correspondente
        } else {
            alert("Categoria inválida! O item será adicionado à categoria 'Outros'.");
            lista["Outros"].push(item); // Adiciona o item à categoria "Outros"
        }
    }

    // Exibe a lista de compras agrupada por categoria
    let mensagemFinal = "Lista de compras:\n";
    for (const [categoria, itens] of Object.entries(lista)) {
        if (itens.length > 0) {
            mensagemFinal += `    ${categoria}: ${itens.join(", ")}\n`;
        }
    }

    alert(mensagemFinal);
}

// Inicia o programa
listaDeCompras();