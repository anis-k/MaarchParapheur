/* Tests */
TRUNCATE TABLE main_documents;
TRUNCATE TABLE adr_main_documents;
TRUNCATE TABLE attachments;
TRUNCATE TABLE adr_attachments;
TRUNCATE TABLE workflows;
TRUNCATE TABLE signatures;

INSERT INTO adr_attachments (id, attachment_id, type, path, filename, fingerprint) VALUES (1, 1, 'ATTACH', '2021/03/0001/', '0001_1122844471.pdf', 'cd6aefd46cb9b88a7c163f549b77135f8409634ca246d5344c8002f67e173d3e75fb6503bc74f09bb4f86a55ae1091d5aabb1bd6addf3e5930318b2d19d6827c');
INSERT INTO adr_attachments (id, attachment_id, type, path, filename, fingerprint) VALUES (2, 1, 'TNL1', '2021/03/0001/', '0002_1616006431.png', '330aa4781bde307551a4299cce9ff48c0084ad872db68ac265012bee9062c37b3f2e21be68d0a50d5bade6a8bf795c74308c1a88ffa1fe230eab0b484e7751fb');
INSERT INTO adr_attachments (id, attachment_id, type, path, filename, fingerprint) VALUES (3, 2, 'ATTACH', '2021/03/0001/', '0003_434570376.pdf', '33e9e2b5cfacd1c0f5b3efe84f1d16719acd4b5ccad1b899edc90cc1fd294d1c3347f6c9f3cf4e2698e0a8467fe2758d551e059561d0894f6b6e23b415cbd1f8');
INSERT INTO adr_attachments (id, attachment_id, type, path, filename, fingerprint) VALUES (4, 2, 'TNL1', '2021/03/0001/', '0004_1117633033.png', 'f5fd69202a3d498740759c64ff0839e949f36c5481cbbbe4061ebbc5d5d13f1b70ec3bbc36a033f342e5c1405b4b288ef7168636451d14a91c1bf47618edfd83');
INSERT INTO adr_attachments (id, attachment_id, type, path, filename, fingerprint) VALUES (5, 3, 'ATTACH', '2021/03/0001/', '0005_792090115.pdf', 'cd6aefd46cb9b88a7c163f549b77135f8409634ca246d5344c8002f67e173d3e75fb6503bc74f09bb4f86a55ae1091d5aabb1bd6addf3e5930318b2d19d6827c');
INSERT INTO adr_attachments (id, attachment_id, type, path, filename, fingerprint) VALUES (6, 3, 'TNL1', '2021/03/0001/', '0006_584633965.png', 'e0719cd806755d0da932e66a0670f35238a701b4e01abf72134c3999e98cb7a748d3b399ac1ed800e49309e081fd63fece56798a4b03e6a6215a46bf8570a976');

INSERT INTO adr_main_documents (id, main_document_id, type, path, filename, fingerprint) VALUES (1, 1, 'DOC', '2021/03/0001/', '0001_1384300851.pdf', '8534dbffd7c7ecbf19e339dd15e155c7325c789e430fa320612d578d777c0a7950d17b59f26dd5282ab53f902c5697aec20adb554888c6b8046df8d62ee6605b');
INSERT INTO adr_main_documents (id, main_document_id, type, path, filename, fingerprint) VALUES (2, 1, 'ORIGINAL', '2021/03/0001/', '0001_19271208.pdf', '8534dbffd7c7ecbf19e339dd15e155c7325c789e430fa320612d578d777c0a7950d17b59f26dd5282ab53f902c5697aec20adb554888c6b8046df8d62ee6605b');
INSERT INTO adr_main_documents (id, main_document_id, type, path, filename, fingerprint) VALUES (3, 1, 'TNL1', '2021/03/0001/', '0002_810518394.png', 'c05b7229c9222f60bceb5cf882e950a1f003cbc039818708876cd3c20ac3a8152bb46b3454223efccedd1ab1b9add4e40341e568f822ce1eecf27ff9afdc89ef');
INSERT INTO adr_main_documents (id, main_document_id, type, path, filename, fingerprint) VALUES (4, 1, 'TNL2', '2021/03/0001/', '0003_559568.png', '5535e1582a3fe61d9f2b2564a99448434d26ae0a4eb4b71081ff38cfb1ed5fd1b52c4d2c4a406f923d3e00c4a57c084fc19843a40603be4fc3867e9c4338d530');
INSERT INTO adr_main_documents (id, main_document_id, type, path, filename, fingerprint) VALUES (5, 1, 'TNL3', '2021/03/0001/', '0004_820368033.png', '93bcde9eb3f784906373b088100251228e308db33a1754a2ee1f1d966ea7946f86e4a78701a9abe8dc0ada9aea97b13623db56a29e4ba6f4688f64294a5ecd77');
INSERT INTO adr_main_documents (id, main_document_id, type, path, filename, fingerprint) VALUES (6, 1, 'TNL4', '2021/03/0001/', '0005_579995688.png', 'e998c3f8932f7463d2f722af3599c076485a035f9ada1c229f4b50ef94a0dad273174a3adc2fee005b7e29e509d128ef4ddda9819ac470b45465513756dba220');
INSERT INTO adr_main_documents (id, main_document_id, type, path, filename, fingerprint) VALUES (7, 1, 'TNL5', '2021/03/0001/', '0006_1619272358.png', 'a686cf88a27b1f2f4def2571cd0308a5fc7ebac2f8fa7d7a5f084a7ceff90f2b261be5a34a44bf012097ec02ade1834113b9d99ebdd536f5f81c6404e0cf9c68');
INSERT INTO adr_main_documents (id, main_document_id, type, path, filename, fingerprint) VALUES (8, 1, 'TNL6', '2021/03/0001/', '0007_1532491200.png', 'c9780fc41b67adad09da02e809c34d138fcf648b3291b9521876cb076dc1a317c77df96bdaf55e82b1722e383d8a055f1f0fd1c41510e9eb6d77fad0b1a8feb4');
INSERT INTO adr_main_documents (id, main_document_id, type, path, filename, fingerprint) VALUES (9, 1, 'TNL7', '2021/03/0001/', '0008_1699444298.png', 'dfbf1c25e98c9cca4de573d78db7859c2ff539053126a9ba124ef6820842c76a2d169cc2cd24e55a82cb944b174ce29253d01d12e26598de5f24ae9136822b9a');
INSERT INTO adr_main_documents (id, main_document_id, type, path, filename, fingerprint) VALUES (10, 1, 'TNL8', '2021/03/0001/', '0009_1238226733.png', 'f18222eb71bb4ca387c1a7c97bd1cb1c9c8231a3f30bee3997199da73907a9f676cbceba2b385c7a7d4c662b51b7a2e9427d7ff9eb612399a4e1320daf418bfa');
INSERT INTO adr_main_documents (id, main_document_id, type, path, filename, fingerprint) VALUES (11, 2, 'DOC', '2021/03/0001/', '0010_1599286099.pdf', 'ac8afa05dacbf7764b1d6bb7c26f69657ef0224c0804c0f679ee9795491bd6a4326dad41ad01d8c6be7406eb470f3a723a7e0aef6da035f0ba52f3a7e0533f48');
INSERT INTO adr_main_documents (id, main_document_id, type, path, filename, fingerprint) VALUES (12, 2, 'ORIGINAL', '2021/03/0001/', '0002_184634841.pdf', 'ac8afa05dacbf7764b1d6bb7c26f69657ef0224c0804c0f679ee9795491bd6a4326dad41ad01d8c6be7406eb470f3a723a7e0aef6da035f0ba52f3a7e0533f48');
INSERT INTO adr_main_documents (id, main_document_id, type, path, filename, fingerprint) VALUES (13, 2, 'TNL1', '2021/03/0001/', '0011_1360027044.png', '420d1bf71b670cb72aea0aa53902265e6da8c4fc901dbfb29563675f7dcf026a61160470cf2639e6790886b965b4437543fe0e8fab818e0460a644140730c429');
INSERT INTO adr_main_documents (id, main_document_id, type, path, filename, fingerprint) VALUES (14, 2, 'TNL2', '2021/03/0001/', '0012_1536140505.png', 'f9870b768dacabb08c58dde098a2cf88c790ef10da951a6d8b8e76698842985cfcbc63b1f7cb54f6da656ef7c4821f5673657b6a3615e7666c94109351d7cc88');
INSERT INTO adr_main_documents (id, main_document_id, type, path, filename, fingerprint) VALUES (15, 2, 'TNL3', '2021/03/0001/', '0013_1988334255.png', '6ed1cf5613c75890aa61ab9f7b55f858b50a626412aa2b7e8d9b573c0e45ac81e6cbc881b6ce3cbcde4a722875cfbbade0de7963a4e5b1c29bcf60447b16187e');
INSERT INTO adr_main_documents (id, main_document_id, type, path, filename, fingerprint) VALUES (16, 3, 'DOC', '2021/03/0001/', '0014_2067613522.pdf', 'd783515ed319457b56bb5a4fadde12dd71ac638e0839b0bf57e0ef4bb3ea221edbc407b502a81be4a09789b6ec59babbefce90863e086ae37b55dc652f9739f5');
INSERT INTO adr_main_documents (id, main_document_id, type, path, filename, fingerprint) VALUES (17, 3, 'ORIGINAL', '2021/03/0001/', '0003_349212133.pdf', 'd783515ed319457b56bb5a4fadde12dd71ac638e0839b0bf57e0ef4bb3ea221edbc407b502a81be4a09789b6ec59babbefce90863e086ae37b55dc652f9739f5');
INSERT INTO adr_main_documents (id, main_document_id, type, path, filename, fingerprint) VALUES (18, 3, 'TNL1', '2021/03/0001/', '0015_627133066.png', '292ec5f24cee84812eb4c7e759f85c651c3490248e4dd62d2f6e80a01bce640b4dd2d928eff5536ac96fe1d9ecb6d83b286705a5b9ceb997339b9a39ffcd71b2');
INSERT INTO adr_main_documents (id, main_document_id, type, path, filename, fingerprint) VALUES (19, 3, 'TNL2', '2021/03/0001/', '0016_1414080446.png', '9f9f192780a0c81f0e3498af1cee7eb3ed5d8abd820bc903aeda7698a949b08045656a22ba91738cb62ffaa6c162de673038e7ae8f4d97b1b79602f26a0e35b2');
INSERT INTO adr_main_documents (id, main_document_id, type, path, filename, fingerprint) VALUES (20, 3, 'TNL3', '2021/03/0001/', '0017_1560371968.png', '7a15de2c83b0c76b39fdeb4300f0456e0acfab5561a00d718c40f4ca468af046ea0d0e781fbd4707a9f6b98beb69de239ebe10b9a25a0ab60ba70d7b8da01194');
INSERT INTO adr_main_documents (id, main_document_id, type, path, filename, fingerprint) VALUES (21, 3, 'TNL4', '2021/03/0001/', '0018_177243407.png', '3f5c39c0bc833d6d009d16b9fa21c1698aed2fb7491f94c18801b74408c141a4bf5ce02fc0a1ae55d1f20f197ee5620dcf9072d00e2a7df3b77b8d2890e0165d');
INSERT INTO adr_main_documents (id, main_document_id, type, path, filename, fingerprint) VALUES (22, 3, 'TNL5', '2021/03/0001/', '0019_1451879670.png', 'f8c42a38627a82654e254c6dd0bcfd31582e5a84d99b7e45e352610f45272187eb7cdd2209a23cb915810256860341200b0014d20cdce2c5bbb83f42f9a0147a');
INSERT INTO adr_main_documents (id, main_document_id, type, path, filename, fingerprint) VALUES (23, 3, 'TNL6', '2021/03/0001/', '0020_394393107.png', '6c974ed9f19448fdc3285a766d7e134df716eea84eb35077bb8ab82d744c513f9b52650ca8f83419bba6b93898934a24ce0a81a81de1ab396018c721c2d65f98');
INSERT INTO adr_main_documents (id, main_document_id, type, path, filename, fingerprint) VALUES (24, 3, 'TNL7', '2021/03/0001/', '0021_1028414590.png', 'eed98d194e04f9e597b0b1cb8d42964b40d699f80ead3a5e8082448769181a73453b37cd72a126f9de745e5bc717f8350474c6169b4691ef2cd966e7e3a48a88');
INSERT INTO adr_main_documents (id, main_document_id, type, path, filename, fingerprint) VALUES (25, 3, 'TNL8', '2021/03/0001/', '0022_691507114.png', '8d5daddff1e1a08f5158b487c0b2c693a1eb44de2f8163aa8125245cd7342dda2ddbb40978d5e5d013bd04b8b3c905cc3ea817c64535783514ea86d030713065');

INSERT INTO attachments (id, main_document_id, title, reference, creation_date, modification_date) VALUES (1, 1, 'Situation des installations', NULL, '2021-03-23 15:59:33.752497', '2021-03-23 15:59:33.752497');
INSERT INTO attachments (id, main_document_id, title, reference, creation_date, modification_date) VALUES (2, 2, 'CV John Smith', NULL, '2021-03-23 16:37:29.408998', '2021-03-23 16:37:29.408998');
INSERT INTO attachments (id, main_document_id, title, reference, creation_date, modification_date) VALUES (3, 3, 'Situation des installations', NULL, '2021-03-23 16:41:38.874841', '2021-03-23 16:41:38.874841');

INSERT INTO main_documents (id, title, reference, description, sender, deadline, notes, link_id, metadata, creation_date, modification_date, typist, status, digital_signature_transaction_id, mailing_id) VALUES (1, 'CA - Convention installation sportive', '2021/03/23/CA - PRE-2021-ACME', NULL, 'Jenny JANE', NULL, '{"value": "⚽ Les activités commencent dès le mois prochain", "creator": "Jenny JANE", "creationDate": "23-03-2021"}', NULL, '{}', '2021-03-23 15:59:33.752497', '2021-03-23 15:59:33.752497', 13, 'READY', NULL, NULL);
INSERT INTO main_documents (id, title, reference, description, sender, deadline, notes, link_id, metadata, creation_date, modification_date, typist, status, digital_signature_transaction_id, mailing_id) VALUES (2, 'Contrat de travail John Smith', '2021/03/23/CORH -John Smith', NULL, 'Barbara BAIN', NULL, NULL, NULL, '{}', '2021-03-23 16:37:29.408998', '2021-03-23 16:37:29.408998', 9, 'READY', NULL, NULL);
INSERT INTO main_documents (id, title, reference, description, sender, deadline, notes, link_id, metadata, creation_date, modification_date, typist, status, digital_signature_transaction_id, mailing_id) VALUES (3, 'CA - Convention installation sportive', '2021/03/23/CA - PRE-2021-ACME', NULL, 'Jenny JANE', NULL, '{"value": "🏀 Les activités commencent le mois prochain", "creator": "Jenny JANE", "creationDate": "23-03-2021"}', NULL, '{}', '2021-03-23 16:41:38.874841', '2021-03-23 16:41:38.874841', 13, 'READY', NULL, NULL);

INSERT INTO signatures (id, user_id, path, filename, fingerprint, substituted, external_application) VALUES (1, 4, '2021/03/0001/', '0001_1085914032.png', 'b05165839a6c4df134b34d381516f63ceee42d9e7dfeafd10a8eaa96a0f685a6eb40fd28d2706bdff1143cf1e8dd794bf5f962db3609852f6b8459cf6c1a0161', false, NULL);
INSERT INTO signatures (id, user_id, path, filename, fingerprint, substituted, external_application) VALUES (3, 4, '2021/03/0001/', '0002_1844228193.png', '29e1f850054e3b912f1759c2e1fcf676a1d043d8efebdea595ea455cd06fdd1e1bd55e09a1dd2a8a6af088611943764d1e0d3c8a0e48575e834ccf9b962ddc88', false, NULL);
INSERT INTO signatures (id, user_id, path, filename, fingerprint, substituted, external_application) VALUES (6, 10, '2021/03/0001/', '0013_1062907822.png', 'b6e70f0c3e89b769f8c5f2e59791f33e303ba08b07ebe1275ea4455babdbd0db4326f1df57614c0141b6ec5b1219a601f1c067a6011050b4735c6f90edf44b62', false, NULL);
INSERT INTO signatures (id, user_id, path, filename, fingerprint, substituted, external_application) VALUES (7, 10, '2021/03/0001/', '0014_649024824.png', '874d633add9d9f61611c2ea140ab799e84b82986408002b7de84741d422aaed7d94a87434ed3db87de14baf554c54028172874ec5ce51ddd11cb589e99c016b9', false, NULL);

INSERT INTO workflows (id, user_id, main_document_id, mode, signature_mode, signature_positions, date_positions, "order", status, note, process_date, digital_signature_id) VALUES (4, 10, 2, 'sign', 'stamp', '[{"page": 3, "positionX": 66.5, "positionY": 74.18670438472418}]', '[]', 1, NULL, NULL, NULL, NULL);
INSERT INTO workflows (id, user_id, main_document_id, mode, signature_mode, signature_positions, date_positions, "order", status, note, process_date, digital_signature_id) VALUES (1, 9, 1, 'visa', 'stamp', '[]', '[]', 1, 'STOP', NULL, '2021-03-23 16:40:35.537276', NULL);
INSERT INTO workflows (id, user_id, main_document_id, mode, signature_mode, signature_positions, date_positions, "order", status, note, process_date, digital_signature_id) VALUES (2, 12, 1, 'visa', 'stamp', '[]', '[]', 2, 'STOP', NULL, '2021-03-23 16:40:35.537276', NULL);
INSERT INTO workflows (id, user_id, main_document_id, mode, signature_mode, signature_positions, date_positions, "order", status, note, process_date, digital_signature_id) VALUES (3, 10, 1, 'sign', 'stamp', '[{"page": 8, "positionX": 53.1, "positionY": 43.635077793493636}]', '[]', 3, 'STOP', NULL, '2021-03-23 16:40:35.537276', NULL);
INSERT INTO workflows (id, user_id, main_document_id, mode, signature_mode, signature_positions, date_positions, "order", status, note, process_date, digital_signature_id) VALUES (5, 12, 3, 'visa', 'stamp', '[]', '[]', 1, NULL, NULL, NULL, NULL);
INSERT INTO workflows (id, user_id, main_document_id, mode, signature_mode, signature_positions, date_positions, "order", status, note, process_date, digital_signature_id) VALUES (6, 10, 3, 'sign', 'stamp', '[{"page": 8, "positionX": 52.2, "positionY": 44.62517680339462}]', '[]', 2, NULL, NULL, NULL, NULL);

SELECT pg_catalog.setval('public.adr_attachments_id_seq', 6, true);
SELECT pg_catalog.setval('public.adr_main_documents_id_seq', 25, true);
SELECT pg_catalog.setval('public.attachments_id_seq', 3, true);
SELECT pg_catalog.setval('public.main_documents_id_seq', 3, true);
SELECT pg_catalog.setval('public.signatures_id_seq', 7, true);
SELECT pg_catalog.setval('public.workflows_id_seq', 6, true);