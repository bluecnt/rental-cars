<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Update Vehicles</title>
<link rel="stylesheet"
	href="${pageContext.request.contextPath}/resources/vehicles/css/update.css">
</head>
<body>
	<jsp:include page="/WEB-INF/views/include/header.jsp"></jsp:include>

	<h2>차량 정보 업데이트</h2>
	<table border="1">
		<tr>
			<th>No</th>
			<th>가입일</th>
			<th>차이름</th>
			<th>이미지</th>
			<th>차량번호</th>
			<th>차량옵션</th>
			<th>시간당 요금</th>
			<th>10km당 요금</th>
			<th>설명</th>
			<th>기타</th>
		</tr>
		<c:forEach items="${vehicle}" var="vehicle">
			<tr>
				<td>${vehicle.vehicle_id}</td>
				<fmt:parseDate value="${vehicle.reg_date}" var="regDate"
					pattern="yyyy-MM-dd HH:mm:ss" />
				<td><fmt:formatDate value="${regDate}" pattern="yy/MM/dd" /></td>
				<td>${vehicle.name}</td>
				<td>${vehicle.v_img}</td>
				<td>${vehicle.plate_number}</td>
				<td>${vehicle.options}</td>
				<td>${vehicle.price_per_hour}</td>
				<td>${vehicle.price_per_km}</td>
				<td>${vehicle.v_desc}</td>
				<td>${vehicle.remark}</td>
			</tr>
		</c:forEach>
	</table>
	<c:forEach items="${vehicle}" var="vehicle">
		<form action="/rental/vehicles-mgmt/update/${vehicle_id}"
			method="post">
			<input type="hidden" name="reg_date"
				value="<%=new java.text.SimpleDateFormat("yyyy-MM-dd").format(new java.util.Date())%>" />
			<br> 
			<label for="name">차이름: ${vehicle.name}</label> 
			<br> 
			<input type="text" id="name" name="name" value="${vehicle.name}" />
			<button type="submit">변경</button>
			<br> 
			<label for="v_img">이미지: ${vehicle.v_img}</label> 
			<br> 
			<input type="text" id="v_img" name="v_img" value="${vehicle.v_img}" />
			<button type="submit">변경</button>
			<br> 
			<label for="license_number">차량번호:${vehicle.plate_number}</label> 
			<br> 
			<input type="text" id="plate_number" name="plate_number" value="${vehicle.plate_number}" />
			<button type="submit">수정</button>
			<br> 
			<label for="options">옵션: ${vehicle.options}</label> 
			<br>
			<input type="text" id="options" name="options" value="${vehicle.options}" />
			<button type="submit">변경</button>
			<br> 
			<label for="price_per_hour">시간당 요금: ${vehicle.price_per_hour}</label> 
			<br> 
			<input type="number" id="price_per_hour" name="price_per_hour" value="${vehicle.price_per_hour}" />
			<button type="submit">변경</button>
			<br> 
			<label for="price_per_km">10km당 요금: ${vehicle.price_per_km}</label> 
			<br> 
			<input type="number" id="price_per_km" name="price_per_km" value="${vehicle.price_per_km}" />
			<button type="submit">변경</button>
			<br> 
			<label for="v_desc">기타: ${vehicle.v_desc}</label> 
			<br>
			<input type="text" id="v_desc" name="v_desc" value="${vehicle.v_desc}" />
			<button type="submit">변경</button>
			<br> 
			<label for="remark">기타: ${vehicle.remark}</label> 
			<br>
			<input type="text" id="remark" name="remark" value="${vehicle.remark}" />
			<button type="submit">수정</button>
			<br>
		</form>
	</c:forEach>
	<a href="/rental/vehicles-mgmt">목록으로 돌아가기</a>
	<jsp:include page="/WEB-INF/views/include/footer.jsp"></jsp:include>
</body>
</html>