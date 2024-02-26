const btn1 = document.getElementById('btn1');
const updateBtns = document.querySelectorAll('.updateBtn');
const deleteBtns = document.querySelectorAll('.deleteBtn');
	
	btn1.addEventListener('click', () => {
		var category = document.getElementById("category").value;
        var searchText = document.getElementById("searchText").value;
		var queryString = "category=" + category + "&searchText=" + searchText;
		location.href = "/rental/vehicles-mgmt?" + queryString;
	});
	
	function selChange() {
	    var sel = document.getElementById('cntPerPage').value;
		var currPage = (new URLSearchParams(window.location.search)).get('currPage');
	    location.href=`/rental/vehicles-mgmt?currPage=${currPage}&cntPerPage=${sel}`;
	}
	
	updateBtns.forEach(button => {
	    button.addEventListener('click', () => {
	        const vehicleIdCell = button.parentElement.parentElement.querySelector('td:first-child');
	        const vehicleId = vehicleIdCell && vehicleIdCell.innerText ? vehicleIdCell.innerText.trim() : null;
	        
	        if (vehicleId) {
	            const updateUrl = "/rental/vehicles-mgmt/update/" + vehicleId;
	            location.href = updateUrl;
	        } else {
	            console.error("차량 ID를 찾을 수 없습니다.");
	        }
	    });
	});
	

    deleteBtns.forEach(button => {
        button.addEventListener('click', () => {
            const vehicleIdCell = button.parentElement.parentElement.querySelector('td:first-child');
            const vehicleId = vehicleIdCell && vehicleIdCell.innerText ? vehicleIdCell.innerText.trim() : null;
            
            if (vehicleId) {
                if (confirm("정말로 삭제하시겠습니까?")) {
                    const deleteUrl = "/rental/vehicles-mgmt/delete/" + vehicleId;
                    location.href = deleteUrl;
                }
            } else {
                console.error("차량 ID를 찾을 수 없습니다.");
            }
        });
    });