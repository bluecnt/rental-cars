<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>주차장 정보추가</title>
</head>
<body>
<jsp:include page="/WEB-INF/views/include/header.jsp"></jsp:include>

    <h2>주차장 정보추가</h2>
    <form action="/rental/parking-lots-mgmt/add" method="post">
        <input type="hidden" name="reg_date" value="<%= new java.text.SimpleDateFormat("yyyy-MM-dd").format(new java.util.Date()) %>" />
        <br>
        <label for="name">이름: </label>
        <input type="text" id="name" name="name" value="구리시공유주차장" required />
        <br>
        <label for="address">주소: </label>
        <input type="text" id="address" name="address" value="경기구리시 인창동 675-2" required />
        <br>
        <label for="latitude">위도: </label>
        <input type="text" id="latitude" name="latitude" value="123" required />
        <br>
        <label for="longitude">경도: </label>
        <input type="text" id="longitude" name="longitude" value="456" required />
        <br>
        <label for="pl_desc">설명: </label>
        <input type="text" id="pl_desc" name="pl_desc" value="설명" required />
        <br>
        <label for="remark">기타: </label>
        <input type="text" id="remark" name="remark" value="비고" required />
        <br>
        <button type="submit">정보추가</button>
    </form>
	<jsp:include page="/WEB-INF/views/include/footer.jsp"></jsp:include>
</body>
</html>