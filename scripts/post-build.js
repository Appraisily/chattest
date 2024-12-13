import { promises as fs } from 'fs';
import path from 'path';

async function moveWidgetFiles() {
  const distPath = path.resolve('dist');
  const assetsPath = path.join(distPath, 'assets');

  try {
    // Find widget files in assets directory
    const files = await fs.readdir(assetsPath);
    const widgetFiles = files.filter(file => file.startsWith('widget-app'));

    // Move each widget file to dist root
    for (const file of widgetFiles) {
      const oldPath = path.join(assetsPath, file);
      const newPath = path.join(distPath, file.replace(/-.+\./, '.'));
      
      await fs.rename(oldPath, newPath);
      console.log(`✨ Moved ${file} to ${newPath}`);
    }

    // Clean up empty directories
    const widgetDir = path.join(distPath, 'widget');
    await fs.rm(widgetDir, { recursive: true, force: true });
    console.log('✨ Cleaned up widget directory');

  } catch (error) {
    console.error('Error during post-build:', error);
    process.exit(1);
  }
}

moveWidgetFiles().catch(console.error);