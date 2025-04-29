function enviarWhats(event) {
    // Obtém o valor do campo de entrada com o ID 'nome'
    const nome = document.getElementById('nome').value; 
    // Obtém o valor do campo de entrada com o ID 'mensagem'
    const mensagem = document.getElementById('mensagem').value; 
    // Define o número de telefone para envio da mensagem
    const telefone = '5519991675464'; 

    // Cria a mensagem que será enviada via WhatsApp
    const texto = `Olá, Me chamo ${nome}, ${mensagem}`; 
    // Formata a mensagem para que seja enviada corretamente na URL
    const msgFormatada = encodeURIComponent(texto); 

    // Cria a URL que será aberta no WhatsApp
    const url = `https://wa.me/${telefone}?text=${msgFormatada}`; 

    // Exibe a URL no console para checar se está correta
    console.log(url); 

    // Abre a URL em uma nova aba do navegador
    window.open(url, '_blank'); 
}