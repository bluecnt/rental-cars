
function selChange() {
    var sel = document.getElementById('cntPerPage').value;
    location.href="/rental/customers-mgmt?currPage=${paging.currPage}&cntPerPage="+sel;
}
