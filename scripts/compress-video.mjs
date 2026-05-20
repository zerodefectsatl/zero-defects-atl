#!/usr/bin/env node
// Compresses public/videos/ferrari-wheel.mp4 to a web-optimized size.
// Requires ffmpeg on PATH. Install: https://ffmpeg.org/download.html
// Run: npm run compress-video

import { execFileSync } from 'node:child_process'
import { existsSync, renameSync, statSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const input = join(root, 'public', 'videos', 'ferrari-wheel.mp4')
const output = join(root, 'public', 'videos', 'ferrari-wheel.compressed.mp4')

function ffmpegAvailable() {
  try {
    execFileSync('ffmpeg', ['-version'], { stdio: 'ignore' })
    return true
  } catch {
    return false
  }
}

if (!ffmpegAvailable()) {
  console.error('\nffmpeg is not installed or not on your PATH.')
  console.error('Install it from https://ffmpeg.org/download.html (or `winget install Gyan.FFmpeg` on Windows), then re-run `npm run compress-video`.\n')
  process.exit(1)
}

if (!existsSync(input)) {
  console.error(`Input not found: ${input}`)
  process.exit(1)
}

const before = statSync(input).size

console.log('Compressing ferrari-wheel.mp4 (this can take a minute)...')
// CRF 28 + scale to max 1280px wide + strip audio (it's a muted background video).
execFileSync('ffmpeg', [
  '-i', input,
  '-vf', "scale='min(1280,iw)':-2",
  '-c:v', 'libx264',
  '-crf', '28',
  '-preset', 'slow',
  '-movflags', '+faststart',
  '-an',
  '-y', output,
], { stdio: 'inherit' })

const after = statSync(output).size
renameSync(output, input)

const mb = (n) => (n / 1024 / 1024).toFixed(1)
console.log(`\nDone. ${mb(before)}MB -> ${mb(after)}MB (saved ${mb(before - after)}MB).`)
console.log('Replaced public/videos/ferrari-wheel.mp4. Review it, then commit.')
