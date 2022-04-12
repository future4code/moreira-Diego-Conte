# APROFUNDAMENTO SQL

```
USE `********************************************************`;
```

```
SET SQL_SAFE_UPDATES = 0;
```

## EXERCÍCIO 1

### Exercício 1.a
Este comando vai apagar a coluna de nome "salary".
```
ALTER TABLE Actor DROP COLUMN salary;
```

### Exercício 1.b
Este comando irá renomear a coluna de "gender" para "sex" e limitar os caracteres a seis.
```
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
```

### Exercício 1.c
Este comando irá limitar os caracteres a 255.
```
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
```

### Exercício 1.d
```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```


## EXERCÍCIO 2

### Exercício 2.a
```
UPDATE Actor
SET name = "Moacyr Franco", birth_date = "1936-10-05", gender = "male"
WHERE id = "003";
```

### Exercício 2.b
```
UPDATE Actor
SET name = "JULIANA PAES"
WHERE id = "005";
```

```
UPDATE Actor
SET name = "Juliana Paes"
WHERE id = "005";
```

### Exercício 2.c
```
UPDATE Actor
SET name = "Miguel Falabella", salary = 700000, birth_date = "1956-10-10", gender = "male"
WHERE id = "005";
```

### Exercício 2.d
```
UPDATE Actor
SET name = "Diego Conte"
WHERE id = "009";
```

O comando acima roda e até retorna resposta positiva, porém nenhum linha é afetada porque os valores não existem.


## EXERCÍCIO 3

### Exercício 3.a
```
DELETE FROM Actor WHERE name = "Antonio Fagundes";
```

### Exercício 3.b
```
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;
```


## EXERCÍCIO 4

### Exercício 4.a
```
SELECT MAX(salary) FROM Actor;
```

### Exercício 4.b
```
SELECT MIN(salary) FROM Actor WHERE gender = "female";
```

### Exercício 4.c
```
SELECT COUNT(*) FROM Actor WHERE gender = "female";
```

### Exercício 4.d
```
SELECT SUM(salary) FROM Actor;
```


## EXERCÍCIO 5

### Exercício 5.a
```
SELECT COUNT(*), gender FROM Actor GROUP BY gender;
```

A query acima retorna a quantidade de registros por grupo e os organiza por gênero.

### Exercício 5.b
```
SELECT id, name FROM Actor ORDER BY name DESC;
```

### Exercício 5.c
```
SELECT * FROM Actor ORDER BY salary;
```

### Exercício 5.d
```
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
```

### EXERCÍCIO 5.e
```
SELECT AVG(salary), gender FROM Actor GROUP BY gender;
```


## EXERCÍCIO 6

### Exercício 6.a
```
ALTER TABLE Movies ADD playing_limit_date DATE;
```

### Exercício 6.b
```
ALTER TABLE Movies CHANGE rating rating FLOAT;
```

### Exercício 6.c
```
UPDATE Movies SET playing_limit_date = "2022-05-05" WHERE id = "001";
```
```
UPDATE Movies SET playing_limit_date = "2022-03-05" WHERE id = "002";
```

### Exercício 6.d
```
DELETE FROM Movies WHERE id = "004";
```

```
UPDATE Movies SET synopsys = "Atualizando a sinopse" WHERE id = "004";
```
O comando acima roda e até retorna resposta positiva, porém nenhum linha é afetada porque os valores não existem.


## EXERCÍCIO 7

### Exercício 7.a
```
SELECT COUNT(*) FROM Movies WHERE rating > 7.5;
```

### Exercício 7.b
```
SELECT AVG(rating) FROM Movies;
```

### Exercício 7.c
```
SELECT COUNT(*) FROM Movies WHERE playing_limit_date >= current_date();
```

### Exercício 7.d
```
SELECT COUNT(*) FROM Movies WHERE release_date > current_date();
```

### Exercício 7.e
```
SELECT MAX(rating) FROM Movies;
```

### Exercício 7.f
```
SELECT MIN(rating) FROM Movies;
```


## EXERCÍCIO 8

### Exercício 8.a
```
SELECT * FROM Movies ORDER BY title ASC;
```

### Exercício 8.b
```
SELECT * FROM Movies ORDER BY title DESC LIMIT 5;
```

### Exercício 8.c
```
SELECT * FROM Movies WHERE release_date < curdate() ORDER BY release_date DESC LIMIT 3;
```

### Exercício 8.d
```
SELECT * FROM Movies ORDER BY rating DESC LIMIT 3;
```


```
DESCRIBE Actor;
DESCRIBE Movies;
SELECT * FROM Actor;
SELECT * FROM Movies;
SHOW TABLES;
```
