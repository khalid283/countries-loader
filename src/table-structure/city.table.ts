export const citiesTableSQL = (): string => {
  return `
    CREATE TABLE cities (
        id mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
        name varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
        state_id mediumint(8) unsigned NOT NULL,
        country_id mediumint(8) unsigned NOT NULL,
        latitude decimal(10,8) NOT NULL,
        longitude decimal(11,8) NOT NULL,
        created_at timestamp NOT NULL DEFAULT '2014-01-01 06:31:01',
        updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        flag tinyint(1) NOT NULL DEFAULT '1',
        PRIMARY KEY (id),
        KEY cities_test_ibfk_1 (state_id),
        KEY cities_test_ibfk_2 (country_id),
        CONSTRAINT cities_ibfk_1 FOREIGN KEY (state_id) REFERENCES states (id),
        CONSTRAINT cities_ibfk_2 FOREIGN KEY (country_id) REFERENCES countries (id)
      ) ENGINE=InnoDB AUTO_INCREMENT=149560 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=COMPACT;
    `;
};
