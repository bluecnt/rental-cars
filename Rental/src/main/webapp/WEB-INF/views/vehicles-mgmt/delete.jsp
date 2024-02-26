<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Delete Vehicle</title>
</head>
<body>
<jsp:include page="/WEB-INF/views/include/header.jsp"></jsp:include>
    <h3>Delete Vehicle</h3>

    <form action="/rental/vehicles-mgmt/delete" method="post">
        <label for="vehicle_id">Vehicle ID: </label>
        <input type="text" id="vehicle_id" name="vehicle_id" required>

        <input type="hidden" name="_method" value="DELETE">

        <button type="submit">차량삭제</button>
    </form>
	<jsp:include page="/WEB-INF/views/include/footer.jsp"></jsp:include>
</body>
</html>