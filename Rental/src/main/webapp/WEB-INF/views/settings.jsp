<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<table border="1">
		<tr>
			<td><button class="tableCreate" type="button">테이블 생성하기</button></td>
			<td><button class="seqCreate" type="button">시퀀스 생성하기</button></td>
			<td><button class="tableInit" type="button">테이블 초기화</button></td>
			<td><button class="seqInit" type="button">시퀀스 초기화</button></td>
		</tr>
	</table>
	
	<script>
	    document.getElementById('tableCreate').addEventListener('click', function() {
	        // 테이블 생성하는 코드 추가
	        alert("테이블을 생성합니다.");
	    });
	
	    document.getElementById('seqCreate').addEventListener('click', function() {
	        // 시퀀스 생성하는 코드 추가
	        alert("시퀀스를 생성합니다.");
	    });
	
	    document.getElementById('tableInit').addEventListener('click', function() {
	        // 테이블 초기화하는 코드 추가
	        alert("테이블을 초기화합니다.");
	    });
	
	    document.getElementById('seqInit').addEventListener('click', function() {
	        // 시퀀스 초기화하는 코드 추가
	        alert("시퀀스를 초기화합니다.");
	    });
	</script>
</body>
</html>
