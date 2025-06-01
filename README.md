## Репозиторий содержит стандартные конфигурационные файлы настроек ESLint, Prettier, VSCode, Docker

## Автоматическая установка (рекомендуется)

"scripts": {
"postinstall": "bash -c 'if command -v curl >/dev/null 2>&1; then mkdir -p ./.vscode && curl -L https://raw.githubusercontent.com/your-org/project-configs/main/vscode/settings.json -o ./.vscode/settings.json && curl -L https://raw.githubusercontent.com/your-org/project-configs/main/.gitignore -o ./.gitignore && curl -L https://raw.githubusercontent.com/your-org/project-configs/main/eslint/express/eslint.config.js -o ./eslint.config.js; else echo \"Error: curl required\"; exit 1; fi'"
}

## Ручная установка:

### Для Express.js проекта:

curl -L https://raw.githubusercontent.com/your-org/project-configs/main/eslint/express/eslint.config.js -o ./eslint.config.js

### Настройки VSCode:

mkdir -p .vscode
curl -L https://raw.githubusercontent.com/your-org/project-configs/main/vscode/settings.json -o ./.vscode/settings.json

## Преимущества:

Единый стандарт кода во всех проектах
Автоматическая настройка при установке зависимостей
Сокращение времени на ручную настройку
Легкое обновление конфигов централизованно
