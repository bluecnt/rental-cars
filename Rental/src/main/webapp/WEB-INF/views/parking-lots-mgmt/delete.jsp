<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Delete Customer</title>
</head>
<body>
    <h3>Delete Parking-Lots</h3>

    <form action="/rental/parking-lots/delete" method="post">
        <label for="pl_id">Parking-Lots ID:</label>
        <input type="text" id="pl_id" name="pl_id" required>

        <input type="hidden" name="_method" value="DELETE">

        <button type="submit">주차장삭제</button>
    </form>

    <a href="/rental/parking-lots-mgmt">목록으로 돌아가기</a>
</body>
</html>