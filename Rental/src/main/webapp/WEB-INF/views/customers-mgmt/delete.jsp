<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Delete Customer</title>
</head>
<body>
    <h3>Delete Customer</h3>

    <form action="/rental/customers-mgmt/delete" method="post">
        <label for="cust_id">Customer ID:</label>
        <input type="text" id="cust_id" name="cust_id" required>

        <input type="hidden" name="_method" value="DELETE">

        <button type="submit">회원삭제</button>
    </form>

    <a href="/rental/customers-mgmt">목록으로 돌아가기</a>
</body>
</html>