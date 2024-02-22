<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Delete Customer</title>
</head>
<body>
<jsp:include page="/WEB-INF/views/include/header.jsp"></jsp:include>
    <h3>Delete Parking-Lots</h3>

    <form action="/rental/parking-lots-mgmt/delete" method="post">
        <label for="pl_id">Parking-Lots ID:</label>
        <input type="text" id="pl_id" name="pl_id" required>

        <input type="hidden" name="_method" value="DELETE">

        <button type="submit">주차장 삭제</button>
    </form>

    <a href="/rental/parking-lots-mgmt">목록으로 돌아가기</a>
    <jsp:include page="/WEB-INF/views/include/footer.jsp"></jsp:include>
</body>
</html>