<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Add New Customer</title>
</head>
<body>

    <h2>고객정보 추가</h2>
    <form action="/add" method="post">
        <input type="hidden" name="join_date" value="<%= new java.text.SimpleDateFormat("yyyy-MM-dd").format(new java.util.Date()) %>" />
        <br>
        <label for="user_email">이메일 주소: </label>
        <input type="text" id="user_email" name="user_email" value="dummy@example.com" required />
        <br>
        <label for="user_pw">비밀번호: </label>
        <input type="password" id="user_pw" name="user_pw" value="dummyPassword" required />
        <br>
        <label for="name">본인 성명: </label>
        <input type="text" id="name" name="name" value="홍길동" required />
        <br>
        <label for="birthday">생년월일: </label>
        <input type="text" id="birthday" name="birthday" value="19900101" required />
        <br>
        <label for="phone_number">휴대전화 번호: </label>
        <input type="text" id="phone_number" name="phone_number" value="010-1234-5678" required />
        <br>
        <label for="license_number">면허 번호: </label>
        <input type="text" id="license_number" name="license_number" value="123456789012" required />
        <br>
        <label for="credit_card_company">카드 회사: </label>
        <input type="text" id="credit_card_company" name="credit_card_company" value="신한카드" required />
        <br>
        <label for="credit_card_number">카드 번호: </label>
        <input type="text" id="credit_card_number" name="credit_card_number" value="1234-5678-9012-3456" required />
        <br>
        <label for="point">포인트: </label>
        <input type="number" id="point" name="point" value="1000" required />
        <br>
        <label for="remark">기타: </label>
        <input type="text" id="remark" name="remark" value="더미 데이터입니다." required />
        <br>
        <button type="submit">정보추가</button>
    </form>

</body>
</html>