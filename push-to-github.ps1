# Script para hacer push al repositorio de GitHub
# Ejecuta este script desde PowerShell en el directorio del proyecto

Write-Host "Verificando estado del repositorio..." -ForegroundColor Cyan

# Verificar si git está disponible
$gitPath = Get-Command git -ErrorAction SilentlyContinue
if (-not $gitPath) {
    Write-Host "Git no se encuentra en el PATH." -ForegroundColor Yellow
    Write-Host "Por favor, asegúrate de tener Git instalado o agrega Git al PATH." -ForegroundColor Yellow
    Write-Host "Ubicaciones comunes:" -ForegroundColor Yellow
    Write-Host "  - C:\Program Files\Git\cmd\git.exe" -ForegroundColor Gray
    Write-Host "  - C:\Program Files (x86)\Git\cmd\git.exe" -ForegroundColor Gray
    exit 1
}

Write-Host "Git encontrado: $($gitPath.Source)" -ForegroundColor Green
Write-Host ""

# Verificar el remoto
Write-Host "Verificando remoto configurado..." -ForegroundColor Cyan
git remote -v
Write-Host ""

# Verificar estado
Write-Host "Estado del repositorio:" -ForegroundColor Cyan
git status
Write-Host ""

# Verificar rama actual
$currentBranch = git branch --show-current
Write-Host "Rama actual: $currentBranch" -ForegroundColor Cyan
Write-Host ""

# Preguntar si quiere continuar
$response = Read-Host "¿Deseas hacer push a origin/$currentBranch? (S/N)"
if ($response -ne "S" -and $response -ne "s" -and $response -ne "Y" -and $response -ne "y") {
    Write-Host "Operación cancelada." -ForegroundColor Yellow
    exit 0
}

Write-Host ""
Write-Host "Haciendo push al repositorio..." -ForegroundColor Cyan
git push -u origin $currentBranch

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "¡Push completado exitosamente!" -ForegroundColor Green
    Write-Host "Tu código está ahora en: https://github.com/yairhdezhz-ops/xv-Dania.git" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "Error al hacer push. Posibles causas:" -ForegroundColor Red
    Write-Host "  - No tienes permisos en el repositorio" -ForegroundColor Yellow
    Write-Host "  - Necesitas autenticarte (usuario/contraseña o token)" -ForegroundColor Yellow
    Write-Host "  - El repositorio remoto tiene cambios que no tienes localmente" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Si es la primera vez, puedes intentar:" -ForegroundColor Cyan
    Write-Host "  git push -u origin $currentBranch --force" -ForegroundColor Gray
}

