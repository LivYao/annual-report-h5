import html2canvas from 'html2canvas';

export async function generateShareImage(element: HTMLElement): Promise<string> {
  try {
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
    });
    
    return canvas.toDataURL('image/png');
  } catch (error) {
    console.error('生成分享图片失败:', error);
    throw error;
  }
}

export function downloadImage(dataUrl: string, filename: string = '年度回顾.png'): void {
  const link = document.createElement('a');
  link.href = dataUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
} 