function validaSeExisteaAlgosalvoNoLocalStorageEMostraNaTela() {
    const localStorage = window.localStorage
    if (localStorage.getItem('novoAluno','FormNotas','tabela_aluno') != null) {
        const nãoseiAinda = JSON.parse(localStorage.getItem('Cadastros','FormNotas2','cadastroNotas','tabela_aluno'))
        nãoseiAinda.daforEach(tarefa => {
            const nãoseiAinda = document.getElementById('Cadastros','FormNotas2','cadastroNotas','tabela_aluno')
            
            if (tarefa.status === 'fechada') {
               novoItem.style.textDecoration =  'line-through'    
            }
            listaTarefnãoseiAinda.appendChild(novoItem)
        });
    }
}

function adicionaDadosAluno() {
    const nomeAluno = document.getElementById('input_nome').value;
    const raAluno = document.getElementById('input_ra').value;
    const emailAluno = document.getElementById('input_email').value;
    const alunoaep1 = document.getElementById('input_aep_1').value;
    const integrada1 = document.getElementById('input_prova_integrada_1').value;
    const prova1 = document.getElementById('input_prova_1').value;
    const aep2A = document.getElementById('input_aep_2').value;
    const integrada2 = document.getElementById('input_prova_integrada_2').value;
    const prova2 = document.getElementById('input_prova_2').value;


    if (nomeAluno.trim() !== '' && raAluno.trim() !== '' && emailAluno.trim() !== '' && alunoaep1.trim() !== '' && integrada1.trim() !== '' && prova1.trim() !== '' && aep2A.trim() !== '' && integrada2.trim() !== '' && prova2.trim() !== '') {
        const aluno = novoAluno(nomeAluno, raAluno, emailAluno, alunoaep1, integrada1, prova1, aep2A, integrada2, prova2);
        criaNovoAluno(aluno);
        document.getElementById('input_ra').value = '';
        document.getElementById('input_nome').value = '';
        document.getElementById('input_email').value = '';
        document.getElementById('input_aep_1').value = '';
        document.getElementById('input_integrada_1').value = '';
        document.getElementById('input_prova_1').value = '';
        document.getElementById('input_aep_2').value = '';
        document.getElementById('input_integrada_2').value = '';
        document.getElementById('input_prova_2').value = '';

    } else {
        alert('Preencha os dados do aluno');
    }
}


function criaNovoAluno(nomeAluno, raAluno, emailAluno){
    const listaAlunos = document.getElementById(listaAlunos);
    let qtdAlunos = listaAlunos.children.length;
    const novoItem = document.createElement('li');
    novoItem.innerText = `Nome: ${aluno['nome']}, Email: ${objeto['email']}, RA: ${objeto.ra}`;
    novoItem.id = `aluno_id_${qtdAlunos++}`

    listaAlunos.appendChild(novoItem)

    const aluno = montaObjeto(nomeAluno, raAluno, emailAluno);
    adicionaLocalStorage(aluno)
}

function media1b(prova1b, aep1, provaintegrada1b){
    const m1 = ((prova1b*0.8)+(aep1*0.1)+(provaintegrada1b*0.1));
    return m1;
}

function media2b(prova2b, aep2, provaintegrada2b){
    const m2 = ((prova2b*0.8)+(aep2*0.1)+(provaintegrada2b*0.1));
    return m2;
}
function mediaFinal(m1, m2){
    const mediafinal = (Number(m1) + Number(m2)) / 2;
    return mediafinal;
}

function determinarsituaçao(mediafinal){
    if (mediafinal >= 6) {
        return 'Aprovado';
    } else if (mediafinal >=3) {
        return 'Recuperação';
    } else {
        return 'Reprovado';
    }
}
