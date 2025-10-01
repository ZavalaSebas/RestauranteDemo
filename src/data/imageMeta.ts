import meta from './imageMeta.generated.json';

type ImageMeta = { blurDataURL: string; width: number; height: number };

const typedMeta = meta as Record<string, ImageMeta>;

export function getImageMeta(path: string): ImageMeta | undefined {
	return typedMeta[path];
}

export { typedMeta as imageMeta }; 
