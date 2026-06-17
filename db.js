export const db = {
    cursos: [
      {
        id: 1, //OK
        nome: "Administração",
        cotas: {
          2016: {
            negro: { vagas: 3, candidatos: 10, candidatosPorvaga: 3.33 },
            universal: { vagas: 15, candidatos: 219, candidatosPorvaga: 14.60 },
            publico: { vagas: 12, candidatos: 189, candidatosPorvaga: 15.75 }
          },
          2017: {
            negro: { vagas: 3, candidatos: 8, candidatosPorvaga: 2.67 },
            universal: { vagas: 15, candidatos: 173, candidatosPorvaga: 11.53 },
            publico: { vagas: 12, candidatos: 170, candidatosPorvaga: 14.17 }
          },
          2018: {
            negro: { vagas: 3, candidatos: 4, candidatosPorvaga: 1.33 },
            universal: { vagas: 15, candidatos: 188, candidatosPorvaga: 12.53 },
            publico: { vagas: 12, candidatos: 131, candidatosPorvaga: 10.92 }
          },
          2019: {
            negro: { vagas: 3, candidatos: 5, candidatosPorvaga: 1.67 },
            universal: { vagas: 15, candidatos: 176, candidatosPorvaga: 11.73 },
            publico: { vagas: 12, candidatos: 155, candidatosPorvaga: 12.92 }
          },
          2020: {
            negro: { vagas: 6, candidatos: 7, candidatosPorvaga: 1.17 },
            universal: { vagas: 30, candidatos: 139, candidatosPorvaga: 4.63 },
            publico: { vagas: 24, candidatos: 121, candidatosPorvaga: 5.04 }
          },
          2021: {
            negro_publico: { vagas: 3, candidatos: 8, candidatosPorvaga: 2.67 },
            universal: { vagas: 15, candidatos: 194, candidatosPorvaga: 12.93 },
            publico: { vagas: 12, candidatos: 125, candidatosPorvaga: 10.42 }
          },
          2022: {
            negro: { vagas: 3, candidatos: 6, candidatosPorvaga: 2.00 },
            negro_publico: { vagas: 6, candidatos: 8, candidatosPorvaga: 1.33 },
            publico: { vagas: 24, candidatos: 152, candidatosPorvaga: 6.33 },
            PCD: { vagas: 3, candidatos: 2, candidatosPorvaga: 0.67 },
            universal: { vagas: 24, candidatos: 130, candidatosPorvaga: 5.42 }
          },
          2023: {
            negro: { vagas: 3, candidatos: 6, candidatosPorvaga: 2.00 },
            negro_publico: { vagas: 6, candidatos: 7, candidatosPorvaga: 1.17 },
            publico: { vagas: 24, candidatos: 130, candidatosPorvaga: 5.42 },
            PCD: { vagas: 3, candidatos: 3, candidatosPorvaga: 1.00 },
            universal: { vagas: 24, candidatos: 86, candidatosPorvaga: 3.59 }
          },
          2024: {
            negro: { vagas: 3, candidatos: 3, candidatosPorvaga: 1.00 },
            negro_publico: { vagas: 6, candidatos: 12, candidatosPorvaga: 2.00 },
            publico: { vagas: 8, candidatos: 96, candidatosPorvaga: 12.00 },
            PCD: { vagas: 3, candidatos: 2, candidatosPorvaga: 0.67 },
            universal: { vagas: 24, candidatos: 101, candidatosPorvaga: 4.21 }
          },
          2025: {
            negro: { vagas: 3, candidatos: 5, candidatosPorvaga: 1.67 },
            negro_publico: { vagas: 6, candidatos: 14, candidatosPorvaga: 2.33 },
            publico: { vagas: 8, candidatos: 99, candidatosPorvaga: 12.38 },
            PCD: { vagas: 3, candidatos: 3, candidatosPorvaga: 1.00 },
            universal: { vagas: 24, candidatos: 91, candidatosPorvaga: 3.80 }
          }
        }
      },
      {
        id: 2, //OK
        nome: "Administração (Comércio Exterior)",
        cotas: {
          2016: {
            negro: { vagas: 0, candidatos: 0, candidatosPorvaga: 0 },
            publico: { vagas: 7, candidatos: 46, candidatosPorvaga: 6.57 },
            universal: { vagas: 7, candidatos: 77, candidatosPorvaga: 11.00 }
          },
          2017: {
            negro: { vagas: 1, candidatos: 1, candidatosPorvaga: 1.00 },
            publico: { vagas: 7, candidatos: 26, candidatosPorvaga: 3.72 },
            universal: { vagas: 7, candidatos: 69, candidatosPorvaga: 9.86 }
          },
          2018: {
            negro: { vagas: 1, candidatos: 5, candidatosPorvaga: 5.00 },
            publico: { vagas: 6, candidatos: 26, candidatosPorvaga: 4.33 },
            universal: { vagas: 8, candidatos: 53, candidatosPorvaga: 6.63 }
          },
          2019: {
            negro: { vagas: 1, candidatos: 1, candidatosPorvaga: 1.00 },
            publico: { vagas: 6, candidatos: 40, candidatosPorvaga: 6.67 },
            universal: { vagas: 8, candidatos: 58, candidatosPorvaga: 7.25 }
          },
          2020: {
            negro: { vagas: 3, candidatos: 4, candidatosPorvaga: 1.333 },
            publico: { vagas: 12, candidatos: 25, candidatosPorvaga: 2.083 },
            universal: { vagas: 15, candidatos: 59, candidatosPorvaga: 3.933 }
          },
          2021: {
            negro_publico: { vagas: 2, candidatos: 1, candidatosPorvaga: 0.500 },
            publico: { vagas: 6, candidatos: 24, candidatosPorvaga: 4.000 },
            universal: { vagas: 7, candidatos: 64, candidatosPorvaga: 9.143 }
          },
          2022: {
            negro: { vagas: 2, candidatos: 1, candidatosPorvaga: 0.500 },
            negro_publico: { vagas: 3, candidatos: 1, candidatosPorvaga: 0.333 },
            publico: { vagas: 12, candidatos: 32, candidatosPorvaga: 2.667 },
            PCD: { vagas: 2, candidatos: 1, candidatosPorvaga: 0.500 },
            universal: { vagas: 11, candidatos: 56, candidatosPorvaga: 5.091 }
          },
          2023: {
            negro: { vagas: 2, candidatos: 1, candidatosPorvaga: 0.500 },
            negro_publico: { vagas: 3, candidatos: 2, candidatosPorvaga: 0.667 },
            publico: { vagas: 12, candidatos: 37, candidatosPorvaga: 3.083 },
            PCD: { vagas: 2, candidatos: 0, candidatosPorvaga: 0 },
            universal: { vagas: 11, candidatos: 42, candidatosPorvaga: 3.818 }
         },
         2024: {
            negro: { vagas: 2, candidatos: 2, candidatosPorvaga: 1.000 },
            negro_publico: { vagas: 4, candidatos: 1, candidatosPorvaga: 0.250 },
            publico: { vagas: 5, candidatos: 30, candidatosPorvaga: 6.000 },
            PCD: { vagas: 2, candidatos: 0, candidatosPorvaga: 0 },
            universal: { vagas: 14, candidatos: 45, candidatosPorvaga: 3.214 }
        },
        2025: {
           negro: { vagas: 2, candidatos: 0, candidatosPorvaga: 0 },
           negro_publico: { vagas: 4, candidatos: 1, candidatosPorvaga: 0.25 },
           publico: { vagas: 5, candidatos: 34, candidatosPorvaga: 6.800 },
           PCD: { vagas: 2, candidatos: 0, candidatosPorvaga: 0 },
           universal: { vagas: 14, candidatos: 41, candidatosPorvaga: 2.929 }
        }
      }
     },
     {
      id: 3, //OK
      nome: "Agronomia",
      cotas: {
        2016: {
          negro: { vagas: 2, candidatos: 11, candidatosPorvaga: 5.50 },
          publico: { vagas: 9, candidatos: 207, candidatosPorvaga: 23.00 },
          universal: { vagas: 11, candidatos: 223, candidatosPorvaga: 20.27 }
        },
        2017: {
          negro: { vagas: 2, candidatos: 3, candidatosPorvaga: 1.50 },
          publico: { vagas: 9, candidatos: 162, candidatosPorvaga: 18.00 },
          universal: { vagas: 11, candidatos: 202, candidatosPorvaga: 18.36 }
        },
        2018: {
          negro: { vagas: 3, candidatos: 4, candidatosPorvaga: 1.33 },
          publico: { vagas: 9, candidatos: 125, candidatosPorvaga: 13.89 },
          universal: { vagas: 10, candidatos: 176, candidatosPorvaga: 17.60 }
        },
        2019: {
          negro: { vagas: 2, candidatos: 8, candidatosPorvaga: 4.00 },
          publico: { vagas: 9, candidatos: 94, candidatosPorvaga: 10.44 },
          universal: { vagas: 11, candidatos: 174, candidatosPorvaga: 15.82 }
        },
        2020: {
          negro: { vagas: 4, candidatos: 4, candidatosPorvaga: 1.00 },
          publico: { vagas: 19, candidatos: 87, candidatosPorvaga: 4.58 },
          universal: { vagas: 22, candidatos: 210, candidatosPorvaga: 9.55 }
        },
        2021: {
          negro_publico: { vagas: 3, candidatos: 4, candidatosPorvaga: 1.33 },
          publico: { vagas: 9, candidatos: 97, candidatosPorvaga: 10.78 },
          universal: { vagas: 11, candidatos: 206, candidatosPorvaga: 18.73 }
        },
        2022: {
          negro: { vagas: 2, candidatos: 2, candidatosPorvaga: 1.00 },
          negro_publico: { vagas: 5, candidatos: 11, candidatosPorvaga: 2.20 },
          publico: { vagas: 18, candidatos: 135, candidatosPorvaga: 7.50 },
          PCD: { vagas: 2, candidatos: 3, candidatosPorvaga: 1.50 },
          universal: { vagas: 18, candidatos: 174, candidatosPorvaga: 9.67 }
        },
        2023: {
          negro: { vagas: 2, candidatos: 4, candidatosPorvaga: 2.00 },
          negro_publico: { vagas: 5, candidatos: 7, candidatosPorvaga: 1.40 },
          publico: { vagas: 18, candidatos: 100, candidatosPorvaga: 5.56 },
          PCD: { vagas: 2, candidatos: 3, candidatosPorvaga: 1.50 },
          universal: { vagas: 18, candidatos: 153, candidatosPorvaga: 8.50 }
        },
        2024: {
          negro: { vagas: 3, candidatos: 4, candidatosPorvaga: 1.33 },
          negro_publico: { vagas: 5, candidatos: 4, candidatosPorvaga: 0.80 },
          publico: { vagas: 7, candidatos: 109, candidatosPorvaga: 15.57 },
          PCD: { vagas: 3, candidatos: 2, candidatosPorvaga: 0.67 },
          universal: { vagas: 20, candidatos: 129, candidatosPorvaga: 6.45 }
        },
        2025: {
          negro: { vagas: 3, candidatos: 12, candidatosPorvaga: 4.00 },
          negro_publico: { vagas: 5, candidatos: 6, candidatosPorvaga: 1.20 },
          publico: { vagas: 7, candidatos: 90, candidatosPorvaga: 12.86 },
          PCD: { vagas: 3, candidatos: 3, candidatosPorvaga: 1.00 },
          universal: { vagas: 20, candidatos: 132, candidatosPorvaga: 6.60 }
        }
      }
    },
    {
      id: 4,
      nome: "Artes Visuais - licenciatura",
      cotas: {
        2016: {
          negro: { vagas: 1, candidatos: 1, candidatosPorvaga: 1.00 },
          publico: { vagas: 8, candidatos: 41, candidatosPorvaga: 5.13 },
          universal: { vagas: 9, candidatos: 49, candidatosPorvaga: 5.44 }
        },
        2017: {
          negro: { vagas: 2, candidatos: 5, candidatosPorvaga: 2.50 },
          publico: { vagas: 7, candidatos: 23, candidatosPorvaga: 3.29 },
          universal: { vagas: 9, candidatos: 43, candidatosPorvaga: 4.78 }
        },
        2018: {
          negro: { vagas: 1, candidatos: 1, candidatosPorvaga: 1.00 },
          publico: { vagas: 8, candidatos: 30, candidatosPorvaga: 3.75 },
          universal: { vagas: 9, candidatos: 41, candidatosPorvaga: 4.56 }
        },
        2019: {
          negro: { vagas: 2, candidatos: 4, candidatosPorvaga: 2.00 },
          publico: { vagas: 7, candidatos: 27, candidatosPorvaga: 3.86 },
          universal: { vagas: 9, candidatos: 36, candidatosPorvaga: 4.00 }
        },
        2020: {
          negro: { vagas: 0, candidatos: 0, candidatosPorvaga: 0 },
          publico: { vagas: 9, candidatos: 15, candidatosPorvaga: 1.67 },
          universal: { vagas: 9, candidatos: 32, candidatosPorvaga: 3.56 }
        },
        2021: {
          negro: { vagas: 1, candidatos: 0, candidatosPorvaga: 0 },
          negro_publico: { vagas: 2, candidatos: 5, candidatosPorvaga: 2.500 },
          publico: { vagas: 7, candidatos: 22, candidatosPorvaga: 3.143 },
          PCD: { vagas: 1, candidatos: 3, candidatosPorvaga: 3.000 },
          universal: { vagas: 7, candidatos: 25, candidatosPorvaga: 3.571 }
        },
        2022: {
          negro: { vagas: 1, candidatos: 0, candidatosPorvaga: 0 },
          negro_publico: { vagas: 2, candidatos: 5, candidatosPorvaga: 2.500 },
          publico: { vagas: 7, candidatos: 22, candidatosPorvaga: 3.143 },
          PCD: { vagas: 1, candidatos: 3, candidatosPorvaga: 3.000 },
          universal: { vagas: 7, candidatos: 25, candidatosPorvaga: 3.571 }
        },
        2023: {
          negro: { vagas: 1, candidatos: 1, candidatosPorvaga: 1.000 },
          negro_publico: { vagas: 2, candidatos: 8, candidatosPorvaga: 4.000 },
          publico: { vagas: 7, candidatos: 80, candidatosPorvaga: 11.429 },
          PCD: { vagas: 1, candidatos: 3, candidatosPorvaga: 3.000 },
          universal: { vagas: 7, candidatos: 59, candidatosPorvaga: 8.429 }
        },
        2024: {
          negro: { vagas: 1, candidatos: 4, candidatosPorvaga: 4.000 },
          negro_publico: { vagas: 2, candidatos: 3, candidatosPorvaga: 1.500 },
          publico: { vagas: 3, candidatos: 63, candidatosPorvaga: 21.000 },
          PCD: { vagas: 1, candidatos: 6, candidatosPorvaga: 6.000 },
          universal: { vagas: 9, candidatos: 56, candidatosPorvaga: 6.222 }
        },
        2025: {
          negro: { vagas: 1, candidatos: 3, candidatosPorvaga: 3.000 },
          negro_publico: { vagas: 2, candidatos: 4, candidatosPorvaga: 2.000 },
          publico: { vagas: 3, candidatos: 52, candidatosPorvaga: 17.333 },
          PCD: { vagas: 1, candidatos: 10, candidatosPorvaga: 10.000 },
          universal: { vagas: 9, candidatos: 32, candidatosPorvaga: 3.556 }
        }
      }
    },
    {
      id: 5,
      nome: "Ciências Biológicas - bacharelado",
      cotas: {
        2016: {
          negro: { vagas: 0, candidatos: 0, candidatosPorvaga: 0 },
          publico: { vagas: 5, candidatos: 40, candidatosPorvaga: 8.000 },
          universal: { vagas: 4, candidatos: 68, candidatosPorvaga: 17.000 }
        },
        2017: {
          negro: { vagas: 0, candidatos: 0, candidatosPorvaga: 0 },
          publico: { vagas: 5, candidatos: 26, candidatosPorvaga: 5.200 },
          universal: { vagas: 4, candidatos: 49, candidatosPorvaga: 12.250 }
        },
        2018: {
          negro: { vagas: 1, candidatos: 3, candidatosPorvaga: 3.000 },
          publico: { vagas: 4, candidatos: 32, candidatosPorvaga: 8.000 },
          universal: { vagas: 4, candidatos: 46, candidatosPorvaga: 11.500 }
        },
        2019: {
          negro: { vagas: 1, candidatos: 3, candidatosPorvaga: 3.000 },
          publico: { vagas: 4, candidatos: 31, candidatosPorvaga: 7.750 },
          universal: { vagas: 4, candidatos: 53, candidatosPorvaga: 13.250 }
        },
        2020: {
          negro: { vagas: 0, candidatos: 0, candidatosPorvaga: 0 },
          publico: { vagas: 10, candidatos: 30, candidatosPorvaga: 3.000 },
          universal: { vagas: 9, candidatos: 49, candidatosPorvaga: 5.444 }
        },
        2021: {
          negro_publico: { vagas: 1, candidatos: 2, candidatosPorvaga: 2.000 },
          publico: { vagas: 4, candidatos: 17, candidatosPorvaga: 4.250 },
          universal: { vagas: 5, candidatos: 56, candidatosPorvaga: 11.200 }
        },
        2022: {
          negro: { vagas: 1, candidatos: 1, candidatosPorvaga: 1.000 },
          negro_publico: { vagas: 2, candidatos: 2, candidatosPorvaga: 1.000 },
          publico: { vagas: 8, candidatos: 29, candidatosPorvaga: 3.625 },
          PCD: { vagas: 1, candidatos: 0, candidatosPorvaga: 0 },
          universal: { vagas: 7, candidatos: 53, candidatosPorvaga: 7.571 }
        },
        2023: {
          negro: { vagas: 1, candidatos: 0, candidatosPorvaga: 0 },
          negro_publico: { vagas: 2, candidatos: 2, candidatosPorvaga: 1.000 },
          publico: { vagas: 8, candidatos: 34, candidatosPorvaga: 4.250 },
          PCD: { vagas: 1, candidatos: 0, candidatosPorvaga: 0 },
          universal: { vagas: 7, candidatos: 45, candidatosPorvaga: 6.429 }
        },
        2024: {
          negro: { vagas: 2, candidatos: 0, candidatosPorvaga: 0 },
          negro_publico: { vagas: 3, candidatos: 2, candidatosPorvaga: 0.667 },
          publico: { vagas: 4, candidatos: 31, candidatosPorvaga: 7.750 },
          PCD: { vagas: 2, candidatos: 3, candidatosPorvaga: 1.500 },
          universal: { vagas: 11, candidatos: 37, candidatosPorvaga: 3.364 }
        },
        2025: {
          negro: { vagas: 2, candidatos: 3, candidatosPorvaga: 1.50 },
          negro_publico: { vagas: 3, candidatos: 3, candidatosPorvaga: 1.00 },
          publico: { vagas: 4, candidatos: 37, candidatosPorvaga: 9.25 },
          PCD: { vagas: 2, candidatos: 3, candidatosPorvaga: 1.50 },
          universal: { vagas: 11, candidatos: 47, candidatosPorvaga: 4.23 }
        }
      }
    },

    ]
  };
