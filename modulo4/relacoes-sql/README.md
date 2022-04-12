# RELAÇÕES SQL - 07 DE ABRIL DE 2022

## EXERCÍCIO 1
```
CREATE TABLE Rating ( 
    id VARCHAR(255) PRIMARY KEY, 
    comment TEXT NOT NULL, 
    ratING FLOAT NOT NULL, 
    movies_id VARCHAR(255), 
    FOREIGN KEY (movies_id) REFERENCES Movies(id) 
);
```

### Exercício 1.a
A chave estrangeira relaciona elementos comuns dispostos em tabelas diversas e os compara.

### Exercício 1.b
```
INSERT INTO Rating (id, comment, rating, movies_id) VALUES ( "001", "Excelente!", 10, "001" );
```

```
INSERT INTO Rating (id, comment, rating, movies_id) VALUES ( "002", "Não assisti, mas vale a pena", 7, "002" );
```

```
INSERT INTO Rating (id, comment, rating, movies_id) VALUES ( "003", "Old but gold!", 8, "003" );
```

```
INSERT INTO Rating (id, comment, rating, movies_id) VALUES ( "004", "O melhor de todos!", 10, "004" );
```

### Exercício 1.c
```
INSERT INTO Rating (id, comment, rating, movies_id) VALUES ( "005", "Sem comentário porque não vai funcionar", 1, "005");
```
Erro 1452: erro na chave estrangeira pois o id do filme não consta no banco. Assim, a relação não é possível.

### Exercício 1.d
```
ALTER TABLE Movie DROP COLUMN rating;
```

### Exercício 1.e) 
```
DELETE FROM Movies WHERE id = "001";
```
Erro 1451: Não é possível excluir ou atualizar uma linha pai. O filme está sendo referenciado em outra tabela.


## EXERCÍCIO 2
```
CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
```

### Exercício 2.a
Por meio do comando acima se pode relacionar atores a filmes.

### Exercício 2.b
```
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"001",
	"001"
);
```

```
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"004",
	"006"
);
```

```
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"004",
	"007"
);
```

```
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"002",
	"003"
);
```

```
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"003",
	"004"
);
```

```
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"003",
	"003"
);
```

### Exercício 2.c
```
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"001",
	"0011"
);
```
Erro 1452: erro na chave estrangeira pois os ids do filme e ator não constam no banco. Assim, a relação não é possível.

### Exercício 2.d
```
DELETE FROM MovieCast WHERE id = "001";
```
Erro 1451: Não é possível excluir ou atualizar uma linha pai. O filme está sendo referenciado em outra tabela.


## EXERCÍCIO 3
```
SELECT * FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;
```

### Exercício 3.a
ON é uma condição para que possamos obter os valores desejados enquanto retorno.

### Exercício 3.b
```
SELECT title, m.id as movie_id, r.rating as rating FROM Movies m
INNER JOIN Rating r ON m.id = r.movies_id;
```


## EXERCÍCIO 4

### Exercício 4.a
```
SELECT m.id as ID, title as Title, r.rating as Rate, r.comment as Comments
FROM Movies m
LEFT JOIN Rating r ON m.id = r.movies_id;
```

### Exercício 4.b
```
SELECT m.id as ID_Movie, title as Title, mc.actor_id as ID_Actor
FROM Movies m
RIGHT JOIN MovieCast mc ON mc.movie_id - m.id;
```

### Exercício 4.c
```
SELECT m.title, AVG(r.rating) as Rate FROM Movies m
LEFT JOIN Rating r ON m.id = r.movies_id
GROUP BY (m.id);
```


## EXERCÍCIO 5
```
SELECT * FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```

### Exercício 5.a
A query acima retorna todas as informações das tabelas selecionadas. Sem o JOIN, a tabela de atores não seria retornada.

### Exercício 5.b
```
SELECT m.id AS ID_Movie, title AS Title, a.id as ID_Actor, name AS Name FROM Movies m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```

### Exercício 5.c
```
SELECT m.id as movie_id, m,title, a.id as actor_id, a.name FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```
A query acima resulta, inicialmente, no erro erro 1054: Coluna 'm' desconhecida. Isso ocorre porque há uma vírgula ao invés de ponto em m,title. Se trocarmos por ponto, funciona. Sem o 'm', somente 'title', funciona igualmente.


### Exercício 5.d
```
SELECT 
	m.id as ID, 
	title AS Title, 
	a.id as ID, 
	a.name AS Name, 
	r.rating AS Rate,
	r.comment AS Comment
FROM Movies m
LEFT JOIN Rating r ON r.movies_id = m.id
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```




