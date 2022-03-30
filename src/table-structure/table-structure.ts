/**
 * Generate sql table structure and below is given column
 * id: 1,
  name: 'Afghanistan',
  iso3: 'AFG',
  iso2: 'AF',
  numeric_code: '004',
  phone_code: '93',
  capital: 'Kabul',
  currency: 'AFN',
  currency_name: 'Afghan afghani',
  currency_symbol: '؋',
  tld: '.af',
  native: 'افغانستان',
  region: 'Asia',
  subregion: 'Southern Asia',
  latitude: '33.00000000',
  longitude: '65.00000000',
  emoji: '🇦🇫',
  emojiU: 'U+1F1E6 U+1F1EB',
 */

export const generateCountryTableSQL: any = (): string => {
  return `CREATE TABLE IF NOT EXISTS country (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR NOT NULL,
        iso3 VARCHAR NOT NULL,
        iso2 VARCHAR NOT NULL,
        numeric_code VARCHAR NOT NULL,
        phone_code VARCHAR NULL,
        capital VARCHAR NOT NULL,
        currency VARCHAR NOT NULL,
        currency_name VARCHAR NOT NULL,
        currency_symbol VARCHAR NOT NULL,
        tld VARCHAR NOT NULL,
        native VARCHAR NOT NULL,
        region VARCHAR NOT NULL,
        subregion VARCHAR NOT NULL,
        latitude VARCHAR NOT NULL,
        longitude VARCHAR NOT NULL,
        emoji VARCHAR NOT NULL,
        emojiU VARCHAR NOT NULL
    );`;
};

/**
 * Generate timezone table structure and below is given column
 *  zoneName: 'Asia/Kabul',
      gmtOffset: 16200,
      gmtOffsetName: 'UTC+04:30',
      abbreviation: 'AFT',
      tzName: 'Afghanistan Time'
 */
export const generateTimezoneTableSQL: any = (): string => {
  return `CREATE TABLE IF NOT EXISTS timezone (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            zoneName VARCHAR NOT NULL,
            gmtOffset VARCHAR NOT NULL,
            gmtOffsetName VARCHAR NOT NULL,
            abbreviation VARCHAR NOT NULL,
            tzName VARCHAR NOT NULL
        );`;
};

/**
 * Generate translations table structure and below is given column
 * kr: '아프가니스탄',
    br: 'Afeganistão',
    pt: 'Afeganistão',
    nl: 'Afghanistan',
    hr: 'Afganistan',
    fa: 'افغانستان',
    de: 'Afghanistan',
    es: 'Afganistán',
    fr: 'Afghanistan',
    ja: 'アフガニスタン',
    it: 'Afghanistan',
    cn: '阿富汗'
 */
export const generateTranslationsTableSQL: any = (): string => {
  return `CREATE TABLE IF NOT EXISTS translations (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        kr VARCHAR NOT NULL,
        br VARCHAR NOT NULL,
        pt VARCHAR NOT NULL,
        nl VARCHAR NOT NULL,
        hr VARCHAR NOT NULL,
        fa VARCHAR NOT NULL,
        de VARCHAR NOT NULL,
        es VARCHAR NOT NULL,
        fr VARCHAR NOT NULL,
        ja VARCHAR NOT NULL,
        it VARCHAR NOT NULL,
        cn VARCHAR NOT NULL
    );`;
};

/**
 * Generate state table structure and below is given column
 * id: 3901,
      name: 'Badakhshan',
      state_code: 'BDS',
      latitude: '36.73477250',
      longitude: '70.81199530',
      type: null,
 */
export const generateStateTableSQL: any = (): string => {
  return `CREATE TABLE IF NOT EXISTS state (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR NOT NULL,
        state_code VARCHAR NOT NULL,
        latitude VARCHAR NOT NULL,
        longitude VARCHAR NOT NULL,
        type VARCHAR NULL
    );`;
};

/**
 * Generate city table structure and below is given column
 * id: 3901,
 * name: 'Badakhshan',
 * state_code: 'BDS',
 * latitude: '36.73477250',
 * longitude: '70.81199530',
 */
