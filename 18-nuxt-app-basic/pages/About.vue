<template>
  <div class="about">
    <div class="info md-cont n-row">
      <div class="info__card">
        <h2 class="text-center mb-lg">Thank you for visiting my web site !!</h2>
        <div class="contacts">
          <a
            href="https://github.com/carlosfernandezcabrero"
            target="_blank"
            class="contact"
            ><i class="fab fa-github fa-2x"></i>&nbsp;&nbsp;GitHub</a
          >
          <a
            href="https://es.linkedin.com/in/carlos-fern%C3%A1ndez-cabrero-08638a188"
            target="_blank"
            class="contact"
            ><i class="fab fa-linkedin fa-2x"></i>&nbsp;&nbsp;Linkedin</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.info__card {
  background-color: white;
  padding-inline: 1rem;
  padding-block: 1.5rem;
}

.contacts {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.contact {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3f72af;
  color: white;
  padding-block: 0.5rem;
  padding-inline: 1rem;
  border-radius: 4px;
}

.contact:hover {
  background-color: #112d4e;
  cursor: pointer;
}
</style>
