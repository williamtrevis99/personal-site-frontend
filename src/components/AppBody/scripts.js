import axios from "axios";

export default {

    async beforeMount() {
        setInterval(async () => {
            await this.makeGetRequest();
        }, 4000)
    },
    methods: {
         makeGetRequest() {
            return new Promise( (resolve, reject) => {
                try {
                    console.log("trying get request");
                    axios.get('http://backend:3333/api/posts/get')
                        .then(function (res) {
                            resolve(res)
                        });
                } catch (err) {
                    console.log(err);
                    reject(err);
                }
            })
        },
        makePostRequest() {
            return new Promise( (resolve, reject) => {
                try {
                    console.log("trying get request");
                    axios.post('http://backend:3333/api/posts/post')
                        .then(function (res) {
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
            users: [
                {
                    "text": "Everybody should read Chaucer to improve their everyday vocabulary.",
                    "name": "William",
                    "time": "11:34:90"
                },
                {
                    "text": "yea good point",
                    "name": "Annie",
                    "time": "11:34:90"
                },
                {
                    "text": "this is an example",
                    "name": "Tom",
                    "time": "11:34:90"
                },
            ]
        }
    }
}