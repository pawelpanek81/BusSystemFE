export default {
  dictionary: {
    pl: {
      messages: {
        email: function (field1) {
          return `Pole "${field1}" musi być poprwnym adresem email`
        },
        required: function (field1) {
          return `Pole "${field1}" jest wymagane`
        },
        confirmed: function (field1, field2) {
          return `Pola "${field2}" oraz ${field1} muszą być zgodne`
        }
      }
    }
  }
}
