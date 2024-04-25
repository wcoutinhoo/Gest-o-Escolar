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
