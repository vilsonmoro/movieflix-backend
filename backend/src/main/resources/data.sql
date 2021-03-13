INSERT INTO tb_user (name, email, password) VALUES ('Bob Brown', 'bob@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (name, email, password) VALUES ('Ana Green', 'ana@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');


INSERT INTO tb_role (authority) VALUES ('ROLE_VISITOR');
INSERT INTO tb_role (authority) VALUES ('ROLE_MEMBER');

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);

INSERT INTO tb_genre(name) VALUES ('Aventura');
INSERT INTO tb_genre(name) VALUES ('Ação');
INSERT INTO tb_genre(name) VALUES ('Comédia');

INSERT INTO tb_movie (img_url, sub_title,synopsis, title, year, genre_id) VALUES ('https://tse1.explicit.bing.net/th?id=OIP.3kec-l7P_kbtmdryn4wn0QHaK4&pid=Api&P=0&w=300&h=300', 'O retorno do rei','O confronto final entre as forças do bem e do mal que lutam pelo controle do futuro da Terra Média se aproxima.','O senhor dos aneis', 2013, 1);

INSERT INTO tb_movie(img_url, sub_title,synopsis, title, year, genre_id)
VALUES ('https://capadedvd.files.wordpress.com/2009/07/soldadouniversal-oretorno.jpg', 'O retorno','Muito tiro e porrada','Soldado universal', 2013, 2);

INSERT INTO tb_movie (img_url, sub_title,synopsis, title, year, genre_id) VALUES ('https://tse1.explicit.bing.net/th?id=OIP.3kec-l7P_kbtmdryn4wn0QHaK4&pid=Api&P=0&w=300&h=300', 'O retorno do rei','O confronto final entre as forças do bem e do mal que lutam pelo controle do futuro da Terra Média se aproxima.','O senhor dos aneis', 2013, 1);

INSERT INTO tb_movie(img_url, sub_title,synopsis, title, year, genre_id)
VALUES ('https://capadedvd.files.wordpress.com/2009/07/soldadouniversal-oretorno.jpg', 'O retorno','Muito tiro e porrada','Soldado universal', 2013, 2);

INSERT INTO tb_movie (img_url, sub_title,synopsis, title, year, genre_id) VALUES ('https://tse1.explicit.bing.net/th?id=OIP.3kec-l7P_kbtmdryn4wn0QHaK4&pid=Api&P=0&w=300&h=300', 'O retorno do rei','O confronto final entre as forças do bem e do mal que lutam pelo controle do futuro da Terra Média se aproxima.','O senhor dos aneis', 2013, 1);

INSERT INTO tb_movie(img_url, sub_title,synopsis, title, year, genre_id)
VALUES ('https://capadedvd.files.wordpress.com/2009/07/soldadouniversal-oretorno.jpg', 'O retorno','Muito tiro e porrada','Soldado universal', 2013, 2);


INSERT INTO tb_movie (img_url, sub_title,synopsis, title, year, genre_id) VALUES ('https://tse1.explicit.bing.net/th?id=OIP.3kec-l7P_kbtmdryn4wn0QHaK4&pid=Api&P=0&w=300&h=300', 'O retorno do rei','O confronto final entre as forças do bem e do mal que lutam pelo controle do futuro da Terra Média se aproxima.','O senhor dos aneis', 2013, 1);

INSERT INTO tb_movie(img_url, sub_title,synopsis, title, year, genre_id)
VALUES ('https://capadedvd.files.wordpress.com/2009/07/soldadouniversal-oretorno.jpg', 'O retorno','Muito tiro e porrada','Soldado universal', 2013, 2);


INSERT INTO tb_movie (img_url, sub_title,synopsis, title, year, genre_id) VALUES ('https://tse1.explicit.bing.net/th?id=OIP.3kec-l7P_kbtmdryn4wn0QHaK4&pid=Api&P=0&w=300&h=300', 'O retorno do rei','O confronto final entre as forças do bem e do mal que lutam pelo controle do futuro da Terra Média se aproxima.','O senhor dos aneis', 2013, 1);

INSERT INTO tb_movie(img_url, sub_title,synopsis, title, year, genre_id)
VALUES ('https://capadedvd.files.wordpress.com/2009/07/soldadouniversal-oretorno.jpg', 'O retorno','Muito tiro e porrada','Soldado universal', 2013, 2);



INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Legal',1,1);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Não gostei',1,2);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Emocionante',2,1);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Achei pacifico demais',2,2);



