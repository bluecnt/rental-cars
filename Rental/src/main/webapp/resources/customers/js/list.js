const btn1 = document.getElementById('btn1');
const updateBtns = document.querySelectorAll('.updateBtn');
const deleteBtns = document.querySelectorAll('.deleteBtn');
	
	btn1.addEventListener('click', () => {
		var category = document.getElementById("category").value;
        var searchText = document.getElementById("searchText").value;
		var queryString = "category=" + category + "&searchText=" + searchText;
		location.href = "/rental/customers-mgmt?" + queryString;
	});

	function selChange() {
	    var sel = document.getElementById('cntPerPage').value;
	    location.href="/rental/customers-mgmt?currPage=${paging.currPage}&cntPerPage="+sel;
	}
	
	updateBtns.forEach(button => {
	    button.addEventListener('click', () => {
	        const custIdCell = button.parentElement.parentElement.querySelector('td:first-child');
	        const custId = custIdCell && custIdCell.innerText ? custIdCell.innerText.trim() : null;
	        
	        if (custId) {
	            const updateUrl = "/rental/customers-mgmt/update/" + custId;
	            location.href = updateUrl;
	        } else {
	            console.error("고객 ID를 찾을 수 없습니다.");
	        }
	    });
	});
	
    deleteBtns.forEach(button => {
        button.addEventListener('click', () => {
            const custIdCell = button.parentElement.parentElement.querySelector('td:first-child');
            const custId = custIdCell && custIdCell.innerText ? custIdCell.innerText.trim() : null;
            
            if (custId) {
                if (confirm("정말로 삭제하시겠습니까?")) {
                    const deleteUrl = "/rental/customers-mgmt/delete/" + custId;
                    location.href = deleteUrl;
                }
            } else {
                console.error("고객 ID를 찾을 수 없습니다.");
            }
        });
    });