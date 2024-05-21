/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/geraSalario.js":
/*!************************************!*\
  !*** ./src/modules/geraSalario.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GeraSalario),
/* harmony export */   geraSalario: () => (/* binding */ geraSalario)
/* harmony export */ });
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var GeraSalario = /*#__PURE__*/function () {
  function GeraSalario() {
    _classCallCheck(this, GeraSalario);
    this.evento();
    this.salBase = document.querySelector('.salBase');
    this.inpExtra = document.querySelector('.hExtra');
    this.hExtra100 = document.querySelector('.hExtra100');
    this.adiantamento = document.querySelector('.adiantamento');
    this.mes = document.querySelector('#mes');
  }
  return _createClass(GeraSalario, [{
    key: "evento",
    value: function evento() {
      var _this = this;
      document.addEventListener('click', function (e) {
        if (e.target.classList.contains('gerar')) {
          //handleSubmit será responsavel por checar se
          //campos são validos, e previnir o padrão de
          //recarga da pagina.
          if (!_this.handleSubmit(e)) return;
          _this.handleSubmit(e);
          _this.limpaDiv();
          var salarioBase = _this.formataSalarioBase();
          var valorHora = _this.calculaHora(salarioBase);
          var horaExtra100 = _this.calculaHoraExtra100(valorHora);
          var horaExtra = _this.calculaExtra(valorHora);
          var salarioFamilia = _this.salarioFamilia(salarioBase);
          var diasUteis = _this.contarDiasUteis();
          var domingos = _this.contarDomingos();
          var dsr = _this.calculaDsr(diasUteis, domingos, horaExtra);
          var salBruto = _this.calculaSalarioBruto(salarioBase, horaExtra, horaExtra100, salarioFamilia, dsr);
          var inss = _this.descontoInss(salBruto, salarioFamilia, salarioBase);
          var descontoValeTransporte = _this.descontoValeTransporte(salarioBase);
          var valAdiantamento = Number(_this.adiantamento.value);
          var valContAssociativa = _this.contribuicaoAssociativa();
          console.log(valContAssociativa + ' valContAssociativa');
          var salLiquido = _this.salarioLiq(salBruto, inss, descontoValeTransporte, valAdiantamento, valContAssociativa);
          console.log(salBruto, inss, descontoValeTransporte, valAdiantamento, valContAssociativa);
          console.log(salBruto - salarioFamilia);
          _this.exibe(salarioBase, 'Salario Base -> ');
          _this.exibe(horaExtra, '<br>Total horas extras 50% -> ');
          _this.exibe(horaExtra100, 'Total horas extra 100% -> ');
          _this.exibe(salarioFamilia, 'Salario família -> ');
          _this.exibe(dsr, 'D.S.R H.Extras -> ');
          _this.exibe(salBruto, '<br>Salário Bruto -> ');
          _this.exibe(inss, '<br>Desconto inss -> ');
          _this.exibe(descontoValeTransporte, 'Desconto Vale-transporte -> ');
          _this.exibe(valAdiantamento, 'Desconto Quinzena -> ');
          if (valContAssociativa === 57.11) {
            _this.exibe(valContAssociativa, 'Desconto CONT. ASSOCIATIVA -> ');
          }
          _this.exibe(salLiquido, '<br>Salário líquido -> ');
        }
      });
    }
  }, {
    key: "validaValor",
    value: function validaValor(valor) {
      var valid = true;
      var controle = valor;
      controle++;
      if (!controle++) {
        return valid = false;
      }
      return valid;
    }
  }, {
    key: "formataSalarioBase",
    value: function formataSalarioBase() {
      var valSal = Number(this.salBase.value);
      valSal = valSal.toString().replace(/[.,]/g, "");
      if (valSal.length > 5) {
        return Number(valSal /= 100);
      }
      if (valSal.toString().length > 4) {
        return Number(valSal /= 10);
      }
      return Number(valSal);
    }
  }, {
    key: "exibe",
    value: function exibe(valor, msg) {
      var div = document.querySelector('.res');
      var p = document.createElement('p');
      div.appendChild(p);
      return p.innerHTML += "<p>".concat(msg + valor, "</p>");
    }
  }, {
    key: "limpaDiv",
    value: function limpaDiv() {
      var div = document.querySelector('.res');
      return div.innerHTML = '';
    }
  }, {
    key: "calculaHora",
    value: function calculaHora(salarioBase) {
      var valorHora = Number.parseFloat(salarioBase / 220);
      valorHora = Number(valorHora.toFixed(2));
      return valorHora;
    }
  }, {
    key: "calculaExtra",
    value: function calculaExtra(valorHora) {
      var qtdHoras = Number(this.inpExtra.value);
      valorHora = parseFloat(valorHora);
      console.log(valorHora);
      valorHora += valorHora / 2;
      var total = Number((valorHora * qtdHoras).toFixed(2));
      return total;
    }
  }, {
    key: "calculaHoraExtra100",
    value: function calculaHoraExtra100(valor) {
      var quantidadeHoras = Number(this.hExtra100.value);
      valor *= 2;
      var total = Number((valor * quantidadeHoras).toFixed(2));
      return total;
    }
  }, {
    key: "salarioFamilia",
    value: function salarioFamilia(salBase) {
      var select = document.querySelector('.salFamilia');
      var option = select.value;
      var salarioFamilia = Number(62.04);
      if (salBase > 1819.26) return 'Sálario acima de 1819.26 não tem direito ao salário família.';
      if (option !== 'sim') {
        return salarioFamilia = 0;
      }
      return salarioFamilia;
    }
  }, {
    key: "contribuicaoAssociativa",
    value: function contribuicaoAssociativa() {
      var select = document.querySelector('.contAssociativa');
      var option = select.value;
      var valContAssociativa = Number(57.11);
      if (option !== 'sim') {
        return valContAssociativa = 0;
      }
      console.log(valContAssociativa);
      return valContAssociativa;
    }
  }, {
    key: "calculaDsr",
    value: function calculaDsr(diasUteis, domingos, hExtra50) {
      var dsr = 0;
      try {
        if (diasUteis !== 0) {
          dsr = Number(hExtra50 / diasUteis * domingos);
          dsr = Number(dsr.toFixed(2));
        }
      } catch (e) {
        throw e;
      }
      return Number(dsr);
    }
  }, {
    key: "calculaSalarioBruto",
    value: function calculaSalarioBruto(salBase, horasExtra, horasExtra100, salFamilia, dsrHExtra) {
      var total = 0;
      total += salBase + horasExtra100 + horasExtra + dsrHExtra + salFamilia;
      total = Number.parseFloat(total);
      console.log(total);
      console.log(dsrHExtra);
      return Number(total.toFixed(2));
    }
  }, {
    key: "descontoInss",
    value: function descontoInss(salBruto, salFamilia, salBase) {
      var inss = 0;
      if (salBruto >= 2338.54) {
        inss = 8.09 / 100 * (salBruto - salFamilia);
        inss = Number(inss.toFixed(2));
        return inss;
      }
      if (salBruto >= 2305.83) {
        inss = 8.0812 / 100 * (salBruto - salFamilia);
        inss = Number(inss.toFixed(2));
        return inss;
      }
      if (salBruto >= 1839.99) {
        inss = 7.85 / 100 * (salBruto - salFamilia);
        inss = Number(inss.toFixed(2));
        return inss;
      }
      if (salBase >= 1607.52) {
        inss = 7.7361 / 100 * (salBruto - salFamilia);
        inss = Number(inss.toFixed(2));
        return inss;
      }
      inss = 7.6820 / 100 * (salBruto - salFamilia);
      inss = Number(inss.toFixed(2));
      return inss;
    }
  }, {
    key: "descontoValeTransporte",
    value: function descontoValeTransporte(salBase) {
      var select = document.querySelector('.valTransporte');
      var option = select.value;
      var valeTransporte = 6 / 100 * salBase;
      valeTransporte = Number(valeTransporte.toFixed(2));
      if (option === 'nao') {
        valeTransporte = 0;
        return valeTransporte;
      }
      return valeTransporte;
    }
  }, {
    key: "salarioLiq",
    value: function salarioLiq(salBruto, inss, descontoVale) {
      var adiantamento = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var valContAssociativa = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
      var salLiquido = salBruto - (inss + descontoVale + adiantamento + valContAssociativa);
      salLiquido = Number(salLiquido.toFixed(2));
      console.log(salLiquido);
      return salLiquido;
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      this.limpaDiv();
      var camposValidos = this.camposSaoValidos();
      return camposValidos;
    }
  }, {
    key: "camposSaoValidos",
    value: function camposSaoValidos() {
      //valid é uma flag, ela pode assumir verdadeira
      //se o campo for valido e falso para invalido
      //camposSaoValidos irá me retornar ela.
      var valid = true;
      var formulario = document.querySelector('.formulario');
      var _iterator = _createForOfIteratorHelper(formulario.querySelectorAll('.error-text')),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var errorText = _step.value;
          errorText.remove();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      var _iterator2 = _createForOfIteratorHelper(formulario.querySelectorAll('.valor')),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var campo = _step2.value;
          if (!this.validaValor(Number(campo.value))) {
            this.criaErro(campo, '*Insira um valor válido.');
            valid = false;
          }
        }

        //o for está selecionando cada campo do formulario
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      var _iterator3 = _createForOfIteratorHelper(formulario.querySelectorAll('.validar')),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _campo = _step3.value;
          var campoNome = _campo.placeholder;
          if (!_campo.value) {
            this.criaErro(_campo, "*Campo ".concat(campoNome, " n\xE3o pode estar em branco."));
            valid = false;
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      return valid;
    }
  }, {
    key: "criaErro",
    value: function criaErro(campo, msg) {
      var div = document.createElement('div');
      div.innerHTML = msg;
      div.classList.add('error-text');
      //linha abaixo adiciona a msg logo apos o campo
      campo.insertAdjacentElement('afterend', div);
    }
  }, {
    key: "limpaErro",
    value: function limpaErro() {
      var erro = document.querySelector('.error-text');
      erro.innerHTML = '';
    }
  }, {
    key: "contarDiasUteis",
    value: function contarDiasUteis() {
      // Obtém o valor do input de mês
      var inputMes = document.getElementById('mes').value;

      // Divide o valor do input em ano e mês
      var _inputMes$split = inputMes.split('-'),
        _inputMes$split2 = _slicedToArray(_inputMes$split, 2),
        ano = _inputMes$split2[0],
        mes = _inputMes$split2[1];

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
      return Number(diasUteis);
    }
  }, {
    key: "contarDomingos",
    value: function contarDomingos() {
      // Obtém o valor do input de mês
      var inputMes = document.getElementById('mes').value;

      // Divide o valor do input em ano e mês
      var _inputMes$split3 = inputMes.split('-'),
        _inputMes$split4 = _slicedToArray(_inputMes$split3, 2),
        ano = _inputMes$split4[0],
        mes = _inputMes$split4[1];

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
      return Number(domingos);
    }
  }]);
}();

var Zelador = /*#__PURE__*/function (_GeraSalario) {
  function Zelador() {
    var _this2;
    _classCallCheck(this, Zelador);
    _this2 = _callSuper(this, Zelador);
    _this2.salBase.value = Number(1427.80);
    return _this2;
  }
  /*
  calculaHora(){
    let valorHora = Number(6.48)
    return valorHora
  }*/
  _inherits(Zelador, _GeraSalario);
  return _createClass(Zelador);
}(GeraSalario);
var PorteiroDiurno = /*#__PURE__*/function (_GeraSalario2) {
  function PorteiroDiurno() {
    var _this3;
    _classCallCheck(this, PorteiroDiurno);
    _this3 = _callSuper(this, PorteiroDiurno);
    _this3.salBase.value = Number(1499.47);
    return _this3;
  }
  _inherits(PorteiroDiurno, _GeraSalario2);
  return _createClass(PorteiroDiurno, [{
    key: "calculaHora",
    value: function calculaHora() {
      var valorHora = Number(6.8157);
      return valorHora;
    }
  }]);
}(GeraSalario);
var PorteiroNoturno = /*#__PURE__*/function (_GeraSalario3) {
  function PorteiroNoturno() {
    var _this4;
    _classCallCheck(this, PorteiroNoturno);
    _this4 = _callSuper(this, PorteiroNoturno);
    _this4.salBase.value = Number((1499.47 + 299.89).toFixed(2));
    return _this4;
  }
  _inherits(PorteiroNoturno, _GeraSalario3);
  return _createClass(PorteiroNoturno, [{
    key: "calculaHora",
    value: function calculaHora() {
      var valorHora = Number(8.1789);
      return valorHora;
    }
  }, {
    key: "descontoValeTransporte",
    value: function descontoValeTransporte() {
      var select = document.querySelector('.valTransporte');
      var option = select.value;
      var valeTransporte = 6 / 100 * 1499.47;
      valeTransporte = Number(valeTransporte.toFixed(2));
      if (option === 'nao') {
        valeTransporte = 0;
        return valeTransporte;
      }
      return valeTransporte;
    }
  }]);
}(GeraSalario);
var selecionaProfissao = function selecionaProfissao(option) {
  var profissao = new GeraSalario();
  if (option === 'padrao') {
    profissao = new GeraSalario();
    return profissao;
  }
  if (option === 'zelador') {
    profissao = new Zelador();
    return profissao;
  }
  if (option === 'porteiroDiurno') {
    profissao = new PorteiroDiurno();
    return profissao;
  }
  if (option === 'porteiroNoturno') {
    var labelSal = document.querySelector('.labelSal');
    labelSal.innerHTML = 'Salário Base + Adicional noturno (299,89)';
    profissao = new PorteiroNoturno();
    return profissao;
  }
  return profissao;
};
var selectProfissao = document.querySelector('.profissao');
selectProfissao.addEventListener('change', function () {
  var option = selectProfissao.value;
  var inpSalarioBase = document.querySelector('.salBase');
  inpSalarioBase.value = '';
  selecionaProfissao(option);
});
var geraSalario = new GeraSalario();

/*
if(option === 'padrao') {
  const geraSalario = new GeraSalario()
}

if(option === 'zelador') {
  const zelador = new Zelador()
} */

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/papelDeParede.jpg */ "./src/assets/img/papelDeParede.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

header{
  text-align: center;
  color: #555555;
}

body {
    display: flex;
    flex-direction: column;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    font-size: 22px;
    font-weight: bold;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

main{
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 10px;
  gap: 1em;
  background-color: rgb(255, 255, 255);
}

input{
  padding: 10px 5px;
}

button{
  padding: 10px 5px;
  border: none;
}

select{
  padding: 10px 5px;
}

.res{
  font-size: 18px;
  margin-bottom: 15px;
}

ul{
  text-align: left;
  margin-left: 15px;
}

.formulario{
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 1em;
}

.error-text{
  font-size: 0.8em;
  color: red;
}

.mes{
  display: block;
}

input:invalid {
  animation: justshake 0.3s forwards;
  color: red;
}

@keyframes justshake {
  25% {
    transform: translateX(5px);
  }

  50% {
    transform: translateX(-5px);
  }

  75% {
    transform: translateX(5px);
  }

  100% {
    transform: translateX-(5px);
  }
}

@media only screen and (min-width: 600px) {
  button:hover{
    background-color: #BDBEC7;
  }

  main{
    display: flex;
    flex-direction: column;
    width: 650px;
    margin: auto;
    padding: 10px;
    gap: 1em;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }
}

@media only screen and (max-width: 600px){
  button:active{
    background-color: #BDBEC7;
  }

  main{
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 90%;
    gap: 1em;
  }

  body{
    font-size: 16px;
    font-weight: none;
  }
}
`, "",{"version":3,"sources":["webpack://./src/assets/css/style.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,cAAc;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mDAAmD;IACnD,eAAe;IACf,iBAAiB;IACjB,yDAA+C;AACnD;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,aAAa;EACb,QAAQ;EACR,oCAAoC;AACtC;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,gBAAgB;EAChB,UAAU;AACZ;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,kCAAkC;EAClC,UAAU;AACZ;;AAEA;EACE;IACE,0BAA0B;EAC5B;;EAEA;IACE,2BAA2B;EAC7B;;EAEA;IACE,0BAA0B;EAC5B;;EAEA;IACE,2BAA2B;EAC7B;AACF;;AAEA;EACE;IACE,yBAAyB;EAC3B;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,QAAQ;IACR,yFAAyF;EAC3F;AACF;;AAEA;EACE;IACE,yBAAyB;EAC3B;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,UAAU;IACV,QAAQ;EACV;;EAEA;IACE,eAAe;IACf,iBAAiB;EACnB;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');\n\n*{\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nheader{\n  text-align: center;\n  color: #555555;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    font-family: \"Roboto\", Arial, Helvetica, sans-serif;\n    font-size: 22px;\n    font-weight: bold;\n    background-image: url(../img/papelDeParede.jpg);\n}\n\nmain{\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  padding: 10px;\n  gap: 1em;\n  background-color: rgb(255, 255, 255);\n}\n\ninput{\n  padding: 10px 5px;\n}\n\nbutton{\n  padding: 10px 5px;\n  border: none;\n}\n\nselect{\n  padding: 10px 5px;\n}\n\n.res{\n  font-size: 18px;\n  margin-bottom: 15px;\n}\n\nul{\n  text-align: left;\n  margin-left: 15px;\n}\n\n.formulario{\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  gap: 1em;\n}\n\n.error-text{\n  font-size: 0.8em;\n  color: red;\n}\n\n.mes{\n  display: block;\n}\n\ninput:invalid {\n  animation: justshake 0.3s forwards;\n  color: red;\n}\n\n@keyframes justshake {\n  25% {\n    transform: translateX(5px);\n  }\n\n  50% {\n    transform: translateX(-5px);\n  }\n\n  75% {\n    transform: translateX(5px);\n  }\n\n  100% {\n    transform: translateX-(5px);\n  }\n}\n\n@media only screen and (min-width: 600px) {\n  button:hover{\n    background-color: #BDBEC7;\n  }\n\n  main{\n    display: flex;\n    flex-direction: column;\n    width: 650px;\n    margin: auto;\n    padding: 10px;\n    gap: 1em;\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;\n  }\n}\n\n@media only screen and (max-width: 600px){\n  button:active{\n    background-color: #BDBEC7;\n  }\n\n  main{\n    display: flex;\n    flex-direction: column;\n    margin: auto;\n    width: 90%;\n    gap: 1em;\n  }\n\n  body{\n    font-size: 16px;\n    font-weight: none;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/css/style.css":
/*!**********************************!*\
  !*** ./src/assets/css/style.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/img/papelDeParede.jpg":
/*!******************************************!*\
  !*** ./src/assets/img/papelDeParede.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d850f3b804db4eddc78f.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_geraSalario__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/geraSalario */ "./src/modules/geraSalario.js");
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/css/style.css */ "./src/assets/css/style.css");



})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map