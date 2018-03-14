export default {
  dictionary: {
    pl: {
      messages: {
        email: function (field1) {
          return `Wpisz poprawny adres email.`
        },
        required: function (field1) {
          return `Wpisz ${field1}.`
        },
        confirmed: function () {
          return `Hasła muszą być zgodne.`
        }
      }
    }
  }
}
