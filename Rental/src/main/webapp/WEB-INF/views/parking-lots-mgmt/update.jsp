<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Update Customer</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/customers/css/update.css">
</head>
<body>
<jsp:include page="/WEB-INF/views/include/header.jsp"></jsp:include>

    <h2>고객 정보 업데이트</h2>
    <table border="1">
		<tr>
			<th>No</th>
			<th>등록일</th>
			<th>이름</th>
			<th>주소</th>
			<th>위도</th>
			<th>경도</th>
			<th>설명</th>
		</tr>
		<c:forEach items="${parkinglots}" var="parkinglot">
		<tr>
			<td>${parkinglot.pl_id}</td>
			<fmt:parseDate value="${parkinglot.reg_date}" var="reg_Date" pattern="yyyy-MM-dd HH:mm:ss"/> 
	 			<td><fmt:formatDate value="${joinDate}" pattern="yy/MM/dd"/></td>
			<td>${parkinglot.name}</td>
			<td>${parkinglot.latitude}</td>
			<td>${parkinglot.longitude}</td>
			<td>${parkinglot.pl_desc}</td>
			<td>${parkinglot.remark}</td>
		</tr>
		</c:forEach>
	</table>
	<c:forEach items="${parkinglots}" var="parkinglot">
		<form action="/rental/parking-lots-mgmt/update/${pl_id}" method="post">
	        <input type="hidden" name="reg_date" value="<%= new java.text.SimpleDateFormat("yyyy-MM-dd").format(new java.util.Date()) %>" />
	        <label for="name">이름: ${parkinglot.name}</label>
	        <br>
	        <input type="text" id="name" name="name" value="${parkinglot.name}"/>
	        <button type="submit">수정</button>
	        <br>
	        <label for="address">주소: ${parkinglot.address}</label>
	        <br>
	        <input type="text" id="address" name="address" value="${parkinglot.address}"/>
	        <button type="submit">수정</button>
	        <br>
	        <label for="latitude">위도: ${parkinglot.latitude}</label>
	        <br>
	        <input type="text" id="latitude" name="latitude" value="${parkinglot.latitude}"/>
	        <button type="submit">수정</button>
	        <br>
	        <label for="longitude">경도: ${parkinglot.longitude}</label>
	        <br>
	        <input type="text" id="longitude" name="longitude" value="${parkinglot.longitude}"/>
	        <button type="submit">변경</button>
	        <br>
	        <label for="pl_desc">설명: ${parkinglot.pl_desc}</label>
	        <br>
	        <input type="text" id="pl_desc" name="pl_desc" value="${parkinglot.pl_desc}"/>
	        <button type="submit">변경</button>
	        <br>
	        <label for="remark">비고: ${parkinglot.remark}</label>
	        <br>
	        <input type="text" id="remark" name="remark" value="${parkinglot.remark}"/>
	        <button type="submit">수정</button>
	        <br>
    	</form>
    </c:forEach>
    <jsp:include page="/WEB-INF/views/include/footer.jsp"></jsp:include>
</body>
</html>