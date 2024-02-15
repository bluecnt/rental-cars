<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html> 
<html>
<head>
<meta charset="UTF-8">
<title>주차장목록</title>
	<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/parking-lots/css/list.css">
</head>
<body>
<h2>주차장정보 리스트</h2>
	<form id="searchForm" action="<%=request.getContextPath()%>/rental/parking-lots-mgmt" method="get" style="text-align: center;">
		<label for="카테고리"></label>
		<select name="category" id="category">
			<option value="">-선택-</option>
			<option value="name">이름</option>
			<option value="address">주소</option>			
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

	<h2>주차장</h2>
	<table border="1">
		<tr>
			<th>번호</th>
			<th>등록일</th>
			<th>이름</th>
			<th>주소</th>
			<th>위도(y)</th>
			<th>경도(x)</th>
			<th>설명</th>
			<th>비고</th>			
			<th>수정</th>
			<th>삭제</th>
		</tr>
		<c:forEach items="${parkinglots}" var="parkinglot">
		<tr>
			<td>${parkinglot.pl_id}</td>
			<fmt:parseDate value="${parkinglot.reg_date}" var="regDate" pattern="yyyy-MM-dd HH:mm:ss"/> 
	 			<td><fmt:formatDate value="${regDate}" pattern="yy/MM/dd"/></td>
			<td>${parkinglot.name}</td>
			<td>${parkinglot.address}</td>
			<td>${parkinglot.latitude}</td>
			<td>${parkinglot.longitude}</td>
			<td>${parkinglot.pl_desc}</td>
			<td>${parkinglot.remark}</td>
			<td><button class="updateBtn" type="button">수정</button></td>
			<td><button class="deleteBtn" type="button">삭제</button></td>
		</tr>
		</c:forEach>
	</table>
	
	<div style="display: block; text-align: center;">		
		<c:if test="${paging.startPage != 1 }">
			<a href="<%=request.getContextPath()%>/rental/parking-lots-mgmt?currPage=${paging.startPage - 1}&cntPerPage=${paging.cntPerPage}">&lt;</a>
		</c:if>
		<c:forEach begin="${paging.startPage}" end="${paging.endPage }" var="p">
			<c:choose>
				<c:when test="${p == paging.currPage}">
					<b>${p}</b>
				</c:when>
				<c:when test="${p != paging.currPage}">
					<a href="<%=request.getContextPath()%>/rental/parking-lots-mgmt?currPage=${p}&cntPerPage=${paging.cntPerPage}">${p}</a>
				</c:when>
			</c:choose>
		</c:forEach>
		<c:if test="${paging.endPage != paging.lastPage}">
			<a href="<%=request.getContextPath()%>/rental/parking-lots-mgmt?currPage=${paging.endPage+1 }&cntPerPage=${paging.cntPerPage}">&gt;</a>
		</c:if>
	</div>
</div>
	<script src="${pageContext.request.contextPath}/resources/parking-lots/js/list.js"></script> 
</body>
</html>