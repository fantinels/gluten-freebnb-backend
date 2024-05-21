CREATE TABLE usuario (
	id       	  serial      PRIMARY KEY,
	nome     	  varchar(50) NOT NULL,
	cpf      	  varchar(20) NOT NULL,
	email    	  varchar(50) NOT NULL,
	telefone 	  varchar(20) NOT NULL,
	cidade   	  varchar(50) NOT NULL,
	uf       	  varchar(2)  NOT NULL,
	dt_nascimento date        NOT NULL,
	senha         varchar(50) NOT NULL
)

SELECT * FROM usuario
INSERT INTO usuario(nome, cpf, email, telefone, cidade, uf, dt_nascimento, senha) 
VALUES ('Usuário 1', '601.254.530-43', 'usuario1@email.com', '(51) 98357-3642', 'Cidade 1', 'RS', '2002-04-30', 'senha1')

CREATE TABLE hospedagem (
	id              serial       PRIMARY KEY,
	id_usuario      int,
	FOREIGN KEY     (id_usuario) REFERENCES usuario(id),
	nome            varchar(50)  NOT NULL,
	cep             varchar(50)  NOT NULL,
	tipo_logradouro varchar(50)  NOT NULL,
	logradouro      varchar(50)  NOT NULL,
	numero          int			 NOT NULL,
	complemento     varchar(50)  NOT NULL,
	bairro          varchar(50)  NOT NULL,
	cidade          varchar(50)  NOT NULL,
	uf              varchar(2)   NOT NULL,
	descricao       varchar(255) NOT NULL,
	foto            varchar(500) NOT NULL,
	tipo_acomodacao varchar(50)  NOT NULL,
	valor           int          NOT NULL,
	qt_hospede      int          NOT NULL,
	qt_banheiro     int          NOT NULL,
	qt_quarto       int          NOT NULL,
	qt_cama         int          NOT NULL
)

SELECT * FROM hospedagem

CREATE TABLE quarto_lavanderia (
	id            serial          PRIMARY KEY,
	id_hospedagem int,
	FOREIGN KEY   (id_hospedagem) REFERENCES hospedagem(id),
	roupa_cama    varchar(3)      NOT NULL,
	roupa_banho   varchar(3)      NOT NULL
)

SELECT * FROM quarto_lavanderia

CREATE TABLE climatizacao(
	id              serial          PRIMARY KEY,
	id_hospedagem   int,
	FOREIGN KEY     (id_hospedagem) REFERENCES hospedagem(id),
	ar_condicionado varchar(3)      NOT NULL,
	lareira         varchar(3)      NOT NULL,
	ventilador      varchar(3)      NOT NULL
)

SELECT * FROM climatizacao

CREATE TABLE cozinha(
	id            serial          PRIMARY KEY,
	id_hospedagem int,
	FOREIGN KEY   (id_hospedagem) REFERENCES hospedagem(id),
	fogao         varchar(3)      NOT NULL,
	microondas    varchar(3)      NOT NULL,
	forno         varchar(3)      NOT NULL
)

SELECT * FROM cozinha

CREATE TABLE estacionamento(
	id            serial          PRIMARY KEY,
	id_hospedagem int,
	FOREIGN KEY   (id_hospedagem) REFERENCES hospedagem(id),
	garagem       varchar(3)      NOT NULL,
	estac_rua     varchar(3)      NOT NULL
)

SELECT * FROM estacionamento

CREATE TABLE servicos(
	id            serial          PRIMARY KEY,
	id_hospedagem int,
	FOREIGN KEY   (id_hospedagem) REFERENCES hospedagem(id),
	tv            varchar(3)      NOT NULL,
	wifi          varchar(3)      NOT NULL
)

SELECT * FROM servicos









