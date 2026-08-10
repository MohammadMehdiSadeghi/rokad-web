$langs = Get-WinUserLanguageList | ForEach-Object { $_.LanguageTag }
Write-Host ("UserLanguages: " + ($langs -join ', '))
$caps = Get-WindowsCapability -Online | Where-Object { $_.Name -like 'Language.OCR*' }
if ($caps) {
  $caps | ForEach-Object { Write-Host ($_.Name + ' state=' + $_.State) }
} else {
  Write-Host 'no OCR capabilities found (admin rights may be needed)'
}