class Time {
    constructor(nome) {
        this.nome = nome;
        this.vitorias = 0;
        this.empates = 0;
        this.derrotas = 0;
        this.golsMarcados = 0;
        this.golsSofridos = 0;
    }

    calcularPontos() {
        return this.vitorias * 3 + this.empates;
    }

    calcularSaldo() {
        return this.golsMarcados - this.golsSofridos;
    }

    registrarFimDeJogo(golsPro, golsContra) {
        this.golsMarcados = this.golsMarcados + golsPro;
        this.golsSofridos = this.golsSofridos + golsContra;

        if (golsPro > golsContra) {
            this.vitorias = this.vitorias + 1;
        } else if (golsPro < golsContra) {
            this.derrotas = this.derrotas + 1;
        } else {
            this.empates = this.empates + 1;
        }
    }
}

class Partida {
    constructor(mandante, visitante) {
        this.mandante = mandante;
        this.visitante = visitante;
    }

    jogar(golsM, golsV) {
        this.mandante.registrarFimDeJogo(golsM, golsV);
        this.visitante.registrarFimDeJogo(golsV, golsM);
    }
}

class Campeonato {
    constructor() {
        this.equipes = [];
    }

    adicionarTime(time) {
        this.equipes.push(time);
    }

    obterTabela() {
        for (let i = 0; i < this.equipes.length; i++) {
            for (let j = i + 1; j < this.equipes.length; j++) {
                let a = this.equipes[i];
                let b = this.equipes[j];

                if (b.calcularPontos() > a.calcularPontos()) {
                    let temp = this.equipes[i];
                    this.equipes[i] = this.equipes[j];
                    this.equipes[j] = temp;
                }
            }
        }
        return this.equipes;
    }
}

const campeonato = new Campeonato();

function addTime() {
    let nome = document.getElementById("nomeTime").value;
    if (nome == "") return;

    let t = new Time(nome);
    campeonato.adicionarTime(t);

    atualizarSelects();
    atualizarTabela();

    document.getElementById("nomeTime").value = "";
}

function atualizarSelects() {
    let mandante = document.getElementById("mandante");
    let visitante = document.getElementById("visitante");

    mandante.innerHTML = "";
    visitante.innerHTML = "";

    for (let i = 0; i < campeonato.equipes.length; i++) {
        let nome = campeonato.equipes[i].nome;
        mandante.innerHTML += "<option value='" + i + "'>" + nome + "</option>";
        visitante.innerHTML += "<option value='" + i + "'>" + nome + "</option>";
    }
}

function jogar() {
    let iM = document.getElementById("mandante").value;
    let iV = document.getElementById("visitante").value;

    if (iM == iV) {
        alert("Escolha times diferentes");
        return;
    }

    let golsM = parseInt(document.getElementById("golsM").value);
    let golsV = parseInt(document.getElementById("golsV").value);

    if (isNaN(golsM) || isNaN(golsV)) return;

    let p = new Partida(campeonato.equipes[iM], campeonato.equipes[iV]);
    p.jogar(golsM, golsV);

    atualizarTabela();
}

function atualizarTabela() {
    let tabela = document.getElementById("tabela");
    tabela.innerHTML = "";

    let lista = campeonato.obterTabela();

    for (let i = 0; i < lista.length; i++) {
        let t = lista[i];

        tabela.innerHTML +=
            "<tr>" +
            "<td>" + t.nome + "</td>" +
            "<td>" + t.calcularPontos() + "</td>" +
            "<td>" + t.vitorias + "</td>" +
            "<td>" + t.empates + "</td>" +
            "<td>" + t.derrotas + "</td>" +
            "<td>" + t.golsMarcados + "</td>" +
            "<td>" + t.golsSofridos + "</td>" +
            "<td>" + t.calcularSaldo() + "</td>" +
            "</tr>";
    }
}
