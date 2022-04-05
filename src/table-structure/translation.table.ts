export const countryTableSQL = (): string => {
  return `
    CREATE TABLE translations (
        id mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
        country_id mediumint(8) unsigned NOT NULL,
        kr varchar(255) COLLATE utf8mb4_unicode_ci NULL,
        pt varchar(255) COLLATE utf8mb4_unicode_ci NULL,
        nl varchar(255) COLLATE utf8mb4_unicode_ci NULL,
        hr varchar(255) COLLATE utf8mb4_unicode_ci NULL,
        fa varchar(255) COLLATE utf8mb4_unicode_ci NULL,
        de varchar(255) COLLATE utf8mb4_unicode_ci NULL,
        es varchar(255) COLLATE utf8mb4_unicode_ci NULL,
        fr varchar(255) COLLATE utf8mb4_unicode_ci NULL,
        ja varchar(255) COLLATE utf8mb4_unicode_ci NULL,
        it varchar(255) COLLATE utf8mb4_unicode_ci NULL,
        cn varchar(255) COLLATE utf8mb4_unicode_ci NULL,
        created_at timestamp NULL DEFAULT NULL,
        updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        flag tinyint(1) NOT NULL DEFAULT '1',
        PRIMARY KEY (id),
        KEY translation_ibfk_2 (country_id),
        CONSTRAINT translation_ibfk_2 FOREIGN KEY (country_id) REFERENCES countries (id)
      ) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `;
};
