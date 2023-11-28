// Definido array de alunos
let alunos = [
    {
        nome: "Juan",
        email: "jgomes@gmail.com",
        telefone: 21997263344,
        work: "Front-End Dev"
    },
    {
        nome: "Jaque",
        email: "jaque@gmail.com",
        telefone: 21974450073,
        work: "backend"
    },
    {
        nome: "Julinha",
        email: "juju@msn.com",
        telefone: 21979984073,
        work: "fullstack"
    },
    {
        nome: "Lucao",
        email: "lucao@hotmail.com",
        telefone: 21954454075,
        work: "mobile"
    },
    {
        nome: "Inacio",
        email: "inacio@yahoo.com",
        telefone: 21977458473,
        work: "mobile"
    },
    {
        nome: "Maurao",
        email: "maurao@hotmail.com",
        telefone: 21944488576,
        work: "frontend"
    },
    {
        nome: "Ramonzao",
        email: "monzao@gmail.com",
        telefone: 2173484973,
        work: "frontend"
    },
    {
        nome: "Davizao",
        email: "davi@msn.com",
        telefone: 21975584073,
        work: "frontend"
    },
];

// Carregar os dados do array na tela

window.onload = (event) => {
    let tbody = document.querySelector("#myTable");

    alunos.forEach ((aluno, index) => {
        let tr = document.createElement("tr");

        let tdCod = document.createElement("td");
        let tdNome = document.createElement("td");
        let tdEmail = document.createElement("td");
        let tdTelefone = document.createElement("td");
        let tdWork = document.createElement("td");
        let tdBotao = document.createElement("td");

        tdCod.textContent = index;
        tdNome.textContent = aluno.nome;
        tdEmail.textContent = aluno.email;
        tdTelefone.textContent = aluno.telefone;
        tdWork.textContent = aluno.work;
        tdBotao.innerHTML = `<button class="btn-remover" onclick="remover()this"`;

        tr.appendChild(tdCod);
        tr.appendChild(tdNome);
        tr.appendChild(tdEmail);
        tr.appendChild(tdTelefone);
        tr.appendChild(tdWork);
        tr.appendChild(tdBotao);

        tbody.appendChild(tr);
    });
}

function remover (id) {
    let row = id.parentNode.parentNode.id;
    row = document.getElementById(row);
    row.parentNode.removeChild(row);
    return false
}