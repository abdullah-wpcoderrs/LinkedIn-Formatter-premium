export interface EmojiOption {
  emoji: string;
  name: string;
  keywords: string[];
}

export const EMOJI_OPTIONS: EmojiOption[] = [
  { emoji: '😀', name: 'grinning face', keywords: ['smile', 'happy', 'face'] },
  { emoji: '😊', name: 'smiling face', keywords: ['smile', 'happy', 'warm'] },
  { emoji: '😂', name: 'face with tears of joy', keywords: ['laugh', 'funny', 'joy'] },
  { emoji: '😍', name: 'heart eyes', keywords: ['love', 'favorite', 'excited'] },
  { emoji: '🤔', name: 'thinking face', keywords: ['think', 'question', 'idea'] },
  { emoji: '😎', name: 'cool face', keywords: ['cool', 'confident', 'win'] },
  { emoji: '🙌', name: 'raising hands', keywords: ['celebrate', 'win', 'thanks'] },
  { emoji: '👏', name: 'clapping hands', keywords: ['applause', 'great', 'congrats'] },
  { emoji: '🙏', name: 'folded hands', keywords: ['thanks', 'please', 'gratitude'] },
  { emoji: '💪', name: 'flexed biceps', keywords: ['strong', 'strength', 'work'] },
  { emoji: '🤝', name: 'handshake', keywords: ['partner', 'deal', 'team'] },
  { emoji: '👀', name: 'eyes', keywords: ['watch', 'look', 'attention'] },
  { emoji: '✨', name: 'sparkles', keywords: ['sparkle', 'new', 'polish'] },
  { emoji: '🚀', name: 'rocket', keywords: ['launch', 'ship', 'growth'] },
  { emoji: '💡', name: 'light bulb', keywords: ['idea', 'insight', 'innovation'] },
  { emoji: '✅', name: 'check mark button', keywords: ['done', 'success', 'yes'] },
  { emoji: '🔥', name: 'fire', keywords: ['hot', 'great', 'momentum'] },
  { emoji: '📌', name: 'pushpin', keywords: ['pin', 'note', 'important'] },
  { emoji: '🎯', name: 'bullseye', keywords: ['target', 'goal', 'focus'] },
  { emoji: '⭐', name: 'star', keywords: ['favorite', 'quality', 'highlight'] },
  { emoji: '🏆', name: 'trophy', keywords: ['award', 'win', 'achievement'] },
  { emoji: '📈', name: 'chart increasing', keywords: ['growth', 'metrics', 'progress'] },
  { emoji: '📉', name: 'chart decreasing', keywords: ['decline', 'metrics', 'trend'] },
  { emoji: '📊', name: 'bar chart', keywords: ['data', 'analytics', 'metrics'] },
  { emoji: '🧠', name: 'brain', keywords: ['thinking', 'learning', 'ai'] },
  { emoji: '🤖', name: 'robot', keywords: ['ai', 'automation', 'bot'] },
  { emoji: '⚙️', name: 'gear', keywords: ['engineering', 'settings', 'build'] },
  { emoji: '🛠️', name: 'hammer and wrench', keywords: ['tools', 'build', 'fix'] },
  { emoji: '🔒', name: 'locked', keywords: ['security', 'private', 'safe'] },
  { emoji: '🔐', name: 'locked with key', keywords: ['security', 'privacy', 'protect'] },
  { emoji: '🧪', name: 'test tube', keywords: ['test', 'experiment', 'lab'] },
  { emoji: '💻', name: 'laptop', keywords: ['code', 'computer', 'work'] },
  { emoji: '☁️', name: 'cloud', keywords: ['cloud', 'azure', 'platform'] },
  { emoji: '⚡', name: 'high voltage', keywords: ['fast', 'speed', 'energy'] },
  { emoji: '🌍', name: 'globe', keywords: ['global', 'world', 'internet'] },
  { emoji: '📣', name: 'megaphone', keywords: ['announce', 'launch', 'news'] },
  { emoji: '📝', name: 'memo', keywords: ['note', 'write', 'draft'] },
  { emoji: '📚', name: 'books', keywords: ['learn', 'education', 'knowledge'] },
  { emoji: '🔗', name: 'link', keywords: ['url', 'connection', 'reference'] },
  { emoji: '💬', name: 'speech balloon', keywords: ['comment', 'discussion', 'chat'] },
  { emoji: '❓', name: 'question mark', keywords: ['question', 'ask', 'help'] },
  { emoji: '❗', name: 'exclamation mark', keywords: ['important', 'alert', 'note'] },
  { emoji: '➡️', name: 'right arrow', keywords: ['next', 'forward', 'arrow'] },
  { emoji: '👇', name: 'backhand index down', keywords: ['below', 'down', 'cta'] },
  { emoji: '👆', name: 'backhand index up', keywords: ['above', 'up', 'point'] },
  { emoji: '🎉', name: 'party popper', keywords: ['celebrate', 'launch', 'party'] },
  { emoji: '💥', name: 'collision', keywords: ['impact', 'boom', 'big'] },
  { emoji: '🧵', name: 'thread', keywords: ['thread', 'series', 'story'] },
  { emoji: '📅', name: 'calendar', keywords: ['date', 'event', 'schedule'] },
  { emoji: '⏱️', name: 'stopwatch', keywords: ['time', 'fast', 'measure'] },

  // Faces & emotion
  { emoji: '😃', name: 'grinning big eyes', keywords: ['smile', 'happy', 'joy'] },
  { emoji: '😄', name: 'grinning smiling eyes', keywords: ['smile', 'happy', 'laugh'] },
  { emoji: '😁', name: 'beaming face', keywords: ['grin', 'happy', 'smile'] },
  { emoji: '😆', name: 'grinning squinting', keywords: ['laugh', 'haha', 'happy'] },
  { emoji: '😅', name: 'grinning sweat', keywords: ['phew', 'relief', 'nervous'] },
  { emoji: '🤣', name: 'rolling on the floor laughing', keywords: ['rofl', 'lol', 'funny'] },
  { emoji: '😉', name: 'winking face', keywords: ['wink', 'flirt', 'joke'] },
  { emoji: '😌', name: 'relieved face', keywords: ['calm', 'content', 'peace'] },
  { emoji: '🥰', name: 'smiling face with hearts', keywords: ['love', 'adore', 'happy'] },
  { emoji: '😘', name: 'blowing a kiss', keywords: ['kiss', 'love', 'mwah'] },
  { emoji: '😋', name: 'face savoring food', keywords: ['yum', 'tasty', 'delicious'] },
  { emoji: '🤩', name: 'star-struck', keywords: ['wow', 'amazing', 'excited'] },
  { emoji: '🥳', name: 'partying face', keywords: ['celebrate', 'party', 'congrats'] },
  { emoji: '😏', name: 'smirking face', keywords: ['smirk', 'sly', 'confident'] },
  { emoji: '😴', name: 'sleeping face', keywords: ['sleep', 'tired', 'zzz'] },
  { emoji: '🥱', name: 'yawning face', keywords: ['bored', 'tired', 'sleepy'] },
  { emoji: '😮', name: 'face with open mouth', keywords: ['wow', 'surprised', 'oh'] },
  { emoji: '🥺', name: 'pleading face', keywords: ['please', 'puppy eyes', 'beg'] },
  { emoji: '😢', name: 'crying face', keywords: ['sad', 'tear', 'cry'] },
  { emoji: '😭', name: 'loudly crying face', keywords: ['sob', 'sad', 'cry'] },
  { emoji: '😤', name: 'face with steam', keywords: ['determined', 'frustrated', 'huff'] },
  { emoji: '😠', name: 'angry face', keywords: ['angry', 'mad', 'annoyed'] },
  { emoji: '🤯', name: 'exploding head', keywords: ['mind blown', 'shocked', 'wow'] },
  { emoji: '😱', name: 'screaming in fear', keywords: ['shock', 'scared', 'omg'] },
  { emoji: '🙃', name: 'upside-down face', keywords: ['silly', 'irony', 'sarcasm'] },
  { emoji: '🙂', name: 'slightly smiling face', keywords: ['smile', 'okay', 'polite'] },
  { emoji: '🙄', name: 'face with rolling eyes', keywords: ['eye roll', 'whatever', 'annoyed'] },
  { emoji: '🤓', name: 'nerd face', keywords: ['nerd', 'geek', 'smart'] },
  { emoji: '🧐', name: 'face with monocle', keywords: ['inspect', 'curious', 'hmm'] },
  { emoji: '😇', name: 'smiling with halo', keywords: ['angel', 'innocent', 'good'] },
  { emoji: '🫠', name: 'melting face', keywords: ['melt', 'hot', 'awkward'] },
  { emoji: '🫡', name: 'saluting face', keywords: ['salute', 'respect', 'yes sir'] },

  // Hands & gestures
  { emoji: '👍', name: 'thumbs up', keywords: ['yes', 'like', 'approve'] },
  { emoji: '👎', name: 'thumbs down', keywords: ['no', 'dislike', 'bad'] },
  { emoji: '👌', name: 'ok hand', keywords: ['ok', 'perfect', 'good'] },
  { emoji: '🤌', name: 'pinched fingers', keywords: ['chef kiss', 'italian', 'perfect'] },
  { emoji: '✌️', name: 'victory hand', keywords: ['peace', 'victory', 'two'] },
  { emoji: '🤞', name: 'crossed fingers', keywords: ['luck', 'hope', 'wish'] },
  { emoji: '🤟', name: 'love-you gesture', keywords: ['love', 'ily', 'rock'] },
  { emoji: '🤙', name: 'call me hand', keywords: ['call', 'shaka', 'hang loose'] },
  { emoji: '👋', name: 'waving hand', keywords: ['hi', 'hello', 'bye', 'wave'] },
  { emoji: '✋', name: 'raised hand', keywords: ['stop', 'high five', 'hand'] },
  { emoji: '🖐️', name: 'hand with fingers splayed', keywords: ['hand', 'five', 'stop'] },
  { emoji: '🫶', name: 'heart hands', keywords: ['love', 'heart', 'thanks'] },
  { emoji: '☝️', name: 'index pointing up', keywords: ['one', 'point', 'attention'] },
  { emoji: '✊', name: 'raised fist', keywords: ['power', 'solidarity', 'fist'] },
  { emoji: '👊', name: 'fist bump', keywords: ['bump', 'punch', 'bro'] },
  { emoji: '✍️', name: 'writing hand', keywords: ['write', 'sign', 'note'] },

  // Hearts & symbols
  { emoji: '❤️', name: 'red heart', keywords: ['love', 'like', 'heart'] },
  { emoji: '🧡', name: 'orange heart', keywords: ['love', 'heart', 'orange'] },
  { emoji: '💛', name: 'yellow heart', keywords: ['love', 'heart', 'friendship'] },
  { emoji: '💚', name: 'green heart', keywords: ['love', 'heart', 'nature'] },
  { emoji: '💙', name: 'blue heart', keywords: ['love', 'heart', 'trust'] },
  { emoji: '💜', name: 'purple heart', keywords: ['love', 'heart', 'purple'] },
  { emoji: '🖤', name: 'black heart', keywords: ['love', 'heart', 'dark'] },
  { emoji: '🤍', name: 'white heart', keywords: ['love', 'heart', 'pure'] },
  { emoji: '💔', name: 'broken heart', keywords: ['sad', 'heartbreak', 'love'] },
  { emoji: '💕', name: 'two hearts', keywords: ['love', 'hearts', 'like'] },
  { emoji: '💖', name: 'sparkling heart', keywords: ['love', 'heart', 'sparkle'] },
  { emoji: '💯', name: 'hundred points', keywords: ['100', 'perfect', 'agree'] },
  { emoji: '💫', name: 'dizzy', keywords: ['stars', 'sparkle', 'wow'] },
  { emoji: '🌟', name: 'glowing star', keywords: ['star', 'shine', 'special'] },

  // People & work
  { emoji: '🧑‍💻', name: 'technologist', keywords: ['developer', 'coder', 'tech'] },
  { emoji: '🦸', name: 'superhero', keywords: ['hero', 'super', 'save'] },
  { emoji: '🧑‍🚀', name: 'astronaut', keywords: ['space', 'launch', 'explore'] },
  { emoji: '👥', name: 'busts in silhouette', keywords: ['people', 'team', 'users'] },
  { emoji: '🤷', name: 'shrug', keywords: ['idk', 'whatever', 'unsure'] },
  { emoji: '🙋', name: 'person raising hand', keywords: ['question', 'volunteer', 'me'] },

  // Animals & nature
  { emoji: '🐶', name: 'dog face', keywords: ['dog', 'puppy', 'pet'] },
  { emoji: '🐱', name: 'cat face', keywords: ['cat', 'kitten', 'pet'] },
  { emoji: '🦊', name: 'fox', keywords: ['fox', 'clever', 'animal'] },
  { emoji: '🐻', name: 'bear', keywords: ['bear', 'animal'] },
  { emoji: '🐼', name: 'panda', keywords: ['panda', 'cute', 'animal'] },
  { emoji: '🦁', name: 'lion', keywords: ['lion', 'brave', 'king'] },
  { emoji: '🦄', name: 'unicorn', keywords: ['unicorn', 'magic', 'rare'] },
  { emoji: '🐝', name: 'honeybee', keywords: ['bee', 'busy', 'buzz'] },
  { emoji: '🦋', name: 'butterfly', keywords: ['butterfly', 'change', 'transform'] },
  { emoji: '🐢', name: 'turtle', keywords: ['turtle', 'slow', 'steady'] },
  { emoji: '🐳', name: 'spouting whale', keywords: ['whale', 'ocean', 'big'] },
  { emoji: '🌳', name: 'tree', keywords: ['tree', 'nature', 'green'] },
  { emoji: '🌴', name: 'palm tree', keywords: ['palm', 'beach', 'vacation'] },
  { emoji: '🌵', name: 'cactus', keywords: ['cactus', 'desert', 'plant'] },
  { emoji: '🌸', name: 'cherry blossom', keywords: ['flower', 'spring', 'bloom'] },
  { emoji: '🌹', name: 'rose', keywords: ['rose', 'flower', 'love'] },
  { emoji: '🌻', name: 'sunflower', keywords: ['sunflower', 'summer', 'flower'] },
  { emoji: '🍀', name: 'four leaf clover', keywords: ['luck', 'lucky', 'clover'] },
  { emoji: '🌱', name: 'seedling', keywords: ['grow', 'start', 'new'] },

  // Weather & sky
  { emoji: '☀️', name: 'sun', keywords: ['sunny', 'weather', 'bright'] },
  { emoji: '🌈', name: 'rainbow', keywords: ['rainbow', 'pride', 'colorful'] },
  { emoji: '❄️', name: 'snowflake', keywords: ['snow', 'cold', 'winter'] },
  { emoji: '🌊', name: 'water wave', keywords: ['wave', 'ocean', 'sea'] },
  { emoji: '🌙', name: 'crescent moon', keywords: ['moon', 'night', 'dark mode'] },
  { emoji: '💧', name: 'droplet', keywords: ['water', 'drop', 'wet'] },

  // Food & drink
  { emoji: '☕', name: 'hot beverage', keywords: ['coffee', 'tea', 'morning'] },
  { emoji: '🍺', name: 'beer mug', keywords: ['beer', 'drink', 'cheers'] },
  { emoji: '🥂', name: 'clinking glasses', keywords: ['cheers', 'celebrate', 'toast'] },
  { emoji: '🍕', name: 'pizza', keywords: ['pizza', 'food', 'slice'] },
  { emoji: '🍔', name: 'hamburger', keywords: ['burger', 'food', 'lunch'] },
  { emoji: '🍩', name: 'doughnut', keywords: ['donut', 'sweet', 'snack'] },
  { emoji: '🍰', name: 'shortcake', keywords: ['cake', 'dessert', 'sweet'] },
  { emoji: '🎂', name: 'birthday cake', keywords: ['birthday', 'cake', 'celebrate'] },
  { emoji: '🍫', name: 'chocolate bar', keywords: ['chocolate', 'sweet', 'treat'] },
  { emoji: '🍿', name: 'popcorn', keywords: ['popcorn', 'movie', 'snack'] },
  { emoji: '🍎', name: 'red apple', keywords: ['apple', 'fruit', 'healthy'] },
  { emoji: '🥑', name: 'avocado', keywords: ['avocado', 'healthy', 'toast'] },

  // Activities & objects
  { emoji: '🎵', name: 'musical note', keywords: ['music', 'song', 'audio'] },
  { emoji: '🎧', name: 'headphone', keywords: ['music', 'podcast', 'listen'] },
  { emoji: '🎤', name: 'microphone', keywords: ['mic', 'sing', 'speak'] },
  { emoji: '🎮', name: 'video game', keywords: ['game', 'gaming', 'play'] },
  { emoji: '🎨', name: 'artist palette', keywords: ['art', 'design', 'creative'] },
  { emoji: '🎬', name: 'clapper board', keywords: ['movie', 'film', 'action'] },
  { emoji: '📷', name: 'camera', keywords: ['photo', 'picture', 'camera'] },
  { emoji: '🎁', name: 'wrapped gift', keywords: ['gift', 'present', 'reward'] },
  { emoji: '🎈', name: 'balloon', keywords: ['balloon', 'party', 'celebrate'] },
  { emoji: '🔔', name: 'bell', keywords: ['notification', 'alert', 'reminder'] },
  { emoji: '💎', name: 'gem stone', keywords: ['diamond', 'value', 'premium'] },
  { emoji: '💰', name: 'money bag', keywords: ['money', 'revenue', 'cash'] },
  { emoji: '🥇', name: 'gold medal', keywords: ['first', 'gold', 'winner'] },

  // Travel & tech
  { emoji: '✈️', name: 'airplane', keywords: ['travel', 'flight', 'trip'] },
  { emoji: '🚗', name: 'car', keywords: ['car', 'drive', 'travel'] },
  { emoji: '🏠', name: 'house', keywords: ['home', 'house', 'remote'] },
  { emoji: '🏢', name: 'office building', keywords: ['office', 'work', 'company'] },
  { emoji: '🗺️', name: 'world map', keywords: ['map', 'travel', 'explore'] },
  { emoji: '🚩', name: 'triangular flag', keywords: ['flag', 'milestone', 'mark'] },
  { emoji: '📱', name: 'mobile phone', keywords: ['phone', 'mobile', 'app'] },
  { emoji: '🖥️', name: 'desktop computer', keywords: ['computer', 'desktop', 'screen'] },
  { emoji: '📁', name: 'file folder', keywords: ['folder', 'files', 'organize'] },
  { emoji: '📎', name: 'paperclip', keywords: ['attach', 'clip', 'file'] },
  { emoji: '✏️', name: 'pencil', keywords: ['edit', 'write', 'draw'] },
  { emoji: '🔍', name: 'magnifying glass', keywords: ['search', 'find', 'zoom'] },
  { emoji: '🔑', name: 'key', keywords: ['key', 'access', 'unlock'] },
  { emoji: '📰', name: 'newspaper', keywords: ['news', 'article', 'press'] },
  { emoji: '📦', name: 'package', keywords: ['box', 'shipping', 'release'] },

  // Symbols
  { emoji: '✔️', name: 'check mark', keywords: ['done', 'yes', 'tick'] },
  { emoji: '❌', name: 'cross mark', keywords: ['no', 'wrong', 'cancel'] },
  { emoji: '🚫', name: 'prohibited', keywords: ['no', 'ban', 'forbidden'] },
  { emoji: '⚠️', name: 'warning', keywords: ['warning', 'caution', 'alert'] },
  { emoji: '♻️', name: 'recycling symbol', keywords: ['recycle', 'green', 'reuse'] },
  { emoji: '🆕', name: 'new button', keywords: ['new', 'fresh', 'launch'] },
  { emoji: '🔴', name: 'red circle', keywords: ['red', 'live', 'stop'] },
  { emoji: '🟢', name: 'green circle', keywords: ['green', 'go', 'online'] },
  { emoji: '🔵', name: 'blue circle', keywords: ['blue', 'circle', 'dot'] },
  { emoji: '🟡', name: 'yellow circle', keywords: ['yellow', 'circle', 'dot'] },
];

export function searchEmojis(query: string, limit = 60): EmojiOption[] {
  const normalized = query.trim().toLowerCase();

  if (!normalized) {
    // No query: surface the whole set (the results grid scrolls).
    return EMOJI_OPTIONS;
  }

  const terms = normalized.split(/\s+/);

  return EMOJI_OPTIONS
    .map((option) => {
      const haystack = [option.name, ...option.keywords].join(' ').toLowerCase();
      const score = terms.reduce((total, term) => {
        if (option.name.toLowerCase() === term) {
          return total + 4;
        }

        if (option.name.toLowerCase().includes(term)) {
          return total + 3;
        }

        if (option.keywords.some((keyword) => keyword === term)) {
          return total + 2;
        }

        return haystack.includes(term) ? total + 1 : total;
      }, 0);

      return { option, score };
    })
    .filter((result) => result.score > 0)
    .sort((left, right) => right.score - left.score || left.option.name.localeCompare(right.option.name))
    .slice(0, limit)
    .map((result) => result.option);
}
