<template>
    <div>
        <div class="tablaPersonajes m-auto pt-2">

            <table class="table table-striped table-bordered text-center">
                <thead>
                    <tr class="table-info">
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Origen</th>
                        <th scope="col">Habilidad</th>
                        <th scope="col">Aliados</th>
                        <th scope="col">Mision Completada</th>
                    </tr>
                </thead>

                <tbody>
                    <tr class="tabla-personajes" v-for="(personaje, index) in listaPersonajes" :key="index">
                        <th scope="row" v-html="index+1"></th>
                        <td v-html="personaje.nombre"></td>
                        <td v-html="personaje.origen"></td>
                        <td v-html="personaje.habilidades"></td>
                        <td v-html="personaje.aliados"></td>
                        <td v-html="personaje.mision"></td>
                    </tr>
                </tbody>
            </table>

        </div>
    </div>
</template>

<script>
    import {defineComponent} from 'vue';
    export default defineComponent({
        props: {
            listaPersonajes : Array,
        },
        data(){
            return{
            }
        }
    });
</script>

<style lang="scss" scoped>

</style>