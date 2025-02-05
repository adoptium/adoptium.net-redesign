import { describe, it, expect, vi, afterEach } from 'vitest';
import { wrapText, generateFeaturedImage } from '../generateFeaturedImage';
import fs from 'fs-extra';
import path from 'path';

describe('wrapText', () => {
  it('should wrap text into multiple lines when exceeding max width', () => {
    // Create a fake canvas context.
    const fillTextMock = vi.fn();
    const fakeCtx = {
      // Fake measureText: each character counts for 10 pixels.
      measureText: (text: string) => ({ width: text.length * 10 }),
      fillText: fillTextMock,
      textAlign: '', // not used by our helper
    } as unknown as import('canvas').CanvasRenderingContext2D;

    const maxWidth = 100; // Allow up to 100 pixels per line
    const lineHeight = 20;
    const x = 50;
    const y = 50;
    const text = "This is a long text that should be wrapped";

    wrapText(fakeCtx, text, x, y, maxWidth, lineHeight);

    // Based on our fake measureText, the helper should break the text into lines.
    // For this specific text and maxWidth, one possible expected split is:
    // 1. "This is a"
    // 2. "long text"
    // 3. "that"
    // 4. "should be"
    // 5. "wrapped"
    // (Depending on spacing, your exact split might vary.)
    const expectedLines = ["This is a", "long text", "that", "should be", "wrapped"];

    // Check that fillText was called the expected number of times
    expect(fillTextMock).toHaveBeenCalledTimes(expectedLines.length);
    expectedLines.forEach((line, index) => {
      expect(fillTextMock).toHaveBeenNthCalledWith(
        index + 1,
        line,
        x,
        y + index * lineHeight
      );
    });
  });
});

describe('generateFeaturedImage', () => {
  // Use a temporary directory for output
  const tempOutputDir = path.join(__dirname, 'temp-test-generated');

  afterEach(async () => {
    // Remove the temporary directory after each test to clean up.
    await fs.remove(tempOutputDir);
  });

  it('should generate an image file', async () => {
    // For testing, you can either ensure that the background file exists at the
    // provided path or you can mock loadImage. For this example, we assume the
    // background image exists in the expected location.
    const title = "Test Title";
    const subtitle = "Test Subtitle";
    const outputPath = path.join(tempOutputDir, 'test.png');

    await generateFeaturedImage(title, subtitle, outputPath);

    // Check that the file was created.
    const fileExists = await fs.pathExists(outputPath);
    expect(fileExists).toBe(true);

    // Optionally, verify the file is not empty.
    const stats = await fs.stat(outputPath);
    expect(stats.size).toBeGreaterThan(0);
  });
});
