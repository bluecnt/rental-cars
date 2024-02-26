<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html> 
<html>
<head>
<meta charset="UTF-8">
<title>회원목록</title>
	<link rel="stylesheet" href="/resources/customers/css/list.css">
</head>
<body>
	<jsp:include page="/WEB-INF/views/include/header.jsp"></jsp:include>
	<h2>회원정보 리스트</h2>
	<form id="searchForm" action="/rental/customers-mgmt" method="get" style="text-align: center;">
		<label for="카테고리"></label>
		<select name="category" id="category">
			<option value="">-선택-</option>
			<option value="user_email">이메일</option>
			<option value="name">이름</option>
			<option value="phone_number">휴대폰</option>			
		</select>
		<label for="searchText"></label>
		<input type="text" name="searchText" id="searchText">
		<button id="btn1" type="button">검색</button>
	</form>
	
	<div id="outter">
		<div style="float: right;">
			<select id="cntPerPage" name="sel" onchange="selChange()">
				<option value="5"
					<c:if test="${paging.cntPerPage == 5}">selected</c:if>>5줄 보기</option>
				<option value="10"
					<c:if test="${paging.cntPerPage == 10}">selected</c:if>>10줄 보기</option>
				<option value="15"
					<c:if test="${paging.cntPerPage == 15}">selected</c:if>>15줄 보기</option>
				<option value="20"
					<c:if test="${paging.cntPerPage == 20}">selected</c:if>>20줄 보기</option>
			</select>
		</div>

		<table border="1">
			<tr>
				<th>고객번호</th>
				<th>이메일</th>
				<th>가입일</th>
				<th>이름</th>
				<th>생년월일</th>
				<th>휴대번호</th>
				<th>면허번호</th>
				<th>카드사</th>
				<th>카드번호</th>
				<th>포인트</th>			
				<th>기타</th>
				<th>승인</th>
				<th>수정</th>
				<th>삭제</th>
			</tr>
			<c:forEach items="${customers}" var="customer">
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
				<td>
            		<c:choose>
		                <c:when test="${customer.accept == 0}">대기</c:when>
		                <c:when test="${customer.accept == 1}">완료</c:when>
		                <c:otherwise>${customer.accept}</c:otherwise>
            		</c:choose>
        		</td>
				<td><button class="updateBtn" type="button">수정</button></td>
				<td><button class="deleteBtn" type="button">삭제</button></td>
			</tr>
			</c:forEach>
		</table>
		
		<div style="display: block; text-align: center;">		
			<c:if test="${paging.startPage != 1 }">
				<a href="/rental/customers-mgmt?currPage=${paging.startPage - 1}&cntPerPage=${paging.cntPerPage}">&lt;</a>
			</c:if>
			<c:forEach begin="${paging.startPage}" end="${paging.endPage }" var="p">
				<c:choose>
					<c:when test="${p == paging.currPage}">
						<b>${p}</b>
					</c:when>
					<c:when test="${p != paging.currPage}">
						<a href="/rental/customers-mgmt?currPage=${p}&cntPerPage=${paging.cntPerPage}">${p}</a>
					</c:when>
				</c:choose>
			</c:forEach>
			<c:if test="${paging.endPage != paging.lastPage}">
				<a href="/rental/customers-mgmt?currPage=${paging.endPage+1 }&cntPerPage=${paging.cntPerPage}">&gt;</a>
			</c:if>
		</div>
	</div>
	
	<!-- customers 자바스크립트 경로 -->
	<script src="${pageContext.request.contextPath}/resources/customers/js/list.js"></script>
	<jsp:include page="/WEB-INF/views/include/footer.jsp"></jsp:include>
</body>
</html>