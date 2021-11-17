const baseURL = process.env.API_BASE_URL;

console.log(`Api base: ${process.env.API_BASE_URL}`);

export const getAbout = () => {
  fetch(`${baseURL}/about`);
};

export const getAboutInfo = (name) => {
  return `This is a Boilerplate - ${name}`;
}
