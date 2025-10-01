import meta from './imageMeta.generated.json';

type ImageMeta = { blurDataURL: string; width: number; height: number };

export const imageMeta: Record<string, ImageMeta> = meta as Record<string, ImageMeta>;

export function getImageMeta(path: string): ImageMeta | undefined {
  return imageMeta[path];
}
