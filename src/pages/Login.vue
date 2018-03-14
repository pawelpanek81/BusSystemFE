<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-md-12">
        <div class="row">
          <div class="col-md-6 mx-auto">
            <div class="card border-secondary">
              <div class="card-header">
                <h3 class="mb-0 my-2">Logowanie</h3>
              </div>
              <div class="row card-body">
                <div class="col-md-12">
                  <div class="form" role="form">
                    <div class="form-group">
                      <label for="inputLogin">Nazwa użytkownika <span class="required">*</span></label>
                      <input type="text" class="form-control" id="inputLogin" placeholder="Jan"
                             name="inputLogin"
                             v-validate="'required'"
                             :class="{'is-invalid': errors.has('inputLogin')}"
                             v-model="credential.username"
                             data-vv-as="login">
                      <span v-show="errors.has('inputLogin')"
                            class="invalid-feedback">{{ errors.first('inputLogin') }}</span>
                    </div>
                    <div class="form-group">
                      <label for="inputPassword">Hasło <span class="required">*</span></label>
                      <input type="password" class="form-control" id="inputPassword" placeholder="*********"
                             name="inputPassword"
                             v-validate="'required'"
                             :class="{'is-invalid': errors.has('inputPassword')}"
                             v-model="credential.password"
                             data-vv-as="hasło">
                      <span v-show="errors.has('inputPassword')" class="invalid-feedback">{{ errors.first('inputPassword') }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row card-body ">
                <div class="col-md-12">
                  <div class="text-center">
                    <button @click="validateForm" class="btn btn-success btn-lg">Zaloguj</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      credential: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    validateForm () {
      this.$validator.validateAll()
        .then((result) => {
          if (result) {
            this.login(this.credential)
          }
        })
    },
    login (data) {
      this.$store.dispatch('login', data)
    }
  }
}
</script>

<style scoped>
  .required {
    color: red;
  }
</style>
