# Audio Files for Sermons

Place your sermon audio files (MP3 format) in this folder with the following names:

1. `walking-in-faith.mp3`
2. `power-of-prayer.mp3`
3. `living-with-purpose.mp3`
4. `grace-upon-grace.mp3`

## How to Add New Sermons

1. Add your MP3 file to this folder
2. Update the `sermons` array in `src/components/Sermons.jsx`
3. Add a new sermon object with:
   - `id`: unique number
   - `title`: sermon title
   - `speaker`: speaker name
   - `date`: date of sermon
   - `duration`: length of sermon
   - `scripture`: Bible reference
   - `audioUrl`: path to audio file (e.g., `/audio/your-sermon.mp3`)

## Supported Formats

- MP3 (recommended)
- WAV
- OGG
- M4A
