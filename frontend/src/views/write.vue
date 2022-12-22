<template>
	<div>
		<h1>게시판 등록</h1>
		<div class="AddWrap">
			<form>
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
						<td><textarea v-model="sub" ref="sub"></textarea></td>
					</tr>
					<tr>
						<th>내용</th>
						<td><textarea v-model="contant" ref="contant"></textarea></td>
					</tr>
                    <tr>
						<th>이미지 링크</th>
						<td><textarea v-model="img" ref="img"></textarea></td>
					</tr>
				</table>
			</form>
		</div>

		<div class="btnWrap">
			<a href="javascript:;" @click="fnList" class="btn">목록</a>
			<a href="javascript:;" @click="fnAddProc" class="btnAdd btn">등록</a>
		</div>	
	</div>
</template>

<script>

import { exportDefaultSpecifier } from '@babel/types';
import axios from 'axios';
import Nav from '../components/Nav.vue';

export default {
    name: 'Post',
    components: {
        Nav,
    },
    data() {
        return {
            form: {

            },
            title: '',
            sub: '',
            contant: '',
            uploader: '',
            img:'',
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
			
		}
    }
}

</script>

<style>
	.tbAdd{border-top:1px solid #888;}
	.tbAdd th, .tbAdd td{border-bottom:1px solid #eee; padding:5px 0;}
	.tbAdd td{padding:10px 10px; box-sizing:border-box;}
	.tbAdd td input{width:100%; min-height:30px; box-sizing:border-box; padding:0 10px;}
	.tbAdd td textarea{width:100%; min-height:300px; padding:10px; box-sizing:border-box;}
	.btnWrap{text-align:center; margin:20px 0 0 0;}
	.btnWrap a{margin:0 10px;}
	.btnAdd {background:#43b984}
	.btnDelete{background:#f00;}
</style>