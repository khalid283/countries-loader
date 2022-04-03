export const statesTableSQL = (): string => {
  return `
    CREATE TABLE states (
        id mediumint unsigned NOT NULL AUTO_INCREMENT,
        name varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
        country_id mediumint unsigned NOT NULL,
        country_code char(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
        fips_code varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
        iso2 varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
        type varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
        latitude decimal(10,8) DEFAULT NULL,
        longitude decimal(11,8) DEFAULT NULL,
        created_at timestamp NULL DEFAULT NULL,
        updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        flag tinyint(1) NOT NULL DEFAULT '1',
        PRIMARY KEY (id),
        KEY country_region (country_id),
        CONSTRAINT country_region_final FOREIGN KEY (country_id) REFERENCES countries (id)
      ) ENGINE=InnoDB AUTO_INCREMENT=5072 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=COMPACT;  
    `;
};
