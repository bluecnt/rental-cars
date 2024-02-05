rem [SGLEE:20230405WED_111100] Created
rem [SGLEE:20230630FRI_145300] Updated

rem call npm i -D webpack webpack-cli webpack-dev-server
rem call npm i -D html-webpack-plugin clean-webpack-plugin
rem call npm i -D ts-loader style-loader css-loader file-loader

call npm i

call npm i -g cross-env
call npm i -g serve
rem Create React App Configuration Override
rem # [craco.config.js] 최소한 비어있는 설정 파일 필요!
rem # module.exports = {
rem #  webpack: {
rem #  },
rem # };

call npm i -D @craco/craco

rem npm i -D @types/navermaps

pause