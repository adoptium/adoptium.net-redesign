import { createCanvas, loadImage, CanvasRenderingContext2D } from 'canvas';
import fs from 'fs-extra';
import path from 'path';

/**
 * Generates a featured image by overlaying title and subtitle on a predefined background.
 *
 * @param title - The blog post title.
 * @param subtitle - The blog post subtitle.
 * @param outputPath - The output file path (e.g., /public/generated-featured/slug.png).
 */
export async function generateFeaturedImage(
    title: string,
    subtitle: string,
    outputPath: string
): Promise<void> {
    if (fs.existsSync(outputPath)) {
        // Skip the generation if the file already exists.
        return;
    }

    const width = 1200;
    const height = 628;
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    // Use your provided background path:
    const backgroundPath = path.resolve(
        __dirname,
        '../',
        '../',
        'static',
        'images',
        'news',
        'blog-background.png'
    );
    const background = await loadImage(backgroundPath);
    ctx.drawImage(background, 0, 0, width, height);

    // Set common text properties
    ctx.textAlign = 'center';
    ctx.fillStyle = '#ffffff';

    const maxTextWidth = width * 0.8;

    // Define fonts and line heights:
    const titleFont = 'bold 60px Nunito, sans-serif';
    const subtitleFont = 'normal 40px Nunito, sans-serif';
    const titleLineHeight = 70;   // approximate height for each title line
    const subtitleLineHeight = 50; // approximate height for each subtitle line

    // Define the gap settings:
    // baseGap is the gap when the title is a single line;
    // gapExtraPerLine is added for each extra title line.
    const baseGap = 20;
    const gapExtraPerLine = 10;

    // Draw both title and subtitle together with dynamic spacing:
    drawTitleAndSubtitle(
        ctx,
        title,
        subtitle,
        width / 2, // center x
        height,    // canvas height (for vertical centering)
        maxTextWidth,
        titleFont,
        subtitleFont,
        titleLineHeight,
        subtitleLineHeight,
        baseGap,
        gapExtraPerLine
    );

    // Ensure the output directory exists and write the file
    await fs.ensureDir(path.dirname(outputPath));
    const buffer = canvas.toBuffer('image/png');
    await fs.writeFile(outputPath, buffer);
}

/**
 * Splits the text into an array of wrapped lines given a maximum width.
 *
 * @param ctx - The canvas rendering context.
 * @param text - The text to wrap.
 * @param maxWidth - The maximum allowed width for a line.
 * @returns An array of wrapped lines.
 */
export function getWrappedLines(
    ctx: CanvasRenderingContext2D,
    text: string,
    maxWidth: number
): string[] {
    const words = text.split(' ');
    let line = '';
    const lines: string[] = [];

    for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + ' ';
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && n > 0) {
            lines.push(line.trim());
            line = words[n] + ' ';
        } else {
            line = testLine;
        }
    }
    lines.push(line.trim());
    return lines;
}

/**
 * Draws the title and subtitle on the canvas with dynamic spacing between them.
 *
 * The gap between the title and subtitle is computed as:
 *   gap = baseGap + (number_of_title_lines - 1) * gapExtraPerLine
 *
 * The combined text block (title block + gap + subtitle block) is then centered vertically.
 *
 * @param ctx - The canvas rendering context.
 * @param title - The title text.
 * @param subtitle - The subtitle text.
 * @param x - The x-coordinate for centered text.
 * @param canvasHeight - The total height of the canvas.
 * @param maxWidth - The maximum allowed width for the text.
 * @param titleFont - The font string for the title.
 * @param subtitleFont - The font string for the subtitle.
 * @param titleLineHeight - The line height for the title.
 * @param subtitleLineHeight - The line height for the subtitle.
 * @param baseGap - The base gap between title and subtitle for a single-line title.
 * @param gapExtraPerLine - Additional gap for each extra title line.
 */
export function drawTitleAndSubtitle(
    ctx: CanvasRenderingContext2D,
    title: string,
    subtitle: string,
    x: number,
    canvasHeight: number,
    maxWidth: number,
    titleFont: string,
    subtitleFont: string,
    titleLineHeight: number,
    subtitleLineHeight: number,
    baseGap: number,
    gapExtraPerLine: number
): void {
    // Get wrapped title lines
    ctx.save();
    ctx.font = titleFont;
    const titleLines = getWrappedLines(ctx, title, maxWidth);
    ctx.restore();

    // Get wrapped subtitle lines
    ctx.save();
    ctx.font = subtitleFont;
    const subtitleLines = getWrappedLines(ctx, subtitle, maxWidth);
    ctx.restore();

    // Calculate the dynamic gap: larger for multi-line titles.
    const gap = baseGap + (titleLines.length - 1) * gapExtraPerLine;

    const titleBlockHeight = titleLines.length * titleLineHeight;
    const subtitleBlockHeight = subtitleLines.length * subtitleLineHeight;
    const totalBlockHeight = titleBlockHeight + gap + subtitleBlockHeight;

    // Compute the starting y so that the entire block is vertically centered.
    const startY = (canvasHeight - totalBlockHeight) / 2;

    // Draw title lines
    ctx.save();
    ctx.font = titleFont;
    titleLines.forEach((line, index) => {
        // Adding half the line height centers each line vertically.
        ctx.fillText(line, x, startY + index * titleLineHeight + titleLineHeight / 2);
    });
    ctx.restore();

    // Draw subtitle lines below the title block plus the gap.
    ctx.save();
    ctx.font = subtitleFont;
    subtitleLines.forEach((line, index) => {
        ctx.fillText(
            line,
            x,
            startY + titleBlockHeight + gap + index * subtitleLineHeight + subtitleLineHeight / 2
        );
    });
    ctx.restore();
}
