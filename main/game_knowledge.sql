-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2025. Már 10. 19:51
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
  `id` int(10) UNSIGNED NOT NULL,
  `role` varchar(100) DEFAULT NULL,
  `GameId` int(10) UNSIGNED DEFAULT NULL,
  `ActorId` int(10) UNSIGNED DEFAULT NULL
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
(45, 'Calgar', 19, 39),
(46, 'Rogue Amendiares', 1, 26),
(47, 'Alt Cunningham', 1, 23),
(48, 'River Ward', 1, 43),
(49, 'Jackie Welles', 1, 44),
(50, 'Goro Takemura', 1, 45),
(51, 'Holly Cruz', 6, 23),
(52, 'Anna', 6, 26),
(53, 'Ali Howard', 6, 25),
(54, 'Valerian Mengsk', 7, 47),
(55, 'Arcturus Mengsk', 7, 46),
(56, 'Matt Horner', 7, 35),
(57, 'Goro Majima', 8, 48),
(58, 'Noah Rich', 8, 49),
(59, 'Teruhiko Shigaki', 8, 50),
(60, 'Snake', 9, 51),
(61, 'Major Zero', 9, 52),
(62, 'Ocelot', 9, 47),
(63, 'Tomorrow', 11, 53),
(64, 'Fragile', 11, 54),
(65, 'Sam Porter Bridges', 11, 55),
(66, 'Gustave [mocap] / Renoir', 12, 56),
(67, 'Gustav', 12, 57),
(68, 'Lune', 12, 58),
(69, 'Indiana Jones', 13, 59),
(70, 'Ginetta \'Gina\' Lombardi', 13, 60),
(71, 'Locus', 13, 61);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `actors`
--

CREATE TABLE `actors` (
  `id` int(10) UNSIGNED NOT NULL,
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
(3, 'Keanu', 'Reeves', 'pictures/actors/keanue_reeves_3.png'),
(4, 'Emily', 'Woo Zeller', 'pictures/actors/emily_woo_zeller_4.png'),
(5, 'Carla', 'Tassara', 'pictures/actors/carla_tassara_5.png'),
(6, 'Luke', 'Roberts', 'pictures/actors/luke_roberts_6.png'),
(7, 'Salóme', 'Gunnarsdóttir', 'pictures/actors/salóme_gunnarsdóttir_7.png'),
(8, 'Evie', 'Templeton', 'pictures/actors/evie_templeton_8.png'),
(9, 'Gianna', 'Kiehl', 'pictures/actors/gianna_kiehl_9.png'),
(10, 'Scott', 'Haining', 'pictures/actors/scott_haining_10.png'),
(11, 'Danny', 'Kirrane', 'pictures/actors/danny_kirrane_11.png'),
(12, 'Iga', 'Górecka', 'pictures/actors/iga_gorecka_leigh_12.png'),
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
(25, 'Anthony', 'Welsh', 'pictures/actors/anthony_welsh_25.png'),
(26, 'Jane', 'Perry', 'pictures/actors/jane_perry_26.png'),
(27, 'Caleb', 'Yen', 'pictures/actors/caleb_yen_27.png'),
(28, 'Stewart', 'Clarke', NULL),
(29, 'Alejandra', 'Reynoso', 'pictures/actors/alejandra_reynoso_29.png'),
(30, 'Hayden', 'Panettiere', 'pictures/actors/hayden_panettiere_30.png'),
(31, 'Peter', 'Stormare', 'pictures/actors/peter_stormare_31.png'),
(32, 'Brett', 'Dalton', 'pictures/actors/brett_dalton_32.png'),
(33, 'Kajikawa', 'Shohei', NULL),
(34, 'Koishikawa', 'Nana', NULL),
(35, 'Brian', 'Bloom', 'pictures/actors/brian_bloom_35.png'),
(36, 'Gareth', 'David-Lloyd', 'pictures/actors/gareth_david_lloyd_36.png'),
(37, 'Ali', 'Hillis', 'pictures/actors/ali_hillis_37.png'),
(38, 'Tommy', 'Si\'maan', 'pictures/actors/tommy_simaan_38.png'),
(39, 'Stewart', 'Scudamore', 'pictures/actors/stewart_scudamore_39.png'),
(40, 'Adam', 'Diggle', 'pictures/actors/adam_diggle_40.png'),
(41, 'Clive', 'Standen', 'pictures/actors/clive_standen_41.png'),
(42, 'Arthur', 'Lee', 'pictures/actors/arthur_lee_42.png'),
(43, 'Robbie', 'Daymond', 'pictures/actors/robbie_daymond_43.png'),
(44, 'Jason', 'Hightower', 'pictures/actors/jason_hightower_44.png'),
(45, 'Rome', 'Kanda', 'pictures/actors/rome_kanda_45.png'),
(46, 'James', 'Harper', 'pictures/actors/james_haper_46.png'),
(47, 'Josh', 'Keaton', 'pictures/actors/josh_keaton_47.png'),
(48, 'Ugaki', 'Hidenari', 'pictures/actors/ugaki_hidenari_48.png'),
(49, 'Uika', 'First Summer', 'pictures/actors/uika_first_summer_49.png'),
(50, 'Aoki', 'Munetaka', 'pictures/actors/aoki_munetaka_50.png'),
(51, 'David', 'Hayter', 'pictures/actors/david_hayter_51.png'),
(52, 'James', 'Piddock', 'pictures/actors/james_piddock_52.png'),
(53, 'Elle', 'Fanning', 'pictures/actors/elle_fanning_53.png'),
(54, 'Léa', 'Seydoux', 'pictures/actors/lea_seydoux_54.png'),
(55, 'Norman', 'Reedus', 'pictures/actors/norman_reedus_55.png'),
(56, 'Maxence', 'Cazorla', 'pictures/actors/maxence_cazorla_56.png'),
(57, 'Charlie', 'Cox', 'pictures/actors/charlie_cox_57.png'),
(58, 'Estelle', 'Darnault', 'pictures/actors/estelle_darnault_58.png'),
(59, 'Troy', 'Baker', 'pictures/actors/troy_baker_59.png'),
(60, 'Alessandra', 'Mastronardi', 'pictures/actors/alessandra_mastronardi_60.png'),
(61, 'Tony', 'Todd', 'pictures/actors/tony_todd_61.png');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `ageratings`
--

CREATE TABLE `ageratings` (
  `id` int(10) UNSIGNED NOT NULL,
  `rating` varchar(10) NOT NULL,
  `institution` varchar(4) NOT NULL,
  `url` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `ageratings`
--

INSERT INTO `ageratings` (`id`, `rating`, `institution`, `url`) VALUES
(1, '3', 'PEGI', '/pictures/ageratings/PEGI_3.png'),
(2, '7', 'PEGI', '/pictures/ageratings/PEGI_7.png'),
(3, '12', 'PEGI', '/pictures/ageratings/PEGI_12.png'),
(4, '16', 'PEGI', '/pictures/ageratings/PEGI_16.png'),
(5, '18', 'PEGI', '/pictures/ageratings/PEGI_18.png'),
(6, 'E', 'ESRB', '/pictures/ageratings/ESRB_E.png'),
(7, 'E10+', 'ESRB', '/pictures/ageratings/ESRB_E10+.png'),
(8, 'T', 'ESRB', '/pictures/ageratings/ESRB_T.png'),
(9, 'M', 'ESRB', '/pictures/ageratings/ESRB_M.png'),
(10, 'A', 'ESRB', '/pictures/ageratings/ESRB_A.png'),
(11, 'A', 'CERO', '/pictures/ageratings/CERO_A.png'),
(12, 'B', 'CERO', '/pictures/ageratings/CERO_B.png'),
(13, 'C', 'CERO', '/pictures/ageratings/CERO_C.png'),
(14, 'D', 'CERO', '/pictures/ageratings/CERO_D.png'),
(15, 'Z', 'CERO', '/pictures/ageratings/CERO_Z.png');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `awards`
--

CREATE TABLE `awards` (
  `id` int(10) UNSIGNED NOT NULL,
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
(6, 'TGA', 'Game of the Year'),
(7, 'TGA', 'Best Narrative'),
(8, 'BAFTA', 'Best Debut Game'),
(9, 'BAFTA', 'Best Strategy Game'),
(10, 'BAFTA', 'Best Multiplayer'),
(11, 'TGA', 'Innovation in Accessibility'),
(12, 'TGA', 'Best Action/Adventure Game'),
(13, 'TGA', 'Best Action Game'),
(14, 'TGA', 'Best Multiplayer Game');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `blacklistedtokens`
--

CREATE TABLE `blacklistedtokens` (
  `id` int(10) UNSIGNED NOT NULL,
  `token` text NOT NULL,
  `date` datetime NOT NULL,
  `UserId` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `creations`
--

CREATE TABLE `creations` (
  `id` int(10) UNSIGNED NOT NULL,
  `field` varchar(255) DEFAULT NULL,
  `GameId` int(10) UNSIGNED DEFAULT NULL,
  `CreatorId` int(10) UNSIGNED DEFAULT NULL
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
(24, 'concept artist', 15, 23),
(25, 'character concept artist', 1, 24),
(26, 'concept artist', 1, 25),
(27, 'additional art director', 1, 26),
(28, 'storyboard artist: trailer', 1, 27),
(29, 'senior previz artist', 1, 28),
(30, 'director', 6, 29),
(31, 'director', 6, 30),
(32, 'writer', 6, 31),
(33, 'director', 7, 32),
(34, 'writer', 7, 33),
(35, 'writer', 7, 34),
(36, 'script writer', 8, 35),
(37, 'technical director', 8, 36),
(38, 'executive director', 8, 37),
(39, 'director', 10, 38),
(40, 'director', 13, 39),
(41, 'writer', 13, 40),
(42, 'writer', 13, 41),
(43, 'director', 16, 42),
(44, 'director', 17, 45),
(45, 'director', 17, 46),
(46, 'writer', 17, 47),
(47, 'art director', 18, 48),
(48, 'cinematic director', 18, 49),
(49, 'world director', 18, 50),
(50, 'cinematics director', 19, 51);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `creators`
--

CREATE TABLE `creators` (
  `id` int(10) UNSIGNED NOT NULL,
  `firstName` varchar(100) DEFAULT NULL,
  `lastName` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `creators`
--

INSERT INTO `creators` (`id`, `firstName`, `lastName`) VALUES
(1, 'Adam', 'Badowski'),
(2, 'Marcin', 'Blacha'),
(3, 'Tomasz', 'Marchewka'),
(4, 'Jakub', 'Szamalek'),
(5, 'Mike', 'Pondsmith'),
(6, 'Andrzej', 'Madrzak'),
(7, 'Barbara', 'Kciuk'),
(8, 'Hiroyuki', 'Owaku'),
(9, 'Takayuki', 'Kobayashi'),
(10, 'Masashi', 'Tsuboyama'),
(11, 'Keiichiro', 'Toyama'),
(12, 'Yoshinori', 'Kitase'),
(13, 'Akihiko', 'Matsui'),
(14, 'Takashi', 'Tokita'),
(15, 'Masato', 'Kato'),
(16, 'Mariano', 'Cavallero'),
(17, 'Hernan', 'Marandino'),
(18, 'Hashino', 'Katsura'),
(19, 'Kido', 'Azusa'),
(20, 'Meguro', 'Shoji'),
(21, 'Alessandro', 'Gaudiosi'),
(22, 'Mark', 'Korven'),
(23, 'Zsóka', 'Nelli Erdélyi'),
(24, 'Marek', 'Brzezinski'),
(25, 'Paul', 'Chadeisson'),
(26, 'Marian', 'Chomiak'),
(27, 'Giuseppe', 'Cristiano'),
(28, 'Carles', 'Carrión Díaz'),
(29, 'Ralph', 'Fulton'),
(30, 'Blade', 'Zavier'),
(31, 'James', 'Worrall'),
(32, 'Nicholas', 'S. Carpenter'),
(33, 'Cameron', 'Dayton'),
(34, 'Brian', 'Kindregan'),
(35, 'Furuta', 'Tsuyoshi'),
(36, 'Ito', 'Yutaka'),
(37, 'Yokoyama', 'Masayoshi'),
(38, 'Hugo', 'Martin'),
(39, 'Jerk', 'Gustafsson'),
(40, 'Tommy', 'Tordsson'),
(41, 'Ed', 'Curtis-Sivess'),
(42, 'Nicolas', 'Doucet'),
(43, 'Shôhei', 'Kajikawa'),
(44, 'Nana', 'Koishikawa'),
(45, 'Andy', 'Busche'),
(46, 'Preston', 'Watamaniuk'),
(47, 'Brianne', 'Battye'),
(48, 'Jean-Christophe', 'Alessandri'),
(49, 'Joseph', 'Antoine Clavet'),
(50, 'Christophe', 'Pic'),
(51, 'John', 'Dower');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `favourites`
--

CREATE TABLE `favourites` (
  `id` int(10) UNSIGNED NOT NULL,
  `GameId` int(10) UNSIGNED DEFAULT NULL,
  `UserId` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `favourites`
--

INSERT INTO `favourites` (`id`, `GameId`, `UserId`) VALUES
(4, 1, 1),
(5, 2, 1),
(6, 3, 1);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `gamepictures`
--

CREATE TABLE `gamepictures` (
  `id` int(10) UNSIGNED NOT NULL,
  `url` varchar(255) NOT NULL,
  `GameId` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `gamepictures`
--

INSERT INTO `gamepictures` (`id`, `url`, `GameId`) VALUES
(1, 'pictures/gallery/cyberpunk_2077_2020_1.png', 1),
(2, 'pictures/gallery/cyberpunk_2077_2020_2.png', 1),
(3, 'pictures/gallery/cyberpunk_2077_2020_3.png', 1),
(4, 'pictures/gallery/cyberpunk_2077_2020_4.png', 1),
(5, 'pictures/gallery/silent_hill_2_2024_1.png', 2),
(6, 'pictures/gallery/silent_hill_2_2024_2.png', 2),
(7, 'pictures/gallery/silent_hill_2_2001_1.png', 3),
(8, 'pictures/gallery/silent_hill_2_2001_2.png', 3),
(9, 'pictures/gallery/chrono_trigger_1995_1.png', 4),
(10, 'pictures/gallery/chrono_trigger_1995_2.png', 4),
(11, 'pictures/gallery/forager_2019_1.png', 5),
(12, 'pictures/gallery/forager_2019_2.png', 5),
(13, 'pictures/gallery/forza_horizon_2012_2.png', 6),
(14, 'pictures/gallery/forza_horizon_2012_1.png', 6),
(15, 'pictures/gallery/starcraft_2_2010_1.jpg', 7),
(16, 'pictures/gallery/starcraft_2_2010_2.jpg', 7),
(17, 'pictures/gallery/like_a_dragon_pirate_yakuza_in_hawaii_2025_1.png', 8),
(18, 'pictures/gallery/like_a_dragon_pirate_yakuza_in_hawaii_2025_2.png', 8),
(19, 'pictures/gallery/metal_gear_solid_delta_snake_eater_2025_1.png', 9),
(20, 'pictures/gallery/metal_gear_solid_delta_snake_eater_2025_2.png', 9),
(21, 'pictures/gallery/doom_the_dark_ages_2025_1.png', 10),
(22, 'pictures/gallery/doom_the_dark_ages_2025_2.png', 10),
(23, 'pictures/gallery/death_stranding_2_on_the_beach_2025_1.png', 11),
(24, 'pictures/gallery/death_stranding_2_on_the_beach_2025_2.png', 11),
(25, 'pictures/gallery/clair_obscur_expedition_33_2025_1.png', 12),
(26, 'pictures/gallery/clair_obscur_expedition_33_2025_2.png', 12),
(27, 'pictures/gallery/indiana_jones_and_the_great_circle_2025_1.png', 13),
(28, 'pictures/gallery/indiana_jones_and_the_great_circle_2025_2.png', 13),
(29, 'pictures/gallery/metaphor_refantazio_2024_1.jpg', 14),
(30, 'pictures/gallery/metaphor_refantazio_2024_2.jpg', 14),
(31, 'pictures/gallery/until_dawn_2024_1.png', 15),
(32, 'pictures/gallery/until_dawn_2024_2.png', 15),
(33, 'pictures/gallery/astro_bot_2024_1.png', 16),
(34, 'pictures/gallery/astro_bot_2024_2.png', 16),
(35, 'pictures/gallery/dragon_age_the_veilguard_2024_1.png', 17),
(36, 'pictures/gallery/dragon_age_the_veilguard_2024_2.png', 17),
(37, 'pictures/gallery/prince_of_persia_the_lost_crown_2024_1.png', 18),
(38, 'pictures/gallery/prince_of_persia_the_lost_crown_2024_2.png', 18),
(39, 'pictures/gallery/warhammer_40000_space_marine_2_2024_1.png', 19),
(40, 'pictures/gallery/warhammer_40000_space_marine_2_2024_2.png', 19);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `games`
--

CREATE TABLE `games` (
  `id` int(10) UNSIGNED NOT NULL,
  `gameTitle` varchar(255) NOT NULL,
  `altGameTitle` varchar(255) DEFAULT NULL,
  `description` text NOT NULL,
  `release` date NOT NULL,
  `boxart` varchar(255) DEFAULT NULL,
  `promoArt` varchar(255) DEFAULT NULL,
  `controllerSupport` int(11) DEFAULT NULL,
  `crossplatform` int(10) UNSIGNED DEFAULT NULL,
  `crossPlatformException` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `games`
--

INSERT INTO `games` (`id`, `gameTitle`, `altGameTitle`, `description`, `release`, `boxart`, `promoArt`, `controllerSupport`, `crossplatform`, `crossPlatformException`) VALUES
(1, 'Cyberpunk 2077', 'サイバーパンク2077', 'Cyberpunk 2077 is an open-world, action-adventure RPG set in the dark future of Night City — a dangerous megalopolis obsessed with power, glamor, and ceaseless body modification.', '2020-12-10', 'pictures/boxarts/cyberpunk_2077_2020_boxart.png', NULL, 2, NULL, NULL),
(2, 'Silent Hill 2', 'Silent Hill 2 Remake', 'Having received a letter from his deceased wife, James heads to where they shared so many memories, in the hope of seeing her one more time: Silent Hill.', '2024-10-08', 'pictures/boxarts/silent_hill_2_2024_boxart.png', NULL, 2, NULL, NULL),
(3, 'Silent Hill 2', NULL, 'After receiving a letter from his late wife, from Silent Hill, James Sunderland heads towards the town to search for her, only to come across a terrifying road of truth and redemption.', '2001-09-24', 'pictures/boxarts/silent_hill_2_2001_boxart.png', NULL, 0, NULL, NULL),
(4, 'Chrono Trigger', 'Kurono toriga', 'Crono, a young boy, is thrust to adventure by destiny to destroy an oncoming threat that will destroy the world in 1999.', '1995-05-11', 'pictures/boxarts/chrono_trigger_1995_boxart.png', NULL, 1, NULL, NULL),
(5, 'Forager', NULL, 'The highly popular and quirky \"idle game that you want to actively keep playing\". Explore, craft, gather & manage resources, find secrets and build your base out of nothing! Buy land to explore and expand!', '2019-06-18', 'pictures/boxarts/forager_2019_boxart.png', NULL, 1, NULL, NULL),
(6, 'Forza Horizon', NULL, 'Celebrate speed, music and style at the Forza Horizon Festival. From the makers of the highest-rated racing franchise of this generation, Forza Horizon combines legendary Forza authenticity with the freedom of the open road.', '2012-10-23', 'pictures/boxarts/forza_horizon_2012_boxart.png', NULL, NULL, NULL, NULL),
(7, 'StarCraft 2', NULL, 'Four years after the events of StarCraft: Brood War (1998), Jim Raynor fights against the Dominion and begins a search for artifacts when at the same time the Zerg attack once again.', '2010-07-27', 'pictures/boxarts/starcraft_2_2010_boxart.png', NULL, 0, NULL, NULL),
(8, 'A Like a Dragon: Pirate Yakuza in Hawaii', NULL, 'Embark on an over-the-top, modern-day pirate adventure with an ex-yakuza, now pirate captain & his crew. Engage in exhilarating combat on land and sea in the hunt for lost memories and treasure.', '2025-06-23', 'pictures/boxarts/like_a_dragon_pirate_yakuza_in_hawaii_2025_boxart.png', 'pictures/promo/like_a_dragon_pirate_yakuza_in_hawaii_2025_promo.png', 3, NULL, NULL),
(9, 'Metal Gear Solid Delta: Snake Eater', NULL, 'Discover the origin story of iconic military operative Snake and begin to unravel the plot of the legendary METAL GEAR series.', '2025-06-11', 'pictures/boxarts/metal_gear_solid_delta_snake_eater_2025_boxart.png', 'pictures/promo/metal_gear_solid_delta_2025_promo.png', NULL, NULL, NULL),
(10, 'Doom: The Dark Ages', NULL, 'DOOM: The Dark Ages is the single-player, action FPS prequel to the critically acclaimed DOOM (2016) and DOOM Eternal. You are the DOOM Slayer, the legendary demon-killing warrior fighting endlessly against Hell. Experience the epic cinematic origin story of the DOOM Slayer\'s rage in 2025.', '2025-06-20', 'pictures/boxarts/doom_the_dark_ages_2025_boxart.png', 'pictures/promo/doom_dark_ages_2025_promo.png', 1, NULL, NULL),
(11, 'Death Stranding 2: On The Beach', NULL, 'Embark on an inspiring mission of human connection beyond the UCA. Sam—with companions by his side—sets out on a new journey to save humanity from extinction. Join them as they traverse a world beset by otherworldly enemies, obstacles and a haunting question: should we have connected?', '2025-06-17', 'pictures/boxarts/death_stranding_2_on_the_beach_2025_boxart.png', 'pictures/promo/death_stranding_2_on_the_beach_2025_promo.png', NULL, NULL, NULL),
(12, 'Clair Obscur: Expedition 33', NULL, 'Lead the members of Expedition 33 on their quest to destroy the Paintress so that she can never paint death again. Explore a world of wonders inspired by Belle Époque France and battle unique enemies in this turn-based RPG with real-time mechanics.', '2025-06-02', 'pictures/boxarts/clair_obscur_expedition_33_2025_boxart.png', 'pictures/promo/clair_obscur_expedition_33_2025_promo.png', 3, NULL, NULL),
(13, 'Indiana Jones and the Great Circle', NULL, 'Uncover one of history’s greatest mysteries in a first-person, single-player adventure. The year is 1937, sinister forces are scouring the globe for the secret to an ancient power connected to the Great Circle, and only one person can stop them - Indiana Jones™', '2024-12-09', 'pictures/boxarts/indiana_jones_and_the_great_circle_2025_boxart.png', NULL, 3, NULL, NULL),
(14, 'Metaphor: ReFantazio', NULL, 'The throne sits empty after the king’s assassination. With no heirs, the will of the late king decrees that the next monarch will be elected by the people, & thus begins your fight for the throne.. ', '2024-10-11', 'pictures/boxarts/metaphor_refantazio_2024_boxart.png', NULL, 3, NULL, NULL),
(15, 'Until Dawn', 'Until Dawn Remake', 'Until Dawn invites you to relive the nightmare, and immerse yourself in a gripping slasher horror where every decision can make the difference between life and death. ', '2024-10-04', 'pictures/boxarts/until_dawn_2024_boxart.png', NULL, 3, NULL, NULL),
(16, 'Astro Bot', NULL, 'JOIN ASTRO IN A BRAND-NEW, SUPERSIZED SPACE ADVENTURE! The PS5® mothership has been wrecked, leaving ASTRO and the bot crew scattered all over the galaxies. Time to ride your trusty Dual Speeder across more than 50 planets full of fun, danger and surprises. On your journey, make the most of ASTRO\'s new powers and reunite with many iconic heroes from the PlayStation universe!', '2024-09-09', 'pictures/boxarts/astro_bot_2024_boxart.png', NULL, NULL, NULL, NULL),
(17, 'Dragon Age™: The Veilguard', NULL, 'Unite the Veilguard and defy the gods in Dragon Age™: The Veilguard, an immersive single-player RPG.', '2024-10-31', '/pictures/boxarts/dragon_age_the_veilguard_2024_boxart.png', NULL, 3, NULL, NULL),
(18, 'Prince of Persia The Lost Crown', NULL, 'Dash into a stylish and thrilling action-adventure platformer set in a mythological Persian world where the boundaries of time and space are yours to manipulate.', '2024-08-08', 'pictures/boxarts/prince_of_persia_the_lost_crown_2024_boxart.png', NULL, 3, NULL, NULL),
(19, 'Warhammer 40,000: Space Marine 2', NULL, 'Embody the superhuman skill and brutality of a Space Marine. Unleash deadly abilities and devastating weaponry to obliterate the relentless Tyranid swarms. Defend the Imperium in spectacular third-person action in solo or multiplayer modes.', '2024-09-09', 'pictures/boxarts/warhammer_40000_space_marine_2_2024_boxart.png', NULL, 2, 1, 'Players across consoles and PC\'s can play in coop mode, but the PvP mode is only between PC players vs PC players, and console players between console players');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `gamesageratings`
--

CREATE TABLE `gamesageratings` (
  `id` int(10) UNSIGNED NOT NULL,
  `GameId` int(10) UNSIGNED DEFAULT NULL,
  `AgeratingId` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `gamesageratings`
--

INSERT INTO `gamesageratings` (`id`, `GameId`, `AgeratingId`) VALUES
(1, 1, 5),
(2, 1, 9),
(3, 1, 14),
(4, 2, 5),
(5, 2, 9),
(6, 2, 14),
(7, 3, 5),
(8, 3, 9),
(9, 3, 14),
(10, 4, 3),
(11, 4, 7),
(12, 4, 11),
(13, 5, 1),
(14, 5, 7),
(15, 6, 3),
(16, 6, 8),
(17, 7, 3),
(18, 7, 8),
(19, 8, 5),
(20, 8, 9),
(21, 8, 14),
(22, 13, 4),
(23, 14, 4),
(24, 15, 5),
(25, 15, 9),
(26, 16, 2),
(27, 16, 7),
(28, 16, 11),
(29, 17, 5),
(30, 17, 9),
(31, 17, 14),
(32, 18, 4),
(33, 18, 8),
(34, 19, 5);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `gamesawards`
--

CREATE TABLE `gamesawards` (
  `id` int(10) UNSIGNED NOT NULL,
  `year` int(10) UNSIGNED NOT NULL,
  `result` tinyint(1) NOT NULL DEFAULT 0,
  `GameId` int(10) UNSIGNED DEFAULT NULL,
  `AwardId` int(10) UNSIGNED DEFAULT NULL
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
(6, 2024, 0, 14, 6),
(7, 2024, 0, 2, 7),
(8, 2024, 0, 2, 2),
(9, 2013, 0, 6, 8),
(10, 2011, 0, 7, 9),
(11, 2011, 0, 7, 10),
(12, 2024, 0, 16, 2),
(13, 2024, 1, 16, 6),
(14, 2024, 0, 17, 11),
(20, 2024, 1, 18, 11),
(21, 2024, 0, 18, 12),
(22, 2024, 0, 19, 13),
(23, 2024, 0, 19, 14);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `gameslanguages`
--

CREATE TABLE `gameslanguages` (
  `id` int(10) UNSIGNED NOT NULL,
  `dub` tinyint(1) NOT NULL DEFAULT 0,
  `GameId` int(10) UNSIGNED DEFAULT NULL,
  `LanguageId` int(10) UNSIGNED DEFAULT NULL
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
(25, 1, 15, 4),
(26, 1, 2, 2),
(27, 1, 2, 9),
(28, 0, 2, 11),
(29, 0, 4, 2),
(30, 0, 4, 6),
(31, 0, 4, 14),
(32, 0, 5, 2),
(33, 0, 5, 5),
(34, 0, 5, 6),
(35, 1, 6, 2),
(36, 1, 6, 5),
(37, 1, 6, 3),
(38, 1, 7, 2),
(39, 1, 7, 5),
(40, 0, 7, 16),
(41, 1, 8, 2),
(42, 1, 8, 9),
(43, 1, 8, 14),
(44, 1, 9, 2),
(45, 1, 9, 9),
(46, 0, 9, 13),
(47, 1, 10, 2),
(48, 1, 10, 3),
(49, 1, 10, 4),
(50, 1, 12, 2),
(51, 1, 12, 3),
(52, 0, 12, 15),
(53, 1, 13, 2),
(54, 1, 13, 3),
(55, 1, 13, 4),
(56, 1, 17, 2),
(57, 1, 17, 3),
(58, 0, 17, 4),
(59, 1, 18, 2),
(60, 0, 18, 12),
(61, 1, 18, 5),
(62, 1, 19, 2),
(63, 1, 19, 5),
(64, 0, 19, 8),
(65, 1, 3, 2),
(66, 0, 3, 3),
(67, 0, 3, 4),
(68, 0, 16, 2),
(69, 0, 16, 9),
(70, 0, 16, 3);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `gamesplatforms`
--

CREATE TABLE `gamesplatforms` (
  `id` int(10) UNSIGNED NOT NULL,
  `GameId` int(10) UNSIGNED DEFAULT NULL,
  `PlatformId` int(10) UNSIGNED DEFAULT NULL
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
  `id` int(10) UNSIGNED NOT NULL,
  `GameId` int(10) UNSIGNED DEFAULT NULL,
  `TagId` int(10) UNSIGNED DEFAULT NULL
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
  `id` int(10) UNSIGNED NOT NULL,
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
-- Tábla szerkezet ehhez a táblához `pcspecs`
--

CREATE TABLE `pcspecs` (
  `id` int(10) UNSIGNED NOT NULL,
  `minOp` varchar(50) NOT NULL,
  `minCpu` varchar(100) NOT NULL,
  `minRam` varchar(10) NOT NULL,
  `minGpu` varchar(100) NOT NULL,
  `minDirectx` varchar(20) DEFAULT NULL,
  `op` varchar(50) DEFAULT NULL,
  `cpu` varchar(100) DEFAULT NULL,
  `ram` varchar(10) DEFAULT NULL,
  `gpu` varchar(100) DEFAULT NULL,
  `directx` varchar(20) DEFAULT NULL,
  `storage` varchar(10) DEFAULT NULL,
  `sidenote` varchar(255) DEFAULT NULL,
  `GameId` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `pcspecs`
--

INSERT INTO `pcspecs` (`id`, `minOp`, `minCpu`, `minRam`, `minGpu`, `minDirectx`, `op`, `cpu`, `ram`, `gpu`, `directx`, `storage`, `sidenote`, `GameId`) VALUES
(1, '64-bit Windows 10', 'Core i7-6700 or Ryzen 5 1600', '12 GB', 'GeForce GTX 1060 6GB or Radeon RX 580 8GB or Arc A380', 'Version 12', ' 64-bit Windows 10', 'Core i7-12700 or Ryzen 7 7800X3D', '16 GB', 'GeForce RTX 2060 SUPER or Radeon RX 5700 XT or Arc A770', 'Version 12', '70 GB', 'SSD required.', 1),
(2, 'Windows 10', ' Intel Core i5-3470 or AMD FX-6300', '6 GB', 'NVIDIA GeForce GTX 750 Ti, 4GB or AMD Radeon R7 360, 4GB or Intel Arc A310, 4GB', 'Version 11', 'Windows 10', ' Intel Core i5-7600 or Ryzen 5 2600', '8 GB', 'NVIDIA GeForce GTX 970, 4GB or AMD Radeon RX 480, 4GB or Intel Arc A380, 6GB', 'Version 11', '93 GB', NULL, 14),
(3, 'Windows 10 x64', 'Intel Core i7-6700K | AMD Ryzen 5 3600', '16 GB RAM', 'NVIDIA® GeForce® GTX 1070 Ti or AMD Radeon™ RX 5700 or Intel® Arc™ A750', 'Version 12', 'Windows 10 x64', 'Intel Core i7-8700K | AMD Ryzen 5 3600X', '16 GB', 'NVIDIA® GeForce® 2080RTX or AMD Radeon™ 6800XT', 'Version 12', '50 GB', 'SSD is recommended.', 2),
(4, 'Windows XP, Windows ME, Windows 2000, Windows 98', '700 MHz Pentium III or AMD Athlon', '64 MB', '32 MB 3D-Graphics Card', 'DirectX 8.1', 'Windows XP, Windows ME, Windows 2000, Windows 98', '1 GHz Pentium or Athlon processor', '128 MB', '3D accelerator card w/64 MB VRAM', 'DirectX 8.1', '1,8 GB', NULL, 3),
(5, 'Windows 7/8/8.1/10 (32bit/64bit)', 'Intel Core i3 2.3GHz', '4 GB', 'INTEL HD Graphics 530', 'Not specified', NULL, NULL, NULL, NULL, NULL, '2 GB', NULL, 4),
(6, 'Windows XP and above', '1.2Ghz', '1024 MB', '512MB', 'Not Specified', NULL, NULL, NULL, NULL, NULL, '200 MB', NULL, 5),
(7, 'Windows® 7 / Windows® 8', 'Intel® Core™ 2 Duo or AMD Athlon™ 64 X2 5600+', '2 GB', 'NVIDIA® GeForce® 7600 GT or ATI™ Radeon™ HD 2600 XT or Intel® HD Graphics 3000 or better', 'Version 9', 'Windows® 10 64-bit', 'Intel® Core™ i5 or AMD FX Series Processor or better', '4 GB', 'NVIDIA® GeForce® GTX 650 or AMD Radeon™ HD 7790 or better', 'Version 9', '30 GB', NULL, 7),
(8, 'Windows10 1909 (Build18363.1350)', 'Intel Core i5-3470,3.2GHz or AMD Ryzen 3 1200, 3.1GHz', '8 GB', 'NVIDIA GeForce GTX 1650,4GB or AMD Radeon RX 560,4GB or Intel Arc A380,6GB', 'Version 12', 'Windows10 1909 (Build18363.1350)', 'Intel Core i7-4790,3.6GHz or AMD Ryzen 5 1600, 3.2GHz', '16 GB', 'NVIDIA GeForce RTX 2060,6GB or AMD Radeon RX 5700,8GB or Intel Arc A750,8GB', 'Version 12', '56 GB', NULL, 8),
(9, 'Windows® 10', 'Intel i5-8600 or AMD Ryzen 5 3600', '16 GB', 'RTX 2060 Super', 'Version 12', 'Windows® 11', 'Intel i7-8700K or AMD Ryzen 5 3600', '16 GB', 'RTX 3080', 'Version 12', '100 GB', 'SSD Recommend', 9),
(10, ' Windows 10 64-Bit', 'AMD Zen 2 or Intel 10th Generation CPU @3.2Ghz with 8 cores / 16 threads or better', '16 GB', 'NVIDIA or AMD hardware Raytracing-capable GPU with 8GB dedicated VRAM or better', 'Version 12', 'Windows 11 64-Bit', 'AMD Zen 3 or Intel 12th Generation CPU @3.2Ghz with 8 cores / 16 threads or better', '32 GB', 'NVIDIA or AMD hardware Raytracing-capable GPU with 10GB dedicated VRAM or better', 'Version 12', '100 GB', 'NVME SSD storage required', 10),
(11, ' Windows 10', 'Intel Core i7-8700K / AMD Ryzen 5 1600X', '8 GB', 'NVIDIA GeForce GTX 1660 6 GB / AMD Radeon RX 5600 XT 6 GB / Intel Arc A380 6 GB', 'Version 12', 'Windows 11', 'Intel Core i7-11700K / AMD Ryzen 5 5600X', '16 GB', 'NVIDIA GeForce RTX 3070 8 GB / AMD Radeon RX 6800 XT 16 GB', 'Version 12', '55 GB', 'SSD required.', 12),
(12, 'Windows 10', ' Intel Core i7-10700K @ 3.8 GHz or better or AMD Ryzen 5 3600 @ 3.6 GHz or better', '16 GB', 'NVIDIA GeForce RTX 2060 SUPER 8 GB or AMD Radeon RX 6600 8 GB or Intel Arc A580', 'Not Specified', ' Windows 10', 'Intel Core i7-12700K @ 3.6 GHz or better or AMD Ryzen 7 7700 @ 3.8 GHz or better', '32 GB', 'NVIDIA GeForce RTX 3080Ti 12 GB or AMD Radeon RX 7700XT 12 GB', 'Not Specified', '120 GB', 'SSD required; GPU Hardware Ray Tracing Required', 13),
(13, 'Windows 10', 'Intel Core i7 4790K / AMD Ryzen 5 1500x (or similar processor with AVX support)', '8 GB', 'NVIDIA GeForce GTX 1660 / Radeon RX 470 (or equivalent card with minimum 6GB VRAM)', 'Version 12', 'Windows 11', 'Intel Core i5 8600 / AMD Ryzen 7 2700X', '16 GB', 'NVIDIA GeForce RTX 2060 / AMD Radeon RX 6600XT', 'Version 12', '70 GB', 'SSD required.', 15),
(14, '64 bit Windows 10', 'Intel Core i5-8400 / AMD Ryzen 3 3300X', '16 GB', 'NVIDIA GTX 970/1650 / AMD Radeon R9 290X', 'Version 12', '64 bit Windows 11', 'Intel Core i9-9900K / AMD Ryzen 7 3700X', '16 GB', 'NVIDIA RTX 2070 / AMD Radeon RX 5700XT', 'Version 12', '100 GB', 'SSD Preferred, HDD Supported; AMD AM4 CPUs on Windows 11 require AGESA V2 1.2.0.7 or newer', 17),
(15, ' Windows 10 (64 bit only)', 'Intel Core i5-4460 3.4 GHz, AMD Ryzen3 1200 3.1 GHz', '8 GB', 'NVIDIA GeForce GTX 950 (2GB VRAM) or AMD Radeon RX 5500 XT (4GB VRAM)', 'Version 11', 'Windows 10 (64 bit only)', 'Intel Core i7-6700 3.4 GHz, AMD Ryzen5 1600 3.2 GHz', '8 GB', 'NVIDIA GeForce GTX 960 (4GB VRAM) or AMD Radeon RX 5500 XT (4GB VRAM)', 'Version 11', '30 GB', NULL, 18),
(16, 'Windows 10 (1903 min)/11 64-bit', 'AMD Ryzen 5 2600X / Intel Core i5-8600K', '8 GB', '6 GB VRAM, AMD Radeon RX 580 / Nvidia GeForce GTX 1060', 'Version 12', 'Windows 10 (1903 min)/11 64-bit', 'AMD Ryzen 7 5800X / Intel Core i7-12700', '16 GB', '8 GB VRAM, AMD Radeon RX 6800 XT / Nvidia GeForce RTX 3070', 'Version 12', '75 GB', 'SSD required.', 19);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `platforms`
--

CREATE TABLE `platforms` (
  `id` int(10) UNSIGNED NOT NULL,
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
  `id` int(10) UNSIGNED NOT NULL,
  `positive` tinyint(1) NOT NULL DEFAULT 0,
  `GameId` int(10) UNSIGNED DEFAULT NULL,
  `UserId` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `ratings`
--

INSERT INTO `ratings` (`id`, `positive`, `GameId`, `UserId`) VALUES
(7, 1, 1, 1),
(8, 1, 1, 2),
(9, 0, 2, 1),
(10, 0, 1, 16),
(11, 1, 1, 17),
(12, 1, 1, 18),
(13, 1, 1, 19),
(14, 0, 1, 20);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `reviews`
--

CREATE TABLE `reviews` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(100) NOT NULL,
  `content` text NOT NULL,
  `UserId` int(10) UNSIGNED DEFAULT NULL,
  `GameId` int(10) UNSIGNED DEFAULT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `reviews`
--

INSERT INTO `reviews` (`id`, `title`, `content`, `UserId`, `GameId`, `date`) VALUES
(10, 'Revisiting Cyberpunk in 2024', 'I have to say, the game has definitely improved. Less bugs and some QOL improvements. But I honestly still don\'t see it. The base game is still flawed. The game is still a basic action adventure game, that doesn\'t do a very good job at it. I am playing it on hard, yet the game feels incredibly easy. The AI is still as dumb as it was before. I was fighting an enemy camp, they all gathered in the same spot, where they were getting killed off one by one by me. It never tried to flank me, it never tried to change strategies. I was running around, flanking, yet the enemy was still there. This was every single fight. The upgrades are fun, but what\'s the point if your enemies just stand there and wait for you to shoot them? ', 16, 1, '2025-01-12'),
(11, 'Overrated but good', 'A little contrarian, but I think it was just good, not great. I had fun with it but it\'s kind of a bad RPG IMO. I did find it was more like a 75% Grand Theft Auto 25% Assassin\'s Creed mashup. I found the story is pretty overrated, but I had a ton of fun just driving around doing side stuff in the world. Some of the characters are really good and fun to interact with, but I found some to be a total drag. Stylistically it is incredible. Again, just existing in the world is very fun. It makes driving around checking off boxes across the map easy to sink time into. The skill tree is cool to experiment with, but I did find the combat generally underwhelming, but still better than serviceable. Again, good but not great. I think if you are considering buying it at a price point you are comfortable with, it is a safe buy for sure. I just disagree with the people who put it on their best of all time lists. The open world stuff is the only aspect I would consider awesome.', 17, 1, '2025-02-20'),
(12, 'A Must-Play Now', 'With the 2.0 update and the Phantom Liberty expansion, it’s easily one of the best AAA experiences on the market. It’s become one of my favourite games of all time after putting about 50 hours and still a lot more to go. It’s visually incredible, with an immersive, well-developed world, a dark and tragic story and great characters. The gameplay is really fun and you can approach it in a bunch of different ways. Must-play game imo. ', 18, 1, '2025-03-01'),
(13, 'Cyberpunk 2077 is an amazing experience', 'The characters and dialogue were the first things that hooked me. I wanted to learn more about them, I wanted to bond with them. Characters I disliked initially grew on me, especially Johnny Silverhand. The romance for the male V was one of the best romances I\'ve seen in a game, though I\'m a bit biased as features and personality traits of that character remind me of my own wife. I genuinely cared for a lot of these characters. It was cool how you get different dialogue based on your stats and your background too.', 19, 1, '2025-03-09'),
(14, 'It\'s bad', ' it’s not a good fps, it’s not a good rpg, and it’s not a good action game. it’s trying to be too many things at once and not doing well in any of them. cdpr isn’t very good at making games that feel good to play imo. setting and writing do the heavy lifting for them. visuals too, in cyberpunk’s case. ', 20, 1, '2025-03-10');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `studios`
--

CREATE TABLE `studios` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `studios`
--

INSERT INTO `studios` (`id`, `name`) VALUES
(27, ' Sandfall Interactive'),
(10, 'Atlus'),
(13, 'Ballistic Moon'),
(24, 'Bethesda Softworks'),
(16, 'BioWare'),
(21, 'Blizzard Entertainment'),
(2, 'Blooper Team'),
(1, 'CD Projekt RED'),
(17, 'Electronic Arts'),
(29, 'Focus Entertainment'),
(6, 'HopFrog'),
(7, 'Humble Bundle'),
(23, 'id Software'),
(26, 'Kepler Interactive'),
(25, 'Kojima Productions'),
(3, 'Konami'),
(28, 'MachineGames'),
(9, 'Microsoft Studios'),
(8, 'Playground Games'),
(22, 'Ryu Ga Gotoku Studio'),
(18, 'Saber Interactive'),
(12, 'Sega'),
(14, 'Sony Interactive Entertainment'),
(4, 'Square'),
(5, 'Square Enix'),
(11, 'Studio Zero'),
(15, 'Team ASOBI'),
(20, 'Ubisoft'),
(19, 'Ubisoft Montpellier');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `studiosgames`
--

CREATE TABLE `studiosgames` (
  `id` int(10) UNSIGNED NOT NULL,
  `isDeveloper` tinyint(1) NOT NULL DEFAULT 0,
  `isPublisher` tinyint(1) NOT NULL DEFAULT 0,
  `GameId` int(10) UNSIGNED DEFAULT NULL,
  `StudioId` int(10) UNSIGNED DEFAULT NULL
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
(19, 0, 1, 10, 24),
(20, 0, 1, 8, 12),
(21, 1, 0, 11, 25),
(22, 0, 1, 11, 14),
(24, 1, 0, 12, 27),
(25, 0, 1, 12, 26),
(26, 1, 0, 13, 28),
(27, 0, 1, 13, 24),
(28, 1, 0, 17, 16),
(29, 0, 1, 17, 17),
(30, 1, 0, 18, 19),
(31, 0, 1, 18, 20),
(32, 1, 0, 19, 18),
(33, 0, 1, 19, 29),
(34, 1, 0, 16, 15),
(35, 0, 1, 16, 14);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `tags`
--

CREATE TABLE `tags` (
  `id` int(10) UNSIGNED NOT NULL,
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
  `id` int(10) UNSIGNED NOT NULL,
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
(2, 'BunyósPityu', '$2b$10$jEhSTQxawR1FDJ74oKdhdOAL5WD2GglD32wAKNBYNShBhFdK79C92', 'pityu@lopo.com', 0, '2024-11-27'),
(12, 'KKevin78', '$2b$10$cJSrcZYmx9n8J.UiIHVDaeYXZDCExSh8HhJGMmZEiLYH6oR00u83O', 'kkevin@gmail.com', 0, '2025-02-28'),
(15, 'Test123', '$2b$10$WlLnarQfWJki1SKDEeU.k./JPV2H0aug15KQuE2574s7/hsfxAqwK', 'cmon@pleaseee.com', 0, '2025-03-10'),
(16, 'mdude723', '$2b$10$.OwXGxgt5x4RWYdXDp72z.c4ALg99lVNObeFzg4Zjd61/GToYX5ci', 'cmon@pleaseesse.com', 0, '2025-03-10'),
(17, 'WingleDingleFingle', '$2b$10$qj5QoWCRn3/1XO6C4oxzweHFuWS8sAXop6EQa9G5AWoPKRs6CPDWm', 'cmon@pleaseessae.com', 0, '2025-03-10'),
(18, 'Monkey-on-the-couch', '$2b$10$4ML/HdHp2RqOdEXGOIDtS.dMu9JXLTn5JI9cu2Ylxp7GjKXmquv7S', 'cmon@pleaseessaea.com', 0, '2025-03-10'),
(19, 'Forhaver', '$2b$10$Ez2urXvFVowja7XiISZhJeUAox68RcDq9QPt486SPZEw2Sg.EjItC', 'cmon@pleaseessaeaa.com', 0, '2025-03-10'),
(20, 'mightbebeaux', '$2b$10$gfVpTYrSd3VMdZ7B3wd/deGHf1/u9TjuFf0SyOaXlXZHo2e19Ygc6', 'cmon@pleaseessaaeaa.com', 0, '2025-03-10');

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
  ADD PRIMARY KEY (`id`);

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
-- A tábla indexei `gamesageratings`
--
ALTER TABLE `gamesageratings`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Gamesageratings_AgeratingId_GameId_unique` (`GameId`,`AgeratingId`),
  ADD KEY `AgeratingId` (`AgeratingId`);

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
  ADD UNIQUE KEY `language` (`language`),
  ADD UNIQUE KEY `language_2` (`language`),
  ADD UNIQUE KEY `language_3` (`language`),
  ADD UNIQUE KEY `language_4` (`language`),
  ADD UNIQUE KEY `language_5` (`language`),
  ADD UNIQUE KEY `language_6` (`language`),
  ADD UNIQUE KEY `language_7` (`language`),
  ADD UNIQUE KEY `language_8` (`language`),
  ADD UNIQUE KEY `language_9` (`language`),
  ADD UNIQUE KEY `language_10` (`language`),
  ADD UNIQUE KEY `language_11` (`language`),
  ADD UNIQUE KEY `language_12` (`language`);

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
  ADD UNIQUE KEY `platform` (`platform`),
  ADD UNIQUE KEY `platform_2` (`platform`),
  ADD UNIQUE KEY `platform_3` (`platform`),
  ADD UNIQUE KEY `platform_4` (`platform`),
  ADD UNIQUE KEY `platform_5` (`platform`),
  ADD UNIQUE KEY `platform_6` (`platform`),
  ADD UNIQUE KEY `platform_7` (`platform`),
  ADD UNIQUE KEY `platform_8` (`platform`),
  ADD UNIQUE KEY `platform_9` (`platform`),
  ADD UNIQUE KEY `platform_10` (`platform`),
  ADD UNIQUE KEY `platform_11` (`platform`),
  ADD UNIQUE KEY `platform_12` (`platform`);

--
-- A tábla indexei `ratings`
--
ALTER TABLE `ratings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `GameId` (`GameId`),
  ADD KEY `UserId` (`UserId`);

--
-- A tábla indexei `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `UserId` (`UserId`),
  ADD KEY `GameId` (`GameId`);

--
-- A tábla indexei `studios`
--
ALTER TABLE `studios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD UNIQUE KEY `name_2` (`name`),
  ADD UNIQUE KEY `name_3` (`name`),
  ADD UNIQUE KEY `name_4` (`name`),
  ADD UNIQUE KEY `name_5` (`name`),
  ADD UNIQUE KEY `name_6` (`name`),
  ADD UNIQUE KEY `name_7` (`name`),
  ADD UNIQUE KEY `name_8` (`name`),
  ADD UNIQUE KEY `name_9` (`name`),
  ADD UNIQUE KEY `name_10` (`name`),
  ADD UNIQUE KEY `name_11` (`name`),
  ADD UNIQUE KEY `name_12` (`name`);

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
  ADD UNIQUE KEY `tag` (`tag`),
  ADD UNIQUE KEY `tag_2` (`tag`),
  ADD UNIQUE KEY `tag_3` (`tag`),
  ADD UNIQUE KEY `tag_4` (`tag`),
  ADD UNIQUE KEY `tag_5` (`tag`),
  ADD UNIQUE KEY `tag_6` (`tag`),
  ADD UNIQUE KEY `tag_7` (`tag`),
  ADD UNIQUE KEY `tag_8` (`tag`),
  ADD UNIQUE KEY `tag_9` (`tag`),
  ADD UNIQUE KEY `tag_10` (`tag`),
  ADD UNIQUE KEY `tag_11` (`tag`),
  ADD UNIQUE KEY `tag_12` (`tag`);

--
-- A tábla indexei `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `username_2` (`username`),
  ADD UNIQUE KEY `email_2` (`email`),
  ADD UNIQUE KEY `username_3` (`username`),
  ADD UNIQUE KEY `email_3` (`email`),
  ADD UNIQUE KEY `username_4` (`username`),
  ADD UNIQUE KEY `email_4` (`email`),
  ADD UNIQUE KEY `username_5` (`username`),
  ADD UNIQUE KEY `email_5` (`email`),
  ADD UNIQUE KEY `username_6` (`username`),
  ADD UNIQUE KEY `email_6` (`email`),
  ADD UNIQUE KEY `username_7` (`username`),
  ADD UNIQUE KEY `email_7` (`email`),
  ADD UNIQUE KEY `username_8` (`username`),
  ADD UNIQUE KEY `email_8` (`email`),
  ADD UNIQUE KEY `username_9` (`username`),
  ADD UNIQUE KEY `email_9` (`email`),
  ADD UNIQUE KEY `username_10` (`username`),
  ADD UNIQUE KEY `email_10` (`email`),
  ADD UNIQUE KEY `username_11` (`username`),
  ADD UNIQUE KEY `email_11` (`email`),
  ADD UNIQUE KEY `username_12` (`username`),
  ADD UNIQUE KEY `email_12` (`email`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `actings`
--
ALTER TABLE `actings`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;

--
-- AUTO_INCREMENT a táblához `actors`
--
ALTER TABLE `actors`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT a táblához `ageratings`
--
ALTER TABLE `ageratings`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT a táblához `awards`
--
ALTER TABLE `awards`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT a táblához `blacklistedtokens`
--
ALTER TABLE `blacklistedtokens`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `creations`
--
ALTER TABLE `creations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT a táblához `creators`
--
ALTER TABLE `creators`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT a táblához `favourites`
--
ALTER TABLE `favourites`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT a táblához `gamepictures`
--
ALTER TABLE `gamepictures`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT a táblához `games`
--
ALTER TABLE `games`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT a táblához `gamesageratings`
--
ALTER TABLE `gamesageratings`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT a táblához `gamesawards`
--
ALTER TABLE `gamesawards`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT a táblához `gameslanguages`
--
ALTER TABLE `gameslanguages`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- AUTO_INCREMENT a táblához `gamesplatforms`
--
ALTER TABLE `gamesplatforms`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT a táblához `gamestags`
--
ALTER TABLE `gamestags`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;

--
-- AUTO_INCREMENT a táblához `languages`
--
ALTER TABLE `languages`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT a táblához `pcspecs`
--
ALTER TABLE `pcspecs`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT a táblához `platforms`
--
ALTER TABLE `platforms`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT a táblához `ratings`
--
ALTER TABLE `ratings`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT a táblához `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT a táblához `studios`
--
ALTER TABLE `studios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT a táblához `studiosgames`
--
ALTER TABLE `studiosgames`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT a táblához `tags`
--
ALTER TABLE `tags`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT a táblához `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `actings`
--
ALTER TABLE `actings`
  ADD CONSTRAINT `actings_ibfk_1` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `actings_ibfk_10` FOREIGN KEY (`ActorId`) REFERENCES `actors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `actings_ibfk_11` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `actings_ibfk_12` FOREIGN KEY (`ActorId`) REFERENCES `actors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `actings_ibfk_13` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `actings_ibfk_14` FOREIGN KEY (`ActorId`) REFERENCES `actors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `actings_ibfk_15` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `actings_ibfk_16` FOREIGN KEY (`ActorId`) REFERENCES `actors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `actings_ibfk_17` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `actings_ibfk_18` FOREIGN KEY (`ActorId`) REFERENCES `actors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `actings_ibfk_19` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `actings_ibfk_2` FOREIGN KEY (`ActorId`) REFERENCES `actors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `actings_ibfk_20` FOREIGN KEY (`ActorId`) REFERENCES `actors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `actings_ibfk_21` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `actings_ibfk_22` FOREIGN KEY (`ActorId`) REFERENCES `actors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `actings_ibfk_23` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `actings_ibfk_24` FOREIGN KEY (`ActorId`) REFERENCES `actors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `actings_ibfk_3` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `actings_ibfk_4` FOREIGN KEY (`ActorId`) REFERENCES `actors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `actings_ibfk_5` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `actings_ibfk_6` FOREIGN KEY (`ActorId`) REFERENCES `actors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `actings_ibfk_7` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `actings_ibfk_8` FOREIGN KEY (`ActorId`) REFERENCES `actors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `actings_ibfk_9` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `blacklistedtokens`
--
ALTER TABLE `blacklistedtokens`
  ADD CONSTRAINT `blacklistedtokens_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `blacklistedtokens_ibfk_2` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Megkötések a táblához `creations`
--
ALTER TABLE `creations`
  ADD CONSTRAINT `creations_ibfk_1` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `creations_ibfk_10` FOREIGN KEY (`CreatorId`) REFERENCES `creators` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `creations_ibfk_11` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `creations_ibfk_12` FOREIGN KEY (`CreatorId`) REFERENCES `creators` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `creations_ibfk_13` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `creations_ibfk_14` FOREIGN KEY (`CreatorId`) REFERENCES `creators` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `creations_ibfk_15` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `creations_ibfk_16` FOREIGN KEY (`CreatorId`) REFERENCES `creators` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `creations_ibfk_17` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `creations_ibfk_18` FOREIGN KEY (`CreatorId`) REFERENCES `creators` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `creations_ibfk_19` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `creations_ibfk_2` FOREIGN KEY (`CreatorId`) REFERENCES `creators` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `creations_ibfk_20` FOREIGN KEY (`CreatorId`) REFERENCES `creators` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `creations_ibfk_21` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `creations_ibfk_22` FOREIGN KEY (`CreatorId`) REFERENCES `creators` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `creations_ibfk_23` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `creations_ibfk_24` FOREIGN KEY (`CreatorId`) REFERENCES `creators` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `creations_ibfk_3` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `creations_ibfk_4` FOREIGN KEY (`CreatorId`) REFERENCES `creators` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `creations_ibfk_5` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `creations_ibfk_6` FOREIGN KEY (`CreatorId`) REFERENCES `creators` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `creations_ibfk_7` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `creations_ibfk_8` FOREIGN KEY (`CreatorId`) REFERENCES `creators` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `creations_ibfk_9` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `favourites`
--
ALTER TABLE `favourites`
  ADD CONSTRAINT `favourites_ibfk_1` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `favourites_ibfk_10` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `favourites_ibfk_11` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `favourites_ibfk_12` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `favourites_ibfk_13` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `favourites_ibfk_14` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `favourites_ibfk_15` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `favourites_ibfk_16` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `favourites_ibfk_17` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `favourites_ibfk_18` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `favourites_ibfk_19` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `favourites_ibfk_2` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `favourites_ibfk_20` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `favourites_ibfk_21` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `favourites_ibfk_22` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `favourites_ibfk_23` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `favourites_ibfk_24` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `favourites_ibfk_3` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `favourites_ibfk_4` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `favourites_ibfk_5` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `favourites_ibfk_6` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `favourites_ibfk_7` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `favourites_ibfk_8` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `favourites_ibfk_9` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Megkötések a táblához `gamepictures`
--
ALTER TABLE `gamepictures`
  ADD CONSTRAINT `gamepictures_ibfk_1` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamepictures_ibfk_10` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamepictures_ibfk_11` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamepictures_ibfk_12` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamepictures_ibfk_2` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamepictures_ibfk_3` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamepictures_ibfk_4` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamepictures_ibfk_5` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamepictures_ibfk_6` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamepictures_ibfk_7` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamepictures_ibfk_8` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamepictures_ibfk_9` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `gamesageratings`
--
ALTER TABLE `gamesageratings`
  ADD CONSTRAINT `gamesageratings_ibfk_1` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesageratings_ibfk_10` FOREIGN KEY (`AgeratingId`) REFERENCES `ageratings` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesageratings_ibfk_11` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesageratings_ibfk_12` FOREIGN KEY (`AgeratingId`) REFERENCES `ageratings` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesageratings_ibfk_13` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesageratings_ibfk_14` FOREIGN KEY (`AgeratingId`) REFERENCES `ageratings` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesageratings_ibfk_15` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesageratings_ibfk_16` FOREIGN KEY (`AgeratingId`) REFERENCES `ageratings` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesageratings_ibfk_17` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesageratings_ibfk_18` FOREIGN KEY (`AgeratingId`) REFERENCES `ageratings` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesageratings_ibfk_19` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesageratings_ibfk_2` FOREIGN KEY (`AgeratingId`) REFERENCES `ageratings` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesageratings_ibfk_20` FOREIGN KEY (`AgeratingId`) REFERENCES `ageratings` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesageratings_ibfk_21` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesageratings_ibfk_22` FOREIGN KEY (`AgeratingId`) REFERENCES `ageratings` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesageratings_ibfk_23` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesageratings_ibfk_24` FOREIGN KEY (`AgeratingId`) REFERENCES `ageratings` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesageratings_ibfk_3` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesageratings_ibfk_4` FOREIGN KEY (`AgeratingId`) REFERENCES `ageratings` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesageratings_ibfk_5` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesageratings_ibfk_6` FOREIGN KEY (`AgeratingId`) REFERENCES `ageratings` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesageratings_ibfk_7` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesageratings_ibfk_8` FOREIGN KEY (`AgeratingId`) REFERENCES `ageratings` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesageratings_ibfk_9` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `gamesawards`
--
ALTER TABLE `gamesawards`
  ADD CONSTRAINT `gamesawards_ibfk_1` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesawards_ibfk_10` FOREIGN KEY (`AwardId`) REFERENCES `awards` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesawards_ibfk_11` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesawards_ibfk_12` FOREIGN KEY (`AwardId`) REFERENCES `awards` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesawards_ibfk_13` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesawards_ibfk_14` FOREIGN KEY (`AwardId`) REFERENCES `awards` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesawards_ibfk_15` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesawards_ibfk_16` FOREIGN KEY (`AwardId`) REFERENCES `awards` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesawards_ibfk_17` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesawards_ibfk_18` FOREIGN KEY (`AwardId`) REFERENCES `awards` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesawards_ibfk_19` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesawards_ibfk_2` FOREIGN KEY (`AwardId`) REFERENCES `awards` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesawards_ibfk_20` FOREIGN KEY (`AwardId`) REFERENCES `awards` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesawards_ibfk_21` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesawards_ibfk_22` FOREIGN KEY (`AwardId`) REFERENCES `awards` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesawards_ibfk_23` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesawards_ibfk_24` FOREIGN KEY (`AwardId`) REFERENCES `awards` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesawards_ibfk_3` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesawards_ibfk_4` FOREIGN KEY (`AwardId`) REFERENCES `awards` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesawards_ibfk_5` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesawards_ibfk_6` FOREIGN KEY (`AwardId`) REFERENCES `awards` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesawards_ibfk_7` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesawards_ibfk_8` FOREIGN KEY (`AwardId`) REFERENCES `awards` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesawards_ibfk_9` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `gameslanguages`
--
ALTER TABLE `gameslanguages`
  ADD CONSTRAINT `gameslanguages_ibfk_1` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gameslanguages_ibfk_10` FOREIGN KEY (`LanguageId`) REFERENCES `languages` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gameslanguages_ibfk_11` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gameslanguages_ibfk_12` FOREIGN KEY (`LanguageId`) REFERENCES `languages` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gameslanguages_ibfk_13` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gameslanguages_ibfk_14` FOREIGN KEY (`LanguageId`) REFERENCES `languages` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gameslanguages_ibfk_15` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gameslanguages_ibfk_16` FOREIGN KEY (`LanguageId`) REFERENCES `languages` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gameslanguages_ibfk_17` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gameslanguages_ibfk_18` FOREIGN KEY (`LanguageId`) REFERENCES `languages` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gameslanguages_ibfk_19` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gameslanguages_ibfk_2` FOREIGN KEY (`LanguageId`) REFERENCES `languages` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gameslanguages_ibfk_20` FOREIGN KEY (`LanguageId`) REFERENCES `languages` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gameslanguages_ibfk_21` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gameslanguages_ibfk_22` FOREIGN KEY (`LanguageId`) REFERENCES `languages` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gameslanguages_ibfk_23` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gameslanguages_ibfk_24` FOREIGN KEY (`LanguageId`) REFERENCES `languages` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gameslanguages_ibfk_3` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gameslanguages_ibfk_4` FOREIGN KEY (`LanguageId`) REFERENCES `languages` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gameslanguages_ibfk_5` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gameslanguages_ibfk_6` FOREIGN KEY (`LanguageId`) REFERENCES `languages` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gameslanguages_ibfk_7` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gameslanguages_ibfk_8` FOREIGN KEY (`LanguageId`) REFERENCES `languages` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gameslanguages_ibfk_9` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `gamesplatforms`
--
ALTER TABLE `gamesplatforms`
  ADD CONSTRAINT `gamesplatforms_ibfk_1` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesplatforms_ibfk_10` FOREIGN KEY (`PlatformId`) REFERENCES `platforms` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesplatforms_ibfk_11` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesplatforms_ibfk_12` FOREIGN KEY (`PlatformId`) REFERENCES `platforms` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesplatforms_ibfk_13` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesplatforms_ibfk_14` FOREIGN KEY (`PlatformId`) REFERENCES `platforms` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesplatforms_ibfk_15` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesplatforms_ibfk_16` FOREIGN KEY (`PlatformId`) REFERENCES `platforms` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesplatforms_ibfk_17` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesplatforms_ibfk_18` FOREIGN KEY (`PlatformId`) REFERENCES `platforms` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesplatforms_ibfk_19` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesplatforms_ibfk_2` FOREIGN KEY (`PlatformId`) REFERENCES `platforms` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesplatforms_ibfk_20` FOREIGN KEY (`PlatformId`) REFERENCES `platforms` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesplatforms_ibfk_21` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesplatforms_ibfk_22` FOREIGN KEY (`PlatformId`) REFERENCES `platforms` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesplatforms_ibfk_23` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesplatforms_ibfk_24` FOREIGN KEY (`PlatformId`) REFERENCES `platforms` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesplatforms_ibfk_3` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesplatforms_ibfk_4` FOREIGN KEY (`PlatformId`) REFERENCES `platforms` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesplatforms_ibfk_5` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesplatforms_ibfk_6` FOREIGN KEY (`PlatformId`) REFERENCES `platforms` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesplatforms_ibfk_7` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesplatforms_ibfk_8` FOREIGN KEY (`PlatformId`) REFERENCES `platforms` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamesplatforms_ibfk_9` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `gamestags`
--
ALTER TABLE `gamestags`
  ADD CONSTRAINT `gamestags_ibfk_1` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamestags_ibfk_10` FOREIGN KEY (`TagId`) REFERENCES `tags` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamestags_ibfk_11` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamestags_ibfk_12` FOREIGN KEY (`TagId`) REFERENCES `tags` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamestags_ibfk_13` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamestags_ibfk_14` FOREIGN KEY (`TagId`) REFERENCES `tags` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamestags_ibfk_15` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamestags_ibfk_16` FOREIGN KEY (`TagId`) REFERENCES `tags` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamestags_ibfk_17` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamestags_ibfk_18` FOREIGN KEY (`TagId`) REFERENCES `tags` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamestags_ibfk_19` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamestags_ibfk_2` FOREIGN KEY (`TagId`) REFERENCES `tags` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamestags_ibfk_20` FOREIGN KEY (`TagId`) REFERENCES `tags` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamestags_ibfk_21` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamestags_ibfk_22` FOREIGN KEY (`TagId`) REFERENCES `tags` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamestags_ibfk_23` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamestags_ibfk_24` FOREIGN KEY (`TagId`) REFERENCES `tags` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamestags_ibfk_3` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamestags_ibfk_4` FOREIGN KEY (`TagId`) REFERENCES `tags` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamestags_ibfk_5` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamestags_ibfk_6` FOREIGN KEY (`TagId`) REFERENCES `tags` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamestags_ibfk_7` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamestags_ibfk_8` FOREIGN KEY (`TagId`) REFERENCES `tags` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamestags_ibfk_9` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `pcspecs`
--
ALTER TABLE `pcspecs`
  ADD CONSTRAINT `pcspecs_ibfk_1` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `pcspecs_ibfk_10` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `pcspecs_ibfk_11` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `pcspecs_ibfk_12` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `pcspecs_ibfk_2` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `pcspecs_ibfk_3` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `pcspecs_ibfk_4` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `pcspecs_ibfk_5` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `pcspecs_ibfk_6` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `pcspecs_ibfk_7` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `pcspecs_ibfk_8` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `pcspecs_ibfk_9` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Megkötések a táblához `ratings`
--
ALTER TABLE `ratings`
  ADD CONSTRAINT `ratings_ibfk_1` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ratings_ibfk_10` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ratings_ibfk_11` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ratings_ibfk_12` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ratings_ibfk_13` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ratings_ibfk_14` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ratings_ibfk_15` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ratings_ibfk_16` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ratings_ibfk_17` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ratings_ibfk_18` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ratings_ibfk_19` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ratings_ibfk_2` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ratings_ibfk_20` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ratings_ibfk_21` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ratings_ibfk_22` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ratings_ibfk_23` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ratings_ibfk_24` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ratings_ibfk_3` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ratings_ibfk_4` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ratings_ibfk_5` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ratings_ibfk_6` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ratings_ibfk_7` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ratings_ibfk_8` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ratings_ibfk_9` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Megkötések a táblához `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `reviews_ibfk_10` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `reviews_ibfk_11` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `reviews_ibfk_12` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `reviews_ibfk_13` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `reviews_ibfk_14` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `reviews_ibfk_15` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `reviews_ibfk_16` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `reviews_ibfk_17` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `reviews_ibfk_18` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `reviews_ibfk_19` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `reviews_ibfk_2` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `reviews_ibfk_20` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `reviews_ibfk_21` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `reviews_ibfk_22` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `reviews_ibfk_3` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `reviews_ibfk_4` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `reviews_ibfk_5` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `reviews_ibfk_6` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `reviews_ibfk_7` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `reviews_ibfk_8` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `reviews_ibfk_9` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Megkötések a táblához `studiosgames`
--
ALTER TABLE `studiosgames`
  ADD CONSTRAINT `studiosgames_ibfk_1` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `studiosgames_ibfk_10` FOREIGN KEY (`StudioId`) REFERENCES `studios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `studiosgames_ibfk_11` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `studiosgames_ibfk_12` FOREIGN KEY (`StudioId`) REFERENCES `studios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `studiosgames_ibfk_13` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `studiosgames_ibfk_14` FOREIGN KEY (`StudioId`) REFERENCES `studios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `studiosgames_ibfk_15` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `studiosgames_ibfk_16` FOREIGN KEY (`StudioId`) REFERENCES `studios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `studiosgames_ibfk_17` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `studiosgames_ibfk_18` FOREIGN KEY (`StudioId`) REFERENCES `studios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `studiosgames_ibfk_19` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `studiosgames_ibfk_2` FOREIGN KEY (`StudioId`) REFERENCES `studios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `studiosgames_ibfk_20` FOREIGN KEY (`StudioId`) REFERENCES `studios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `studiosgames_ibfk_21` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `studiosgames_ibfk_22` FOREIGN KEY (`StudioId`) REFERENCES `studios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `studiosgames_ibfk_23` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `studiosgames_ibfk_24` FOREIGN KEY (`StudioId`) REFERENCES `studios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `studiosgames_ibfk_3` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `studiosgames_ibfk_4` FOREIGN KEY (`StudioId`) REFERENCES `studios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `studiosgames_ibfk_5` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `studiosgames_ibfk_6` FOREIGN KEY (`StudioId`) REFERENCES `studios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `studiosgames_ibfk_7` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `studiosgames_ibfk_8` FOREIGN KEY (`StudioId`) REFERENCES `studios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `studiosgames_ibfk_9` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
