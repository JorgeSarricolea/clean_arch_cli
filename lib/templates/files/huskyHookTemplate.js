export const huskyPreCommitTemplate = `#!/bin/sh
echo "Running Linting..."
pnpm run lint || { echo "Linting failed. Fix the issues and try again."; exit 1; }

echo "All checks passed. Proceeding with commit."
`;

export const huskyPrePushTemplate = `#!/bin/sh

echo "Running Linting..."
pnpm run lint || { echo "Linting failed. Fix the issues and try again."; exit 1; }

echo "Running Tests before push..."
pnpm run test || { echo "Tests failed. Push aborted."; exit 1; }

echo "All tests and checks passed. Proceeding with push."
`;

export const huskyCommitMsgTemplate = `#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx --no-install commitlint --edit "$1"
`;
