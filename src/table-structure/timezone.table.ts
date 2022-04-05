export const countryTableSQL = (): string => {
  return `
    CREATE TABLE timezones (
        id mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
        zoneName varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
        gmtOffset varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
        gmtOffsetName varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
        abbreviation varchar(255) COLLATE utf8mb4_unicode_ci NULL,
        tzName varchar(255) COLLATE utf8mb4_unicode_ci NULL,
        created_at timestamp NULL DEFAULT NULL,
        updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        flag tinyint(1) NOT NULL DEFAULT '1',
        PRIMARY KEY (id)
      ) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `;
};
