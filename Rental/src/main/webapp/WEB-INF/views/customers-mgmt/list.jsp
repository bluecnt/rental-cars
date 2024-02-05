<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>게시판</title>
</head>
<body>
	<form action="./search" method="get">
		<label for="카테고리"></label>
		<select name="category" id="category">
			<option value="user_email">이메일</option>
			<option value="name">이름</option>
			<option value="phone_number">휴대폰</option>			
		</select>
		
		<label for="searchText"></label>
		<input type="text" name="searchText" id=searchText">
		
		<button type="submit">검색</button>
	</form>
	
	<table border="1">
		<tr>
			<th>이메일</th>
			<th>가입일</th>
			<th>이름</th>
			<th>생년월일</th>
			<th>휴대폰</th>
			<th>면허번호</th>
			<th>카드사</th>
			<th>카드번호</th>
			<th>마일리지</th>			
			<th>비고</th>
		</tr>

		<c:forEach items="${customers}" var="customer">
		<tr>
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

	<div class="paging">
        <button onclick="prevPage()">Prev</button>
        <span id="currentPage">${pagingDTO.nowPage}</span>
        <button onclick="nextPage()">Next</button>
    </div>
    
    <script>
    function prevPage() {
        var currentPage = ${pagingDTO.nowPage};
        if (currentPage > 1) {
            location.href = "./search?category=${param.category}&searchText=${param.searchText}&page=" + (currentPage - 1);
        }
    }

    function nextPage() {
        var currentPage = ${pagingDTO.nowPage};
        var lastPage = ${pagingDTO.lastPage};
        if (currentPage < lastPage) {
            location.href = "./search?category=${param.category}&searchText=${param.searchText}&page=" + (currentPage + 1);
        }
    }
    
</script>

</body>

</html>