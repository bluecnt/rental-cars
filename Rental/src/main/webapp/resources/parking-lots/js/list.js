const btn1 = document.getElementById('btn1');
const updateBtns = document.querySelectorAll('.updateBtn');
const deleteBtns = document.querySelectorAll('.deleteBtn');
	
	btn1.addEventListener('click', () => {
		var category = document.getElementById("category").value;
        var searchText = document.getElementById("searchText").value;
		var queryString = "category=" + category + "&searchText=" + searchText;
		location.href = "/rental/parking-lots-mgmt?" + queryString;
	});

	function selChange() {
	    var sel = document.getElementById('cntPerPage').value;
	    location.href="/rental/parking-lots-mgmt?currPage=${paging.currPage}&cntPerPage="+sel;
	}
	
	updateBtns.forEach(button => {
	    button.addEventListener('click', () => {
	        const plIdCell = button.parentElement.parentElement.querySelector('td:first-child');
	        const plId = pltIdCell && plIdCell.innerText ? plIdCell.innerText.trim() : null;
	        
	        if (plId) {
	            const updateUrl = "/rental/parking-lots-mgmt/update/" + plId;
	            location.href = updateUrl;
	        } else {
	            console.error("고객 ID를 찾을 수 없습니다.");
	        }
	    });
	});
	
    deleteBtns.forEach(button => {
        button.addEventListener('click', () => {
            const plIdCell = button.parentElement.parentElement.querySelector('td:first-child');
            const plId = plIdCell && plIdCell.innerText ? plIdCell.innerText.trim() : null;
            
            if (plId) {
                if (confirm("정말로 삭제하시겠습니까?")) {
                    const deleteUrl = "/rental/parking-lots-mgmt/delete/" + plId;
                    location.href = deleteUrl;
                }
            } else {
                console.error("고객 ID를 찾을 수 없습니다.");
            }
        });
    });