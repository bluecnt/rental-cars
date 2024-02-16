<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Add New Customer</title>
</head>
<body>

    <h2>차량정보 추가</h2>
    <form action="/rental/vehicles-mgmt/add" method="post">
        <input type="hidden" name="reg_date" value="<%= new java.text.SimpleDateFormat("yyyy-MM-dd").format(new java.util.Date()) %>" />
        <br>
        <label for="name">차 이름: </label>
        <input type="text" id="name" name="name" value="소나타" required />
        <br>
        <label for="img">이미지: </label>
        <input type="text" id="v_img" name="v_img" value="알흠다운사진" required />
        <br>
        <label for="plate_number">차 번호: </label>
        <input type="text" id="plate_number" name="plate_number" value="12허7777" required />
        <br>
        <label for="options">옵션: </label>
        <input type="text" id="options" name="options" value="비행" required />
        <br>
        <label for="price_per_hour">시간당 가격: </label>
        <input type="number" id="price_per_hour" name="price_per_hour" value="9" required />
        <br>
        <label for="price_per_km">100km당 가격: </label>
        <input type="number" id="price_per_km" name="price_per_km" value="10" required />
        <br>
        <label for="ve_desc">설명: </label>
        <input type="text" id="v_desc" name="v_desc" value="더미" required />
        <br>
        <label for="remark">기타: </label>
        <input type="text" id="remark" name="remark" value="더미" required />
        <br>
        <button type="submit">정보추가</button>
    </form>

</body>
</html>