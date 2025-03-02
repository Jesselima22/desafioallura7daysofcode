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

    // Função para exibir a lista completa
    function exibirLista() {
        let mensagem = "Lista de compras:\n";
        for (const [categoria, itens] of Object.entries(lista)) {
            if (itens.length > 0) {
                mensagem += `    ${categoria}: ${itens.join(", ")}\n`;
            }
        }
        return mensagem;
    }

    // Loop principal
    while (true) {
        // Pergunta ao usuário o que deseja fazer
        const opcao = prompt(`O que você deseja fazer?
1 - Adicionar um item à lista
2 - Remover um item da lista
3 - Encerrar o programa`);

        if (opcao === "3") {
            alert("Programa encerrado.\n" + exibirLista());
            break; // Sai do loop e encerra o programa
        }

        if (opcao === "1") {
            // Adicionar um item
            const item = prompt("Qual comida você deseja inserir?");
            const categoria = prompt(`Em qual categoria "${item}" se encaixa? 
Opções: Frutas, Laticínios, Congelados, Doces, Outros`);

            if (lista.hasOwnProperty(categoria)) {
                lista[categoria].push(item);
                alert(`"${item}" foi adicionado à categoria "${categoria}".`);
            } else {
                alert("Categoria inválida! O item será adicionado à categoria 'Outros'.");
                lista["Outros"].push(item);
            }
        } else if (opcao === "2") {
            // Remover um item
            let temItens = false;
            for (const itens of Object.values(lista)) {
                if (itens.length > 0) {
                    temItens = true;
                    break;
                }
            }

            if (!temItens) {
                alert("Não há itens na lista para remover.");
                continue;
            }

            // Exibe a lista atual
            alert(exibirLista());

            // Pede ao usuário o item que deseja remover
            const itemRemover = prompt("Qual item você deseja remover?");

            let removido = false;
            for (const [categoria, itens] of Object.entries(lista)) {
                const index = itens.indexOf(itemRemover);
                if (index !== -1) {
                    itens.splice(index, 1); // Remove o item
                    removido = true;
                    alert(`"${itemRemover}" foi removido da categoria "${categoria}".`);
                    break;
                }
            }

            if (!removido) {
                alert(`Não foi possível encontrar o item "${itemRemover}" na lista.`);
            }
        } else {
            alert("Opção inválida. Por favor, escolha entre 1, 2 ou 3.");
        }
    }
}

// Inicia o programa
listaDeCompras();