import axios from "axios";

export default {

    async beforeMount() {
        setInterval(async () => {
            this.users = await this.makeGetRequest();
        }, 1000)
    },
    methods: {
        clearPost() {
            document.getElementById('input_text').value = '';
        },
        getFullDate() {
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            let yyyy = today.getFullYear();

            return  mm + '/' + dd + '/' + yyyy;
        },
         makeGetRequest() {
            return new Promise( (resolve, reject) => {
                try {
                    axios.get('http://localhost:3333/api/posts/get')
                        .then(function (res) {
                            resolve(res.data.reverse());
                        });
                } catch (err) {
                    console.log(err);
                    reject(err);
                }
            })
        },
        makePostRequest() {
            let input = document.getElementById('input_text').value;

            return new Promise( (resolve, reject) => {
                try {
                    console.log("trying get request");
                    axios.post('http://localhost:3333/api/posts/post', {
                        name: "Will",
                        text: input,
                        time: this.getFullDate(),
                    }).then(function (res) {
                        resolve(res)
                    });
                } catch (err) {
                    console.log(err);
                    reject(err);
                }
            })
        }
    },

    data(){
        return {
            users: [],
        }
    }
}