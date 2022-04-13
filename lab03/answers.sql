-- Exercise 1 (done for you):
SELECT * FROM users;



-- Exercise 2 (done for you):
SELECT id, first_name, last_name 
FROM users;



-- Exercise 3

SELECT id, first_name, last_name 
FROM users
ORDER BY last_name;


-- Exercise 4

SELECT id, image_url, user_id
FROM posts
WHERE user_id=26;


-- Exercise 5

SELECT id, image_url, user_id
FROM posts
WHERE user_id=26 OR user_id=12;


-- Exercise 6

SELECT count(*) 
FROM posts;


-- Exercise 7

SELECT user_id, count(*) 
FROM comments
GROUP BY user_id
ORDER BY count(*) DESC;


-- Exercise 8

SELECT posts.id, posts.image_url, posts.user_id, users.username, users.first_name, users.last_name
FROM posts
JOIN users ON posts.user_id = users.id
WHERE posts.user_id=12 OR posts.user_id=26;


-- Exercise 9

SELECT post.id, post.pub_date, f.following_id
FROM following f
INNER JOIN posts post on f.following_id=post.user_id
WHERE f.user_id=26;


-- Exercise 10




-- Exercise 11

INSERT INTO bookmarks (user_id, post_id)
SELECT posts.user_id, posts.id
FROM posts
WHERE posts.id=219;

INSERT INTO bookmarks (user_id, post_id)
SELECT posts.user_id, posts.id
FROM posts
WHERE posts.id=220;


INSERT INTO bookmarks (user_id, post_id)
SELECT posts.user_id, posts.id
FROM posts
WHERE posts.id=221;


-- Exercise 12
DELETE from bookmarks
WHERE post_id=219;

DELETE from bookmarks
WHERE post_id=220;

DELETE from bookmarks
WHERE post_id=221;



-- Exercise 13

UPDATE users
SET email = 'knick2022@gmail.com'
WHERE id=26;


-- Exercise 14
