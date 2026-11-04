-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 04/11/2026 às 13:26
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `sistema_login`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `formulario`
--

CREATE TABLE `formulario` (
  `iDuser` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `fone` int(11) NOT NULL,
  `email` varchar(200) NOT NULL,
  `dtnasc` date NOT NULL,
  `cidade` varchar(200) NOT NULL,
  `senhah` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `formulario`
--

INSERT INTO `formulario` (`iDuser`, `nome`, `fone`, `email`, `dtnasc`, `cidade`, `senhah`) VALUES
(2, 'Fernando Boing Barni', 123123123, 'fernando61154986@alunos.sc.senac.br', '2026-11-13', 'vidal ramos', '8aabb9a0c0fcb5aac4ae5c81df1315b2a91baf8f6f97f310c0f39c9d38cc4d17'),
(3, 'Fernando Boing Barni', 123123123, 'fernando61154986@alunos.sc.senacvr', '2026-11-13', 'vidal ramos', '8aabb9a0c0fcb5aac4ae5c81df1315b2a91baf8f6f97f310c0f39c9d38cc4d17');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `formulario`
--
ALTER TABLE `formulario`
  ADD PRIMARY KEY (`iDuser`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `formulario`
--
ALTER TABLE `formulario`
  MODIFY `iDuser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
