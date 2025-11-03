#!/usr/bin/env bash
# ==========================================
# 🧠 Fluxo Git automatizado para Commands e Events do Bot Discord
# Autor: ChatGPT (Fluxo Profissional)
# ==========================================

# Exibe mensagem de uso
show_help() {
  echo "Uso: ./scripts/git-flow.sh [comando] [nome]"
  echo ""
  echo "Comandos disponíveis:"
  echo "  new-command <nome>    → Cria branch para um novo comando"
  echo "  new-event <nome>      → Cria branch para um novo evento"
  echo "  commit                → Adiciona e commita as alterações"
  echo "  merge <branch>        → Faz merge da branch especificada na main"
  echo ""
  echo "Exemplo:"
  echo "  ./scripts/git-flow.sh new-command beijo"
  echo "  ./scripts/git-flow.sh commit"
  echo "  ./scripts/git-flow.sh merge feature/command-beijo"
  exit 1
}

# Nenhum argumento → mostra ajuda
if [ $# -lt 1 ]; then
  show_help
fi

COMMAND=$1
NAME=$2

# Função para criar nova branch de comando
new_command() {
  BRANCH="feature/command-$NAME"
  echo "🚀 Criando nova branch: $BRANCH"
  git checkout -b "$BRANCH"
  echo "✅ Branch criada com sucesso!"
}

# Função para criar nova branch de evento
new_event() {
  BRANCH="feature/event-$NAME"
  echo "🚀 Criando nova branch: $BRANCH"
  git checkout -b "$BRANCH"
  echo "✅ Branch criada com sucesso!"
}

# Função para commit automático
commit_changes() {
  echo "📦 Adicionando alterações..."
  git add .

  echo ""
  echo "📝 Informe o tipo do commit (feat, fix, chore, docs, refactor, style, test):"
  read TYPE
  echo "📍 Informe o escopo (commands, events, bot, etc):"
  read SCOPE
  echo "🗒️  Informe a descrição breve da mudança:"
  read DESC

  MESSAGE="$TYPE($SCOPE): $DESC"
  echo ""
  echo "✅ Commitando com mensagem: $MESSAGE"
  git commit -m "$MESSAGE"

  CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
  echo "🚀 Fazendo push da branch $CURRENT_BRANCH"
  git push -u origin "$CURRENT_BRANCH"
}

# Função para merge na main
merge_branch() {
  TARGET_BRANCH=$1
  if [ -z "$TARGET_BRANCH" ]; then
    echo "❌ Informe o nome da branch para mergear (ex: feature/command-beijo)"
    exit 1
  fi

  echo "🔄 Voltando para a develop..."
  git checkout develop
  git pull origin develop

  echo "🔀 Fazendo merge da branch $TARGET_BRANCH..."
  git merge "$TARGET_BRANCH"

  echo "🚀 Subindo alterações para o GitHub..."
  git push origin develop

  echo "✅ Merge finalizado com sucesso!"
}

# Escolher ação
case $COMMAND in
  new-command)
    new_command
    ;;
  new-event)
    new_event
    ;;
  commit)
    commit_changes
    ;;
  merge)
    merge_branch "$NAME"
    ;;
  *)
    show_help
    ;;
esac
