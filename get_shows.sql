SELECT 
    s.id AS show_id, 
    m.title AS movie_name, 
    m.language, 
    m.format, 
    s.show_date, 
    s.show_time, 
    t.name AS theatre_name, 
    t.location
FROM Shows s
JOIN Screen sc ON s.screen_id = sc.id
JOIN Theatre t ON sc.theatre_id = t.id
JOIN Movie m ON s.movie_id = m.id
WHERE s.show_date = '2025-04-25' -- Replace with required date
AND t.id = 1; -- Replace with required theatre ID