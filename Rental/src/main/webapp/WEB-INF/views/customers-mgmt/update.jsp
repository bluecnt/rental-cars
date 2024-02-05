<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Update Customer</title>
</head>
<body>

    <h2>고객 정보 업데이트</h2>
    <form action="/customers-mgmt/update/{cust_id}" method="post">
    	<input type="hidden" id="cust_id" name="cust_id" value="${cust_id}" />
    	<label for="user_email">메일주소: </label>
        <span>${customers.user_email}</span>
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
        <button type="submit">수정하기</button>
    </form>

</body>
</html>