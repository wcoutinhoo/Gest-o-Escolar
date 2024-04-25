function adicionaDadosAluno(){
    const nomeAluno = document.getElementById('input_nome').value;
    const raAluno = document.getElementById('input_ra').value;
    const emailAluno = document.getElementById('input_email').value;

    if((nomeAluno.trim()!= '') && (raAluno.trim()!= '') && (emailAluno.trim()!='')){
        criaNovoAluno(nomeAluno, raAluno, emailAluno);
        document.getElementById('input_ra').value='';
        document.getElementById('input_nome').value='';
        document.getElementById('input_email').value='';
    }else{
        alert('Preencha dados dos alunos');
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
