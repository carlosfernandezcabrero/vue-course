<template>
  <div class="md-cont n-row text-center header">
    <h1 class="main-title">Welcome !!</h1>
    <Button text="LOGIN" path="/login" class="bg-blue" />
  </div>
  <div class="md-cont n-row values-row">
    <h2 class="text-center title-row">OUR VALUES</h2>
    <hr class="divider" />
    <div class="values text-center">
      <div class="value">
        <i class="fas fa-shield-alt fa-3x icon color-blue"></i>
        <h4 class="text-center mb-xs">Security</h4>
        <p class="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          vehicula fermentum tempus. Vestibulum ante ipsum primis in faucibus
          orci luctus et ultrices posuere cubilia curae; Vestibulum quis tempus
          ex.
        </p>
      </div>
      <div class="value">
        <i class="fas fa-user-secret fa-3x icon color-blue"></i>
        <h4 class="text-center mb-xs">Confidentiality</h4>
        <p class="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed magna
          metus, sollicitudin non nulla nec, molestie interdum elit. Nulla quis
          urna sed ipsum ornare placerat. Morbi dapibus, nisi vitae aliquet
          rutrum, elit lectus mollis enim, eu varius arcu urna vitae risus.
          Aliquam pharetra est eget dui iaculis blandit. Vivamus malesuada in
          odio in elementum. Suspendisse eu lacus rutrum, bibendum ligula nec,
          malesuada est.
        </p>
      </div>
      <div class="value">
        <i class="fab fa-etsy fa-3x icon color-blue"></i>
        <h4 class="text-center mb-xs">Easy use</h4>
        <p class="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          risus libero, eleifend congue tortor ac, mollis suscipit felis.
          Quisque porttitor massa quis ultricies mattis.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/ButtonLink";

export default {
  components: { Button },
};
</script>

<style scoped>
.header {
  padding-bottom: 10rem;
}

.main-title {
  margin-top: 3rem;
  margin-bottom: 2rem;
  color: var(--color-primary);
}

.values-row {
  background-color: whitesmoke;
}

.values {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 14rem), 1fr));
  gap: 1rem;
  margin-top: 3rem;
}

.icon {
  margin-bottom: 1rem;
}

.title-row {
  color: var(--color-primary);
}
</style>
