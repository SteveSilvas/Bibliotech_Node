CREATE DATABASE biblioteca;
USE biblioteca;

-- ************************************** `acervo`
CREATE TABLE `acervo`
(
 `id_acervo`     int NOT NULL ,
 `id_biblioteca` int NOT NULL ,

PRIMARY KEY (`id_acervo`),
KEY `FK_2` (`id_biblioteca`),
CONSTRAINT `FK_9_1` FOREIGN KEY `FK_2` (`id_biblioteca`) REFERENCES `biblioteca` (`id_biblioteca`)
);

-- ************************************** `autor`
CREATE TABLE `autor`
(
 `id_autor`   int NOT NULL ,
 `nome`       varchar(150) NOT NULL ,
 `origem`     varchar(150) NOT NULL ,
 `nascimento` date NULL ,

PRIMARY KEY (`id_autor`)
);

-- ************************************** `autoria`
CREATE TABLE `autoria`
(
 `id_autoria` int NOT NULL ,
 `id_autor`   int NOT NULL ,
 `id_obra`    int NOT NULL ,

PRIMARY KEY (`id_autoria`),
KEY `FK_2` (`id_obra`),
CONSTRAINT `FK_2` FOREIGN KEY `FK_2` (`id_obra`) REFERENCES `obra` (`id_obra`),
KEY `FK_3` (`id_autor`),
CONSTRAINT `FK_3` FOREIGN KEY `FK_3` (`id_autor`) REFERENCES `autor` (`id_autor`)
);

-- ************************************** `biblioteca`
CREATE TABLE `biblioteca`
(
 `id_biblioteca` int NOT NULL ,
 `nome`          varbinary(45) NOT NULL ,
 `id_endereco`   int NOT NULL ,

PRIMARY KEY (`id_biblioteca`),
KEY `FK_2` (`id_endereco`),
CONSTRAINT `FK_9` FOREIGN KEY `FK_2` (`id_endereco`) REFERENCES `endereco` (`id_endereco`)
);

-- ************************************** `devolucao`
CREATE TABLE `devolucao`
(
 `id_devolucao`   int NOT NULL ,
 `data_devolucao` date NOT NULL ,
 `id_emprestimo`  int NOT NULL ,
 `id_usuario`     int NOT NULL ,

PRIMARY KEY (`id_devolucao`),
KEY `FK_2` (`id_usuario`),
CONSTRAINT `FK_15` FOREIGN KEY `FK_2` (`id_usuario`) REFERENCES `usuario` (`id_usuario`),
KEY `FK_3` (`id_emprestimo`),
CONSTRAINT `FK_16` FOREIGN KEY `FK_3` (`id_emprestimo`) REFERENCES `emprestimo` (`id_emprestimo`)
);

-- ************************************** `editora`
CREATE TABLE `editora`
(
 `id_editora`  int NOT NULL ,
 `nome`        varchar(100) NOT NULL ,
 `id_endereco` int NOT NULL ,
 `cnpj`        varchar(20) NULL ,
 `telefone`    varchar(15) NULL ,
 `email`       varchar(45) NULL ,

PRIMARY KEY (`id_editora`),
KEY `FK_2` (`id_endereco`),
CONSTRAINT `FK_7` FOREIGN KEY `FK_2` (`id_endereco`) REFERENCES `endereco` (`id_endereco`)
);

-- ************************************** `emprestimo`
CREATE TABLE `emprestimo`
(
 `id_emprestimo`  int NOT NULL ,
 `data_retirada`  date NOT NULL ,
 `cod_exemplar`   int NOT NULL ,
 `id_usuario`     int NOT NULL ,
 `data_devolucao` date NULL ,
 `status`         varchar(45) NOT NULL ,

PRIMARY KEY (`id_emprestimo`),
KEY `FK_2` (`id_usuario`),
CONSTRAINT `FK_12` FOREIGN KEY `FK_2` (`id_usuario`) REFERENCES `usuario` (`id_usuario`),
KEY `FK_3` (`cod_exemplar`),
CONSTRAINT `FK_13` FOREIGN KEY `FK_3` (`cod_exemplar`) REFERENCES `exemplar` (`cod_exemplar`)
);

-- ************************************** `endereco`
CREATE TABLE `endereco`
(
 `id_endereco` int NOT NULL ,
 `logradouro`  varchar(150) NULL ,
 `numero`      varchar(45) NULL ,
 `complemento` varchar(100) NULL ,
 `cep`         varchar(20) NULL ,
 `cidade`      varchar(100) NULL ,
 `uf`          varchar(2) NULL ,
 `pais`         NULL ,

PRIMARY KEY (`id_endereco`)
);

-- ************************************** `exemplar`
CREATE TABLE `exemplar`
(
 `cod_exemplar`    int NOT NULL ,
 `data_publicacao` date NULL ,
 `id_acervo`       int NOT NULL ,
 `id_editora`      int NOT NULL ,
 `id_obra`         int NOT NULL ,
 `ISBN`            varchar(200) NULL ,
 `edicao`          varchar(45) NULL ,

PRIMARY KEY (`cod_exemplar`),
KEY `FK_2` (`id_obra`),
CONSTRAINT `FK_1` FOREIGN KEY `FK_2` (`id_obra`) REFERENCES `obra` (`id_obra`),
KEY `FK_3` (`id_editora`),
CONSTRAINT `FK_6` FOREIGN KEY `FK_3` (`id_editora`) REFERENCES `editora` (`id_editora`),
KEY `FK_4` (`id_acervo`),
CONSTRAINT `FK_10` FOREIGN KEY `FK_4` (`id_acervo`) REFERENCES `acervo` (`id_acervo`)
);

-- ************************************** `genero`
CREATE TABLE `genero`
(
 `id_genero` int NOT NULL ,
 `nome`      varchar(50) NOT NULL ,

PRIMARY KEY (`id_genero`)
);

-- ************************************** `genero_obra`
CREATE TABLE `genero_obra`
(
 `id_genero_obra` int NOT NULL ,
 `id_genero`      int NOT NULL ,
 `id_obra`        int NOT NULL ,

PRIMARY KEY (`id_genero_obra`),
KEY `FK_2` (`id_genero`),
CONSTRAINT `FK_4` FOREIGN KEY `FK_2` (`id_genero`) REFERENCES `genero` (`id_genero`),
KEY `FK_3` (`id_obra`),
CONSTRAINT `FK_5` FOREIGN KEY `FK_3` (`id_obra`) REFERENCES `obra` (`id_obra`)
);

-- ************************************** `obra`
CREATE TABLE `obra`
(
 `id_obra`       int NOT NULL ,
 `titulo`        varchar(150) NOT NULL ,
 `data_cricacao` date NULL ,

PRIMARY KEY (`id_obra`)
);

-- ************************************** `reserva`
CREATE TABLE `reserva`
(
 `id_reserva`       int NOT NULL ,
 `data_solicitacao` date NOT NULL ,
 `cod_exemplar`     int NOT NULL ,
 `id_usuario`       int NOT NULL ,
 `data_prevista`    date NOT NULL ,

PRIMARY KEY (`id_reserva`),
KEY `FK_2` (`id_usuario`),
CONSTRAINT `FK_14` FOREIGN KEY `FK_2` (`id_usuario`) REFERENCES `usuario` (`id_usuario`),
KEY `FK_3` (`cod_exemplar`),
CONSTRAINT `FK_14_1` FOREIGN KEY `FK_3` (`cod_exemplar`) REFERENCES `exemplar` (`cod_exemplar`)
);

--************************************** `usuario`
CREATE TABLE `usuario`
(
 `id_usuario` int NOT NULL ,
 `nome`       varchar(150) NOT NULL ,
 `email`      varchar(45) NOT NULL ,
 `telefone`   varchar(15) NOT NULL ,
 `nascimento` date NOT NULL ,

PRIMARY KEY (`id_usuario`)
);




