<template>
	<div>
		<h2>函数详情</h2>
		<h4>{{formData.methodName}}</h4>
		<p> {{formData.methodScript}}</p>
		<h4>{{formData.parameterName}}</h4>
		<p> {{formData.parameterScript}}</p>
		<p> {{formData.parameterCategory}}</p>
		<p> {{formData.display}}</p>
	</div>
</template>

<script>
    import {functionDetails} from '@/api/moudule/functionDetails.js'
	export default {
		data(){
         return {
         formData:{
          	    modelId:'', 
                methodName:'',
                methodScript:'',
                parameterName:'',
                parameterScript:'',
                parameterCategory:'',
                display:''
            },
         } 
		},
		async created(){
		 const {id}=this.$route.query
		 await functionDetails(id).then(res => {
			this.formData=res.data
           	if(this.formData.display===1){
           		this.formData.display='显示'
           	}else{
           		this.formData.display='不显示'
           	}
           	switch(this.formData.parameterCategory)
					{
					case 'system':
					  this.formData.parameterCategory='系统'
					  break;
					case 'expert':
					  this.formData.parameterCategory='专家'
					  break;
					default:
					  this.formData.parameterCategory='个人'
					}
		 })
		}
	}
</script>

<style>

</style>

