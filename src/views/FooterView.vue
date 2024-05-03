<script>
export default {
  name: 'FooterView'
}
</script>

<template>
  <footer class="footer-container">
    <div class="footer-content">
      <div class="footer-block">
        <h3>FastLearners</h3>
        <p>FastLearners fue fundado por desarrolladores para desarrolladores. Es ahora un recurso valioso para
          personas que quieren aprovechar al máximo sus dispositivos móviles, desde personalizar la apariencia
          hasta añadir nueva funcionalidad.</p>
      </div>
      <div class="footer-block">
        <h3>Más Información</h3>
        <ul>
          <li><a href="#">Contact Us (Forum Issues)</a></li>
          <li><a href="#">Advertise</a></li>
          <li><a href="#">Terms and rules</a></li>
          <li><a href="#">Suggest Content</a></li>
        </ul>
      </div>
      <div class="footer-block">
        <h3>Enlaces Útiles</h3>
        <ul>
          <li><a href="#">Best Phones</a></li>
          <li><a href="#">Tutorials</a></li>
          <li><a href="#">Recognized Developer Program</a></li>
          <li><a href="#">Admin & Moderators</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-container {
  background-color: #333;
  color: white;
  padding: 20px;
  display: flex;
  justify-content: center;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
}

.footer-block h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.footer-block ul {
  list-style-type: none;
  padding: 0;
}

.footer-block li a {
  color: #9cf;
  text-decoration: none;
}

.footer-block li a:hover {
  text-decoration: underline;
}
</style>
