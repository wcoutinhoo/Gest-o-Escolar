

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
