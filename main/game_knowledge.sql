-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2025. Feb 17. 11:58
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
  `role` varchar(100) DEFAULT NULL,
  `GameId` int(11) DEFAULT NULL,
  `ActorId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `actings`
--

INSERT INTO `actings` (`id`, `role`, `GameId`, `ActorId`) VALUES
(1, 'Female V', 1, 1),
(2, 'Male V', 1, 2),
(3, 'Johnny Silverhand', 1, 3),
(4, 'Panam Palmer', 1, 4),
(5, 'Judy Alvarez', 1, 5),
(6, 'James Sunderland / Doctor', 2, 6),
(8, 'Maria / Mary Shepherd-Sunderland', 2, 7),
(10, 'Laura', 2, 8),
(11, 'Angela Orosco', 2, 9),
(12, 'Eddie Dombrowski [voice]', 2, 10),
(13, 'Eddie Dombrowski [mocap] / Radio Voice / TV Voice', 2, 11),
(16, 'Nurse / Lying Figure', 2, 12),
(18, NULL, 2, 13),
(19, 'James Sunderland', 3, 14),
(20, 'Maria / Mary Shepherd-Sunderland', 3, 15),
(22, 'Angela Orosco', 3, 16),
(23, 'Eddie Dombrowski', 3, 17),
(24, 'Laura', 3, 18),
(25, 'Game Show Host', 3, 19),
(26, 'Doctor', 3, 20),
(27, 'Ernest Baldwin', 3, 21),
(28, 'Amy Baldwin', 3, 22),
(29, 'Hero / Prince', 14, 27),
(30, 'Leon Strohl da Haliaetus', 14, 28),
(31, 'Gallica', 14, 29),
(32, 'Samantha', 15, 30),
(33, 'Dr. Hill', 15, 31),
(34, 'Michael', 15, 32),
(35, 'Mecha Leon', 16, 33),
(36, 'Lady Venorama', 16, 34),
(37, 'Varric', 17, 35),
(38, 'Solas', 17, 36),
(39, 'Harding', 17, 37),
(40, 'Sargon', 18, 38),
(41, 'Vahram', 18, 39),
(42, 'Parrot', 18, 40),
(43, 'Titus', 19, 41),
(44, 'Gadriel', 19, 42),
(45, 'Calgar', 19, 39);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `actors`
--

CREATE TABLE `actors` (
  `id` int(11) NOT NULL,
  `firstName` varchar(100) DEFAULT NULL,
  `lastName` varchar(100) DEFAULT NULL,
  `profilePicture` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `actors`
--

INSERT INTO `actors` (`id`, `firstName`, `lastName`, `profilePicture`) VALUES
(1, 'Cherami', 'Leigh', 'pictures/actors/cherami_leigh_1.png'),
(2, 'Gavin', 'Drea', 'pictures/actors/gavin_drea_2.png'),
(3, 'Keanu', 'Reeves', 'pictures/actors/keanue_reeces_3.png'),
(4, 'Emily', 'Woo Zeller', 'pictures/actors/emily_woo_zeller_4.png'),
(5, 'Carla', 'Tassara', 'pictures/actors/carla_tassara_5.png'),
(6, 'Luke', 'Roberts', 'pictures/actors/luke_roberts_6.png'),
(7, 'Salóme', 'Gunnarsdóttir', 'pictures/actors/salóme_gunnarsdóttir_7.png'),
(8, 'Evie', 'Templeton', 'pictures/actors/evie_templeton_8.png'),
(9, 'Gianna', 'Kiehl', 'pictures/actors/gianna_kiehl_9.png'),
(10, 'Scott', 'Haining', 'pictures/actors/scott_haining_10.png'),
(11, 'Danny', 'Kirrane', 'pictures/actors/danny_kirrane_11.png'),
(12, 'Iga', 'Górecka', 'pictures/actors/iga_górecka_leigh_12.png'),
(13, 'Devora', 'Wilde', 'pictures/actors/devore_wilde_13.png'),
(14, 'Guy', 'Cihi', 'pictures/actors/guy_cihi_14.png'),
(15, 'Monica', 'Taylor Horgan', 'pictures/actors/monica_taylor_horgan_15.png'),
(16, 'Donna', 'Burke', 'pictures/actors/donna_burke_16.png'),
(17, 'David', 'Schaufele', 'pictures/actors/david_schaufele_17.png'),
(18, 'Jacquelyn', 'Breckenridge', NULL),
(19, 'Dominic', 'Allen', NULL),
(20, 'Dennis', 'Falt', 'pictures/actors/dennis_falt_20.png'),
(21, 'Ward', 'Sexton', 'pictures/actors/ward_sexton_21.png'),
(22, 'Florence', 'Minowa', 'pictures/actors/florence_minowa_22.png'),
(23, 'Alix', 'Wilton Regan', 'pictures/actors/alix_wilton_regan_23.png'),
(24, 'Anna', 'Skellern', 'pictures/actors/anna_skellem_24.png'),
(25, 'Anthon', 'Welsh', 'pictures/actors/anthon_welsh_25.png'),
(26, 'Jane', 'Perry', 'pictures/actors/jane_perry_26.png'),
(27, 'Caleb', 'Yen', 'pictures/actors/caleb_yen_27.png'),
(28, 'Stewart', 'Clarke', NULL),
(29, 'Alejandra', 'Reynoso', 'pictures/actors/alejandra_reynoso_29.png'),
(30, 'Hayden', 'Panettiere', 'pictures/actors/hayden_panettiere_28.png'),
(31, 'Peter', 'Stormare', 'pictures/actors/peter_stormare_29.png'),
(32, 'Brett', 'Dalton', 'pictures/actors/brett_dalton_30.png'),
(33, 'Kajikawa', 'Shohei', NULL),
(34, 'Koishikawa', 'Nana', NULL),
(35, 'Brian', 'Bloom', 'pictures/actors/brian_bloom_35.png'),
(36, 'Gareth', 'David-Lloyd', 'pictures/actors/gareth_david_lloyd_36.png'),
(37, 'Ali', 'Hillis', 'pictures/actors/ali_hillis_37.png'),
(38, 'Tommy', 'Sim\'aan', 'pictures/actors/tommy_simaan_38.png'),
(39, 'Stewart', 'Scudamore', 'pictures/actors/stewart_scudamore_39.png'),
(40, 'Adam', 'Diggle', 'pictures/actors/adam_diggle_40.png'),
(41, 'Clive', 'Standen', 'pictures/actors/clive_standen_41.png'),
(42, 'Arthur', 'Lee', 'pictures/actors/arthur_lee_42.png');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `ageratings`
--

CREATE TABLE `ageratings` (
  `id` int(11) NOT NULL,
  `rating` varchar(10) NOT NULL,
  `institution` varchar(4) NOT NULL,
  `GameId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `ageratings`
--

INSERT INTO `ageratings` (`id`, `rating`, `institution`, `GameId`) VALUES
(1, '18', 'PEGI', 1),
(2, 'M', 'ESRB', 2),
(3, 'M', 'ESRB', 3),
(4, 'E', 'ESRB', 4),
(5, 'E', 'ESRB', 5),
(6, 'T', 'ESRB', 14),
(7, '16', 'PEGI', 14),
(8, 'M', 'ESRB', 15),
(9, '18', 'PEGI', 15);

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
(1, 'TGA', 'Best Ongoing Game'),
(2, 'TGA', 'Best Score & Music'),
(3, 'BAFTA', 'Best Evolving Game'),
(4, 'BAFTA', 'Best Narrative'),
(5, 'TGA', 'Best Role Playing Game'),
(6, 'TGA', 'Game of the Year');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `blacklistedtokens`
--

CREATE TABLE `blacklistedtokens` (
  `id` int(11) NOT NULL,
  `token` text NOT NULL,
  `date` datetime NOT NULL,
  `UserId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `blacklistedtokens`
--

INSERT INTO `blacklistedtokens` (`id`, `token`, `date`, `UserId`) VALUES
(6, 'eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..LbpAGMVIGTQElwhg.hrYGj-fTDZajzpqj8AkylPOhkXVEzSESp3TIjk-IrCRlW81_WPdD12Y9w1VtrWuViPhkxZgnw4-2QlAe71LGV7dw2w3bSAbcajjwDw.ajciVncbxeYubzCeHto8_Q', '2025-01-22 09:43:47', 1);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `creations`
--

CREATE TABLE `creations` (
  `id` int(11) NOT NULL,
  `field` varchar(255) DEFAULT NULL,
  `GameId` int(11) DEFAULT NULL,
  `CreatorId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `creations`
--

INSERT INTO `creations` (`id`, `field`, `GameId`, `CreatorId`) VALUES
(1, 'director', 1, 1),
(2, 'story director', 1, 2),
(3, 'lead writer', 1, 3),
(4, 'principal writer', 1, 4),
(5, 'creator', 1, 5),
(6, 'lead writer', 2, 6),
(7, 'narrative designer', 2, 7),
(8, 'original scenerio', 2, 8),
(9, 'original concept', 2, 9),
(10, 'director', 3, 10),
(11, 'director', 3, 11),
(12, 'scenerio writer', 3, 8),
(13, 'director', 4, 12),
(14, 'director', 4, 13),
(15, 'director', 4, 14),
(16, 'story plan', 4, 15),
(17, 'creator', 5, 16),
(18, 'music', 5, 17),
(19, 'director, writer', 14, 18),
(20, 'writer', 14, 19),
(21, 'music composer', 14, 20),
(22, 'director, writer', 15, 21),
(23, 'music composer', 15, 22),
(24, 'concept artist', 15, 23);

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
(17, 'Hernan', 'Marandino', NULL),
(18, 'Hashino', 'Katsura', 'pictures/creators/hashino_katsura_18.png'),
(19, 'Kido', 'Azusa', 'pictures/creators/kido_azusa_19_png'),
(20, 'Meguro', 'Shoji', 'pictures/creators/meguro_shoji_20_png'),
(21, 'Alessandro', 'Gaudiosi', NULL),
(22, 'Mark', 'Korven', 'pictures/creators/mark_korven_22.png'),
(23, 'Zsóka', 'Nelli Erdélyi', NULL);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `favourites`
--

CREATE TABLE `favourites` (
  `id` int(11) NOT NULL,
  `GameId` int(11) DEFAULT NULL,
  `UserId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `favourites`
--

INSERT INTO `favourites` (`id`, `GameId`, `UserId`) VALUES
(1, 1, 1);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `forumcomments`
--

CREATE TABLE `forumcomments` (
  `id` int(11) NOT NULL,
  `content` text NOT NULL,
  `creation` datetime NOT NULL,
  `ForumpostId` int(11) DEFAULT NULL,
  `UserId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `forumposts`
--

CREATE TABLE `forumposts` (
  `id` int(11) NOT NULL,
  `content` text NOT NULL,
  `story` tinyint(1) NOT NULL DEFAULT 0,
  `gameplay` tinyint(1) NOT NULL DEFAULT 0,
  `creation` datetime NOT NULL,
  `GameId` int(11) DEFAULT NULL,
  `UserId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `gamepictures`
--

CREATE TABLE `gamepictures` (
  `id` int(11) NOT NULL,
  `url` varchar(255) NOT NULL,
  `GameId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `gamepictures`
--

INSERT INTO `gamepictures` (`id`, `url`, `GameId`) VALUES
(1, 'pictures/gallery/cyberpunk_2077_2020_1.png', 1),
(2, 'pictures/gallery/cyberpunk_2077_2020_2.png', 1);

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
  `promoArt` varchar(255) DEFAULT NULL,
  `controllerSupport` int(11) DEFAULT NULL,
  `crossplatform` int(11) DEFAULT NULL,
  `crossPlatformException` int(11) DEFAULT NULL,
  `steamdeckComp` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `games`
--

INSERT INTO `games` (`id`, `gameTitle`, `altGameTitle`, `description`, `release`, `boxart`, `promoArt`, `controllerSupport`, `crossplatform`, `crossPlatformException`, `steamdeckComp`) VALUES
(1, 'Cyberpunk 2077', 'サイバーパンク2077', 'Cyberpunk 2077 is an open-world, action-adventure RPG set in the dark future of Night City — a dangerous megalopolis obsessed with power, glamor, and ceaseless body modification.', '2020-12-10', 'pictures/boxarts/cyberpunk_2077_2020_boxart.png', NULL, 2, NULL, NULL, 2),
(2, 'Silent Hill 2', 'Silent Hill 2 Remake', 'Having received a letter from his deceased wife, James heads to where they shared so many memories, in the hope of seeing her one more time: Silent Hill.', '2024-10-08', 'pictures/boxarts/silent_hill_2_2024_boxart.png', NULL, 2, NULL, NULL, 0),
(3, 'Silent Hill 2', NULL, 'After receiving a letter from his late wife, from Silent Hill, James Sunderland heads towards the town to search for her, only to come across a terrifying road of truth and redemption.', '2001-09-24', 'pictures/boxarts/silent_hill_2_2001_boxart.png', NULL, 0, NULL, NULL, NULL),
(4, 'Chrono Trigger', 'Kurono toriga', 'Crono, a young boy, is thrust to adventure by destiny to destroy an oncoming threat that will destroy the world in 1999.', '1995-05-11', 'pictures/boxarts/chrono_trigger_1995_boxart.png', NULL, 1, NULL, NULL, 1),
(5, 'Forager', NULL, 'The highly popular and quirky \"idle game that you want to actively keep playing\". Explore, craft, gather & manage resources, find secrets and build your base out of nothing! Buy land to explore and expand!', '2019-06-18', 'pictures/boxarts/forager_2019_boxart.png', NULL, 1, NULL, NULL, 2),
(6, 'Forza Horizon', NULL, 'Celebrate speed, music and style at the Forza Horizon Festival. From the makers of the highest-rated racing franchise of this generation, Forza Horizon combines legendary Forza authenticity with the freedom of the open road.', '2012-10-23', 'pictures/boxarts/forza_horizon_2012_boxart.png', NULL, NULL, NULL, NULL, NULL),
(7, 'StarCraft 2', NULL, 'Four years after the events of StarCraft: Brood War (1998), Jim Raynor fights against the Dominion and begins a search for artifacts when at the same time the Zerg attack once again.', '2010-07-27', 'pictures/boxarts/starcraft_2_2012_boxart.png', NULL, 0, NULL, NULL, NULL),
(8, 'A Like a Dragon: Pirate Yakuza in Hawaii', NULL, 'Embark on an over-the-top, modern-day pirate adventure with an ex-yakuza, now pirate captain & his crew. Engage in exhilarating combat on land and sea in the hunt for lost memories and treasure.', '2025-06-23', 'pictures/boxarts/like_a_dragon_pirate_yakuza_in_hawaii_2025_boxart.png', NULL, NULL, NULL, NULL, NULL),
(9, 'Metal Gear Solid Delta: Snake Eater', NULL, 'Discover the origin story of iconic military operative Snake and begin to unravel the plot of the legendary METAL GEAR series.', '2025-06-11', 'pictures/boxarts/metal_gear_solid_delta_snake_eater_2025_boxart.png', 'pictures/promo/metal_gear_solid_delta_2025_promo.png', NULL, NULL, NULL, NULL),
(10, 'Doom: The Dark Ages', NULL, 'DOOM: The Dark Ages is the single-player, action FPS prequel to the critically acclaimed DOOM (2016) and DOOM Eternal. You are the DOOM Slayer, the legendary demon-killing warrior fighting endlessly against Hell. Experience the epic cinematic origin story of the DOOM Slayer\'s rage in 2025.', '2025-06-20', 'pictures/boxarts/doom_the_dark_ages_2025_boxart.png', 'pictures/promo/doom_dark_ages_2025_promo.png', NULL, NULL, NULL, NULL),
(11, 'Death Stranding 2: On The Beach', NULL, 'Embark on an inspiring mission of human connection beyond the UCA. Sam—with companions by his side—sets out on a new journey to save humanity from extinction. Join them as they traverse a world beset by otherworldly enemies, obstacles and a haunting question: should we have connected?', '2025-06-17', 'pictures/boxarts/death_stranding_2_on_the_beach_2025_boxart.png', 'pictures/promo/death_stranding_2_on_the_beach_2025_promo.png', NULL, NULL, NULL, NULL),
(12, 'Clair Obscur: Expedition 33', NULL, 'Lead the members of Expedition 33 on their quest to destroy the Paintress so that she can never paint death again. Explore a world of wonders inspired by Belle Époque France and battle unique enemies in this turn-based RPG with real-time mechanics.', '2025-06-02', 'pictures/boxarts/clair_obscur_expedition_33_boxart.png', 'pictures/promo/clair_obscur_expedition_33_promo.png', NULL, NULL, NULL, NULL),
(13, 'Indiana Jones and the Great Circle', NULL, 'Uncover one of history’s greatest mysteries in a first-person, single-player adventure. The year is 1937, sinister forces are scouring the globe for the secret to an ancient power connected to the Great Circle, and only one person can stop them - Indiana Jones™', '2024-12-09', 'pictures/boxarts/indiana_jones_and_the_great_circle_2025_boxart.png', NULL, NULL, NULL, NULL, NULL),
(14, 'Metaphor: ReFantazio', NULL, 'The throne sits empty after the king’s assassination. With no heirs, the will of the late king decrees that the next monarch will be elected by the people, & thus begins your fight for the throne.. ', '2024-10-11', 'pictures/boxarts/metaphor_refantazio_2024_boxart.png', NULL, 3, NULL, NULL, 1),
(15, 'Until Dawn', 'Until Dawn Remake', 'Until Dawn invites you to relive the nightmare, and immerse yourself in a gripping slasher horror where every decision can make the difference between life and death. ', '2024-10-04', 'pictures/boxarts/until_dawn_2025_boxart.png', NULL, 3, NULL, NULL, 0),
(16, 'Astro Bot', NULL, 'JOIN ASTRO IN A BRAND-NEW, SUPERSIZED SPACE ADVENTURE! The PS5® mothership has been wrecked, leaving ASTRO and the bot crew scattered all over the galaxies. Time to ride your trusty Dual Speeder across more than 50 planets full of fun, danger and surprises. On your journey, make the most of ASTRO\'s new powers and reunite with many iconic heroes from the PlayStation universe!', '2024-09-09', 'pictures/boxarts/astro_bot_2024_boxart.png', NULL, NULL, NULL, NULL, NULL),
(17, 'Dragon Age™: The Veilguard', NULL, 'Unite the Veilguard and defy the gods in Dragon Age™: The Veilguard, an immersive single-player RPG.', '2024-10-31', '/pictures/boxarts/dragon_age_the_veilguard_2024_boxart.png', NULL, 3, NULL, NULL, 2),
(18, 'Prince of Persia The Lost Crown', NULL, 'Dash into a stylish and thrilling action-adventure platformer set in a mythological Persian world where the boundaries of time and space are yours to manipulate.', '2024-08-08', 'pictures/boxarts/prince_of_persia_the_lost_crown_2024_boxart.png', NULL, 3, NULL, NULL, 2),
(19, 'Warhammer 40,000: Space Marine 2', NULL, 'Embody the superhuman skill and brutality of a Space Marine. Unleash deadly abilities and devastating weaponry to obliterate the relentless Tyranid swarms. Defend the Imperium in spectacular third-person action in solo or multiplayer modes.', '2024-09-09', 'pictures/boxarts/warhammer_40000_space_marine_2_boxart.png', NULL, 2, 1, 0, 1);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `gamesawards`
--

CREATE TABLE `gamesawards` (
  `id` int(11) NOT NULL,
  `year` int(11) NOT NULL,
  `result` tinyint(1) NOT NULL DEFAULT 0,
  `GameId` int(11) DEFAULT NULL,
  `AwardId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `gamesawards`
--

INSERT INTO `gamesawards` (`id`, `year`, `result`, `GameId`, `AwardId`) VALUES
(1, 2023, 1, 1, 1),
(2, 2021, 0, 1, 2),
(3, 2024, 1, 1, 3),
(4, 2021, 0, 1, 4),
(5, 2024, 1, 14, 5),
(6, 2024, 0, 14, 6);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `gameslanguages`
--

CREATE TABLE `gameslanguages` (
  `id` int(11) NOT NULL,
  `dub` tinyint(1) NOT NULL DEFAULT 0,
  `GameId` int(11) DEFAULT NULL,
  `LanguageId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `gameslanguages`
--

INSERT INTO `gameslanguages` (`id`, `dub`, `GameId`, `LanguageId`) VALUES
(1, 0, 1, 1),
(2, 1, 1, 2),
(3, 1, 1, 3),
(4, 1, 1, 4),
(5, 1, 1, 5),
(6, 1, 1, 6),
(7, 0, 1, 7),
(8, 0, 1, 8),
(9, 1, 1, 9),
(10, 1, 1, 10),
(11, 1, 1, 11),
(12, 1, 1, 12),
(13, 1, 1, 13),
(14, 1, 1, 14),
(15, 0, 1, 15),
(16, 0, 1, 16),
(17, 0, 1, 17),
(18, 0, 1, 18),
(19, 0, 1, 19),
(20, 1, 14, 2),
(21, 1, 14, 9),
(22, 0, 14, 3),
(23, 1, 15, 2),
(24, 1, 15, 3),
(25, 1, 15, 4);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `gamesonlineplatforms`
--

CREATE TABLE `gamesonlineplatforms` (
  `id` int(11) NOT NULL,
  `GameId` int(11) DEFAULT NULL,
  `OnlineplatformId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `gamesonlineplatforms`
--

INSERT INTO `gamesonlineplatforms` (`id`, `GameId`, `OnlineplatformId`) VALUES
(1, 14, 1),
(2, 14, 4),
(3, 14, 9);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `gamesplatforms`
--

CREATE TABLE `gamesplatforms` (
  `id` int(11) NOT NULL,
  `GameId` int(11) DEFAULT NULL,
  `PlatformId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `gamesplatforms`
--

INSERT INTO `gamesplatforms` (`id`, `GameId`, `PlatformId`) VALUES
(1, 1, 1),
(2, 1, 5),
(3, 1, 6),
(4, 1, 9),
(5, 1, 10),
(9, 14, 1),
(6, 14, 5),
(7, 14, 6),
(8, 14, 10);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `gamestags`
--

CREATE TABLE `gamestags` (
  `id` int(11) NOT NULL,
  `GameId` int(11) DEFAULT NULL,
  `TagId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `gamestags`
--

INSERT INTO `gamestags` (`id`, `GameId`, `TagId`) VALUES
(24, 1, 1),
(25, 1, 6),
(26, 1, 7),
(27, 1, 10),
(28, 1, 21),
(29, 1, 24),
(30, 2, 5),
(31, 2, 11),
(32, 2, 12),
(33, 2, 20),
(34, 2, 24),
(35, 3, 5),
(36, 3, 11),
(37, 3, 12),
(38, 3, 20),
(39, 3, 24),
(40, 4, 8),
(41, 4, 13),
(42, 4, 20),
(43, 4, 21),
(44, 4, 24),
(45, 5, 12),
(46, 5, 13),
(47, 5, 24),
(48, 6, 3),
(49, 6, 21),
(50, 6, 24),
(51, 6, 25),
(101, 7, 4),
(55, 7, 13),
(52, 7, 23),
(53, 7, 24),
(54, 7, 25),
(56, 8, 6),
(57, 8, 11),
(58, 8, 16),
(59, 9, 1),
(60, 9, 6),
(61, 9, 11),
(62, 9, 12),
(63, 9, 20),
(64, 9, 24),
(65, 10, 1),
(66, 10, 10),
(67, 10, 15),
(68, 10, 20),
(69, 10, 24),
(70, 11, 11),
(71, 11, 24),
(72, 12, 7),
(73, 12, 24),
(74, 13, 2),
(75, 13, 10),
(76, 13, 20),
(77, 13, 24),
(78, 14, 8),
(79, 14, 24),
(80, 15, 5),
(82, 15, 11),
(81, 15, 20),
(83, 15, 24),
(84, 16, 2),
(85, 16, 11),
(86, 16, 20),
(87, 16, 22),
(88, 16, 24),
(89, 17, 7),
(90, 17, 11),
(91, 17, 16),
(92, 17, 24),
(93, 18, 2),
(94, 18, 24),
(95, 19, 1),
(96, 19, 6),
(97, 19, 11),
(98, 19, 20),
(99, 19, 24),
(100, 19, 25);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `languages`
--

CREATE TABLE `languages` (
  `id` int(11) NOT NULL,
  `language` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `languages`
--

INSERT INTO `languages` (`id`, `language`) VALUES
(7, 'arabian'),
(8, 'czech'),
(2, 'english'),
(3, 'french'),
(5, 'german'),
(1, 'hungarian'),
(4, 'italian'),
(9, 'japanese'),
(10, 'korean'),
(16, 'la spanish'),
(11, 'polish'),
(12, 'portuguese'),
(13, 'russian'),
(14, 'simplified chinese'),
(6, 'spanish'),
(17, 'thai'),
(15, 'traditional chinese'),
(18, 'turkish'),
(19, 'ukrainian');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `onlineplatforms`
--

CREATE TABLE `onlineplatforms` (
  `id` int(11) NOT NULL,
  `onlineplatform` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `onlineplatforms`
--

INSERT INTO `onlineplatforms` (`id`, `onlineplatform`) VALUES
(7, 'EA app'),
(3, 'Epic Games Store'),
(2, 'GOG'),
(9, 'PSN'),
(6, 'Rockstar Games Launcher'),
(1, 'Steam'),
(5, 'Ubisoft Connect'),
(4, 'Xbox'),
(8, 'Xbox PC');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `pcspecs`
--

CREATE TABLE `pcspecs` (
  `id` int(11) NOT NULL,
  `minOp` varchar(50) NOT NULL,
  `minCpu` varchar(100) NOT NULL,
  `minRam` varchar(10) NOT NULL,
  `minGpu` varchar(100) NOT NULL,
  `minDirectx` varchar(20) DEFAULT NULL,
  `cpu` varchar(100) DEFAULT NULL,
  `ram` varchar(10) DEFAULT NULL,
  `gpu` varchar(100) DEFAULT NULL,
  `directx` varchar(20) DEFAULT NULL,
  `op` varchar(50) DEFAULT NULL,
  `storage` varchar(10) DEFAULT NULL,
  `sidenote` text DEFAULT NULL,
  `GameId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `pcspecs`
--

INSERT INTO `pcspecs` (`id`, `minOp`, `minCpu`, `minRam`, `minGpu`, `minDirectx`, `cpu`, `ram`, `gpu`, `directx`, `op`, `storage`, `sidenote`, `GameId`) VALUES
(1, '64-bit Windows 10', 'Core i7-6700 or Ryzen 5 1600', '12 GB', 'GeForce GTX 1060 6GB or Radeon RX 580 8GB or Arc A380', 'Version 12', 'Core i7-12700 or Ryzen 7 7800X3D', '16 GB', 'GeForce RTX 2060 SUPER or Radeon RX 5700 XT or Arc A770', 'Version 12', ' 64-bit Windows 10', '70 GB', 'SSD required.', 1),
(2, 'Windows 10', ' Intel Core i5-3470 or AMD FX-6300', '6 GB', 'NVIDIA GeForce GTX 750 Ti, 4GB or AMD Radeon R7 360, 4GB or Intel Arc A310, 4GB', 'Version 11', ' Intel Core i5-7600 or Ryzen 5 2600', '8 GB', 'NVIDIA GeForce GTX 970, 4GB or AMD Radeon RX 480, 4GB or Intel Arc A380, 6GB', 'Version 11', 'Windows 10', '93 GB', NULL, 14);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `platforms`
--

CREATE TABLE `platforms` (
  `id` int(11) NOT NULL,
  `platform` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `platforms`
--

INSERT INTO `platforms` (`id`, `platform`) VALUES
(13, 'Game Boy'),
(15, 'Game Boy Advance'),
(17, 'Nintendo 3DS'),
(16, 'Nintendo DS'),
(11, 'Nintendo Enterteinment System'),
(14, 'Nintendo Switch'),
(1, 'PC'),
(2, 'Playstation 1'),
(3, 'Playstation 2'),
(4, 'Playstation 3'),
(5, 'Playstation 4'),
(6, 'Playstation 5'),
(12, 'Super Nintendo Enterteinment System'),
(8, 'Xbox'),
(7, 'Xbox 360'),
(9, 'Xbox One'),
(10, 'Xbox SeriesX/S');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `ratings`
--

CREATE TABLE `ratings` (
  `id` int(11) NOT NULL,
  `positive` tinyint(1) NOT NULL DEFAULT 0,
  `GameId` int(11) DEFAULT NULL,
  `UserId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `ratings`
--

INSERT INTO `ratings` (`id`, `positive`, `GameId`, `UserId`) VALUES
(1, 0, 1, 1);

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
(1, 'CD Projekt RED', 'pictures/studios/cd_projekt_red_logo.png'),
(2, 'Blooper Team', 'pictures/studios/blooper_team_logo.png'),
(3, 'Konami', 'pictures/studios/konami_logo.png'),
(4, 'Square', 'pictures/studios/square_logo.png'),
(5, 'Square Enix', 'pictures/studios/square_enix_logo.png'),
(6, 'HopFrog', 'pictures/studios/hopfrog_logo.png'),
(7, 'Humble Bundle', 'pictures/studios/humble_bundle_logo.png'),
(8, 'Playground Games', 'pictures/studios/playground_games_logo.png'),
(9, 'Microsoft Studios', 'pictures/studios/microsoft_studios_logo.png'),
(10, 'Atlus', 'pictures/studios/atlus_logo.png'),
(11, 'Studio Zero', 'pictures/studios/studio_zero_logo.png'),
(12, 'Sega', 'pictures/studios/sega_logo.png'),
(13, 'Ballistic Moon', 'pictures/studios/ballistic_moon_logo.png'),
(14, 'Sony Interactive Entertainment', 'pictures/studios/sony_interactive_entertaiment_logo.png'),
(15, 'Team ASOBI', 'pictures/studios/team_asobi_logo.png'),
(16, 'BioWare', 'pictures/studios/bioware_logo.png'),
(17, 'Electronic Arts', 'pictures/studios/electronic_arts_logo.png'),
(18, 'Saber Interactive', 'pictures/studios/saber_interactive_logo.png'),
(19, 'Ubisoft Montpellier', 'pictures/studios/ubisoft_montpellier_logo.png'),
(20, 'Ubisoft', 'pictures/studios/ubisoft_logo.png'),
(21, 'Blizzard Entertainment', 'pictures/studios/blizzard_entertaiment_logo.png'),
(22, 'Ryu Ga Gotoku Studio', 'pictures/studios/ryu_ga_gotoku_studio_logo.png'),
(23, 'id Software', 'pictures/studios/id_software_logo.png'),
(24, 'Bethesda Softworks', 'pictures/studios/bethesda_softworks_logo.png'),
(25, 'Kojima Productions', 'pictures/studios/kojima_productions_logo.png'),
(26, 'Kepler Interactive', 'pictures/studios/kepler_interactive_logo.png'),
(27, ' Sandfall Interactive', 'pictures/studios/sandfall_interactive_logo.png');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `studiosgames`
--

CREATE TABLE `studiosgames` (
  `id` int(11) NOT NULL,
  `isDeveloper` tinyint(1) NOT NULL DEFAULT 0,
  `isPublisher` tinyint(1) NOT NULL DEFAULT 0,
  `GameId` int(11) DEFAULT NULL,
  `StudioId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `studiosgames`
--

INSERT INTO `studiosgames` (`id`, `isDeveloper`, `isPublisher`, `GameId`, `StudioId`) VALUES
(1, 1, 1, 1, 1),
(2, 1, 0, 2, 2),
(3, 0, 1, 2, 3),
(4, 1, 1, 3, 3),
(5, 1, 1, 4, 4),
(6, 1, 1, 4, 5),
(7, 1, 0, 5, 6),
(8, 0, 1, 5, 7),
(9, 1, 0, 14, 11),
(10, 1, 1, 14, 10),
(11, 1, 0, 15, 13),
(12, 0, 1, 15, 14),
(13, 1, 0, 6, 8),
(14, 0, 1, 6, 9),
(15, 1, 1, 7, 21),
(16, 1, 0, 8, 22),
(17, 1, 1, 9, 3),
(18, 1, 0, 10, 23),
(19, 0, 1, 10, 24);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `tags`
--

CREATE TABLE `tags` (
  `id` int(11) NOT NULL,
  `tag` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `tags`
--

INSERT INTO `tags` (`id`, `tag`) VALUES
(6, 'Action'),
(2, 'Adventure'),
(18, 'Beat\'em up'),
(15, 'Boomer Shooter'),
(26, 'Coop'),
(17, 'Fighting'),
(10, 'FPS'),
(16, 'Hack & Slash'),
(5, 'Horror'),
(8, 'JRPG'),
(20, 'Linear'),
(14, 'MMORPG'),
(25, 'Multiplayer'),
(21, 'Open World'),
(22, 'Platformer'),
(27, 'PvP'),
(3, 'Racing'),
(9, 'Romance'),
(7, 'RPG'),
(23, 'RTS'),
(19, 'Sandbox'),
(1, 'Shooter'),
(24, 'Singleplayer'),
(4, 'Strategy'),
(12, 'Survival'),
(13, 'Top-Down'),
(11, 'TPS');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `admin` tinyint(1) NOT NULL DEFAULT 0,
  `creation` date NOT NULL
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
  ADD UNIQUE KEY `Actings_ActorId_GameId_unique` (`GameId`,`ActorId`),
  ADD KEY `ActorId` (`ActorId`);

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
  ADD KEY `GameId` (`GameId`);

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
  ADD KEY `UserId` (`UserId`);

--
-- A tábla indexei `creations`
--
ALTER TABLE `creations`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Creations_CreatorId_GameId_unique` (`GameId`,`CreatorId`),
  ADD KEY `CreatorId` (`CreatorId`);

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
  ADD KEY `GameId` (`GameId`),
  ADD KEY `UserId` (`UserId`);

--
-- A tábla indexei `forumcomments`
--
ALTER TABLE `forumcomments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ForumpostId` (`ForumpostId`),
  ADD KEY `UserId` (`UserId`);

--
-- A tábla indexei `forumposts`
--
ALTER TABLE `forumposts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `GameId` (`GameId`),
  ADD KEY `UserId` (`UserId`);

--
-- A tábla indexei `gamepictures`
--
ALTER TABLE `gamepictures`
  ADD PRIMARY KEY (`id`),
  ADD KEY `GameId` (`GameId`);

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
  ADD UNIQUE KEY `Gamesawards_AwardId_GameId_unique` (`GameId`,`AwardId`),
  ADD KEY `AwardId` (`AwardId`);

--
-- A tábla indexei `gameslanguages`
--
ALTER TABLE `gameslanguages`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Gameslanguages_LanguageId_GameId_unique` (`GameId`,`LanguageId`),
  ADD KEY `LanguageId` (`LanguageId`);

--
-- A tábla indexei `gamesonlineplatforms`
--
ALTER TABLE `gamesonlineplatforms`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Gamesonlineplatforms_OnlineplatformId_GameId_unique` (`GameId`,`OnlineplatformId`),
  ADD KEY `OnlineplatformId` (`OnlineplatformId`);

--
-- A tábla indexei `gamesplatforms`
--
ALTER TABLE `gamesplatforms`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Gamesplatforms_PlatformId_GameId_unique` (`GameId`,`PlatformId`),
  ADD KEY `PlatformId` (`PlatformId`);

--
-- A tábla indexei `gamestags`
--
ALTER TABLE `gamestags`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Gamestags_TagId_GameId_unique` (`GameId`,`TagId`),
  ADD KEY `TagId` (`TagId`);

--
-- A tábla indexei `languages`
--
ALTER TABLE `languages`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `language` (`language`);

--
-- A tábla indexei `onlineplatforms`
--
ALTER TABLE `onlineplatforms`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `onlineplatform` (`onlineplatform`);

--
-- A tábla indexei `pcspecs`
--
ALTER TABLE `pcspecs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `GameId` (`GameId`);

--
-- A tábla indexei `platforms`
--
ALTER TABLE `platforms`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `platform` (`platform`);

--
-- A tábla indexei `ratings`
--
ALTER TABLE `ratings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `GameId` (`GameId`),
  ADD KEY `UserId` (`UserId`);

--
-- A tábla indexei `studios`
--
ALTER TABLE `studios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- A tábla indexei `studiosgames`
--
ALTER TABLE `studiosgames`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Studiosgames_StudioId_GameId_unique` (`GameId`,`StudioId`),
  ADD KEY `StudioId` (`StudioId`);

--
-- A tábla indexei `tags`
--
ALTER TABLE `tags`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `tag` (`tag`);

--
-- A tábla indexei `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `actings`
--
ALTER TABLE `actings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT a táblához `actors`
--
ALTER TABLE `actors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT a táblához `ageratings`
--
ALTER TABLE `ageratings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT a táblához `awards`
--
ALTER TABLE `awards`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT a táblához `blacklistedtokens`
--
ALTER TABLE `blacklistedtokens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT a táblához `creations`
--
ALTER TABLE `creations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT a táblához `creators`
--
ALTER TABLE `creators`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT a táblához `favourites`
--
ALTER TABLE `favourites`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT a táblához `forumcomments`
--
ALTER TABLE `forumcomments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `forumposts`
--
ALTER TABLE `forumposts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `gamepictures`
--
ALTER TABLE `gamepictures`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT a táblához `games`
--
ALTER TABLE `games`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT a táblához `gamesawards`
--
ALTER TABLE `gamesawards`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT a táblához `gameslanguages`
--
ALTER TABLE `gameslanguages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT a táblához `gamesonlineplatforms`
--
ALTER TABLE `gamesonlineplatforms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT a táblához `gamesplatforms`
--
ALTER TABLE `gamesplatforms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT a táblához `gamestags`
--
ALTER TABLE `gamestags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;

--
-- AUTO_INCREMENT a táblához `languages`
--
ALTER TABLE `languages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT a táblához `onlineplatforms`
--
ALTER TABLE `onlineplatforms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT a táblához `pcspecs`
--
ALTER TABLE `pcspecs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT a táblához `platforms`
--
ALTER TABLE `platforms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT a táblához `ratings`
--
ALTER TABLE `ratings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT a táblához `studios`
--
ALTER TABLE `studios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT a táblához `studiosgames`
--
ALTER TABLE `studiosgames`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT a táblához `tags`
--
ALTER TABLE `tags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

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
  ADD CONSTRAINT `actings_ibfk_1` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `actings_ibfk_2` FOREIGN KEY (`ActorId`) REFERENCES `actors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `ageratings`
--
ALTER TABLE `ageratings`
  ADD CONSTRAINT `ageratings_ibfk_1` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `blacklistedtokens`
--
ALTER TABLE `blacklistedtokens`
  ADD CONSTRAINT `blacklistedtokens_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Megkötések a táblához `creations`
--
ALTER TABLE `creations`
  ADD CONSTRAINT `creations_ibfk_1` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `creations_ibfk_2` FOREIGN KEY (`CreatorId`) REFERENCES `creators` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `favourites`
--
ALTER TABLE `favourites`
  ADD CONSTRAINT `favourites_ibfk_1` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `favourites_ibfk_2` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Megkötések a táblához `forumcomments`
--
ALTER TABLE `forumcomments`
  ADD CONSTRAINT `forumcomments_ibfk_1` FOREIGN KEY (`ForumpostId`) REFERENCES `forumposts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `forumcomments_ibfk_2` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Megkötések a táblához `forumposts`
--
ALTER TABLE `forumposts`
  ADD CONSTRAINT `forumposts_ibfk_1` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `forumposts_ibfk_2` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Megkötések a táblához `gamepictures`
--
ALTER TABLE `gamepictures`
  ADD CONSTRAINT `gamepictures_ibfk_1` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `gamesawards`
--
ALTER TABLE `gamesawards`
  ADD CONSTRAINT `gamesawards_ibfk_1` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesawards_ibfk_2` FOREIGN KEY (`AwardId`) REFERENCES `awards` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `gameslanguages`
--
ALTER TABLE `gameslanguages`
  ADD CONSTRAINT `gameslanguages_ibfk_1` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gameslanguages_ibfk_2` FOREIGN KEY (`LanguageId`) REFERENCES `languages` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `gamesonlineplatforms`
--
ALTER TABLE `gamesonlineplatforms`
  ADD CONSTRAINT `gamesonlineplatforms_ibfk_1` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesonlineplatforms_ibfk_2` FOREIGN KEY (`OnlineplatformId`) REFERENCES `onlineplatforms` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `gamesplatforms`
--
ALTER TABLE `gamesplatforms`
  ADD CONSTRAINT `gamesplatforms_ibfk_1` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesplatforms_ibfk_2` FOREIGN KEY (`PlatformId`) REFERENCES `platforms` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `gamestags`
--
ALTER TABLE `gamestags`
  ADD CONSTRAINT `gamestags_ibfk_1` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamestags_ibfk_2` FOREIGN KEY (`TagId`) REFERENCES `tags` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `pcspecs`
--
ALTER TABLE `pcspecs`
  ADD CONSTRAINT `pcspecs_ibfk_1` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Megkötések a táblához `ratings`
--
ALTER TABLE `ratings`
  ADD CONSTRAINT `ratings_ibfk_1` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ratings_ibfk_2` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Megkötések a táblához `studiosgames`
--
ALTER TABLE `studiosgames`
  ADD CONSTRAINT `studiosgames_ibfk_1` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `studiosgames_ibfk_2` FOREIGN KEY (`StudioId`) REFERENCES `studios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
