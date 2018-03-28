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
                    <input type="text" id="firstInput" :disabled="!updateClicked" v-model="userData.username"
                           class="form-control" />
                  </div>
                </div>
                <div class="row card-body pb-0">
                  <div class="form-group col-md-6">
                    Imię
                  </div>
                  <div class="form-group col-md-6">
                    <input type="text" :disabled="!updateClicked" v-model="userData.name"
                           class="form-control" />
                  </div>
                </div>
                <div class="row card-body pb-0">
                  <div class="form-group col-md-6">
                    Nazwisko
                  </div>
                  <div class="form-group col-md-6">
                    <input type="text" :disabled="!updateClicked" v-model="userData.surname"
                           class="form-control" />
                  </div>
                </div>
                <div class="row card-body pb-0">
                  <div class="form-group col-md-6">
                    Email
                  </div>
                  <div class="form-group col-md-6">
                    <input type="text" :disabled="!updateClicked" v-model="userData.email"
                           class="form-control" />
                  </div>
                </div>
                <div class="row card-body pb-0">
                  <div class="form-group col-md-6">
                    Telefon
                  </div>
                  <div class="form-group col-md-6">
                    <input type="text" :disabled="!updateClicked" v-model="userData.phone"
                           class="form-control" />
                  </div>
                </div>
                <div class="row card-body pb-0">
                  <div class="form-group col-md-6">
                    Zdjęcie profilowe
                  </div>
                  <div class="form-group col-md-6">
                    <!--v-model="userData.photo"-->
                    <input type="file" :disabled="!updateClicked"
                           class="form-control-file" id="photoFileInput">
                  </div>
                </div>
                <div class="row card-body pb-0">
                  <div class="col-md-12 mb-3">
                    <div class="text-center">
                      <button id="updateOrSendButton"
                              @click="updateOrSendData" class="btn btn-success mx-2">
                        Edytuj dane
                      </button>
                      <router-link to="/">
                        <button class="btn btn-outline-success mx-2">Wróć</button>
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
import Vue from 'vue'

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
        $('#updateOrSendButton').text('Zapisz zmiany')
        $('input').addClass('input')
        Vue.nextTick(() => {
          this.putCursorAtEnd($('#firstInput'))
        })
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
    },
    putCursorAtEnd (input) {
      input.focus()
      let tmpStr = input.val()
      input.val('')
      input.val(tmpStr)
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
  .input:focus {
    border-color: #12b31c;
    box-shadow: 0 0 10px #129f1c;
  }
</style>
