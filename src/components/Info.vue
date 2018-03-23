<template>
  <div class="container mb-3">
    <div class="card mb-3 card-height">
      <div class="card-body">
        <h3 class="mb-5">Co oferujemy?</h3>
        <div class="container p-2">
            <h5><i class="fas fa-check"></i> Wygoda</h5>
            <p>Skórzane wygodne fotele.</p>
        </div>
        <div class="container p-2">
          <h5><i class="fas fa-check"></i> Wi-Fi</h5>
          <p>Dostęp do internetu podczas całej podróży. Dzięki temu Państwa przejazd nie będzie nudny</p>
        </div>
        <div class="container p-2">
          <h5><i class="fas fa-check"></i> Toaleta</h5>
          <p></p>
        </div>
        <div class="container p-2">
          <h5><i class="fas fa-check"></i> Promocje</h5>
          <p>Okresowe promocje. Z nami podróżujesz najtaniej!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'info'
}
</script>

<style scoped>
  .card-height {
    height: 100%;
    width: 100%;
    position: absolute;
    right: 0;
    top: 0;
  }
</style>
