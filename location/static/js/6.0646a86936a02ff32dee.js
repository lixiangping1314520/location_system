webpackJsonp([6],{"5qIF":function(e,t){},UTie:function(e,t){},lgSw:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={props:["type","selectCar"],data:function(){return{btns:{comfirm:"确定",cancel:"取消"},carInfo:{vehiclesTypeof:"",vehiclesNsumber:"",vehiclesUseunit:"",vehiclesNumBering:""}}},components:{MessageBox:a("7en9").a},methods:{changeCar:function(e){this.selectCar?this.$emit("editorCar",e,this.carInfo):this.$emit("addCar",e,this.carInfo)}},created:function(){this.selectCar&&(this.carInfo=this.selectCar)}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("message-box",{staticClass:"add_person",attrs:{type:e.type,btns:e.btns},on:{closeMessageBox:e.changeCar}},[a("el-main",[a("el-row",[a("label",{attrs:{for:""}},[e._v("车辆型号")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.carInfo.vehiclesTypeof,expression:"carInfo.vehiclesTypeof"}],attrs:{disabled:e.selectCar},domProps:{value:e.carInfo.vehiclesTypeof},on:{input:function(t){t.target.composing||e.$set(e.carInfo,"vehiclesTypeof",t.target.value)}}})]),e._v(" "),a("el-row",[a("label",{attrs:{for:""}},[e._v("车辆编号")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.carInfo.vehiclesNumBering,expression:"carInfo.vehiclesNumBering"}],attrs:{disabled:e.selectCar},domProps:{value:e.carInfo.vehiclesNumBering},on:{input:function(t){t.target.composing||e.$set(e.carInfo,"vehiclesNumBering",t.target.value)}}})]),e._v(" "),a("el-row",[a("label",{attrs:{for:""}},[e._v("使用单位")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.carInfo.vehiclesUseunit,expression:"carInfo.vehiclesUseunit"}],domProps:{value:e.carInfo.vehiclesUseunit},on:{input:function(t){t.target.composing||e.$set(e.carInfo,"vehiclesUseunit",t.target.value)}}})]),e._v(" "),a("el-row",[a("label",{attrs:{for:""}},[e._v("联系电话")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.carInfo.vehiclesNsumber,expression:"carInfo.vehiclesNsumber"}],domProps:{value:e.carInfo.vehiclesNsumber},on:{input:function(t){t.target.composing||e.$set(e.carInfo,"vehiclesNsumber",t.target.value)}}})])],1)],1)},staticRenderFns:[]};var s={data:function(){return{type:{add:"新增车辆",editor:"修改车辆"},carQuery:"",cars:[],selectCar:{index:"",row:[]},isShowAddCar:!1,isShowEditorCar:!1,currentPage:1,paginationData:[],pageSize:8}},components:{ChangeCar:a("VU/8")(r,n,!1,function(e){a("UTie")},"data-v-64beebf5",null).exports},created:function(){this.getCars()},watch:{carQuery:function(e){e||this.getCars()}},methods:{getCars:function(){var e=this;this.$http.get(config.httpBaseUrl+"/vehucle/getAllVehucle").then(function(t){200===t.code&&(e.cars=t.date.vhucles,e.getPaginationData(e.currentPage))})},tableRowStyle:function(e,t){return"background-color: black;"},tableHeaderColor:function(e){e.row,e.column;var t=e.rowIndex;e.columnIndex;if(0===t)return"background-color: black; color: white"},addCar:function(e,t){var a=this;if(e){for(var r in t)if(!t[r])return this.$message({showClose:!0,message:"信息不能为空",type:"error"});this.$http.post(config.httpBaseUrl+"/vehucle/insertVehucle",t).then(function(e){200===e.code&&(a.cars.push(t),a.currentPage=1,a.getPaginationData(a.currentPage),a.$message({showClose:!0,type:"success",message:"添加车辆成功!"}))})}this.isShowAddCar=!1},handleAddCar:function(){this.isShowAddCar=!0},handleEditorCar:function(e,t){this.selectCar.index=e,this.selectCar.row=t,this.isShowEditorCar=!0},editorCar:function(e,t){var a=this;if(delete t.locationBean,console.log(t),e){for(var r in t)if(!t[r])return this.$message({showClose:!0,message:"信息不能为空",type:"error"});this.$http.post(config.httpBaseUrl+"/vehucle/updateVehucle",t).then(function(e){200===e.code&&(a.cars.splice(a.selectCar.index,1,t),a.$message({showClose:!0,type:"success",message:"修改成功!"}))})}this.isShowEditorCar=!1},handleDeleteCar:function(e,t){var a=this;this.$confirm("此操作将永久删除该车辆, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.$http.get(config.httpBaseUrl+"/vehucle/deleteVehucle",{params:{vehiclesNumBering:t.vehiclesNumBering}}).then(function(t){200===t.code&&(a.cars.splice(e,1),a.currentPage=1,a.getPaginationData(a.currentPage),a.$message({showClose:!0,type:"success",message:"删除成功!"}))})}).catch(function(){a.$message({showClose:!0,type:"info",message:"已取消删除"})})},handleSearch:function(){var e=this;this.$http.get(config.httpBaseUrl+"/vehucle/getVehucle",{params:{vehiclesNumBering:this.carQuery}}).then(function(t){t.date.vhucles?(e.cars=[t.date.vhucles],e.currentPage=1,e.getPaginationData(e.currentPage)):e.$message({showClose:!0,type:"info",message:"没有找到该车辆"})})},getPaginationData:function(e){var t=(e-1)*this.pageSize,a=e*this.pageSize;this.paginationData=this.cars.slice(t,a)},handleCurrentChange:function(e){this.currentPage=e,this.getPaginationData(e)}}},i={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"CarsManagement"},[r("el-row",{staticClass:"header"},[r("div",{staticClass:"search"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.carQuery,expression:"carQuery"}],staticClass:"searchInput",attrs:{type:"text",placeholder:"车辆编号"},domProps:{value:e.carQuery},on:{input:function(t){t.target.composing||(e.carQuery=t.target.value)}}}),e._v(" "),r("span",{staticClass:"searchBtn",on:{click:e.handleSearch}},[r("img",{attrs:{src:a("F7VF"),alt:""}})])]),e._v(" "),r("div",{staticClass:"legends"},[r("span",{on:{click:e.handleAddCar}},[r("img",{attrs:{src:a("L6uk"),alt:""}}),e._v("\n        新增\n      ")])])]),e._v(" "),r("el-main",[r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.paginationData,border:"","row-style":e.tableRowStyle,"header-cell-style":e.tableHeaderColor,size:"mini"}},[r("el-table-column",{attrs:{align:"center",prop:"vehiclesTypeof",label:"车辆型号"}}),e._v(" "),r("el-table-column",{attrs:{align:"center",prop:"vehiclesNumBering",label:"车辆编号"}}),e._v(" "),r("el-table-column",{attrs:{align:"center",prop:"vehiclesUseunit",label:"使用单位"}}),e._v(" "),r("el-table-column",{attrs:{align:"center",prop:"vehiclesNsumber",label:"紧急电话"}}),e._v(" "),r("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{size:"mini"},on:{click:function(a){return e.handleEditorCar(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),r("el-button",{attrs:{size:"mini"},on:{click:function(a){return e.handleDeleteCar(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),r("el-pagination",{attrs:{"current-page":e.currentPage,"page-count":e.cars.length/5,"page-size":e.pageSize,layout:"total, prev, pager, next, jumper",total:e.cars.length},on:{"current-change":e.handleCurrentChange}})],1),e._v(" "),e.isShowAddCar?r("change-car",{attrs:{type:e.type.add},on:{addCar:e.addCar}}):e._e(),e._v(" "),e.isShowEditorCar?r("change-car",{attrs:{type:e.type.editor,selectCar:e.selectCar.row},on:{editorCar:e.editorCar}}):e._e()],1)},staticRenderFns:[]};var o=a("VU/8")(s,i,!1,function(e){a("5qIF")},"data-v-71e6664e",null);t.default=o.exports}});
//# sourceMappingURL=6.0646a86936a02ff32dee.js.map