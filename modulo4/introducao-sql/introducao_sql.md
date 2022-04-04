# INTRODUÇÃO AO SQL

## Exercício 1

```
USE `***************************`;

CREATE TABLE Actor (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR (255) NOT NULL,
        salary FLOAT NOT NULL,
        birth_date DATE NOT NULL,
        gender VARCHAR(6) NOT NULL
);
```

### Exercício 1.a
   * CREATE TABLE -> comando para criar nova tabela;
   * VARCHAR(255) -> é o tipo e quantidade de caracteres (string e 255);
   * PRIMARY KEY -> é a chave primária;
   * NOT NULL -> campos obrigatórios.
   * DATE -> tipo data

### Exercício 1.b
Mostra as databases:
        ```
        SHOW DATABASES;
        ```
        
Mostra as tabelas:
        ```
        SHOW TABLES;
        ```

### Exercício 1.c
O comando mostra-nos a tabela e suas propriedades (Tipos, valores...):
        ```
        DESCRIBE Actor;
        ```

## Exercício 2

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
    "001", 
    "Tony Ramos",
    400000,
    "1948-08-25", 
    "male"
);
```

### Exercício 2.a

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
    "002", 
    "Glória Pires",
    1200000,
    "1963-08-23", 
    "male"
);
```

### Exercício 2.b
Adicionar outro usuário com o mesmo id resultará no erro 1062: Entrada duplicada (002) para chave primária.

### Exercício 2.c
Haverá erro com o comando porque não foram declarados birth_date e gender. Erro 1136: A quantidade de colunas não corresponde à quantidade de valores na linha 1. Corrigindo, fica assim:

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
    "003",
    "Fernanda Montenegro",
    300000,
    "1929-10-19",
    "female"
);
```

### Exercício 2.d) 
Haverá erro com o comando porque o nome não foi declarado nem tem valor padrão. Erro 1164: o campo nome não tem um valor padrão. Corrigindo, crendo que se trata de Antonio Fagundes, fica assim:

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
    "004",
    "Antonio Fagundes",
    400000,
    "1949-04-18", 
    "male"
);
```

### Exercício 2.e
Haverá erro com o comando porque faltam aspas na data de nascimento. Erro 1292: Valor "date" incorreto: 1950 (diminui os valores) na coluna birth_date na linha 1. Corrigindo, fica assim:

 ```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
    "005",
    "Juliana Paes",
    719333.33,
    "1979-03-26", 
    "female"
);
```

### Exercício 2.f
     
```
INSERT INTO Actor(id, name, salary, birth_date, gender)
VALUES(
    "006", 
    "Jessica Chastain",
    800000,
    "1977-03-24", 
    "female"
);
```

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
    "007",
    "Benedict Cumberbatch",
    800000,
    "1976-07-19",
    "male"
);
```

## Exercício  3

```
SELECT * FROM Actor;
SELECT id, salary FROM Actor ;
SELECT id, name FROM Actor WHERE gender = "male";
```

### Exercício 3.a
    
```
SELECT * FROM Actor WHERE gender = "female";
```

### Exercício 3.b

```
SELECT salary FROM Actor WHERE name = "Tony Ramos";
```

### Exercício 3.c
Retorna null porque não há dados a serem exibidos com o parâmetro passado via WHERE.

```
SELECT * FROM Actor WHERE gender = "invalid";
````

### Exercício 3.d
     
```
SELECT id, name, salary FROM Actor WHERE salary <= 500000;
```

### Exercício 3.e
Erro 1054: Coluna "nome" desconhecida na lista de campos/parâmetros. Isso ocorre porque o parâmetro "nome" não existe. Para corrigi-lo, demos escrever "name". Resposta: id 002, name Glória Pires.

```
SELECT id, name from Actor WHERE id = "002";
```

## Exercício  4

```
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
```

### Exercício 4.a
A query acima restringe as buscas string a palavras que começam com A ou J e salário maiores de 300000.

### Exercício 4.b
    
```
SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000;
```

### Exercício 4.c
     
```
SELECT * FROM Actor WHERE name LIKE "%G%" OR name LIKE "%g%";
```

### Exercício 4.d

```
SELECT * FROM Actor
WHERE (name LIKE "%A%" OR name LIKE "%a%" OR name LIKE "%G%" OR name LIKE "%g%") AND salary BETWEEN 350000 AND 900000;
```

## Exercício 5
### Exercício 5.a
Usaremos o tipo 'TEXT' nesse caso porque não tem limites de caracteres.
    
```
CREATE TABLE Movies(
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsys TEXT NOT NULL,
    release_date DATE NOT NULL,
    rating INT(2)
);
```

### Exercício 5.b

```
INSERT INTO Movies (id, title, synopsys, release_date, rating)
VALUES(
    "001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno  
    inexplicável e trocam de corpos",
    "2006-01-06",
    7
);
```

### Exercício 5.c

```
INSERT INTO Movies (id, title, synopsys, release_date, rating)
VALUES (
    "002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma  
    reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    10
);
```

### Exercício 5.d

```
INSERT INTO Movies (id, title, synopsys, release_date, rating)
VALUES(
    "003",
        "Dona Flor e Seus Dois Maridos",
        "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates.  
        A vida de abusos acaba por acarretar sua morte precoce.",
        "2017-11-02",
        8
);
```

### Exercício 5.e

```
INSERT INTO Movies (id, title, synopsys, release_date, rating)
VALUES(
    "004",
    "Central do Brasil",
    "Em Central do Brasil, Dora (Fernanda Montenegro) trabalha escrevendo cartas para analfabetos na estação Central do Brasil,  
    no centro da cidade do Rio de Janeiro. Ainda que a escrivã não envie todas as cartas que escreve - as cartas que considera  
    inúteis ou fantasiosas demais -, ela decide ajudar um menino (Vinícius de Oliveira), após sua mãe ser atropelada, a tentar  
    encontrar o pai que nunca conheceu, no interior do Nordeste.",
    "1998-04-03",
    8
);
```

## Exercício 6
### Exercício 6.a

```
SELECT id, title, rating FROM Movies WHERE id = "002";
```

### Exercício 6.b

```
SELECT * FROM Movies WHERE title = "Central do Brasil";
```

### Exercício 6.c

```
SELECT id, title, synopsys FROM Movies WHERE rating >= 7;
```

## Exercício 7
### Exercício 7.a

```
SELECT * FROM Movies WHERE title LIKE "%vida%";
```

### Exercício 7.b

```
SELECT * FROM Movies WHERE title LIKE "%era%" OR synopsys LIKE "%era%";
```

### Exercício 7.c

```
SELECT * FROM Movies WHERE release_date < "2022-04-04";
```

### Exercício 7.d

```
SELECT * FROM Movies 
WHERE release_date < "2022-04-04" AND rating > 7 AND (title LIKE "%era%" OR synopsys LIKE "%era%");
```



