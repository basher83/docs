/**
 * Markdown Magic configuration
 * Generates directory trees in documentation
 */

module.exports = {
  transforms: {
    /* Custom transform for directory trees */
    DIRTREE: (content, options = {}) => {
      const { execSync } = require('child_process');

      // Parse options - markdown-magic passes them directly from attributes
      const dir = options.dir || '.';
      const depth = options.depth || '';
      const onlyDirs = options.onlyDirs === 'true';
      const ignore = options.ignore || '.git|node_modules|.DS_Store';

      try {
        // Build command - check for tree availability
        let cmd;
        try {
          // Try to find system tree first
          const treePath = execSync('which tree', { encoding: 'utf8' }).trim();
          if (treePath === '/usr/bin/tree') {
            cmd = '/usr/bin/tree';
          } else {
            cmd = 'tree';
          }
        } catch {
          // Fall back to tree-node-cli
          try {
            execSync('which treee', { stdio: 'ignore' });
            cmd = 'treee';
          } catch {
            throw new Error('No tree command available');
          }
        }

        // Build full command
        let fullCmd = `${cmd} ${dir}`;
        if (depth) fullCmd += ` -L ${depth}`;
        if (onlyDirs) fullCmd += ' -d';
        fullCmd += ` -I '${ignore}'`;
        // Only add charset for system tree, not treee
        if (cmd.includes('/usr/bin/tree')) {
          fullCmd += ' --charset ascii';
        }

        // Execute and capture output
        const output = execSync(fullCmd, { encoding: 'utf8' });

        // Return wrapped in code block
        return '```\n' + output + '```';
      } catch (error) {
        console.error('Tree generation failed:', error.message);
        return '```\n[Tree generation failed]\n```';
      }
    }
  },

  // Glob patterns for files to process
  globbyOptions: {
    gitignore: true
  }
};
