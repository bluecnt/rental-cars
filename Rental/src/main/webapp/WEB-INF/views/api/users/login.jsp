<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>어서오세요! BlueCnt에 오신것을 환영합니다~</title>
</head>
<body>
	<jsp:include page="/WEB-INF/views/include/header.jsp"></jsp:include>

			<form action="/rental/api/users/login" method="post">
	        <label for="user_email">메일주소 </label>
	        <input type="text" id="user_email" name="user_email" value="dummy@example.com" required />
	        <br>
	        <label for="user_pw">비밀번호 </label>
	        <input type="text" id="user_pw" name="user_pw" value="1234" required />
	        <br>
	        <button type="button" onclick="login()">로그인</button>
	        <button type="button" onclick="reg()">회원가입</button>
    	</form>
    	
	<jsp:include page="/WEB-INF/views/include/footer.jsp"></jsp:include>	
</body>
</html>