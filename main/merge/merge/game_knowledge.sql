-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2024. Dec 01. 13:12
-- Kiszolgáló verziója: 10.4.32-MariaDB
-- PHP verzió: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `game_knowledge`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `actings`
--

CREATE TABLE `actings` (
  `id` int(11) NOT NULL,
  `gameId` int(11) NOT NULL,
  `actorId` int(11) NOT NULL,
  `role` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `actings`
--

INSERT INTO `actings` (`id`, `gameId`, `actorId`, `role`) VALUES
(1, 1, 1, 'Female V'),
(2, 1, 2, 'Male V'),
(3, 1, 3, 'Johnny Silverhand'),
(4, 1, 4, 'Panam Palmer'),
(5, 1, 5, 'Judy Alvarez'),
(6, 2, 6, 'James Sunderland'),
(7, 2, 6, 'Doctor'),
(8, 2, 7, 'Mary Shepherd-Sunderland'),
(9, 2, 7, 'Maria'),
(10, 2, 8, 'Laura'),
(11, 2, 9, 'Angela Orosco'),
(12, 2, 10, 'Eddie Dombrowski [voice]'),
(13, 2, 11, 'Eddie Dombrowski [mocap]'),
(14, 2, 11, 'Radio Voice'),
(15, 2, 11, 'TV Voice'),
(16, 2, 12, 'Nurse'),
(17, 2, 12, 'Lying Figure'),
(18, 2, 13, NULL),
(19, 3, 14, 'James Sunderland'),
(20, 3, 15, 'Mary Shepherd-Sunderland'),
(21, 3, 15, 'Maria'),
(22, 3, 16, 'Angela Orosco'),
(23, 3, 17, 'Eddie Dombrowski'),
(24, 3, 18, 'Laura'),
(25, 3, 19, 'Game Show Host'),
(26, 3, 20, 'Doctor'),
(27, 3, 21, 'Ernest Baldwin'),
(28, 3, 22, 'Amy Baldwin');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `actors`
--

CREATE TABLE `actors` (
  `id` int(11) NOT NULL,
  `firstName` varchar(100) DEFAULT NULL,
  `lastName` varchar(100) DEFAULT NULL,
  `profilePicture` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `actors`
--

INSERT INTO `actors` (`id`, `firstName`, `lastName`, `profilePicture`) VALUES
(1, 'Cherami', 'Leigh', NULL),
(2, 'Gavin', 'Drea', NULL),
(3, 'Keanu', 'Reeves', NULL),
(4, 'Emily', 'Woo Zeller', NULL),
(5, 'Carla', 'Tassara', NULL),
(6, 'Luke', 'Roberts', NULL),
(7, 'Salóme', 'Gunnarsdóttir', NULL),
(8, 'Evie', 'Templeton', NULL),
(9, 'Gianna', 'Kiehl', NULL),
(10, 'Scott', 'Haining', NULL),
(11, 'Danny', 'Kirrane', NULL),
(12, 'Iga', 'Górecka', NULL),
(13, 'Devora', 'Wilde', NULL),
(14, 'Guy', 'Cihi', NULL),
(15, 'Monica', 'Horgan', NULL),
(16, 'Donna', 'Burke', NULL),
(17, 'David', 'Schaufele', NULL),
(18, 'Jacquelyn', 'Breckenridge', NULL),
(19, 'Dominic', 'Allen', NULL),
(20, 'Dennis', 'Falt', NULL),
(21, 'Ward', 'Sexton', NULL),
(22, 'Florence', 'Minowa', NULL);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `ageratings`
--

CREATE TABLE `ageratings` (
  `id` int(11) NOT NULL,
  `gameId` int(11) NOT NULL,
  `rating` varchar(10) NOT NULL,
  `institution` varchar(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `ageratings`
--

INSERT INTO `ageratings` (`id`, `gameId`, `rating`, `institution`) VALUES
(1, 1, '18', 'PEGI'),
(2, 2, 'M', 'ESRB'),
(3, 3, 'M', 'ESRB'),
(4, 4, 'E', 'ESRB'),
(5, 5, 'E', 'ESRB');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `awards`
--

CREATE TABLE `awards` (
  `id` int(11) NOT NULL,
  `organizer` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `awards`
--

INSERT INTO `awards` (`id`, `organizer`, `name`) VALUES
(1, 'The Game Awards', 'Best Ongoing Game'),
(2, 'The Game Awards', 'Best Score & Music'),
(3, 'BAFTA', 'Best Evolving Game'),
(4, 'BAFTA', 'Best Narrative');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `blacklistedtokens`
--

CREATE TABLE `blacklistedtokens` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `token` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- A tábla adatainak kiíratása `blacklistedtokens`
--

INSERT INTO `blacklistedtokens` (`id`, `userId`, `token`, `date`) VALUES
(4, 2, 'eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..foeoWBSh--JXBGj-.Hc0cbhTc6mDRUYG9BjOmiM_M9_iSKZv9kTCclwZ58EknRV9qEiJR-8KeW4KnRRWRgAoOPEVmi2thVWMtKkjO1PV-sy-zEFt2MGp3nADFu17Ozup1M1E.epHdN2uc28bPLBTY0iafrQ', '2024-11-30 16:24:05'),
(5, 1, 'eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..OEyKaydAsotxJjdK.qUWfFxVRTkjaHSKWpQAf5eqgZlTiYRMwDuRkCrLmC7c5fWtuqucBr9-89XzqzAgdrrkT64wEuQ8Ic8ciAwdGrXIodgoo.9lvjdY8UQr6_bprO3k9opg', '2024-11-30 16:59:10');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `creations`
--

CREATE TABLE `creations` (
  `id` int(11) NOT NULL,
  `gameId` int(11) DEFAULT NULL,
  `creatorId` int(11) DEFAULT NULL,
  `field` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `creators`
--

CREATE TABLE `creators` (
  `id` int(11) NOT NULL,
  `firstName` varchar(100) DEFAULT NULL,
  `lastName` varchar(100) DEFAULT NULL,
  `profilePicture` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `creators`
--

INSERT INTO `creators` (`id`, `firstName`, `lastName`, `profilePicture`) VALUES
(1, 'Adam', 'Badowski', NULL),
(2, 'Marcin', 'Blacha', NULL),
(3, 'Tomasz', 'Marchewka', NULL),
(4, 'Jakub', 'Szamalek', NULL),
(5, 'Mike', 'Pondsmith', NULL),
(6, 'Andrzej', 'Madrzak', NULL),
(7, 'Barbara', 'Kciuk', NULL),
(8, 'Hiroyuki', 'Owaku', NULL),
(9, 'Takayuki', 'Kobayashi', NULL),
(10, 'Masashi', 'Tsuboyama', NULL),
(11, 'Keiichiro', 'Toyama', NULL),
(12, 'Yoshinori', 'Kitase', NULL),
(13, 'Akihiko', 'Matsui', NULL),
(14, 'Takashi', 'Tokita', NULL),
(15, 'Masato', 'Kato', NULL),
(16, 'Mariano', 'Cavallero', NULL),
(17, 'Hernan', 'Marandino', NULL);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `favourites`
--

CREATE TABLE `favourites` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `gameId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `forumcomments`
--

CREATE TABLE `forumcomments` (
  `id` int(11) NOT NULL,
  `postId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `content` text NOT NULL,
  `creation` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `forumposts`
--

CREATE TABLE `forumposts` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `gameId` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `story` tinyint(1) NOT NULL DEFAULT 0,
  `gameplay` tinyint(1) NOT NULL DEFAULT 0,
  `creation` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `gamepictures`
--

CREATE TABLE `gamepictures` (
  `id` int(11) NOT NULL,
  `gameId` int(11) NOT NULL,
  `url` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `games`
--

CREATE TABLE `games` (
  `id` int(11) NOT NULL,
  `gameTitle` varchar(255) NOT NULL,
  `altGameTitle` varchar(255) DEFAULT NULL,
  `description` text NOT NULL,
  `release` date NOT NULL,
  `boxart` varchar(255) DEFAULT NULL,
  `controllerSupport` int(11) NOT NULL DEFAULT 0,
  `crossplatform` int(11) DEFAULT NULL,
  `crossPlatformException` text DEFAULT NULL,
  `steamdeckComp` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `games`
--

INSERT INTO `games` (`id`, `gameTitle`, `altGameTitle`, `description`, `release`, `boxart`, `controllerSupport`, `crossplatform`, `crossPlatformException`, `steamdeckComp`) VALUES
(1, 'Cyberpunk 2077', 'サイバーパンク2077', 'Cyberpunk 2077 is an open-world, action-adventure RPG set in the dark future of Night City — a dangerous megalopolis obsessed with power, glamor, and ceaseless body modification.', '2020-12-10', NULL, 2, NULL, NULL, 2),
(2, 'Silent Hill 2', 'Silent Hill 2 Remake', 'Having received a letter from his deceased wife, James heads to where they shared so many memories, in the hope of seeing her one more time: Silent Hill.', '2024-10-08', NULL, 2, NULL, NULL, 0),
(3, 'Silent Hill 2', NULL, 'After receiving a letter from his late wife, from Silent Hill, James Sunderland heads towards the town to search for her, only to come across a terrifying road of truth and redemption.', '2001-09-24', NULL, 0, NULL, NULL, NULL),
(4, 'Chrono Trigger', 'Kurono toriga', 'Crono, a young boy, is thrust to adventure by destiny to destroy an oncoming threat that will destroy the world in 1999.', '1995-05-11', NULL, 1, NULL, NULL, 1),
(5, 'Forager', NULL, 'The highly popular and quirky \"idle game that you want to actively keep playing\". Explore, craft, gather & manage resources, find secrets and build your base out of nothing! Buy land to explore and expand!', '2019-06-18', NULL, 1, NULL, NULL, 2);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `gamesawards`
--

CREATE TABLE `gamesawards` (
  `id` int(11) NOT NULL,
  `gameId` int(11) NOT NULL,
  `awardId` int(11) NOT NULL,
  `year` int(11) NOT NULL,
  `result` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `gamesawards`
--

INSERT INTO `gamesawards` (`id`, `gameId`, `awardId`, `year`, `result`) VALUES
(1, 1, 1, 2023, 1),
(2, 1, 2, 2021, 0),
(3, 1, 3, 2024, 1),
(4, 1, 4, 2021, 0);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `gameslanguages`
--

CREATE TABLE `gameslanguages` (
  `id` int(11) NOT NULL,
  `gameId` int(11) NOT NULL,
  `languageId` int(11) NOT NULL,
  `dub` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `gamesonlineplatforms`
--

CREATE TABLE `gamesonlineplatforms` (
  `id` int(11) NOT NULL,
  `gameId` int(11) NOT NULL,
  `platformId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `gamesplatforms`
--

CREATE TABLE `gamesplatforms` (
  `id` int(11) NOT NULL,
  `gameId` int(11) NOT NULL,
  `platformId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `gamestags`
--

CREATE TABLE `gamestags` (
  `id` int(11) NOT NULL,
  `gameId` int(11) NOT NULL,
  `tagId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `languages`
--

CREATE TABLE `languages` (
  `id` int(11) NOT NULL,
  `language` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `onlineplatforms`
--

CREATE TABLE `onlineplatforms` (
  `id` int(11) NOT NULL,
  `platform` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `pcspecs`
--

CREATE TABLE `pcspecs` (
  `minop` varchar(20) NOT NULL,
  `mincpu` varchar(100) NOT NULL,
  `minram` varchar(10) NOT NULL,
  `mingpu` varchar(100) NOT NULL,
  `mindirectx` varchar(20) DEFAULT NULL,
  `cpu` varchar(100) DEFAULT NULL,
  `ram` varchar(10) DEFAULT NULL,
  `gpu` varchar(100) DEFAULT NULL,
  `directx` varchar(20) NOT NULL,
  `op` varchar(20) DEFAULT NULL,
  `storage` varchar(10) NOT NULL,
  `sidenote` text CHARACTER SET utf8mb4 COLLATE utf8mb4_hungarian_ci DEFAULT NULL,
  `id` int(11) NOT NULL,
  `gameId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `platforms`
--

CREATE TABLE `platforms` (
  `id` int(11) NOT NULL,
  `platform` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `ratings`
--

CREATE TABLE `ratings` (
  `id` int(11) NOT NULL,
  `gameId` int(11) NOT NULL,
  `positive` tinyint(1) NOT NULL DEFAULT 0,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `studios`
--

CREATE TABLE `studios` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `logo` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `studios`
--

INSERT INTO `studios` (`id`, `name`, `logo`) VALUES
(1, 'CD Projekt RED', 'publishers/logos/cd_projekt_red'),
(2, 'Blooper Team', NULL),
(3, 'Konami', NULL),
(4, 'Square', NULL),
(5, 'Square Enix', NULL),
(6, 'HopFrog', NULL),
(7, 'Humble Bundle', NULL);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `studiosgames`
--

CREATE TABLE `studiosgames` (
  `id` int(11) NOT NULL,
  `gameId` int(11) NOT NULL,
  `studioId` int(11) NOT NULL,
  `isDeveloper` tinyint(1) NOT NULL DEFAULT 0,
  `isPublisher` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `studiosgames`
--

INSERT INTO `studiosgames` (`id`, `gameId`, `studioId`, `isDeveloper`, `isPublisher`) VALUES
(1, 1, 1, 1, 1),
(2, 2, 2, 1, 0),
(3, 2, 3, 0, 1),
(4, 3, 3, 1, 1),
(5, 4, 4, 1, 1),
(6, 4, 5, 1, 1),
(7, 5, 6, 1, 0),
(8, 5, 7, 0, 1);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `tags`
--

CREATE TABLE `tags` (
  `id` int(11) NOT NULL,
  `tag` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `admin` tinyint(1) DEFAULT NULL,
  `creation` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `email`, `admin`, `creation`) VALUES
(1, 'Vencel453', '$2b$10$lU.v7i55wiLeE7gAUh51VOU00LXy1FpLvPtBKMKYObZMLBiGoSM8i', 'email@address.com', 1, '2024-11-27'),
(2, 'BunyósPityu', '$2b$10$jEhSTQxawR1FDJ74oKdhdOAL5WD2GglD32wAKNBYNShBhFdK79C92', 'pityu@lopo.com', 0, '2024-11-27');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `actings`
--
ALTER TABLE `actings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `gameId` (`gameId`),
  ADD KEY `actorId` (`actorId`);

--
-- A tábla indexei `actors`
--
ALTER TABLE `actors`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `ageratings`
--
ALTER TABLE `ageratings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `gameId` (`gameId`);

--
-- A tábla indexei `awards`
--
ALTER TABLE `awards`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `blacklistedtokens`
--
ALTER TABLE `blacklistedtokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- A tábla indexei `creations`
--
ALTER TABLE `creations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `gameId` (`gameId`),
  ADD KEY `creatorId` (`creatorId`);

--
-- A tábla indexei `creators`
--
ALTER TABLE `creators`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `favourites`
--
ALTER TABLE `favourites`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `gameId` (`gameId`);

--
-- A tábla indexei `forumcomments`
--
ALTER TABLE `forumcomments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `postId` (`postId`),
  ADD KEY `userId` (`userId`);

--
-- A tábla indexei `forumposts`
--
ALTER TABLE `forumposts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `gameId` (`gameId`);

--
-- A tábla indexei `gamepictures`
--
ALTER TABLE `gamepictures`
  ADD PRIMARY KEY (`id`),
  ADD KEY `gameId` (`gameId`);

--
-- A tábla indexei `games`
--
ALTER TABLE `games`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `gamesawards`
--
ALTER TABLE `gamesawards`
  ADD PRIMARY KEY (`id`),
  ADD KEY `gameId` (`gameId`),
  ADD KEY `awardId` (`awardId`);

--
-- A tábla indexei `gameslanguages`
--
ALTER TABLE `gameslanguages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `gameId` (`gameId`),
  ADD KEY `languageId` (`languageId`);

--
-- A tábla indexei `gamesonlineplatforms`
--
ALTER TABLE `gamesonlineplatforms`
  ADD PRIMARY KEY (`id`),
  ADD KEY `gameId` (`gameId`),
  ADD KEY `platformId` (`platformId`);

--
-- A tábla indexei `gamesplatforms`
--
ALTER TABLE `gamesplatforms`
  ADD PRIMARY KEY (`id`),
  ADD KEY `gameId` (`gameId`),
  ADD KEY `platformId` (`platformId`);

--
-- A tábla indexei `gamestags`
--
ALTER TABLE `gamestags`
  ADD PRIMARY KEY (`id`),
  ADD KEY `gameId` (`gameId`),
  ADD KEY `tagId` (`tagId`);

--
-- A tábla indexei `languages`
--
ALTER TABLE `languages`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_language` (`language`);

--
-- A tábla indexei `onlineplatforms`
--
ALTER TABLE `onlineplatforms`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_onlineplatform` (`platform`);

--
-- A tábla indexei `pcspecs`
--
ALTER TABLE `pcspecs`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD KEY `gameId_fk_1` (`gameId`);

--
-- A tábla indexei `platforms`
--
ALTER TABLE `platforms`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_platform` (`platform`);

--
-- A tábla indexei `ratings`
--
ALTER TABLE `ratings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `gameId` (`gameId`),
  ADD KEY `userId` (`userId`);

--
-- A tábla indexei `studios`
--
ALTER TABLE `studios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_name` (`name`);

--
-- A tábla indexei `studiosgames`
--
ALTER TABLE `studiosgames`
  ADD PRIMARY KEY (`id`),
  ADD KEY `gameId` (`gameId`),
  ADD KEY `studioId` (`studioId`);

--
-- A tábla indexei `tags`
--
ALTER TABLE `tags`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_tag` (`tag`);

--
-- A tábla indexei `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_email` (`email`),
  ADD UNIQUE KEY `unique_name` (`username`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `actings`
--
ALTER TABLE `actings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT a táblához `actors`
--
ALTER TABLE `actors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT a táblához `ageratings`
--
ALTER TABLE `ageratings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT a táblához `awards`
--
ALTER TABLE `awards`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT a táblához `blacklistedtokens`
--
ALTER TABLE `blacklistedtokens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT a táblához `creations`
--
ALTER TABLE `creations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `creators`
--
ALTER TABLE `creators`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT a táblához `favourites`
--
ALTER TABLE `favourites`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT a táblához `forumcomments`
--
ALTER TABLE `forumcomments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT a táblához `forumposts`
--
ALTER TABLE `forumposts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT a táblához `gamepictures`
--
ALTER TABLE `gamepictures`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT a táblához `games`
--
ALTER TABLE `games`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT a táblához `gamesawards`
--
ALTER TABLE `gamesawards`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT a táblához `gameslanguages`
--
ALTER TABLE `gameslanguages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `gamesonlineplatforms`
--
ALTER TABLE `gamesonlineplatforms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `gamesplatforms`
--
ALTER TABLE `gamesplatforms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `gamestags`
--
ALTER TABLE `gamestags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `languages`
--
ALTER TABLE `languages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `onlineplatforms`
--
ALTER TABLE `onlineplatforms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `pcspecs`
--
ALTER TABLE `pcspecs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `platforms`
--
ALTER TABLE `platforms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `ratings`
--
ALTER TABLE `ratings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT a táblához `studios`
--
ALTER TABLE `studios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT a táblához `studiosgames`
--
ALTER TABLE `studiosgames`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT a táblához `tags`
--
ALTER TABLE `tags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `actings`
--
ALTER TABLE `actings`
  ADD CONSTRAINT `actings_fk_1` FOREIGN KEY (`gameId`) REFERENCES `games` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `actings_fk_2` FOREIGN KEY (`actorId`) REFERENCES `actors` (`id`) ON DELETE CASCADE;

--
-- Megkötések a táblához `ageratings`
--
ALTER TABLE `ageratings`
  ADD CONSTRAINT `ageratings_fk_1` FOREIGN KEY (`gameId`) REFERENCES `games` (`id`) ON DELETE CASCADE;

--
-- Megkötések a táblához `blacklistedtokens`
--
ALTER TABLE `blacklistedtokens`
  ADD CONSTRAINT `blacklistedtokens_fk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`);

--
-- Megkötések a táblához `creations`
--
ALTER TABLE `creations`
  ADD CONSTRAINT `creations_fk_1` FOREIGN KEY (`gameId`) REFERENCES `games` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `creations_fk_2` FOREIGN KEY (`creatorId`) REFERENCES `creators` (`id`) ON DELETE CASCADE;

--
-- Megkötések a táblához `favourites`
--
ALTER TABLE `favourites`
  ADD CONSTRAINT `favourites_fk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `favourites_fk_2` FOREIGN KEY (`gameId`) REFERENCES `games` (`id`) ON DELETE CASCADE;

--
-- Megkötések a táblához `forumcomments`
--
ALTER TABLE `forumcomments`
  ADD CONSTRAINT `forumcomments_fk_1` FOREIGN KEY (`postId`) REFERENCES `forumposts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `forumcomments_fk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Megkötések a táblához `forumposts`
--
ALTER TABLE `forumposts`
  ADD CONSTRAINT `forumposts_fk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `forumposts_fk_2` FOREIGN KEY (`gameId`) REFERENCES `games` (`id`) ON DELETE CASCADE;

--
-- Megkötések a táblához `gamepictures`
--
ALTER TABLE `gamepictures`
  ADD CONSTRAINT `gamepictures_fk_1` FOREIGN KEY (`gameId`) REFERENCES `games` (`id`) ON DELETE CASCADE;

--
-- Megkötések a táblához `gamesawards`
--
ALTER TABLE `gamesawards`
  ADD CONSTRAINT `gamesawards_fk_1` FOREIGN KEY (`gameId`) REFERENCES `games` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `gamesawards_fk_2` FOREIGN KEY (`awardId`) REFERENCES `awards` (`id`) ON DELETE CASCADE;

--
-- Megkötések a táblához `gameslanguages`
--
ALTER TABLE `gameslanguages`
  ADD CONSTRAINT `gameslanguages_fk_1` FOREIGN KEY (`gameId`) REFERENCES `games` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `gameslanguages_fk_2` FOREIGN KEY (`languageId`) REFERENCES `languages` (`id`) ON DELETE CASCADE;

--
-- Megkötések a táblához `gamesonlineplatforms`
--
ALTER TABLE `gamesonlineplatforms`
  ADD CONSTRAINT `gamesonlineplatforms_fk_1` FOREIGN KEY (`gameId`) REFERENCES `games` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `gamesonlineplatforms_fk_2` FOREIGN KEY (`platformId`) REFERENCES `onlineplatforms` (`id`) ON DELETE CASCADE;

--
-- Megkötések a táblához `gamesplatforms`
--
ALTER TABLE `gamesplatforms`
  ADD CONSTRAINT `platforms_fk_1` FOREIGN KEY (`gameId`) REFERENCES `games` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `platforms_fk_2` FOREIGN KEY (`platformId`) REFERENCES `platforms` (`id`) ON DELETE CASCADE;

--
-- Megkötések a táblához `gamestags`
--
ALTER TABLE `gamestags`
  ADD CONSTRAINT `tags_fk_1` FOREIGN KEY (`gameId`) REFERENCES `games` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `tags_fk_2` FOREIGN KEY (`tagId`) REFERENCES `tags` (`id`) ON DELETE CASCADE;

--
-- Megkötések a táblához `pcspecs`
--
ALTER TABLE `pcspecs`
  ADD CONSTRAINT `pcspecs_fk_1` FOREIGN KEY (`gameId`) REFERENCES `games` (`id`) ON DELETE CASCADE;

--
-- Megkötések a táblához `ratings`
--
ALTER TABLE `ratings`
  ADD CONSTRAINT `ratings_fk_1` FOREIGN KEY (`gameId`) REFERENCES `games` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `ratings_fk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Megkötések a táblához `studiosgames`
--
ALTER TABLE `studiosgames`
  ADD CONSTRAINT `studiosgames_fk_1` FOREIGN KEY (`gameId`) REFERENCES `games` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `studiosgames_fk_2` FOREIGN KEY (`studioId`) REFERENCES `studios` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
