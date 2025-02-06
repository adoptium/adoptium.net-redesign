import { describe, it, expect, vi, afterEach } from 'vitest';
import { getWrappedLines, drawTitleAndSubtitle, generateFeaturedImage } from '../generateFeaturedImage';
import fs from 'fs-extra';
import path from 'path';

describe('getWrappedLines', () => {
  it('should wrap text into multiple lines when exceeding max width', () => {
    // Create a fake canvas context that simulates measureText.
    const fakeCtx = {
      measureText: (text: string) => ({ width: text.length * 10 }),
    } as unknown as import('canvas').CanvasRenderingContext2D;

    const maxWidth = 100; // 100 pixels maximum
    const text = "This is a long text that should be wrapped";

    // Call getWrappedLines to get an array of wrapped lines.
    const lines = getWrappedLines(fakeCtx, text, maxWidth);

    // Based on our fake measureText (each character = 10px), one expected split is:
    // 1. "This is a"
    // 2. "long text"
    // 3. "that"
    // 4. "should be"
    // 5. "wrapped"
    const expectedLines = ["This is a", "long text", "that", "should be", "wrapped"];
    expect(lines).toEqual(expectedLines);
  });
});

describe('drawTitleAndSubtitle', () => {
  it('should draw title and subtitle with correct dynamic spacing for single-line texts', () => {
    // Create a fake canvas context with spy functions for fillText.
    const fillTextMock = vi.fn();
    const fakeCtx = {
      measureText: (text: string) => ({ width: text.length * 10 }),
      fillText: fillTextMock,
      save: vi.fn(),
      restore: vi.fn(),
      font: '',
    } as unknown as import('canvas').CanvasRenderingContext2D;

    const x = 50;              // center x-coordinate
    const canvasHeight = 200;    // total canvas height for vertical centering
    const maxWidth = 100;
    const titleFont = "bold 60px Nunito, sans-serif";
    const subtitleFont = "normal 40px Nunito, sans-serif";
    const titleLineHeight = 70;   // approximate height for each title line
    const subtitleLineHeight = 50; // approximate height for each subtitle line
    const baseGap = 20;
    const gapExtraPerLine = 10;

    // Use simple one-word texts so that each wraps into a single line.
    const title = "Hello";
    const subtitle = "World";

    // Expected calculations:
    // - getWrappedLines("Hello") returns ["Hello"] → titleBlockHeight = 1 * 70 = 70.
    // - getWrappedLines("World") returns ["World"] → subtitleBlockHeight = 1 * 50 = 50.
    // - Gap = baseGap + (1 - 1) * gapExtraPerLine = 20.
    // - Total block height = 70 + 20 + 50 = 140.
    // - startY = (canvasHeight - totalBlockHeight) / 2 = (200 - 140) / 2 = 30.
    // Then:
    // Title is drawn at: 30 + (70 / 2) = 65.
    // Subtitle is drawn at: 30 + 70 + 20 + (50 / 2) = 145.

    drawTitleAndSubtitle(
      fakeCtx,
      title,
      subtitle,
      x,
      canvasHeight,
      maxWidth,
      titleFont,
      subtitleFont,
      titleLineHeight,
      subtitleLineHeight,
      baseGap,
      gapExtraPerLine
    );

    expect(fillTextMock).toHaveBeenCalledTimes(2);
    expect(fillTextMock).toHaveBeenNthCalledWith(1, "Hello", x, 65);
    expect(fillTextMock).toHaveBeenNthCalledWith(2, "World", x, 145);
  });
});

describe('generateFeaturedImage', () => {
  // Use a temporary directory for output during tests.
  const tempOutputDir = path.join(__dirname, 'temp-test-generated');

  afterEach(async () => {
    // Clean up the temporary directory after each test.
    await fs.remove(tempOutputDir);
  });

  it('should generate an image file', async () => {
    const title = "Test Title";
    const subtitle = "Test Subtitle";
    const outputPath = path.join(tempOutputDir, 'test.png');

    await generateFeaturedImage(title, subtitle, outputPath);

    // Verify that the file was created.
    const fileExists = await fs.pathExists(outputPath);
    expect(fileExists).toBe(true);

    // Optionally, check that the file is not empty.
    const stats = await fs.stat(outputPath);
    expect(stats.size).toBeGreaterThan(0);
  });
});
