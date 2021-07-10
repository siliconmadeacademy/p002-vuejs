const app = new Vue({
    el: '#app',
    name: 'Silicon academy',
    data: {
        message: 'Hello Vue',
        users: [
            {
                id: 5,
                name: 'Taha',
                role: 'Admin'
            },
            {
                id: 6,
                name: 'Muhammed',
                role: 'Admin'
            },
            {
                id: 7,
                name: 'Baha',
                role: 'Admin'
            },
            {
                id: 8,
                name: 'Melih',
                role: 'User'
            },
            {
                id: 9,
                name: 'Jale',
                role: 'Admin'
            },
            {
                id: 9,
                name: 'Aslıhan',
                role: 'User'
            }
        ],
        activeUser:{}
    },
    methods: {
        newUser() {
            $('#newUserModel').modal('show');
        }
    }
});
