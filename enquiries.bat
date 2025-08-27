@echo off
REM === MySQL Backup Script ===
set TIMESTAMP=%DATE:~-4%%DATE:~3,2%%DATE:~0,2%_%TIME:~0,2%%TIME:~3,2%
set TIMESTAMP=%TIMESTAMP: =0%

"C:\Program Files\MySQL\MySQL Server 8.0\bin\mysqldump.exe" -u root -pEngl@nd_0401? infinityrg enquiries > "C:\Projects\infinity-rg-site-2\app\api\CustomerDetails\enquiries_%TIMESTAMP%.sql"

echo Backup completed! File saved as enquiries_%TIMESTAMP%.sql
pause
