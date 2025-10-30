import { Song, PlaylistData } from '../lib/supabase';

const moodToGenreMapping: Record<string, { genres: string[]; vibe: string }> = {
  'crushing deadlines': {
    genres: ['electronic', 'focus', 'rock'],
    vibe: 'high-energy productivity mode activated'
  },
  'existential dread': {
    genres: ['indie', 'alternative', 'melancholic'],
    vibe: 'contemplative spiral soundtrack'
  },
  'dancing in the rain': {
    genres: ['pop', 'indie-pop', 'upbeat'],
    vibe: 'carefree main character energy'
  },
  'heartbreak': {
    genres: ['rnb', 'soul', 'sad'],
    vibe: 'crying in the shower playlist'
  },
  'unstoppable': {
    genres: ['hip-hop', 'motivational', 'rock'],
    vibe: 'main character walking through hallways'
  },
  'cozy vibes': {
    genres: ['lo-fi', 'chill', 'acoustic'],
    vibe: 'wrapped in a blanket with tea'
  },
  'party mode': {
    genres: ['pop', 'dance', 'electronic'],
    vibe: 'lets get this party started'
  },
  'late night thoughts': {
    genres: ['indie', 'bedroom-pop', 'chill'],
    vibe: '3am overthinking session'
  },
  'workout': {
    genres: ['edm', 'hip-hop', 'rock'],
    vibe: 'beast mode unlocked'
  },
  'studying': {
    genres: ['lo-fi', 'classical', 'ambient'],
    vibe: 'academic weapon status'
  }
};

const songDatabase: Record<string, Song[]> = {
  'electronic': [
    { title: 'Strobe', artist: 'deadmau5', youtubeId: 'tKi9Z-f6qX4', explanation: 'A 10-minute journey into pure electronic bliss' },
    { title: 'Midnight City', artist: 'M83', youtubeId: 'dX3k_QDnzHE', explanation: 'Nostalgic synths that transport you' },
    { title: 'Sandstorm', artist: 'Darude', youtubeId: 'y6120QOlsfU', explanation: 'The ultimate electronic anthem' },
    { title: 'Animals', artist: 'Martin Garrix', youtubeId: 'gCYcHz2k5x0', explanation: 'Drop that never gets old' },
    { title: 'Clarity', artist: 'Zedd ft. Foxes', youtubeId: 'IxxstCcJlsc', explanation: 'Beautiful emotional electronic' },
    { title: 'Wake Me Up', artist: 'Avicii', youtubeId: 'IcrbM1l_BoI', explanation: 'RIP legend, forever in our hearts' },
    { title: 'Titanium', artist: 'David Guetta ft. Sia', youtubeId: 'JRfuAukYTKg', explanation: 'Bulletproof vocals and beats' },
    { title: 'Levels', artist: 'Avicii', youtubeId: '_ovdm2yX4MA', explanation: 'The song that defined an era' },
  ],
  'indie': [
    { title: 'The Less I Know The Better', artist: 'Tame Impala', youtubeId: 'sBzrzS1Ag_g', explanation: 'Psychedelic indie perfection' },
    { title: 'Apocalypse', artist: 'Cigarettes After Sex', youtubeId: 'sElE_BfQ67s', explanation: 'Dreamy and ethereal vibes' },
    { title: 'Feels Like We Only Go Backwards', artist: 'Tame Impala', youtubeId: 'wycjnCCgUes', explanation: 'Looping into introspection' },
    { title: 'Electric Feel', artist: 'MGMT', youtubeId: 'MmZexg8sxyk', explanation: 'Groovy psychedelic energy' },
    { title: 'Young Folks', artist: 'Peter Bjorn and John', youtubeId: 'OIRE6iw-ws4', explanation: 'That whistle is iconic' },
    { title: 'Pumped Up Kicks', artist: 'Foster the People', youtubeId: 'SDTZ7iX4vTQ', explanation: 'Catchy with deeper meaning' },
    { title: 'Mr. Brightside', artist: 'The Killers', youtubeId: 'gGdGFtwCNBE', explanation: 'Everyone screams every word' },
    { title: 'Take Me Out', artist: 'Franz Ferdinand', youtubeId: 'GhCXAiNz9Jo', explanation: 'That guitar riff though' },
  ],
  'pop': [
    { title: 'Levitating', artist: 'Dua Lipa', youtubeId: 'TUVcZfQe-Kw', explanation: 'Disco energy for days' },
    { title: 'Blinding Lights', artist: 'The Weeknd', youtubeId: 'fHI8X4OXluQ', explanation: '80s synth-pop revival' },
    { title: 'Shake It Off', artist: 'Taylor Swift', youtubeId: 'nfWlot6h_JM', explanation: 'Haters gonna hate hate hate' },
    { title: 'Uptown Funk', artist: 'Mark Ronson ft. Bruno Mars', youtubeId: 'OPf0YbXqDm0', explanation: 'Funk that makes you move' },
    { title: 'Bad Guy', artist: 'Billie Eilish', youtubeId: 'DyDfgMOUjCI', explanation: 'Duh, obviously iconic' },
    { title: 'Starboy', artist: 'The Weeknd ft. Daft Punk', youtubeId: 'eyU3bRy2x44', explanation: 'Smooth collab perfection' },
    { title: 'Moves Like Jagger', artist: 'Maroon 5', youtubeId: 'iEPTlhBmwRg', explanation: 'Mick Jagger approved' },
    { title: 'Can\'t Stop the Feeling', artist: 'Justin Timberlake', youtubeId: 'ru0K8uYEZWw', explanation: 'Pure joy in song form' },
  ],
  'lo-fi': [
    { title: 'Lofi Hip Hop Radio', artist: 'ChilledCow', youtubeId: 'jfKfPfyJRdk', explanation: 'The studying legend never stops' },
    { title: 'Coffee', artist: 'beabadoobee', youtubeId: 'MYnGO3hV4b4', explanation: 'Soft and comforting indie' },
    { title: 'Sunset Lover', artist: 'Petit Biscuit', youtubeId: 'wuCK-oiE3rM', explanation: 'Electronic warmth' },
    { title: 'We\'ll Meet Again', artist: 'TheFatRat', youtubeId: 'sVx1mJDeUjY', explanation: 'Emotional lo-fi journey' },
    { title: 'Falling', artist: 'Trevor Daniel', youtubeId: 'KlJd_bI7DVo', explanation: 'Chill heartbreak vibes' },
    { title: 'Lovely', artist: 'Billie Eilish & Khalid', youtubeId: 'V1Pl8CzNzCw', explanation: 'Hauntingly beautiful' },
  ],
  'hip-hop': [
    { title: 'HUMBLE.', artist: 'Kendrick Lamar', youtubeId: 'tvTRZJ-4EyI', explanation: 'Sit down and feel yourself' },
    { title: 'Sicko Mode', artist: 'Travis Scott', youtubeId: '6ONRf7h3Mdk', explanation: 'Three songs in one masterpiece' },
    { title: 'God\'s Plan', artist: 'Drake', youtubeId: 'xpVfcZ0ZcFM', explanation: 'Drake doing Drake things' },
    { title: 'Old Town Road', artist: 'Lil Nas X', youtubeId: 'r7qovpFAGrQ', explanation: 'Country trap phenomenon' },
    { title: 'Lose Yourself', artist: 'Eminem', youtubeId: '_Yhyp-_hX2s', explanation: 'Mom\'s spaghetti classic' },
    { title: 'Stronger', artist: 'Kanye West', youtubeId: 'PsO6ZnUZI0g', explanation: 'Daft Punk meets Ye' },
    { title: 'Power', artist: 'Kanye West', youtubeId: 'L53gjP-TtGE', explanation: 'No one man should have all that power' },
    { title: 'In Da Club', artist: '50 Cent', youtubeId: '5qm8PH4xAss', explanation: 'Go shorty, it\'s your birthday' },
  ],
  'rnb': [
    { title: 'Ivy', artist: 'Frank Ocean', youtubeId: 'AE005nZeF-A', explanation: 'Pain that heals your soul' },
    { title: 'Boo\'d Up', artist: 'Ella Mai', youtubeId: '6YNZlXfW6Ho', explanation: 'Love songs for the soul' },
    { title: 'Redbone', artist: 'Childish Gambino', youtubeId: '9i8KNvwFmh8', explanation: 'Stay woke forever' },
    { title: 'Earned It', artist: 'The Weeknd', youtubeId: 'waU75jdUnYw', explanation: 'Fifty Shades smooth' },
    { title: 'Say So', artist: 'Doja Cat', youtubeId: 'pok8H_KF1FA', explanation: 'TikTok made it legendary' },
    { title: 'Thinkin Bout You', artist: 'Frank Ocean', youtubeId: 'XXujszwKz6s', explanation: 'Tornado flew around my room...' },
  ],
  'alternative': [
    { title: 'Creep', artist: 'Radiohead', youtubeId: 'XFkzRNyygfk', explanation: 'Outsider anthem forever' },
    { title: 'Smells Like Teen Spirit', artist: 'Nirvana', youtubeId: 'hTWKbfoikeg', explanation: 'Generation-defining grunge' },
    { title: 'Zombie', artist: 'The Cranberries', youtubeId: '6Ejga4kJUts', explanation: 'Powerful and haunting' },
    { title: 'Seven Nation Army', artist: 'The White Stripes', youtubeId: '0J2QdDbelmY', explanation: 'That bass line is eternal' },
    { title: 'Somebody That I Used to Know', artist: 'Gotye', youtubeId: '8UVNT4wvIGY', explanation: 'Cut me off completely' },
    { title: 'Radioactive', artist: 'Imagine Dragons', youtubeId: 'ktvTqknDobU', explanation: 'Waking up to revolution' },
  ],
  'chill': [
    { title: 'Sunset Lover', artist: 'Petit Biscuit', youtubeId: 'wuCK-oiE3rM', explanation: 'Electronic warmth for days' },
    { title: 'Electric Feel', artist: 'MGMT', youtubeId: 'MmZexg8sxyk', explanation: 'Psychedelic chill vibes' },
    { title: 'Stay', artist: 'Rihanna ft. Mikky Ekko', youtubeId: 'JF8BRvqGCNs', explanation: 'Emotional and raw' },
    { title: 'Summertime Sadness', artist: 'Lana Del Rey', youtubeId: 'TdrL3QxjyVw', explanation: 'Melancholic summer anthem' },
    { title: 'Location', artist: 'Khalid', youtubeId: 'by3yRdlQvzs', explanation: 'Smooth R&B chill' },
  ],
  'rock': [
    { title: 'Thunderstruck', artist: 'AC/DC', youtubeId: 'v2AC41dglnM', explanation: 'Pure rock electricity' },
    { title: 'Back in Black', artist: 'AC/DC', youtubeId: 'pAgnJDJN4VA', explanation: 'Classic rock anthem' },
    { title: 'Eye of the Tiger', artist: 'Survivor', youtubeId: 'btPJPFnesV4', explanation: 'Training montage essential' },
    { title: 'Don\'t Stop Believin\'', artist: 'Journey', youtubeId: '1k8craCGpgs', explanation: 'Hold on to that feeling' },
    { title: 'Livin\' on a Prayer', artist: 'Bon Jovi', youtubeId: 'lDK9QqIzhwk', explanation: 'Woah, we\'re halfway there' },
    { title: 'Paradise City', artist: 'Guns N\' Roses', youtubeId: 'Rbm6GXllBiw', explanation: 'Take me down' },
  ],
  'motivational': [
    { title: 'Eye of the Tiger', artist: 'Survivor', youtubeId: 'btPJPFnesV4', explanation: 'Get ready to conquer' },
    { title: 'Lose Yourself', artist: 'Eminem', youtubeId: '_Yhyp-_hX2s', explanation: 'Seize everything you ever wanted' },
    { title: 'Stronger', artist: 'Kanye West', youtubeId: 'PsO6ZnUZI0g', explanation: 'What doesn\'t kill you...' },
    { title: 'Till I Collapse', artist: 'Eminem', youtubeId: 'ytQ5CYE1VZw', explanation: 'Ultimate workout motivation' },
    { title: 'Can\'t Hold Us', artist: 'Macklemore', youtubeId: '2zNSgSzhBfM', explanation: 'Unstoppable energy' },
  ],
  'sad': [
    { title: 'Someone Like You', artist: 'Adele', youtubeId: 'hLQl3WQQoQ0', explanation: 'Heartbreak ballad perfection' },
    { title: 'When I Was Your Man', artist: 'Bruno Mars', youtubeId: 'ekzHIouo8Q4', explanation: 'Regret hits hard' },
    { title: 'All Too Well', artist: 'Taylor Swift', youtubeId: 'tollGa3S0o8', explanation: '10-minute pain journey' },
    { title: 'Skinny Love', artist: 'Bon Iver', youtubeId: 'ssdgFoHLwnk', explanation: 'Raw emotion captured' },
    { title: 'The Night We Met', artist: 'Lord Huron', youtubeId: 'KtlgYxa6BMU', explanation: '13 Reasons Why anthem' },
  ],
  'dance': [
    { title: 'One Kiss', artist: 'Calvin Harris & Dua Lipa', youtubeId: 'DkeiKbqa02g', explanation: 'Summer dance vibes' },
    { title: 'Don\'t Start Now', artist: 'Dua Lipa', youtubeId: 'oygrmJFKYZY', explanation: 'Disco ball energy' },
    { title: 'Lean On', artist: 'Major Lazer', youtubeId: 'YqeW9_5kURI', explanation: 'Global dance hit' },
    { title: 'This Is What You Came For', artist: 'Calvin Harris ft. Rihanna', youtubeId: 'kOkQ4T5WO9E', explanation: 'Festival anthem' },
    { title: 'Closer', artist: 'The Chainsmokers ft. Halsey', youtubeId: 'PT2_F-1esPk', explanation: 'That drop though' },
  ],
  'upbeat': [
    { title: 'Happy', artist: 'Pharrell Williams', youtubeId: 'ZbZSe6N_BXs', explanation: 'Clap along if you feel good' },
    { title: 'Good as Hell', artist: 'Lizzo', youtubeId: 'SmbmeOgWsqE', explanation: 'Self-love anthem' },
    { title: 'Shut Up and Dance', artist: 'Walk the Moon', youtubeId: '6JCLY0Rlx6Q', explanation: 'Pure joy and dancing' },
    { title: 'Best Day of My Life', artist: 'American Authors', youtubeId: 'Y66j_BUCBMY', explanation: 'Optimism overload' },
  ],
  'focus': [
    { title: 'Time', artist: 'Hans Zimmer', youtubeId: 'RxabLA7UQ9k', explanation: 'Inception-level focus' },
    { title: 'Interstellar Main Theme', artist: 'Hans Zimmer', youtubeId: 'zSWdZVtXT7E', explanation: 'Out of this world concentration' },
    { title: 'Experience', artist: 'Ludovico Einaudi', youtubeId: 'hN_q-_nGv4U', explanation: 'Piano for deep work' },
  ],
  'soul': [
    { title: 'Ain\'t No Sunshine', artist: 'Bill Withers', youtubeId: 'tIdIqbv7SPo', explanation: 'Classic soul perfection' },
    { title: 'A Change Is Gonna Come', artist: 'Sam Cooke', youtubeId: 'wEBlaMOmKV4', explanation: 'Powerful and moving' },
    { title: 'Superstition', artist: 'Stevie Wonder', youtubeId: '0CFuCYNx-1g', explanation: 'Funky soul groove' },
  ],
  'edm': [
    { title: 'Roses', artist: 'The Chainsmokers', youtubeId: 'FyASdjZE0R0', explanation: 'EDM anthem perfection' },
    { title: 'Faded', artist: 'Alan Walker', youtubeId: '60ItHLz5WEA', explanation: 'Ethereal EDM vibes' },
    { title: 'Waiting For Love', artist: 'Avicii', youtubeId: 'cHHLHGNpCSA', explanation: 'Emotional EDM journey' },
  ],
  'bedroom-pop': [
    { title: 'Heat Waves', artist: 'Glass Animals', youtubeId: 'mRD0-GxqHVo', explanation: 'Late night overthinking' },
    { title: 'Freaks', artist: 'Surf Curse', youtubeId: '8I_TkURrFjM', explanation: 'TikTok bedroom pop gem' },
    { title: 'Cigarette Daydreams', artist: 'Cage the Elephant', youtubeId: 'opeETnB8m8w', explanation: 'Dreamy and nostalgic' },
  ],
  'indie-pop': [
    { title: 'Riptide', artist: 'Vance Joy', youtubeId: 'uJ_1HMAGb4k', explanation: 'Ukulele indie perfection' },
    { title: 'Ho Hey', artist: 'The Lumineers', youtubeId: 'zvCBSSwgtg4', explanation: 'Folk-pop sing-along' },
    { title: 'Little Talks', artist: 'Of Monsters and Men', youtubeId: 'ghb6eDopW8I', explanation: 'Indie anthem energy' },
  ],
  'melancholic': [
    { title: 'Hurt', artist: 'Johnny Cash', youtubeId: '8AHCfZTRGiI', explanation: 'Raw emotional power' },
    { title: 'Mad World', artist: 'Gary Jules', youtubeId: '4N3N1MlvVc4', explanation: 'Hauntingly beautiful' },
    { title: 'The Sound of Silence', artist: 'Disturbed', youtubeId: 'u9Dg-g7t2l4', explanation: 'Powerful cover version' },
  ],
  'acoustic': [
    { title: 'Wonderwall', artist: 'Oasis', youtubeId: 'bx1Bh8ZvH84', explanation: 'Every campfire ever' },
    { title: 'Fast Car', artist: 'Tracy Chapman', youtubeId: 'uTIB10eQnA0', explanation: 'Storytelling at its finest' },
    { title: 'Hallelujah', artist: 'Jeff Buckley', youtubeId: 'y8AWFf7EAc4', explanation: 'Legendary cover' },
  ],
  'ambient': [
    { title: 'Weightless', artist: 'Marconi Union', youtubeId: 'UfcAVejslrU', explanation: 'Scientifically relaxing' },
    { title: 'Porcelain', artist: 'Moby', youtubeId: 'QhZnEagfjTQ', explanation: 'Ambient electronic beauty' },
  ],
  'classical': [
    { title: 'Clair de Lune', artist: 'Debussy', youtubeId: 'CvFH_6DNRCY', explanation: 'Timeless piano masterpiece' },
    { title: 'Canon in D', artist: 'Pachelbel', youtubeId: 'NlprozGcs80', explanation: 'Classical perfection' },
  ],
  'instrumental': [
    { title: 'River Flows In You', artist: 'Yiruma', youtubeId: '7maJOI3QMu0', explanation: 'Peaceful piano vibes' },
    { title: 'Comptine d\'un autre été', artist: 'Yann Tiersen', youtubeId: 'NvryolGa19A', explanation: 'Amélie soundtrack magic' },
  ],
};

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function findBestMoodMatch(moodInput: string): { genres: string[]; vibe: string } {
  const lowerMood = moodInput.toLowerCase();

  for (const [mood, data] of Object.entries(moodToGenreMapping)) {
    if (lowerMood.includes(mood) || mood.includes(lowerMood)) {
      return data;
    }
  }

  if (lowerMood.includes('sad') || lowerMood.includes('cry') || lowerMood.includes('down') || lowerMood.includes('depressed')) {
    return moodToGenreMapping['heartbreak'];
  }
  if (lowerMood.includes('happy') || lowerMood.includes('joy') || lowerMood.includes('good') || lowerMood.includes('excited')) {
    return moodToGenreMapping['dancing in the rain'];
  }
  if (lowerMood.includes('work') || lowerMood.includes('focus') || lowerMood.includes('productive') || lowerMood.includes('deadline')) {
    return moodToGenreMapping['crushing deadlines'];
  }
  if (lowerMood.includes('tired') || lowerMood.includes('sleepy') || lowerMood.includes('rest') || lowerMood.includes('cozy')) {
    return moodToGenreMapping['cozy vibes'];
  }
  if (lowerMood.includes('energy') || lowerMood.includes('hype') || lowerMood.includes('lit') || lowerMood.includes('party')) {
    return moodToGenreMapping['party mode'];
  }
  if (lowerMood.includes('gym') || lowerMood.includes('workout') || lowerMood.includes('exercise') || lowerMood.includes('run')) {
    return moodToGenreMapping['workout'];
  }
  if (lowerMood.includes('study') || lowerMood.includes('exam') || lowerMood.includes('homework')) {
    return moodToGenreMapping['studying'];
  }
  if (lowerMood.includes('confident') || lowerMood.includes('powerful') || lowerMood.includes('unstoppable') || lowerMood.includes('boss')) {
    return moodToGenreMapping['unstoppable'];
  }
  if (lowerMood.includes('night') || lowerMood.includes('3am') || lowerMood.includes('overthink')) {
    return moodToGenreMapping['late night thoughts'];
  }
  if (lowerMood.includes('dread') || lowerMood.includes('existential') || lowerMood.includes('question')) {
    return moodToGenreMapping['existential dread'];
  }

  return {
    genres: ['indie', 'pop', 'chill'],
    vibe: 'vibing to whatever hits right now'
  };
}

export function generatePlaylist(moodInput: string): PlaylistData {
  const { genres, vibe } = findBestMoodMatch(moodInput);

  const songs: Song[] = [];
  const usedSongs = new Set<string>();

  genres.forEach(genre => {
    const genreSongs = songDatabase[genre] || [];
    const shuffledSongs = shuffleArray(genreSongs);

    shuffledSongs.forEach(song => {
      if (!usedSongs.has(song.youtubeId) && songs.length < 10) {
        songs.push({
          ...song,
          thumbnail: `https://img.youtube.com/vi/${song.youtubeId}/mqdefault.jpg`
        });
        usedSongs.add(song.youtubeId);
      }
    });
  });

  if (songs.length < 8) {
    const allGenres = Object.keys(songDatabase);
    const shuffledGenres = shuffleArray(allGenres);

    for (const genre of shuffledGenres) {
      const genreSongs = shuffleArray(songDatabase[genre]);
      for (const song of genreSongs) {
        if (!usedSongs.has(song.youtubeId) && songs.length < 10) {
          songs.push({
            ...song,
            thumbnail: `https://img.youtube.com/vi/${song.youtubeId}/mqdefault.jpg`
          });
          usedSongs.add(song.youtubeId);
        }
        if (songs.length >= 10) break;
      }
      if (songs.length >= 10) break;
    }
  }

  return {
    songs: songs.slice(0, 10),
    vibe,
    memeText: generateMemeText(moodInput, vibe)
  };
}

function generateMemeText(mood: string, vibe: string): string {
  const memeTemplates = [
    `POV: You're ${mood} and this playlist gets it`,
    `Me: ${mood}\nAlso me: *adds 47 songs to queue*`,
    `Nobody:\nAbsolutely nobody:\nMe when ${mood}: 🎵`,
    `${mood} → VibeVault → ✨ immaculate vibes ✨`,
    `This playlist really said "${vibe}" and delivered`,
    `When you're ${mood} and the algorithm actually understands you`,
  ];

  return memeTemplates[Math.floor(Math.random() * memeTemplates.length)];
}

export function createYouTubePlaylistUrl(songs: Song[]): string {
  if (songs.length === 0) return '';

  const videoIds = songs.map(s => s.youtubeId).join(',');
  return `https://www.youtube.com/watch_videos?video_ids=${videoIds}`;
}
