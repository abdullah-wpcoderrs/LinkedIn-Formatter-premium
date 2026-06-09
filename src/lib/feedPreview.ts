export type FeedPreviewMode = 'desktop' | 'mobile';

interface FeedCutoffConfig {
	visibleLines: number;
	approximateCharacters: number;
	approximateCharactersPerLine: number;
}

export const FEED_CUTOFF_CONFIG: Record<FeedPreviewMode, FeedCutoffConfig> = {
	desktop: {
		visibleLines: 3,
		approximateCharacters: 210,
		approximateCharactersPerLine: 70,
	},
	mobile: {
		visibleLines: 3,
		approximateCharacters: 140,
		approximateCharactersPerLine: 47,
	},
};

export function isFeedCutoffLikely(text: string, mode: FeedPreviewMode): boolean {
	const normalized = text.replace(/\r\n?/g, '\n').trimEnd();

	if (!normalized.trim()) {
		return false;
	}

	const config = FEED_CUTOFF_CONFIG[mode];
	return countApproximateFeedLines(normalized, config.approximateCharactersPerLine) > config.visibleLines || Array.from(normalized).length > config.approximateCharacters;
}

function countApproximateFeedLines(text: string, approximateCharactersPerLine: number): number {
	return text.split('\n').reduce((lineCount, line) => {
		if (!line.trim()) {
			return lineCount + 1;
		}

		return lineCount + Math.max(1, Math.ceil(Array.from(line).length / approximateCharactersPerLine));
	}, 0);
}
