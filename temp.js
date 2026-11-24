const gitCheatsheet = `

╔══════════════════════════════════════╗
            GIT CHEAT SHEET
╚══════════════════════════════════════╝

🟢 1. SETUP & CONFIGURATION
────────────────────────────────────────
git --version                         // Git version
git init                              // Initialize repository
git init --bare                       // Create bare repository
git config --global user.name "Name"  // Set username
git config --global user.email "email" // Set email
git config --list                     // Show all config
git config --list --show-origin       // Show config source
git config --global --list            // Global config
git config --local --list             // Local config

Config levels: system < global < local
Higher level overrides lower level.


🔵 2. STATUS & COMMITS
────────────────────────────────────────
git status                            // Check working tree
git add filename                      // Stage a file
git add .                             // Stage all changes
git commit -m "message"               // Create commit
git commit --amend -m "new message"   // Change latest message
git commit --amend --no-edit          // Amend without changing message

git restore file.js                   // Discard unstaged changes
git restore .                         // Discard all unstaged tracked changes
git restore --staged file.js          // Unstage a file
git reset --soft HEAD~1               // Undo commit, keep staged changes
git reset HEAD~1                      // Mixed reset, keep files but unstage
git reset --hard HEAD~1               // Undo commit and discard tracked changes
git revert HEAD                       // Reverse commit with a new commit

⚠️ reset --hard can discard uncommitted tracked changes.


🟣 3. HISTORY & DIFFERENCES
────────────────────────────────────────
git log                               // Full history
git log --oneline                     // Compact history
git log --oneline --graph --all       // Visual branch history
git log -p                            // History with code changes
git log -1                            // Latest commit
git show                              // Latest commit details
git show <hash>                       // Specific commit details
git show --stat                       // Changed file summary
git diff                              // Working tree vs staging
git diff --staged                     // Staging vs latest commit
git blame file.js                     // Who changed each line
git reflog                            // Local HEAD/reference history
git log --author="Name"               // Filter by author
git log --grep="keyword"              // Search commit messages
git log -- file.js                    // File history


🟡 4. BRANCHES
────────────────────────────────────────
git branch                            // List local branches
git branch -a                         // List all branches
git branch -v                         // Branches + latest commit
git branch -vv                        // Also show tracking branches
git branch new-branch                 // Create branch
git switch main                       // Switch branch
git switch -c new-branch              // Create and switch
git branch -m new-name                // Rename current branch
git branch -d branch-name             // Delete merged branch
git branch -D branch-name             // Force delete branch


🟠 5. MERGE & REBASE
────────────────────────────────────────
git merge branch-name                 // Merge into current branch
git merge --no-ff branch-name          // Force merge commit
git merge --abort                     // Cancel merge

git rebase main                       // Rebase onto main
git rebase -i HEAD~3                  // Interactive rebase last 3 commits
git rebase --continue                 // Continue after resolving conflicts
git rebase --abort                    // Cancel rebase
git rebase --skip                     // Skip current commit

Interactive rebase:
pick    = Keep commit
reword  = Change commit message
edit    = Pause to modify commit
squash  = Combine commits + edit message
fixup   = Combine commits + discard message
drop    = Remove commit

MERGE = Preserves original history; may create merge commit.
REBASE = Replays commits; changes hashes; linear history.


🔴 6. GITIGNORE & FILE REMOVAL
────────────────────────────────────────
.gitignore examples:
node_modules/       // Ignore directory
*.log               // Ignore all log files
.env                // Ignore specific file
/temp.txt           // Ignore root-level file
!important.log      // Do not ignore this file

git rm file.js                 // Delete tracked file + stage deletion
git rm --cached file.js        // Stop tracking, keep local file
git rm -f file.js              // Force removal

.gitignore does not affect files already tracked.


🌐 7. REMOTE REPOSITORIES
────────────────────────────────────────
git clone <url>                        // Clone repository
git remote -v                          // List remote URLs
git remote add origin <url>            // Add remote
git remote remove origin               // Remove remote
git remote rename old new              // Rename remote
git remote set-url origin <url>        // Change remote URL
git fetch origin                       // Download updates only
git pull origin main                   // Fetch + integrate
git pull --rebase origin main          // Pull using rebase
git push origin main                   // Push branch
git push -u origin main                // Push + set upstream
git push                               // Push to upstream
git push origin --tags                 // Push all tags

origin = Common default remote name.
-u = Set upstream tracking branch.


🏷️ 8. TAGS
────────────────────────────────────────
git tag                                // List tags
git tag v1.0.0                         // Lightweight tag
git tag -a v2.0.0 -m "Version 2"       // Annotated tag
git tag v1.0.0 <hash>                  // Tag specific commit
git show v2.0.0                        // Show tag details
git tag -d v1.0.0                      // Delete local tag
git push origin v1.0.0                 // Push one tag
git push origin --tags                 // Push all tags
git switch --detach v1.0.0             // Checkout tag
git switch -c hotfix v1.0.0            // Create branch from tag

Lightweight = Simple commit reference.
Annotated = Tagger, date and message.


📦 9. STASH
────────────────────────────────────────
git stash                              // Save tracked changes
git stash push -m "message"            // Save with description
git stash push -u -m "message"         // Include untracked files
git stash list                         // List stashes
git stash show -p 'stash@{0}'          // Inspect stash
git stash apply                        // Restore, keep stash
git stash pop                          // Restore + remove if successful
git stash drop 'stash@{0}'             // Delete one stash
git stash clear                        // Delete all stashes


🧭 10. HEAD & SQUASH
────────────────────────────────────────
git rev-parse HEAD                     // Current commit hash
git symbolic-ref HEAD                  // Current branch reference
git switch --detach <commit>           // Detached HEAD
git rebase -i HEAD~3                   // Interactive rebase / squash

HEAD = Points to current branch or commit.
Detached HEAD = HEAD points directly to a commit.
Squash = Combine multiple commits into one.


🪝 11. GIT HOOKS
────────────────────────────────────────
Hooks = Scripts automatically executed during Git events.

CLIENT-SIDE (.git/hooks/):
pre-commit          // Before commit
prepare-commit-msg  // Before commit message editor
commit-msg          // Validate commit message
post-commit         // After commit
pre-push            // Before push

SERVER-SIDE (bare-repo.git/hooks/):
pre-receive         // Before accepting push; can reject
update              // Runs for each updated reference
post-receive        // After successful push; e.g. deployment

Example hook:
#!/bin/sh
echo "Someone is pushing code!"
exit 0

exit 0 = Success / allow.
exit 1 = Failure / reject.

Client hooks = Run on developer machine.
Server hooks = Run on Git server.


⚡ 12. GIT ALIASES
────────────────────────────────────────
git config --global alias.st status       // Create shortcut
git config --global alias.co checkout     // Create shortcut
git config --global alias.br branch       // Create shortcut
git config --global alias.last "log -1"   // Latest commit shortcut

git st                                    // Same as git status
git co main                               // Same as git checkout main
git br                                    // Same as git branch
git config --get-regexp alias             // List aliases
git config --global --unset alias.st      // Remove alias

Aliases still require the 'git' command.


🖥️ 13. BARE REPOSITORY
────────────────────────────────────────
git init --bare                          // Create server repository
git remote add origin <path>             // Connect local repo
git push -u origin main                  // Push + set upstream

Normal repo = Working files + Git history.
Bare repo   = Git data only; commonly used as remote server.

════════════════════════════════════════
              END OF CHEAT SHEET
════════════════════════════════════════
`;

console.log(gitCheatsheet);