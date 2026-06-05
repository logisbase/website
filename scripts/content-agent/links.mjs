const LINK_REWRITES = [
  [
    /https:\/\/logisbase\.ghost\.io\/docs(?=\/|["')\s?#]|$)/gi,
    'https://logisbase.com/docs',
  ],
  [
    /https:\/\/www\.logisbase\.io\/docs(?=\/|["')\s?#]|$)/gi,
    'https://logisbase.com/docs',
  ],
  [
    /https:\/\/logisbase\.ghost\.io\/blog(?=\/|["')\s?#]|$)/gi,
    'https://logisbase.com/blog',
  ],
  [
    /https:\/\/www\.logisbase\.io\/blog(?=\/|["')\s?#]|$)/gi,
    'https://logisbase.com/blog',
  ],
  [
    /https:\/\/logisbase\.ghost\.io(?=\/|["')\s?#]|$)/gi,
    'https://logisbase.com',
  ],
  [/https:\/\/www\.logisbase\.io(?=\/|["')\s?#]|$)/gi, 'https://logisbase.com'],
];

export function normalizeLogisBaseLinks(value) {
  if (typeof value !== 'string') return value;

  return LINK_REWRITES.reduce(
    (result, [pattern, replacement]) => result.replace(pattern, replacement),
    value,
  );
}

export function normalizeArticleLinks(article) {
  return {
    ...article,
    excerpt: normalizeLogisBaseLinks(article.excerpt),
    html: normalizeLogisBaseLinks(article.html),
    metaDescription: normalizeLogisBaseLinks(article.metaDescription),
  };
}
