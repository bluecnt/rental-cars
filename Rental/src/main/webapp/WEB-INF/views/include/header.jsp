<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="core" uri="http://java.sun.com/jsp/jstl/core"%>
<!-- 스프링은 따로 라이브러리를 설치하지 않아도 다운 받을 라이브러리를 설정할 수 있다. -->
<!-- 그 중에 jstl 라이브러리도 있기 때문에 사용할 수 있는것 -->
<!-- 라이브러리 목록은 iot/pom.xml, c:\사용자\.m2에서 확인가능 -->
<!-- 
<!-- rel : 형태는 스타일 시트, 타입은 텍스트로된 css -->
<!-- 주소 뒤에 ?v=로 버전관리를 할 수 있다 -->
<!-- 어느 페이지에 가도 인클루드 되어있는 헤더에 jQuery 선언문을 넣는다. -->
<script type="text/javascript"
	src="https://code.jquery.com/jquery-3.5.1.min.js"></script>

<style>
header ul, header ul li {
	margin: 0;
	padding: 0;
	display: inline;
}

header .category {
	font-size: 18px;
}

header .category ul li:not(:first-child) { /* 첫번째 li만 빼고 지정 */
	padding-left: 30px;
}

header .category ul li a:hover, header .category ul li a.active {
	font-weight: bold;
	color: #0000cd;
}

#userid, #userpw {
	width: 100px;
	height: 18px;
	font-size: 14px;
}

header ul li input {
	display: block;
}
</style>

<body>
	<header style="border-bottom: 1px solid #ccc; padding: 15px 0; text-align: left">
		<div class="category" style="margin-left: 100px;">
			<ul>
				<li><a href="/"><img src="resources/img/logo.png"></a></li>
				<!-- 아래 li는 로그인 / 비로그인 상태를 구분할때 예시 -->
				<!-- <li><a href='/rental/customers-mgmt' ${category eq 'cu' ? "class='active'" : '' } >고객관리</a></li> -->
				<li><a href='/rental/customers-mgmt'>고객관리</a></li>
				<li><a href='/rental/parking-lots-mgmt'>주차장관리</a></li>
				<li><a href='/rental/vehicles-mgmt'>차량관리</a></li>
			</ul>
		</div>
	</header>
</body>
