rem [SGLEE:20230405WED_110700] Created
rem npm i serve
rem [SGLEE:20230630FRI_144900] Port 변수 추가

setlocal

set Port=9900

call npm run build
call explorer "http://bluecnt.iptime.org:"%Port%
call serve build -l %Port%

endlocal

pause