#!/usr/bin/env node

/**
 * Update directory trees in markdown documentation
 * Uses markdown-magic for content injection and tree-node-cli for tree generation
 */

const path = require('path');
const { execSync } = require('child_process');
const markdownMagic = require('markdown-magic');

// Color codes for console output
const colors = {
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  reset: '\x1b[0m'
};

const log = {
  success: (msg) => console.log(`${colors.green}✅ ${msg}${colors.reset}`),
  warning: (msg) => console.log(`${colors.yellow}⚠️  ${msg}${colors.reset}`),
  error: (msg) => console.error(`${colors.red}❌ ${msg}${colors.reset}`),
  info: (msg) => console.log(`ℹ️  ${msg}`)
};

// Configuration for different files
const treeConfigs = {
  'README.md': {
    path: '.',
    depth: 3,
    dirsOnly: true,
    ignore: '.git|node_modules|.DS_Store|.github|.cursor|.vscode|ai_docs|.mise*|scripts'
  },
  'mission-control/core-github-repos.md': {
    path: '.',
    depth: 2,
    dirsOnly: true,
    ignore: '.git|node_modules|.DS_Store|.github|.cursor|.vscode|ai_docs|.mise*'
  }
};

// Custom transform for TREE-START/TREE-END markers
const customTransforms = {
  TREE: (content, options, config) => {
    const filePath = config.originalPath;
    const relativeFile = path.relative(process.cwd(), filePath);
    
    // Get configuration for this file
    const treeConfig = treeConfigs[relativeFile] || {
      path: options.path || '.',
      depth: options.depth || 3,
      dirsOnly: options.dirsOnly !== false,
      ignore: options.ignore || '.git|node_modules|.DS_Store'
    };

    try {
      // Build tree command
      let treeCmd = `tree ${treeConfig.path}`;
      treeCmd += ` -L ${treeConfig.depth}`;
      if (treeConfig.dirsOnly) treeCmd += ' -d';
      treeCmd += ` -I '${treeConfig.ignore}'`;
      treeCmd += ' --charset ascii';

      // Execute tree command
      const treeOutput = execSync(treeCmd, { encoding: 'utf8' });
      
      // Wrap in markdown code block
      return '```plaintext\n' + treeOutput + '```';
    } catch (error) {
      log.error(`Failed to generate tree: ${error.message}`);
      return '```plaintext\n[Tree generation failed]\n```';
    }
  },
  
  // Support for DOCS-TREE markers in core-github-repos.md
  'DOCS-TREE': (content, options, config) => {
    try {
      // Full tree with files for docs repository
      const treeCmd = `tree . -I '.git|node_modules|.DS_Store|.github|.cursor|.vscode|ai_docs|.mise*' --charset ascii`;
      const treeOutput = execSync(treeCmd, { encoding: 'utf8' });
      return '```plaintext\n' + treeOutput + '```';
    } catch (error) {
      log.error(`Failed to generate docs tree: ${error.message}`);
      return '```plaintext\n[Tree generation failed]\n```';
    }
  }
};

// Main function
async function updateTrees() {
  log.info('🌳 Updating documentation trees...\n');

  // Check if tree command is available
  try {
    execSync('which tree', { stdio: 'ignore' });
  } catch {
    // Try to use tree-node-cli as fallback
    try {
      execSync('which treee', { stdio: 'ignore' });
      // Alias treee to tree for our commands
      process.env.PATH = `${__dirname}:${process.env.PATH}`;
      require('fs').symlinkSync(
        require('which').sync('treee'),
        path.join(__dirname, 'tree')
      );
    } catch {
      log.error('tree command not found. Installing tree-node-cli...');
      execSync('npm install -g tree-node-cli', { stdio: 'inherit' });
    }
  }

  // Files to process
  const files = [
    'README.md',
    'mission-control/core-github-repos.md'
  ];

  // Process each file
  for (const file of files) {
    if (!require('fs').existsSync(file)) {
      log.warning(`File ${file} not found, skipping...`);
      continue;
    }

    log.info(`📄 Processing: ${file}`);
    
    const config = {
      transforms: customTransforms,
      globbyOptions: {
        gitignore: true
      }
    };

    try {
      markdownMagic(file, config);
      log.success(`Updated ${file}`);
    } catch (error) {
      log.error(`Failed to update ${file}: ${error.message}`);
    }
  }

  log.success('\n🎉 Tree update complete!');
  log.warning('Note: Don\'t forget to commit the changes if they look good.');
}

// Run if called directly
if (require.main === module) {
  updateTrees().catch(error => {
    log.error(`Script failed: ${error.message}`);
    process.exit(1);
  });
}

module.exports = { updateTrees, customTransforms };