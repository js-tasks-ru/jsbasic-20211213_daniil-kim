var calculator = {
  read: function(a, b) {
    this.a = a;
    this.b = b;
  },

  sum: function() {
    return this.a + this.b;
  },

  mul: function() {
    return this.a * this.b;
  },
}

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
