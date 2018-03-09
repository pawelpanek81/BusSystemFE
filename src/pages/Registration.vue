<template>
  <div class="jumbotron jumbotron-fluid">
    <h2>Zarejestruj się</h2>
    <div class="container">
      <form >
        <div class="form-group">
          <label for="name">Imię <span class="required">*</span></label>
          <input type="text" class="form-control" id="name" placeholder="" name="name">
        </div>
        <div class="form-group">
          <label for="surname">Nazwisko <span class="required">*</span></label>
          <input type="text" class="form-control" id="surname" placeholder="" name="surname">
        </div>
        <div class="form-group">
          <label for="email">Email <span class="required">*</span></label>
          <input type="email" class="form-control" id="email" placeholder="imienazwisko@wp.pl" name="email">
        </div>
        <div class="form-group">
          <label for="name">Hasło <span class="required">*</span></label>
          <input type="password" class="form-control" id="login" placeholder="" name="login">
        </div>
        <div class="form-group">
          <label for="pwd">Powtórz hasło <span class="required">*</span></label>
          <input type="password" class="form-control" id="pwd" placeholder="" name="pswd">
        </div>
        <div class="form-group">
          <label for="telNr">Numer telefonu </label>
          <input type="tel" class="form-control" id="telNr" placeholder="" name="telNr">
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
    margin-left: 10%;
    margin-right: 10%;
    padding: 5% 10% 2% 10%;
  }

  .container{
    text-align: left;
  }

  button{
    display: table;
    margin: 0 auto;
    width: 150px;
  }

  .required{
    color: red;
  }

</style>
