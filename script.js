// ============================================================
// SECCIÓN DE CONFIGURACIÓN: ENLACES DE GOOGLE DRIVE
// ============================================================
// Estructura: driveLinks[grado][tomo][seccion][idCurso] = "URL"
// grados: "1ro", "2do", "3ro", "4to", "5to"
// tomos: "tomo-i", "tomo-ii", "tomo-iii", "tomo-iv", "tomo-v", "tomo-vi", "tomo-vii", "tomo-viii"
// secciones: "cap1", "cap2", "cap3", "retro" (los números de capítulos se ajustan según tomo)
// idCurso: del 1 al 20 (ver lista de cursos más abajo)
//
// INSTRUCCIONES: Reemplaza las URL de ejemplo con tus enlaces reales de Drive.
// Puedes copiar y pegar tantas líneas como necesites.
// ============================================================

const driveLinks = {
    
    // ========== 5TO PRE ==========
    "5tosm": {
        "tomo-i": {
            "cap1": {
                1: "https://docs.google.com/presentation/d/1B8QF-UhEnuiqpP1lKRYBuQ_xBBxQArla/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Economía
                2: "https://docs.google.com/presentation/d/1fn-Fd6KCAouCEgsmyj0dR4ow9Z-SPYnk/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geografía
                3: "https://docs.google.com/presentation/d/1u-o3vIOx7XSu-AAzIQ6OFUZX1fJITcUT/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia del Perú
                4: "https://docs.google.com/presentation/d/1th2xv9rSMcxswn2_lpfJ1xcsZXIe5zZU/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia Universal
                5: "https://docs.google.com/presentation/d/1ua791ccY7xBAa_zuTR_uZ2lcU84CvXC4/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Psicología
                8: "https://docs.google.com/presentation/d/1B5XnpSnpu5IdJCTuGYIcPkLdv8NcgJoV/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Lenguaje
                9: "https://docs.google.com/presentation/d/1tjscjYqpjwjkcloU8-8EaQzk8OFIiN9x/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Literatura
                10: "https://docs.google.com/presentation/d/1MFz3KS4TfD88hwkhowSI59pZce58zeTI/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Razonamiento Verbal
                13: "https://docs.google.com/presentation/d/1RC-TPapxOVRMTAcsdLtyGPDfreroC-h_/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",  // Biología
                14: "https://docs.google.com/presentation/d/1PpzSG-S6asHv_oTHmVpTilmO0a6ah1E-/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",    // Física
                15: "https://docs.google.com/presentation/d/1ShSEo9cm1SGZcVb_6L3grwsndZ-En4ca/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Química
                16: "https://docs.google.com/presentation/d/1PEa8980sGHLByfA6HmJyKfQZ4QraNjR1/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Álgebra
                17: "https://docs.google.com/presentation/d/19Jirb7MDXIEOijS9qloiQXS55KMJ7luh/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Aritmética
                18: "https://docs.google.com/presentation/d/1x-kkyNOFK07ptJjuFwoivcuI1g2vAnXa/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geometría
                19: "https://docs.google.com/presentation/d/1IY592earN7zJKdDJgs2IKM9tyKCn1t7U/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",        // Razonamiento Matemático
                20: "https://docs.google.com/presentation/d/1yoD7zcFve7b3xWTxXjZ0IHqJcznuk9ZD/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true" // Trigonometría
            },
            "cap2": {
                1: "https://docs.google.com/presentation/d/1AG3cH4k1z-txHyeXV_3BEO5WFC2dzntT/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Economía
                2: "https://docs.google.com/presentation/d/1GgL424fxzk6Djg-9WoKx5P0CEJi6BlYB/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geografía
                3: "https://docs.google.com/presentation/d/1gL3tRg-znJvE0GBEzxbuolx01o8j4vf0/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia del Perú
                4: "https://docs.google.com/presentation/d/1_0BOi-9azVRK5tXSFZyYWWUharkD-xG3/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia Universal
                5: "https://docs.google.com/presentation/d/18Kfj51AnNJt7gFS7fN94hZlIcWExJ0ei/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Psicología
                8: "https://docs.google.com/presentation/d/1Dj0zMX_4ff9b33im4SZT_YKD2_H7KOG4/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Lenguaje
                9: "https://docs.google.com/presentation/d/1SVeQMBLTpiCqztujkY48aNBHg7TR1rux/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Literatura
                10: "https://docs.google.com/presentation/d/1NfyWDCEC0rUO28w0ALQEm22rliTTJjoI/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Razonamiento Verbal
                13: "https://docs.google.com/presentation/d/1mQTZI4hTlKh7pK1vrMXF9iEXZcNY-M1O/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",  // Biología
                14: "https://docs.google.com/presentation/d/1YMHtK-HMzR8BY_2Rd0lWEADG1zZDnQjO/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",    // Física
                15: "https://docs.google.com/presentation/d/1XvaZNgkwwv-hIZxMuetvcPIN1u0ywv_l/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Química
                16: "https://docs.google.com/presentation/d/1NtPMzIB25bNdDJMJw3YRekVeTDikkbE5/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Álgebra
                17: "https://docs.google.com/presentation/d/1Z-uBjlc8ghYyyGfQXx3Q7-odaaP-aDLa/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Aritmética
                18: "https://docs.google.com/presentation/d/1EhP01aP15trQrgnergBadm08EUBkjVFZ/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geometría
                19: "https://docs.google.com/presentation/d/1nl59fwVqy1Sa1bfHjrebKlYzxHhXmwlw/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",        // Razonamiento Matemático
                20: "https://docs.google.com/presentation/d/1UTw3aFZgnPofG1EBgZ9piho8auqv4Bu6/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true" // Trigonometría
            },
            "cap3": {
                1: "https://docs.google.com/presentation/d/16PHFyEMlzQoHjkqJK1X-VpttDNRos8ci/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Economía
                2: "https://docs.google.com/presentation/d/1Z1T8OTb9LsrQZ7s3QN3500-_D35f5RCi/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geografía
                3: "https://docs.google.com/presentation/d/1OET8J69vjDSVdVy4pMZ2NOW-xiopJgT-/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia del Perú
                4: "https://docs.google.com/presentation/d/1baJZpC37iZtRjvywYwSmfem7u--zFvIy/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia Universal
                5: "https://docs.google.com/presentation/d/1dn5p2IvZDDHRRuBtsb9zj7q6sOwSnMvD/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Psicología
                8: "https://docs.google.com/presentation/d/1H7pjpMF4q7ThvSpoW48fXOSPEmpt1cP3/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Lenguaje
                9: "https://docs.google.com/presentation/d/1XKDJO53ABmGc5ctBvWBW2yCVLg_z9cqk/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Literatura
                10: "https://docs.google.com/presentation/d/1IdHHUJbqSPwx7LVVfdj_GAHR-F5xtdfH/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Razonamiento Verbal
                13: "https://docs.google.com/presentation/d/18C95q6LSYOUPgY900lZoyi3VkGiw1YJH/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",  // Biología
                14: "https://docs.google.com/presentation/d/1_ybX-uCZEDoG75DpDBQSg37APxLTtOrz/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",    // Física
                15: "https://docs.google.com/presentation/d/1pwbE3kWxMYHjeW8bBZPQv-gBmDKZF8qc/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Química
                16: "https://docs.google.com/presentation/d/1GsrSJLCk_r_zBKJQD365PwNjVVsoLD8l/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Álgebra
                17: "https://docs.google.com/presentation/d/1HL1qQblunHtdg1e1rSCQ39ZgiBUvPFIl/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Aritmética
                18: "https://docs.google.com/presentation/d/14N5Ak0LlSCsuC7KRHna17LvdgK2FcZG6/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geometría
                19: "https://docs.google.com/presentation/d/1R6nRDTs4ojMbtBDl6jgr1D9Y6MhrOJLM/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",        // Razonamiento Matemático
                20: "https://docs.google.com/presentation/d/1Xc3jUHzqAyEGke615-_i5AdpSXuskDQ-/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true" // Trigonometría
            },
            "cap4": {
                1: "https://docs.google.com/presentation/d/13qZ1GJQL1Df-RGZCFxzuHOvoBaBQsvwG/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Economía
                2: "https://docs.google.com/presentation/d/1ejC7h_3C8-LlPzvVgNDqMe-PGeKbsO6K/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geografía
                3: "https://docs.google.com/presentation/d/1cNTFl3uAw3ckKNTk2opKgxX1q4xEOEoK/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia del Perú
                4: "https://docs.google.com/presentation/d/1RcpDfwCblmcy7SQx38bgHx8DqZh5Yu49/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=truee", // Historia Universal
                5: "https://docs.google.com/presentation/d/1v8VBOyEM5bpHgGMWMbk8sqeRS_PgbEJR/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Psicología
                8: "https://docs.google.com/presentation/d/1kJDMQCtFD9mUHQKqZAQPmFo5gxfAamaY/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Lenguaje
                9: "https://docs.google.com/presentation/d/1ighAk1i4Tb5SWUy0_WCjXu-C4ddS5T3W/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Literatura
                10: "https://docs.google.com/presentation/d/1DQmkQrAnMypTwCWbOTNr16FIdzgT6K_h/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Razonamiento Verbal
                13: "https://docs.google.com/presentation/d/1yIt9mEKda-cDu7SqkeOdY3zU1kK5kg1L/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",  // Biología
                14: "https://docs.google.com/presentation/d/1iD7NA0uu7zzVzRKQGyKBMG2ESmZAxiVi/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",    // Física
                15: "https://docs.google.com/presentation/d/1YoHCem7l2ZGYez4axbxxp4lLx0qO27NJ/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Química
                16: "hhttps://docs.google.com/presentation/d/1YL0s6V_IVSCcTmFZDEF7HFomM8zrj2QS/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Álgebra
                17: "https://docs.google.com/presentation/d/1_B9l8Fmdjs0W2BVuUat5EG4cROA86kaS/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Aritmética
                18: "https://docs.google.com/presentation/d/1srDgTFDqdJKAnb6TgPdL36ZRwrzIW9JE/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geometría
                19: "https://docs.google.com/presentation/d/1WTpPG6ZI9iCFLgJo8W12XEvpwb9YFPQm/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",        // Razonamiento Matemático
                20: "https://docs.google.com/presentation/d/1xIzGy80KtoBmpXOj6YOZKxodjocCoiq6/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true" // Trigonometría
            }
        },
        "tomo-ii": {
            "cap5": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "cap6": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "cap7": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "cap8": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
                }
            },
        "tomo-iii": {
            "cap9": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "cap10": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "cap11": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "cap12": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            }
        },
        "tomo-iv": {
            "cap13": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "cap14": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "cap15": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "cap16": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
                }
            },
        "tomo-v": {
            "cap17": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "cap18": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "cap19": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "cap20": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
                }
            },
        "tomo-vi": {
            "cap21": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "cap22": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "cap23": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "cap24": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
                }
            },
        "intensivo-i": {
            "cap1": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "cap2": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "cap3": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "cap4": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
                }
            },
        "intensivo-ii": {
            "cap5": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "cap6": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "cap7": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "cap8": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            }
            },
        "intensivo-iii": {
            "cap9": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "cap10": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "cap11": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "cap12": {
                1: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_economia?usp=drive_link",   // Economía
                2: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geografia?usp=drive_link", // Geografía
                3: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_peru?usp=drive_link", // Historia del Perú
                4: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_historia_universal?usp=drive_link", // Historia Universal
                5: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_psicologia?usp=drive_link", // Psicología
                7: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fortaleciendo_fe?usp=drive_link", // Fortaleciendo mi Fe
                8: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_lenguaje?usp=drive_link",   // Lenguaje
                9: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_literatura?usp=drive_link", // Literatura
                10: "", // Razonamiento Verbal
                23: "", // Razonamiento Verbal2
                12: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_tutoria?usp=drive_link",   // Tutoría
                13: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_biologia?usp=drive_link",  // Biología
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                19: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_rm?usp=drive_link",        // Razonamiento Matemático
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
       }
            },
    }
};

// ============================================================
// FIN DE LA SECCIÓN DE CONFIGURACIÓN
// ============================================================

// Lista de cursos (20 asignaturas) con área y descripción
// Lista de cursos (23 asignaturas) con área y descripción
const courses = [
    // Ciencias Sociales
    { id: 1, name: "Economía", description: "Sistemas económicos, oferta y demanda, mercado y finanzas.", icon: "fas fa-chart-line", color: "#2d6a4f", area: "sociales", availableGrades: ["5tosm"] },
    { id: 2, name: "Geografía", description: "Relieve, clima, recursos naturales y cartografía.", icon: "fas fa-globe-americas", color: "#40916c", area: "sociales", availableGrades: ["5tosm"] },
    { id: 3, name: "Historia del Perú", description: "Culturas preincas, imperio inca, conquista y república.", icon: "fas fa-landmark", color: "#dda15e", area: "sociales", availableGrades: ["5tosm"] },
    { id: 4, name: "Historia Universal", description: "Edades históricas, guerras mundiales y civilizaciones antiguas.", icon: "fas fa-monument", color: "#bc6c25", area: "sociales", availableGrades: ["5tosm"] },
    { id: 5, name: "Psicología", description: "Procesos mentales, emociones, desarrollo humano y conducta.", icon: "fas fa-brain", color: "#ff006e", area: "sociales", availableGrades: ["5tosm"] },
    // Comunicación
    { id: 8, name: "Lenguaje", description: "Gramática, comunicación, comprensión lectora y redacción.", icon: "fas fa-spell-check", color: "#3a86ff", area: "comunicacion", availableGrades: ["5tosm"] },
    { id: 9, name: "Literatura", description: "Géneros literarios, autores, obras y análisis textual.", icon: "fas fa-book-open", color: "#8338ec", area: "comunicacion", availableGrades: ["5tosm"] },
    { id: 10, name: "Razonamiento Verbal", description: "Sinónimos, antónimos, analogías verbales y comprensión.", icon: "fas fa-comment-alt", color: "#588157", area: "comunicacion", availableGrades: ["5tosm"] },
    // Ciencia y Tecnología
    { id: 13, name: "Biología", description: "Células, seres vivos, ecosistemas y anatomía humana.", icon: "fas fa-dna", color: "#2a9d8f", area: "ciencia", availableGrades: ["5tosm"] },
    { id: 14, name: "Física", description: "Movimiento, fuerzas, energía, ondas y electricidad.", icon: "fas fa-atom", color: "#9d4edd", area: "ciencia", availableGrades: ["5tosm"] },
    { id: 15, name: "Química", description: "Elementos, compuestos, reacciones y tabla periódica.", icon: "fas fa-flask", color: "#fb5607", area: "ciencia", availableGrades: ["5tosm"] },
    // Matemática
    { id: 16, name: "Álgebra", description: "Expresiones algebraicas, ecuaciones, funciones y polinomios.", icon: "fas fa-square-root-alt", color: "#e63946", area: "matematica", availableGrades: ["5tosm"] },
    { id: 17, name: "Aritmética", description: "Números, operaciones básicas, fracciones, decimales y más.", icon: "fas fa-calculator", color: "#0a4d8c", area: "matematica", availableGrades: ["5tosm"] },
    { id: 18, name: "Geometría", description: "Figuras geométricas, medición, propiedades y transformaciones.", icon: "fas fa-draw-polygon", color: "#3a86ff", area: "matematica", availableGrades: ["5tosm"] },
    { id: 19, name: "Razonamiento Matemático", description: "Problemas lógicos, secuencias, analogías y patrones.", icon: "fas fa-puzzle-piece", color: "#3d405b", area: "matematica", availableGrades: ["5tosm"] },
    { id: 20, name: "Trigonometría", description: "Triángulos, funciones trigonométricas, identidades y aplicaciones.", icon: "fas fa-shapes", color: "#1d3557", area: "matematica", availableGrades: ["5tosm"] }
];

// Colores por área (para el borde)
const areaColors = {
    sociales: "#e9c46a",
    comunicacion: "#f4a261",
    ciencia: "#2a9d8f",
    matematica: "#e76f51"
};

// Nombres de áreas para mostrar en badge
const areaNames = {
    sociales: "Ciencias Sociales",
    comunicacion: "Comunicación",
    ciencia: "Ciencia y Tecnología",
    matematica: "Matemática"
};

// Grados (1ro a 5to)
const grades = [
    { id: "5tosm", name: "5to San Marcos", icon: "fas fa-star" }
];

// Tomos I al VIII
const tomos = [
    { id: "tomo-i", name: "Tomo I", icon: "fas fa-book", type: "regular" },
    { id: "tomo-ii", name: "Tomo II", icon: "fas fa-book", type: "regular" },
    { id: "tomo-iii", name: "Tomo III", icon: "fas fa-book", type: "regular" },
    { id: "tomo-iv", name: "Tomo IV", icon: "fas fa-book", type: "regular" },
    { id: "tomo-v", name: "Tomo V", icon: "fas fa-book", type: "regular" },
    { id: "tomo-vi", name: "Tomo VI", icon: "fas fa-book", type: "regular" },
    { id: "intensivo-i", name: "Intensivo I", icon: "fas fa-bolt", type: "intensivo" },
    { id: "intensivo-ii", name: "Intensivo II", icon: "fas fa-bolt", type: "intensivo" },
    { id: "intensivo-iii", name: "Intensivo III", icon: "fas fa-bolt", type: "intensivo" }
];

// Generar las secciones (capítulos + RETRO) para cada tomo
const sectionsByTomo = {};
tomos.forEach((tomo) => {
    let sections = [];
    
    if (tomo.type === "regular") {
        // Tomos regulares: numeración continua según el índice
        const regularIndex = tomos.filter(t => t.type === "regular").indexOf(tomo);
        const startChapter = regularIndex * 4 + 1; // 1,5,9,13,17,21
        sections = [
            { id: `cap${startChapter}`, name: `Capítulo ${startChapter}` },
            { id: `cap${startChapter + 1}`, name: `Capítulo ${startChapter + 1}` },
            { id: `cap${startChapter + 2}`, name: `Capítulo ${startChapter + 2}` },
            { id: `cap${startChapter + 3}`, name: `Capítulo ${startChapter + 3}` }
        ];
    } else {
        // Intensivos: numeración independiente
        const intensivoIndex = tomos.filter(t => t.type === "intensivo").indexOf(tomo);
        const startChapter = intensivoIndex * 4 + 1; // 1,5,9
        sections = [
            { id: `cap${startChapter}`, name: `Capítulo ${startChapter}` },
            { id: `cap${startChapter + 1}`, name: `Capítulo ${startChapter + 1}` },
            { id: `cap${startChapter + 2}`, name: `Capítulo ${startChapter + 2}` },
            { id: `cap${startChapter + 3}`, name: `Capítulo ${startChapter + 3}` }
        ];
    }
    
    sectionsByTomo[tomo.id] = sections;
});

// Estado actual
let currentGrade = null;
let currentTomo = null;
let currentSection = null;

// Elementos DOM
const gradeButtonsContainer = document.getElementById('grade-buttons');
const tomoSelectorDiv = document.getElementById('tomo-selector');
const tomoButtonsContainer = document.getElementById('tomo-buttons');
const sectionSelectorDiv = document.getElementById('section-selector');
const sectionButtonsContainer = document.getElementById('section-buttons');
const coursesContainer = document.getElementById('courses-container');
const currentSelectorSpan = document.getElementById('current-selector');
const coursesCountSpan = document.getElementById('courses-count');

// Función para generar botones de grados
function generateGradeButtons() {
    gradeButtonsContainer.innerHTML = '';
    grades.forEach(grade => {
        const btn = document.createElement('button');
        btn.className = `selector-btn grade-btn ${currentGrade === grade.id ? 'active' : ''}`;
        btn.dataset.id = grade.id;
        btn.innerHTML = `<i class="${grade.icon}"></i><span>${grade.name}</span>`;
        btn.addEventListener('click', () => {
            currentGrade = grade.id;
            currentTomo = null;
            currentSection = null;
            generateGradeButtons();
            tomoSelectorDiv.style.display = 'block';
            sectionSelectorDiv.style.display = 'none';
            generateTomoButtons();
            updateCurrentSelector();
            renderCourses();
        });
        gradeButtonsContainer.appendChild(btn);
    });
}

// Función para generar botones de Tomos según el grado actual
function generateTomoButtons() {
    tomoButtonsContainer.innerHTML = '';
    if (!currentGrade) return;
    tomos.forEach(tomo => {
        const btn = document.createElement('button');
        btn.className = `selector-btn tomo-btn ${currentTomo === tomo.id ? 'active' : ''}`;
        btn.dataset.id = tomo.id;
        btn.innerHTML = `<i class="${tomo.icon}"></i><span>${tomo.name}</span>`;
        btn.addEventListener('click', () => {
            currentTomo = tomo.id;
            currentSection = sectionsByTomo[currentTomo][0].id;
            generateTomoButtons();
            generateSectionButtons();
            updateCurrentSelector();
            renderCourses();
            sectionSelectorDiv.style.display = 'block';
        });
        tomoButtonsContainer.appendChild(btn);
    });
}

// Función para generar botones de secciones según el tomo actual
function generateSectionButtons() {
    sectionButtonsContainer.innerHTML = '';
    if (!currentGrade || !currentTomo) return;
    const sections = sectionsByTomo[currentTomo];
    sections.forEach(section => {
        const btn = document.createElement('button');
        btn.className = `selector-btn section-btn ${currentSection === section.id ? 'active' : ''}`;
        btn.dataset.id = section.id;
        btn.innerHTML = `<i class="fas fa-chapter"></i><span>${section.name}</span>`;
        btn.addEventListener('click', () => {
            currentSection = section.id;
            generateSectionButtons();
            updateCurrentSelector();
            renderCourses();
        });
        sectionButtonsContainer.appendChild(btn);
    });
}

// Actualizar el texto del selector actual
function updateCurrentSelector() {
    if (!currentGrade) {
        currentSelectorSpan.innerHTML = `<i class="fas fa-graduation-cap"></i><span>Selecciona un grado para comenzar</span>`;
        return;
    }
    let text = `${grades.find(g => g.id === currentGrade).name}`;
    if (currentTomo) {
        text += ` - ${tomos.find(t => t.id === currentTomo).name}`;
        if (currentSection) {
            const sectionName = sectionsByTomo[currentTomo].find(s => s.id === currentSection).name;
            text += ` - ${sectionName}`;
        }
    }
    currentSelectorSpan.innerHTML = `<i class="fas fa-graduation-cap"></i><span>${text}</span>`;
}

// Renderizar tarjetas de cursos con borde por área
function renderCourses() {
    coursesContainer.innerHTML = '';
    if (!currentGrade || !currentTomo || !currentSection) {
        coursesContainer.innerHTML = '<p style="text-align:center; grid-column:1/-1;">Selecciona un grado, tomo y sección para ver los materiales.</p>';
        coursesCountSpan.textContent = '0';
        return;
    }

    const links = driveLinks[currentGrade]?.[currentTomo]?.[currentSection];
    if (!links) {
        coursesContainer.innerHTML = '<p style="text-align:center; grid-column:1/-1;">No hay enlaces disponibles para esta selección.</p>';
        coursesCountSpan.textContent = '0';
        return;
    }

    // Filtrar cursos que tienen enlace y están permitidos para el grado actual
    const availableCourses = courses.filter(course => {
        const hasLink = links[course.id] !== undefined;
        if (!hasLink) return false;
        if (course.availableGrades) {
            return course.availableGrades.includes(currentGrade);
        }
        return true;
    });

    coursesCountSpan.textContent = availableCourses.length;

    if (availableCourses.length === 0) {
        coursesContainer.innerHTML = '<p style="text-align:center; grid-column:1/-1;">No hay materiales disponibles para esta selección.</p>';
        return;
    }

    availableCourses.forEach(course => {
        const link = links[course.id];
        const areaColor = areaColors[course.area];
        const areaName = areaNames[course.area];
        const card = document.createElement('div');
        card.className = 'course-card';
        card.style.borderLeftColor = areaColor;
        card.innerHTML = `
            <div class="grade-tomo-section-tag">${currentGrade} / ${currentTomo} / ${currentSection}</div>
            <div class="area-badge" style="background-color: ${areaColor};">${areaName}</div>
            <div class="course-logo">
                <i class="${course.icon}" style="color: ${course.color}"></i>
            </div>
            <div class="course-content">
                <h3>${course.name}</h3>
                <p>${course.description}</p>
                <a href="${link}" target="_blank" class="drive-link">
                    <i class="fab fa-google-drive"></i> Acceder al Material
                </a>
            </div>
        `;
        coursesContainer.appendChild(card);
    });
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    generateGradeButtons();
    tomoSelectorDiv.style.display = 'none';
    sectionSelectorDiv.style.display = 'none';
    renderCourses();
});