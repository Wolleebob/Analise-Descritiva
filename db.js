export const db = {
    cursos: [
      {
        id: 1,
        nome: "Administração",
        cotas: {
          2016: {
            negro: { vagas: 3, candidatos: 10, candidatosPorvaga: 3.33, notaMinima: 1902, tipoCota: "Negro" },
            publico: { vagas: 12, candidatos: 189, candidatosPorvaga: 15.75, notaMinima: 2559, tipoCota: "Publico" },
            universal: { vagas: 15, candidatos: 219, candidatosPorvaga: 14.60, notaMinima: 2976, tipoCota: "Universal" }
          },
          2017: {
            negro: { vagas: 3, candidatos: 8, candidatosPorvaga: 2.67, notaMinima: 2301, tipoCota: "Negro" },
            publico: { vagas: 12, candidatos: 170, candidatosPorvaga: 14.17, notaMinima: 2895, tipoCota: "Publico" },
            universal: { vagas: 15, candidatos: 173, candidatosPorvaga: 11.53, notaMinima: 3143, tipoCota: "Universal" }
          },
          2018: {
            negro: { vagas: 3, candidatos: 4, candidatosPorvaga: 1.33, notaMinima: 2287, tipoCota: "Negro" },
            publico: { vagas: 12, candidatos: 131, candidatosPorvaga: 10.92, notaMinima: 2906, tipoCota: "Publico" },
            universal: { vagas: 15, candidatos: 188, candidatosPorvaga: 12.53, notaMinima: 3351, tipoCota: "Universal" }
          },
          2019: {
            negro: { vagas: 3, candidatos: 5, candidatosPorvaga: 1.67, notaMinima: 2658, tipoCota: "Negro" },
            publico: { vagas: 12, candidatos: 155, candidatosPorvaga: 12.92, notaMinima: 2735, tipoCota: "Publico" },
            universal: { vagas: 15, candidatos: 176, candidatosPorvaga: 11.73, notaMinima: 3139, tipoCota: "Universal" }
          },
          2020: {
            negro: { vagas: 6, candidatos: 7, candidatosPorvaga: 1.17, notaMinima: 2129, tipoCota: "Negro" },
            publico: { vagas: 24, candidatos: 121, candidatosPorvaga: 5.04, notaMinima: 2699, tipoCota: "Publico" },
            universal: { vagas: 30, candidatos: 139, candidatosPorvaga: 4.63, notaMinima: 2985, tipoCota: "Universal" }
          },
          2021: {
            negro_publico: { vagas: 3, candidatos: 8, candidatosPorvaga: 2.67, notaMinima: 2449, tipoCota: "Negro" },
            publico: { vagas: 12, candidatos: 125, candidatosPorvaga: 10.42, notaMinima: 3078, tipoCota: "Publico" },
            universal: { vagas: 15, candidatos: 194, candidatosPorvaga: 12.93, notaMinima: 3658, tipoCota: "Universal" }
          },
          2022: {
            negro: { vagas: 3, candidatos: 6, candidatosPorvaga: 2.00, notaMinima: 1381, tipoCota: "Negro" },
            negro_publico: { vagas: 6, candidatos: 8, candidatosPorvaga: 1.33, notaMinima: 1376, tipoCota: "Negro publica" },
            publico: { vagas: 24, candidatos: 152, candidatosPorvaga: 6.33, notaMinima: 2716, tipoCota: "Publico" },
            PCD: { vagas: 3, candidatos: 2, candidatosPorvaga: 0.67, notaMinima: 1929, tipoCota: "PCD" },
            universal: { vagas: 24, candidatos: 130, candidatosPorvaga: 5.42, notaMinima: 3302, tipoCota: "Universal" }
          },
          2023: {
            negro: { vagas: 3, candidatos: 6, candidatosPorvaga: 2.00, notaMinima: 2334, tipoCota: "Negro" },
            negro_publico: { vagas: 6, candidatos: 7, candidatosPorvaga: 1.17, notaMinima: 2117, tipoCota: "Negro publica" },
            publico: { vagas: 24, candidatos: 130, candidatosPorvaga: 5.42, notaMinima: 2734, tipoCota: "Publico" },
            PCD: { vagas: 3, candidatos: 3, candidatosPorvaga: 1.00, notaMinima: 2643, tipoCota: "PCD" },
            universal: { vagas: 24, candidatos: 86, candidatosPorvaga: 3.59, notaMinima: 3313, tipoCota: "Universal" }
          },
          2024: {
            negro: { vagas: 3, candidatos: 3, candidatosPorvaga: 1.00, notaMinima: 2262, tipoCota: "Negro" },
            negro_publico: { vagas: 6, candidatos: 12, candidatosPorvaga: 2.00, notaMinima: 2065, tipoCota: "Negro publica" },
            publico: { vagas: 8, candidatos: 96, candidatosPorvaga: 12.00, notaMinima: 3277, tipoCota: "Publico" },
            PCD: { vagas: 3, candidatos: 2, candidatosPorvaga: 0.67, notaMinima: 1833, tipoCota: "PCD" },
            universal: { vagas: 24, candidatos: 101, candidatosPorvaga: 4.21, notaMinima: 3522, tipoCota: "Universal" }
          },
          2025: {
            negro: { vagas: 3, candidatos: 5, candidatosPorvaga: 1.67, notaMinima: 2171, tipoCota: "Negro" },
            negro_publico: { vagas: 6, candidatos: 14, candidatosPorvaga: 2.33, notaMinima: 2575, tipoCota: "Negro publica" },
            publico: { vagas: 8, candidatos: 99, candidatosPorvaga: 12.38, notaMinima: 3171, tipoCota: "Publico" },
            PCD: { vagas: 3, candidatos: 3, candidatosPorvaga: 1.00, notaMinima: 897, tipoCota: "PCD" },
            universal: { vagas: 24, candidatos: 91, candidatosPorvaga: 3.80, notaMinima: 3419, tipoCota: "Universal" }
          }
        }
      },
      {
        id: 2,
        nome: "Administração (Comércio Exterior)",
        cotas: {
          2016: {
            negro: { vagas: 0, candidatos: 0, candidatosPorvaga: 0, notaMinima: 0, tipoCota: "Negro" },
            publico: { vagas: 7, candidatos: 46, candidatosPorvaga: 6.57, notaMinima: 2148, tipoCota: "Publico" },
            universal: { vagas: 7, candidatos: 77, candidatosPorvaga: 11.00, notaMinima: 3198, tipoCota: "Universal" }
          },
          2017: {
            negro: { vagas: 1, candidatos: 1, candidatosPorvaga: 1.00, notaMinima: 0, tipoCota: "Negro" },
            publico: { vagas: 7, candidatos: 26, candidatosPorvaga: 3.72, notaMinima: 2158, tipoCota: "Publico" },
            universal: { vagas: 7, candidatos: 69, candidatosPorvaga: 9.86, notaMinima: 3252, tipoCota: "Universal" }
          },
          2018: {
            negro: { vagas: 1, candidatos: 5, candidatosPorvaga: 5.00, notaMinima: 2912, tipoCota: "Negro" },
            publico: { vagas: 6, candidatos: 26, candidatosPorvaga: 4.33, notaMinima: 2621, tipoCota: "Publico" },
            universal: { vagas: 8, candidatos: 53, candidatosPorvaga: 6.63, notaMinima: 3663, tipoCota: "Universal" }
          },
          2019: {
            negro: { vagas: 1, candidatos: 1, candidatosPorvaga: 1.00, notaMinima: 0, tipoCota: "Negro" },
            publico: { vagas: 6, candidatos: 40, candidatosPorvaga: 6.67, notaMinima: 2823, tipoCota: "Publico" },
            universal: { vagas: 8, candidatos: 58, candidatosPorvaga: 7.25, notaMinima: 3413, tipoCota: "Universal" }
          },
          2020: {
            negro: { vagas: 3, candidatos: 4, candidatosPorvaga: 1.33, notaMinima: 2586, tipoCota: "Negro" },
            publico: { vagas: 12, candidatos: 25, candidatosPorvaga: 2.08, notaMinima: 2030, tipoCota: "Publico" },
            universal: { vagas: 15, candidatos: 59, candidatosPorvaga: 3.93, notaMinima: 3041, tipoCota: "Universal" }
          },
          2021: {
            negro_publico: { vagas: 2, candidatos: 1, candidatosPorvaga: 0.50, notaMinima: 2856, tipoCota: "Negro" },
            publico: { vagas: 6, candidatos: 24, candidatosPorvaga: 4.00, notaMinima: 3206, tipoCota: "Publico" },
            universal: { vagas: 7, candidatos: 64, candidatosPorvaga: 9.14, notaMinima: 4072, tipoCota: "Universal" }
          },
          2022: {
            negro: { vagas: 2, candidatos: 1, candidatosPorvaga: 0.50, notaMinima: 2556, tipoCota: "Negro" },
            negro_publico: { vagas: 3, candidatos: 1, candidatosPorvaga: 0.33, notaMinima: 1326, tipoCota: "Negro publica" },
            publico: { vagas: 12, candidatos: 32, candidatosPorvaga: 2.67, notaMinima: 2448, tipoCota: "Publico" },
            PCD: { vagas: 2, candidatos: 1, candidatosPorvaga: 0.50, notaMinima: 1684, tipoCota: "PCD" },
            universal: { vagas: 11, candidatos: 56, candidatosPorvaga: 5.09, notaMinima: 3480, tipoCota: "Universal" }
          },
          2023: {
            negro: { vagas: 2, candidatos: 1, candidatosPorvaga: 0.50, notaMinima: 3479, tipoCota: "Negro" },
            negro_publico: { vagas: 3, candidatos: 2, candidatosPorvaga: 0.67, notaMinima: 2499, tipoCota: "Negro publica" },
            publico: { vagas: 12, candidatos: 37, candidatosPorvaga: 3.08, notaMinima: 2572, tipoCota: "Publico" },
            PCD: { vagas: 2, candidatos: 0, candidatosPorvaga: 0, notaMinima: 0, tipoCota: "PCD" },
            universal: { vagas: 11, candidatos: 42, candidatosPorvaga: 3.82, notaMinima: 3585, tipoCota: "Universal" }
          },
          2024: {
            negro: { vagas: 2, candidatos: 2, candidatosPorvaga: 1.00, notaMinima: 1912, tipoCota: "Negro" },
            negro_publico: { vagas: 4, candidatos: 1, candidatosPorvaga: 0.25, notaMinima: 2859, tipoCota: "Negro publica" },
            publico: { vagas: 5, candidatos: 30, candidatosPorvaga: 6.00, notaMinima: 2625, tipoCota: "Publico" },
            PCD: { vagas: 2, candidatos: 0, candidatosPorvaga: 0, notaMinima: 0, tipoCota: "PCD" },
            universal: { vagas: 14, candidatos: 45, candidatosPorvaga: 3.21, notaMinima: 3386, tipoCota: "Universal" }
          },
          2025: {
            negro: { vagas: 2, candidatos: 0, candidatosPorvaga: 0, notaMinima: 0, tipoCota: "Negro" },
            negro_publico: { vagas: 4, candidatos: 1, candidatosPorvaga: 0.25, notaMinima: 2510, tipoCota: "Negro publica" },
            publico: { vagas: 5, candidatos: 34, candidatosPorvaga: 6.80, notaMinima: 2505, tipoCota: "Publico" },
            PCD: { vagas: 2, candidatos: 0, candidatosPorvaga: 0, notaMinima: 0, tipoCota: "PCD" },
            universal: { vagas: 14, candidatos: 41, candidatosPorvaga: 2.93, notaMinima: 3565, tipoCota: "Universal" }
          }
        }
      },
      {
        id: 3,
        nome: "Agronomia",
        cotas: {
          2016: {
            negro: { vagas: 2, candidatos: 11, candidatosPorvaga: 5.50, notaMinima: 2338, tipoCota: "Negro" },
            publico: { vagas: 9, candidatos: 207, candidatosPorvaga: 23.00, notaMinima: 2763, tipoCota: "Publico" },
            universal: { vagas: 11, candidatos: 223, candidatosPorvaga: 20.27, notaMinima: 3567, tipoCota: "Universal" }
          },
          2017: {
            negro: { vagas: 2, candidatos: 3, candidatosPorvaga: 1.50, notaMinima: 2276, tipoCota: "Negro" },
            publico: { vagas: 9, candidatos: 162, candidatosPorvaga: 18.00, notaMinima: 2993, tipoCota: "Publico" },
            universal: { vagas: 11, candidatos: 202, candidatosPorvaga: 18.36, notaMinima: 3377, tipoCota: "Universal" }
          },
          2018: {
            negro: { vagas: 3, candidatos: 4, candidatosPorvaga: 1.33, notaMinima: 0, tipoCota: "Negro" },
            publico: { vagas: 9, candidatos: 125, candidatosPorvaga: 13.89, notaMinima: 2776, tipoCota: "Publico" },
            universal: { vagas: 10, candidatos: 176, candidatosPorvaga: 17.60, notaMinima: 3728, tipoCota: "Universal" }
          },
          2019: {
            negro: { vagas: 2, candidatos: 8, candidatosPorvaga: 4.00, notaMinima: 2242, tipoCota: "Negro" },
            publico: { vagas: 9, candidatos: 94, candidatosPorvaga: 10.44, notaMinima: 2674, tipoCota: "Publico" },
            universal: { vagas: 11, candidatos: 174, candidatosPorvaga: 15.82, notaMinima: 3647, tipoCota: "Universal" }
          },
          2020: {
            negro: { vagas: 4, candidatos: 4, candidatosPorvaga: 1.00, notaMinima: 0, tipoCota: "Negro" },
            publico: { vagas: 19, candidatos: 87, candidatosPorvaga: 4.58, notaMinima: 2360, tipoCota: "Publico" },
            universal: { vagas: 22, candidatos: 210, candidatosPorvaga: 9.55, notaMinima: 3247, tipoCota: "Universal" }
          },
          2021: {
            negro_publico: { vagas: 3, candidatos: 4, candidatosPorvaga: 1.33, notaMinima: 2286, tipoCota: "Negro" },
            publico: { vagas: 9, candidatos: 97, candidatosPorvaga: 10.78, notaMinima: 2945, tipoCota: "Publico" },
            universal: { vagas: 11, candidatos: 206, candidatosPorvaga: 18.73, notaMinima: 3689, tipoCota: "Universal" }
          },
          2022: {
            negro: { vagas: 2, candidatos: 2, candidatosPorvaga: 1.00, notaMinima: 2306, tipoCota: "Negro" },
            negro_publico: { vagas: 5, candidatos: 11, candidatosPorvaga: 2.20, notaMinima: 1883, tipoCota: "Negro publica" },
            publico: { vagas: 18, candidatos: 135, candidatosPorvaga: 7.50, notaMinima: 2634, tipoCota: "Publico" },
            PCD: { vagas: 2, candidatos: 3, candidatosPorvaga: 1.50, notaMinima: 2558, tipoCota: "PCD" },
            universal: { vagas: 18, candidatos: 174, candidatosPorvaga: 9.67, notaMinima: 3440, tipoCota: "Universal" }
          },
          2023: {
            negro: { vagas: 2, candidatos: 4, candidatosPorvaga: 2.00, notaMinima: 1894, tipoCota: "Negro" },
            negro_publico: { vagas: 5, candidatos: 7, candidatosPorvaga: 1.40, notaMinima: 2207, tipoCota: "Negro publica" },
            publico: { vagas: 18, candidatos: 100, candidatosPorvaga: 5.56, notaMinima: 2788, tipoCota: "Publico" },
            PCD: { vagas: 2, candidatos: 3, candidatosPorvaga: 1.50, notaMinima: 1987, tipoCota: "PCD" },
            universal: { vagas: 18, candidatos: 153, candidatosPorvaga: 8.50, notaMinima: 3877, tipoCota: "Universal" }
          },
          2024: {
            negro: { vagas: 3, candidatos: 4, candidatosPorvaga: 1.33, notaMinima: 2352, tipoCota: "Negro" },
            negro_publico: { vagas: 5, candidatos: 4, candidatosPorvaga: 0.80, notaMinima: 2135, tipoCota: "Negro publica" },
            publico: { vagas: 7, candidatos: 109, candidatosPorvaga: 15.57, notaMinima: 3085, tipoCota: "Publico" },
            PCD: { vagas: 3, candidatos: 2, candidatosPorvaga: 0.67, notaMinima: 1798, tipoCota: "PCD" },
            universal: { vagas: 20, candidatos: 129, candidatosPorvaga: 6.45, notaMinima: 3719, tipoCota: "Universal" }
          },
          2025: {
            negro: { vagas: 3, candidatos: 12, candidatosPorvaga: 4.00, notaMinima: 3032, tipoCota: "Negro" },
            negro_publico: { vagas: 5, candidatos: 6, candidatosPorvaga: 1.20, notaMinima: 2183, tipoCota: "Negro publica" },
            publico: { vagas: 7, candidatos: 90, candidatosPorvaga: 12.86, notaMinima: 3195, tipoCota: "Publico" },
            PCD: { vagas: 3, candidatos: 3, candidatosPorvaga: 1.00, notaMinima: 2249, tipoCota: "PCD" },
            universal: { vagas: 20, candidatos: 132, candidatosPorvaga: 6.60, notaMinima: 3796, tipoCota: "Universal" }
          }
        }
      },
      {
        id: 4,
        nome: "Engenharia Civil",
        cotas: {
          2016: {
            negro: { vagas: 2, candidatos: 11, candidatosPorvaga: 5.50, notaMinima: 2830, tipoCota: "Negro" },
            publico: { vagas: 7, candidatos: 152, candidatosPorvaga: 21.71, notaMinima: 3080, tipoCota: "Publico" },
            universal: { vagas: 9, candidatos: 280, candidatosPorvaga: 31.11, notaMinima: 4191, tipoCota: "Universal" }
          },
          2017: {
            negro: { vagas: 2, candidatos: 11, candidatosPorvaga: 5.50, notaMinima: 2858, tipoCota: "Negro" },
            publico: { vagas: 7, candidatos: 111, candidatosPorvaga: 15.86, notaMinima: 3306, tipoCota: "Publico" },
            universal: { vagas: 9, candidatos: 181, candidatosPorvaga: 20.11, notaMinima: 4305, tipoCota: "Universal" }
          },
          2018: {
            negro: { vagas: 2, candidatos: 3, candidatosPorvaga: 1.50, notaMinima: 0, tipoCota: "Negro" },
            publico: { vagas: 7, candidatos: 91, candidatosPorvaga: 13.00, notaMinima: 2903, tipoCota: "Publico" },
            universal: { vagas: 9, candidatos: 153, candidatosPorvaga: 17.00, notaMinima: 4282, tipoCota: "Universal" }
          },
          2019: {
            negro: { vagas: 2, candidatos: 3, candidatosPorvaga: 1.50, notaMinima: 0, tipoCota: "Negro" },
            publico: { vagas: 7, candidatos: 68, candidatosPorvaga: 9.71, notaMinima: 2983, tipoCota: "Publico" },
            universal: { vagas: 9, candidatos: 137, candidatosPorvaga: 15.22, notaMinima: 4113, tipoCota: "Universal" }
          },
          2020: {
            negro: { vagas: 2, candidatos: 2, candidatosPorvaga: 1.00, notaMinima: 2825, tipoCota: "Negro" },
            publico: { vagas: 17, candidatos: 87, candidatosPorvaga: 5.12, notaMinima: 3001, tipoCota: "Publico" },
            universal: { vagas: 18, candidatos: 178, candidatosPorvaga: 9.89, notaMinima: 3717, tipoCota: "Universal" }
          },
          2021: {
            negro: { vagas: 2, candidatos: 2, candidatosPorvaga: 1.00, notaMinima: 0, tipoCota: "Negro" },
            publico: { vagas: 8, candidatos: 77, candidatosPorvaga: 9.62, notaMinima: 3055, tipoCota: "Publico" },
            universal: { vagas: 9, candidatos: 151, candidatosPorvaga: 16.78, notaMinima: 4341, tipoCota: "Universal" }
          },
          2022: {
            negro: { vagas: 2, candidatos: 0, candidatosPorvaga: 0, notaMinima: 0, tipoCota: "Negro" },
            negro_publico: { vagas: 4, candidatos: 3, candidatosPorvaga: 0.75, notaMinima: 1492, tipoCota: "Negro publica" },
            publico: { vagas: 15, candidatos: 45, candidatosPorvaga: 3.00, notaMinima: 2346, tipoCota: "Publico" },
            PCD: { vagas: 2, candidatos: 0, candidatosPorvaga: 0, notaMinima: 0, tipoCota: "PCD" },
            universal: { vagas: 14, candidatos: 83, candidatosPorvaga: 5.93, notaMinima: 3888, tipoCota: "Universal" }
          },
          2023: {
            negro: { vagas: 2, candidatos: 1, candidatosPorvaga: 0.50, notaMinima: 2194, tipoCota: "Negro" },
            negro_publico: { vagas: 4, candidatos: 3, candidatosPorvaga: 0.75, notaMinima: 1866, tipoCota: "Negro publica" },
            publico: { vagas: 15, candidatos: 34, candidatosPorvaga: 2.27, notaMinima: 2545, tipoCota: "Publico" },
            PCD: { vagas: 2, candidatos: 1, candidatosPorvaga: 0.50, notaMinima: 0, tipoCota: "PCD" },
            universal: { vagas: 14, candidatos: 60, candidatosPorvaga: 4.29, notaMinima: 3761, tipoCota: "Universal" }
          },
          2024: {
            negro: { vagas: 2, candidatos: 4, candidatosPorvaga: 2.00, notaMinima: 2396, tipoCota: "Negro" },
            negro_publico: { vagas: 4, candidatos: 4, candidatosPorvaga: 1.00, notaMinima: 1735, tipoCota: "Negro publica" },
            publico: { vagas: 5, candidatos: 33, candidatosPorvaga: 6.60, notaMinima: 3329, tipoCota: "Publico" },
            PCD: { vagas: 2, candidatos: 0, candidatosPorvaga: 0, notaMinima: 0, tipoCota: "PCD" },
            universal: { vagas: 17, candidatos: 78, candidatosPorvaga: 4.59, notaMinima: 4035, tipoCota: "Universal" }
          },
          2025: {
            negro: { vagas: 2, candidatos: 4, candidatosPorvaga: 2.00, notaMinima: 2485, tipoCota: "Negro" },
            negro_publico: { vagas: 4, candidatos: 3, candidatosPorvaga: 0.75, notaMinima: 2169, tipoCota: "Negro publica" },
            publico: { vagas: 5, candidatos: 26, candidatosPorvaga: 5.20, notaMinima: 3206, tipoCota: "Publico" },
            PCD: { vagas: 2, candidatos: 2, candidatosPorvaga: 1.00, notaMinima: 2694, tipoCota: "PCD" },
            universal: { vagas: 17, candidatos: 48, candidatosPorvaga: 2.82, notaMinima: 4000, tipoCota: "Universal" }
          }
        }
      },
      {
        id: 5,
        nome: "Ciências Biológicas - bacharelado",
        cotas: {
          2016: {
            negro: { vagas: 0, candidatos: 0, candidatosPorvaga: 0, notaMinima: 0, tipoCota: "Negro" },
            publico: { vagas: 5, candidatos: 40, candidatosPorvaga: 8.00, notaMinima: 2393, tipoCota: "Publico" },
            universal: { vagas: 4, candidatos: 68, candidatosPorvaga: 17.00, notaMinima: 3663, tipoCota: "Universal" }
          },
          2017: {
            negro: { vagas: 0, candidatos: 0, candidatosPorvaga: 0, notaMinima: 0, tipoCota: "Negro" },
            publico: { vagas: 5, candidatos: 26, candidatosPorvaga: 5.20, notaMinima: 2374, tipoCota: "Publico" },
            universal: { vagas: 4, candidatos: 49, candidatosPorvaga: 12.25, notaMinima: 3177, tipoCota: "Universal" }
          },
          2018: {
            negro: { vagas: 1, candidatos: 3, candidatosPorvaga: 3.00, notaMinima: 2608, tipoCota: "Negro" },
            publico: { vagas: 4, candidatos: 32, candidatosPorvaga: 8.00, notaMinima: 2886, tipoCota: "Publico" },
            universal: { vagas: 4, candidatos: 46, candidatosPorvaga: 11.50, notaMinima: 3409, tipoCota: "Universal" }
          },
          2019: {
            negro: { vagas: 1, candidatos: 3, candidatosPorvaga: 3.00, notaMinima: 0, tipoCota: "Negro" },
            publico: { vagas: 4, candidatos: 31, candidatosPorvaga: 7.75, notaMinima: 2737, tipoCota: "Publico" },
            universal: { vagas: 4, candidatos: 53, candidatosPorvaga: 13.25, notaMinima: 3511, tipoCota: "Universal" }
          },
          2020: {
            negro: { vagas: 0, candidatos: 0, candidatosPorvaga: 0, notaMinima: 0, tipoCota: "Negro" },
            publico: { vagas: 10, candidatos: 30, candidatosPorvaga: 3.00, notaMinima: 2146, tipoCota: "Publico" },
            universal: { vagas: 9, candidatos: 49, candidatosPorvaga: 5.44, notaMinima: 3073, tipoCota: "Universal" }
          },
          2021: {
            negro_publico: { vagas: 1, candidatos: 2, candidatosPorvaga: 2.00, notaMinima: 2473, tipoCota: "Negro" },
            publico: { vagas: 4, candidatos: 17, candidatosPorvaga: 4.25, notaMinima: 2744, tipoCota: "Publico" },
            universal: { vagas: 5, candidatos: 56, candidatosPorvaga: 11.20, notaMinima: 3650, tipoCota: "Universal" }
          },
          2022: {
            negro: { vagas: 1, candidatos: 1, candidatosPorvaga: 1.00, notaMinima: 2595, tipoCota: "Negro" },
            negro_publico: { vagas: 2, candidatos: 2, candidatosPorvaga: 1.00, notaMinima: 2133, tipoCota: "Negro publica" },
            publico: { vagas: 8, candidatos: 29, candidatosPorvaga: 3.62, notaMinima: 2410, tipoCota: "Publico" },
            PCD: { vagas: 1, candidatos: 0, candidatosPorvaga: 0, notaMinima: 0, tipoCota: "PCD" },
            universal: { vagas: 7, candidatos: 53, candidatosPorvaga: 7.57, notaMinima: 3525, tipoCota: "Universal" }
          },
          2023: {
            negro: { vagas: 1, candidatos: 0, candidatosPorvaga: 0, notaMinima: 0, tipoCota: "Negro" },
            negro_publico: { vagas: 2, candidatos: 2, candidatosPorvaga: 1.00, notaMinima: 2298, tipoCota: "Negro publica" },
            publico: { vagas: 8, candidatos: 34, candidatosPorvaga: 4.25, notaMinima: 2765, tipoCota: "Publico" },
            PCD: { vagas: 1, candidatos: 0, candidatosPorvaga: 0, notaMinima: 0, tipoCota: "PCD" },
            universal: { vagas: 7, candidatos: 45, candidatosPorvaga: 6.43, notaMinima: 3842, tipoCota: "Universal" }
          },
          2024: {
            negro: { vagas: 2, candidatos: 0, candidatosPorvaga: 0, notaMinima: 0, tipoCota: "Negro" },
            negro_publico: { vagas: 3, candidatos: 2, candidatosPorvaga: 0.67, notaMinima: 2305, tipoCota: "Negro publica" },
            publico: { vagas: 4, candidatos: 31, candidatosPorvaga: 7.75, notaMinima: 2788, tipoCota: "Publico" },
            PCD: { vagas: 2, candidatos: 3, candidatosPorvaga: 1.50, notaMinima: 1635, tipoCota: "PCD" },
            universal: { vagas: 11, candidatos: 37, candidatosPorvaga: 3.36, notaMinima: 3547, tipoCota: "Universal" }
          },
          2025: {
            negro: { vagas: 2, candidatos: 3, candidatosPorvaga: 1.50, notaMinima: 2435, tipoCota: "Negro" },
            negro_publico: { vagas: 3, candidatos: 3, candidatosPorvaga: 1.00, notaMinima: 2993, tipoCota: "Negro publica" },
            publico: { vagas: 4, candidatos: 37, candidatosPorvaga: 9.25, notaMinima: 3136, tipoCota: "Publico" },
            PCD: { vagas: 2, candidatos: 3, candidatosPorvaga: 1.50, notaMinima: 2798, tipoCota: "PCD" },
            universal: { vagas: 11, candidatos: 47, candidatosPorvaga: 4.27, notaMinima: 3773, tipoCota: "Universal" }
          }
        }
      }
    ]
  };