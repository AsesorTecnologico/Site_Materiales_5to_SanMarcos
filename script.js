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
                1: "https://docs.google.com/presentation/d/1-42AP0CgUFne96QNy23BN7pyXpx_boVL/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Economía
                2: "https://docs.google.com/presentation/d/1Ugvxwr5PLiQkYiNIm2cSbPOIAsA4irsY/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geografía
                3: "https://docs.google.com/presentation/d/1jEIbNjbaE0fBU2E-qFfkyOi8yv6XNN59/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia del Perú
                4: "https://docs.google.com/presentation/d/1UsWkSUOVnHUrqGzAETJE9MfZtnHLA7YS/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia Universal
                5: "https://docs.google.com/presentation/d/1k_TTZtlSggKxl_59Nt-E8t7AQPu-Q12B/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Psicología
                8: "https://docs.google.com/presentation/d/1iuBcQDbEloQE68C6Z4Tg9GyQNnAxvyvV/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Lenguaje
                9: "https://docs.google.com/presentation/d/1VwuFzHg-P9SOuRmJ-V9RblvH1Cdqnzfm/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Literatura
                10: "https://docs.google.com/presentation/d/1XqOnbz9lfbEfdMJdqnBA1aSV9yhNmFAE/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Razonamiento Verbal
                13: "https://docs.google.com/presentation/d/1zAEeQ8RhL778Ny_x6wHl8oslOItKOpiF/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",  // Biología
                14: "https://docs.google.com/presentation/d/1rT4UQigutKCnbAsp3u357ijTunaki3vI/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",    // Física
                15: "https://docs.google.com/presentation/d/1oWrfUaJ7TXMu1jHqovEyPRdtyAT7N3RN/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Química
                16: "https://docs.google.com/presentation/d/1IRPzk0xV8CL3C3C4jdqmmRLXhK1xlcDF/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Álgebra
                17: "https://docs.google.com/presentation/d/1gAG76V0jZ3X_yhz8f-9aTHzzDW4XPOwJ/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Aritmética
                18: "https://docs.google.com/presentation/d/1wPerky8r6Jk_fOzXs6guVckZxcJvFi0T/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geometría
                19: "https://docs.google.com/presentation/d/1fRDuBqRQk1qOUMzNxeszswTVVUtfg8I7/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",        // Razonamiento Matemático
                20: "https://docs.google.com/presentation/d/1bkiwtyzJSmyNCGosUcQLtz8tRBYjatFt/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true" // Trigonometría
            },
            "cap6": {
                1: "https://docs.google.com/presentation/d/1Fl9xntjjLFFXKwxEdIj-XRtdIGGXvSV-/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Economía
                2: "https://docs.google.com/presentation/d/1HCoeTt9dsIvPtZYLe5hFYZk7fDfNuZTM/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geografía
                3: "https://docs.google.com/presentation/d/1nBEg_h3llw3wNcObyAA6z6IbgcA3ajGi/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia del Perú
                4: "https://docs.google.com/presentation/d/1g-P_4s9OOmiam-qXKaJYxkGP2j0t6VyS/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia Universal
                5: "https://docs.google.com/presentation/d/1lw34mYAr3Ob-qeo1T-i-vMicFNSPM55i/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Psicología
                8: "https://docs.google.com/presentation/d/1DIqQk6jDTdHtUIAspW0yDfI3lmePpQNx/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Lenguaje
                9: "https://docs.google.com/presentation/d/1S-e0z2HF-4pf6-xay6z5MMflKGsB8PNn/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Literatura
                10: "https://docs.google.com/presentation/d/1SKeY56iz6i-2w24Wqh4TA6euDuUxv-AX/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Razonamiento Verbal
                13: "https://docs.google.com/presentation/d/1gy_A3ZFr506Gra2Sq2Krpcm5e9hW2gTx/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",  // Biología
                14: "https://docs.google.com/presentation/d/1Bm8auJ92H1zmw64CR6SlYXCmW8N9j_Tn/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",    // Física
                15: "https://docs.google.com/presentation/d/17jGzfB0EQ1OvqET24xrRm99G1ybv-BoV/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Química
                16: "https://docs.google.com/presentation/d/1W8f-fZ8_YT3b9HgyUqFi8El9DD9dIqTN/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Álgebra
                17: "https://docs.google.com/presentation/d/1fqJQVOm9hxZ4iWKESUffCH42Fzc4efqx/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Aritmética
                18: "https://docs.google.com/presentation/d/1rSy1-QE8JwaTLdmtsW2bVNT_oa8EGl-l/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geometría
                19: "https://docs.google.com/presentation/d/1zVIA5A4JFqDhGuaDGTf9RvhLY8wOtSqO/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",        // Razonamiento Matemático
                20: "https://docs.google.com/presentation/d/148ai_OMS0DUlysL9Tl2sm2HzQ_slA_Ie/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true" // Trigonometría
            },
            "cap7": {
                1: "https://docs.google.com/presentation/d/1G15l1YtK8RdKbe-2xDNTZug5qIc7Q-e4/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Economía
                2: "https://docs.google.com/presentation/d/1rM3qrE0yHew9U3gIkVDJOFozn1evhdqb/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geografía
                3: "https://docs.google.com/presentation/d/1FscVT-6z9sCuDzWwtwhXaYtm_gImmmeD/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia del Perú
                4: "https://docs.google.com/presentation/d/1F5Brz-7v1woKgKnX8ZXy8GOqZy-QcTSk/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia Universal
                5: "https://docs.google.com/presentation/d/1B2zzinQI_yy6tI8p9YfYEGiWCM2SeS6b/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Psicología
                8: "https://docs.google.com/presentation/d/15KYaBLe819z3yV-fFY0PNAVQJYdHbK5-/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Lenguaje
                9: "https://docs.google.com/presentation/d/1MdMtQsvOpLYBNMiO4ORCq5RJ8D6h56BJ/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Literatura
                10: "https://docs.google.com/presentation/d/14v9jmC8TB8771_CoIwB4_WlKb3eSlX7L/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Razonamiento Verbal
                13: "https://docs.google.com/presentation/d/1UvBURCrElkbxN4gusdyq1W5Mf_R6iKqD/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Biología
                14: "https://docs.google.com/presentation/d/1qgxMej_VQc5ohCuOb-kCkMwkyq2SNjxl/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Física
                15: "https://docs.google.com/presentation/d/1HS13dZSGfQoYn4UHQ-ke2TkFi2pPC2c3/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Química
                16: "https://docs.google.com/presentation/d/1-VYMhuRA56pYvIDX3HmrqtGe_rrwjPr-/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Álgebra
                17: "https://docs.google.com/presentation/d/1y_83p30ClGFT4-o0YS3MzrIhDbEwzDnK/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Aritmética
                18: "https://docs.google.com/presentation/d/1Ndnx8x1LuQLnMNhn7Lw8GBbc0EMqtPh8/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geometría
                19: "https://docs.google.com/presentation/d/1ZyK2DggFo_G9PuQrZgE1kgVjvj5H_5PS/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Razonamiento Matemático
                20: "https://docs.google.com/presentation/d/1o6VoYw7duijtN1T1lhts3pZp4_M-mCjr/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true" // Trigonometría
            },
            "cap8": {
                1: "https://docs.google.com/presentation/d/1QSSr8WqYD6YdcUctm0TY5aoEjqOvI6R-/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Economía
                2: "https://docs.google.com/presentation/d/1blHwZMLMI_lEjHY-E1X6g4jFpQsuSWmz/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geografía
                3: "https://docs.google.com/presentation/d/1Voisll9e75KVCfF7SqlLAgw3Hk6c_HbP/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia del Perú
                4: "https://docs.google.com/presentation/d/1UT8xp_8u821uHRZkwLG0zujbWG5jDH1C/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia Universal
                5: "https://docs.google.com/presentation/d/1EImtMGZREyo5IhWGvr4OCzyZl910hPUn/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Psicología
                8: "https://docs.google.com/presentation/d/11s2fDqMMMLZmNhBz9JbJK0hHbLXkvPFD/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Lenguaje
                9: "https://docs.google.com/presentation/d/1FpdF0YLju95-tgOmTAVu48mypVHZcBku/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Literatura
                10: "https://docs.google.com/presentation/d/1tNvQHYuX3vazwbVrg0czEHweUXd8sk9L/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Razonamiento Verbal
                13: "https://docs.google.com/presentation/d/1FHnIHk_f44PXF9xZaq192GeLJm1uFoA-/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",  // Biología
                14: "https://docs.google.com/presentation/d/1nwwgC879RJsjxvxREkgUnqeGXaujrNv2/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",  // Física
                15: "https://docs.google.com/presentation/d/1c2UI_Ykc5WnJtJWCRyL1WMBOILibviy5/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Química
                16: "https://docs.google.com/presentation/d/1fIXTu3VRf4hdQw70ABbUYn9smBnvTZeK/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Álgebra
                17: "https://docs.google.com/presentation/d/1sSsBPKQZJuqYHe72Qs_GWeZeKSNkYQFb/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Aritmética
                18: "https://docs.google.com/presentation/d/1kPRtzmRfDArb2XaV2w3kuzeEkSGa0bmx/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geometría
                19: "https://docs.google.com/presentation/d/1A2KjNWQ9dKxluZPz-ME-iMKe9YGEZ4_r/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Razonamiento Matemático
                20: "https://docs.google.com/presentation/d/1zHU8YZE1WQftsYt5ZVNOIngHmdAqwqB9/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true" // Trigonometría
                }
            },
        "tomo-iii": {
            "cap9": {
                1: "https://docs.google.com/presentation/d/1yOVDJCRz35jBOLwnL5enssJgy2ijYg9t/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Economía
                2: "https://docs.google.com/presentation/d/1nFwQLeuYKadQCZB1GRl2cRAeXI97O9FZ/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geografía
                3: "https://docs.google.com/presentation/d/1-Xa1M-O0__TNWj3ySlKOaAOiAOfOjkFa/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia del Perú
                4: "https://docs.google.com/presentation/d/1l9sO7YJ7HrfzPdRmd6peGp3ou49DLudg/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia Universal
                5: "https://docs.google.com/presentation/d/1LSeu5hRvexlwJxgCCbMF4QzDLnieflq6/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Psicología
                8: "https://docs.google.com/presentation/d/161lQM8HGgfoB2h-VZTum4NvmLCK4e_A7/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Lenguaje
                9: "https://docs.google.com/presentation/d/1U6WxbUvMCTfkIaibEtam3dDUVcC8ryGE/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Literatura
                10: "https://docs.google.com/presentation/d/17Xk7ZaES0EymmyFJ7aj_vLA8BgVMdvi7/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Razonamiento Verbal
                13: "https://docs.google.com/presentation/d/1ievxJ18x-OcfgoDHu990RoCrprsWQFdJ/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Biología
                14: "https://docs.google.com/presentation/d/12L7CLsHJwH74XthlcfNk_vCrH-oOMVXd/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Física
                15: "https://docs.google.com/presentation/d/1hp6sbU1RN044Y15nyayVw6gwFqKluapl/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Química
                16: "https://docs.google.com/presentation/d/1E1nVssvsJpsBYVuTi8xs9Uvx_thBeJDK/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Álgebra
                17: "https://docs.google.com/presentation/d/1b80mHnuGwuG2-PP3M6svT-K3fCh-XSBs/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Aritmética
                18: "https://docs.google.com/presentation/d/15YCSK5yyrqmYdVB1FsuWT9h-d8YroWsL/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geometría
                19: "https://docs.google.com/presentation/d/13fsSTaaT_tlbUQ8tAhJLIk0bEzsITSg4/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Razonamiento Matemático
                20: "https://docs.google.com/presentation/d/1_saznwc1vZIaRxzDvoXdQDp2vqDoj4n6/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true" // Trigonometría
            },
            "cap10": {
                1: "https://docs.google.com/presentation/d/1Fx13DO1-hWk17NuxzT7Mu5_I1l-fL2SZ/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Economía
                2: "https://docs.google.com/presentation/d/13oZ9so9WYD7vNjTYIzBjcwUnrF50LL30/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geografía
                3: "https://docs.google.com/presentation/d/1bg0Gh5Yphyum0BTyGAU4VtyxOpTOR6VP/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia del Perú
                4: "https://docs.google.com/presentation/d/1BHMw3LUJ5j9dEXlYu00onhu9GxwD1LeZ/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia Universal
                5: "https://docs.google.com/presentation/d/1BjooDgVfR1aRRNgsI8n0lKgr3T52Sun5/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Psicología
                8: "https://docs.google.com/presentation/d/1bVBh-YRvenGPVLkz5NizYD-o9lGvWd7h/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",  // Lenguaje
                9: "https://docs.google.com/presentation/d/1c3D3Fc_pHnejhi54b05RsJxqIT1YiabS/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Literatura
                10: "https://docs.google.com/presentation/d/1luYr6Flyxtl6jsMinhPvA4zg-gsOIbQJ/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Razonamiento Verbal
                13: "https://docs.google.com/presentation/d/1-Px05PHmf5ARL0FiNXyuFbMnNn5X28Zq/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",  // Biología
                14: "https://docs.google.com/presentation/d/1WU7PBgLJQMF2ITfPpS085iYhXjmh_ONR/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",  // Física
                15: "https://docs.google.com/presentation/d/1zQtETjUZGjRurcapo24HOaORY7L7ZPUF/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Química
                16: "https://docs.google.com/presentation/d/1rdnq5BbEMeQnm9dy-wLojW28BVV97GYt/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Álgebra
                17: "https://docs.google.com/presentation/d/1SRhf5wqNqm1klBEJjco8Ar6B5lOO2ymE/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Aritmética
                18: "https://docs.google.com/presentation/d/1Yk5NzBqScJzUsKjcpNsZC4I3iteqqVzp/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geometría
                19: "https://docs.google.com/presentation/d/1nTXr70ASUwIBlI1JIcJ6D-s3EgFjvV2w/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Razonamiento Matemático
                20: "https://docs.google.com/presentation/d/1j7EiNpyG4KsvuEE20x_cZjlyz4vLOhDa/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true" // Trigonometría
            },
            "cap11": {
                1: "https://docs.google.com/presentation/d/1p9qp9chRDk6hnYtPVmGZg1-ReZvSbEOo/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Economía
                2: "https://docs.google.com/presentation/d/1wjmZ7NZ9yM7RsxmbYunanr0mKNLyHu8t/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geografía
                3: "https://docs.google.com/presentation/d/1ugqhW0OYr6PvDvo154Vvva-iOF6L5xlq/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia del Perú
                4: "https://docs.google.com/presentation/d/1zI02Z_BFN1O5Hhd5Hd2k2QUTx1H9WpX1/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia Universal
                5: "https://docs.google.com/presentation/d/1jjudCuBK0tD4JaSNw68RYgGUrXc6DM5e/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Psicología
                8: "https://docs.google.com/presentation/d/13qljVRQII8TCA2bVk8jz1sKAMKv7wfCM/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Lenguaje
                9: "https://docs.google.com/presentation/d/1cS61VCMNLIR9GIYYymZZACmV8sT30sAK/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Literatura
                10: "https://docs.google.com/presentation/d/10T9wSnivSR8Z2ji_ogmWz8qVllfcWyQZ/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Razonamiento Verbal
                13: "https://docs.google.com/presentation/d/1-2toToAxn4hSgz6rmHa061wsMPbl55ks/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",  // Biología
                14: "https://docs.google.com/presentation/d/1AukZwCXB5JC2h2alM-IPtGfrKQ4QAg0b/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Física
                15: "https://docs.google.com/presentation/d/1FD49qnfPxKtRyS4B_5VYF42hW9HOON7a/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",  // Química
                16: "https://docs.google.com/presentation/d/1e14A00xcr9leJDgf2_F2vXoBG8j0gGNh/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",  // Álgebra
                17: "https://docs.google.com/presentation/d/1RHhdKaJa16LiSBJm69U_bBtE2GbCspaw/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Aritmética
                18: "https://docs.google.com/presentation/d/1AiFZkGMQV3JSxGfMY8EWdOl_80U0e282/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geometría
                19: "https://docs.google.com/presentation/d/1FfCU3Q5cvN_ygxOiyske2g2M_nZ1kXoF/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",  // Razonamiento Matemático
                20: "https://docs.google.com/presentation/d/1DjUJyMW96SBYqrWYsiy_pgBrr2bATuKW/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true" // Trigonometría
            },
            "cap12": {
                1: "https://docs.google.com/presentation/d/1Fl_6ddam5CHT2v_dbLs4DsMkr-zSPkFZ/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Economía
                2: "https://docs.google.com/presentation/d/1UW_MZFybE9V5CptzV98axPq1ajheqQyS/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geografía
                3: "https://docs.google.com/presentation/d/1S7gUWp6JeiO0zJ02ZBeGftvCbTsl_nF6/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia del Perú
                4: "https://docs.google.com/presentation/d/1RQuV0hfu4dI4zUY7SouwCXv7Fk5SjN27/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia Universal
                5: "https://docs.google.com/presentation/d/1XlQeiFY7ejJ3wgYbRgSTnfxSMNg_Stlf/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Psicología
                8: "https://docs.google.com/presentation/d/1xR8cHnUV6BDk7hoSeGohZX1j0lxpkr04/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Lenguaje
                9: "https://docs.google.com/presentation/d/1WZneEP5WM_9W8p2Dattc0DVVq3haYFrl/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Literatura
                10: "https://docs.google.com/presentation/d/1l3E2o8qalwkCyLt0bJvReVt0l0jwR6N2/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Razonamiento Verbal
                13: "https://docs.google.com/presentation/d/1Ge3lCtUsVqUoTRHz4_Fi2TL4bscWspsK/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Biología
                14: "https://docs.google.com/presentation/d/1oHIJS6-oBYrZVgczZAnbAK9TAXTRuvNE/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Física
                15: "https://docs.google.com/presentation/d/1NulXNVl_-l-dX6vOHWNMABAbpQ0HQRPi/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Química
                16: "https://docs.google.com/presentation/d/1skYk7CGK9EodTq1ypqbHaMdcc_JYhi5-/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Álgebra
                17: "https://docs.google.com/presentation/d/1zeHehgQglN4oABpyxTHuG0qRH08hDeaL/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Aritmética
                18: "https://docs.google.com/presentation/d/1QZHgGp7lhCX7otTgKBR0eTFYs2z02X2t/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geometría
                19: "https://docs.google.com/presentation/d/1cjhr_mCZK3O3RJaNozpsDkMAQNPmi6q1/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Razonamiento Matemático
                20: "https://docs.google.com/presentation/d/1Fgwff48QFkcnTnD0Ic9wzMIhtpVEyRKL/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true" // Trigonometría
            }
        },
        "tomo-iv": {
            "cap13": {
                1: "https://docs.google.com/presentation/d/1aePymr3HEIscGLjwJnQiRMy3M53p0ADe/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Economía
                2: "https://docs.google.com/presentation/d/1lFDWMvjhQxcWEjFP4KcqHAuixSmonrDi/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geografía
                3: "https://docs.google.com/presentation/d/1PZqw8fBn9Ae5fbNvjVTIlynPkZT9H2ye/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia del Perú
                4: "https://docs.google.com/presentation/d/1VEXiPHFS_ZXWGOwqvWY4B3ialHuvAZbp/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia Universal
                5: "https://docs.google.com/presentation/d/1hid1ktX4i6vQxZdgdsvHbD_IadKXzSsY/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Psicología
                8: "https://docs.google.com/presentation/d/1Fv9bcjlGB09FQXKXH0wo2OwsY_zLYc4a/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Lenguaje
                9: "https://docs.google.com/presentation/d/1nCDdx3rcJXZZyjzqFvzh4iRhtDnrh5O6/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Literatura
                10: "https://docs.google.com/presentation/d/1txeyApF-O5S31AQUEOze80necOBL4OTl/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Razonamiento Verbal
                13: "https://docs.google.com/presentation/d/1iVpFW4VN8zCZFcrfy-oItkNa1QA_2e-i/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",  // Biología
                14: "https://docs.google.com/presentation/d/1-wuf3uXAYRfhrX4cFrXfyyd6tvXCzngj/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",    // Física
                15: "https://docs.google.com/presentation/d/1sFWpQaLaKUK6ap6MM_3CXMN2SVEDy4C1/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Química
                16: "https://docs.google.com/presentation/d/1lPhRB43HOqWVkqMRmJ3eMr-f1cqxBr0c/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Álgebra
                17: "https://docs.google.com/presentation/d/1ElNBD3VIsNbS7ti7eZ08TgQo9oAiIAUo/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Aritmética
                18: "https://docs.google.com/presentation/d/1dmJnhp7pv8Uz38kN8OOHDpQabphxm0eZ/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geometría
                19: "https://docs.google.com/presentation/d/1ZX7P9fpCgwOvSR6bJQP8bLHFUZ-G9rQ_/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",        // Razonamiento Matemático
                20: "https://docs.google.com/presentation/d/1QC_dYImUhvyss4DmpHiTkWzAdm00YaIo/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true" // Trigonometría
            },
            "cap14": {
                1: "https://docs.google.com/presentation/d/1u4TnxXsVJY_0ub2Hb1EHA2YoxhHPE3rD/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Economía
                2: "https://docs.google.com/presentation/d/1d0uOtIodIHbQg5a8RbzMGUZiaAdFAfwc/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geografía
                3: "https://docs.google.com/presentation/d/1p0e3FCQ4AiVlnaqqs0cXmnbCbXuMWj9-/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia del Perú
                4: "https://docs.google.com/presentation/d/1smzsRBgUwhuL0klhSrk1dKQjCfIPfsbJ/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia Universal
                5: "https://docs.google.com/presentation/d/1U5CJij_x4C99tmkqHQhhz_v4X5h4D5Rj/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Psicología
                8: "https://docs.google.com/presentation/d/1n7T6Crt8dOrCsxwJ6WXPQ34B7XCWrxuV/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Lenguaje
                9: "https://docs.google.com/presentation/d/1ZgafYki3ygmQ_4TgZN3-6aj2_e3kCQF1/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Literatura
                10: "https://docs.google.com/presentation/d/1N0Ok-VbI4OHQwHgBS92AsNXmiGe6x1-2/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Razonamiento Verbal
                13: "https://docs.google.com/presentation/d/1HaubpMlG_Y-KNXUFwNa9sV0Dbf8Pc7-P/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",  // Biología
                14: "https://docs.google.com/presentation/d/1JH3eKOqI8kFnuuUbwstpNz0KJubEgFLV/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",    // Física
                15: "https://docs.google.com/presentation/d/19v4BZh0dfCb1NruaFRBI-03AQ4s3MvoB/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Química
                16: "https://docs.google.com/presentation/d/1Qbo7wBZXgyIuNIzjfYuZNuWyoWTxZe-Q/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Álgebra
                17: "https://docs.google.com/presentation/d/1plP373qxxt_BOcF9rsjky3WqC1hKpElf/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Aritmética
                18: "https://docs.google.com/presentation/d/1tk5UhZRdu2XMEzzJD37xxvYoGNJaVNkl/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geometría
                19: "https://docs.google.com/presentation/d/1j4HcX8H3eZdsIH1AgsqsOKMX1orxRjCd/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",        // Razonamiento Matemático
                20: "https://docs.google.com/presentation/d/160ufnYg5Etq8N-frskw1lLZiLhQ9zlDh/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true" // Trigonometría
            },
            "cap15": {
                1: "https://docs.google.com/presentation/d/14LscxLHwVuGO-cDWIl-Bob0ihoFs_Jp6/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Economía
                2: "https://docs.google.com/presentation/d/1H5McomP5ckZCLYlAy1Is0IZX-NYAsKVP/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geografía
                3: "https://docs.google.com/presentation/d/1nGy2UtY_qPwAoTqmlhlAWXC6755QQK-I/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia del Perú
                4: "https://docs.google.com/presentation/d/1MfII3VDIOboowF0rrviF3l6XCFgOz7KJ/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia Universal
                5: "https://docs.google.com/presentation/d/1nXCku2xPIDL9gq3SFJ9XORiH9XVX_Zb3/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Psicología
                8: "https://docs.google.com/presentation/d/1GeBH1HggAqmVju0zw4jjFYshtn2aaOQn/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Lenguaje
                9: "https://docs.google.com/presentation/d/1adC36nhkLLiE3fTq_5K1AIYilO1mds6G/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Literatura
                10: "https://docs.google.com/presentation/d/1_LRpuqjC_ux1a1-Pgd_G-vBDYID1yx5_/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Razonamiento Verbal
                13: "https://docs.google.com/presentation/d/1118ROjI2_eOt1K8wCds3cYCtA2JqIjlc/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",  // Biología
                14: "https://docs.google.com/presentation/d/1u0EfCaRMaZQM3OL-fIzziKO0NM3sosMO/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",    // Física
                15: "https://docs.google.com/presentation/d/18YhcT7VnU4W5UIn0OOTJCbsWDoJUYuyg/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Química
                16: "https://docs.google.com/presentation/d/1EKwGZpMCLiV0aN6N1lJSIj7-YzSodOke/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Álgebra
                17: "https://docs.google.com/presentation/d/1cP4SD1rcOpisfJC9eqjc8oYFmkJz6C5N/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Aritmética
                18: "https://docs.google.com/presentation/d/1_NQ-YYiYEgwegLv3FJLlDsYnPMRqSIGr/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geometría
                19: "https://docs.google.com/presentation/d/1OgsJRXUhMPK4L0eTXYU3YyLBxSlfUIzo/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",        // Razonamiento Matemático
                20: "https://docs.google.com/presentation/d/1ZADsz_i2arlemBUKSH9ZDUmljpWgYykJ/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true" // Trigonometría
            },
            "cap16": {
                1: "https://docs.google.com/presentation/d/1pVIA6keYDCABKkFwe0QxYZ20B2vxdZwP/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Economía
                2: "https://docs.google.com/presentation/d/1ip74sJnc5cSVsxHQ8R8YbNWceFx5tk5H/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geografía
                3: "https://docs.google.com/presentation/d/1JxebcMlR_sRnbbyOFeyKpdbsm-wyWcIa/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia del Perú
                4: "https://docs.google.com/presentation/d/1vr8ep5MmGM5eAgKH-D6hRrJNdJBz0Gjc/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia Universal
                5: "https://docs.google.com/presentation/d/1FVLRwRZe3R7k7hWAKR1s_WuLLmdu1net/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Psicología
                8: "https://docs.google.com/presentation/d/16Z0DuTI5D1sxXDK2XdUp6IOqNyjw83Vg/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Lenguaje
                9: "https://docs.google.com/presentation/d/1MY-w_obTkoYBxLfrnuKcq-FnKR6kYH-T/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Literatura
                10: "https://docs.google.com/presentation/d/1DNxvFbh75r-rtcILexW3Vl5PMZU-vwPv/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Razonamiento Verbal
                13: "https://docs.google.com/presentation/d/12M6Be22ooOQZzJSO06RYh3evwBfvn1vi/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",  // Biología
                14: "https://docs.google.com/presentation/d/15Jyxp4Zjq8JPvxwBdDy1suHogUUKUJ7W/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",    // Física
                15: "https://docs.google.com/presentation/d/1oudtxGCt9UrVuGItUApL-g4eTzrgVeEL/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Química
                16: "https://docs.google.com/presentation/d/1gUtGbjjidLZ67DrjYzZ5-YhLa1O6VPu4/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Álgebra
                17: "https://docs.google.com/presentation/d/1L5AYUSYZl0_XS7qLVxm4SzhB0lHenK1W/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Aritmética
                18: "https://docs.google.com/presentation/d/1NVG1G0jwBl5-G3BbLWj4I1fjRUOHwg6h/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geometría
                19: "https://docs.google.com/presentation/d/1Ejd4tR1fTcV0sRp4zQYcW9YvOKXe_z2i/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",        // Razonamiento Matemático
                20: "https://docs.google.com/presentation/d/1l5iZePlBbLaoEcOc-rvj9puN0eh-eUNy/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true" // Trigonometría
                }
            },
        "tomo-v": {
            "cap17": {
                1: "https://docs.google.com/presentation/d/1h27YA-P0AkJyOtS2LAjiAv-XtqG445yx/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Economía
                2: "https://docs.google.com/presentation/d/1hh84oP2JKV3J4XIPC-f8ly471_9YDkue/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geografía
                3: "https://docs.google.com/presentation/d/17GFVfJkMFzejkuDXQobflFMPSTJl2snA/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia del Perú
                4: "https://docs.google.com/presentation/d/1W-xkZad0chprmHeONYwj9CkaF9ehZ_uo/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia Universal
                5: "https://docs.google.com/presentation/d/1Mn9QixTwbIn1HeJ9nc2G30Kakw2yEVlM/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Psicología
                8: "https://docs.google.com/presentation/d/1Kkz3p-jp5nlXnvOggVH04EiAJ_jbXcR6/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Lenguaje
                9: "https://docs.google.com/presentation/d/1pDh2_dHvabhro33vf75ElwLMWdCsxFlr/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Literatura
                10: "https://docs.google.com/presentation/d/1nd398Ats1tfLnX09D3VnUjsUnOP0AtrK/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Razonamiento Verbal
                13: "https://docs.google.com/presentation/d/19tthxCxkYq36Rl-zalsfNOKAMPBpFTXQ/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",  // Biología
                14: "https://docs.google.com/presentation/d/1jTgYMg25E4Gq8an_wxR5QBcKjOzwLw4x/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",    // Física
                15: "https://docs.google.com/presentation/d/1yaQ7ZRo7Gpsr4_qlpSX9_loUoWxOjvSX/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Química
                16: "https://docs.google.com/presentation/d/1f9pBSamLWDrpJM5NPxfL398id4ULSgRJ/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Álgebra
                17: "https://docs.google.com/presentation/d/1PRa6od8jiOxO6oIuh4zlqIalzvTBenAS/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Aritmética
                18: "https://docs.google.com/presentation/d/1tDlm7st3-aLIuWuVApq4AejSm1PXKtkW/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geometría
                19: "https://docs.google.com/presentation/d/1BpbjCcadxPG-6hTrL6T-R_8wAGK9R87d/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",        // Razonamiento Matemático
                20: "https://docs.google.com/presentation/d/1Q0fSfb9-CznlfzYIna8xo28qx1GKsINM/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true" // Trigonometría
            },
            "cap18": {
                1: "https://docs.google.com/presentation/d/1Wpl5dJ3_edV1tOGfQZYav4XIKoF9z97C/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Economía
                2: "https://docs.google.com/presentation/d/11EPLsT3TaPHHzmZdX_ad-NE0qh8iZ8_A/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geografía
                3: "https://docs.google.com/presentation/d/18PDC06pkWzcLV-LvUg8P0Th-xXdjcsFv/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia del Perú
                4: "https://docs.google.com/presentation/d/1k4i_9mzwfIDQFzw9e1TUnafM4z520wvE/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia Universal
                5: "https://docs.google.com/presentation/d/1w7UL2tK50v7obnpqAZYzTT6gqRDQq8fm/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Psicología
                8: "https://docs.google.com/presentation/d/1RbXEV0v6CQ4iEA05H4hBlWSyVcWxou6t/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Lenguaje
                9: "https://docs.google.com/presentation/d/1KXZu9x3VNpjkDtyST2GwhR8yxbJNjX0n/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Literatura
                10: "https://docs.google.com/presentation/d/1w5N_ClN_4XaTDoU5v25ux6cdsG5VQaIE/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Razonamiento Verbal
                13: "https://docs.google.com/presentation/d/1qfejo2ztEgImRvwgj2CENBodpuJIM5xS/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",  // Biología
                14: "https://docs.google.com/presentation/d/16Mkwkrap6dB8zizquSh-4PFbGArAbyRO/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",    // Física
                15: "https://docs.google.com/presentation/d/141x2pRmKr6Pkv5KImVmSZNVKvPXcF_jq/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Química
                16: "https://docs.google.com/presentation/d/1WGnc9tozyUW2eGRFRL9gfodZYliuTrt_/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Álgebra
                17: "https://docs.google.com/presentation/d/1wcPWkTgRnq4ylGjclX4zL8hOR1ci0KZk/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Aritmética
                18: "https://docs.google.com/presentation/d/1ute1HGlBpOI0B71d0Q4PEemLEGnhrq0Z/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geometría
                19: "https://docs.google.com/presentation/d/1GH6fwjIQghWx1uIWnvGbCipFhyU1JqNo/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",        // Razonamiento Matemático
                20: "https://docs.google.com/presentation/d/1g_j6D6lNEs8AyL9RhiWmwDEmUvsvkOCp/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true" // Trigonometría
            },
            "cap19": {
                1: "https://docs.google.com/presentation/d/1YKbirej3A7P1uJU2w9IFzSHRCmR_GEiA/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Economía
                2: "https://docs.google.com/presentation/d/1ok4Xe7aS4ndorwLG8QZW4odItyem1Dwz/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geografía
                3: "https://docs.google.com/presentation/d/1qEr5xBUuzdSlP8XzovUFyil1A1WOz2kr/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia del Perú
                4: "https://docs.google.com/presentation/d/1HhICSL-JaItTOxFs4prV-5W867KaN_t2/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia Universal
                5: "https://docs.google.com/presentation/d/13Ojq0ly7ffsYO3NxqisAja775ro4Fc2o/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Psicología
                8: "https://docs.google.com/presentation/d/13Kz31d2cCDUp-rlIeXy8xYvCB7rm7BD5/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Lenguaje
                9: "https://docs.google.com/presentation/d/1awjGQ755KvzeZGR1JqRL5azlI4aqhMlr/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Literatura
                10: "https://docs.google.com/presentation/d/1N2rT7BXLVGwvFx-vLXQZ7664GDyvfy_j/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Razonamiento Verbal
                13: "https://docs.google.com/presentation/d/1NMFFseDrf_2ONV5pwExP-XSzrEgSkUwa/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",  // Biología
                14: "https://docs.google.com/presentation/d/1RQyCy223_R1-f1G77Mgc5owAfz8Qm9X_/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",    // Física
                15: "https://docs.google.com/presentation/d/1w2fgLqcqOSJHZWraGUua1Jnl3pEFoDgE/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Química
                16: "https://docs.google.com/presentation/d/1EoJQNpIhodWpiKcABA5vnVfVLunNxRdw/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Álgebra
                17: "https://docs.google.com/presentation/d/10Vy786rxMmqkGmTj1yZWWQt4iwWX4wRL/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Aritmética
                18: "https://docs.google.com/presentation/d/1lyYDfET37IrFCstYLXKSjy24CxGfoOBk/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geometría
                19: "https://docs.google.com/presentation/d/1ROjsgwXie_2qABU-dGB7l7LmnLmJ_3Pz/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",        // Razonamiento Matemático
                20: "https://docs.google.com/presentation/d/1uJHi7mD4ySlvyPggLDUPuVFTxn08b3rG/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true" // Trigonometría
            },
            "cap20": {
                1: "https://docs.google.com/presentation/d/18vSw80KhzZBEah-e8G4re32-zIj52EOo/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Economía
                2: "https://docs.google.com/presentation/d/1bWp_zwy9s6NwZN8wwfKxwutfazViK-EJ/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geografía
                3: "https://docs.google.com/presentation/d/1ril7JUqKe06p8i6sUWHzbcMOsPJZh6Wp/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia del Perú
                4: "https://docs.google.com/presentation/d/1whYmof36a9RBXAnMx_V3y3BMwsoIJ4al/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Historia Universal
                5: "https://docs.google.com/presentation/d/1LEkasCHTz4cS4mghP_Ej1ZVh2J-INbr9/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Psicología
                8: "https://docs.google.com/presentation/d/1gRBVz6n7G0WZaKhYcnWF_1v0CEDKfO6_/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Lenguaje
                9: "https://docs.google.com/presentation/d/1furaHclp7Aj7TLsjmZh8t9sap2LDvHMg/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Literatura
                10: "https://docs.google.com/presentation/d/1fv4S3FilLMbhmk7sXuN9nsI4f1pP71BA/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Razonamiento Verbal
                13: "https://docs.google.com/presentation/d/11vge9ij_2Y1Tj_Ng4zFNFJeEN0cxyWJ4/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",  // Biología
                14: "https://docs.google.com/presentation/d/1pD8jYAtZ4R4iFRvhBNRWwQEyOW28PFTB/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",    // Física
                15: "https://docs.google.com/presentation/d/1GX4l7krFI9DSGBZfPLJqWo8Af5lTNv-d/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Química
                16: "https://docs.google.com/presentation/d/1WHCnr9ZfneV0pIlStuRuh-H3TakKVPvs/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Álgebra
                17: "https://docs.google.com/presentation/d/1COCo1drBL81eF6UikvyLViMl4QDjx1KK/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Aritmética
                18: "https://docs.google.com/presentation/d/14LBPH8jdux5vW7iUyNf5JHzzJu-bhXq7/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geometría
                19: "https://docs.google.com/presentation/d/1uVTOfgpbonYfuw_fuGeUS4hd4JBCHssj/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",        // Razonamiento Matemático
                20: "https://docs.google.com/presentation/d/1WY4eGSekLU3W3w37OvImUjl53kZsOcps/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true" // Trigonometría
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
    { id: "tomo-iv", name: "Tomo IV", icon: "fas fa-book", type: "regular" }
    { id: "tomo-v", name: "Tomo V", icon: "fas fa-book", type: "regular" },
    //{ id: "tomo-vi", name: "Tomo VI", icon: "fas fa-book", type: "regular" },
    //{ id: "intensivo-i", name: "Intensivo I", icon: "fas fa-bolt", type: "intensivo" },
    //{ id: "intensivo-ii", name: "Intensivo II", icon: "fas fa-bolt", type: "intensivo" },
    //{ id: "intensivo-iii", name: "Intensivo III", icon: "fas fa-bolt", type: "intensivo" }
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
