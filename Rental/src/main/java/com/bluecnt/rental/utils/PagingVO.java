package com.bluecnt.rental.utils;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@ToString
@Setter
@Getter
public class PagingVO {
	
	// 현재페이지, 시작페이지, 끝페이지, 게시글 총 갯수, 페이지당 글 갯수, 마지막페이지, 
	// SQL쿼리에 쓸 start, end
	private int currPage, startPage, endPage, total, cntPerPage, lastPage, 
				start, end;
	private int cntPage = 5;
	
	public PagingVO() {
	}
	public PagingVO(int total, int currPage, int cntPerPage) {
		setCurrPage(currPage);
		setCntPerPage(cntPerPage);
		setTotal(total);
		calcLastPage(getTotal(), getCntPerPage());
		calcStartEndPage(getCurrPage(), cntPage);
		calcStartEnd(getCurrPage(), getCntPerPage());
	}
	// 제일 마지막 페이지 계산
	public void calcLastPage(int total, int cntPerPage) {
		setLastPage((int) Math.ceil((double)total / (double)cntPerPage));
	}
	// 시작, 끝 페이지 계산
	public void calcStartEndPage(int currPage, int cntPage) {
		setEndPage(((int)Math.ceil((double)currPage / (double)cntPage)) * cntPage);
		if (getLastPage() < getEndPage()) {
			setEndPage(getLastPage());
		}
		setStartPage(getEndPage() - cntPage + 1);
		if (getStartPage() < 1) {
			setStartPage(1);
		}
	}
	// DB 쿼리에서 사용할 start, end값 계산
	public void calcStartEnd(int currPage, int cntPerPage) {
		setEnd(currPage * cntPerPage);
		setStart(getEnd() - cntPerPage + 1);
	}
	
}