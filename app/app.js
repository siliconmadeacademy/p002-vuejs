const app = new Vue({
    el: '#app',
    name: 'Silicon academy',
    data: {
        errorMessage: '',
        users: [
            {
                id: 1,
                name: 'Taha',
                role: 'Admin'
            },
            {
                id: 2,
                name: 'Muhammed',
                role: 'Admin'
            },
            {
                id: 3,
                name: 'Baha',
                role: 'Admin'
            },
            {
                id: 4,
                name: 'Melih',
                role: 'User'
            },
            {
                id: 5,
                name: 'Jale',
                role: 'Admin'
            },
            {
                id: 6,
                name: 'Aslıhan',
                role: 'User'
            }
        ],
        activeUser: {},
        whichModel: 0
    },
    methods: {
        newUser() {
            this.whichModel = 1;
            $('#newUserModel').modal('show');
        },
        save() {

            if (!this.validate()) {
                return false;
            }
            this.users.push({
                id: this.users.length + 1,
                name: this.activeUser.name,
                role: this.activeUser.role
            })
            this.activeUser = {};
            $('#newUserModel').modal('hide');

        },
        remove(userId) {
            // console.log(index)
            // this.users.splice(index,1)
            const user = this.users.find(item => item.id === userId)
            if (user !== null) {
                this.users = this.users.filter(data => data.id !== user.id);
            }
        },
        edit(userId) {
            this.whichModel = 2;
            $('#newUserModel').modal('show');
            const user = this.users.find(item => item.id === userId)
            if (user !== null) {
                this.activeUser = user;
            }
        },
        update() {
            console.log('user', this.activeUser)
            if (!this.validate()) {
                return false;
            }

            this.users.forEach((item, index) => {
                if (item.id === this.activeUser.id) {
                    item.name = this.activeUser.name;
                    item.role = this.activeUser.role;
                }
            })
            $('#newUserModel').modal('hide');

        },
        validate() {
            this.errorMessage = '';
            if (typeof this.activeUser.name === 'undefined') {
                this.errorMessage = 'Lutfen name alanını doldurunuz';
                return false;
            }
            if (typeof this.activeUser.role === 'undefined') {
                this.errorMessage = 'Lutfen role alanını seçiniz';
                return false;
            }
            return true;
        }
    }
});
