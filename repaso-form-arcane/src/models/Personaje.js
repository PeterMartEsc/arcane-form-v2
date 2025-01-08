class Personaje {

    constructor(nombre, origen,habilidades,aliados,mision) {
        this.nombre = nombre;
        this.origen = origen;
        this.habilidades = habilidades;
        this.aliados = aliados;
        this.mision = mision;
    }

    showInfo(){
        return `<div class="card">
                    <p><b>Nombre:</b> ${this.nombre}</p>
                    <p><b>Origen:</b> ${this.origen}</p>
                    <p><b>Habilidades:</b> ${this.aliados}</p>
                    <p><b>Mision:</b> ${this.mision}</p>
                </div>`
    }
}

export default Personaje;
