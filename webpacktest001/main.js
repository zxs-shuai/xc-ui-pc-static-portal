var {add} = require("./mode101")
var Vue =require("./vue.min")


var VM = new Vue({
    el:"#app", //VM 接管了app区域的管理
    data:{
        name:"传智播客",
        num1:1,
        num2:1,
        result:0
    },
    methods:{
        changed:function () {
            this.result =Number.parseInt(this.num1)+ Number.parseInt(this.num2);
            alert("ssssss");
        }
    }
})