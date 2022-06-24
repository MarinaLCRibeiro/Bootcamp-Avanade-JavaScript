const alunos = [
    {
        nome: 'João',
        nota: 5,
        turma: '18',
    },

    {
        nome: 'Maria',
        nota: 4,
        turma: '18'
    },
    {
        nome: 'Carlos',
        nota: 10,
        turma: '3h',
    },
]


function alunosAprovados(arr, media) {
    let aprovados = []
    for (let i = 0; i < arr.length; i++) {
        const { nota, nome } = arr[i]; //object distracting
        if (nota >= media) {
            aprovados.push(nome)
        }
    }
    return aprovados
}
console.log(alunosAprovados(alunos, 5))