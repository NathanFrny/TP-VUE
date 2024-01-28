<template>
  <footer class="footer">
    <p>Nom: Fourny</p>
    <p>Prénom: Nathan</p>
    <p>Numéro de TP: TPD</p>
  </footer>
</template>
  
  <script>
  export default {
    name: 'Footer',
  };
  </script>
  
  <style scoped>
  .page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}

.footer {
  position: absolute;
  left: 0;
  width: 100%;
  color: #fff;
  font-weight: 600;
  text-align: center;
  background: rgba(0, 0, 0, 0.6);
  padding: 10px 0;
  z-index: 10;
}

.footer::before {
  content: '';
  position: absolute;
  background-image: url('../img/pokemon_footer.png');
  background-size: cover;
  background-repeat: no-repeat;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1; /* Place la superposition derrière le texte */
}
</style>

  