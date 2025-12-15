const citações = [
  { texto: "A vida é o que acontece quando você está ocupado fazendo outros planos.", autor: "John Lennon" },
  { texto: "O único lugar onde o sucesso vem antes do trabalho é no dicionário.", autor: "Vidal Sassoon" },
  { texto: "O impossível é só uma opinião.", autor: "Paulo Coelho" },
  { texto: "O que você faz hoje pode melhorar todos os seus amanhãs.", autor: "Ralph Marston" },
  { texto: "A maior glória não é nunca cair, mas levantar-se sempre depois de uma queda.", autor: "Confúcio" }
]

const citaçãoElement = document.getElementById("citação")
const autorElement = document.getElementById("autor")
const botao = document.getElementById("nova-citação")

botao.addEventListener("click", () => {
  const aleatorio = Math.floor(Math.random() * citações.length)
  citaçãoElement.textContent = `"${citações[aleatorio].texto}"`
  autorElement.textContent = `- ${citações[aleatorio].autor}`
})
