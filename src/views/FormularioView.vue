<script retup>
export default {
  methods:{
      no(){
      },
      agregar_alumno(){
        var numc = document.getElementById("control").value
        var nomc = document.getElementById("nombre").value
        var ed = document.getElementById("edad").value
        var sem = document.getElementById("semestre").value
        var ca = document.getElementById("carrera").value
        var matagr = document.getElementById("Materias_agregadas").value
        var matesp = document.getElementById("Especialidad").value
        var actext = document.getElementById("Extraescolares").value

        //console.log(nomc);
        if(numc=="" ||  nomc=="" || ed=="" || sem=="" || ca=="" ||  matagr=="" || matesp=="" || actext==""){
          alert("ERROR!, debes asegurarte de hacer puesto informacion en todos los campos")

        }else{
          this.$store.commit("enviarNoControl", numc)
          this.$store.commit("enviarNombre", nomc)
          this.$store.commit("enviarEdad", ed)
          this.$store.commit("enviarSemestre", sem)
          this.$store.commit("enviarCarrera", ca)
          this.$store.commit("enviarMat_agregada", matagr)
          this.$store.commit("enviarMat_especial", matesp)
          this.$store.commit("enviarAct_complementariap", actext)

          // Limpiar campos del formulario
          document.getElementById("control").value = ""
          document.getElementById("nombre").value = ""
          document.getElementById("edad").value = ""
          document.getElementById("semestre").value = ""
          document.getElementById("carrera").value = ""
          document.getElementById("Materias_agregadas").value = ""
          document.getElementById("Especialidad").value = ""
          document.getElementById("Extraescolares").value = ""
        
          // Mostrar mensaje de éxito
          alert("Los datos han sido enviados")
        }
      }
  }
}
</script>

<template>
  

  <div>
    <form @submit.prevent="no" >
      <h1>Formulario Alumnos</h1>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">No. Control</label>
        <input type="email" class="form-control" id="control" aria-describedby="emailHelp">

        <label for="exampleInputEmail1" class="form-label">Nombre</label>
        <input type="email" class="form-control" id="nombre" aria-describedby="emailHelp">

        <label for="exampleInputEmail1" class="form-label">edad</label>
        <input type="number" class="form-control" id="edad" aria-describedby="emailHelp">

        <label for="exampleInputEmail1" class="form-label">Semestre</label>
        <input type="number" class="form-control" id="semestre" aria-describedby="emailHelp">

        <label for="exampleInputEmail1" class="form-label">carrera</label>
        <input type="email" class="form-control" id="carrera" aria-describedby="emailHelp">
        
        <label for="exampleInputEmail1" class="form-label">Materias agregadas</label>
        <input type="email" class="form-control" id="Materias_agregadas" aria-describedby="emailHelp">

        <label for="exampleInputEmail1" class="form-label">Especialidad</label>
        <input type="email" class="form-control" id="Especialidad" aria-describedby="emailHelp">

        <label for="exampleInputEmail1" class="form-label">Extraescolares</label>
        <input type="email" class="form-control" id="Extraescolares" aria-describedby="emailHelp">
      </div>
      <button type="button" class="btn btn-primary" @click="agregar_alumno">Enviar</button>
    </form>
  </div>

 
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

</style>

