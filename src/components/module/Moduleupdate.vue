<template>
	<div class="ModuleModification">
        <h2 class="title">模块修改</h2>
		<el-form ref="form" label-width="100px" v-for='(data,index) in datas' :key="data.id">
			 <el-form-item label="模块名称">
			    <h4>{{data.name}}</h4>
		     </el-form-item>
		     <el-form-item label="模块描述">
		     	<p>{{data.script}}</p>
		     </el-form-item>
		    <el-form-item >
			    <el-radio-group v-model="flagArr[index]">
			      <el-radio :label="1">显示</el-radio>
			      <el-radio :label="0">不显示</el-radio>
			    </el-radio-group>
		    </el-form-item>
		</el-form>
		<el-button type="primary" @click="onSubmit">保存</el-button>
		<el-button>取消</el-button>
	</div>
</template>

<script>
    import {moudleById,moduleList} from '@/api/moudule/Details.js'
    import {moduleUpdate} from '@/api/moudule/moduleUpdate.js'
	export default {
		data(){
         return {
            a:'',
            modelData:[],
            datas:[],
            flagArr:[]
         } 
		},
		 async created(){
			 this.lostLoading()
		},
		methods:{
			lostLoading(){
				const {id}=this.$route.query
				moudleById(id).then(res=>{
					this.a=res.data.modelModuleIds
	            	this.modelData=res.data
				})
	            moduleList().then(res=>{
	            	this.datas=res.data
	        		for(let i = 0 ;i<this.datas.length;i++){
	        			if(this.a.indexOf(this.datas[i].id)==-1){
	        				this.flagArr[i] = 0;
	        			}else{
	        				this.flagArr[i] = 1;
	        			}
	        		}
	            })
            
			},
			onSubmit(){
				const Arr=[]
                  for(let i=0;i<this.flagArr.length;i++){
	                  	if(this.flagArr[i]==1){
	                         Arr.push(this.datas[i].id)
                  		}
                  }    
                 this.modelData.modelModuleIds=Arr.join(';')
                 moduleUpdate(this.modelData).then(res=>{
                 	this.$router.back()
                 })
			}

		}

	}

</script>

<style>
.ModuleModification{
	margin-left:300px;
	.title{
		font-size:60px;
		color:#6b7a96;
        line-height:200px;
	}
	
}
</style>
