<template>
    <main class="fondo">
        <div class="container p-4">
            <div class="formulario p-3 m-auto powderBlue">
                <form @submit.prevent="saveData">
                    <div class="row">
                        <div class="form-group col-6">
                            <label for="nombre" class="mb-2">Nombre</label>
                            <input type="text" class="form-control" id="nombre" placeholder="Shaco" v-model="nombre">
                        </div>
                        <div class="col-6">
                            <label for="origen" class="mb-2">Origen</label>
                            <select class="form-select" id="origen" v-model="origen">
                                <option selected>Runaterra</option>
                                <option value="Piltover">Piltover</option>
                                <option value="Zaun">Zaun</option>
                                <option value="Aguas Estancadas">Aguas Estancadas</option>
                                <option value="Ciudad de Bandle">Ciudad de Bandle</option>
                                <option value="Demacia">Demacia</option>
                                <option value="El Vacio">El Vacio</option>
                                <option value="Freljord">Freljord</option>
                                <option value="Islas de las Sombras">Islas de las Sombras</option>
                                <option value="Ixtal">Ixtal</option>
                                <option value="Jonia">Jonia</option>
                                <option value="Noxus">Noxus</option>
                                <option value="Shurima">Shurima</option>
                                <option value="Targon">Targon</option>
                            </select>
                        </div>
                    </div>
                    <br>
                    <div class="form-group">
                        <label for="habilidad" class="mb-2">Habilidad Especial</label>
                        <input type="text" class="form-control" id="habilidad" placeholder="Cuerpo a cuerpo" v-model="habilidad">
                    </div>
                    <br>
                    <div class="form-group">
                        <label for="listaAliados" class="mb-2">Lista de Aliados</label>
                        <textarea class="form-control" id="listaAliados" rows="3" v-model="listaAliados" placeholder="Su clon :(" style="resize: none;"></textarea>
                    </div>
                    <br>
                    <div class="misionSiNo">
                        <input class="form-check-input" type="checkbox" id="misionSi" v-model="misionSi" value=true>
                        <label class="form-check-label mx-2" for="misionSi">Misión Completada</label>
                    </div>
                    <br>
                    <button type="submit" class="btn btn-primary">Guardar</button>
                </form>
                <br>
            </div>

            <br>
            <br>

            <TableArcane :listaPersonajes="arrayPersonajes"/>
        </div>
    </main>
</template>

<script>
    import {defineComponent} from 'vue';
    //Imports de Bootstrap
    import 'bootstrap/dist/css/bootstrap.min.css';
    import 'bootstrap-icons/font/bootstrap-icons.css';
    import 'bootstrap/dist/js/bootstrap.bundle.min.js';
    //Import de mi clase Personaje
    import Personaje from '../models/Personaje.js';
    //Import del componente TableArcane
    import TableArcane from './TableArcane.vue';

    export default defineComponent({

    name: 'FromArcane',

    data() {
        //let personajeEjemplo = new Personaje("nombre", "origen", "habilidad", "aliados", "mision-si");
        let arrayPersonajes = [];
        return {
            nombre: '',
            origen: 'Runaterra',    
            habilidad: '',
            listaAliados: '',
            misionSi: false,
            //personajeEjemplo,
            arrayPersonajes,
        };
    },
    methods: {
        saveData() {
            if (this.nombre === "" || this.origen === "" || this.habilidad === "" || this.listaAliados === "") {
                alert("Rellene todos los campos para guardar");
                return;
            }
            let personajeNuevo = new Personaje(this.nombre, this.origen, this.habilidad, this.listaAliados, this.misionSi ? "Sí" : "No");
            // Agregar el personaje al array
            this.arrayPersonajes.push(personajeNuevo);
            // Vaciar el formulario
            this.nombre = '';
            this.origen = 'Runaterra';
            this.habilidad = '';
            this.listaAliados = '';
            this.misionSi = false;
        }
    },
    components: { TableArcane }
});
</script>

<style>
    .formulario{
        width: 600px;
        border: solid 2px, rgb(176,224,230);
        border-radius: 10px;
        
    }

    .tablaPersonajes{
        width: 800px;
    }

    .powderBlue{
        background-color: rgb(176,224,230, 0.7); /* Color powder blue, sale en google */
    }

    .fondo{
        background-image: url(../assets/fondo-3.jpg); /* Fondo */
        background-position:  center; 
        background-size: cover; /* Escalar la imagen para cubrir toda la pantalla */
        background-attachment: fixed; /* Obliga al fondo a mantenerse quieto, ni ampliarse ni moverse */
        min-height: 100vh /* Asegura que el fondo cubra toda la altura que se vizualiza */
    }

</style>