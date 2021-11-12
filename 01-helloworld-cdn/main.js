const app = Vue.createApp({
    data(){
        return {
            title           : 'This is my first Vue.js app !!!',
            salary          : 1000,
            displaySalary   : false,
            salaryProjection: [1500, 2000, 2300],
            stateReport     : false,
            myName          : 'Carlos Fernandez Cabrero'
        }
    },
    methods: {
        showSalary(){
            this.displaySalary = true
        },
        hideSalary(){
            this.displaySalary = false
        },
        activateReport(){
            this.stateReport = true
        }
    },
    computed: {
        colorStateReport(){
            return this.stateReport ? 'text-success' : 'text-danger'
        }
    }
})