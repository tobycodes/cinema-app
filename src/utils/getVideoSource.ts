export const getVideoSource = (site: string, key: string) => {
  switch (site.toLowerCase()) {
    case 'youtube':
      return `https://www.youtube.com/embed/${key}`;
    case 'vimeo':
      return `https://player.vimeo.com/video/${key}`;
    case 'dailymotion':
      return `https://www.dailymotion.com/embed/video/${key}`;
    case 'facebook':
      return `https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F${key}%2Fvideos%2F${key}%2F`;
    default:
      return '';
  }
};
