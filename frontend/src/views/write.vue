<template>
	<div>
		<h1>게시판 등록</h1>
		<div class="AddWrap">
			<table class="tbAdd">
					<colgroup>
						<col width="15%" />
						<col width="*" />
					</colgroup>
					<tr>
						<th>제목</th>
						<td><input type="text" v-model="title" ref="subject" /></td>
					</tr>
                    <tr>
						<th>말머리</th>
						<td><input v-model="sub" ref="sub"/></td>
					</tr>
					<tr>
						<th>내용</th>
						<td><textarea v-model="contant" ref="contant"></textarea></td>
					</tr>
                    <tr>
						<th>이미지 링크</th>
						<td><textarea v-model="img" ref="img"></textarea></td>
					</tr>
					<div class="w-32 h-32 border-2 border-dotted border-blue-500">
						<div v-if="images"
							class="w-full h-full flex items-center">
							<img :src="images" alt="image">
						</div>
						<div v-else
							class="w-full h-full flex items-center justify-center cursor-pointer hover:bg-pink-100"
							@click="clickInputTag()">
							<input ref="image" id="input"
									type="file" name="image" accept="image/*" multiple="multiple"
									class="hidden"
									@change="uploadImage()">
							<svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</div>
					</div>
					<select v-model="category" ref="category">
						<option v-for="list in  categoryList" :value="list.value">{{ list.text }}</option>
					</select>
				</table>
		</div>

		<div class="btnWrap">
			<a href="javascript:;" @click="fnList" class="btn">목록</a>
			<a href="javascript:;" @click="fnAddProc" class="btnAdd btn">등록</a>
		</div>	
		<div class="preview"><Card :uptime="Date.now()" :title="this.title" :sub="this.sub" :img="this.img" :contant="this.contant"/></div>
		<!-- <div class="preview"><preview :uptime="Date.now()" :title="this.title" :sub="this.sub" :img="this.img" :contant="this.contant"/></div> -->
	</div>
</template>

<script>

import { exportDefaultSpecifier } from '@babel/types';
import axios from 'axios';
import Nav from '../components/Nav.vue';
import Card from '../components/Card.vue';
import preview from '../components/preview.vue';

export default {
    name: 'Post',
    components: {
        Nav,
		Card,
		preview,
    },
    data() {
        return {
			categoryList:[
				{
					text:"카테고리 선택",
					value: "0"
				},
				{
					text : "뉴스",
					value: "news"
				},
				{
					text : "이벤트",
					value: "events"
				},
				{
					text : "사건",
					value: "issues"
				}
			],
            form: {

            },
            title: '',
            sub: '',
            contant: '',
            uploader: '',
            img:'',
			category: '0',
            user: {}
        };
    },
    mounted() {

    },
    methods: {
        fnList(){ //리스트 화면으로 이동 함수
			this.$router.push({path:'/'});
			
		}
		,async fnAddProc() { //등록 프로세스
			if(!this.title) { //제목이 없다면 값을 입력하라고 알려준다.
				alert("제목을 입력해 주세요");
				this.$refs.title.focus(); //방식으로 선택자를 찾는다.
				return;
			}
            this.user = (await axios.get('/api/v1/user/')).data.user.username
            console.log(this.user)
			this.form = { //backend로 전송될 POST 데이터
				title:this.title
				,sub:this.sub
				,contant:this.contant
				,uploader:this.user
                ,img:this.img
				,category:this.category
			} 
			console.log(this.form)
			axios.post('/api/v1/post/upload',this.form)
			.then((res)=>{
                if (res.status === 200) {
                    alert('등록되었습니다.');
				    this.fnList();
                }else{
                    alert('error')
                }
			})
			.catch((err)=>{
				console.log(err);
			})
			
		}, uploadImage: function() {
			let form = new FormData()
			let image = this.$refs['image'].files[0]
			
			form.append('img', image)
		
			axios.post('/upload', form, {
				header: { 'Content-Type': 'multipart/form-data' }
			}).then( ({data}) => {
				this.img = data
			})
			.catch( err => console.log(err))
			},
			clickInputTag: function() {
			this.$refs['image'].click()
		}
    }
}

</script>

<style>
	.preview{
		padding-top: 50px;
		padding-bottom: 50px;
		width: 30%;
		margin: 0 auto;
	}
	.write{
		width: 100%;
		align-items: center;
		justify-content: center;
	}
	h1{
		text-align: center;
	}
	.AddWrap{
		width:100%;
		display: flex;
		justify-content: center;
	}
	.tbAdd{border-top:1px solid #888;width: 80%;}
	.tbAdd th, .tbAdd td{border-bottom:1px solid #eee; padding:5px 0;}
	.tbAdd td{padding:10px 10px; box-sizing:border-box;}
	.tbAdd td input{width:100%; min-height:30px; box-sizing:border-box; padding:0 10px;}
	.tbAdd td textarea{width:100%; min-height:300px; padding:10px; box-sizing:border-box;}
	.btnWrap{text-align:center; margin:20px 0 0 0;}
	.btnWrap a{margin:0 10px;}
	.btnAdd {background:#43b984}
	.btnDelete{background:#f00;}
</style>