package com.bluecnt.rental.dto;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;

@Data
@Slf4j
public class Paging {
	private Long page;	// 현재 게시판 페이지
	private Long perPage;	// 페이지당 글의 갯수
	private Long totalPage;	// 전체 페이지의 갯수
	private Long startRow;	// 현재 페이지의 시작 글번호
	private Long lastRow;	// 현재 페이지의 마지막 글번호
	private Long block;		// 현재 pagionation
	private Long perBlock;	// pagination당 page갯수
	private Long startNum;	// pagination의 시작 페이지번호
	private Long lastNum;	// pagination의 마지막 페이지번호
	private boolean pre;	// 이전페이지
	private boolean next;	// 다음페이지
}
