/* ============================================================
   ДАННЫЕ (посчитаны из «Онлайн-тренировки, 10 недель.xlsx»)
   частица данных — один просмотр тренировки (3755 просмотров)
   ============================================================ */
const WORKOUTS = [{"code": "01-01", "week": 1, "day": "Пн", "type": "Разминка", "trainer": "Анна", "duration": 9.4, "views": 66, "avgDepth": 0.995, "complete": 1.0, "avgRating": 4.7, "nRatings": 33}, {"code": "01-02", "week": 1, "day": "Пн", "type": "Кардио", "trainer": "Анна", "duration": 10.5, "views": 76, "avgDepth": 0.997, "complete": 1.0, "avgRating": 4.65, "nRatings": 40}, {"code": "01-03", "week": 1, "day": "Ср", "type": "Разминка", "trainer": "Анна", "duration": 8.6, "views": 66, "avgDepth": 0.995, "complete": 1.0, "avgRating": 4.67, "nRatings": 36}, {"code": "01-04", "week": 1, "day": "Ср", "type": "Силовая", "trainer": "Богдана", "duration": 15.3, "views": 64, "avgDepth": 0.995, "complete": 1.0, "avgRating": 4.56, "nRatings": 32}, {"code": "01-05", "week": 1, "day": "Пт", "type": "Разминка", "trainer": "Анна", "duration": 11.0, "views": 69, "avgDepth": 0.996, "complete": 1.0, "avgRating": 4.59, "nRatings": 32}, {"code": "01-06", "week": 1, "day": "Пт", "type": "Интенсив", "trainer": "Виталия", "duration": 18.0, "views": 38, "avgDepth": 0.997, "complete": 1.0, "avgRating": 3.9, "nRatings": 21}, {"code": "01-07", "week": 1, "day": "Сб", "type": "Дэнс", "trainer": "Галина", "duration": 22.4, "views": 56, "avgDepth": 0.995, "complete": 1.0, "avgRating": 4.63, "nRatings": 30}, {"code": "01-08", "week": 1, "day": "Вс", "type": "Йога", "trainer": "Диана", "duration": 28.2, "views": 49, "avgDepth": 0.995, "complete": 1.0, "avgRating": 4.96, "nRatings": 28}, {"code": "02-01", "week": 2, "day": "Пн", "type": "Разминка", "trainer": "Богдана", "duration": 11.1, "views": 74, "avgDepth": 0.998, "complete": 1.0, "avgRating": 4.64, "nRatings": 36}, {"code": "02-02", "week": 2, "day": "Пн", "type": "Кардио", "trainer": "Богдана", "duration": 13.7, "views": 69, "avgDepth": 0.996, "complete": 1.0, "avgRating": 4.28, "nRatings": 29}, {"code": "02-03", "week": 2, "day": "Ср", "type": "Разминка", "trainer": "Богдана", "duration": 9.3, "views": 61, "avgDepth": 0.998, "complete": 1.0, "avgRating": 4.5, "nRatings": 32}, {"code": "02-04", "week": 2, "day": "Ср", "type": "Силовая", "trainer": "Виталия", "duration": 15.0, "views": 61, "avgDepth": 0.997, "complete": 1.0, "avgRating": 4.27, "nRatings": 33}, {"code": "02-05", "week": 2, "day": "Пт", "type": "Разминка", "trainer": "Богдана", "duration": 9.6, "views": 48, "avgDepth": 0.995, "complete": 1.0, "avgRating": 4.62, "nRatings": 26}, {"code": "02-06", "week": 2, "day": "Пт", "type": "Интенсив", "trainer": "Анна", "duration": 18.2, "views": 35, "avgDepth": 0.672, "complete": 0.143, "avgRating": 3.0, "nRatings": 2}, {"code": "02-07", "week": 2, "day": "Сб", "type": "Дэнс", "trainer": "Богдана", "duration": 25.6, "views": 53, "avgDepth": 0.995, "complete": 1.0, "avgRating": 4.23, "nRatings": 30}, {"code": "02-08", "week": 2, "day": "Вс", "type": "Йога", "trainer": "Диана", "duration": 26.2, "views": 54, "avgDepth": 0.998, "complete": 1.0, "avgRating": 4.83, "nRatings": 23}, {"code": "03-01", "week": 3, "day": "Пн", "type": "Разминка", "trainer": "Виталия", "duration": 11.0, "views": 56, "avgDepth": 0.997, "complete": 1.0, "avgRating": 4.07, "nRatings": 30}, {"code": "03-02", "week": 3, "day": "Пн", "type": "Кардио", "trainer": "Виталия", "duration": 12.6, "views": 64, "avgDepth": 0.999, "complete": 1.0, "avgRating": 4.13, "nRatings": 39}, {"code": "03-03", "week": 3, "day": "Ср", "type": "Разминка", "trainer": "Виталия", "duration": 9.5, "views": 57, "avgDepth": 0.996, "complete": 1.0, "avgRating": 4.16, "nRatings": 25}, {"code": "03-04", "week": 3, "day": "Ср", "type": "Силовая", "trainer": "Галина", "duration": 16.2, "views": 67, "avgDepth": 0.995, "complete": 1.0, "avgRating": 4.5, "nRatings": 34}, {"code": "03-05", "week": 3, "day": "Пт", "type": "Разминка", "trainer": "Виталия", "duration": 10.5, "views": 48, "avgDepth": 0.998, "complete": 1.0, "avgRating": 4.07, "nRatings": 27}, {"code": "03-06", "week": 3, "day": "Пт", "type": "Интенсив", "trainer": "Галина", "duration": 15.4, "views": 31, "avgDepth": 0.992, "complete": 1.0, "avgRating": 4.53, "nRatings": 17}, {"code": "03-07", "week": 3, "day": "Сб", "type": "Дэнс", "trainer": "Анна", "duration": 20.3, "views": 54, "avgDepth": 0.997, "complete": 1.0, "avgRating": 4.64, "nRatings": 25}, {"code": "03-08", "week": 3, "day": "Вс", "type": "Йога", "trainer": "Галина", "duration": 28.4, "views": 54, "avgDepth": 0.695, "complete": 0.204, "avgRating": 3.0, "nRatings": 1}, {"code": "04-01", "week": 4, "day": "Пн", "type": "Разминка", "trainer": "Галина", "duration": 10.7, "views": 35, "avgDepth": 0.997, "complete": 1.0, "avgRating": 4.59, "nRatings": 22}, {"code": "04-02", "week": 4, "day": "Пн", "type": "Кардио", "trainer": "Галина", "duration": 14.6, "views": 49, "avgDepth": 0.997, "complete": 1.0, "avgRating": 4.7, "nRatings": 27}, {"code": "04-03", "week": 4, "day": "Ср", "type": "Разминка", "trainer": "Галина", "duration": 9.5, "views": 39, "avgDepth": 0.993, "complete": 1.0, "avgRating": 4.43, "nRatings": 23}, {"code": "04-04", "week": 4, "day": "Ср", "type": "Силовая", "trainer": "Анна", "duration": 16.9, "views": 55, "avgDepth": 0.998, "complete": 1.0, "avgRating": 4.78, "nRatings": 23}, {"code": "04-05", "week": 4, "day": "Пт", "type": "Разминка", "trainer": "Галина", "duration": 9.2, "views": 31, "avgDepth": 0.998, "complete": 1.0, "avgRating": 4.38, "nRatings": 13}, {"code": "04-06", "week": 4, "day": "Пт", "type": "Интенсив", "trainer": "Виталия", "duration": 18.8, "views": 35, "avgDepth": 0.995, "complete": 1.0, "avgRating": 4.15, "nRatings": 13}, {"code": "04-07", "week": 4, "day": "Сб", "type": "Дэнс", "trainer": "Галина", "duration": 21.6, "views": 36, "avgDepth": 0.999, "complete": 1.0, "avgRating": 4.67, "nRatings": 21}, {"code": "04-08", "week": 4, "day": "Вс", "type": "Йога", "trainer": "Диана", "duration": 25.1, "views": 50, "avgDepth": 0.996, "complete": 1.0, "avgRating": 4.67, "nRatings": 33}, {"code": "05-01", "week": 5, "day": "Пн", "type": "Разминка", "trainer": "Диана", "duration": 9.2, "views": 54, "avgDepth": 0.996, "complete": 1.0, "avgRating": 4.75, "nRatings": 24}, {"code": "05-02", "week": 5, "day": "Пн", "type": "Кардио", "trainer": "Диана", "duration": 12.1, "views": 68, "avgDepth": 0.993, "complete": 1.0, "avgRating": 4.59, "nRatings": 29}, {"code": "05-03", "week": 5, "day": "Ср", "type": "Разминка", "trainer": "Диана", "duration": 8.7, "views": 55, "avgDepth": 0.996, "complete": 1.0, "avgRating": 4.79, "nRatings": 24}, {"code": "05-04", "week": 5, "day": "Ср", "type": "Силовая", "trainer": "Анна", "duration": 17.4, "views": 58, "avgDepth": 0.993, "complete": 1.0, "avgRating": 4.72, "nRatings": 32}, {"code": "05-05", "week": 5, "day": "Пт", "type": "Разминка", "trainer": "Диана", "duration": 10.7, "views": 45, "avgDepth": 0.997, "complete": 1.0, "avgRating": 4.92, "nRatings": 24}, {"code": "05-06", "week": 5, "day": "Пт", "type": "Интенсив", "trainer": "Анна", "duration": 18.5, "views": 31, "avgDepth": 0.999, "complete": 1.0, "avgRating": 4.73, "nRatings": 15}, {"code": "05-07", "week": 5, "day": "Сб", "type": "Дэнс", "trainer": "Галина", "duration": 26.2, "views": 47, "avgDepth": 0.995, "complete": 1.0, "avgRating": 4.71, "nRatings": 21}, {"code": "05-08", "week": 5, "day": "Вс", "type": "Йога", "trainer": "Диана", "duration": 25.4, "views": 45, "avgDepth": 0.994, "complete": 1.0, "avgRating": 4.84, "nRatings": 25}, {"code": "06-01", "week": 6, "day": "Пн", "type": "Разминка", "trainer": "Анна", "duration": 8.5, "views": 44, "avgDepth": 0.997, "complete": 1.0, "avgRating": 4.54, "nRatings": 24}, {"code": "06-02", "week": 6, "day": "Пн", "type": "Кардио", "trainer": "Анна", "duration": 11.3, "views": 62, "avgDepth": 0.997, "complete": 1.0, "avgRating": 4.68, "nRatings": 31}, {"code": "06-03", "week": 6, "day": "Ср", "type": "Разминка", "trainer": "Анна", "duration": 8.3, "views": 46, "avgDepth": 0.997, "complete": 1.0, "avgRating": 4.59, "nRatings": 22}, {"code": "06-04", "week": 6, "day": "Ср", "type": "Силовая", "trainer": "Богдана", "duration": 15.5, "views": 53, "avgDepth": 0.683, "complete": 0.189, "avgRating": 4.5, "nRatings": 6}, {"code": "06-05", "week": 6, "day": "Пт", "type": "Разминка", "trainer": "Анна", "duration": 8.5, "views": 22, "avgDepth": 0.997, "complete": 1.0, "avgRating": 4.57, "nRatings": 14}, {"code": "06-06", "week": 6, "day": "Пт", "type": "Интенсив", "trainer": "Галина", "duration": 19.3, "views": 18, "avgDepth": 0.998, "complete": 1.0, "avgRating": 5.0, "nRatings": 7}, {"code": "06-07", "week": 6, "day": "Сб", "type": "Дэнс", "trainer": "Богдана", "duration": 26.6, "views": 29, "avgDepth": 0.998, "complete": 1.0, "avgRating": 4.27, "nRatings": 15}, {"code": "06-08", "week": 6, "day": "Вс", "type": "Йога", "trainer": "Диана", "duration": 26.1, "views": 37, "avgDepth": 0.995, "complete": 1.0, "avgRating": 4.86, "nRatings": 21}, {"code": "07-01", "week": 7, "day": "Пн", "type": "Разминка", "trainer": "Богдана", "duration": 11.9, "views": 42, "avgDepth": 0.995, "complete": 1.0, "avgRating": 4.8, "nRatings": 15}, {"code": "07-02", "week": 7, "day": "Пн", "type": "Кардио", "trainer": "Богдана", "duration": 14.5, "views": 52, "avgDepth": 0.994, "complete": 1.0, "avgRating": 4.62, "nRatings": 26}, {"code": "07-03", "week": 7, "day": "Ср", "type": "Разминка", "trainer": "Богдана", "duration": 11.8, "views": 46, "avgDepth": 0.996, "complete": 1.0, "avgRating": 4.44, "nRatings": 25}, {"code": "07-04", "week": 7, "day": "Ср", "type": "Силовая", "trainer": "Виталия", "duration": 17.5, "views": 53, "avgDepth": 0.995, "complete": 1.0, "avgRating": 4.1, "nRatings": 30}, {"code": "07-05", "week": 7, "day": "Пт", "type": "Разминка", "trainer": "Богдана", "duration": 11.3, "views": 37, "avgDepth": 0.998, "complete": 1.0, "avgRating": 4.4, "nRatings": 20}, {"code": "07-06", "week": 7, "day": "Пт", "type": "Интенсив", "trainer": "Виталия", "duration": 18.7, "views": 35, "avgDepth": 0.998, "complete": 1.0, "avgRating": 4.33, "nRatings": 12}, {"code": "07-07", "week": 7, "day": "Сб", "type": "Дэнс", "trainer": "Анна", "duration": 23.7, "views": 43, "avgDepth": 0.998, "complete": 1.0, "avgRating": 4.45, "nRatings": 20}, {"code": "07-08", "week": 7, "day": "Вс", "type": "Йога", "trainer": "Диана", "duration": 25.2, "views": 48, "avgDepth": 0.996, "complete": 1.0, "avgRating": 4.9, "nRatings": 21}, {"code": "08-01", "week": 8, "day": "Пн", "type": "Разминка", "trainer": "Анна", "duration": 8.6, "views": 45, "avgDepth": 0.995, "complete": 1.0, "avgRating": 4.73, "nRatings": 22}, {"code": "08-02", "week": 8, "day": "Пн", "type": "Кардио", "trainer": "Анна", "duration": 11.9, "views": 56, "avgDepth": 0.997, "complete": 1.0, "avgRating": 4.73, "nRatings": 33}, {"code": "08-03", "week": 8, "day": "Ср", "type": "Разминка", "trainer": "Анна", "duration": 8.6, "views": 40, "avgDepth": 0.998, "complete": 1.0, "avgRating": 4.67, "nRatings": 21}, {"code": "08-04", "week": 8, "day": "Ср", "type": "Силовая", "trainer": "Галина", "duration": 15.7, "views": 44, "avgDepth": 0.996, "complete": 1.0, "avgRating": 4.62, "nRatings": 24}, {"code": "08-05", "week": 8, "day": "Пт", "type": "Разминка", "trainer": "Анна", "duration": 11.4, "views": 40, "avgDepth": 0.998, "complete": 1.0, "avgRating": 4.75, "nRatings": 20}, {"code": "08-06", "week": 8, "day": "Пт", "type": "Интенсив", "trainer": "Виталия", "duration": 18.0, "views": 34, "avgDepth": 0.997, "complete": 1.0, "avgRating": 4.04, "nRatings": 23}, {"code": "08-07", "week": 8, "day": "Сб", "type": "Дэнс", "trainer": "Богдана", "duration": 28.7, "views": 41, "avgDepth": 0.737, "complete": 0.268, "avgRating": 3.0, "nRatings": 7}, {"code": "08-08", "week": 8, "day": "Вс", "type": "Йога", "trainer": "Диана", "duration": 25.4, "views": 47, "avgDepth": 0.997, "complete": 1.0, "avgRating": 4.7, "nRatings": 33}, {"code": "09-01", "week": 9, "day": "Пн", "type": "Разминка", "trainer": "Галина", "duration": 8.5, "views": 44, "avgDepth": 0.997, "complete": 1.0, "avgRating": 4.45, "nRatings": 22}, {"code": "09-02", "week": 9, "day": "Пн", "type": "Кардио", "trainer": "Галина", "duration": 14.8, "views": 46, "avgDepth": 0.998, "complete": 1.0, "avgRating": 4.65, "nRatings": 26}, {"code": "09-03", "week": 9, "day": "Ср", "type": "Разминка", "trainer": "Галина", "duration": 8.2, "views": 42, "avgDepth": 0.995, "complete": 1.0, "avgRating": 4.57, "nRatings": 23}, {"code": "09-04", "week": 9, "day": "Ср", "type": "Силовая", "trainer": "Анна", "duration": 17.8, "views": 40, "avgDepth": 0.997, "complete": 1.0, "avgRating": 4.73, "nRatings": 22}, {"code": "09-05", "week": 9, "day": "Пт", "type": "Разминка", "trainer": "Галина", "duration": 9.4, "views": 37, "avgDepth": 0.996, "complete": 1.0, "avgRating": 4.79, "nRatings": 19}, {"code": "09-06", "week": 9, "day": "Пт", "type": "Интенсив", "trainer": "Виталия", "duration": 15.5, "views": 34, "avgDepth": 0.995, "complete": 1.0, "avgRating": 4.32, "nRatings": 22}, {"code": "09-07", "week": 9, "day": "Сб", "type": "Дэнс", "trainer": "Галина", "duration": 25.9, "views": 33, "avgDepth": 0.996, "complete": 1.0, "avgRating": 4.61, "nRatings": 18}, {"code": "09-08", "week": 9, "day": "Вс", "type": "Йога", "trainer": "Диана", "duration": 28.4, "views": 38, "avgDepth": 0.998, "complete": 1.0, "avgRating": 4.8, "nRatings": 15}, {"code": "10-01", "week": 10, "day": "Пн", "type": "Разминка", "trainer": "Диана", "duration": 11.4, "views": 37, "avgDepth": 0.996, "complete": 1.0, "avgRating": 4.84, "nRatings": 19}, {"code": "10-02", "week": 10, "day": "Пн", "type": "Кардио", "trainer": "Диана", "duration": 14.8, "views": 45, "avgDepth": 0.997, "complete": 1.0, "avgRating": 4.77, "nRatings": 22}, {"code": "10-03", "week": 10, "day": "Ср", "type": "Разминка", "trainer": "Диана", "duration": 11.1, "views": 42, "avgDepth": 0.994, "complete": 1.0, "avgRating": 4.88, "nRatings": 16}, {"code": "10-04", "week": 10, "day": "Ср", "type": "Силовая", "trainer": "Виталия", "duration": 16.6, "views": 46, "avgDepth": 0.997, "complete": 1.0, "avgRating": 4.07, "nRatings": 28}, {"code": "10-05", "week": 10, "day": "Пт", "type": "Разминка", "trainer": "Диана", "duration": 8.2, "views": 40, "avgDepth": 0.998, "complete": 1.0, "avgRating": 4.8, "nRatings": 20}, {"code": "10-06", "week": 10, "day": "Пт", "type": "Интенсив", "trainer": "Галина", "duration": 19.8, "views": 41, "avgDepth": 0.998, "complete": 1.0, "avgRating": 4.5, "nRatings": 22}, {"code": "10-07", "week": 10, "day": "Сб", "type": "Дэнс", "trainer": "Богдана", "duration": 24.8, "views": 41, "avgDepth": 0.997, "complete": 1.0, "avgRating": 4.56, "nRatings": 18}, {"code": "10-08", "week": 10, "day": "Вс", "type": "Йога", "trainer": "Диана", "duration": 28.4, "views": 32, "avgDepth": 0.995, "complete": 1.0, "avgRating": 4.84, "nRatings": 19}];
const WEEKLY_BY_TYPE = [{"week": 1, "type": "Разминка", "avgViews": 67, "sessions": 3, "totalViews": 201}, {"week": 1, "type": "Кардио", "avgViews": 76, "sessions": 1, "totalViews": 76}, {"week": 1, "type": "Силовая", "avgViews": 64, "sessions": 1, "totalViews": 64}, {"week": 1, "type": "Интенсив", "avgViews": 38, "sessions": 1, "totalViews": 38}, {"week": 1, "type": "Дэнс", "avgViews": 56, "sessions": 1, "totalViews": 56}, {"week": 1, "type": "Йога", "avgViews": 49, "sessions": 1, "totalViews": 49}, {"week": 2, "type": "Разминка", "avgViews": 61, "sessions": 3, "totalViews": 183}, {"week": 2, "type": "Кардио", "avgViews": 69, "sessions": 1, "totalViews": 69}, {"week": 2, "type": "Силовая", "avgViews": 61, "sessions": 1, "totalViews": 61}, {"week": 2, "type": "Интенсив", "avgViews": 35, "sessions": 1, "totalViews": 35}, {"week": 2, "type": "Дэнс", "avgViews": 53, "sessions": 1, "totalViews": 53}, {"week": 2, "type": "Йога", "avgViews": 54, "sessions": 1, "totalViews": 54}, {"week": 3, "type": "Разминка", "avgViews": 53.7, "sessions": 3, "totalViews": 161}, {"week": 3, "type": "Кардио", "avgViews": 64, "sessions": 1, "totalViews": 64}, {"week": 3, "type": "Силовая", "avgViews": 67, "sessions": 1, "totalViews": 67}, {"week": 3, "type": "Интенсив", "avgViews": 31, "sessions": 1, "totalViews": 31}, {"week": 3, "type": "Дэнс", "avgViews": 54, "sessions": 1, "totalViews": 54}, {"week": 3, "type": "Йога", "avgViews": 54, "sessions": 1, "totalViews": 54}, {"week": 4, "type": "Разминка", "avgViews": 35, "sessions": 3, "totalViews": 105}, {"week": 4, "type": "Кардио", "avgViews": 49, "sessions": 1, "totalViews": 49}, {"week": 4, "type": "Силовая", "avgViews": 55, "sessions": 1, "totalViews": 55}, {"week": 4, "type": "Интенсив", "avgViews": 35, "sessions": 1, "totalViews": 35}, {"week": 4, "type": "Дэнс", "avgViews": 36, "sessions": 1, "totalViews": 36}, {"week": 4, "type": "Йога", "avgViews": 50, "sessions": 1, "totalViews": 50}, {"week": 5, "type": "Разминка", "avgViews": 51.3, "sessions": 3, "totalViews": 154}, {"week": 5, "type": "Кардио", "avgViews": 68, "sessions": 1, "totalViews": 68}, {"week": 5, "type": "Силовая", "avgViews": 58, "sessions": 1, "totalViews": 58}, {"week": 5, "type": "Интенсив", "avgViews": 31, "sessions": 1, "totalViews": 31}, {"week": 5, "type": "Дэнс", "avgViews": 47, "sessions": 1, "totalViews": 47}, {"week": 5, "type": "Йога", "avgViews": 45, "sessions": 1, "totalViews": 45}, {"week": 6, "type": "Разминка", "avgViews": 37.3, "sessions": 3, "totalViews": 112}, {"week": 6, "type": "Кардио", "avgViews": 62, "sessions": 1, "totalViews": 62}, {"week": 6, "type": "Силовая", "avgViews": 53, "sessions": 1, "totalViews": 53}, {"week": 6, "type": "Интенсив", "avgViews": 18, "sessions": 1, "totalViews": 18}, {"week": 6, "type": "Дэнс", "avgViews": 29, "sessions": 1, "totalViews": 29}, {"week": 6, "type": "Йога", "avgViews": 37, "sessions": 1, "totalViews": 37}, {"week": 7, "type": "Разминка", "avgViews": 41.7, "sessions": 3, "totalViews": 125}, {"week": 7, "type": "Кардио", "avgViews": 52, "sessions": 1, "totalViews": 52}, {"week": 7, "type": "Силовая", "avgViews": 53, "sessions": 1, "totalViews": 53}, {"week": 7, "type": "Интенсив", "avgViews": 35, "sessions": 1, "totalViews": 35}, {"week": 7, "type": "Дэнс", "avgViews": 43, "sessions": 1, "totalViews": 43}, {"week": 7, "type": "Йога", "avgViews": 48, "sessions": 1, "totalViews": 48}, {"week": 8, "type": "Разминка", "avgViews": 41.7, "sessions": 3, "totalViews": 125}, {"week": 8, "type": "Кардио", "avgViews": 56, "sessions": 1, "totalViews": 56}, {"week": 8, "type": "Силовая", "avgViews": 44, "sessions": 1, "totalViews": 44}, {"week": 8, "type": "Интенсив", "avgViews": 34, "sessions": 1, "totalViews": 34}, {"week": 8, "type": "Дэнс", "avgViews": 41, "sessions": 1, "totalViews": 41}, {"week": 8, "type": "Йога", "avgViews": 47, "sessions": 1, "totalViews": 47}, {"week": 9, "type": "Разминка", "avgViews": 41, "sessions": 3, "totalViews": 123}, {"week": 9, "type": "Кардио", "avgViews": 46, "sessions": 1, "totalViews": 46}, {"week": 9, "type": "Силовая", "avgViews": 40, "sessions": 1, "totalViews": 40}, {"week": 9, "type": "Интенсив", "avgViews": 34, "sessions": 1, "totalViews": 34}, {"week": 9, "type": "Дэнс", "avgViews": 33, "sessions": 1, "totalViews": 33}, {"week": 9, "type": "Йога", "avgViews": 38, "sessions": 1, "totalViews": 38}, {"week": 10, "type": "Разминка", "avgViews": 39.7, "sessions": 3, "totalViews": 119}, {"week": 10, "type": "Кардио", "avgViews": 45, "sessions": 1, "totalViews": 45}, {"week": 10, "type": "Силовая", "avgViews": 46, "sessions": 1, "totalViews": 46}, {"week": 10, "type": "Интенсив", "avgViews": 41, "sessions": 1, "totalViews": 41}, {"week": 10, "type": "Дэнс", "avgViews": 41, "sessions": 1, "totalViews": 41}, {"week": 10, "type": "Йога", "avgViews": 32, "sessions": 1, "totalViews": 32}];
const WEEKLY_ALL = [{"week": 1, "avgViews": 60.5, "totalViews": 484}, {"week": 2, "avgViews": 56.9, "totalViews": 455}, {"week": 3, "avgViews": 53.9, "totalViews": 431}, {"week": 4, "avgViews": 41.2, "totalViews": 330}, {"week": 5, "avgViews": 50.4, "totalViews": 403}, {"week": 6, "avgViews": 38.9, "totalViews": 311}, {"week": 7, "avgViews": 44.5, "totalViews": 356}, {"week": 8, "avgViews": 43.4, "totalViews": 347}, {"week": 9, "avgViews": 39.2, "totalViews": 314}, {"week": 10, "avgViews": 40.5, "totalViews": 324}];
const TRAINER_TYPE = [{"trainer": "Анна", "type": "Разминка", "views": 438, "avgRating": 4.65, "avgDepth": 0.996}, {"trainer": "Анна", "type": "Кардио", "views": 194, "avgRating": 4.68, "avgDepth": 0.997}, {"trainer": "Богдана", "type": "Силовая", "views": 117, "avgRating": 4.55, "avgDepth": 0.854}, {"trainer": "Виталия", "type": "Интенсив", "views": 176, "avgRating": 4.13, "avgDepth": 0.996}, {"trainer": "Галина", "type": "Дэнс", "views": 172, "avgRating": 4.66, "avgDepth": 0.996}, {"trainer": "Диана", "type": "Йога", "views": 400, "avgRating": 4.81, "avgDepth": 0.996}, {"trainer": "Богдана", "type": "Разминка", "views": 308, "avgRating": 4.56, "avgDepth": 0.997}, {"trainer": "Богдана", "type": "Кардио", "views": 121, "avgRating": 4.44, "avgDepth": 0.995}, {"trainer": "Виталия", "type": "Силовая", "views": 160, "avgRating": 4.15, "avgDepth": 0.996}, {"trainer": "Анна", "type": "Интенсив", "views": 66, "avgRating": 4.53, "avgDepth": 0.825}, {"trainer": "Богдана", "type": "Дэнс", "views": 164, "avgRating": 4.2, "avgDepth": 0.931}, {"trainer": "Виталия", "type": "Разминка", "views": 161, "avgRating": 4.1, "avgDepth": 0.997}, {"trainer": "Виталия", "type": "Кардио", "views": 64, "avgRating": 4.13, "avgDepth": 0.999}, {"trainer": "Галина", "type": "Силовая", "views": 111, "avgRating": 4.55, "avgDepth": 0.995}, {"trainer": "Галина", "type": "Интенсив", "views": 90, "avgRating": 4.59, "avgDepth": 0.996}, {"trainer": "Анна", "type": "Дэнс", "views": 97, "avgRating": 4.56, "avgDepth": 0.997}, {"trainer": "Галина", "type": "Йога", "views": 54, "avgRating": 3.0, "avgDepth": 0.695}, {"trainer": "Галина", "type": "Разминка", "views": 228, "avgRating": 4.54, "avgDepth": 0.996}, {"trainer": "Галина", "type": "Кардио", "views": 95, "avgRating": 4.68, "avgDepth": 0.997}, {"trainer": "Анна", "type": "Силовая", "views": 153, "avgRating": 4.74, "avgDepth": 0.996}, {"trainer": "Диана", "type": "Разминка", "views": 273, "avgRating": 4.83, "avgDepth": 0.996}, {"trainer": "Диана", "type": "Кардио", "views": 113, "avgRating": 4.67, "avgDepth": 0.995}];
const TRAINER_SUMMARY = [{"trainer": "Анна", "views": 948, "avgRating": 4.66, "avgDepth": 0.984, "types": ["Разминка", "Кардио", "Силовая", "Интенсив", "Дэнс"]}, {"trainer": "Богдана", "views": 710, "avgRating": 4.46, "avgDepth": 0.958, "types": ["Разминка", "Кардио", "Силовая", "Дэнс"]}, {"trainer": "Виталия", "views": 561, "avgRating": 4.13, "avgDepth": 0.997, "types": ["Разминка", "Кардио", "Силовая", "Интенсив"]}, {"trainer": "Галина", "views": 750, "avgRating": 4.59, "avgDepth": 0.974, "types": ["Разминка", "Кардио", "Силовая", "Интенсив", "Дэнс", "Йога"]}, {"trainer": "Диана", "views": 786, "avgRating": 4.8, "avgDepth": 0.996, "types": ["Разминка", "Кардио", "Йога"]}];
const SEGMENTS = [{"segment": "Низкая", "users": 26, "views": 360, "dist": {"Разминка": 0.514, "Кардио": 0.142, "Силовая": 0.103, "Интенсив": 0.014, "Дэнс": 0.142, "Йога": 0.086}, "counts": {"Разминка": 185, "Кардио": 51, "Силовая": 37, "Интенсив": 5, "Дэнс": 51, "Йога": 31}}, {"segment": "Средняя", "users": 46, "views": 1608, "dist": {"Разминка": 0.373, "Кардио": 0.168, "Силовая": 0.152, "Интенсив": 0.073, "Дэнс": 0.107, "Йога": 0.127}, "counts": {"Разминка": 599, "Кардио": 270, "Силовая": 245, "Интенсив": 118, "Дэнс": 172, "Йога": 204}}, {"segment": "Высокая", "users": 29, "views": 1787, "dist": {"Разминка": 0.349, "Кардио": 0.149, "Силовая": 0.145, "Интенсив": 0.117, "Дэнс": 0.118, "Йога": 0.123}, "counts": {"Разминка": 624, "Кардио": 266, "Силовая": 259, "Интенсив": 209, "Дэнс": 210, "Йога": 219}}];
const TRAINERS = ["Анна", "Богдана", "Виталия", "Галина", "Диана"];

const TYPE_ORDER = ['Разминка', 'Кардио', 'Силовая', 'Интенсив', 'Дэнс', 'Йога'];
const COLOR = {
  'Разминка': 'var(--razm)', 'Кардио': 'var(--kardio)', 'Силовая': 'var(--sil)',
  'Интенсив': 'var(--intens)', 'Дэнс': 'var(--dance)', 'Йога': 'var(--yoga)',
};
const DEPTH_BAD = 0.85; // порог «брошенной» тренировки

/* ============================================================
   СОСТОЯНИЕ И КРОСС-ФИЛЬТРАЦИЯ
   ============================================================ */
const state = { type: null, trainer: null };
const updaters = [];

function setFilter(patch) {
  Object.assign(state, patch);
  renderFilterBar();
  updaters.forEach(fn => fn(state));
}
function toggleType(t)    { setFilter({ type: state.type === t ? null : t }); }
function toggleTrainer(tr){ setFilter({ trainer: state.trainer === tr ? null : tr }); }
function resetFilter()    { setFilter({ type: null, trainer: null }); }

function renderFilterBar() {
  const active = document.getElementById('filter-active');
  const reset = document.getElementById('filter-reset');
  const hint = document.querySelector('.filter-hint');
  const parts = [];
  if (state.type) parts.push('тип: ' + state.type);
  if (state.trainer) parts.push('тренер: ' + state.trainer);
  if (parts.length) {
    active.textContent = 'Фильтр — ' + parts.join(' · ');
    active.hidden = false; reset.hidden = false; hint.style.display = 'none';
  } else {
    active.hidden = true; reset.hidden = true; hint.style.display = '';
  }
  // legend chips
  document.querySelectorAll('.legend-chip').forEach(ch => {
    const t = ch.dataset.type;
    ch.classList.toggle('active', state.type === t);
    ch.classList.toggle('dim', state.type && state.type !== t);
  });
}
document.getElementById('filter-reset').addEventListener('click', resetFilter);

/* helpers */
let _tip;
function tip() {
  if (!_tip) { _tip = document.createElement('div'); _tip.className = 'd3-tooltip'; document.body.appendChild(_tip); }
  return _tip;
}
function showTip(evt, html) {
  const t = tip(); t.innerHTML = html; t.style.opacity = 1;
  const r = t.getBoundingClientRect();
  let lx = evt.clientX + 15, ly = evt.clientY - 10;
  if (lx + r.width > window.innerWidth - 8) lx = evt.clientX - r.width - 15;
  if (ly + r.height > window.innerHeight - 8) ly = window.innerHeight - r.height - 8;
  if (ly < 8) ly = 8;
  t.style.left = lx + 'px'; t.style.top = ly + 'px';
}
function hideTip() { if (_tip) _tip.style.opacity = 0; }
function stars(r) { const f = Math.round(r); return '★'.repeat(f) + '☆'.repeat(5 - f); }

/* подмножество тренировок под активный фильтр */
function filteredWorkouts(st) {
  return WORKOUTS.filter(d =>
    (!st.type || d.type === st.type) && (!st.trainer || d.trainer === st.trainer));
}

/* ============================================================
   KPI / ФАКТОИДЫ — пересчитываются под активный фильтр
   ============================================================ */
(function kpi() {
  const el = document.getElementById('kpi');
  const pct = x => (x > 0 ? '+' : '−') + Math.abs(Math.round(x * 100)) + '%';

  function render(st) {
    const sub = filteredWorkouts(st);
    const tot = d3.sum(sub, d => d.views) || 0;
    const meanViews = sub.length ? d3.mean(sub, d => d.views) : 0;
    const wRating = tot ? d3.sum(sub, d => d.avgRating * d.views) / tot : 0;
    const wDepth = tot ? d3.sum(sub, d => d.avgDepth * d.views) / tot : 0;
    const byW = d3.rollups(sub, v => d3.mean(v, d => d.views), d => d.week).sort((a, b) => a[0] - b[0]);
    let trend = null, fw, lw;
    if (byW.length >= 2) { fw = byW[0][0]; lw = byW[byW.length - 1][0]; trend = byW[byW.length - 1][1] / byW[0][1] - 1; }
    const ctx = st.type && st.trainer ? `${st.type} · ${st.trainer}`
      : st.type ? `тип: ${st.type}` : st.trainer ? `тренер: ${st.trainer}` : 'все тренировки';

    const items = [
      { val: Math.round(meanViews), label: 'в среднем просмотров на тренировку', cls: '' },
      { val: trend == null ? '—' : pct(trend), sub: '', cls: trend == null ? '' : (trend < 0 ? 'down' : 'up'),
        label: trend == null ? 'тренд вовлечённости' : `тренд вовлечённости: Н${fw} → Н${lw}` },
      { val: wRating.toFixed(2), sub: '★', cls: 'up', label: 'средняя оценка пользователей' },
      { val: Math.round(wDepth * 100) + '%', cls: wDepth < 0.9 ? 'down' : '', label: 'средний досмотр тренировки' },
    ];
    el.innerHTML = items.map(it => `
      <div class="kpi">
        <div class="kpi-val ${it.cls}">${it.val}${it.sub ? ' <small>' + it.sub + '</small>' : ''}</div>
        <div class="kpi-label">${it.label}</div>
        <div class="kpi-ctx">${ctx} · ${sub.length} трен.</div>
      </div>`).join('');
  }
  updaters.push(render);
  render(state);
})();

/* ============================================================
   ЛЕГЕНДА-ФИЛЬТР ПО ТИПАМ
   ============================================================ */
(function legend() {
  const el = document.getElementById('legend-type');
  TYPE_ORDER.forEach(t => {
    const chip = document.createElement('div');
    chip.className = 'legend-chip';
    chip.dataset.type = t;
    chip.style.color = COLOR[t].replace('var(', '').replace(')', '') ? COLOR[t] : null;
    chip.innerHTML = `<span class="legend-dot" style="background:${COLOR[t]}"></span>${t}`;
    chip.style.color = COLOR[t];
    chip.addEventListener('click', () => toggleType(t));
    el.appendChild(chip);
  });
  const size = document.createElement('div');
  size.className = 'legend-size-hint';
  size.innerHTML = '<span class="sz sz-s"></span><span class="sz sz-l"></span> размер кружка — длительность';
  el.appendChild(size);
})();

/* ============================================================
   ГРАФИК 1 (ГЛАВНЫЙ) — «ПУЛЬС» ПО НЕДЕЛЯМ × ТИПАМ
   гранулярность снижена: вместо 80 тренировок — среднее
   по типу за неделю (до 6 «пульсов» в каждой из 10 недель)
   ============================================================ */
(function main() {
  const svg = d3.select('#chart-main');
  const W = 760, H = 740, m = { t: 24, r: 74, b: 52, l: 46 };
  svg.attr('viewBox', `0 0 ${W} ${H}`);

  // --- агрегируем WORKOUTS до (неделя × тип) ---
  const grp = d3.rollup(WORKOUTS, v => ({
    avgViews: d3.mean(v, d => d.views),
    avgDur: d3.mean(v, d => d.duration),
    avgDepth: d3.mean(v, d => d.avgDepth),
    avgRating: d3.mean(v, d => d.avgRating),
    n: v.length,
  }), d => d.week, d => d.type);
  const cells = [];
  for (let w = 1; w <= 10; w++) {
    TYPE_ORDER.forEach(t => {
      const r = grp.get(w)?.get(t);
      if (r) cells.push({ week: w, type: t, ...r });
    });
  }

  const x = d3.scalePoint().domain(d3.range(1, 11)).range([m.l, W - m.r]).padding(0.5);
  const step = x(2) - x(1);
  const half = Math.min(step * 0.40, 22);
  const sub = d3.scalePoint().domain(TYPE_ORDER).range([-half, half]);
  const y = d3.scaleLinear().domain([0, 80]).range([H - m.b, m.t]);
  const rScale = d3.scaleSqrt().domain([8, 29]).range([3.5, 10]);
  const cx = d => x(d.week) + sub(d.type);

  // чередование недель — фон
  for (let w = 2; w <= 10; w += 2) {
    svg.append('rect').attr('x', x(w) - step / 2).attr('y', m.t - 6)
      .attr('width', step).attr('height', H - m.t - m.b + 6)
      .attr('fill', 'var(--band-even)');
  }
  // сетка по Y
  [0, 20, 40, 60, 80].forEach(v => {
    svg.append('line').attr('x1', m.l).attr('x2', W - m.r).attr('y1', y(v)).attr('y2', y(v))
      .attr('stroke', v === 0 ? 'var(--baseline)' : 'var(--gridline)').attr('stroke-width', v === 0 ? 1 : 0.6);
    svg.append('text').attr('x', m.l - 8).attr('y', y(v) + 4).attr('text-anchor', 'end')
      .attr('font-size', 10).attr('fill', 'var(--text-muted)').text(v);
  });
  for (let w = 1; w <= 10; w++) {
    svg.append('text').attr('x', x(w)).attr('y', H - m.b + 18).attr('text-anchor', 'middle')
      .attr('font-size', 10).attr('font-weight', 600).attr('fill', 'var(--text-secondary)').text('Н' + w);
  }
  svg.append('text').attr('x', (m.l + W - m.r) / 2).attr('y', H - 6).attr('text-anchor', 'middle')
    .attr('font-size', 10.5).attr('fill', 'var(--text-secondary)').text('Неделя программы');
  svg.append('text').attr('transform', 'rotate(-90)').attr('x', -(m.t + (H - m.b - m.t) / 2)).attr('y', 13)
    .attr('text-anchor', 'middle').attr('font-size', 10.5).attr('fill', 'var(--text-secondary)')
    .text('Среднее число просмотров');

  // --- тонкие линии тренда по каждому типу (связывают пульсы) ---
  const lineGen = d3.line().x(d => cx(d)).y(d => y(d.avgViews)).curve(d3.curveMonotoneX);
  const typeG = {};
  TYPE_ORDER.forEach(t => {
    const arr = cells.filter(d => d.type === t).sort((a, b) => a.week - b.week);
    const g = svg.append('g').attr('class', 'ptype').attr('data-type', t);
    typeG[t] = g;
    g.append('path').datum(arr).attr('class', 'tline').attr('d', lineGen).attr('fill', 'none')
      .attr('stroke', COLOR[t]).attr('stroke-width', 1.6).attr('opacity', 0.3);
    // стебли + кружки
    const stems = g.selectAll('g.pulse').data(arr).enter().append('g')
      .attr('class', 'pulse').style('cursor', 'pointer').on('click', () => toggleType(t))
      .on('mouseenter', (e, d) => showTip(e,
        `<div class="tt-title" style="color:${COLOR[t]}">${t} · Неделя ${d.week}</div>` +
        `<div class="tt-row"><span class="tt-label">Ср. просмотров</span><span class="tt-val">${d.avgViews.toFixed(0)}</span></div>` +
        `<div class="tt-row"><span class="tt-label">Длительность</span><span class="tt-val">${d.avgDur.toFixed(1)} мин</span></div>` +
        `<div class="tt-row"><span class="tt-label">Глубина</span><span class="tt-val">${Math.round(d.avgDepth * 100)}%</span></div>` +
        `<div class="tt-row"><span class="tt-label">Оценка</span><span class="tt-val">${d.avgRating.toFixed(2)}</span></div>` +
        `<div class="tt-row"><span class="tt-label">Тренировок в среднем</span><span class="tt-val">${d.n}</span></div>`))
      .on('mousemove', e => showTip(e, tip().innerHTML)).on('mouseleave', hideTip);
    stems.append('line').attr('x1', cx).attr('x2', cx).attr('y1', y(0)).attr('y2', d => y(d.avgViews))
      .attr('stroke', COLOR[t]).attr('stroke-width', 1.8).attr('opacity', 0.45);
    stems.append('circle').attr('cx', cx).attr('cy', d => y(d.avgViews)).attr('r', d => rScale(d.avgDur))
      .attr('fill', COLOR[t]).attr('opacity', 0.9)
      .attr('stroke', 'var(--surface-card)').attr('stroke-width', 1);
  });

  // --- средняя по всем тренировкам (общий тренд) ---
  const avgLine = d3.line().x(d => x(d.week)).y(d => y(d.avgViews)).curve(d3.curveMonotoneX);
  svg.append('path').datum(WEEKLY_ALL).attr('class', 'avg-line').attr('d', avgLine)
    .attr('fill', 'none').attr('stroke', 'var(--text-secondary)').attr('stroke-width', 3)
    .attr('stroke-dasharray', '2,4').attr('opacity', 0.85).attr('pointer-events', 'none');
  svg.append('text').attr('class', 'avg-line').attr('x', W - m.r + 10).attr('y', y(WEEKLY_ALL[9].avgViews) + 3)
    .attr('font-size', 9.5).attr('font-weight', 700).attr('fill', 'var(--text-secondary)')
    .attr('pointer-events', 'none').text('средняя');

  updaters.push(st => {
    TYPE_ORDER.forEach(t => {
      const g = typeG[t];
      const dim = st.type && st.type !== t;
      g.classed('fade', dim);
      g.select('.tline').attr('opacity', dim ? 0.08 : (t === st.type ? 0.6 : 0.3))
        .attr('stroke-width', t === st.type ? 2.4 : 1.6);
    });
    svg.selectAll('.avg-line').classed('soft', !!st.type);
  });
})();

/* ============================================================
   ГРАФИК 2 — ТРЕНЕРЫ × ТИП (хитмап по оценке)
   ============================================================ */
(function trainers() {
  const svg = d3.select('#chart-trainers');
  const rows = TRAINERS, cols = TYPE_ORDER;
  const cw = 46, ch = 34, m = { t: 44, r: 54, b: 10, l: 66 };
  const W = m.l + cols.length * cw + m.r, H = m.t + rows.length * ch + m.b;
  svg.attr('viewBox', `0 0 ${W} ${H}`);
  const lut = {};
  TRAINER_TYPE.forEach(d => lut[d.trainer + '|' + d.type] = d);
  const color = d3.scaleLinear().domain([3.0, 4.2, 5.0])
    .range(['color-mix(in srgb, var(--accent) 6%, var(--surface))',
            'color-mix(in srgb, var(--accent) 40%, var(--surface))',
            'var(--accent)']);
  // использую числовую альфу через rgba поверх accent — упрощённо через opacity
  const alpha = d3.scaleLinear().domain([4.0, 5.0]).range([0.14, 1]).clamp(true);

  // заголовки колонок (типы) — кликабельно
  cols.forEach((c, j) => {
    const g = svg.append('g').attr('class', 'col-head').attr('data-type', c)
      .style('cursor', 'pointer').on('click', () => toggleType(c));
    g.append('text').attr('x', m.l + j * cw + cw / 2).attr('y', m.t - 22)
      .attr('text-anchor', 'start').attr('transform', `rotate(-32 ${m.l + j * cw + cw / 2} ${m.t - 22})`)
      .attr('font-size', 10).attr('font-weight', 600).attr('fill', COLOR[c]).text(c);
  });
  // строки (тренеры)
  rows.forEach((tr, i) => {
    const yy = m.t + i * ch;
    const sum = TRAINER_SUMMARY.find(s => s.trainer === tr);
    const rowG = svg.append('g').attr('class', 'tr-row').attr('data-trainer', tr);
    rowG.append('text').attr('x', m.l - 10).attr('y', yy + ch / 2 + 4).attr('text-anchor', 'end')
      .attr('font-size', 11).attr('font-weight', 600).attr('fill', 'var(--text-secondary)')
      .style('cursor', 'pointer').text(tr).on('click', () => toggleTrainer(tr));
    cols.forEach((c, j) => {
      const d = lut[tr + '|' + c];
      const xx = m.l + j * cw;
      if (!d) {
        svg.append('rect').attr('x', xx + 2).attr('y', yy + 2).attr('width', cw - 4).attr('height', ch - 4)
          .attr('rx', 4).attr('fill', 'none').attr('stroke', 'var(--gridline)').attr('stroke-dasharray', '2,2');
        return;
      }
      const cell = rowG.append('g').attr('class', 'cell').attr('data-type', c).attr('data-trainer', tr)
        .style('cursor', 'pointer')
        .on('click', () => setFilter({ type: state.type === c && state.trainer === tr ? null : c,
                                       trainer: state.type === c && state.trainer === tr ? null : tr }))
        .on('mouseenter', e => showTip(e,
          `<div class="tt-title">${tr} · ${c}</div>` +
          `<div class="tt-row"><span class="tt-label">Оценка</span><span class="tt-val"><span class="tt-stars">${stars(d.avgRating)}</span> ${d.avgRating.toFixed(2)}</span></div>` +
          `<div class="tt-row"><span class="tt-label">Просмотров</span><span class="tt-val">${d.views}</span></div>` +
          `<div class="tt-row"><span class="tt-label">Глубина</span><span class="tt-val">${Math.round(d.avgDepth * 100)}%</span></div>` +
          (d.avgDepth < DEPTH_BAD ? `<div class="tt-flag">⚠ часто бросают</div>` : '')))
        .on('mousemove', e => showTip(e, tip().innerHTML)).on('mouseleave', hideTip);
      cell.append('rect').attr('x', xx + 2).attr('y', yy + 2).attr('width', cw - 4).attr('height', ch - 4)
        .attr('rx', 4).attr('fill', COLOR[c]).attr('opacity', alpha(d.avgRating));
      cell.append('text').attr('x', xx + cw / 2).attr('y', yy + ch / 2 + 4).attr('text-anchor', 'middle')
        .attr('font-size', 10.5).attr('font-weight', 700)
        .attr('fill', d.avgRating >= 4.5 ? '#fff' : 'var(--text-primary)')
        .attr('pointer-events', 'none').text(d.avgRating.toFixed(1));
      if (d.avgDepth < DEPTH_BAD) {
        cell.append('text').attr('x', xx + cw - 6).attr('y', yy + 12).attr('text-anchor', 'end')
          .attr('font-size', 10).attr('pointer-events', 'none').text('⚠');
      }
    });
    // итоговая оценка тренера
    svg.append('text').attr('x', W - m.r + 8).attr('y', yy + ch / 2 + 4)
      .attr('font-size', 11).attr('font-weight', 700).attr('fill', 'var(--text-primary)')
      .text('⌀ ' + sum.avgRating.toFixed(2));
  });

  updaters.push(st => {
    svg.selectAll('.tr-row').each(function () {
      const tr = this.getAttribute('data-trainer');
      d3.select(this).classed('fade', st.trainer && st.trainer !== tr);
    });
    svg.selectAll('.cell').each(function () {
      const c = this.getAttribute('data-type'), tr = this.getAttribute('data-trainer');
      const off = (st.type && st.type !== c) || (st.trainer && st.trainer !== tr);
      d3.select(this).classed('fade', off);
    });
    svg.selectAll('.col-head').each(function () {
      d3.select(this).classed('fade', st.type && st.type !== this.getAttribute('data-type'));
    });
  });

  // шкала оценки
  document.getElementById('rating-scale').innerHTML =
    '<span>3,0</span><span class="bar"></span><span>5,0 ★</span>';
})();

/* ============================================================
   ГРАФИК 3 — КАНДИДАТЫ НА ПЕРЕЗАПИСЬ (светофор-карточка)
   худшие тренировки: прогресс-бар досмотра + звёзды оценки,
   красным — то, что ниже нормы (брошенные / низкая оценка)
   ============================================================ */
(function quality() {
  const svg = d3.select('#chart-quality');
  const RATING_OK = 4.3;
  const cand = WORKOUTS
    .filter(d => d.avgDepth < DEPTH_BAD || d.avgRating < 4.15)
    .sort((a, b) => {
      const aa = a.avgDepth < DEPTH_BAD, ba = b.avgDepth < DEPTH_BAD;
      if (aa !== ba) return aa ? -1 : 1;
      if (aa && ba) return a.avgDepth - b.avgDepth;
      return a.avgRating - b.avgRating;
    }).slice(0, 8);

  const W = 560, m = { t: 30, r: 12, b: 26, l: 12 };
  const rowH = 33, H = m.t + cand.length * rowH + m.b;
  svg.attr('viewBox', `0 0 ${W} ${H}`);

  // геометрия колонок
  const codeX = 20, labW = 176;
  const dX0 = codeX + labW, dX1 = dX0 + 128;          // бар досмотра
  const starX = dX1 + 40;                              // звёзды оценки
  const dScale = d3.scaleLinear().domain([0.5, 1]).range([dX0, dX1]).clamp(true);

  // заголовки колонок
  const head = (x, t, anchor = 'start') => svg.append('text').attr('x', x).attr('y', 15)
    .attr('text-anchor', anchor).attr('font-size', 10).attr('font-weight', 700)
    .attr('fill', 'var(--text-muted)').text(t);
  head(codeX, 'Тренировка');
  head(dX0, 'Досмотр');
  head(starX, 'Оценка');

  const rows = svg.selectAll('g.cand').data(cand).enter().append('g')
    .attr('class', 'cand').attr('data-type', d => d.type).attr('data-trainer', d => d.trainer)
    .style('cursor', 'pointer')
    .on('mouseenter', (e, d) => showTip(e,
      `<div class="tt-title" style="color:${COLOR[d.type]}">${d.type} · ${d.code}</div>` +
      `<div class="tt-row"><span class="tt-label">Тренер</span><span class="tt-val">${d.trainer}</span></div>` +
      `<div class="tt-row"><span class="tt-label">Досмотр</span><span class="tt-val">${Math.round(d.avgDepth * 100)}%</span></div>` +
      `<div class="tt-row"><span class="tt-label">Оценка</span><span class="tt-val"><span class="tt-stars">${stars(d.avgRating)}</span> ${d.avgRating.toFixed(2)}</span></div>` +
      `<div class="tt-row"><span class="tt-label">Просмотров</span><span class="tt-val">${d.views}</span></div>` +
      `<div class="tt-row"><span class="tt-label">Неделя ${d.week}</span><span class="tt-val">${d.day}, ${d.duration} мин</span></div>` +
      (d.avgDepth < DEPTH_BAD ? `<div class="tt-flag">⚠ бросают на середине</div>` :
       d.avgRating < RATING_OK ? `<div class="tt-flag">⚠ низкая оценка</div>` : '')))
    .on('mousemove', e => showTip(e, tip().innerHTML)).on('mouseleave', hideTip)
    .on('click', (e, d) => setFilter({ type: state.type === d.type ? null : d.type,
      trainer: state.trainer === d.trainer ? null : d.trainer }));

  rows.each(function (d, i) {
    const g = d3.select(this);
    const yt = m.t + i * rowH, yc = yt + rowH / 2;
    const lowDepth = d.avgDepth < DEPTH_BAD;
    const lowRate = d.avgRating < RATING_OK;

    g.append('rect').attr('x', 2).attr('y', yt + 2).attr('width', W - 4).attr('height', rowH - 4)
      .attr('rx', 8).attr('fill', lowDepth ? 'var(--risk)' : 'transparent');

    // тип + код + тренер
    g.append('circle').attr('cx', codeX - 6).attr('cy', yc).attr('r', 4).attr('fill', COLOR[d.type]);
    const lab = g.append('text').attr('x', codeX + 4).attr('y', yc + 3.5);
    lab.append('tspan').attr('font-size', 11.5).attr('font-weight', 700)
      .attr('fill', 'var(--text-primary)').text(d.code);
    lab.append('tspan').attr('font-size', 10).attr('fill', 'var(--text-muted)')
      .text('  ' + d.type + ' · ' + d.trainer);

    // прогресс-бар досмотра
    g.append('rect').attr('x', dX0).attr('y', yc - 5).attr('width', dX1 - dX0).attr('height', 10)
      .attr('rx', 5).attr('fill', 'var(--gridline)').attr('opacity', 0.55);
    g.append('rect').attr('x', dX0).attr('y', yc - 5).attr('width', Math.max(3, dScale(d.avgDepth) - dX0))
      .attr('height', 10).attr('rx', 5).attr('fill', lowDepth ? 'var(--danger)' : 'var(--sil)');
    g.append('text').attr('x', dX1 + 6).attr('y', yc + 3.5).attr('font-size', 10.5)
      .attr('font-weight', 700).attr('fill', lowDepth ? 'var(--danger)' : 'var(--text-secondary)')
      .text(Math.round(d.avgDepth * 100) + '%');

    // звёзды оценки
    g.append('text').attr('x', starX).attr('y', yc + 4).attr('font-size', 13)
      .attr('letter-spacing', '1').attr('fill', lowRate ? 'var(--danger)' : '#e0a000')
      .text(stars(d.avgRating));
    g.append('text').attr('x', starX + 76).attr('y', yc + 3.5).attr('font-size', 10.5)
      .attr('font-weight', 700).attr('fill', lowRate ? 'var(--danger)' : 'var(--text-secondary)')
      .text(d.avgRating.toFixed(1));
  });

  // пояснение
  svg.append('text').attr('x', codeX).attr('y', H - 8).attr('font-size', 9.5)
    .attr('fill', 'var(--text-muted)')
    .html('<tspan fill="var(--danger)" font-weight="700">красный</tspan> — ниже нормы: бросают на середине (&lt;85%) или низкая оценка (&lt;4,3)');

  updaters.push(st => {
    rows.each(function () {
      const off = (st.type && st.type !== this.getAttribute('data-type')) ||
        (st.trainer && st.trainer !== this.getAttribute('data-trainer'));
      d3.select(this).classed('fade', off);
    });
  });
})();

/* ============================================================
   ГРАФИК 4 — СЕГМЕНТЫ ВОВЛЕЧЁННОСТИ × ТИП (100% стэк)
   ============================================================ */
(function segments() {
  const svg = d3.select('#chart-segments');
  const W = 520, H = 212, m = { t: 20, r: 14, b: 40, l: 94 };
  svg.attr('viewBox', `0 0 ${W} ${H}`);
  const x = d3.scaleLinear().domain([0, 1]).range([m.l, W - m.r]);
  const bh = 30, gap = 16;

  svg.append('text').attr('x', m.l).attr('y', 12).attr('font-size', 10).attr('fill', 'var(--text-muted)')
    .text('← меньше тренировок у пользователя');

  SEGMENTS.forEach((s, i) => {
    const yy = m.t + i * (bh + gap);
    svg.append('text').attr('x', m.l - 10).attr('y', yy + bh / 2 - 2).attr('text-anchor', 'end')
      .attr('font-size', 11.5).attr('font-weight', 700).attr('fill', 'var(--text-primary)').text(s.segment);
    svg.append('text').attr('x', m.l - 10).attr('y', yy + bh / 2 + 13).attr('text-anchor', 'end')
      .attr('font-size', 9.5).attr('fill', 'var(--text-muted)').text(s.users + ' чел.');
    let acc = 0;
    const rowG = svg.append('g').attr('class', 'seg-row');
    TYPE_ORDER.forEach(t => {
      const frac = s.dist[t];
      const x0 = x(acc), x1 = x(acc + frac); acc += frac;
      const seg = rowG.append('g').attr('class', 'seg-cell').attr('data-type', t)
        .style('cursor', 'pointer').on('click', () => toggleType(t))
        .on('mouseenter', e => showTip(e,
          `<div class="tt-title" style="color:${COLOR[t]}">${t}</div>` +
          `<div class="tt-row"><span class="tt-label">Группа</span><span class="tt-val">${s.segment} вовл.</span></div>` +
          `<div class="tt-row"><span class="tt-label">Доля просмотров</span><span class="tt-val">${Math.round(frac * 100)}%</span></div>` +
          `<div class="tt-row"><span class="tt-label">Просмотров</span><span class="tt-val">${s.counts[t]}</span></div>`))
        .on('mousemove', e => showTip(e, tip().innerHTML)).on('mouseleave', hideTip);
      seg.append('rect').attr('x', x0).attr('y', yy).attr('width', Math.max(0, x1 - x0)).attr('height', bh)
        .attr('fill', COLOR[t]).attr('opacity', 0.85).attr('stroke', 'var(--surface-card)').attr('stroke-width', 1);
      if (frac >= 0.1) seg.append('text').attr('x', (x0 + x1) / 2).attr('y', yy + bh / 2 + 4)
        .attr('text-anchor', 'middle').attr('font-size', 10).attr('font-weight', 700)
        .attr('fill', '#fff').attr('pointer-events', 'none').text(Math.round(frac * 100) + '%');
    });
  });

  // ось в процентах
  [0, 0.25, 0.5, 0.75, 1].forEach(v => {
    svg.append('text').attr('x', x(v)).attr('y', H - 20).attr('text-anchor', 'middle')
      .attr('font-size', 9.5).attr('fill', 'var(--text-muted)').text(Math.round(v * 100) + '%');
  });
  svg.append('text').attr('x', (m.l + W - m.r) / 2).attr('y', H - 4).attr('text-anchor', 'middle')
    .attr('font-size', 10.5).attr('fill', 'var(--text-secondary)').text('Доля просмотров по типам внутри группы');

  updaters.push(st => {
    svg.selectAll('.seg-cell').each(function () {
      d3.select(this).classed('soft', st.type && st.type !== this.getAttribute('data-type'));
    });
  });
})();

renderFilterBar();
