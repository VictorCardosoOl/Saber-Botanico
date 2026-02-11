
/**
 * Otimiza URLs do Unsplash solicitando tamanhos específicos e formato WebP.
 * Implementa validação de entrada e sanitização básica.
 * 
 * @param url A URL original da imagem.
 * @param width A largura desejada (default: 800).
 * @returns A URL otimizada ou a URL original caso não seja compatível.
 */
export const getOptimizedImageUrl = (url: string, width: number = 800): string => {
  if (!url || typeof url !== 'string') return '';
  if (!url.includes('images.unsplash.com')) return url;
  
  try {
    // Sanitização básica da URL para evitar duplicação de query params
    const [baseUrl] = url.split('?');
    
    // Parâmetros de otimização:
    // auto=format: entrega WebP/AVIF se o navegador suportar
    // fit=crop: garante que a imagem preencha a dimensão
    // q=80: equilíbrio ideal entre qualidade e tamanho
    return `${baseUrl}?auto=format&fit=crop&q=80&w=${Math.floor(width)}`;
  } catch (error) {
    console.warn('ImageOptimizer: Failed to process URL', error);
    return url;
  }
};

/**
 * Gera uma string srcSet para imagens responsivas.
 * Retorna string vazia se a URL for inválida ou não suportada.
 * 
 * @param url A URL base da imagem.
 */
export const generateSrcSet = (url: string): string => {
  if (!url || typeof url !== 'string' || !url.includes('images.unsplash.com')) {
    return '';
  }
  
  const widths = [640, 1024, 1500, 2000];
  
  return widths
    .map(w => `${getOptimizedImageUrl(url, w)} ${w}w`)
    .join(', ');
};
