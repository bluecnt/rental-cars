<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Accept Customer</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/customers/css/update.css">
</head>
<body>
<jsp:include page="/WEB-INF/views/include/header.jsp"></jsp:include>

    <h2>고객 승인 관리</h2>
    <table border="1">
		<tr>
			<th>No</th>
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
	  <c:forEach items="${customer}" var="customer">
		<form action="/rental/customers-mgmt/accept/${cust_id}" method="post">
	        <input type="hidden" name="join_date" value="<%= new java.text.SimpleDateFormat("yyyy-MM-dd").format(new java.util.Date()) %>" />
	        <br>
	        <label for="user_email">메일주소: ${customer.user_email}</label>
	        <br>
	        <label for="user_pw">비밀번호: ${customer.user_pw}</label>
	        <br>
	        <input type="password" id="user_pw" name="user_pw" value="${customer.user_pw}"/>
	    	<button type="submit">변경</button>
	        <br>
	        <label for="name">고객이름: ${customer.name}</label>
	        <br>
	        <input type="text" id="name" name="name" value="${customer.name}"/>
	        <button type="submit">수정</button>
	        <br>
	        <label for="phone_number">휴대번호: ${customer.phone_number}</label>
	        <br>
	        <input type="text" id="phone_number" name="phone_number" value="${customer.phone_number}"/>
	        <button type="submit">수정</button>
	        <br>
	        <label for="license_number">면허번호: ${customer.license_number}</label>
	        <br>
	        <input type="text" id="license_number" name="license_number" value="${customer.license_number}"/>
	        <button type="submit">수정</button>
	        <br>
	        <label for="credit_card_company">카드회사: ${customer.credit_card_company}</label>
	        <br>
	        <input type="text" id="credit_card_company" name="credit_card_company" value="${customer.credit_card_company}"/>
	        <button type="submit">변경</button>
	        <br>
	        <label for="credit_card_number">카드번호: ${customer.credit_card_number}</label>
	        <br>
	        <input type="text" id="credit_card_number" name="credit_card_number" value="${customer.credit_card_number}"/>
	        <button type="submit">변경</button>
	        <br>
	        <label for="point">포인트: ${customer.point}</label>
	        <br>
	        <input type="number" id="point" name="point" value="${customer.point}"/>
	        <button type="submit">변경</button>
	        <br>
	        <label for="remark">기타: ${customer.remark}</label>
	        <br>
	        <input type="text" id="remark" name="remark" value="${customer.remark}"/>
	        <button type="submit">수정</button>
	        <br>
	        <label for="accept">승인여부: ${customer.accept}</label>
	        <br>
	        <input type="number" id="accept" name="accept" value="${customer.accept}"/>
	        <button type="submit">수정</button>
	        <br>
    	</form>
    </c:forEach>
    <a href="/rental/customers-mgmt">목록으로 돌아가기</a>
    <jsp:include page="/WEB-INF/views/include/footer.jsp"></jsp:include>
</body>
</html>