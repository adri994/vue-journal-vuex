<template>

    <template v-if="entry">
        <div class="entry-title d-flex justify-content-between p-2">
            
            <div>
                <span class="text-success fs-3 fw-bold">{{ day }}</span>
                <span class="mx-1 fs-3">{{ month }}</span>
                <span class="mx-2 fs-4 fw-light">{{ yearDay }}</span>
            </div>

            <div>
                <!-- Para hacer referencia -->
                <input
                    v-show="false"
                    accept="image/png, image/jpeg"
                    ref="imageSelector"
                    @change="onSelectedImage" 
                    type="file">
                <button
                  v-if="entry.id"
                  @click="ondeleteEntry"
                  class="btn btn-danger mx-2">
                    Borrar
                    <i class="fa fa-trash-alt"></i>
                </button>

                <button @click="onSelectImage" class="btn btn-primary">
                    Subir foto
                    <i class="fa fa-upload"></i>
                </button>
            </div>
        </div>

        <hr>
        <div class="d-flex flex-column px-3 h-75">
            <textarea
                v-model="entry.text"
                placeholder="¿Qué sucedió hoy?"
            ></textarea>
        </div>
        <img
            v-if="localImage" 
            :src="localImage" 
            alt="entry-picture"
            class="img-thumbnail">
        <img 
            v-if="entry.picture && !localImage"
            :src="entry.picture"
            alt="entry-picture"
            class="img-thumbnail">

    </template>

    <Fab
        @on:click="saveEntry"
        icon="fa-save"
    />

</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapActions, mapGetters } from 'vuex'
import Swal from 'sweetalert2'

import getDayMonthYear from '../helpers/getDayMonthYear'
import uploadImage from '../helpers/uploadImage'

export default {
    props: {
        id: {
            type: String,
            required: true
        }
    },
    components: {
        Fab: defineAsyncComponent(() => import('../components/Fab.vue'))
    },

    data() {
        return {
            entry: null,
            localImage: null,
            file: null
        }
    },

    computed: {
        ...mapGetters('journal', ['getEntryById']),
        day() {
            const { day } = getDayMonthYear( this.entry.date )
            return day
        },
        month() {
            const { month } = getDayMonthYear( this.entry.date )
            return month
        },
        yearDay() {
            const { yearDay } = getDayMonthYear( this.entry.date )
            return yearDay
        }
    },

    methods: {
        ...mapActions('journal',['updateEntry','createEntry', 'deleteEntry']),
        loadEntry() {
            let entry
            if(this.id === 'new') {
                entry = {
                    text: '',
                    date: new Date().getTime()
                }
            } else {
                entry = this.getEntryById( this.id )
                if ( !entry ) return this.$router.push({ name: 'no-entry' })
            }

            this.entry = entry
        },
        async saveEntry() {
            new Swal({
                title: 'Espere por favor',
                allowOutsideClick: false
            })
            Swal.showLoading()

            const picture = await uploadImage( this.file )
            
            this.entry.picture = picture

            if(this.entry.id ){
                await this.updateEntry(this.entry)
            } else {
                const idNewEntry = await this.createEntry(this.entry)
                this.$router.push({name:'entry',params:{id:idNewEntry}})
            }
            this.file = null
            Swal.fire('Guardado', 'Entrada registrada con exito','success')
            
        },
        async ondeleteEntry() {
            const {isConfirmed} = await Swal.fire({
                title: 'Estas seguro',
                text: 'Una vez borrado, no se recuperar',
                showDenyButton:true,
                confirmButtonText:'Si, estoy seguro'
            })
            if(isConfirmed){
                new Swal({
                    title: 'Espere por favor',
                    allowOutsideClick: false
                })
                Swal.showLoading()
                await this.deleteEntry(this.entry.id)
                this.$router.push({name:'no-entry'})
                Swal.fire('Eliminado', '','success')
            }
        },
        onSelectedImage(e) {
            const file = e.target.files[0]
            if ( !file ) {
                this.localImage = null
                this.file = null
                return
            }
            this.file = file
            const fr = new FileReader()
            //esto se ejecuta cuando termine de cargartç
            fr.onload = () =>this.localImage = fr.result
            fr.readAsDataURL(file)
        },
        onSelectImage() {
            // Para hacer referencia que hicimos en el html
            // esto es como el addEvent
            this.$refs.imageSelector.click()
        }
    },

    created() {
        // console.log(this.$route.params.id)
        this.loadEntry()
    },

    watch: {
        id() {
            this.loadEntry()
        }
    }



}
</script>

<style lang="scss" scoped>

textarea {
    font-size: 20px;
    border: none;
    height: 100%;

    &:focus {
        outline: none;
    }
}

img {
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}

</style>