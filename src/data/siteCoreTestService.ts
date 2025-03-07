/* eslint-disable @typescript-eslint/no-explicit-any */
import styleguideEnData from '../assets/data/routes/styleguide/en.json';
import styleguideviData from '../assets/data/routes/styleguide/vi.json';
import homeDataEn from '../assets/data/routes/en.json';
import { mapNestedJson } from '../utils/mapJsonHelper';

const data: Record<string, Record<string, any>> = {
  en: {
    '/': homeDataEn,
    '/styleguide': styleguideEnData,
  },
  vi: {
    '/': null,
    '/styleguide': styleguideviData,
  },
};

// Ensure `src` properties are correctly processed
const processObjectProperty = (key: string, value: any) => {
  // if (key === 'src' && typeof value === 'string') {
  //   console.log('value', value)
  //   return require(`./assets/images/${value}`); // Assuming images are stored in `assets`
  // }
  return value;
};

const produceData = (route: string, language: string) => {
  const formattedData = data[language]?.[route]; // Safe lookup
  if (!formattedData) {return null;}
  return mapNestedJson(formattedData, processObjectProperty);
};

const getRouteData = (route: string, { language = 'en' }: { language?: string } = {}) =>
  new Promise((resolve, reject) => {
    if (!data[language] || !data[language][route]) {
      return reject(new Error(`No data for route "${route}" in language "${language}"`));
    }
    resolve(produceData(route, language));
  });

export { getRouteData };
