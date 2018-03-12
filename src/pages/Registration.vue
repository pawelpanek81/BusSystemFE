<template>
  <div class="jumbotron jumbotron-fluid">
    <h2>Zarejestruj się</h2>
    <div class="container">
      <form>
        <div class="form-group">
          <label for="name">Imię <span class="required">*</span></label>
            <input v-validate="'required'" :class="{'form-control': true, 'is-invalid': errors.has('name')}"
                   id="name" name="name" type="text" data-vv-as="imię">
            <span v-show="errors.has('name')" class="invalid-feedback">{{ errors.first('name') }}</span>
        </div>
        <div class="form-group">
          <label for="surname">Nazwisko <span class="required">*</span></label>
            <input v-validate="'required'" :class="{'form-control': true, 'is-invalid': errors.has('surname')}"
                   id="surname" name="surname" type="text" data-vv-as="nazwisko">
            <span v-show="errors.has('surname')" class="invalid-feedback">{{ errors.first('surname') }}</span>
        </div>
        <div class="form-group">
          <label for="email">Email <span class="required">*</span></label>
          <input v-validate="'required|email'" :class="{'form-control': true, 'is-invalid': errors.has('email') }"
                 name="email" id="email" type="text" data-vv-as="adres e-mail">
          <span v-show="errors.has('email')" class="invalid-feedback">{{ errors.first('email') }}</span>
        </div>
        <div class="form-group">
          <label for="password1">Hasło <span class="required">*</span></label>
          <input v-validate="'required'" :class="{'form-control':true, 'is-invalid': errors.has('password1') }" type="password"
                name="password1" id="password1" data-vv-as="hasło">
          <span v-show="errors.has('password1')" class="invalid-feedback">{{ errors.first('password1') }}</span>
        </div>
        <div class="form-group">
          <label for="password2">Powtórz hasło <span class="required">*</span></label>
          <input v-validate="'required|confirmed:password1'" :class="{'form-control':true, 'is-invalid': errors.has('password2') }" type="password"
                 name="password2" id="password2" data-vv-as="hasło ponownie">
          <span v-show="errors.has('password2')" class="invalid-feedback">{{ errors.first('password2') }}</span>
        </div>
        <div class="form-group">
          <label for="telNr">Numer telefonu </label>
            <input class="form-control" id="telNr" name="telNr" type="tel">
        </div>

        <button class="btn btn-primary">Zarejestruj</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
  .jumbotron {
    margin-top: 120px;
    margin-bottom: 40px;
    margin-left: 25%;
    margin-right: 25%;
    padding: 5% 5% 2% 5%;
  }
  h2 {
    text-align: center;
  }
  .container {
    text-align: left;
  }

  button {
    display: table;
    margin: 0 auto;
    width: 150px;
  }

  .required {
    color: red;
  }

</style>
