function validaSeExisteDadosdoAlunoNoLocalStorageEMostraNaTela() {
    const localStorage = window.localStorage;
    const dadosArmazenados = localStorage.getItem('alunos');

    if (dadosArmazenados != null) {
        const alunos = JSON.parse(dadosArmazenados);
        const tabelaAlunos = document.getElementById('tabela_alunos');

        tabelaAlunos.innerHTML = '';

        alunos.forEach(aluno => {
            const novaLinha = tabelaAlunos.insertRow();
            novaLinha.insertCell(0).textContent = aluno.nome;
            novaLinha.insertCell(1).textContent = aluno.ra;
            novaLinha.insertCell(2).textContent = aluno.email;
            novaLinha.insertCell(3).textContent = aluno.prova1;
            novaLinha.insertCell(4).textContent = aluno.aep1;
            novaLinha.insertCell(5).textContent = aluno.integrada1;
            novaLinha.insertCell(6).textContent = aluno.prova2;
            novaLinha.insertCell(7).textContent = aluno.aep2;
            novaLinha.insertCell(8).textContent = aluno.integrada2;
            novaLinha.insertCell(9).textContent = aluno.media1;
            novaLinha.insertCell(10).textContent = aluno.media2;
            novaLinha.insertCell(11).textContent = aluno.mediaFinal;
            novaLinha.insertCell(12).textContent = determinarsituaçao(parseFloat(aluno.mediaFinal));
            adicionarBotaoExcluir(novaLinha);
        });

        const mediageralcelula = document.getElementById('media_geral_turma');
        mediageralcelula.textContent = mediaGeral();
    

        }
}



function adicionaDadosAluno() {
    
    const nomeAluno = document.getElementById('input_nome').value;
    const raAluno = document.getElementById('input_ra').value;
    const emailAluno = document.getElementById('input_email').value;
    const alunoaep1 = document.getElementById('input_aep_1').value;
    const integrada1 = document.getElementById('input_integrada_1').value;
    const prova1 = document.getElementById('input_prova_1').value;
    const aep2A = document.getElementById('input_aep_2').value;
    const integrada2 = document.getElementById('input_integrada_2').value;
    const prova2 = document.getElementById('input_prova_2').value;
   

    if (nomeAluno.trim() !== '' && raAluno.trim() !== '' && emailAluno.trim() !== '' && alunoaep1.trim() !== '' && integrada1.trim() !== '' && prova1.trim() !== '' && aep2A.trim() !== '' && integrada2.trim() !== '' && prova2.trim() !== '') {
        const aluno = novoAluno(nomeAluno, raAluno, emailAluno, alunoaep1, integrada1, prova1, aep2A, integrada2, prova2);
        criaNovoAluno(aluno);
        adicionaTabelaLocalStorage(aluno)
        document.getElementById('input_ra').value = '';
        document.getElementById('input_nome').value = '';
        document.getElementById('input_email').value = '';
        document.getElementById('input_prova_1').value = '';
        document.getElementById('input_aep_1').value = '';
        document.getElementById('input_integrada_1').value = '';
        document.getElementById('input_prova_2').value = '';
        document.getElementById('input_aep_2').value = '';
        document.getElementById('input_integrada_2').value = '';

    } else {
        alert('Preencha os dados do aluno');
    }

    validaSeExisteDadosdoAlunoNoLocalStorageEMostraNaTela();
}

function criaNovoAluno(aluno) {
    const listaAlunos = document.getElementById('tabela_alunos');
    const novoItem = document.createElement('tr');





    const nomeCelula = document.createElement('td');
    nomeCelula.textContent = aluno.nome;
    nomeCelula.addEventListener('dblclick', () => {
        editarAluno(nomeCelula);
    });
    novoItem.appendChild(nomeCelula);
    

    const raCelula = document.createElement('td');
    raCelula.textContent = aluno.ra;
    raCelula.addEventListener('dblclick', () => {
        editaInput(raCelula);
    });
    novoItem.appendChild(raCelula);

    const emailCelula = document.createElement('td');
    emailCelula.textContent = aluno.email;
    emailCelula.addEventListener('dblclick', () => {
        editaInput(emailCelula);
    });
    novoItem.appendChild(emailCelula);

    const prova1Celula = document.createElement('td');
    prova1Celula.textContent = aluno.prova1;
    prova1Celula.addEventListener('dblclick', () => {
        editaInput(prova1Celula);
    });
    novoItem.appendChild(prova1Celula);

    const aep1Celula = document.createElement('td');
    aep1Celula.textContent = aluno.aep1;
    aep1Celula.addEventListener('dblclick', () => {
        editaInput(aep1Celula);
    });
    novoItem.appendChild(aep1Celula);

    const integrada1Celula = document.createElement('td');
    integrada1Celula.textContent = aluno.integrada1;
    integrada1Celula.addEventListener('dblclick', () => {
        editaInput(integrada1Celula);
    });
    novoItem.appendChild(integrada1Celula);

    const prova2Celula = document.createElement('td');
    prova2Celula.textContent = aluno.prova2;
    prova2Celula.addEventListener('dblclick', () => {
        editaInput(prova2Celula);
    });
    novoItem.appendChild(prova2Celula);

    const aep2Celula = document.createElement('td');
    aep2Celula.textContent = aluno.aep2;
    aep2Celula.addEventListener('dblclick', () => {
        editaInput(aep2Celula);
    });
    novoItem.appendChild(aep2Celula);

    const integrada2Celula = document.createElement('td');
    integrada2Celula.textContent = aluno.integrada2;
    integrada2Celula.addEventListener('dblclick', () => {
        editaInput(integrada2Celula);
    });
    novoItem.appendChild(integrada2Celula);

    const media1Celula = document.createElement('td');
    media1Celula.textContent = aluno.media1;
    novoItem.appendChild(media1Celula);

    const media2Celula = document.createElement('td');
    media2Celula.textContent = aluno.media2;
    novoItem.appendChild(media2Celula);

    const mediaFinalCelula = document.createElement('td');
    mediaFinalCelula.textContent = aluno.mediaFinal;
    novoItem.appendChild(mediaFinalCelula);

    const situaçaoCelula = document.createElement('td');
    situaçaoCelula.textContent = determinarsituaçao(parseFloat(aluno.mediaFinal));
    novoItem.appendChild(situaçaoCelula);

    adicionarBotaoExcluir(novoItem);
}

function adicionarBotaoExcluir(novoItem) {
    const excluirCelula = document.createElement('td');
    const botaoExcluir = document.createElement('button');
    botaoExcluir.textContent = 'Excluir';
    botaoExcluir.addEventListener('click', () =>excluirAluno(novoItem) );
    excluirCelula.appendChild(botaoExcluir);
    novoItem.appendChild(excluirCelula); 
}

function editarAluno(novoInput, alunos) {
    const textoItem = novoInput.previousElementSibling;

 
    novoInput = document.createElement('input');
    novoInput.type = 'text';

    novoInput.value = textoItem.textContent;

    novoInput.addEventListener('blur', () => {
        textoItem.textContent = novoInput.value;
        const indice = alunos.indexOf(alunos);
        alunos[indice].nome = novoInput.value;
        alunos[indice].email = novoInput.value;
        alunos[indice].ra = novoInput.value;
        alunos[indice].aep1 = novoInput.value;
        alunos[indice].integrada1 = novoInput.value;
        alunos[indice].prova1 = novoInput.value;
        alunos[indice].aep2 = novoInput.value;
        alunos[indice].integrada2 = novoInput.value;
        alunos[indice].prova2 = novoInput.value;

        localStorage.setItem('alunos', JSON.stringify(alunos));
    });
    textoItem.replaceWith(novoInput) 
}


function adicionaTabelaLocalStorage(aluno) {
    const localStorage = window.localStorage;
    let alunos = [];

    if (localStorage.getItem('alunos') !== null) {
        alunos = JSON.parse(localStorage.getItem('alunos'));
    }

    alunos.push(aluno);
    localStorage.setItem('alunos', JSON.stringify(alunos));
}

function mediaGeral(media1, media2) {
    return (parseFloat(media1) + parseFloat(media2)) / 2;
}

function media1b(prova1b, aep1, provaintegrada1b) {
    const m1 = (prova1b + aep1 + provaintegrada1b);
    return m1;
}

function media2b(prova2b, aep2, provaintegrada2b) {
    const m2 = (prova2b + aep2 + provaintegrada2b);
    return m2;
}

function mediaFinal(m1, m2) {
    const mediafinal = (Number(m1) + Number(m2)) / 2;
    return mediafinal;
}

function determinarsituaçao(mediafinal) {
    if (mediafinal >= 6) {
        return 'Aprovado';
    } else if (mediafinal >= 3) {
        return 'Recuperação';
    } else {
        return 'Reprovado';
    }
}

function novoAluno(nomeAluno, raAluno, emailAluno, alunoaep1, integrada1, prova1, aep2A, integrada2, prova2, idAluno) {
    m1 = media1b(parseFloat(prova1), parseFloat(alunoaep1), parseFloat(integrada1));
    m2 = media2b(parseFloat(prova2), parseFloat(aep2A), parseFloat(integrada2));
    mediaFinalResult = mediaFinal(m1, m2);
    return {
        ra: raAluno,
        nome: nomeAluno,
        email: emailAluno,
        prova1: prova1,
        aep1: alunoaep1,
        integrada1: integrada1,
        prova2: prova2,
        aep2: aep2A,
        integrada2: integrada2,
        media1: m1.toFixed(2),
        media2: m2.toFixed(2),
        mediaFinal: mediaFinalResult.toFixed(2),
        id: idAluno,
    }
}

function mediaGeral() {
    const alunosArmazenados = JSON.parse(localStorage.getItem('alunos'));
    if (alunosArmazenados && alunosArmazenados.length > 0) {
        let totalMediaGeral = 0;
        alunosArmazenados.forEach(aluno => {
            totalMediaGeral += parseFloat(aluno.mediaFinal)
        });
        const mediaGeral = totalMediaGeral / alunosArmazenados.length;
        return mediaGeral.toFixed(2);
    } else {
        return 0;
    }
}

function excluirAluno(linha) {
    const tabelaAlunos = document.getElementById('tabela_alunos');
    const alunosArmazenados = JSON.parse(localStorage.getItem('alunos'));
    const indice = linha.rowIndex - 1;
    alunosArmazenados.splice(indice, 1);
    localStorage.setItem('alunos', JSON.stringify(alunosArmazenados));
    tabelaAlunos.deleteRow(indice + 1);
}

validaSeExisteDadosdoAlunoNoLocalStorageEMostraNaTela()
