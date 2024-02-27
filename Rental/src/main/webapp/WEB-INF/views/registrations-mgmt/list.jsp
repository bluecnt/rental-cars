<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html> 
<html>
<head>
<meta charset="UTF-8">
<title>등록 정보 목록</title>
	<link rel="stylesheet" href="/resources/customers/css/list.css">
</head>
<body>
	<jsp:include page="/WEB-INF/views/include/header.jsp"></jsp:include>
	<h2>등록정보</h2>
	
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
				<th>등록ID</th>
				<th>등록일</th>
				<th>주차장ID</th>
				<th>차량ID</th>
				<th>차량번호</th>
				<th>삭제</th>
			</tr>
			<c:forEach items="${reg}" var="registrations">
			<tr>
				<td>${reg.reg_id}</td>
				<fmt:parseDate value="${reg.reg_date}" var="joinDate" pattern="yyyy-MM-dd HH:mm:ss"/> 
		 			<td><fmt:formatDate value="${regDate}" pattern="yy/MM/dd"/></td>
				<td>${reg.pl_id}</td>
				<td>${reg_vehicle_id}</td>
				<td>${reg.car_plate_number}</td>
				<td>${reg.remark}</td>
				<td><button class="deleteBtn" type="button">삭제</button></td>
			</tr>
			</c:forEach>
		</table>
		
		<div style="display: block; text-align: center;">		
			<c:if test="${paging.startPage != 1 }">
				<a href="/rental/registrations-mgmt?currPage=${paging.startPage - 1}&cntPerPage=${paging.cntPerPage}">&lt;</a>
			</c:if>
			<c:forEach begin="${paging.startPage}" end="${paging.endPage }" var="p">
				<c:choose>
					<c:when test="${p == paging.currPage}">
						<b>${p}</b>
					</c:when>
					<c:when test="${p != paging.currPage}">
						<a href="/rental/registrations-mgmt?currPage=${p}&cntPerPage=${paging.cntPerPage}">${p}</a>
					</c:when>
				</c:choose>
			</c:forEach>
			<c:if test="${paging.endPage != paging.lastPage}">
				<a href="/rental/registrations?currPage=${paging.endPage+1 }&cntPerPage=${paging.cntPerPage}">&gt;</a>
			</c:if>
		</div>
	</div>
	
	<!-- customers 자바스크립트 경로 -->
	<script src="${pageContext.request.contextPath}/resources/customers/js/list.js"></script>
	<jsp:include page="/WEB-INF/views/include/footer.jsp"></jsp:include>
</body>
</html>