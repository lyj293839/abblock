import { createStore } from "vuex";
import jsonList from '@/json/index.json';
import prodDetailList from '@/json/prodDetail.json';
import _router from '@/router/index';

const store = createStore({
    state: {
        cas:123,
        pageSize:10,
        is_login:false,
        ProdList:[],
        jsonList:jsonList,
        prodDetailList:prodDetailList,
        rules: {
            pass: [
              { required: true, message: 'Please enter the content', trigger: 'blur' }
            ],
            checkPass: [
              { required: true, message: 'Please enter the content', trigger: 'blur' }
            ],
            input: [
              { required: true, message: 'Please enter the content', trigger: 'blur' }
            ],
            name: [
              { required: true, message: 'Please enter the content', trigger: 'blur' }
            ],
            country: [
              { required: true, message: 'Please enter the content', trigger: 'blur' }
            ],
            region: [
              { required: true, message: 'Please enter the content', trigger: 'blur' }
            ],
        }
    },
    mutations:{
        change_cas(state,a){
            state.cas=a
        },
        get_prodList(state){
            state.ProdList = ['Home','About Us','Products','Support','Contact Us']
        },
        logout: (state) => {
            localStorage.removeItem('token');
            localStorage.removeItem('userRouteId');
        },
        toTop(state,name){
            let top = document.documentElement.scrollTop || document.body.scrollTop;
            const timeTop = setInterval(() => {
                document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
                if (top <= 0) {
                clearInterval(timeTop);
                }
            }, 10);
            window.document.title = name
        },
        to_router(state,[path,name]){
            _router.push({
                path,
                name
            }); 
            this.commit("toTop")
        },
        defImg(){
            alert(1)
            let img = event.srcElement;
            img.src = require("@/assets/image/416.png");
            img.onerror = null; //防止闪图
        }
    },
    actions:{
        submitForm(state,[a,that]){
            return new Promise((resolve, reject)=>{
                that.$refs[a].validate((valid) => {
                    if (valid) {
                        that.$refs[a].clearValidate()
                        resolve()
                    } else {
                        reject()
                    }
                });
            })
        }
    }
})

export default store