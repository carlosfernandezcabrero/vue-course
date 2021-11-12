app.component('custom-footer', {
    props: ['name'],
    template: `
        <footer class="footer bg-dark mt-5 text-white pt-3 pb-4">
            <p class="text-center">Vue.js 3 documentation ->&nbsp;&nbsp;<a :href="url" target="_blank">link</a></p>
            <p class="text-center">Developed by {{ name }}</p>
        </footer>
    `,
    data() {
        return {
            url: 'https://v3.vuejs.org/guide/introduction.html',
        }
    }
})