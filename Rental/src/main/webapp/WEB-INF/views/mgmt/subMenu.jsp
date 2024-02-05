<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ include file="/WEB-INF/views/customers-mgmt/list.jsp" %>
<%@ include file="/WEB-INF/views/customers-mgmt/update.jsp" %>
<%@ include file="/WEB-INF/views/customers-mgmt/delete.jsp" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>관리시스템</title>
</head>
<body>
	<div id="customer-Mgmt">
	    <div onclick="toggleSubMenu('customerList')">고객목록</div>
	    <div onclick="toggleSubMenu('approval')">가입승인</div>
	    <div onclick="toggleSubMenu('infoModification')">정보수정</div>
	    <div onclick="toggleSubMenu('memberDeletion')">회원삭제</div>
	</div>
</body>
</html>