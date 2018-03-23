<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-md-12">
        <div class="row">
          <div class="col-md-10 mx-auto">
            <div class="card border-secondary">
              <div class="card-header">
                <h3 class="mb-0 my-2">Twoje dane</h3>
              </div>
              <div class="form" role="form">
                <div class="row card-body pb-0">
                  <div class="form-group col-md-6">
                    Nazwa użytkownika:
                  </div>
                  <div class="form-group col-md-6">
                    <input type="text" disabled="disabled" v-model="this.userData.username" />
                  </div>
                </div>
                <div class="row card-body pb-0">
                  <div class="form-group col-md-6">
                    Imię
                  </div>
                  <div class="form-group col-md-6">
                    <input type="text" disabled="disabled" v-model="this.userData.name" />
                  </div>
                </div>
                <div class="row card-body pb-0">
                  <div class="form-group col-md-6">
                    Nazwisko
                  </div>
                  <div class="form-group col-md-6">
                    <input type="text" disabled="disabled" v-model="this.userData.surname" />
                  </div>
                </div>
                <div class="row card-body pb-0">
                  <div class="form-group col-md-6">
                    Email
                  </div>
                  <div class="form-group col-md-6">
                    <input type="text" disabled="disabled" v-model="this.userData.email" />
                  </div>
                </div>
                <div class="row card-body pb-0">
                  <div class="form-group col-md-6">
                    Telefon
                  </div>
                  <div class="form-group col-md-6">
                    <input type="text" disabled="disabled" v-model="this.userData.phone" />
                  </div>
                </div>
                <div class="row card-body pb-0">
                  <div class="form-group col-md-6">
                    Zdjęcie profilowe
                  </div>
                  <div class="form-group col-md-6">
                    <input type="text" disabled="disabled" v-model="this.userData.photo" />
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
import CFG from '../../config'

export default {
  data () {
    return {
      userData: {
        name: '',
        surname: '',
        username: '',
        email: '',
        phone: '',
        photo: ''
      }
    }
  },
  mounted () {
    this.$http.get(`${CFG.API_BASE_URL}/users/userData`)
      .then((response) => {
        this.userData = response.data
      })
      .catch((err) => {
        console.log(err)
        this.$store.dispatch('setMessage', {text: 'Błąd ładowania danych', type: 'alert-danger'})
      })
  }
}
</script>

<style scoped>
</style>
