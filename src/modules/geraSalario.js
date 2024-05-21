export default class GeraSalario {
  constructor() {
    this.evento()
    this.salBase = document.querySelector('.salBase')
    this.inpExtra = document.querySelector('.hExtra')
    this.hExtra100 = document.querySelector('.hExtra100')
    this.adiantamento = document.querySelector('.adiantamento')
    this.mes = document.querySelector('#mes')
    
  }

  evento() {
    document.addEventListener('click', e => {

      if (e.target.classList.contains('gerar')) {
        //handleSubmit será responsavel por checar se
        //campos são validos, e previnir o padrão de
        //recarga da pagina.
        if (!this.handleSubmit(e)) return

        this.handleSubmit(e)
        this.limpaDiv()

        const salarioBase = this.formataSalarioBase()

        const valorHora = this.calculaHora(salarioBase)
        const horaExtra100 = this.calculaHoraExtra100(valorHora)
        const horaExtra = this.calculaExtra(valorHora)
        const salarioFamilia = this.salarioFamilia(salarioBase)
        const diasUteis = this.contarDiasUteis()
        const domingos = this.contarDomingos()
    
        const dsr = this.calculaDsr(diasUteis, domingos, horaExtra)
        const salBruto = this.calculaSalarioBruto(salarioBase, horaExtra, horaExtra100, salarioFamilia, dsr)
        const inss = this.descontoInss(salBruto, salarioFamilia, salarioBase)
        const descontoValeTransporte = this.descontoValeTransporte(salarioBase)
        
        const valAdiantamento = Number(this.adiantamento.value)
        
        const valContAssociativa = this.contribuicaoAssociativa()
        console.log(valContAssociativa + ' valContAssociativa')

        const salLiquido = this.salarioLiq(salBruto, inss, descontoValeTransporte, valAdiantamento, valContAssociativa)
        console.log(salBruto, inss, descontoValeTransporte, valAdiantamento, valContAssociativa)
        
        
        console.log(salBruto - salarioFamilia)

        this.exibe(salarioBase, 'Salario Base -> ')
        this.exibe(horaExtra, '<br>Total horas extras 50% -> ')
        this.exibe(horaExtra100, 'Total horas extra 100% -> ')
        this.exibe(salarioFamilia, 'Salario família -> ')
        this.exibe(dsr, 'D.S.R H.Extras -> ')
        this.exibe(salBruto, '<br>Salário Bruto -> ')
        this.exibe(inss, '<br>Desconto inss -> ')
        this.exibe(descontoValeTransporte, 'Desconto Vale-transporte -> ')
        this.exibe(valAdiantamento, 'Desconto Quinzena -> ')
        if (valContAssociativa === 57.11){
          this.exibe(valContAssociativa, 'Desconto CONT. ASSOCIATIVA -> ')
        }
        this.exibe(salLiquido, '<br>Salário líquido -> ')

      }
    })
  }
  
  validaValor(valor){
    let valid = true
    let controle = valor
    
    controle++
    if (!controle++) {
      return valid = false
    }
    
    return valid
  }
  
  
  formataSalarioBase(){
    let valSal = Number(this.salBase.value)
    
    valSal = valSal.toString().replace(/[.,]/g, "")

   if (valSal.length > 5){
      return Number(valSal /= 100)
    } 
    if (valSal.toString().length > 4) {
      return Number(valSal /= 10)
    }

    return Number(valSal)
  }

  exibe(valor, msg) {
    const div = document.querySelector('.res')
    const p = document.createElement('p')
    div.appendChild(p)

    return p.innerHTML += `<p>${msg + valor}</p>`
  }

  limpaDiv() {
    let div = document.querySelector('.res')
    return div.innerHTML = ''
  }

  calculaHora(salarioBase) {
    let valorHora = Number.parseFloat(salarioBase / 220)
    valorHora = Number(valorHora.toFixed(2))

    return valorHora
  }

  calculaExtra(valorHora) {
    const qtdHoras = Number(this.inpExtra.value)
    valorHora = parseFloat(valorHora)
    console.log(valorHora)
    valorHora += (valorHora / 2)
    let total = Number((valorHora * qtdHoras).toFixed(2))
    
    return total
  }

  calculaHoraExtra100(valor) {
    const quantidadeHoras = Number(this.hExtra100.value)
    valor *= 2
    const total = Number((valor * quantidadeHoras).toFixed(2))
    
    return total
  }

  salarioFamilia(salBase) {
    const select = document.querySelector('.salFamilia')
    let option = select.value

    let salarioFamilia = Number(62.04)

    if (salBase > 1819.26) return 'Sálario acima de 1819.26 não tem direito ao salário família.'
    if (option !== 'sim') {
      
      return salarioFamilia = 0
    }

    return salarioFamilia
  }
  
  contribuicaoAssociativa() {
    const select = document.querySelector('.contAssociativa')
    let option = select.value

    let valContAssociativa = Number(57.11)

    if (option !== 'sim') {
      return valContAssociativa = 0
    }

    console.log(valContAssociativa)
    return valContAssociativa
  }
  
  calculaDsr(diasUteis, domingos, hExtra50) {
    let dsr = 0
    

    try {
      if (diasUteis !== 0) {
        dsr = Number((hExtra50 / diasUteis) * domingos)
        dsr = Number(dsr.toFixed(2))
      }
    } catch (e) {
      throw e
    }

    return Number(dsr)
  }

  calculaSalarioBruto(salBase, horasExtra, horasExtra100, salFamilia, dsrHExtra) {
    let total = 0
    total += salBase + horasExtra100 + horasExtra + dsrHExtra + salFamilia
    total = Number.parseFloat(total)
    
    console.log(total)
    console.log(dsrHExtra)

    return Number((total).toFixed(2))
  }

  descontoInss(salBruto, salFamilia, salBase) {
    let inss = 0
    
    if (salBruto >= 2338.54) {
      inss = 8.09 / 100 * (salBruto - salFamilia)
      inss = Number((inss).toFixed(2))
      return inss
    }
    
    if(salBruto >= 2305.83){
      inss = 8.0812 / 100 * (salBruto - salFamilia)
      inss = Number((inss).toFixed(2))
      return inss
    }
    
    if(salBruto >= 1839.99){
      inss = 7.85 / 100 * (salBruto - salFamilia)
      inss = Number((inss).toFixed(2))
      return inss
    }
    
    if(salBase >= 1607.52) {
      inss = 7.7361 / 100 * (salBruto - salFamilia)
      inss = Number((inss).toFixed(2))
      return inss
    }
    
    inss = 7.6820 / 100 * (salBruto - salFamilia)
    inss = Number((inss).toFixed(2))
    
    return inss
  }

  descontoValeTransporte(salBase) {
    const select = document.querySelector('.valTransporte')
    const option = select.value

    let valeTransporte = 6 / 100 * salBase
    valeTransporte = Number((valeTransporte).toFixed(2))

    if (option === 'nao') {
      valeTransporte = 0
      return valeTransporte
    }

    return valeTransporte
  }

  salarioLiq(salBruto, inss, descontoVale, adiantamento = 0, valContAssociativa = 0) {
    let salLiquido = (salBruto - (inss + descontoVale + adiantamento + valContAssociativa))

    salLiquido = Number((salLiquido).toFixed(2))
    
    console.log(salLiquido)
    return salLiquido
  }
  

  handleSubmit(e) {
    e.preventDefault()
    this.limpaDiv()
    const camposValidos = this.camposSaoValidos()
    return camposValidos
  }

  camposSaoValidos() {
    //valid é uma flag, ela pode assumir verdadeira
    //se o campo for valido e falso para invalido
    //camposSaoValidos irá me retornar ela.
    let valid = true
    const formulario = document.querySelector('.formulario')

    for (let errorText of formulario.querySelectorAll('.error-text')) {
      errorText.remove()
    }
    
    for (let campo of formulario.querySelectorAll('.valor')) {
      if (!this.validaValor(Number(campo.value))) {
          this.criaErro(campo, '*Insira um valor válido.')
          valid = false
        }
      }

    //o for está selecionando cada campo do formulario
    for (let campo of formulario.querySelectorAll('.validar')) {
      const campoNome = campo.placeholder
      if (!campo.value) {
        this.criaErro(campo, `*Campo ${campoNome} não pode estar em branco.`)
        valid = false
      }
    }

    return valid
  }

  criaErro(campo, msg) {
    const div = document.createElement('div')
    div.innerHTML = msg
    div.classList.add('error-text')
    //linha abaixo adiciona a msg logo apos o campo
    campo.insertAdjacentElement('afterend', div)
  }

  limpaErro() {
    const erro = document.querySelector('.error-text')
    erro.innerHTML = ''
  }
  
  contarDiasUteis() {
    // Obtém o valor do input de mês
    var inputMes = document.getElementById('mes').value;
    
    // Divide o valor do input em ano e mês
    var [ano, mes] = inputMes.split('-');
    
    // Cria uma nova data com o primeiro dia do mês especificado
    var dataInicio = new Date(ano, mes - 1, 1);
    
    // Obtém o último dia do mês especificado
    var dataFim = new Date(ano, mes, 0);
    
    // Inicializa um contador de dias úteis
    var diasUteis = 0;
    
    // Itera sobre cada dia do mês
    for (var data = dataInicio; data <= dataFim; data.setDate(data.getDate() + 1)) {
      // Verifica se o dia atual não é sábado nem domingo
      if (data.getDay() !== 0) {
        diasUteis++;
      }
    }
    
    // Exibe o resultado
    return Number(diasUteis)
  }
  
  contarDomingos() {
    // Obtém o valor do input de mês
    var inputMes = document.getElementById('mes').value;
    
    // Divide o valor do input em ano e mês
    var [ano, mes] = inputMes.split('-');
    
    // Cria uma nova data com o primeiro dia do mês especificado
    var dataInicio = new Date(ano, mes - 1, 1);
    
    // Obtém o último dia do mês especificado
    var dataFim = new Date(ano, mes, 0);
    
    // Inicializa um contador de dias úteis
    var domingos = 0;
    
    // Itera sobre cada dia do mês
    for (var data = dataInicio; data <= dataFim; data.setDate(data.getDate() + 1)) {
      // Verifica se o dia atual não é sábado nem domingo
      if (data.getDay() === 0) {
        domingos++;
      }
    }
    
    // Exibe o resultado
    return Number(domingos)
  }

}

class Zelador extends GeraSalario {
  constructor(){
    super()
    this.salBase.value = Number(1427.80)
  }
  /*
  calculaHora(){
    let valorHora = Number(6.48)
    return valorHora
  }*/
}

class PorteiroDiurno extends GeraSalario{
  constructor(){
    super()
    this.salBase.value = Number(1499.47)
  }
  
  calculaHora(){
    let valorHora = Number(6.8157)
    return valorHora
  }
}

class PorteiroNoturno extends GeraSalario{
  constructor(){
    super()
    this.salBase.value = Number((1499.47 + 299.89).toFixed(2))
  }
  
  calculaHora(){
    let valorHora = Number(8.1789)
    return valorHora
  }
  
  descontoValeTransporte() {
    const select = document.querySelector('.valTransporte')
    const option = select.value

    let valeTransporte = (6 / 100) * 1499.47
    valeTransporte = Number((valeTransporte).toFixed(2))

    if (option === 'nao') {
      valeTransporte = 0
      return valeTransporte
    }

    return valeTransporte
  }
}


const selecionaProfissao = (option) => {
  let profissao = new GeraSalario()
  
  if(option === 'padrao'){
    profissao = new GeraSalario()
    return profissao
  }
  
  if(option === 'zelador'){
    profissao = new Zelador()
    return profissao
  }
  
  if(option === 'porteiroDiurno'){
    profissao = new PorteiroDiurno()
    return profissao
  }
  
  if(option === 'porteiroNoturno'){
    const labelSal = document.querySelector('.labelSal')
    labelSal.innerHTML = 'Salário Base + Adicional noturno (299,89)'
    profissao = new PorteiroNoturno()
    return profissao
  }
  
  return profissao
}


const selectProfissao = document.querySelector('.profissao')

selectProfissao.addEventListener('change', () => {
  let option = selectProfissao.value
  let inpSalarioBase = document.querySelector('.salBase')
  inpSalarioBase.value = ''
  selecionaProfissao(option)
})

export const geraSalario = new GeraSalario()

/*
if(option === 'padrao') {
  const geraSalario = new GeraSalario()
}

if(option === 'zelador') {
  const zelador = new Zelador()
} */



