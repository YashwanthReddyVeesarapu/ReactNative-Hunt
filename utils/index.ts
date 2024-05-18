export const checkImageUrl = (url: string) => {
  if (!url) return false;
  else {
    const regex = new RegExp(
      /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|jpeg|bmp|webp|gif)/g
    );
    return regex.test(url);
  }
};
