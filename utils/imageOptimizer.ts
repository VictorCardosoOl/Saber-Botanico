/**
 * Otimiza URLs do Unsplash solicitando tamanhos específicos e formato WebP.
 * @param url A URL original da imagem
 * @param width A largura desejada
 * @returns A URL otimizada
 */
export const getOptimizedImageUrl = (url: string, width: number = 800): string => {
  if (!url || !url.includes('images.unsplash.com')) return url;
  
  // Remove parâmetros existentes para evitar duplicação
  const baseUrl = url.split('?')[0];
  
  // Reconstrói com parâmetros de otimização
  // auto=format: entrega WebP/AVIF se o navegador suportar
  // fit=crop: garante que a imagem preencha a dimensão
  // q=80: equilíbrio ideal entre qualidade e tamanho
  return `${baseUrl}?auto=format&fit=crop&q=80&w=${width}`;
};

/**
 * Gera uma string srcSet para imagens responsivas
 */
export const generateSrcSet = (url: string): string => {
  if (!url || !url.includes('images.unsplash.com')) return '';
  
  const widths = [640, 1024, 1500, 2000];
  return widths
    .map(w => `${getOptimizedImageUrl(url, w)} ${w}w`)
    .join(', ');
};