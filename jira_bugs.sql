CREATE DATABASE  IF NOT EXISTS `reactjs_jira_bugs_clone` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `reactjs_jira_bugs_clone`;
-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: 103.142.26.103    Database: reactjs_jira_bugs_clone
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `authority`
--

DROP TABLE IF EXISTS `authority`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `authority` (
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authority`
--

LOCK TABLES `authority` WRITE;
/*!40000 ALTER TABLE `authority` DISABLE KEYS */;
INSERT INTO `authority` VALUES ('ROLE_ADMIN'),('ROLE_USER');
/*!40000 ALTER TABLE `authority` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `timestamp` bigint NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,1570200270081,'CreateTables1570200270081'),(2,1570200490072,'SeedUsersRoles1570200490072');
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project`
--

DROP TABLE IF EXISTS `project`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdBy` varchar(255) DEFAULT 'System',
  `createdDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `lastModifiedBy` varchar(255) DEFAULT 'System',
  `lastModifiedDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `name` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `projectCategoryId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_dedfea394088ed136ddadeee89` (`name`),
  KEY `FK_63e100d6d811196f2240c262458` (`projectCategoryId`),
  CONSTRAINT `FK_63e100d6d811196f2240c262458` FOREIGN KEY (`projectCategoryId`) REFERENCES `project_category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project`
--

LOCK TABLES `project` WRITE;
/*!40000 ALTER TABLE `project` DISABLE KEYS */;
INSERT INTO `project` VALUES (33,'ADMIN','2021-12-17 18:30:00','System','2021-12-18 17:37:52','ReactJS Jira Clone','http://github/quanghavan29','<p>A Jira clone app built with ReactJS and NestJS - by quanghavan29.</p>',1),(34,'ADMIN','2021-12-17 18:30:00','System','2021-12-18 17:48:15','My Mobile App','http://github/quanghavan29','<p>A Jira clone app built with ReactJS and NestJS - by quanghavan29.</p>',2),(50,'Member','2021-12-19 18:30:00','System','2021-12-20 16:58:45','Media Library','https://medialibrary.com.vn','<p>A Jira clone app built with ReactJS and NestJS - by quanghavan29.</p>',1),(51,'Member','2021-12-19 18:30:00','System','2021-12-20 17:21:15','React Native','https://reactnative.org','<p>A Jira clone app built with ReactJS and NestJS - by quanghavan29.</p>',2),(52,'Anonymous','2021-12-20 18:30:00','System','2021-12-20 22:57:09','Flat Shop Web App','https://flatshop.com.vn','<p>A Jira clone app built with ReactJS and NestJS - by quanghavan29.</p>',1);
/*!40000 ALTER TABLE `project` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project_category`
--

DROP TABLE IF EXISTS `project_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project_category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdBy` varchar(255) DEFAULT 'System',
  `createdDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `lastModifiedBy` varchar(255) DEFAULT 'System',
  `lastModifiedDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_d0b395fdd8aacb029fe385c1e4` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project_category`
--

LOCK TABLES `project_category` WRITE;
/*!40000 ALTER TABLE `project_category` DISABLE KEYS */;
INSERT INTO `project_category` VALUES (1,'System','2021-12-18 16:05:14','System','2021-12-18 16:05:14','Web Application'),(2,'System','2021-12-18 16:05:14','System','2021-12-18 16:05:14','Mobile Application');
/*!40000 ALTER TABLE `project_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project_members`
--

DROP TABLE IF EXISTS `project_members`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project_members` (
  `projectId` int NOT NULL,
  `userId` int NOT NULL,
  PRIMARY KEY (`projectId`,`userId`),
  KEY `IDX_d19892d8f03928e5bfc7313780` (`projectId`),
  KEY `IDX_08d1346ff91abba68e5a637cfd` (`userId`),
  CONSTRAINT `FK_08d1346ff91abba68e5a637cfdb` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_d19892d8f03928e5bfc7313780c` FOREIGN KEY (`projectId`) REFERENCES `project` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project_members`
--

LOCK TABLES `project_members` WRITE;
/*!40000 ALTER TABLE `project_members` DISABLE KEYS */;
INSERT INTO `project_members` VALUES (33,1),(33,2),(33,3),(33,4),(33,5),(34,1),(34,3),(34,4),(34,12),(50,1),(50,5),(50,10),(50,12),(50,18),(50,21),(51,3),(51,5),(51,6),(52,5),(52,10),(52,11),(52,12);
/*!40000 ALTER TABLE `project_members` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `task`
--

DROP TABLE IF EXISTS `task`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `task` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdBy` varchar(255) DEFAULT 'System',
  `createdDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `lastModifiedBy` varchar(255) DEFAULT 'System',
  `lastModifiedDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `title` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `projectId` int DEFAULT NULL,
  `timeTrackingSpent` int NOT NULL,
  `timeTrackingRemaining` int NOT NULL,
  `type` varchar(255) NOT NULL,
  `priority` varchar(255) NOT NULL,
  `originalEstimate` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_3797a20ef5553ae87af126bc2fe` (`projectId`),
  CONSTRAINT `FK_3797a20ef5553ae87af126bc2fe` FOREIGN KEY (`projectId`) REFERENCES `project` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `task`
--

LOCK TABLES `task` WRITE;
/*!40000 ALTER TABLE `task` DISABLE KEYS */;
/*!40000 ALTER TABLE `task` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdBy` varchar(255) DEFAULT 'System',
  `createdDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `lastModifiedBy` varchar(255) DEFAULT 'System',
  `lastModifiedDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `login` varchar(255) NOT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `activated` tinyint NOT NULL DEFAULT '0',
  `langKey` varchar(255) NOT NULL DEFAULT 'en',
  `password` varchar(255) NOT NULL,
  `imageUrl` varchar(255) DEFAULT NULL,
  `activationKey` varchar(255) DEFAULT NULL,
  `resetKey` varchar(255) DEFAULT NULL,
  `resetDate` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_a62473490b3e4578fd683235c5` (`login`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'system','2021-12-18 14:45:15','system','2021-12-18 14:45:15','system','System','System','system@localhost.it',1,'en','$2b$10$GC6xYbKRw5wb6dzh3c1nHuDqEWQuobWY5M8tNlXUqigbhMDWMI3km','https://res.cloudinary.com/fpt-food/image/upload/v1639680442/FPT%20FOOD/Jira_Bugs_Clone/ironman_tvda3m.jpg',NULL,NULL,NULL),(2,'system','2021-12-18 14:45:15','system','2021-12-18 14:45:15','anonymoususer','Anonymous','User','anonymoususer@localhost.it',1,'en','$2b$10$zx4TWR0OxEeN79Qg.NrBKO1i57b0sm1t5QdQtl4IB.aZ/cA.z9rLO','',NULL,NULL,NULL),(3,'system','2021-12-18 14:45:15','system','2021-12-18 14:45:15','admin','Administrator','Administrator','admin@localhost.it',1,'en','$2b$10$7.DaEX0ekSGV0ItRA6/tzurnCNdCVCyG67iI6Ohg3Mn75PJ6.IH0e','https://res.cloudinary.com/fpt-food/image/upload/v1639680442/FPT%20FOOD/Jira_Bugs_Clone/captain_xdv72o.jpg',NULL,NULL,NULL),(4,'system','2021-12-18 14:45:15','system','2021-12-18 14:45:15','user','User','User','user@localhost.it',1,'en','$2b$10$RvEmTYJomCDcIEEjPQj0eOo1BGGs1NVlnh0NwdPpYRnHiDKvuaaO.','https://res.cloudinary.com/fpt-food/image/upload/v1639680442/FPT%20FOOD/Jira_Bugs_Clone/spiderman_z2e5kw.jpg',NULL,NULL,NULL),(5,'quanghv','2021-12-20 18:31:01','quanghv','2021-12-20 18:31:01','quanghv',NULL,NULL,NULL,1,'en','$2a$10$9.nDD0uRroPi47qPX0tou.Qg3WgpSdRcq/EQe7Eer0ZeeTeMAn0uK',NULL,NULL,NULL,NULL),(6,'myntt','2021-12-20 18:31:15','myntt','2021-12-20 18:31:15','myntt',NULL,NULL,NULL,1,'en','$2a$10$YALaPA0qEQnBWIPZPSLNnu1q5UbLQ57fIQ4zwSG378z2bAK4FKdNm',NULL,NULL,NULL,NULL),(7,'register','2021-12-20 18:50:17','register','2021-12-20 18:50:17','register',NULL,NULL,NULL,1,'en','$2a$10$tTr.85ABM1bnGNGtBHYlae25lqoE5QkQHKuWeeI6oPeW.D1wQE1dy',NULL,NULL,NULL,NULL),(8,'thuvt','2021-12-20 18:51:01','thuvt','2021-12-20 18:51:01','thuvt',NULL,NULL,NULL,1,'en','$2a$10$tTFFV3D5LqpPKPi3gT1Kq.npz9XgGtl4uSlrLxHYWQPpZEyupmOtm',NULL,NULL,NULL,NULL),(9,'lucvx','2021-12-20 18:55:34','lucvx','2021-12-20 18:55:34','lucvx',NULL,NULL,NULL,1,'en','$2a$10$ncATZg5PP4RflkQiaHWB3OFlGRJKX4UWMRbBf4aYzVBt/LH38c6aa',NULL,NULL,NULL,NULL),(10,'truongvv','2021-12-20 18:56:10','truongvv','2021-12-20 18:56:10','truongvv',NULL,NULL,NULL,1,'en','$2a$10$Aw7kIrRW0cAd3FrXDBKDx.UeTOWYHr9xfjB8Umso322WsO3l9a0fm',NULL,NULL,NULL,NULL),(11,'khuend','2021-12-20 18:57:00','khuend','2021-12-20 18:57:00','khuend',NULL,NULL,NULL,1,'en','$2a$10$13aH8IIcozkf5ggXFyW23uQ9dYhkXHkzRNMZOfYviTezddJrQE7HO',NULL,NULL,NULL,NULL),(12,'hainx','2021-12-20 18:58:05','hainx','2021-12-20 18:58:05','hainx',NULL,NULL,NULL,1,'en','$2a$10$6Rg5ww54zp4z2NeZgJlu7.1Tn6OLHdLZ2LMtcQfji0KOzrOr589uK',NULL,NULL,NULL,NULL),(13,'huyennv','2021-12-20 18:58:40','huyennv','2021-12-20 18:58:40','huyennv',NULL,NULL,NULL,1,'en','$2a$10$MDMT0U7pWSlxGDONIZR0cuJJXsPHvK.rqbSegzReAw1msYvOp17/O',NULL,NULL,NULL,NULL),(14,'longnh','2021-12-20 19:00:01','longnh','2021-12-20 19:00:01','longnh',NULL,NULL,NULL,1,'en','$2a$10$3sph839m3CqktbUDaPMXqOCzTCPOAWCokFdoJYXgnTiiaQZramG/6',NULL,NULL,NULL,NULL),(15,'ngocha','2021-12-20 19:00:27','ngocha','2021-12-20 19:00:27','ngocha',NULL,NULL,NULL,1,'en','$2a$10$rRtCah0EfANrPmcEeO0p5.EIbR1XNjhuQfJNsZE3TZ22GZdfHRpKW',NULL,NULL,NULL,NULL),(17,'hoanlt','2021-12-20 19:13:09','hoanlt','2021-12-20 19:13:09','hoanlt',NULL,NULL,NULL,1,'en','$2a$10$3FumX9a1HqlTONkLUh817OWoiamA/1M.O.mzdfHeT13yw3tvUzBpy',NULL,NULL,NULL,NULL),(18,'maiht','2021-12-21 04:52:39','maiht','2021-12-21 04:52:39','maiht',NULL,NULL,NULL,1,'en','$2a$10$NtslFPfCdsw5SJ0X0kUKreZhyr0WEUIBOX7FsubjMZkhHf5I6.eRK',NULL,NULL,NULL,NULL),(19,'khaitd','2021-12-21 05:01:37','khaitd','2021-12-21 05:01:37','khaitd',NULL,NULL,NULL,1,'en','$2a$10$YVeTSULeawMmyGMwl2H3u.gxunI3.F35sgXVb9wJ8Ew5j2Az1DoDq',NULL,NULL,NULL,NULL),(20,'hirecy27','2021-12-21 07:58:32','hirecy27','2021-12-21 07:58:32','hirecy27',NULL,NULL,NULL,1,'en','$2a$10$tMTcLUYqq.7OWR279ufQrOXHgiXiKUJ3YqSlSKcgg91nyXW9q6zhS',NULL,NULL,NULL,NULL),(21,'trieunv33','2021-12-21 07:59:45','trieunv33','2021-12-21 07:59:45','trieunv33',NULL,NULL,NULL,1,'en','$2a$10$trf3ipNxWZIJK7Skwp2AcOloiMSchLi6t2xyjLrnDG22grJa24N6K',NULL,NULL,NULL,NULL),(22,'iroman','2021-12-21 08:35:43','iroman','2021-12-21 08:35:43','iroman',NULL,NULL,NULL,1,'en','$2a$10$O5gkSZBsuevUaPe7qLY/ROr3kX06DL.NdBycADGzOZ4YrqJs.cAVe',NULL,NULL,NULL,NULL),(23,'iroman23','2021-12-21 08:39:36','iroman23','2021-12-21 08:39:36','iroman23',NULL,NULL,NULL,1,'en','$2a$10$owwbr.EjGB0LmQjPyhJthOoRhJzBFFzbQXUGPnOgWanmzIC1oucQu',NULL,NULL,NULL,NULL),(24,'bonba','2021-12-21 08:49:35','bonba','2021-12-21 08:49:35','bonba',NULL,NULL,NULL,1,'en','$2a$10$Ko/Bvai41Am/oSSIpGWroeZgxO/UNzDO0s4dsjsizNEfpViPMpZda',NULL,NULL,NULL,NULL),(25,'leeky26','2021-12-21 08:55:44','leeky26','2021-12-21 08:55:44','leeky26',NULL,NULL,NULL,1,'en','$2a$10$gZwo/lS9JNnhWfe7y4SzhuV7la3dZwfP2W.l23ekZAld.Xn0H8Z.u',NULL,NULL,NULL,NULL),(26,'lucvu1267@gmail.com','2021-12-21 09:00:51','lucvu1267@gmail.com','2021-12-21 09:00:51','lucvu1267@gmail.com',NULL,NULL,NULL,1,'en','$2a$10$YG96Eo42SqhIumpsF/QMCOq2JymOGL7JFsp5GMmCuXSaqw/zLeCdu',NULL,NULL,NULL,NULL),(27,'hongdang','2021-12-21 09:07:55','hongdang','2021-12-21 09:07:55','hongdang',NULL,NULL,NULL,1,'en','$2a$10$mKGIoJhNb6Cs8IC4TzaVduNO0M1jZ6RwaKoGSw5PLZrPo/0QleCFi',NULL,NULL,NULL,NULL),(28,'xuanhainguyen11062@gmail.com','2021-12-21 09:52:40','xuanhainguyen11062@gmail.com','2021-12-21 09:52:40','xuanhainguyen11062@gmail.com',NULL,NULL,NULL,1,'en','$2a$10$GzSTy4imZx4haPqnBYxhDe7gPbdFZWiI0wMjJqcSoWwzqRQ7zOJJK',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_authorities_authority`
--

DROP TABLE IF EXISTS `user_authorities_authority`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_authorities_authority` (
  `userId` int NOT NULL,
  `authorityName` varchar(255) NOT NULL,
  PRIMARY KEY (`userId`,`authorityName`),
  KEY `IDX_8f62ba8a50a3947a03daea3a91` (`userId`),
  KEY `IDX_3ecebbac586afdb652249ef826` (`authorityName`),
  CONSTRAINT `FK_3ecebbac586afdb652249ef8263` FOREIGN KEY (`authorityName`) REFERENCES `authority` (`name`) ON DELETE CASCADE,
  CONSTRAINT `FK_8f62ba8a50a3947a03daea3a918` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_authorities_authority`
--

LOCK TABLES `user_authorities_authority` WRITE;
/*!40000 ALTER TABLE `user_authorities_authority` DISABLE KEYS */;
INSERT INTO `user_authorities_authority` VALUES (1,'ROLE_ADMIN'),(1,'ROLE_USER'),(3,'ROLE_ADMIN'),(3,'ROLE_USER'),(4,'ROLE_USER'),(5,'ROLE_USER'),(6,'ROLE_USER'),(7,'ROLE_USER'),(8,'ROLE_USER'),(9,'ROLE_USER'),(10,'ROLE_USER'),(11,'ROLE_USER'),(12,'ROLE_USER'),(13,'ROLE_USER'),(14,'ROLE_USER'),(15,'ROLE_USER'),(17,'ROLE_USER'),(18,'ROLE_USER'),(19,'ROLE_USER'),(20,'ROLE_USER'),(21,'ROLE_USER'),(22,'ROLE_USER'),(23,'ROLE_USER'),(24,'ROLE_USER'),(25,'ROLE_USER'),(26,'ROLE_USER'),(27,'ROLE_USER'),(28,'ROLE_USER');
/*!40000 ALTER TABLE `user_authorities_authority` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_asign`
--

DROP TABLE IF EXISTS `users_asign`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_asign` (
  `taskId` int NOT NULL,
  `userId` int NOT NULL,
  PRIMARY KEY (`taskId`,`userId`),
  KEY `IDX_40921c4d3045cb3207ff83cb64` (`taskId`),
  KEY `IDX_ffe209c02922666cbd4ddafe77` (`userId`),
  CONSTRAINT `FK_40921c4d3045cb3207ff83cb641` FOREIGN KEY (`taskId`) REFERENCES `task` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_ffe209c02922666cbd4ddafe777` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_asign`
--

LOCK TABLES `users_asign` WRITE;
/*!40000 ALTER TABLE `users_asign` DISABLE KEYS */;
/*!40000 ALTER TABLE `users_asign` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'reactjs_jira_bugs_clone'
--

--
-- Dumping routines for database 'reactjs_jira_bugs_clone'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-28 18:27:23
