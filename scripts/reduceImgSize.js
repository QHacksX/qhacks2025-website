const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function optimizeImagesInFolder(folderPath, maxWidth = 800, maxHeight = 800, quality = 50) {
    if (!fs.existsSync(folderPath)) {
        console.error(`Error: The folder ${folderPath} does not exist.`);
        return;
    }

    const files = fs.readdirSync(folderPath);

    for (const fileName of files) {
        if (fileName.toLowerCase().endsWith('.png')) {
            const filePath = path.join(folderPath, fileName);
            try {
                // Read image metadata to calculate resizing dimensions
                const metadata = await sharp(filePath).metadata();

                // Calculate new dimensions while maintaining aspect ratio
                const resizeOptions = {};
                if (metadata.width > maxWidth || metadata.height > maxHeight) {
                    if (metadata.width / maxWidth > metadata.height / maxHeight) {
                        resizeOptions.width = maxWidth;
                    } else {
                        resizeOptions.height = maxHeight;
                    }
                }

                // Optimize and save the image, replacing the original file
                await sharp(filePath)
                    .resize(resizeOptions)
                    .png({ quality })
                    .toFile(filePath + '.tmp'); // Save to a temporary file

                fs.renameSync(filePath + '.tmp', filePath); // Replace original with optimized version
                console.log(`Optimized: ${fileName}`);
            } catch (error) {
                console.error(`Failed to optimize ${fileName}:`, error);
            }
        }
    }
}

// Path to the folder containing PNG images
const folderPath = "../public/qhacks-team";

// Optimize images
optimizeImagesInFolder(folderPath);
