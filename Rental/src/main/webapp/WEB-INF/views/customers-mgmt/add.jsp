<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@page import="java.util.Date" %>
<%@page import="java.text.SimpleDateFormat" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Add New Customer</title>
    <script>
    // 임의의 데이터를 자동으로 입력하는 함수
    function fillTestData() {
        document.getElementById("user_email").value = "test@example.com";
        document.getElementById("user_pw").value = "test123";
        document.getElementById("name").value = "테스트 사용자";
        document.getElementById("birthday").value = "19900101";
        document.getElementById("phone_number").value = "01012345678";
        document.getElementById("license_number").value = "123456789";
        document.getElementById("credit_card_company").value = "카드회사";
        document.getElementById("credit_card_number").value = "1234-5678-9012-3456";
        document.getElementById("point").value = "100";
        document.getElementById("remark").value = "테스트 기타사항";
    }

    // 페이지 로드 시 자동으로 데이터 입력 함수 호출
    window.onload = fillTestData;
</script>
</head>
<body>
    <h2>회원가입</h2>
    <form id="test" action="/rental/customers-mgmt/add" method="post">
        <input type="hidden" name="join_date" value="<%= new java.text.SimpleDateFormat("yyyy-MM-dd").format(new java.util.Date()) %>" />
		<br>
        <label for="user_email">메일주소: </label>
        <input type="text" id="user_email" name="user_email" required />
        <br>
        <label for="user_pw">비밀번호: </label>
        <input type="password" id="user_pw" name="user_pw" required />
		<br>
        <label for="name">본인성명: </label>
        <input type="text" id="name" name="name" required />
		<br>
        <label for="birthday">생년월일: </label>
        <input type="text" id="birthday" name="birthday" required />
        <br>
        <label for="phone_number">휴대번호: </label>
        <input type="text" id="phone_number" name="phone_number" required />
        <br>
        <label for="license_number">면허번호: </label>
        <input type="text" id="license_number" name="license_number" required />
		<br>
		<label for="credit_card_company">카드회사: </label>
        <input type="text" id="credit_card_company" name="credit_card_company" required />
		<br>
		<label for="credit_card_number">카드번호: </label>
        <input type="text" id="credit_card_number" name="credit_card_number" required />
		<br>
        <label for="point">마일리지: </label>
        <input type="text" id="point" name="point" required />
		<br>
        <label for="remark">기타사항: </label>
        <input type="text" id="remark" name="remark" required />
		<br>
        <button type="submit">가입신청</button>
    </form>

</body>
</html>