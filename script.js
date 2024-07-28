function calcularLucro() {
  const numCodornas = document.getElementById('numCodornas').value;
  const precoRacao = document.getElementById('precoRacao').value;

  // Definindo constantes
  const consumoDiarioPorCodorna = 30; // em gramas
  const ovosPorCodornaPorDia = 1;
  const precoCartela = 7; // em reais
  const ovosPorCartela = 30;
  const custoAdicionalPorCodorna = 0.25; // em reais para 30 dias
  const custoPor30Ovos = 0.90; // em reais

  if (numCodornas <= 0 || precoRacao <= 0) {
      alert("Por favor, insira valores válidos.");
      return;
  }

  // Calcular o consumo mensal de ração
  const consumoMensalTotal = (numCodornas * consumoDiarioPorCodorna * 30) / 1000; // em kg
  const custoMensalRacao = consumoMensalTotal * precoRacao; // em reais

  // Calcular custo adicional por codorna para 30 dias
  const custoAdicionalTotal = numCodornas * custoAdicionalPorCodorna; // em reais

  // Calcular a produção mensal de ovos
  const producaoMensalOvos = numCodornas * ovosPorCodornaPorDia * 30;
  const cartelasMensais = producaoMensalOvos / ovosPorCartela;
  const receitaMensal = cartelasMensais * precoCartela; // em reais

  // Calcular custo adicional a cada 30 ovos
  const custoAdicionalPorOvos = Math.floor(producaoMensalOvos / 30) * custoPor30Ovos;

  // Calcular o lucro mensal
  const lucroMensal = receitaMensal - (custoMensalRacao + custoAdicionalTotal + custoAdicionalPorOvos); // em reais

  // Mostrar o resultado
  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = `Lucro Mensal: R$ ${lucroMensal.toFixed(2)}`;
}
