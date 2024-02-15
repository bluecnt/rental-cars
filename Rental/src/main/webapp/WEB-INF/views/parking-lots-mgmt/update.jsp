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

    <h2>고객 정보 업데이트</h2>
    <table border="1">
		<tr>
			<th>고객번호</th>
			<th>이메일</th>
			<th>가입일</th>
			<th>이름</th>
			<th>생년월일</th>
			<th>휴대폰</th>
			<th>면허번호</th>
			<th>카드사</th>
			<th>카드번호</th>
			<th>마일리지</th>			
			<th>기타사항</th>
		</tr>
		<c:forEach items="${customer}" var="customer">
		<tr>
			<td>${customer.cust_id}</td>
			<td>${customer.user_email}</td>
			<fmt:parseDate value="${customer.join_date}" var="joinDate" pattern="yyyy-MM-dd HH:mm:ss"/> 
	 			<td><fmt:formatDate value="${joinDate}" pattern="yy/MM/dd"/></td>
			<td>${customer.name}</td>
			<fmt:parseDate value="${customer.birthday}" var="birthDay" pattern="yyyy-MM-dd HH:mm:ss"/> 
	 			<td><fmt:formatDate value="${birthDay}" pattern="yy/MM/dd"/></td>
			<td>${customer.phone_number}</td>
			<td>${customer.license_number}</td>
			<td>${customer.credit_card_company}</td>
			<td>${customer.credit_card_number}</td>
			<td>${customer.point}</td>
			<td>${customer.remark}</td>
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
	        <input type="number" id="latitude" name="latitude" value="${parkinglot.latitude}"/>
	        <button type="submit">수정</button>
	        <br>
	        <label for="longitude">경도: ${parkinglot.longitude}</label>
	        <br>
	        <input type="number" id="longitude" name="longitude" value="${parkinglot.longitude}"/>
	        <button type="submit">변경</button>
	        <br>
	        <label for="desc">설명: ${parkinglot.desc}</label>
	        <br>
	        <input type="text" id="desc" name="desc" value="${parkinglot.desc}"/>
	        <button type="submit">변경</button>
	        <br>
	        <label for="remark">비고: ${parkinglot.remark}</label>
	        <br>
	        <input type="text" id="remark" name="remark" value="${parkinglot.remark}"/>
	        <button type="submit">수정</button>
	        <br>
    	</form>
    </c:forEach>
</body>
</html>