<template>
    <div>
      <h2>Detalles del Alumno</h2>
      <div class="row">
        <div class="col">
          <table class="table">
            <thead>
              <tr>
                <th class="green-bg white-text">Propiedades</th>
                <th class="green-bg white-text">Información</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>No. control</td>
                <td>{{ $store.state.no_control }}</td>
              </tr>
              <tr>
                <td>Nombre</td>
                <td>{{ $store.state.nommbre }}</td>
              </tr>
              <tr>
                <td>Edad</td>
                <td>{{ $store.state.edad }}</td>
              </tr>
              <tr>
                <td>Semestre</td>
                <td>{{ $store.state.semestre }}</td>
              </tr>
              <tr>
                <td>Carrera</td>
                <td>{{ $store.state.carrera }}</td>
              </tr>
              <tr>
                <td>Especialidad</td>
                <td>{{ $store.state.mat_especial }}</td>
              </tr>
              <tr>
                <td>Complementaria</td>
                <td>{{ $store.state.act_complementaria }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AlumnosView',
  }
  </script>
  
  <style scoped>
.green-bg {
  background-color: green;
}

.white-text {
  color: white;
}
</style>