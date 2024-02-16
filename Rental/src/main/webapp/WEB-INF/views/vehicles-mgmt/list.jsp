<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html> 
<html>
<head>
<meta charset="UTF-8">
<title>차량목록</title>
	<link rel="stylesheet" href="/resources/vehicles/css/list.css">
</head>
<body>
<h2>차량정보 리스트</h2>
	<form id="searchForm" action="/rental/vehicles-mgmt" method="get" style="text-align: center;">
		<label for="카테고리"></label>
		<select name="category" id="category">
			<option value="">-선택-</option>
			<option value="name">차량이름</option>
			<option value="plate_number">차량번호</option>
			<option value="options">비행</option>			
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
				<th>차량ID</th>
				<th>등록일</th>
				<th>이미지</th>
				<th>차량번호</th>
				<th>차량옵션</th>
				<th>시간당 금액</th>
				<th>거리당 금액</th>
				<th>기타</th>
				<th>비고</th>
				<th>수정</th>
				<th>삭제</th>
			</tr>
			<c:forEach items="${vehicles}" var="vehicle">
			<tr>
				<td>${vehicle.vehicle_id}</td>
				<fmt:parseDate value="${vehicle.reg_date}" var="regDate" pattern="yyyy-MM-dd HH:mm:ss"/> 
		 			<td><fmt:formatDate value="${regDate}" pattern="yy/MM/dd"/></td>
				<td>${vehicle.name}</td>
				<td>${vehicle.v_img}</td>
				<td>${vehicle.plate_number}</td>
				<td>${vehicle.price_per_hour}</td>
				<td>${vehicle.price_per_km}</td>
				<td>${vehicle.v_desc}</td>
				<td>${vehicle.remark}</td>
				<td><button class="updateBtn" type="button">수정</button></td>
				<td><button class="deleteBtn" type="button">삭제</button></td>
			</tr>
			</c:forEach>
		</table>
		
		<div style="display: block; text-align: center;">		
			<c:if test="${paging.startPage != 1 }">
				<a href="/rental/vehicles-mgmt?currPage=${paging.startPage - 1}&cntPerPage=${paging.cntPerPage}">&lt;</a>
			</c:if>
			<c:forEach begin="${paging.startPage}" end="${paging.endPage }" var="p">
				<c:choose>
					<c:when test="${p == paging.currPage}">
						<b>${p}</b>
					</c:when>
					<c:when test="${p != paging.currPage}">
						<a href="/rental/vehicles-mgmt?currPage=${p}&cntPerPage=${paging.cntPerPage}">${p}</a>
					</c:when>
				</c:choose>
			</c:forEach>
			<c:if test="${paging.endPage != paging.lastPage}">
				<a href="/rental/vehicles-mgmt?currPage=${paging.endPage+1 }&cntPerPage=${paging.cntPerPage}">&gt;</a>
			</c:if>
		</div>
	</div>
	
	<!-- vehicles 자바스크립트 경로 -->
	<script src="${pageContext.request.contextPath}/resources/vehicles/js/list.js"></script>
	
</body>
</html>