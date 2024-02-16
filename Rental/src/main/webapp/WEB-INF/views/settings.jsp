<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>	
		<h2>Customer 테이블 및 시퀀스 세팅</h2>
		<form id="createCustomersTSForm" action="/rental/settings/createCustomersTS" method="POST">
    		<button id="createCustomersTS" type="submit"> Customers테이블 및 시퀀스 생성</button>
		</form>
		<form id="initCustomersTSForm" action="/rental/settings/initCustomersTS" method="POST">
    		<button id="initCustomersTS" type="submit"> Customers테이블 및 시퀀스 초기화</button>
		</form>
		<form id="deleteCustomersTSForm" action="/rental/settings/deleteCustomersTS" method="POST">
    		<button id="deleteCustomersTS" type="submit"> Customers테이블 및 시퀀스 삭제</button>
		</form>
		<a href="/rental/customers-mgmt/add">Customers테이블 데이터 추가하러가기</a>
		
		<h2>ParkingLots 테이블 및 시퀀스 세팅</h2>
		<form id="createParkingLotsTSForm" action="/rental/settings/createParkingLotsTS" method="POST">
    		<button id="createParkingLotsTS" type="submit"> ParkingLots테이블 및 시퀀스 생성</button>
		</form>
		<form id="initParkingLotsTSForm" action="/rental/settings/initParkingLotsTS" method="POST">
    		<button id="initParkingLotsTS" type="submit"> ParkingLots테이블 및 시퀀스 초기화</button>
		</form>
		<form id="deleteParkingLotsTSForm" action="/rental/settings/deleteParkingLotsTS" method="POST">
    		<button id="deleteParkingLotsTS" type="submit"> ParkingLots테이블 및 시퀀스 삭제</button>
		</form>
		<a href="/rental/parking-lots-mgmt/add">ParkingLots 테이블 데이터 추가하러가기</a>
		<br>
		
		<h2>Vehicles 테이블 및 시퀀스 세팅</h2>
		<form id="createVehiclesTSForm" action="/rental/settings/createVehiclesTS" method="POST">
    		<button id="createVehiclesTS" type="submit"> Vehicles테이블 및 시퀀스 생성</button>
		</form>
		<form id="initVehiclesTSForm" action="/rental/settings/initVehiclesTS" method="POST">
    		<button id="initVehiclesTS" type="submit"> Vehicles테이블 및 시퀀스 초기화</button>
		</form>
		<form id="deleteVehiclesTSForm" action="/rental/settings/deleteVehiclesTS" method="POST">
    		<button id="deleteVehiclesTS" type="submit"> Vehicles테이블 및 시퀀스 삭제</button>
		</form>
		<a href="/rental/vehicles-mgmt/add">Vehicles 테이블 데이터 추가하러가기</a>
		<br>
	<script src="${pageContext.request.contextPath}/resources/settings/js/settings.js"></script>
</body>
</html>