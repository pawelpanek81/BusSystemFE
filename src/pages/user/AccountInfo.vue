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
                    <input type="text" :disabled="!updateClicked" v-model="userData.username" />
                  </div>
                </div>
                <div class="row card-body pb-0">
                  <div class="form-group col-md-6">
                    Imię
                  </div>
                  <div class="form-group col-md-6">
                    <input type="text" :disabled="!updateClicked" v-model="userData.name" />
                  </div>
                </div>
                <div class="row card-body pb-0">
                  <div class="form-group col-md-6">
                    Nazwisko
                  </div>
                  <div class="form-group col-md-6">
                    <input type="text" :disabled="!updateClicked" v-model="userData.surname" />
                  </div>
                </div>
                <div class="row card-body pb-0">
                  <div class="form-group col-md-6">
                    Email
                  </div>
                  <div class="form-group col-md-6">
                    <input type="text" :disabled="!updateClicked" v-model="userData.email" />
                  </div>
                </div>
                <div class="row card-body pb-0">
                  <div class="form-group col-md-6">
                    Telefon
                  </div>
                  <div class="form-group col-md-6">
                    <input type="text" :disabled="!updateClicked" v-model="userData.phone" />
                  </div>
                </div>
                <div class="row card-body pb-0">
                  <div class="form-group col-md-6">
                    Zdjęcie profilowe
                  </div>
                  <div class="form-group col-md-6">
                    <input type="text" :disabled="!updateClicked" v-model="userData.photo" />
                  </div>
                </div>
                <div class="row card-body pb-0">
                  <div class="col-md-12">
                    <div class="text-center">
                      <button id="updateOrSendButton"
                              @click="updateOrSendData" class="btn btn-success btn-lg">
                        Aktualizuj dane
                      </button>
                      <router-link to="/">
                        <button>Wróć</button>
                      </router-link>
                    </div>
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
      },
      updateClicked: false
    }
  },
  methods: {
    updateOrSendData: function () {
      if (this.updateClicked === false) {
        this.updateClicked = true
        $('#updateOrSendButton').text('Wyślij dane')
      } else {
        this.$http.put(`${CFG.API_BASE_URL}/users/updateData`, this.userData)
          .then(() => {
            this.$store.dispatch('logout').then(() => {
              this.$store.dispatch('setMessage',
                {text: 'Dane zostały zaktualizowane, zaloguj się ponownie', type: 'alert-success'})
            })
          })
          .catch(() => {
            this.$store.dispatch('setMessage', {text: 'Wystąpił błąd', type: 'alert-danger'})
          })
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
