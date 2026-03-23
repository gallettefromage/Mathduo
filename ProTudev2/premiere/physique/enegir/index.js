// Chapitre: Enegir
// premiere > physique
// Généré le 15/03/2026
// 8 notion(s)

export default {
  id: "Energie",
  title: "Enegir",
  description: "Force etc",
  icon: "⚡",
  xpMax: 130,
  notions: [
    {
      id: "travail-force",
      label: "Travail d’une force",
      icon: "📌",
      lesson: {
        formula: "W = F • AB = F * AB * cos(θ)",
        text: "Le travail d'une force est l'énergie fournie par cette force lorsque son point d'application se déplace.",
        example: "Si une force de 10 N déplace un objet de 5 m dans la direction de la force, le travail est W = 10 * 5 = 50 J."
      },
      fullBlocks: [
        {
          type: "definition",
          text: "Le travail d'une force est une grandeur algébrique qui dépend de la force appliquée, du déplacement et de l'angle entre les deux."
        },
        {
          type: "formula",
          text: "W = F * AB * cos(θ)"
        },
        {
          type: "example",
          text: "Un objet est tiré par une force de 20 N sur une distance de 3 m avec un angle de 30°. Le travail est W = 20 * 3 * cos(30°) ≈ 51.96 J."
        }
      ],
      levels: [
        [
          {
            type: "mcq",
            question: "Quelle est l'unité du travail d'une force ?",
            answers: [
              "Joule (J)",
              "Newton (N)",
              "Watt (W)",
              "Pascal (Pa)"
            ],
            correct: 0,
            explanation: "Le travail d'une force s'exprime en Joule (J), car c'est une énergie."
          },
          {
            type: "mcq",
            question: "Quelle formule permet de calculer le travail d'une force ?",
            answers: [
              "W = F * AB * cos(θ)",
              "W = F * AB",
              "W = F / AB",
              "W = F * AB * sin(θ)"
            ],
            correct: 0,
            explanation: "La formule correcte est W = F * AB * cos(θ)."
          },
          {
            type: "mcq",
            question: "Si la force est perpendiculaire au déplacement, le travail est-il nul ?",
            answers: [
              "Oui",
              "Non",
              "Cela dépend de la force",
              "Cela dépend du déplacement"
            ],
            correct: 0,
            explanation: "Si la force est perpendiculaire au déplacement, cos(90°) = 0, donc le travail est nul."
          },
          {
            type: "mcq",
            question: "Quelle est la valeur de cos(θ) si la force et le déplacement sont dans la même direction ?",
            answers: [
              "1",
              "0",
              "0.5",
              "2"
            ],
            correct: 0,
            explanation: "Si la force et le déplacement sont dans la même direction, θ = 0°, donc cos(0°) = 1."
          },
          {
            type: "mcq",
            question: "Le travail d'une force peut-il être négatif ?",
            answers: [
              "Oui",
              "Non",
              "Cela dépend de la force",
              "Cela dépend du déplacement"
            ],
            correct: 0,
            explanation: "Le travail est négatif si la force s'oppose au déplacement."
          },
          {
            type: "mcq",
            question: "Quelle est la valeur du travail si la force est nulle ?",
            answers: [
              "0",
              "1",
              "Infinie",
              "Indéterminée"
            ],
            correct: 0,
            explanation: "Si la force est nulle, le travail est nul."
          },
          {
            type: "mcq",
            question: "Quelle est la valeur du travail si le déplacement est nul ?",
            answers: [
              "0",
              "1",
              "Infinie",
              "Indéterminée"
            ],
            correct: 0,
            explanation: "Si le déplacement est nul, le travail est nul."
          },
          {
            type: "mcq",
            question: "Quelle est la valeur de cos(θ) si la force et le déplacement sont opposés ?",
            answers: [
              "-1",
              "0",
              "0.5",
              "1"
            ],
            correct: 0,
            explanation: "Si la force et le déplacement sont opposés, θ = 180°, donc cos(180°) = -1."
          },
          {
            type: "mcq",
            question: "Le travail d'une force est-il une grandeur vectorielle ?",
            answers: [
              "Non",
              "Oui",
              "Cela dépend de la force",
              "Cela dépend du déplacement"
            ],
            correct: 0,
            explanation: "Le travail est une grandeur algébrique, pas vectorielle."
          },
          {
            type: "mcq",
            question: "Quelle est la relation entre le travail et l'énergie ?",
            answers: [
              "Le travail est un transfert d'énergie",
              "Le travail est une forme d'énergie",
              "Le travail est une force",
              "Le travail est une puissance"
            ],
            correct: 0,
            explanation: "Le travail est un transfert d'énergie."
          }
        ],
        [
          {
            type: "mcq",
            question: "Calculer le travail d'une force de 15 N sur un déplacement de 4 m avec un angle de 60°.",
            answers: [
              "30 J",
              "60 J",
              "15 J",
              "45 J"
            ],
            correct: 0,
            explanation: "W = 15 * 4 * cos(60°) = 15 * 4 * 0.5 = 30 J."
          },
          {
            type: "mcq",
            question: "Quelle est la valeur de cos(θ) si θ = 45° ?",
            answers: [
              "0.71",
              "0.5",
              "0.87",
              "1"
            ],
            correct: 0,
            explanation: "cos(45°) ≈ 0.71."
          },
          {
            type: "mcq",
            question: "Si une force de 20 N déplace un objet de 10 m avec un angle de 0°, quel est le travail ?",
            answers: [
              "200 J",
              "100 J",
              "0 J",
              "400 J"
            ],
            correct: 0,
            explanation: "W = 20 * 10 * cos(0°) = 200 J."
          },
          {
            type: "mcq",
            question: "Quelle est la valeur du travail si θ = 90° ?",
            answers: [
              "0 J",
              "1 J",
              "Infinie",
              "Indéterminée"
            ],
            correct: 0,
            explanation: "cos(90°) = 0, donc le travail est nul."
          },
          {
            type: "mcq",
            question: "Calculer le travail d'une force de 10 N sur un déplacement de 5 m avec un angle de 30°.",
            answers: [
              "43.3 J",
              "50 J",
              "25 J",
              "86.6 J"
            ],
            correct: 0,
            explanation: "W = 10 * 5 * cos(30°) ≈ 43.3 J."
          },
          {
            type: "mcq",
            question: "Quelle est la valeur de cos(θ) si θ = 0° ?",
            answers: [
              "1",
              "0",
              "0.5",
              "2"
            ],
            correct: 0,
            explanation: "cos(0°) = 1."
          },
          {
            type: "mcq",
            question: "Si une force de 5 N déplace un objet de 8 m avec un angle de 180°, quel est le travail ?",
            answers: [
              "-40 J",
              "40 J",
              "0 J",
              "80 J"
            ],
            correct: 0,
            explanation: "W = 5 * 8 * cos(180°) = -40 J."
          },
          {
            type: "mcq",
            question: "Quelle est la valeur du travail si θ = 180° ?",
            answers: [
              "Négatif",
              "Positif",
              "Nul",
              "Indéterminé"
            ],
            correct: 0,
            explanation: "cos(180°) = -1, donc le travail est négatif."
          },
          {
            type: "mcq",
            question: "Calculer le travail d'une force de 12 N sur un déplacement de 6 m avec un angle de 45°.",
            answers: [
              "50.9 J",
              "72 J",
              "36 J",
              "101.8 J"
            ],
            correct: 0,
            explanation: "W = 12 * 6 * cos(45°) ≈ 50.9 J."
          },
          {
            type: "mcq",
            question: "Quelle est la valeur de cos(θ) si θ = 30° ?",
            answers: [
              "0.87",
              "0.5",
              "0.71",
              "1"
            ],
            correct: 0,
            explanation: "cos(30°) ≈ 0.87."
          }
        ],
        [
          {
            type: "mcq",
            question: "Calculer le travail d'une force de 25 N sur un déplacement de 10 m avec un angle de 60°.",
            answers: [
              "125 J",
              "250 J",
              "62.5 J",
              "216.5 J"
            ],
            correct: 0,
            explanation: "W = 25 * 10 * cos(60°) = 125 J."
          },
          {
            type: "mcq",
            question: "Quelle est la valeur de cos(θ) si θ = 120° ?",
            answers: [
              "-0.5",
              "0.5",
              "1",
              "0"
            ],
            correct: 0,
            explanation: "cos(120°) = -0.5."
          },
          {
            type: "mcq",
            question: "Si une force de 30 N déplace un objet de 15 m avec un angle de 0°, quel est le travail ?",
            answers: [
              "450 J",
              "225 J",
              "900 J",
              "0 J"
            ],
            correct: 0,
            explanation: "W = 30 * 15 * cos(0°) = 450 J."
          },
          {
            type: "mcq",
            question: "Quelle est la valeur du travail si θ = 90° ?",
            answers: [
              "0 J",
              "1 J",
              "Infinie",
              "Indéterminée"
            ],
            correct: 0,
            explanation: "cos(90°) = 0, donc le travail est nul."
          },
          {
            type: "mcq",
            question: "Calculer le travail d'une force de 18 N sur un déplacement de 9 m avec un angle de 30°.",
            answers: [
              "140.3 J",
              "162 J",
              "81 J",
              "243 J"
            ],
            correct: 0,
            explanation: "W = 18 * 9 * cos(30°) ≈ 140.3 J."
          },
          {
            type: "mcq",
            question: "Quelle est la valeur de cos(θ) si θ = 150° ?",
            answers: [
              "-0.87",
              "0.87",
              "0.5",
              "-0.5"
            ],
            correct: 0,
            explanation: "cos(150°) ≈ -0.87."
          },
          {
            type: "mcq",
            question: "Si une force de 22 N déplace un objet de 11 m avec un angle de 180°, quel est le travail ?",
            answers: [
              "-242 J",
              "242 J",
              "0 J",
              "484 J"
            ],
            correct: 0,
            explanation: "W = 22 * 11 * cos(180°) = -242 J."
          },
          {
            type: "mcq",
            question: "Quelle est la valeur du travail si θ = 180° ?",
            answers: [
              "Négatif",
              "Positif",
              "Nul",
              "Indéterminé"
            ],
            correct: 0,
            explanation: "cos(180°) = -1, donc le travail est négatif."
          },
          {
            type: "mcq",
            question: "Calculer le travail d'une force de 14 N sur un déplacement de 7 m avec un angle de 45°.",
            answers: [
              "69.3 J",
              "98 J",
              "49 J",
              "147 J"
            ],
            correct: 0,
            explanation: "W = 14 * 7 * cos(45°) ≈ 69.3 J."
          },
          {
            type: "mcq",
            question: "Quelle est la valeur de cos(θ) si θ = 210° ?",
            answers: [
              "-0.87",
              "0.87",
              "0.5",
              "-0.5"
            ],
            correct: 0,
            explanation: "cos(210°) ≈ -0.87."
          }
        ],
        [
          {
            type: "mcq",
            question: "Calculer le travail d'une force de 35 N sur un déplacement de 20 m avec un angle de 60°.",
            answers: [
              "350 J",
              "700 J",
              "175 J",
              "606.2 J"
            ],
            correct: 0,
            explanation: "W = 35 * 20 * cos(60°) = 350 J."
          },
          {
            type: "mcq",
            question: "Quelle est la valeur de cos(θ) si θ = 135° ?",
            answers: [
              "-0.71",
              "0.71",
              "0.5",
              "-0.5"
            ],
            correct: 0,
            explanation: "cos(135°) ≈ -0.71."
          },
          {
            type: "mcq",
            question: "Si une force de 40 N déplace un objet de 25 m avec un angle de 0°, quel est le travail ?",
            answers: [
              "1000 J",
              "500 J",
              "2000 J",
              "0 J"
            ],
            correct: 0,
            explanation: "W = 40 * 25 * cos(0°) = 1000 J."
          },
          {
            type: "mcq",
            question: "Quelle est la valeur du travail si θ = 90° ?",
            answers: [
              "0 J",
              "1 J",
              "Infinie",
              "Indéterminée"
            ],
            correct: 0,
            explanation: "cos(90°) = 0, donc le travail est nul."
          },
          {
            type: "mcq",
            question: "Calculer le travail d'une force de 28 N sur un déplacement de 14 m avec un angle de 30°.",
            answers: [
              "348.5 J",
              "392 J",
              "196 J",
              "548.8 J"
            ],
            correct: 0,
            explanation: "W = 28 * 14 * cos(30°) ≈ 348.5 J."
          },
          {
            type: "mcq",
            question: "Quelle est la valeur de cos(θ) si θ = 225° ?",
            answers: [
              "-0.71",
              "0.71",
              "0.5",
              "-0.5"
            ],
            correct: 0,
            explanation: "cos(225°) ≈ -0.71."
          },
          {
            type: "mcq",
            question: "Si une force de 33 N déplace un objet de 17 m avec un angle de 180°, quel est le travail ?",
            answers: [
              "-561 J",
              "561 J",
              "0 J",
              "1122 J"
            ],
            correct: 0,
            explanation: "W = 33 * 17 * cos(180°) = -561 J."
          },
          {
            type: "mcq",
            question: "Quelle est la valeur du travail si θ = 180° ?",
            answers: [
              "Négatif",
              "Positif",
              "Nul",
              "Indéterminé"
            ],
            correct: 0,
            explanation: "cos(180°) = -1, donc le travail est négatif."
          },
          {
            type: "mcq",
            question: "Calculer le travail d'une force de 19 N sur un déplacement de 9.5 m avec un angle de 45°.",
            answers: [
              "125.4 J",
              "180.5 J",
              "95 J",
              "266.1 J"
            ],
            correct: 0,
            explanation: "W = 19 * 9.5 * cos(45°) ≈ 125.4 J."
          },
          {
            type: "mcq",
            question: "Quelle est la valeur de cos(θ) si θ = 300° ?",
            answers: [
              "0.5",
              "-0.5",
              "0.87",
              "-0.87"
            ],
            correct: 0,
            explanation: "cos(300°) = 0.5."
          }
        ],
        [
          {
            type: "mcq",
            question: "Calculer le travail d'une force de 45 N sur un déplacement de 30 m avec un angle de 60°.",
            answers: [
              "675 J",
              "1350 J",
              "337.5 J",
              "1012.5 J"
            ],
            correct: 0,
            explanation: "W = 45 * 30 * cos(60°) = 675 J."
          },
          {
            type: "mcq",
            question: "Quelle est la valeur de cos(θ) si θ = 240° ?",
            answers: [
              "-0.5",
              "0.5",
              "0.87",
              "-0.87"
            ],
            correct: 0,
            explanation: "cos(240°) = -0.5."
          },
          {
            type: "mcq",
            question: "Si une force de 50 N déplace un objet de 40 m avec un angle de 0°, quel est le travail ?",
            answers: [
              "2000 J",
              "1000 J",
              "4000 J",
              "0 J"
            ],
            correct: 0,
            explanation: "W = 50 * 40 * cos(0°) = 2000 J."
          },
          {
            type: "mcq",
            question: "Quelle est la valeur du travail si θ = 90° ?",
            answers: [
              "0 J",
              "1 J",
              "Infinie",
              "Indéterminée"
            ],
            correct: 0,
            explanation: "cos(90°) = 0, donc le travail est nul."
          },
          {
            type: "mcq",
            question: "Calculer le travail d'une force de 38 N sur un déplacement de 19 m avec un angle de 30°.",
            answers: [
              "606.7 J",
              "722 J",
              "361 J",
              "1083.3 J"
            ],
            correct: 0,
            explanation: "W = 38 * 19 * cos(30°) ≈ 606.7 J."
          },
          {
            type: "mcq",
            question: "Quelle est la valeur de cos(θ) si θ = 315° ?",
            answers: [
              "0.71",
              "-0.71",
              "0.5",
              "-0.5"
            ],
            correct: 0,
            explanation: "cos(315°) ≈ 0.71."
          },
          {
            type: "mcq",
            question: "Si une force de 44 N déplace un objet de 22 m avec un angle de 180°, quel est le travail ?",
            answers: [
              "-968 J",
              "968 J",
              "0 J",
              "1936 J"
            ],
            correct: 0,
            explanation: "W = 44 * 22 * cos(180°) = -968 J."
          },
          {
            type: "mcq",
            question: "Quelle est la valeur du travail si θ = 180° ?",
            answers: [
              "Négatif",
              "Positif",
              "Nul",
              "Indéterminé"
            ],
            correct: 0,
            explanation: "cos(180°) = -1, donc le travail est négatif."
          },
          {
            type: "mcq",
            question: "Calculer le travail d'une force de 27 N sur un déplacement de 13.5 m avec un angle de 45°.",
            answers: [
              "258.3 J",
              "364.5 J",
              "182.25 J",
              "507.6 J"
            ],
            correct: 0,
            explanation: "W = 27 * 13.5 * cos(45°) ≈ 258.3 J."
          },
          {
            type: "mcq",
            question: "Quelle est la valeur de cos(θ) si θ = 330° ?",
            answers: [
              "0.87",
              "-0.87",
              "0.5",
              "-0.5"
            ],
            correct: 0,
            explanation: "cos(330°) ≈ 0.87."
          }
        ],
        [
          {
            type: "mcq",
            question: "Calculer le travail d'une force de 55 N sur un déplacement de 40 m avec un angle de 60°.",
            answers: [
              "1100 J",
              "2200 J",
              "550 J",
              "1650 J"
            ],
            correct: 0,
            explanation: "W = 55 * 40 * cos(60°) = 1100 J."
          },
          {
            type: "mcq",
            question: "Quelle est la valeur de cos(θ) si θ = 270° ?",
            answers: [
              "0",
              "1",
              "-1",
              "0.5"
            ],
            correct: 0,
            explanation: "cos(270°) = 0."
          },
          {
            type: "mcq",
            question: "Si une force de 60 N déplace un objet de 50 m avec un angle de 0°, quel est le travail ?",
            answers: [
              "3000 J",
              "1500 J",
              "6000 J",
              "0 J"
            ],
            correct: 0,
            explanation: "W = 60 * 50 * cos(0°) = 3000 J."
          },
          {
            type: "mcq",
            question: "Quelle est la valeur du travail si θ = 90° ?",
            answers: [
              "0 J",
              "1 J",
              "Infinie",
              "Indéterminée"
            ],
            correct: 0,
            explanation: "cos(90°) = 0, donc le travail est nul."
          },
          {
            type: "mcq",
            question: "Calculer le travail d'une force de 42 N sur un déplacement de 21 m avec un angle de 30°.",
            answers: [
              "776.4 J",
              "882 J",
              "441 J",
              "1323 J"
            ],
            correct: 0,
            explanation: "W = 42 * 21 * cos(30°) ≈ 776.4 J."
          },
          {
            type: "mcq",
            question: "Quelle est la valeur de cos(θ) si θ = 300° ?",
            answers: [
              "0.5",
              "-0.5",
              "0.87",
              "-0.87"
            ],
            correct: 0,
            explanation: "cos(300°) = 0.5."
          },
          {
            type: "mcq",
            question: "Si une force de 52 N déplace un objet de 26 m avec un angle de 180°, quel est le travail ?",
            answers: [
              "-1352 J",
              "1352 J",
              "0 J",
              "2704 J"
            ],
            correct: 0,
            explanation: "W = 52 * 26 * cos(180°) = -1352 J."
          },
          {
            type: "mcq",
            question: "Quelle est la valeur du travail si θ = 180° ?",
            answers: [
              "Négatif",
              "Positif",
              "Nul",
              "Indéterminé"
            ],
            correct: 0,
            explanation: "cos(180°) = -1, donc le travail est négatif."
          },
          {
            type: "mcq",
            question: "Calculer le travail d'une force de 31 N sur un déplacement de 15.5 m avec un angle de 45°.",
            answers: [
              "339.3 J",
              "480.5 J",
              "240.25 J",
              "678.6 J"
            ],
            correct: 0,
            explanation: "W = 31 * 15.5 * cos(45°) ≈ 339.3 J."
          },
          {
            type: "mcq",
            question: "Quelle est la valeur de cos(θ) si θ = 345° ?",
            answers: [
              "0.97",
              "-0.97",
              "0.5",
              "-0.5"
            ],
            correct: 0,
            explanation: "cos(345°) ≈ 0.97."
          }
        ],
        [
          {
            type: "mcq",
            question: "Calculer le travail d'une force de 65 N sur un déplacement de 50 m avec un angle de 60°.",
            answers: [
              "1625 J",
              "3250 J",
              "812.5 J",
              "2437.5 J"
            ],
            correct: 0,
            explanation: "W = 65 * 50 * cos(60°) = 1625 J."
          },
          {
            type: "mcq",
            question: "Quelle est la valeur de cos(θ) si θ = 315° ?",
            answers: [
              "0.71",
              "-0.71",
              "0.5",
              "-0.5"
            ],
            correct: 0,
            explanation: "cos(315°) ≈ 0.71."
          },
          {
            type: "mcq",
            question: "Si une force de 70 N déplace un objet de 60 m avec un angle de 0°, quel est le travail ?",
            answers: [
              "4200 J",
              "2100 J",
              "8400 J",
              "0 J"
            ],
            correct: 0,
            explanation: "W = 70 * 60 * cos(0°) = 4200 J."
          },
          {
            type: "mcq",
            question: "Quelle est la valeur du travail si θ = 90° ?",
            answers: [
              "0 J",
              "1 J",
              "Infinie",
              "Indéterminée"
            ],
            correct: 0,
            explanation: "cos(90°) = 0, donc le travail est nul."
          },
          {
            type: "mcq",
            question: "Calculer le travail d'une force de 54 N sur un déplacement de 27 m avec un angle de 30°.",
            answers: [
              "1317.3 J",
              "1458 J",
              "729 J",
              "2187 J"
            ],
            correct: 0,
            explanation: "W = 54 * 27 * cos(30°) ≈ 1317.3 J."
          },
          {
            type: "mcq",
            question: "Quelle est la valeur de cos(θ) si θ = 330° ?",
            answers: [
              "0.87",
              "-0.87",
              "0.5",
              "-0.5"
            ],
            correct: 0,
            explanation: "cos(330°) ≈ 0.87."
          },
          {
            type: "mcq",
            question: "Si une force de 63 N déplace un objet de 31.5 m avec un angle de 180°, quel est le travail ?",
            answers: [
              "-1984.5 J",
              "1984.5 J",
              "0 J",
              "3969 J"
            ],
            correct: 0,
            explanation: "W = 63 * 31.5 * cos(180°) = -1984.5 J."
          },
          {
            type: "mcq",
            question: "Quelle est la valeur du travail si θ = 180° ?",
            answers: [
              "Négatif",
              "Positif",
              "Nul",
              "Indéterminé"
            ],
            correct: 0,
            explanation: "cos(180°) = -1, donc le travail est négatif."
          },
          {
            type: "mcq",
            question: "Calculer le travail d'une force de 47 N sur un déplacement de 23.5 m avec un angle de 45°.",
            answers: [
              "757.6 J",
              "1104.5 J",
              "552.25 J",
              "1505.4 J"
            ],
            correct: 0,
            explanation: "W = 47 * 23.5 * cos(45°) ≈ 757.6 J."
          },
          {
            type: "mcq",
            question: "Quelle est la valeur de cos(θ) si θ = 360° ?",
            answers: [
              "1",
              "0",
              "-1",
              "0.5"
            ],
            correct: 0,
            explanation: "cos(360°) = 1."
          }
        ]
      ]
    },
    {
      id: "energie-cinetique",
      label: "Énergie cinétique",
      icon: "📌",
      lesson: {
        formula: "Ec = 1/2 * m * v²",
        text: "L'énergie cinétique est l'énergie que possède un corps du fait de son mouvement.",
        example: "Un objet de 2 kg se déplaçant à 3 m/s a une énergie cinétique de Ec = 0.5 * 2 * 9 = 9 J."
      },
      fullBlocks: [
        {
          type: "definition",
          text: "L'énergie cinétique dépend de la masse de l'objet et de sa vitesse."
        },
        {
          type: "formula",
          text: "Ec = 1/2 * m * v²"
        },
        {
          type: "example",
          text: "Un objet de 5 kg se déplaçant à 4 m/s a une énergie cinétique de Ec = 0.5 * 5 * 16 = 40 J."
        }
      ],
      levels: [
        [
          {
            type: "mcq",
            question: "Quelle est l'unité de l'énergie cinétique ?",
            answers: [
              "Joule (J)",
              "Newton (N)",
              "Watt (W)",
              "Pascal (Pa)"
            ],
            correct: 0,
            explanation: "L'énergie cinétique s'exprime en Joule (J)."
          },
          {
            type: "mcq",
            question: "Quelle formule permet de calculer l'énergie cinétique ?",
            answers: [
              "Ec = 1/2 * m * v²",
              "Ec = m * v",
              "Ec = m * g * h",
              "Ec = F * d"
            ],
            correct: 0,
            explanation: "La formule correcte est Ec = 1/2 * m * v²."
          },
          {
            type: "mcq",
            question: "Si la vitesse double, comment varie l'énergie cinétique ?",
            answers: [
              "Elle quadruple",
              "Elle double",
              "Elle reste la même",
              "Elle est divisée par deux"
            ],
            correct: 0,
            explanation: "L'énergie cinétique est proportionnelle au carré de la vitesse."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie cinétique d'un objet de 3 kg se déplaçant à 2 m/s ?",
            answers: [
              "6 J",
              "3 J",
              "12 J",
              "9 J"
            ],
            correct: 0,
            explanation: "Ec = 0.5 * 3 * 4 = 6 J."
          },
          {
            type: "mcq",
            question: "Si la masse double, comment varie l'énergie cinétique ?",
            answers: [
              "Elle double",
              "Elle quadruple",
              "Elle reste la même",
              "Elle est divisée par deux"
            ],
            correct: 0,
            explanation: "L'énergie cinétique est directement proportionnelle à la masse."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie cinétique d'un objet de 4 kg se déplaçant à 5 m/s ?",
            answers: [
              "50 J",
              "25 J",
              "100 J",
              "200 J"
            ],
            correct: 0,
            explanation: "Ec = 0.5 * 4 * 25 = 50 J."
          },
          {
            type: "mcq",
            question: "Si la vitesse est nulle, quelle est l'énergie cinétique ?",
            answers: [
              "0 J",
              "Infinie",
              "Indéterminée",
              "1 J"
            ],
            correct: 0,
            explanation: "Si la vitesse est nulle, l'énergie cinétique est nulle."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie cinétique d'un objet de 1 kg se déplaçant à 1 m/s ?",
            answers: [
              "0.5 J",
              "1 J",
              "2 J",
              "0 J"
            ],
            correct: 0,
            explanation: "Ec = 0.5 * 1 * 1 = 0.5 J."
          },
          {
            type: "mcq",
            question: "Si la vitesse est multipliée par 3, comment varie l'énergie cinétique ?",
            answers: [
              "Elle est multipliée par 9",
              "Elle est multipliée par 3",
              "Elle reste la même",
              "Elle est divisée par 3"
            ],
            correct: 0,
            explanation: "L'énergie cinétique est proportionnelle au carré de la vitesse."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie cinétique d'un objet de 2 kg se déplaçant à 10 m/s ?",
            answers: [
              "100 J",
              "50 J",
              "200 J",
              "400 J"
            ],
            correct: 0,
            explanation: "Ec = 0.5 * 2 * 100 = 100 J."
          }
        ],
        [
          {
            type: "mcq",
            question: "Calculer l'énergie cinétique d'un objet de 6 kg se déplaçant à 3 m/s.",
            answers: [
              "27 J",
              "9 J",
              "54 J",
              "18 J"
            ],
            correct: 0,
            explanation: "Ec = 0.5 * 6 * 9 = 27 J."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie cinétique d'un objet de 7 kg se déplaçant à 2 m/s ?",
            answers: [
              "14 J",
              "7 J",
              "28 J",
              "42 J"
            ],
            correct: 0,
            explanation: "Ec = 0.5 * 7 * 4 = 14 J."
          },
          {
            type: "mcq",
            question: "Si la vitesse est divisée par 2, comment varie l'énergie cinétique ?",
            answers: [
              "Elle est divisée par 4",
              "Elle est divisée par 2",
              "Elle reste la même",
              "Elle est multipliée par 2"
            ],
            correct: 0,
            explanation: "L'énergie cinétique est proportionnelle au carré de la vitesse."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie cinétique d'un objet de 8 kg se déplaçant à 6 m/s ?",
            answers: [
              "144 J",
              "72 J",
              "288 J",
              "36 J"
            ],
            correct: 0,
            explanation: "Ec = 0.5 * 8 * 36 = 144 J."
          },
          {
            type: "mcq",
            question: "Si la masse est divisée par 2, comment varie l'énergie cinétique ?",
            answers: [
              "Elle est divisée par 2",
              "Elle est divisée par 4",
              "Elle reste la même",
              "Elle est multipliée par 2"
            ],
            correct: 0,
            explanation: "L'énergie cinétique est directement proportionnelle à la masse."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie cinétique d'un objet de 9 kg se déplaçant à 1 m/s ?",
            answers: [
              "4.5 J",
              "9 J",
              "18 J",
              "0.5 J"
            ],
            correct: 0,
            explanation: "Ec = 0.5 * 9 * 1 = 4.5 J."
          },
          {
            type: "mcq",
            question: "Si la vitesse est multipliée par 4, comment varie l'énergie cinétique ?",
            answers: [
              "Elle est multipliée par 16",
              "Elle est multipliée par 4",
              "Elle reste la même",
              "Elle est divisée par 4"
            ],
            correct: 0,
            explanation: "L'énergie cinétique est proportionnelle au carré de la vitesse."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie cinétique d'un objet de 10 kg se déplaçant à 7 m/s ?",
            answers: [
              "245 J",
              "122.5 J",
              "490 J",
              "980 J"
            ],
            correct: 0,
            explanation: "Ec = 0.5 * 10 * 49 = 245 J."
          },
          {
            type: "mcq",
            question: "Si la masse est multipliée par 3, comment varie l'énergie cinétique ?",
            answers: [
              "Elle est multipliée par 3",
              "Elle est multipliée par 9",
              "Elle reste la même",
              "Elle est divisée par 3"
            ],
            correct: 0,
            explanation: "L'énergie cinétique est directement proportionnelle à la masse."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie cinétique d'un objet de 5 kg se déplaçant à 8 m/s ?",
            answers: [
              "160 J",
              "80 J",
              "320 J",
              "640 J"
            ],
            correct: 0,
            explanation: "Ec = 0.5 * 5 * 64 = 160 J."
          }
        ],
        [
          {
            type: "mcq",
            question: "Calculer l'énergie cinétique d'un objet de 12 kg se déplaçant à 5 m/s.",
            answers: [
              "150 J",
              "75 J",
              "300 J",
              "600 J"
            ],
            correct: 0,
            explanation: "Ec = 0.5 * 12 * 25 = 150 J."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie cinétique d'un objet de 15 kg se déplaçant à 4 m/s ?",
            answers: [
              "120 J",
              "60 J",
              "240 J",
              "480 J"
            ],
            correct: 0,
            explanation: "Ec = 0.5 * 15 * 16 = 120 J."
          },
          {
            type: "mcq",
            question: "Si la vitesse est multipliée par 5, comment varie l'énergie cinétique ?",
            answers: [
              "Elle est multipliée par 25",
              "Elle est multipliée par 5",
              "Elle reste la même",
              "Elle est divisée par 5"
            ],
            correct: 0,
            explanation: "L'énergie cinétique est proportionnelle au carré de la vitesse."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie cinétique d'un objet de 20 kg se déplaçant à 10 m/s ?",
            answers: [
              "1000 J",
              "500 J",
              "2000 J",
              "4000 J"
            ],
            correct: 0,
            explanation: "Ec = 0.5 * 20 * 100 = 1000 J."
          },
          {
            type: "mcq",
            question: "Si la masse est multipliée par 4, comment varie l'énergie cinétique ?",
            answers: [
              "Elle est multipliée par 4",
              "Elle est multipliée par 16",
              "Elle reste la même",
              "Elle est divisée par 4"
            ],
            correct: 0,
            explanation: "L'énergie cinétique est directement proportionnelle à la masse."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie cinétique d'un objet de 25 kg se déplaçant à 6 m/s ?",
            answers: [
              "450 J",
              "225 J",
              "900 J",
              "1800 J"
            ],
            correct: 0,
            explanation: "Ec = 0.5 * 25 * 36 = 450 J."
          },
          {
            type: "mcq",
            question: "Si la vitesse est divisée par 3, comment varie l'énergie cinétique ?",
            answers: [
              "Elle est divisée par 9",
              "Elle est divisée par 3",
              "Elle reste la même",
              "Elle est multipliée par 3"
            ],
            correct: 0,
            explanation: "L'énergie cinétique est proportionnelle au carré de la vitesse."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie cinétique d'un objet de 30 kg se déplaçant à 12 m/s ?",
            answers: [
              "2160 J",
              "1080 J",
              "4320 J",
              "8640 J"
            ],
            correct: 0,
            explanation: "Ec = 0.5 * 30 * 144 = 2160 J."
          },
          {
            type: "mcq",
            question: "Si la masse est divisée par 5, comment varie l'énergie cinétique ?",
            answers: [
              "Elle est divisée par 5",
              "Elle est divisée par 25",
              "Elle reste la même",
              "Elle est multipliée par 5"
            ],
            correct: 0,
            explanation: "L'énergie cinétique est directement proportionnelle à la masse."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie cinétique d'un objet de 35 kg se déplaçant à 8 m/s ?",
            answers: [
              "1120 J",
              "560 J",
              "2240 J",
              "4480 J"
            ],
            correct: 0,
            explanation: "Ec = 0.5 * 35 * 64 = 1120 J."
          }
        ],
        [
          {
            type: "mcq",
            question: "Calculer l'énergie cinétique d'un objet de 40 kg se déplaçant à 15 m/s.",
            answers: [
              "4500 J",
              "2250 J",
              "9000 J",
              "18000 J"
            ],
            correct: 0,
            explanation: "Ec = 0.5 * 40 * 225 = 4500 J."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie cinétique d'un objet de 45 kg se déplaçant à 10 m/s ?",
            answers: [
              "2250 J",
              "1125 J",
              "4500 J",
              "9000 J"
            ],
            correct: 0,
            explanation: "Ec = 0.5 * 45 * 100 = 2250 J."
          },
          {
            type: "mcq",
            question: "Si la vitesse est multipliée par 10, comment varie l'énergie cinétique ?",
            answers: [
              "Elle est multipliée par 100",
              "Elle est multipliée par 10",
              "Elle reste la même",
              "Elle est divisée par 10"
            ],
            correct: 0,
            explanation: "L'énergie cinétique est proportionnelle au carré de la vitesse."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie cinétique d'un objet de 50 kg se déplaçant à 20 m/s ?",
            answers: [
              "10000 J",
              "5000 J",
              "20000 J",
              "40000 J"
            ],
            correct: 0,
            explanation: "Ec = 0.5 * 50 * 400 = 10000 J."
          },
          {
            type: "mcq",
            question: "Si la masse est multipliée par 10, comment varie l'énergie cinétique ?",
            answers: [
              "Elle est multipliée par 10",
              "Elle est multipliée par 100",
              "Elle reste la même",
              "Elle est divisée par 10"
            ],
            correct: 0,
            explanation: "L'énergie cinétique est directement proportionnelle à la masse."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie cinétique d'un objet de 55 kg se déplaçant à 14 m/s ?",
            answers: [
              "5390 J",
              "2695 J",
              "10780 J",
              "21560 J"
            ],
            correct: 0,
            explanation: "Ec = 0.5 * 55 * 196 = 5390 J."
          },
          {
            type: "mcq",
            question: "Si la vitesse est divisée par 10, comment varie l'énergie cinétique ?",
            answers: [
              "Elle est divisée par 100",
              "Elle est divisée par 10",
              "Elle reste la même",
              "Elle est multipliée par 10"
            ],
            correct: 0,
            explanation: "L'énergie cinétique est proportionnelle au carré de la vitesse."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie cinétique d'un objet de 60 kg se déplaçant à 18 m/s ?",
            answers: [
              "9720 J",
              "4860 J",
              "19440 J",
              "38880 J"
            ],
            correct: 0,
            explanation: "Ec = 0.5 * 60 * 324 = 9720 J."
          },
          {
            type: "mcq",
            question: "Si la masse est divisée par 10, comment varie l'énergie cinétique ?",
            answers: [
              "Elle est divisée par 10",
              "Elle est divisée par 100",
              "Elle reste la même",
              "Elle est multipliée par 10"
            ],
            correct: 0,
            explanation: "L'énergie cinétique est directement proportionnelle à la masse."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie cinétique d'un objet de 65 kg se déplaçant à 16 m/s ?",
            answers: [
              "8320 J",
              "4160 J",
              "16640 J",
              "33280 J"
            ],
            correct: 0,
            explanation: "Ec = 0.5 * 65 * 256 = 8320 J."
          }
        ],
        [
          {
            type: "mcq",
            question: "Calculer l'énergie cinétique d'un objet de 70 kg se déplaçant à 25 m/s.",
            answers: [
              "21875 J",
              "10937.5 J",
              "43750 J",
              "87500 J"
            ],
            correct: 0,
            explanation: "Ec = 0.5 * 70 * 625 = 21875 J."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie cinétique d'un objet de 75 kg se déplaçant à 20 m/s ?",
            answers: [
              "15000 J",
              "7500 J",
              "30000 J",
              "60000 J"
            ],
            correct: 0,
            explanation: "Ec = 0.5 * 75 * 400 = 15000 J."
          },
          {
            type: "mcq",
            question: "Si la vitesse est multipliée par 20, comment varie l'énergie cinétique ?",
            answers: [
              "Elle est multipliée par 400",
              "Elle est multipliée par 20",
              "Elle reste la même",
              "Elle est divisée par 20"
            ],
            correct: 0,
            explanation: "L'énergie cinétique est proportionnelle au carré de la vitesse."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie cinétique d'un objet de 80 kg se déplaçant à 25 m/s ?",
            answers: [
              "25000 J",
              "12500 J",
              "50000 J",
              "100000 J"
            ],
            correct: 0,
            explanation: "Ec = 0.5 * 80 * 625 = 25000 J."
          },
          {
            type: "mcq",
            question: "Si la masse est multipliée par 20, comment varie l'énergie cinétique ?",
            answers: [
              "Elle est multipliée par 20",
              "Elle est multipliée par 400",
              "Elle reste la même",
              "Elle est divisée par 20"
            ],
            correct: 0,
            explanation: "L'énergie cinétique est directement proportionnelle à la masse."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie cinétique d'un objet de 85 kg se déplaçant à 30 m/s ?",
            answers: [
              "38250 J",
              "19125 J",
              "76500 J",
              "153000 J"
            ],
            correct: 0,
            explanation: "Ec = 0.5 * 85 * 900 = 38250 J."
          },
          {
            type: "mcq",
            question: "Si la vitesse est divisée par 20, comment varie l'énergie cinétique ?",
            answers: [
              "Elle est divisée par 400",
              "Elle est divisée par 20",
              "Elle reste la même",
              "Elle est multipliée par 20"
            ],
            correct: 0,
            explanation: "L'énergie cinétique est proportionnelle au carré de la vitesse."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie cinétique d'un objet de 90 kg se déplaçant à 28 m/s ?",
            answers: [
              "35280 J",
              "17640 J",
              "70560 J",
              "141120 J"
            ],
            correct: 0,
            explanation: "Ec = 0.5 * 90 * 784 = 35280 J."
          },
          {
            type: "mcq",
            question: "Si la masse est divisée par 20, comment varie l'énergie cinétique ?",
            answers: [
              "Elle est divisée par 20",
              "Elle est divisée par 400",
              "Elle reste la même",
              "Elle est multipliée par 20"
            ],
            correct: 0,
            explanation: "L'énergie cinétique est directement proportionnelle à la masse."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie cinétique d'un objet de 95 kg se déplaçant à 24 m/s ?",
            answers: [
              "27360 J",
              "13680 J",
              "54720 J",
              "109440 J"
            ],
            correct: 0,
            explanation: "Ec = 0.5 * 95 * 576 = 27360 J."
          }
        ],
        [
          {
            type: "mcq",
            question: "Calculer l'énergie cinétique d'un objet de 100 kg se déplaçant à 35 m/s.",
            answers: [
              "61250 J",
              "30625 J",
              "122500 J",
              "245000 J"
            ],
            correct: 0,
            explanation: "Ec = 0.5 * 100 * 1225 = 61250 J."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie cinétique d'un objet de 105 kg se déplaçant à 30 m/s ?",
            answers: [
              "47250 J",
              "23625 J",
              "94500 J",
              "189000 J"
            ],
            correct: 0,
            explanation: "Ec = 0.5 * 105 * 900 = 47250 J."
          },
          {
            type: "mcq",
            question: "Si la vitesse est multipliée par 50, comment varie l'énergie cinétique ?",
            answers: [
              "Elle est multipliée par 2500",
              "Elle est multipliée par 50",
              "Elle reste la même",
              "Elle est divisée par 50"
            ],
            correct: 0,
            explanation: "L'énergie cinétique est proportionnelle au carré de la vitesse."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie cinétique d'un objet de 110 kg se déplaçant à 32 m/s ?",
            answers: [
              "56320 J",
              "28160 J",
              "112640 J",
              "225280 J"
            ],
            correct: 0,
            explanation: "Ec = 0.5 * 110 * 1024 = 56320 J."
          },
          {
            type: "mcq",
            question: "Si la masse est multipliée par 50, comment varie l'énergie cinétique ?",
            answers: [
              "Elle est multipliée par 50",
              "Elle est multipliée par 2500",
              "Elle reste la même",
              "Elle est divisée par 50"
            ],
            correct: 0,
            explanation: "L'énergie cinétique est directement proportionnelle à la masse."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie cinétique d'un objet de 115 kg se déplaçant à 26 m/s ?",
            answers: [
              "39270 J",
              "19635 J",
              "78540 J",
              "157080 J"
            ],
            correct: 0,
            explanation: "Ec = 0.5 * 115 * 676 = 39270 J."
          },
          {
            type: "mcq",
            question: "Si la vitesse est divisée par 50, comment varie l'énergie cinétique ?",
            answers: [
              "Elle est divisée par 2500",
              "Elle est divisée par 50",
              "Elle reste la même",
              "Elle est multipliée par 50"
            ],
            correct: 0,
            explanation: "L'énergie cinétique est proportionnelle au carré de la vitesse."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie cinétique d'un objet de 120 kg se déplaçant à 22 m/s ?",
            answers: [
              "29040 J",
              "14520 J",
              "58080 J",
              "116160 J"
            ],
            correct: 0,
            explanation: "Ec = 0.5 * 120 * 484 = 29040 J."
          },
          {
            type: "mcq",
            question: "Si la masse est divisée par 50, comment varie l'énergie cinétique ?",
            answers: [
              "Elle est divisée par 50",
              "Elle est divisée par 2500",
              "Elle reste la même",
              "Elle est multipliée par 50"
            ],
            correct: 0,
            explanation: "L'énergie cinétique est directement proportionnelle à la masse."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie cinétique d'un objet de 125 kg se déplaçant à 18 m/s ?",
            answers: [
              "20250 J",
              "10125 J",
              "40500 J",
              "81000 J"
            ],
            correct: 0,
            explanation: "Ec = 0.5 * 125 * 324 = 20250 J."
          }
        ]
      ]
    },
    {
      id: "theoreme-energie-cinetique",
      label: "Théorème de l’énergie cinétique",
      icon: "📌",
      lesson: {
        formula: "ΔEc = W(F)",
        text: "Le théorème de l'énergie cinétique stipule que la variation d'énergie cinétique d'un système est égale à la somme des travaux des forces extérieures qui s'exercent sur lui.",
        example: "Si un objet passe de 2 J à 8 J d'énergie cinétique, la somme des travaux des forces extérieures est de 6 J."
      },
      fullBlocks: [
        {
          type: "definition",
          text: "Le théorème de l'énergie cinétique relie le travail des forces extérieures à la variation d'énergie cinétique."
        },
        {
          type: "formula",
          text: "ΔEc = W(F)"
        },
        {
          type: "example",
          text: "Un objet passe de 5 J à 15 J d'énergie cinétique. La somme des travaux des forces extérieures est de 10 J."
        }
      ],
      levels: [
        [
          {
            type: "mcq",
            question: "Quelle est la formule du théorème de l'énergie cinétique ?",
            answers: [
              "ΔEc = W(F)",
              "Ec = 1/2 * m * v²",
              "W = F * d",
              "P = m * g"
            ],
            correct: 0,
            explanation: "La formule correcte est ΔEc = W(F)."
          },
          {
            type: "mcq",
            question: "Si l'énergie cinétique passe de 3 J à 7 J, quel est le travail des forces extérieures ?",
            answers: [
              "4 J",
              "10 J",
              "3 J",
              "7 J"
            ],
            correct: 0,
            explanation: "ΔEc = 7 J - 3 J = 4 J."
          },
          {
            type: "mcq",
            question: "Si le travail des forces extérieures est de 5 J, comment varie l'énergie cinétique ?",
            answers: [
              "Elle augmente de 5 J",
              "Elle diminue de 5 J",
              "Elle reste la même",
              "Elle est multipliée par 5"
            ],
            correct: 0,
            explanation: "ΔEc = W(F) = 5 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie cinétique passe de 10 J à 4 J, quel est le travail des forces extérieures ?",
            answers: [
              "-6 J",
              "6 J",
              "10 J",
              "4 J"
            ],
            correct: 0,
            explanation: "ΔEc = 4 J - 10 J = -6 J."
          },
          {
            type: "mcq",
            question: "Si le travail des forces extérieures est nul, comment varie l'énergie cinétique ?",
            answers: [
              "Elle reste constante",
              "Elle augmente",
              "Elle diminue",
              "Elle devient nulle"
            ],
            correct: 0,
            explanation: "Si W(F) = 0, alors ΔEc = 0."
          },
          {
            type: "mcq",
            question: "Si l'énergie cinétique passe de 2 J à 12 J, quel est le travail des forces extérieures ?",
            answers: [
              "10 J",
              "14 J",
              "2 J",
              "12 J"
            ],
            correct: 0,
            explanation: "ΔEc = 12 J - 2 J = 10 J."
          },
          {
            type: "mcq",
            question: "Si le travail des forces extérieures est de -3 J, comment varie l'énergie cinétique ?",
            answers: [
              "Elle diminue de 3 J",
              "Elle augmente de 3 J",
              "Elle reste la même",
              "Elle devient nulle"
            ],
            correct: 0,
            explanation: "ΔEc = W(F) = -3 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie cinétique passe de 8 J à 8 J, quel est le travail des forces extérieures ?",
            answers: [
              "0 J",
              "8 J",
              "16 J",
              "4 J"
            ],
            correct: 0,
            explanation: "ΔEc = 8 J - 8 J = 0 J."
          },
          {
            type: "mcq",
            question: "Si le travail des forces extérieures est de 12 J, comment varie l'énergie cinétique ?",
            answers: [
              "Elle augmente de 12 J",
              "Elle diminue de 12 J",
              "Elle reste la même",
              "Elle devient nulle"
            ],
            correct: 0,
            explanation: "ΔEc = W(F) = 12 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie cinétique passe de 15 J à 5 J, quel est le travail des forces extérieures ?",
            answers: [
              "-10 J",
              "10 J",
              "15 J",
              "5 J"
            ],
            correct: 0,
            explanation: "ΔEc = 5 J - 15 J = -10 J."
          }
        ],
        [
          {
            type: "mcq",
            question: "Si l'énergie cinétique passe de 4 J à 20 J, quel est le travail des forces extérieures ?",
            answers: [
              "16 J",
              "24 J",
              "4 J",
              "20 J"
            ],
            correct: 0,
            explanation: "ΔEc = 20 J - 4 J = 16 J."
          },
          {
            type: "mcq",
            question: "Si le travail des forces extérieures est de 8 J, comment varie l'énergie cinétique ?",
            answers: [
              "Elle augmente de 8 J",
              "Elle diminue de 8 J",
              "Elle reste la même",
              "Elle devient nulle"
            ],
            correct: 0,
            explanation: "ΔEc = W(F) = 8 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie cinétique passe de 6 J à 14 J, quel est le travail des forces extérieures ?",
            answers: [
              "8 J",
              "20 J",
              "6 J",
              "14 J"
            ],
            correct: 0,
            explanation: "ΔEc = 14 J - 6 J = 8 J."
          },
          {
            type: "mcq",
            question: "Si le travail des forces extérieures est de -6 J, comment varie l'énergie cinétique ?",
            answers: [
              "Elle diminue de 6 J",
              "Elle augmente de 6 J",
              "Elle reste la même",
              "Elle devient nulle"
            ],
            correct: 0,
            explanation: "ΔEc = W(F) = -6 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie cinétique passe de 12 J à 12 J, quel est le travail des forces extérieures ?",
            answers: [
              "0 J",
              "12 J",
              "24 J",
              "6 J"
            ],
            correct: 0,
            explanation: "ΔEc = 12 J - 12 J = 0 J."
          },
          {
            type: "mcq",
            question: "Si le travail des forces extérieures est de 15 J, comment varie l'énergie cinétique ?",
            answers: [
              "Elle augmente de 15 J",
              "Elle diminue de 15 J",
              "Elle reste la même",
              "Elle devient nulle"
            ],
            correct: 0,
            explanation: "ΔEc = W(F) = 15 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie cinétique passe de 20 J à 10 J, quel est le travail des forces extérieures ?",
            answers: [
              "-10 J",
              "10 J",
              "20 J",
              "30 J"
            ],
            correct: 0,
            explanation: "ΔEc = 10 J - 20 J = -10 J."
          },
          {
            type: "mcq",
            question: "Si le travail des forces extérieures est de 0 J, comment varie l'énergie cinétique ?",
            answers: [
              "Elle reste constante",
              "Elle augmente",
              "Elle diminue",
              "Elle devient nulle"
            ],
            correct: 0,
            explanation: "Si W(F) = 0, alors ΔEc = 0."
          },
          {
            type: "mcq",
            question: "Si l'énergie cinétique passe de 5 J à 25 J, quel est le travail des forces extérieures ?",
            answers: [
              "20 J",
              "30 J",
              "5 J",
              "25 J"
            ],
            correct: 0,
            explanation: "ΔEc = 25 J - 5 J = 20 J."
          },
          {
            type: "mcq",
            question: "Si le travail des forces extérieures est de -12 J, comment varie l'énergie cinétique ?",
            answers: [
              "Elle diminue de 12 J",
              "Elle augmente de 12 J",
              "Elle reste la même",
              "Elle devient nulle"
            ],
            correct: 0,
            explanation: "ΔEc = W(F) = -12 J."
          }
        ],
        [
          {
            type: "mcq",
            question: "Si l'énergie cinétique passe de 8 J à 32 J, quel est le travail des forces extérieures ?",
            answers: [
              "24 J",
              "40 J",
              "8 J",
              "32 J"
            ],
            correct: 0,
            explanation: "ΔEc = 32 J - 8 J = 24 J."
          },
          {
            type: "mcq",
            question: "Si le travail des forces extérieures est de 20 J, comment varie l'énergie cinétique ?",
            answers: [
              "Elle augmente de 20 J",
              "Elle diminue de 20 J",
              "Elle reste la même",
              "Elle devient nulle"
            ],
            correct: 0,
            explanation: "ΔEc = W(F) = 20 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie cinétique passe de 18 J à 42 J, quel est le travail des forces extérieures ?",
            answers: [
              "24 J",
              "60 J",
              "18 J",
              "42 J"
            ],
            correct: 0,
            explanation: "ΔEc = 42 J - 18 J = 24 J."
          },
          {
            type: "mcq",
            question: "Si le travail des forces extérieures est de -18 J, comment varie l'énergie cinétique ?",
            answers: [
              "Elle diminue de 18 J",
              "Elle augmente de 18 J",
              "Elle reste la même",
              "Elle devient nulle"
            ],
            correct: 0,
            explanation: "ΔEc = W(F) = -18 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie cinétique passe de 25 J à 25 J, quel est le travail des forces extérieures ?",
            answers: [
              "0 J",
              "25 J",
              "50 J",
              "12.5 J"
            ],
            correct: 0,
            explanation: "ΔEc = 25 J - 25 J = 0 J."
          },
          {
            type: "mcq",
            question: "Si le travail des forces extérieures est de 25 J, comment varie l'énergie cinétique ?",
            answers: [
              "Elle augmente de 25 J",
              "Elle diminue de 25 J",
              "Elle reste la même",
              "Elle devient nulle"
            ],
            correct: 0,
            explanation: "ΔEc = W(F) = 25 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie cinétique passe de 30 J à 10 J, quel est le travail des forces extérieures ?",
            answers: [
              "-20 J",
              "20 J",
              "30 J",
              "40 J"
            ],
            correct: 0,
            explanation: "ΔEc = 10 J - 30 J = -20 J."
          },
          {
            type: "mcq",
            question: "Si le travail des forces extérieures est de 0 J, comment varie l'énergie cinétique ?",
            answers: [
              "Elle reste constante",
              "Elle augmente",
              "Elle diminue",
              "Elle devient nulle"
            ],
            correct: 0,
            explanation: "Si W(F) = 0, alors ΔEc = 0."
          },
          {
            type: "mcq",
            question: "Si l'énergie cinétique passe de 10 J à 50 J, quel est le travail des forces extérieures ?",
            answers: [
              "40 J",
              "60 J",
              "10 J",
              "50 J"
            ],
            correct: 0,
            explanation: "ΔEc = 50 J - 10 J = 40 J."
          },
          {
            type: "mcq",
            question: "Si le travail des forces extérieures est de -25 J, comment varie l'énergie cinétique ?",
            answers: [
              "Elle diminue de 25 J",
              "Elle augmente de 25 J",
              "Elle reste la même",
              "Elle devient nulle"
            ],
            correct: 0,
            explanation: "ΔEc = W(F) = -25 J."
          }
        ],
        [
          {
            type: "mcq",
            question: "Si l'énergie cinétique passe de 15 J à 75 J, quel est le travail des forces extérieures ?",
            answers: [
              "60 J",
              "90 J",
              "15 J",
              "75 J"
            ],
            correct: 0,
            explanation: "ΔEc = 75 J - 15 J = 60 J."
          },
          {
            type: "mcq",
            question: "Si le travail des forces extérieures est de 30 J, comment varie l'énergie cinétique ?",
            answers: [
              "Elle augmente de 30 J",
              "Elle diminue de 30 J",
              "Elle reste la même",
              "Elle devient nulle"
            ],
            correct: 0,
            explanation: "ΔEc = W(F) = 30 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie cinétique passe de 40 J à 100 J, quel est le travail des forces extérieures ?",
            answers: [
              "60 J",
              "140 J",
              "40 J",
              "100 J"
            ],
            correct: 0,
            explanation: "ΔEc = 100 J - 40 J = 60 J."
          },
          {
            type: "mcq",
            question: "Si le travail des forces extérieures est de -30 J, comment varie l'énergie cinétique ?",
            answers: [
              "Elle diminue de 30 J",
              "Elle augmente de 30 J",
              "Elle reste la même",
              "Elle devient nulle"
            ],
            correct: 0,
            explanation: "ΔEc = W(F) = -30 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie cinétique passe de 50 J à 50 J, quel est le travail des forces extérieures ?",
            answers: [
              "0 J",
              "50 J",
              "100 J",
              "25 J"
            ],
            correct: 0,
            explanation: "ΔEc = 50 J - 50 J = 0 J."
          },
          {
            type: "mcq",
            question: "Si le travail des forces extérieures est de 35 J, comment varie l'énergie cinétique ?",
            answers: [
              "Elle augmente de 35 J",
              "Elle diminue de 35 J",
              "Elle reste la même",
              "Elle devient nulle"
            ],
            correct: 0,
            explanation: "ΔEc = W(F) = 35 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie cinétique passe de 60 J à 20 J, quel est le travail des forces extérieures ?",
            answers: [
              "-40 J",
              "40 J",
              "60 J",
              "80 J"
            ],
            correct: 0,
            explanation: "ΔEc = 20 J - 60 J = -40 J."
          },
          {
            type: "mcq",
            question: "Si le travail des forces extérieures est de 0 J, comment varie l'énergie cinétique ?",
            answers: [
              "Elle reste constante",
              "Elle augmente",
              "Elle diminue",
              "Elle devient nulle"
            ],
            correct: 0,
            explanation: "Si W(F) = 0, alors ΔEc = 0."
          },
          {
            type: "mcq",
            question: "Si l'énergie cinétique passe de 20 J à 100 J, quel est le travail des forces extérieures ?",
            answers: [
              "80 J",
              "120 J",
              "20 J",
              "100 J"
            ],
            correct: 0,
            explanation: "ΔEc = 100 J - 20 J = 80 J."
          },
          {
            type: "mcq",
            question: "Si le travail des forces extérieures est de -35 J, comment varie l'énergie cinétique ?",
            answers: [
              "Elle diminue de 35 J",
              "Elle augmente de 35 J",
              "Elle reste la même",
              "Elle devient nulle"
            ],
            correct: 0,
            explanation: "ΔEc = W(F) = -35 J."
          }
        ],
        [
          {
            type: "mcq",
            question: "Si l'énergie cinétique passe de 25 J à 125 J, quel est le travail des forces extérieures ?",
            answers: [
              "100 J",
              "150 J",
              "25 J",
              "125 J"
            ],
            correct: 0,
            explanation: "ΔEc = 125 J - 25 J = 100 J."
          },
          {
            type: "mcq",
            question: "Si le travail des forces extérieures est de 40 J, comment varie l'énergie cinétique ?",
            answers: [
              "Elle augmente de 40 J",
              "Elle diminue de 40 J",
              "Elle reste la même",
              "Elle devient nulle"
            ],
            correct: 0,
            explanation: "ΔEc = W(F) = 40 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie cinétique passe de 75 J à 175 J, quel est le travail des forces extérieures ?",
            answers: [
              "100 J",
              "250 J",
              "75 J",
              "175 J"
            ],
            correct: 0,
            explanation: "ΔEc = 175 J - 75 J = 100 J."
          },
          {
            type: "mcq",
            question: "Si le travail des forces extérieures est de -40 J, comment varie l'énergie cinétique ?",
            answers: [
              "Elle diminue de 40 J",
              "Elle augmente de 40 J",
              "Elle reste la même",
              "Elle devient nulle"
            ],
            correct: 0,
            explanation: "ΔEc = W(F) = -40 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie cinétique passe de 100 J à 100 J, quel est le travail des forces extérieures ?",
            answers: [
              "0 J",
              "100 J",
              "200 J",
              "50 J"
            ],
            correct: 0,
            explanation: "ΔEc = 100 J - 100 J = 0 J."
          },
          {
            type: "mcq",
            question: "Si le travail des forces extérieures est de 45 J, comment varie l'énergie cinétique ?",
            answers: [
              "Elle augmente de 45 J",
              "Elle diminue de 45 J",
              "Elle reste la même",
              "Elle devient nulle"
            ],
            correct: 0,
            explanation: "ΔEc = W(F) = 45 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie cinétique passe de 125 J à 25 J, quel est le travail des forces extérieures ?",
            answers: [
              "-100 J",
              "100 J",
              "125 J",
              "25 J"
            ],
            correct: 0,
            explanation: "ΔEc = 25 J - 125 J = -100 J."
          },
          {
            type: "mcq",
            question: "Si le travail des forces extérieures est de 0 J, comment varie l'énergie cinétique ?",
            answers: [
              "Elle reste constante",
              "Elle augmente",
              "Elle diminue",
              "Elle devient nulle"
            ],
            correct: 0,
            explanation: "Si W(F) = 0, alors ΔEc = 0."
          },
          {
            type: "mcq",
            question: "Si l'énergie cinétique passe de 50 J à 200 J, quel est le travail des forces extérieures ?",
            answers: [
              "150 J",
              "250 J",
              "50 J",
              "200 J"
            ],
            correct: 0,
            explanation: "ΔEc = 200 J - 50 J = 150 J."
          },
          {
            type: "mcq",
            question: "Si le travail des forces extérieures est de -45 J, comment varie l'énergie cinétique ?",
            answers: [
              "Elle diminue de 45 J",
              "Elle augmente de 45 J",
              "Elle reste la même",
              "Elle devient nulle"
            ],
            correct: 0,
            explanation: "ΔEc = W(F) = -45 J."
          }
        ],
        [
          {
            type: "mcq",
            question: "Si l'énergie cinétique passe de 200 J à 500 J, quel est le travail des forces extérieures ?",
            answers: [
              "300 J",
              "700 J",
              "200 J",
              "500 J"
            ],
            correct: 0,
            explanation: "ΔEc = 500 J - 200 J = 300 J."
          },
          {
            type: "mcq",
            question: "Si le travail des forces extérieures est de 50 J, comment varie l'énergie cinétique ?",
            answers: [
              "Elle augmente de 50 J",
              "Elle diminue de 50 J",
              "Elle reste la même",
              "Elle devient nulle"
            ],
            correct: 0,
            explanation: "ΔEc = W(F) = 50 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie cinétique passe de 250 J à 600 J, quel est le travail des forces extérieures ?",
            answers: [
              "350 J",
              "850 J",
              "250 J",
              "600 J"
            ],
            correct: 0,
            explanation: "ΔEc = 600 J - 250 J = 350 J."
          },
          {
            type: "mcq",
            question: "Si le travail des forces extérieures est de -50 J, comment varie l'énergie cinétique ?",
            answers: [
              "Elle diminue de 50 J",
              "Elle augmente de 50 J",
              "Elle reste la même",
              "Elle devient nulle"
            ],
            correct: 0,
            explanation: "ΔEc = W(F) = -50 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie cinétique passe de 300 J à 300 J, quel est le travail des forces extérieures ?",
            answers: [
              "0 J",
              "300 J",
              "600 J",
              "150 J"
            ],
            correct: 0,
            explanation: "ΔEc = 300 J - 300 J = 0 J."
          },
          {
            type: "mcq",
            question: "Si le travail des forces extérieures est de 55 J, comment varie l'énergie cinétique ?",
            answers: [
              "Elle augmente de 55 J",
              "Elle diminue de 55 J",
              "Elle reste la même",
              "Elle devient nulle"
            ],
            correct: 0,
            explanation: "ΔEc = W(F) = 55 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie cinétique passe de 350 J à 150 J, quel est le travail des forces extérieures ?",
            answers: [
              "-200 J",
              "200 J",
              "350 J",
              "150 J"
            ],
            correct: 0,
            explanation: "ΔEc = 150 J - 350 J = -200 J."
          },
          {
            type: "mcq",
            question: "Si le travail des forces extérieures est de 0 J, comment varie l'énergie cinétique ?",
            answers: [
              "Elle reste constante",
              "Elle augmente",
              "Elle diminue",
              "Elle devient nulle"
            ],
            correct: 0,
            explanation: "Si W(F) = 0, alors ΔEc = 0."
          },
          {
            type: "mcq",
            question: "Si l'énergie cinétique passe de 400 J à 1000 J, quel est le travail des forces extérieures ?",
            answers: [
              "600 J",
              "1400 J",
              "400 J",
              "1000 J"
            ],
            correct: 0,
            explanation: "ΔEc = 1000 J - 400 J = 600 J."
          },
          {
            type: "mcq",
            question: "Si le travail des forces extérieures est de -55 J, comment varie l'énergie cinétique ?",
            answers: [
              "Elle diminue de 55 J",
              "Elle augmente de 55 J",
              "Elle reste la même",
              "Elle devient nulle"
            ],
            correct: 0,
            explanation: "ΔEc = W(F) = -55 J."
          }
        ]
      ]
    },
    {
      id: "energie-potentielle-gravitationnelle",
      label: "Énergie potentielle gravitationnelle",
      icon: "📌",
      lesson: {
        formula: "Epp = m * g * h",
        text: "L'énergie potentielle gravitationnelle est l'énergie que possède un corps du fait de sa position dans un champ de gravité.",
        example: "Un objet de 2 kg à 5 m de hauteur a une énergie potentielle de Epp = 2 * 9.81 * 5 ≈ 98.1 J."
      },
      fullBlocks: [
        {
          type: "definition",
          text: "L'énergie potentielle gravitationnelle dépend de la masse, de l'accélération gravitationnelle et de la hauteur."
        },
        {
          type: "formula",
          text: "Epp = m * g * h"
        },
        {
          type: "example",
          text: "Un objet de 3 kg à 10 m de hauteur a une énergie potentielle de Epp = 3 * 9.81 * 10 ≈ 294.3 J."
        }
      ],
      levels: [
        [
          {
            type: "mcq",
            question: "Quelle est l'unité de l'énergie potentielle gravitationnelle ?",
            answers: [
              "Joule (J)",
              "Newton (N)",
              "Watt (W)",
              "Pascal (Pa)"
            ],
            correct: 0,
            explanation: "L'énergie potentielle gravitationnelle s'exprime en Joule (J)."
          },
          {
            type: "mcq",
            question: "Quelle formule permet de calculer l'énergie potentielle gravitationnelle ?",
            answers: [
              "Epp = m * g * h",
              "Epp = m * v²",
              "Epp = F * d",
              "Epp = 1/2 * m * v²"
            ],
            correct: 0,
            explanation: "La formule correcte est Epp = m * g * h."
          },
          {
            type: "mcq",
            question: "Si la hauteur double, comment varie l'énergie potentielle gravitationnelle ?",
            answers: [
              "Elle double",
              "Elle quadruple",
              "Elle reste la même",
              "Elle est divisée par deux"
            ],
            correct: 0,
            explanation: "L'énergie potentielle gravitationnelle est directement proportionnelle à la hauteur."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie potentielle gravitationnelle d'un objet de 2 kg à 5 m de hauteur ?",
            answers: [
              "98.1 J",
              "49.05 J",
              "196.2 J",
              "24.5 J"
            ],
            correct: 0,
            explanation: "Epp = 2 * 9.81 * 5 ≈ 98.1 J."
          },
          {
            type: "mcq",
            question: "Si la masse double, comment varie l'énergie potentielle gravitationnelle ?",
            answers: [
              "Elle double",
              "Elle quadruple",
              "Elle reste la même",
              "Elle est divisée par deux"
            ],
            correct: 0,
            explanation: "L'énergie potentielle gravitationnelle est directement proportionnelle à la masse."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie potentielle gravitationnelle d'un objet de 3 kg à 10 m de hauteur ?",
            answers: [
              "294.3 J",
              "147.15 J",
              "588.6 J",
              "73.5 J"
            ],
            correct: 0,
            explanation: "Epp = 3 * 9.81 * 10 ≈ 294.3 J."
          },
          {
            type: "mcq",
            question: "Si la hauteur est nulle, quelle est l'énergie potentielle gravitationnelle ?",
            answers: [
              "0 J",
              "Infinie",
              "Indéterminée",
              "1 J"
            ],
            correct: 0,
            explanation: "Si la hauteur est nulle, l'énergie potentielle gravitationnelle est nulle."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie potentielle gravitationnelle d'un objet de 1 kg à 1 m de hauteur ?",
            answers: [
              "9.81 J",
              "4.905 J",
              "19.62 J",
              "2.45 J"
            ],
            correct: 0,
            explanation: "Epp = 1 * 9.81 * 1 ≈ 9.81 J."
          },
          {
            type: "mcq",
            question: "Si la hauteur est multipliée par 3, comment varie l'énergie potentielle gravitationnelle ?",
            answers: [
              "Elle est multipliée par 3",
              "Elle est multipliée par 9",
              "Elle reste la même",
              "Elle est divisée par 3"
            ],
            correct: 0,
            explanation: "L'énergie potentielle gravitationnelle est directement proportionnelle à la hauteur."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie potentielle gravitationnelle d'un objet de 4 kg à 2 m de hauteur ?",
            answers: [
              "78.48 J",
              "39.24 J",
              "156.96 J",
              "19.62 J"
            ],
            correct: 0,
            explanation: "Epp = 4 * 9.81 * 2 ≈ 78.48 J."
          }
        ],
        [
          {
            type: "mcq",
            question: "Calculer l'énergie potentielle gravitationnelle d'un objet de 5 kg à 8 m de hauteur.",
            answers: [
              "392.4 J",
              "196.2 J",
              "784.8 J",
              "98.1 J"
            ],
            correct: 0,
            explanation: "Epp = 5 * 9.81 * 8 ≈ 392.4 J."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie potentielle gravitationnelle d'un objet de 6 kg à 3 m de hauteur ?",
            answers: [
              "176.58 J",
              "88.29 J",
              "353.16 J",
              "44.1 J"
            ],
            correct: 0,
            explanation: "Epp = 6 * 9.81 * 3 ≈ 176.58 J."
          },
          {
            type: "mcq",
            question: "Si la hauteur est divisée par 2, comment varie l'énergie potentielle gravitationnelle ?",
            answers: [
              "Elle est divisée par 2",
              "Elle est divisée par 4",
              "Elle reste la même",
              "Elle est multipliée par 2"
            ],
            correct: 0,
            explanation: "L'énergie potentielle gravitationnelle est directement proportionnelle à la hauteur."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie potentielle gravitationnelle d'un objet de 7 kg à 6 m de hauteur ?",
            answers: [
              "412.02 J",
              "206.01 J",
              "824.04 J",
              "103 J"
            ],
            correct: 0,
            explanation: "Epp = 7 * 9.81 * 6 ≈ 412.02 J."
          },
          {
            type: "mcq",
            question: "Si la masse est divisée par 2, comment varie l'énergie potentielle gravitationnelle ?",
            answers: [
              "Elle est divisée par 2",
              "Elle est divisée par 4",
              "Elle reste la même",
              "Elle est multipliée par 2"
            ],
            correct: 0,
            explanation: "L'énergie potentielle gravitationnelle est directement proportionnelle à la masse."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie potentielle gravitationnelle d'un objet de 8 kg à 4 m de hauteur ?",
            answers: [
              "313.92 J",
              "156.96 J",
              "627.84 J",
              "78.48 J"
            ],
            correct: 0,
            explanation: "Epp = 8 * 9.81 * 4 ≈ 313.92 J."
          },
          {
            type: "mcq",
            question: "Si la hauteur est multipliée par 4, comment varie l'énergie potentielle gravitationnelle ?",
            answers: [
              "Elle est multipliée par 4",
              "Elle est multipliée par 16",
              "Elle reste la même",
              "Elle est divisée par 4"
            ],
            correct: 0,
            explanation: "L'énergie potentielle gravitationnelle est directement proportionnelle à la hauteur."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie potentielle gravitationnelle d'un objet de 9 kg à 9 m de hauteur ?",
            answers: [
              "793.89 J",
              "396.9 J",
              "1587.78 J",
              "198.45 J"
            ],
            correct: 0,
            explanation: "Epp = 9 * 9.81 * 9 ≈ 793.89 J."
          },
          {
            type: "mcq",
            question: "Si la masse est multipliée par 3, comment varie l'énergie potentielle gravitationnelle ?",
            answers: [
              "Elle est multipliée par 3",
              "Elle est multipliée par 9",
              "Elle reste la même",
              "Elle est divisée par 3"
            ],
            correct: 0,
            explanation: "L'énergie potentielle gravitationnelle est directement proportionnelle à la masse."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie potentielle gravitationnelle d'un objet de 10 kg à 10 m de hauteur ?",
            answers: [
              "981 J",
              "490.5 J",
              "1962 J",
              "245.25 J"
            ],
            correct: 0,
            explanation: "Epp = 10 * 9.81 * 10 ≈ 981 J."
          }
        ],
        [
          {
            type: "mcq",
            question: "Calculer l'énergie potentielle gravitationnelle d'un objet de 12 kg à 15 m de hauteur.",
            answers: [
              "1765.8 J",
              "882.9 J",
              "3531.6 J",
              "441.45 J"
            ],
            correct: 0,
            explanation: "Epp = 12 * 9.81 * 15 ≈ 1765.8 J."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie potentielle gravitationnelle d'un objet de 14 kg à 7 m de hauteur ?",
            answers: [
              "962.78 J",
              "481.39 J",
              "1925.56 J",
              "240.69 J"
            ],
            correct: 0,
            explanation: "Epp = 14 * 9.81 * 7 ≈ 962.78 J."
          },
          {
            type: "mcq",
            question: "Si la hauteur est divisée par 3, comment varie l'énergie potentielle gravitationnelle ?",
            answers: [
              "Elle est divisée par 3",
              "Elle est divisée par 9",
              "Elle reste la même",
              "Elle est multipliée par 3"
            ],
            correct: 0,
            explanation: "L'énergie potentielle gravitationnelle est directement proportionnelle à la hauteur."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie potentielle gravitationnelle d'un objet de 16 kg à 12 m de hauteur ?",
            answers: [
              "1883.52 J",
              "941.76 J",
              "3767.04 J",
              "470.88 J"
            ],
            correct: 0,
            explanation: "Epp = 16 * 9.81 * 12 ≈ 1883.52 J."
          },
          {
            type: "mcq",
            question: "Si la masse est divisée par 4, comment varie l'énergie potentielle gravitationnelle ?",
            answers: [
              "Elle est divisée par 4",
              "Elle est divisée par 16",
              "Elle reste la même",
              "Elle est multipliée par 4"
            ],
            correct: 0,
            explanation: "L'énergie potentielle gravitationnelle est directement proportionnelle à la masse."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie potentielle gravitationnelle d'un objet de 18 kg à 18 m de hauteur ?",
            answers: [
              "3175.38 J",
              "1587.69 J",
              "6350.76 J",
              "793.8 J"
            ],
            correct: 0,
            explanation: "Epp = 18 * 9.81 * 18 ≈ 3175.38 J."
          },
          {
            type: "mcq",
            question: "Si la hauteur est multipliée par 5, comment varie l'énergie potentielle gravitationnelle ?",
            answers: [
              "Elle est multipliée par 5",
              "Elle est multipliée par 25",
              "Elle reste la même",
              "Elle est divisée par 5"
            ],
            correct: 0,
            explanation: "L'énergie potentielle gravitationnelle est directement proportionnelle à la hauteur."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie potentielle gravitationnelle d'un objet de 20 kg à 20 m de hauteur ?",
            answers: [
              "3924 J",
              "1962 J",
              "7848 J",
              "981 J"
            ],
            correct: 0,
            explanation: "Epp = 20 * 9.81 * 20 ≈ 3924 J."
          },
          {
            type: "mcq",
            question: "Si la masse est multipliée par 5, comment varie l'énergie potentielle gravitationnelle ?",
            answers: [
              "Elle est multipliée par 5",
              "Elle est multipliée par 25",
              "Elle reste la même",
              "Elle est divisée par 5"
            ],
            correct: 0,
            explanation: "L'énergie potentielle gravitationnelle est directement proportionnelle à la masse."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie potentielle gravitationnelle d'un objet de 22 kg à 11 m de hauteur ?",
            answers: [
              "2376.06 J",
              "1188.03 J",
              "4752.12 J",
              "594.015 J"
            ],
            correct: 0,
            explanation: "Epp = 22 * 9.81 * 11 ≈ 2376.06 J."
          }
        ],
        [
          {
            type: "mcq",
            question: "Calculer l'énergie potentielle gravitationnelle d'un objet de 25 kg à 25 m de hauteur.",
            answers: [
              "6068.75 J",
              "3034.375 J",
              "12137.5 J",
              "1517.1875 J"
            ],
            correct: 0,
            explanation: "Epp = 25 * 9.81 * 25 ≈ 6068.75 J."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie potentielle gravitationnelle d'un objet de 28 kg à 14 m de hauteur ?",
            answers: [
              "3865.68 J",
              "1932.84 J",
              "7731.36 J",
              "966.42 J"
            ],
            correct: 0,
            explanation: "Epp = 28 * 9.81 * 14 ≈ 3865.68 J."
          },
          {
            type: "mcq",
            question: "Si la hauteur est divisée par 5, comment varie l'énergie potentielle gravitationnelle ?",
            answers: [
              "Elle est divisée par 5",
              "Elle est divisée par 25",
              "Elle reste la même",
              "Elle est multipliée par 5"
            ],
            correct: 0,
            explanation: "L'énergie potentielle gravitationnelle est directement proportionnelle à la hauteur."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie potentielle gravitationnelle d'un objet de 30 kg à 30 m de hauteur ?",
            answers: [
              "8829 J",
              "4414.5 J",
              "17658 J",
              "2207.25 J"
            ],
            correct: 0,
            explanation: "Epp = 30 * 9.81 * 30 ≈ 8829 J."
          },
          {
            type: "mcq",
            question: "Si la masse est divisée par 10, comment varie l'énergie potentielle gravitationnelle ?",
            answers: [
              "Elle est divisée par 10",
              "Elle est divisée par 100",
              "Elle reste la même",
              "Elle est multipliée par 10"
            ],
            correct: 0,
            explanation: "L'énergie potentielle gravitationnelle est directement proportionnelle à la masse."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie potentielle gravitationnelle d'un objet de 35 kg à 35 m de hauteur ?",
            answers: [
              "12053.55 J",
              "6026.775 J",
              "24107.1 J",
              "3013.3875 J"
            ],
            correct: 0,
            explanation: "Epp = 35 * 9.81 * 35 ≈ 12053.55 J."
          },
          {
            type: "mcq",
            question: "Si la hauteur est multipliée par 10, comment varie l'énergie potentielle gravitationnelle ?",
            answers: [
              "Elle est multipliée par 10",
              "Elle est multipliée par 100",
              "Elle reste la même",
              "Elle est divisée par 10"
            ],
            correct: 0,
            explanation: "L'énergie potentielle gravitationnelle est directement proportionnelle à la hauteur."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie potentielle gravitationnelle d'un objet de 40 kg à 40 m de hauteur ?",
            answers: [
              "15696 J",
              "7848 J",
              "31392 J",
              "3924 J"
            ],
            correct: 0,
            explanation: "Epp = 40 * 9.81 * 40 ≈ 15696 J."
          },
          {
            type: "mcq",
            question: "Si la masse est multipliée par 10, comment varie l'énergie potentielle gravitationnelle ?",
            answers: [
              "Elle est multipliée par 10",
              "Elle est multipliée par 100",
              "Elle reste la même",
              "Elle est divisée par 10"
            ],
            correct: 0,
            explanation: "L'énergie potentielle gravitationnelle est directement proportionnelle à la masse."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie potentielle gravitationnelle d'un objet de 45 kg à 45 m de hauteur ?",
            answers: [
              "19847.25 J",
              "9923.625 J",
              "39694.5 J",
              "4961.8125 J"
            ],
            correct: 0,
            explanation: "Epp = 45 * 9.81 * 45 ≈ 19847.25 J."
          }
        ],
        [
          {
            type: "mcq",
            question: "Calculer l'énergie potentielle gravitationnelle d'un objet de 50 kg à 50 m de hauteur.",
            answers: [
              "24525 J",
              "12262.5 J",
              "49050 J",
              "6131.25 J"
            ],
            correct: 0,
            explanation: "Epp = 50 * 9.81 * 50 ≈ 24525 J."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie potentielle gravitationnelle d'un objet de 55 kg à 55 m de hauteur ?",
            answers: [
              "29433.15 J",
              "14716.575 J",
              "58866.3 J",
              "7358.2875 J"
            ],
            correct: 0,
            explanation: "Epp = 55 * 9.81 * 55 ≈ 29433.15 J."
          },
          {
            type: "mcq",
            question: "Si la hauteur est divisée par 10, comment varie l'énergie potentielle gravitationnelle ?",
            answers: [
              "Elle est divisée par 10",
              "Elle est divisée par 100",
              "Elle reste la même",
              "Elle est multipliée par 10"
            ],
            correct: 0,
            explanation: "L'énergie potentielle gravitationnelle est directement proportionnelle à la hauteur."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie potentielle gravitationnelle d'un objet de 60 kg à 60 m de hauteur ?",
            answers: [
              "35280 J",
              "17640 J",
              "70560 J",
              "8820 J"
            ],
            correct: 0,
            explanation: "Epp = 60 * 9.81 * 60 ≈ 35280 J."
          },
          {
            type: "mcq",
            question: "Si la masse est divisée par 20, comment varie l'énergie potentielle gravitationnelle ?",
            answers: [
              "Elle est divisée par 20",
              "Elle est divisée par 400",
              "Elle reste la même",
              "Elle est multipliée par 20"
            ],
            correct: 0,
            explanation: "L'énergie potentielle gravitationnelle est directement proportionnelle à la masse."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie potentielle gravitationnelle d'un objet de 65 kg à 65 m de hauteur ?",
            answers: [
              "41668.65 J",
              "20834.325 J",
              "83337.3 J",
              "10417.1625 J"
            ],
            correct: 0,
            explanation: "Epp = 65 * 9.81 * 65 ≈ 41668.65 J."
          },
          {
            type: "mcq",
            question: "Si la hauteur est multipliée par 20, comment varie l'énergie potentielle gravitationnelle ?",
            answers: [
              "Elle est multipliée par 20",
              "Elle est multipliée par 400",
              "Elle reste la même",
              "Elle est divisée par 20"
            ],
            correct: 0,
            explanation: "L'énergie potentielle gravitationnelle est directement proportionnelle à la hauteur."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie potentielle gravitationnelle d'un objet de 70 kg à 70 m de hauteur ?",
            answers: [
              "48078 J",
              "24039 J",
              "96156 J",
              "12019.5 J"
            ],
            correct: 0,
            explanation: "Epp = 70 * 9.81 * 70 ≈ 48078 J."
          },
          {
            type: "mcq",
            question: "Si la masse est multipliée par 20, comment varie l'énergie potentielle gravitationnelle ?",
            answers: [
              "Elle est multipliée par 20",
              "Elle est multipliée par 400",
              "Elle reste la même",
              "Elle est divisée par 20"
            ],
            correct: 0,
            explanation: "L'énergie potentielle gravitationnelle est directement proportionnelle à la masse."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie potentielle gravitationnelle d'un objet de 75 kg à 75 m de hauteur ?",
            answers: [
              "55158.75 J",
              "27579.375 J",
              "110317.5 J",
              "13789.6875 J"
            ],
            correct: 0,
            explanation: "Epp = 75 * 9.81 * 75 ≈ 55158.75 J."
          }
        ],
        [
          {
            type: "mcq",
            question: "Calculer l'énergie potentielle gravitationnelle d'un objet de 80 kg à 80 m de hauteur.",
            answers: [
              "62784 J",
              "31392 J",
              "125568 J",
              "15696 J"
            ],
            correct: 0,
            explanation: "Epp = 80 * 9.81 * 80 ≈ 62784 J."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie potentielle gravitationnelle d'un objet de 85 kg à 85 m de hauteur ?",
            answers: [
              "70095.45 J",
              "35047.725 J",
              "140190.9 J",
              "17523.8625 J"
            ],
            correct: 0,
            explanation: "Epp = 85 * 9.81 * 85 ≈ 70095.45 J."
          },
          {
            type: "mcq",
            question: "Si la hauteur est divisée par 20, comment varie l'énergie potentielle gravitationnelle ?",
            answers: [
              "Elle est divisée par 20",
              "Elle est divisée par 400",
              "Elle reste la même",
              "Elle est multipliée par 20"
            ],
            correct: 0,
            explanation: "L'énergie potentielle gravitationnelle est directement proportionnelle à la hauteur."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie potentielle gravitationnelle d'un objet de 90 kg à 90 m de hauteur ?",
            answers: [
              "79380 J",
              "39690 J",
              "158760 J",
              "19845 J"
            ],
            correct: 0,
            explanation: "Epp = 90 * 9.81 * 90 ≈ 79380 J."
          },
          {
            type: "mcq",
            question: "Si la masse est divisée par 50, comment varie l'énergie potentielle gravitationnelle ?",
            answers: [
              "Elle est divisée par 50",
              "Elle est divisée par 2500",
              "Elle reste la même",
              "Elle est multipliée par 50"
            ],
            correct: 0,
            explanation: "L'énergie potentielle gravitationnelle est directement proportionnelle à la masse."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie potentielle gravitationnelle d'un objet de 95 kg à 95 m de hauteur ?",
            answers: [
              "88594.35 J",
              "44297.175 J",
              "177188.7 J",
              "22148.5875 J"
            ],
            correct: 0,
            explanation: "Epp = 95 * 9.81 * 95 ≈ 88594.35 J."
          },
          {
            type: "mcq",
            question: "Si la hauteur est multipliée par 50, comment varie l'énergie potentielle gravitationnelle ?",
            answers: [
              "Elle est multipliée par 50",
              "Elle est multipliée par 2500",
              "Elle reste la même",
              "Elle est divisée par 50"
            ],
            correct: 0,
            explanation: "L'énergie potentielle gravitationnelle est directement proportionnelle à la hauteur."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie potentielle gravitationnelle d'un objet de 100 kg à 100 m de hauteur ?",
            answers: [
              "98100 J",
              "49050 J",
              "196200 J",
              "24525 J"
            ],
            correct: 0,
            explanation: "Epp = 100 * 9.81 * 100 ≈ 98100 J."
          },
          {
            type: "mcq",
            question: "Si la masse est multipliée par 50, comment varie l'énergie potentielle gravitationnelle ?",
            answers: [
              "Elle est multipliée par 50",
              "Elle est multipliée par 2500",
              "Elle reste la même",
              "Elle est divisée par 50"
            ],
            correct: 0,
            explanation: "L'énergie potentielle gravitationnelle est directement proportionnelle à la masse."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie potentielle gravitationnelle d'un objet de 105 kg à 105 m de hauteur ?",
            answers: [
              "107950.05 J",
              "53975.025 J",
              "215900.1 J",
              "26987.5125 J"
            ],
            correct: 0,
            explanation: "Epp = 105 * 9.81 * 105 ≈ 107950.05 J."
          }
        ]
      ]
    },
    {
      id: "energie-potentielle-electrique",
      label: "Énergie potentielle électrique",
      icon: "📌",
      lesson: {
        formula: "Epe = q * V",
        text: "L'énergie potentielle électrique est l'énergie que possède une charge électrique du fait de sa position dans un champ électrique.",
        example: "Une charge de 2 C dans un potentiel de 5 V a une énergie potentielle de Epe = 2 * 5 = 10 J."
      },
      fullBlocks: [
        {
          type: "definition",
          text: "L'énergie potentielle électrique dépend de la charge et du potentiel électrique."
        },
        {
          type: "formula",
          text: "Epe = q * V"
        },
        {
          type: "example",
          text: "Une charge de 3 C dans un potentiel de 10 V a une énergie potentielle de Epe = 3 * 10 = 30 J."
        }
      ],
      levels: [
        [
          {
            type: "mcq",
            question: "Quelle est l'unité de l'énergie potentielle électrique ?",
            answers: [
              "Joule (J)",
              "Coulomb (C)",
              "Volt (V)",
              "Ampère (A)"
            ],
            correct: 0,
            explanation: "L'énergie potentielle électrique s'exprime en Joule (J)."
          },
          {
            type: "mcq",
            question: "Quelle formule permet de calculer l'énergie potentielle électrique ?",
            answers: [
              "Epe = q * V",
              "Epe = q / V",
              "Epe = V / q",
              "Epe = q² * V"
            ],
            correct: 0,
            explanation: "La formule correcte est Epe = q * V."
          },
          {
            type: "mcq",
            question: "Si la charge double, comment varie l'énergie potentielle électrique ?",
            answers: [
              "Elle double",
              "Elle quadruple",
              "Elle reste la même",
              "Elle est divisée par deux"
            ],
            correct: 0,
            explanation: "L'énergie potentielle électrique est directement proportionnelle à la charge."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie potentielle électrique d'une charge de 2 C dans un potentiel de 5 V ?",
            answers: [
              "10 J",
              "2.5 J",
              "20 J",
              "5 J"
            ],
            correct: 0,
            explanation: "Epe = 2 * 5 = 10 J."
          },
          {
            type: "mcq",
            question: "Si le potentiel double, comment varie l'énergie potentielle électrique ?",
            answers: [
              "Elle double",
              "Elle quadruple",
              "Elle reste la même",
              "Elle est divisée par deux"
            ],
            correct: 0,
            explanation: "L'énergie potentielle électrique est directement proportionnelle au potentiel."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie potentielle électrique d'une charge de 3 C dans un potentiel de 10 V ?",
            answers: [
              "30 J",
              "15 J",
              "60 J",
              "7.5 J"
            ],
            correct: 0,
            explanation: "Epe = 3 * 10 = 30 J."
          },
          {
            type: "mcq",
            question: "Si la charge est nulle, quelle est l'énergie potentielle électrique ?",
            answers: [
              "0 J",
              "Infinie",
              "Indéterminée",
              "1 J"
            ],
            correct: 0,
            explanation: "Si la charge est nulle, l'énergie potentielle électrique est nulle."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie potentielle électrique d'une charge de 1 C dans un potentiel de 1 V ?",
            answers: [
              "1 J",
              "0.5 J",
              "2 J",
              "0 J"
            ],
            correct: 0,
            explanation: "Epe = 1 * 1 = 1 J."
          },
          {
            type: "mcq",
            question: "Si le potentiel est multiplié par 3, comment varie l'énergie potentielle électrique ?",
            answers: [
              "Elle est multipliée par 3",
              "Elle est multipliée par 9",
              "Elle reste la même",
              "Elle est divisée par 3"
            ],
            correct: 0,
            explanation: "L'énergie potentielle électrique est directement proportionnelle au potentiel."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie potentielle électrique d'une charge de 4 C dans un potentiel de 2 V ?",
            answers: [
              "8 J",
              "4 J",
              "16 J",
              "2 J"
            ],
            correct: 0,
            explanation: "Epe = 4 * 2 = 8 J."
          }
        ],
        [
          {
            type: "mcq",
            question: "Calculer l'énergie potentielle électrique d'une charge de 5 C dans un potentiel de 8 V.",
            answers: [
              "40 J",
              "20 J",
              "80 J",
              "10 J"
            ],
            correct: 0,
            explanation: "Epe = 5 * 8 = 40 J."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie potentielle électrique d'une charge de 6 C dans un potentiel de 3 V ?",
            answers: [
              "18 J",
              "9 J",
              "36 J",
              "4.5 J"
            ],
            correct: 0,
            explanation: "Epe = 6 * 3 = 18 J."
          },
          {
            type: "mcq",
            question: "Si la charge est divisée par 2, comment varie l'énergie potentielle électrique ?",
            answers: [
              "Elle est divisée par 2",
              "Elle est divisée par 4",
              "Elle reste la même",
              "Elle est multipliée par 2"
            ],
            correct: 0,
            explanation: "L'énergie potentielle électrique est directement proportionnelle à la charge."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie potentielle électrique d'une charge de 7 C dans un potentiel de 7 V ?",
            answers: [
              "49 J",
              "24.5 J",
              "98 J",
              "12.25 J"
            ],
            correct: 0,
            explanation: "Epe = 7 * 7 = 49 J."
          },
          {
            type: "mcq",
            question: "Si le potentiel est divisé par 2, comment varie l'énergie potentielle électrique ?",
            answers: [
              "Elle est divisée par 2",
              "Elle est divisée par 4",
              "Elle reste la même",
              "Elle est multipliée par 2"
            ],
            correct: 0,
            explanation: "L'énergie potentielle électrique est directement proportionnelle au potentiel."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie potentielle électrique d'une charge de 8 C dans un potentiel de 4 V ?",
            answers: [
              "32 J",
              "16 J",
              "64 J",
              "8 J"
            ],
            correct: 0,
            explanation: "Epe = 8 * 4 = 32 J."
          },
          {
            type: "mcq",
            question: "Si la charge est multipliée par 3, comment varie l'énergie potentielle électrique ?",
            answers: [
              "Elle est multipliée par 3",
              "Elle est multipliée par 9",
              "Elle reste la même",
              "Elle est divisée par 3"
            ],
            correct: 0,
            explanation: "L'énergie potentielle électrique est directement proportionnelle à la charge."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie potentielle électrique d'une charge de 9 C dans un potentiel de 9 V ?",
            answers: [
              "81 J",
              "40.5 J",
              "162 J",
              "20.25 J"
            ],
            correct: 0,
            explanation: "Epe = 9 * 9 = 81 J."
          },
          {
            type: "mcq",
            question: "Si le potentiel est multiplié par 4, comment varie l'énergie potentielle électrique ?",
            answers: [
              "Elle est multipliée par 4",
              "Elle est multipliée par 16",
              "Elle reste la même",
              "Elle est divisée par 4"
            ],
            correct: 0,
            explanation: "L'énergie potentielle électrique est directement proportionnelle au potentiel."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie potentielle électrique d'une charge de 10 C dans un potentiel de 10 V ?",
            answers: [
              "100 J",
              "50 J",
              "200 J",
              "25 J"
            ],
            correct: 0,
            explanation: "Epe = 10 * 10 = 100 J."
          }
        ],
        [
          {
            type: "mcq",
            question: "Calculer l'énergie potentielle électrique d'une charge de 12 C dans un potentiel de 15 V.",
            answers: [
              "180 J",
              "90 J",
              "360 J",
              "45 J"
            ],
            correct: 0,
            explanation: "Epe = 12 * 15 = 180 J."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie potentielle électrique d'une charge de 14 C dans un potentiel de 6 V ?",
            answers: [
              "84 J",
              "42 J",
              "168 J",
              "21 J"
            ],
            correct: 0,
            explanation: "Epe = 14 * 6 = 84 J."
          },
          {
            type: "mcq",
            question: "Si la charge est divisée par 4, comment varie l'énergie potentielle électrique ?",
            answers: [
              "Elle est divisée par 4",
              "Elle est divisée par 16",
              "Elle reste la même",
              "Elle est multipliée par 4"
            ],
            correct: 0,
            explanation: "L'énergie potentielle électrique est directement proportionnelle à la charge."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie potentielle électrique d'une charge de 16 C dans un potentiel de 12 V ?",
            answers: [
              "192 J",
              "96 J",
              "384 J",
              "48 J"
            ],
            correct: 0,
            explanation: "Epe = 16 * 12 = 192 J."
          },
          {
            type: "mcq",
            question: "Si le potentiel est divisé par 4, comment varie l'énergie potentielle électrique ?",
            answers: [
              "Elle est divisée par 4",
              "Elle est divisée par 16",
              "Elle reste la même",
              "Elle est multipliée par 4"
            ],
            correct: 0,
            explanation: "L'énergie potentielle électrique est directement proportionnelle au potentiel."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie potentielle électrique d'une charge de 18 C dans un potentiel de 9 V ?",
            answers: [
              "162 J",
              "81 J",
              "324 J",
              "40.5 J"
            ],
            correct: 0,
            explanation: "Epe = 18 * 9 = 162 J."
          },
          {
            type: "mcq",
            question: "Si la charge est multipliée par 5, comment varie l'énergie potentielle électrique ?",
            answers: [
              "Elle est multipliée par 5",
              "Elle est multipliée par 25",
              "Elle reste la même",
              "Elle est divisée par 5"
            ],
            correct: 0,
            explanation: "L'énergie potentielle électrique est directement proportionnelle à la charge."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie potentielle électrique d'une charge de 20 C dans un potentiel de 20 V ?",
            answers: [
              "400 J",
              "200 J",
              "800 J",
              "100 J"
            ],
            correct: 0,
            explanation: "Epe = 20 * 20 = 400 J."
          },
          {
            type: "mcq",
            question: "Si le potentiel est multiplié par 5, comment varie l'énergie potentielle électrique ?",
            answers: [
              "Elle est multipliée par 5",
              "Elle est multipliée par 25",
              "Elle reste la même",
              "Elle est divisée par 5"
            ],
            correct: 0,
            explanation: "L'énergie potentielle électrique est directement proportionnelle au potentiel."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie potentielle électrique d'une charge de 22 C dans un potentiel de 11 V ?",
            answers: [
              "242 J",
              "121 J",
              "484 J",
              "60.5 J"
            ],
            correct: 0,
            explanation: "Epe = 22 * 11 = 242 J."
          }
        ],
        [
          {
            type: "mcq",
            question: "Calculer l'énergie potentielle électrique d'une charge de 25 C dans un potentiel de 20 V.",
            answers: [
              "500 J",
              "250 J",
              "1000 J",
              "125 J"
            ],
            correct: 0,
            explanation: "Epe = 25 * 20 = 500 J."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie potentielle électrique d'une charge de 28 C dans un potentiel de 14 V ?",
            answers: [
              "392 J",
              "196 J",
              "784 J",
              "98 J"
            ],
            correct: 0,
            explanation: "Epe = 28 * 14 = 392 J."
          },
          {
            type: "mcq",
            question: "Si la charge est divisée par 5, comment varie l'énergie potentielle électrique ?",
            answers: [
              "Elle est divisée par 5",
              "Elle est divisée par 25",
              "Elle reste la même",
              "Elle est multipliée par 5"
            ],
            correct: 0,
            explanation: "L'énergie potentielle électrique est directement proportionnelle à la charge."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie potentielle électrique d'une charge de 30 C dans un potentiel de 18 V ?",
            answers: [
              "540 J",
              "270 J",
              "1080 J",
              "135 J"
            ],
            correct: 0,
            explanation: "Epe = 30 * 18 = 540 J."
          },
          {
            type: "mcq",
            question: "Si le potentiel est divisé par 5, comment varie l'énergie potentielle électrique ?",
            answers: [
              "Elle est divisée par 5",
              "Elle est divisée par 25",
              "Elle reste la même",
              "Elle est multipliée par 5"
            ],
            correct: 0,
            explanation: "L'énergie potentielle électrique est directement proportionnelle au potentiel."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie potentielle électrique d'une charge de 35 C dans un potentiel de 35 V ?",
            answers: [
              "1225 J",
              "612.5 J",
              "2450 J",
              "306.25 J"
            ],
            correct: 0,
            explanation: "Epe = 35 * 35 = 1225 J."
          },
          {
            type: "mcq",
            question: "Si la charge est multipliée par 10, comment varie l'énergie potentielle électrique ?",
            answers: [
              "Elle est multipliée par 10",
              "Elle est multipliée par 100",
              "Elle reste la même",
              "Elle est divisée par 10"
            ],
            correct: 0,
            explanation: "L'énergie potentielle électrique est directement proportionnelle à la charge."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie potentielle électrique d'une charge de 40 C dans un potentiel de 40 V ?",
            answers: [
              "1600 J",
              "800 J",
              "3200 J",
              "400 J"
            ],
            correct: 0,
            explanation: "Epe = 40 * 40 = 1600 J."
          },
          {
            type: "mcq",
            question: "Si le potentiel est multiplié par 10, comment varie l'énergie potentielle électrique ?",
            answers: [
              "Elle est multipliée par 10",
              "Elle est multipliée par 100",
              "Elle reste la même",
              "Elle est divisée par 10"
            ],
            correct: 0,
            explanation: "L'énergie potentielle électrique est directement proportionnelle au potentiel."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie potentielle électrique d'une charge de 45 C dans un potentiel de 45 V ?",
            answers: [
              "2025 J",
              "1012.5 J",
              "4050 J",
              "506.25 J"
            ],
            correct: 0,
            explanation: "Epe = 45 * 45 = 2025 J."
          }
        ],
        [
          {
            type: "mcq",
            question: "Calculer l'énergie potentielle électrique d'une charge de 50 C dans un potentiel de 50 V.",
            answers: [
              "2500 J",
              "1250 J",
              "5000 J",
              "625 J"
            ],
            correct: 0,
            explanation: "Epe = 50 * 50 = 2500 J."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie potentielle électrique d'une charge de 55 C dans un potentiel de 55 V ?",
            answers: [
              "3025 J",
              "1512.5 J",
              "6050 J",
              "756.25 J"
            ],
            correct: 0,
            explanation: "Epe = 55 * 55 = 3025 J."
          },
          {
            type: "mcq",
            question: "Si la charge est divisée par 10, comment varie l'énergie potentielle électrique ?",
            answers: [
              "Elle est divisée par 10",
              "Elle est divisée par 100",
              "Elle reste la même",
              "Elle est multipliée par 10"
            ],
            correct: 0,
            explanation: "L'énergie potentielle électrique est directement proportionnelle à la charge."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie potentielle électrique d'une charge de 60 C dans un potentiel de 60 V ?",
            answers: [
              "3600 J",
              "1800 J",
              "7200 J",
              "900 J"
            ],
            correct: 0,
            explanation: "Epe = 60 * 60 = 3600 J."
          },
          {
            type: "mcq",
            question: "Si le potentiel est divisé par 10, comment varie l'énergie potentielle électrique ?",
            answers: [
              "Elle est divisée par 10",
              "Elle est divisée par 100",
              "Elle reste la même",
              "Elle est multipliée par 10"
            ],
            correct: 0,
            explanation: "L'énergie potentielle électrique est directement proportionnelle au potentiel."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie potentielle électrique d'une charge de 65 C dans un potentiel de 65 V ?",
            answers: [
              "4225 J",
              "2112.5 J",
              "8450 J",
              "1056.25 J"
            ],
            correct: 0,
            explanation: "Epe = 65 * 65 = 4225 J."
          },
          {
            type: "mcq",
            question: "Si la charge est multipliée par 20, comment varie l'énergie potentielle électrique ?",
            answers: [
              "Elle est multipliée par 20",
              "Elle est multipliée par 400",
              "Elle reste la même",
              "Elle est divisée par 20"
            ],
            correct: 0,
            explanation: "L'énergie potentielle électrique est directement proportionnelle à la charge."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie potentielle électrique d'une charge de 70 C dans un potentiel de 70 V ?",
            answers: [
              "4900 J",
              "2450 J",
              "9800 J",
              "1225 J"
            ],
            correct: 0,
            explanation: "Epe = 70 * 70 = 4900 J."
          },
          {
            type: "mcq",
            question: "Si le potentiel est multiplié par 20, comment varie l'énergie potentielle électrique ?",
            answers: [
              "Elle est multipliée par 20",
              "Elle est multipliée par 400",
              "Elle reste la même",
              "Elle est divisée par 20"
            ],
            correct: 0,
            explanation: "L'énergie potentielle électrique est directement proportionnelle au potentiel."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie potentielle électrique d'une charge de 75 C dans un potentiel de 75 V ?",
            answers: [
              "5625 J",
              "2812.5 J",
              "11250 J",
              "1406.25 J"
            ],
            correct: 0,
            explanation: "Epe = 75 * 75 = 5625 J."
          }
        ],
        [
          {
            type: "mcq",
            question: "Calculer l'énergie potentielle électrique d'une charge de 80 C dans un potentiel de 80 V.",
            answers: [
              "6400 J",
              "3200 J",
              "12800 J",
              "1600 J"
            ],
            correct: 0,
            explanation: "Epe = 80 * 80 = 6400 J."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie potentielle électrique d'une charge de 85 C dans un potentiel de 85 V ?",
            answers: [
              "7225 J",
              "3612.5 J",
              "14450 J",
              "1806.25 J"
            ],
            correct: 0,
            explanation: "Epe = 85 * 85 = 7225 J."
          },
          {
            type: "mcq",
            question: "Si la charge est divisée par 20, comment varie l'énergie potentielle électrique ?",
            answers: [
              "Elle est divisée par 20",
              "Elle est divisée par 400",
              "Elle reste la même",
              "Elle est multipliée par 20"
            ],
            correct: 0,
            explanation: "L'énergie potentielle électrique est directement proportionnelle à la charge."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie potentielle électrique d'une charge de 90 C dans un potentiel de 90 V ?",
            answers: [
              "8100 J",
              "4050 J",
              "16200 J",
              "2025 J"
            ],
            correct: 0,
            explanation: "Epe = 90 * 90 = 8100 J."
          },
          {
            type: "mcq",
            question: "Si le potentiel est divisé par 20, comment varie l'énergie potentielle électrique ?",
            answers: [
              "Elle est divisée par 20",
              "Elle est divisée par 400",
              "Elle reste la même",
              "Elle est multipliée par 20"
            ],
            correct: 0,
            explanation: "L'énergie potentielle électrique est directement proportionnelle au potentiel."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie potentielle électrique d'une charge de 95 C dans un potentiel de 95 V ?",
            answers: [
              "9025 J",
              "4512.5 J",
              "18050 J",
              "2256.25 J"
            ],
            correct: 0,
            explanation: "Epe = 95 * 95 = 9025 J."
          },
          {
            type: "mcq",
            question: "Si la charge est multipliée par 50, comment varie l'énergie potentielle électrique ?",
            answers: [
              "Elle est multipliée par 50",
              "Elle est multipliée par 2500",
              "Elle reste la même",
              "Elle est divisée par 50"
            ],
            correct: 0,
            explanation: "L'énergie potentielle électrique est directement proportionnelle à la charge."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie potentielle électrique d'une charge de 100 C dans un potentiel de 100 V ?",
            answers: [
              "10000 J",
              "5000 J",
              "20000 J",
              "2500 J"
            ],
            correct: 0,
            explanation: "Epe = 100 * 100 = 10000 J."
          },
          {
            type: "mcq",
            question: "Si le potentiel est multiplié par 50, comment varie l'énergie potentielle électrique ?",
            answers: [
              "Elle est multipliée par 50",
              "Elle est multipliée par 2500",
              "Elle reste la même",
              "Elle est divisée par 50"
            ],
            correct: 0,
            explanation: "L'énergie potentielle électrique est directement proportionnelle au potentiel."
          },
          {
            type: "mcq",
            question: "Quelle est l'énergie potentielle électrique d'une charge de 105 C dans un potentiel de 105 V ?",
            answers: [
              "11025 J",
              "5512.5 J",
              "22050 J",
              "2756.25 J"
            ],
            correct: 0,
            explanation: "Epe = 105 * 105 = 11025 J."
          }
        ]
      ]
    },
    {
      id: "energie-mecanique",
      label: "Énergie mécanique",
      icon: "📌",
      lesson: {
        formula: "Em = Ec + Epp",
        text: "L'énergie mécanique est la somme de l'énergie cinétique et de l'énergie potentielle.",
        example: "Si un objet a une énergie cinétique de 10 J et une énergie potentielle de 20 J, son énergie mécanique est Em = 10 + 20 = 30 J."
      },
      fullBlocks: [
        {
          type: "definition",
          text: "L'énergie mécanique est la somme des énergies cinétique et potentielle."
        },
        {
          type: "formula",
          text: "Em = Ec + Epp"
        },
        {
          type: "example",
          text: "Un objet a une énergie cinétique de 15 J et une énergie potentielle de 25 J, donc Em = 15 + 25 = 40 J."
        }
      ],
      levels: [
        [
          {
            type: "mcq",
            question: "Quelle est la formule de l'énergie mécanique ?",
            answers: [
              "Em = Ec + Epp",
              "Em = Ec - Epp",
              "Em = Ec * Epp",
              "Em = Ec / Epp"
            ],
            correct: 0,
            explanation: "La formule correcte est Em = Ec + Epp."
          },
          {
            type: "mcq",
            question: "Si l'énergie cinétique est de 5 J et l'énergie potentielle de 10 J, quelle est l'énergie mécanique ?",
            answers: [
              "15 J",
              "5 J",
              "10 J",
              "20 J"
            ],
            correct: 0,
            explanation: "Em = 5 + 10 = 15 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie potentielle est nulle, que vaut l'énergie mécanique ?",
            answers: [
              "Elle est égale à l'énergie cinétique",
              "Elle est nulle",
              "Elle est égale à deux fois l'énergie cinétique",
              "Elle est indéterminée"
            ],
            correct: 0,
            explanation: "Em = Ec + 0 = Ec."
          },
          {
            type: "mcq",
            question: "Si l'énergie cinétique est de 12 J et l'énergie potentielle de 8 J, quelle est l'énergie mécanique ?",
            answers: [
              "20 J",
              "12 J",
              "8 J",
              "4 J"
            ],
            correct: 0,
            explanation: "Em = 12 + 8 = 20 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie mécanique est de 30 J et l'énergie cinétique de 10 J, quelle est l'énergie potentielle ?",
            answers: [
              "20 J",
              "10 J",
              "30 J",
              "40 J"
            ],
            correct: 0,
            explanation: "Epp = Em - Ec = 30 - 10 = 20 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie cinétique est de 20 J et l'énergie potentielle de 20 J, quelle est l'énergie mécanique ?",
            answers: [
              "40 J",
              "20 J",
              "10 J",
              "30 J"
            ],
            correct: 0,
            explanation: "Em = 20 + 20 = 40 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie mécanique est de 50 J et l'énergie potentielle de 30 J, quelle est l'énergie cinétique ?",
            answers: [
              "20 J",
              "30 J",
              "50 J",
              "80 J"
            ],
            correct: 0,
            explanation: "Ec = Em - Epp = 50 - 30 = 20 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie cinétique est de 15 J et l'énergie mécanique de 25 J, quelle est l'énergie potentielle ?",
            answers: [
              "10 J",
              "15 J",
              "25 J",
              "40 J"
            ],
            correct: 0,
            explanation: "Epp = Em - Ec = 25 - 15 = 10 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie mécanique est de 60 J et l'énergie cinétique de 40 J, quelle est l'énergie potentielle ?",
            answers: [
              "20 J",
              "40 J",
              "60 J",
              "100 J"
            ],
            correct: 0,
            explanation: "Epp = Em - Ec = 60 - 40 = 20 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie cinétique est de 25 J et l'énergie potentielle de 15 J, quelle est l'énergie mécanique ?",
            answers: [
              "40 J",
              "25 J",
              "15 J",
              "10 J"
            ],
            correct: 0,
            explanation: "Em = 25 + 15 = 40 J."
          }
        ],
        [
          {
            type: "mcq",
            question: "Si l'énergie cinétique est de 30 J et l'énergie potentielle de 20 J, quelle est l'énergie mécanique ?",
            answers: [
              "50 J",
              "30 J",
              "20 J",
              "10 J"
            ],
            correct: 0,
            explanation: "Em = 30 + 20 = 50 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie mécanique est de 70 J et l'énergie potentielle de 50 J, quelle est l'énergie cinétique ?",
            answers: [
              "20 J",
              "50 J",
              "70 J",
              "120 J"
            ],
            correct: 0,
            explanation: "Ec = Em - Epp = 70 - 50 = 20 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie cinétique est de 35 J et l'énergie mécanique de 45 J, quelle est l'énergie potentielle ?",
            answers: [
              "10 J",
              "35 J",
              "45 J",
              "80 J"
            ],
            correct: 0,
            explanation: "Epp = Em - Ec = 45 - 35 = 10 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie mécanique est de 80 J et l'énergie cinétique de 60 J, quelle est l'énergie potentielle ?",
            answers: [
              "20 J",
              "60 J",
              "80 J",
              "140 J"
            ],
            correct: 0,
            explanation: "Epp = Em - Ec = 80 - 60 = 20 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie cinétique est de 40 J et l'énergie potentielle de 30 J, quelle est l'énergie mécanique ?",
            answers: [
              "70 J",
              "40 J",
              "30 J",
              "10 J"
            ],
            correct: 0,
            explanation: "Em = 40 + 30 = 70 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie mécanique est de 90 J et l'énergie potentielle de 70 J, quelle est l'énergie cinétique ?",
            answers: [
              "20 J",
              "70 J",
              "90 J",
              "160 J"
            ],
            correct: 0,
            explanation: "Ec = Em - Epp = 90 - 70 = 20 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie cinétique est de 45 J et l'énergie mécanique de 55 J, quelle est l'énergie potentielle ?",
            answers: [
              "10 J",
              "45 J",
              "55 J",
              "100 J"
            ],
            correct: 0,
            explanation: "Epp = Em - Ec = 55 - 45 = 10 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie mécanique est de 100 J et l'énergie cinétique de 80 J, quelle est l'énergie potentielle ?",
            answers: [
              "20 J",
              "80 J",
              "100 J",
              "180 J"
            ],
            correct: 0,
            explanation: "Epp = Em - Ec = 100 - 80 = 20 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie cinétique est de 50 J et l'énergie potentielle de 40 J, quelle est l'énergie mécanique ?",
            answers: [
              "90 J",
              "50 J",
              "40 J",
              "10 J"
            ],
            correct: 0,
            explanation: "Em = 50 + 40 = 90 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie mécanique est de 110 J et l'énergie cinétique de 90 J, quelle est l'énergie potentielle ?",
            answers: [
              "20 J",
              "90 J",
              "110 J",
              "200 J"
            ],
            correct: 0,
            explanation: "Epp = Em - Ec = 110 - 90 = 20 J."
          }
        ],
        [
          {
            type: "mcq",
            question: "Si l'énergie cinétique est de 60 J et l'énergie potentielle de 50 J, quelle est l'énergie mécanique ?",
            answers: [
              "110 J",
              "60 J",
              "50 J",
              "10 J"
            ],
            correct: 0,
            explanation: "Em = 60 + 50 = 110 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie mécanique est de 120 J et l'énergie potentielle de 100 J, quelle est l'énergie cinétique ?",
            answers: [
              "20 J",
              "100 J",
              "120 J",
              "220 J"
            ],
            correct: 0,
            explanation: "Ec = Em - Epp = 120 - 100 = 20 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie cinétique est de 65 J et l'énergie mécanique de 75 J, quelle est l'énergie potentielle ?",
            answers: [
              "10 J",
              "65 J",
              "75 J",
              "140 J"
            ],
            correct: 0,
            explanation: "Epp = Em - Ec = 75 - 65 = 10 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie mécanique est de 130 J et l'énergie cinétique de 110 J, quelle est l'énergie potentielle ?",
            answers: [
              "20 J",
              "110 J",
              "130 J",
              "240 J"
            ],
            correct: 0,
            explanation: "Epp = Em - Ec = 130 - 110 = 20 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie cinétique est de 70 J et l'énergie potentielle de 60 J, quelle est l'énergie mécanique ?",
            answers: [
              "130 J",
              "70 J",
              "60 J",
              "10 J"
            ],
            correct: 0,
            explanation: "Em = 70 + 60 = 130 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie mécanique est de 140 J et l'énergie potentielle de 120 J, quelle est l'énergie cinétique ?",
            answers: [
              "20 J",
              "120 J",
              "140 J",
              "260 J"
            ],
            correct: 0,
            explanation: "Ec = Em - Epp = 140 - 120 = 20 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie cinétique est de 75 J et l'énergie mécanique de 85 J, quelle est l'énergie potentielle ?",
            answers: [
              "10 J",
              "75 J",
              "85 J",
              "160 J"
            ],
            correct: 0,
            explanation: "Epp = Em - Ec = 85 - 75 = 10 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie mécanique est de 150 J et l'énergie cinétique de 130 J, quelle est l'énergie potentielle ?",
            answers: [
              "20 J",
              "130 J",
              "150 J",
              "280 J"
            ],
            correct: 0,
            explanation: "Epp = Em - Ec = 150 - 130 = 20 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie cinétique est de 80 J et l'énergie potentielle de 70 J, quelle est l'énergie mécanique ?",
            answers: [
              "150 J",
              "80 J",
              "70 J",
              "10 J"
            ],
            correct: 0,
            explanation: "Em = 80 + 70 = 150 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie mécanique est de 160 J et l'énergie potentielle de 140 J, quelle est l'énergie cinétique ?",
            answers: [
              "20 J",
              "140 J",
              "160 J",
              "300 J"
            ],
            correct: 0,
            explanation: "Ec = Em - Epp = 160 - 140 = 20 J."
          }
        ],
        [
          {
            type: "mcq",
            question: "Si l'énergie cinétique est de 85 J et l'énergie potentielle de 75 J, quelle est l'énergie mécanique ?",
            answers: [
              "160 J",
              "85 J",
              "75 J",
              "10 J"
            ],
            correct: 0,
            explanation: "Em = 85 + 75 = 160 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie mécanique est de 170 J et l'énergie potentielle de 150 J, quelle est l'énergie cinétique ?",
            answers: [
              "20 J",
              "150 J",
              "170 J",
              "320 J"
            ],
            correct: 0,
            explanation: "Ec = Em - Epp = 170 - 150 = 20 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie cinétique est de 90 J et l'énergie mécanique de 100 J, quelle est l'énergie potentielle ?",
            answers: [
              "10 J",
              "90 J",
              "100 J",
              "190 J"
            ],
            correct: 0,
            explanation: "Epp = Em - Ec = 100 - 90 = 10 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie mécanique est de 180 J et l'énergie cinétique de 160 J, quelle est l'énergie potentielle ?",
            answers: [
              "20 J",
              "160 J",
              "180 J",
              "340 J"
            ],
            correct: 0,
            explanation: "Epp = Em - Ec = 180 - 160 = 20 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie cinétique est de 95 J et l'énergie potentielle de 85 J, quelle est l'énergie mécanique ?",
            answers: [
              "180 J",
              "95 J",
              "85 J",
              "10 J"
            ],
            correct: 0,
            explanation: "Em = 95 + 85 = 180 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie mécanique est de 190 J et l'énergie potentielle de 170 J, quelle est l'énergie cinétique ?",
            answers: [
              "20 J",
              "170 J",
              "190 J",
              "360 J"
            ],
            correct: 0,
            explanation: "Ec = Em - Epp = 190 - 170 = 20 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie cinétique est de 100 J et l'énergie mécanique de 110 J, quelle est l'énergie potentielle ?",
            answers: [
              "10 J",
              "100 J",
              "110 J",
              "210 J"
            ],
            correct: 0,
            explanation: "Epp = Em - Ec = 110 - 100 = 10 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie mécanique est de 200 J et l'énergie cinétique de 180 J, quelle est l'énergie potentielle ?",
            answers: [
              "20 J",
              "180 J",
              "200 J",
              "380 J"
            ],
            correct: 0,
            explanation: "Epp = Em - Ec = 200 - 180 = 20 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie cinétique est de 105 J et l'énergie potentielle de 95 J, quelle est l'énergie mécanique ?",
            answers: [
              "200 J",
              "105 J",
              "95 J",
              "10 J"
            ],
            correct: 0,
            explanation: "Em = 105 + 95 = 200 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie mécanique est de 210 J et l'énergie potentielle de 190 J, quelle est l'énergie cinétique ?",
            answers: [
              "20 J",
              "190 J",
              "210 J",
              "400 J"
            ],
            correct: 0,
            explanation: "Ec = Em - Epp = 210 - 190 = 20 J."
          }
        ],
        [
          {
            type: "mcq",
            question: "Si l'énergie cinétique est de 110 J et l'énergie potentielle de 100 J, quelle est l'énergie mécanique ?",
            answers: [
              "210 J",
              "110 J",
              "100 J",
              "10 J"
            ],
            correct: 0,
            explanation: "Em = 110 + 100 = 210 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie mécanique est de 220 J et l'énergie potentielle de 200 J, quelle est l'énergie cinétique ?",
            answers: [
              "20 J",
              "200 J",
              "220 J",
              "420 J"
            ],
            correct: 0,
            explanation: "Ec = Em - Epp = 220 - 200 = 20 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie cinétique est de 115 J et l'énergie mécanique de 125 J, quelle est l'énergie potentielle ?",
            answers: [
              "10 J",
              "115 J",
              "125 J",
              "240 J"
            ],
            correct: 0,
            explanation: "Epp = Em - Ec = 125 - 115 = 10 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie mécanique est de 230 J et l'énergie cinétique de 210 J, quelle est l'énergie potentielle ?",
            answers: [
              "20 J",
              "210 J",
              "230 J",
              "440 J"
            ],
            correct: 0,
            explanation: "Epp = Em - Ec = 230 - 210 = 20 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie cinétique est de 120 J et l'énergie potentielle de 110 J, quelle est l'énergie mécanique ?",
            answers: [
              "230 J",
              "120 J",
              "110 J",
              "10 J"
            ],
            correct: 0,
            explanation: "Em = 120 + 110 = 230 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie mécanique est de 240 J et l'énergie potentielle de 220 J, quelle est l'énergie cinétique ?",
            answers: [
              "20 J",
              "220 J",
              "240 J",
              "460 J"
            ],
            correct: 0,
            explanation: "Ec = Em - Epp = 240 - 220 = 20 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie cinétique est de 125 J et l'énergie mécanique de 135 J, quelle est l'énergie potentielle ?",
            answers: [
              "10 J",
              "125 J",
              "135 J",
              "260 J"
            ],
            correct: 0,
            explanation: "Epp = Em - Ec = 135 - 125 = 10 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie mécanique est de 250 J et l'énergie cinétique de 230 J, quelle est l'énergie potentielle ?",
            answers: [
              "20 J",
              "230 J",
              "250 J",
              "480 J"
            ],
            correct: 0,
            explanation: "Epp = Em - Ec = 250 - 230 = 20 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie cinétique est de 130 J et l'énergie potentielle de 120 J, quelle est l'énergie mécanique ?",
            answers: [
              "250 J",
              "130 J",
              "120 J",
              "10 J"
            ],
            correct: 0,
            explanation: "Em = 130 + 120 = 250 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie mécanique est de 260 J et l'énergie potentielle de 240 J, quelle est l'énergie cinétique ?",
            answers: [
              "20 J",
              "240 J",
              "260 J",
              "500 J"
            ],
            correct: 0,
            explanation: "Ec = Em - Epp = 260 - 240 = 20 J."
          }
        ]
      ]
    },
    {
      id: "puissance",
      label: "Puissance",
      icon: "📌",
      lesson: {
        formula: "P = W / Δt",
        text: "La puissance est le taux de transfert d'énergie par unité de temps.",
        example: "Si un travail de 100 J est effectué en 10 s, la puissance est P = 100 / 10 = 10 W."
      },
      fullBlocks: [
        {
          type: "definition",
          text: "La puissance mesure la rapidité avec laquelle l'énergie est transférée ou transformée."
        },
        {
          type: "formula",
          text: "P = W / Δt"
        },
        {
          type: "example",
          text: "Un travail de 200 J effectué en 20 s correspond à une puissance de P = 200 / 20 = 10 W."
        }
      ],
      levels: [
        [
          {
            type: "mcq",
            question: "Quelle est l'unité de la puissance ?",
            answers: [
              "Watt (W)",
              "Joule (J)",
              "Newton (N)",
              "Pascal (Pa)"
            ],
            correct: 0,
            explanation: "La puissance s'exprime en Watt (W)."
          },
          {
            type: "mcq",
            question: "Quelle formule permet de calculer la puissance ?",
            answers: [
              "P = W / Δt",
              "P = W * Δt",
              "P = Δt / W",
              "P = W² / Δt"
            ],
            correct: 0,
            explanation: "La formule correcte est P = W / Δt."
          },
          {
            type: "mcq",
            question: "Si le travail est de 100 J et le temps de 10 s, quelle est la puissance ?",
            answers: [
              "10 W",
              "100 W",
              "1 W",
              "0.1 W"
            ],
            correct: 0,
            explanation: "P = 100 / 10 = 10 W."
          },
          {
            type: "mcq",
            question: "Si la puissance est de 5 W et le temps de 5 s, quel est le travail ?",
            answers: [
              "25 J",
              "5 J",
              "1 J",
              "10 J"
            ],
            correct: 0,
            explanation: "W = P * Δt = 5 * 5 = 25 J."
          },
          {
            type: "mcq",
            question: "Si le travail est de 200 J et la puissance de 10 W, quel est le temps ?",
            answers: [
              "20 s",
              "10 s",
              "2 s",
              "200 s"
            ],
            correct: 0,
            explanation: "Δt = W / P = 200 / 10 = 20 s."
          },
          {
            type: "mcq",
            question: "Si la puissance est de 2 W et le travail de 40 J, quel est le temps ?",
            answers: [
              "20 s",
              "40 s",
              "2 s",
              "10 s"
            ],
            correct: 0,
            explanation: "Δt = W / P = 40 / 2 = 20 s."
          },
          {
            type: "mcq",
            question: "Si le travail est de 50 J et le temps de 2 s, quelle est la puissance ?",
            answers: [
              "25 W",
              "50 W",
              "2.5 W",
              "10 W"
            ],
            correct: 0,
            explanation: "P = 50 / 2 = 25 W."
          },
          {
            type: "mcq",
            question: "Si la puissance est de 20 W et le temps de 4 s, quel est le travail ?",
            answers: [
              "80 J",
              "20 J",
              "4 J",
              "5 J"
            ],
            correct: 0,
            explanation: "W = P * Δt = 20 * 4 = 80 J."
          },
          {
            type: "mcq",
            question: "Si le travail est de 150 J et la puissance de 30 W, quel est le temps ?",
            answers: [
              "5 s",
              "15 s",
              "3 s",
              "10 s"
            ],
            correct: 0,
            explanation: "Δt = W / P = 150 / 30 = 5 s."
          },
          {
            type: "mcq",
            question: "Si la puissance est de 50 W et le travail de 250 J, quel est le temps ?",
            answers: [
              "5 s",
              "25 s",
              "50 s",
              "2.5 s"
            ],
            correct: 0,
            explanation: "Δt = W / P = 250 / 50 = 5 s."
          }
        ],
        [
          {
            type: "mcq",
            question: "Calculer la puissance si le travail est de 300 J et le temps de 15 s.",
            answers: [
              "20 W",
              "30 W",
              "15 W",
              "40 W"
            ],
            correct: 0,
            explanation: "P = 300 / 15 = 20 W."
          },
          {
            type: "mcq",
            question: "Si la puissance est de 10 W et le travail de 200 J, quel est le temps ?",
            answers: [
              "20 s",
              "10 s",
              "2 s",
              "40 s"
            ],
            correct: 0,
            explanation: "Δt = W / P = 200 / 10 = 20 s."
          },
          {
            type: "mcq",
            question: "Si le travail est de 400 J et la puissance de 20 W, quel est le temps ?",
            answers: [
              "20 s",
              "40 s",
              "10 s",
              "8 s"
            ],
            correct: 0,
            explanation: "Δt = W / P = 400 / 20 = 20 s."
          },
          {
            type: "mcq",
            question: "Si la puissance est de 25 W et le temps de 10 s, quel est le travail ?",
            answers: [
              "250 J",
              "25 J",
              "10 J",
              "5 J"
            ],
            correct: 0,
            explanation: "W = P * Δt = 25 * 10 = 250 J."
          },
          {
            type: "mcq",
            question: "Si le travail est de 600 J et le temps de 30 s, quelle est la puissance ?",
            answers: [
              "20 W",
              "60 W",
              "10 W",
              "30 W"
            ],
            correct: 0,
            explanation: "P = 600 / 30 = 20 W."
          },
          {
            type: "mcq",
            question: "Si la puissance est de 40 W et le travail de 800 J, quel est le temps ?",
            answers: [
              "20 s",
              "40 s",
              "10 s",
              "8 s"
            ],
            correct: 0,
            explanation: "Δt = W / P = 800 / 40 = 20 s."
          },
          {
            type: "mcq",
            question: "Si le travail est de 750 J et la puissance de 50 W, quel est le temps ?",
            answers: [
              "15 s",
              "75 s",
              "5 s",
              "25 s"
            ],
            correct: 0,
            explanation: "Δt = W / P = 750 / 50 = 15 s."
          },
          {
            type: "mcq",
            question: "Si la puissance est de 60 W et le temps de 12 s, quel est le travail ?",
            answers: [
              "720 J",
              "60 J",
              "12 J",
              "5 J"
            ],
            correct: 0,
            explanation: "W = P * Δt = 60 * 12 = 720 J."
          },
          {
            type: "mcq",
            question: "Si le travail est de 900 J et le temps de 45 s, quelle est la puissance ?",
            answers: [
              "20 W",
              "90 W",
              "10 W",
              "45 W"
            ],
            correct: 0,
            explanation: "P = 900 / 45 = 20 W."
          },
          {
            type: "mcq",
            question: "Si la puissance est de 70 W et le temps de 14 s, quel est le travail ?",
            answers: [
              "980 J",
              "70 J",
              "14 J",
              "5 J"
            ],
            correct: 0,
            explanation: "W = P * Δt = 70 * 14 = 980 J."
          }
        ],
        [
          {
            type: "mcq",
            question: "Calculer la puissance si le travail est de 1200 J et le temps de 20 s.",
            answers: [
              "60 W",
              "120 W",
              "20 W",
              "40 W"
            ],
            correct: 0,
            explanation: "P = 1200 / 20 = 60 W."
          },
          {
            type: "mcq",
            question: "Si la puissance est de 30 W et le travail de 900 J, quel est le temps ?",
            answers: [
              "30 s",
              "90 s",
              "10 s",
              "6 s"
            ],
            correct: 0,
            explanation: "Δt = W / P = 900 / 30 = 30 s."
          },
          {
            type: "mcq",
            question: "Si le travail est de 1600 J et la puissance de 40 W, quel est le temps ?",
            answers: [
              "40 s",
              "160 s",
              "20 s",
              "8 s"
            ],
            correct: 0,
            explanation: "Δt = W / P = 1600 / 40 = 40 s."
          },
          {
            type: "mcq",
            question: "Si la puissance est de 70 W et le temps de 14 s, quel est le travail ?",
            answers: [
              "980 J",
              "70 J",
              "14 J",
              "5 J"
            ],
            correct: 0,
            explanation: "W = P * Δt = 70 * 14 = 980 J."
          },
          {
            type: "mcq",
            question: "Si le travail est de 2000 J et le temps de 50 s, quelle est la puissance ?",
            answers: [
              "40 W",
              "200 W",
              "10 W",
              "80 W"
            ],
            correct: 0,
            explanation: "P = 2000 / 50 = 40 W."
          },
          {
            type: "mcq",
            question: "Si la puissance est de 80 W et le travail de 1600 J, quel est le temps ?",
            answers: [
              "20 s",
              "80 s",
              "10 s",
              "4 s"
            ],
            correct: 0,
            explanation: "Δt = W / P = 1600 / 80 = 20 s."
          },
          {
            type: "mcq",
            question: "Si le travail est de 2500 J et la puissance de 100 W, quel est le temps ?",
            answers: [
              "25 s",
              "100 s",
              "25 s",
              "5 s"
            ],
            correct: 0,
            explanation: "Δt = W / P = 2500 / 100 = 25 s."
          },
          {
            type: "mcq",
            question: "Si la puissance est de 90 W et le temps de 18 s, quel est le travail ?",
            answers: [
              "1620 J",
              "90 J",
              "18 J",
              "5 J"
            ],
            correct: 0,
            explanation: "W = P * Δt = 90 * 18 = 1620 J."
          },
          {
            type: "mcq",
            question: "Si le travail est de 3000 J et le temps de 60 s, quelle est la puissance ?",
            answers: [
              "50 W",
              "300 W",
              "10 W",
              "120 W"
            ],
            correct: 0,
            explanation: "P = 3000 / 60 = 50 W."
          },
          {
            type: "mcq",
            question: "Si la puissance est de 100 W et le travail de 2000 J, quel est le temps ?",
            answers: [
              "20 s",
              "100 s",
              "25 s",
              "10 s"
            ],
            correct: 0,
            explanation: "Δt = W / P = 2000 / 100 = 20 s."
          }
        ],
        [
          {
            type: "mcq",
            question: "Calculer la puissance si le travail est de 4000 J et le temps de 25 s.",
            answers: [
              "160 W",
              "400 W",
              "25 W",
              "80 W"
            ],
            correct: 0,
            explanation: "P = 4000 / 25 = 160 W."
          },
          {
            type: "mcq",
            question: "Si la puissance est de 120 W et le travail de 3600 J, quel est le temps ?",
            answers: [
              "30 s",
              "120 s",
              "10 s",
              "6 s"
            ],
            correct: 0,
            explanation: "Δt = W / P = 3600 / 120 = 30 s."
          },
          {
            type: "mcq",
            question: "Si le travail est de 5000 J et la puissance de 100 W, quel est le temps ?",
            answers: [
              "50 s",
              "100 s",
              "25 s",
              "5 s"
            ],
            correct: 0,
            explanation: "Δt = W / P = 5000 / 100 = 50 s."
          },
          {
            type: "mcq",
            question: "Si la puissance est de 150 W et le temps de 30 s, quel est le travail ?",
            answers: [
              "4500 J",
              "150 J",
              "30 J",
              "5 J"
            ],
            correct: 0,
            explanation: "W = P * Δt = 150 * 30 = 4500 J."
          },
          {
            type: "mcq",
            question: "Si le travail est de 6000 J et le temps de 120 s, quelle est la puissance ?",
            answers: [
              "50 W",
              "600 W",
              "10 W",
              "120 W"
            ],
            correct: 0,
            explanation: "P = 6000 / 120 = 50 W."
          },
          {
            type: "mcq",
            question: "Si la puissance est de 200 W et le travail de 8000 J, quel est le temps ?",
            answers: [
              "40 s",
              "200 s",
              "10 s",
              "8 s"
            ],
            correct: 0,
            explanation: "Δt = W / P = 8000 / 200 = 40 s."
          },
          {
            type: "mcq",
            question: "Si le travail est de 7000 J et la puissance de 140 W, quel est le temps ?",
            answers: [
              "50 s",
              "140 s",
              "25 s",
              "10 s"
            ],
            correct: 0,
            explanation: "Δt = W / P = 7000 / 140 = 50 s."
          },
          {
            type: "mcq",
            question: "Si la puissance est de 250 W et le temps de 50 s, quel est le travail ?",
            answers: [
              "12500 J",
              "250 J",
              "50 J",
              "5 J"
            ],
            correct: 0,
            explanation: "W = P * Δt = 250 * 50 = 12500 J."
          },
          {
            type: "mcq",
            question: "Si le travail est de 8000 J et le temps de 200 s, quelle est la puissance ?",
            answers: [
              "40 W",
              "800 W",
              "10 W",
              "160 W"
            ],
            correct: 0,
            explanation: "P = 8000 / 200 = 40 W."
          },
          {
            type: "mcq",
            question: "Si la puissance est de 300 W et le travail de 9000 J, quel est le temps ?",
            answers: [
              "30 s",
              "300 s",
              "10 s",
              "6 s"
            ],
            correct: 0,
            explanation: "Δt = W / P = 9000 / 300 = 30 s."
          }
        ],
        [
          {
            type: "mcq",
            question: "Calculer la puissance si le travail est de 10000 J et le temps de 50 s.",
            answers: [
              "200 W",
              "1000 W",
              "50 W",
              "400 W"
            ],
            correct: 0,
            explanation: "P = 10000 / 50 = 200 W."
          },
          {
            type: "mcq",
            question: "Si la puissance est de 300 W et le travail de 9000 J, quel est le temps ?",
            answers: [
              "30 s",
              "300 s",
              "10 s",
              "6 s"
            ],
            correct: 0,
            explanation: "Δt = W / P = 9000 / 300 = 30 s."
          },
          {
            type: "mcq",
            question: "Si le travail est de 12000 J et la puissance de 200 W, quel est le temps ?",
            answers: [
              "60 s",
              "120 s",
              "20 s",
              "4 s"
            ],
            correct: 0,
            explanation: "Δt = W / P = 12000 / 200 = 60 s."
          },
          {
            type: "mcq",
            question: "Si la puissance est de 400 W et le temps de 80 s, quel est le travail ?",
            answers: [
              "32000 J",
              "400 J",
              "80 J",
              "5 J"
            ],
            correct: 0,
            explanation: "W = P * Δt = 400 * 80 = 32000 J."
          },
          {
            type: "mcq",
            question: "Si le travail est de 15000 J et le temps de 300 s, quelle est la puissance ?",
            answers: [
              "50 W",
              "1500 W",
              "10 W",
              "120 W"
            ],
            correct: 0,
            explanation: "P = 15000 / 300 = 50 W."
          },
          {
            type: "mcq",
            question: "Si la puissance est de 500 W et le travail de 25000 J, quel est le temps ?",
            answers: [
              "50 s",
              "500 s",
              "25 s",
              "10 s"
            ],
            correct: 0,
            explanation: "Δt = W / P = 25000 / 500 = 50 s."
          },
          {
            type: "mcq",
            question: "Si le travail est de 20000 J et la puissance de 400 W, quel est le temps ?",
            answers: [
              "50 s",
              "400 s",
              "25 s",
              "10 s"
            ],
            correct: 0,
            explanation: "Δt = W / P = 20000 / 400 = 50 s."
          },
          {
            type: "mcq",
            question: "Si la puissance est de 600 W et le temps de 120 s, quel est le travail ?",
            answers: [
              "72000 J",
              "600 J",
              "120 J",
              "5 J"
            ],
            correct: 0,
            explanation: "W = P * Δt = 600 * 120 = 72000 J."
          },
          {
            type: "mcq",
            question: "Si le travail est de 25000 J et le temps de 500 s, quelle est la puissance ?",
            answers: [
              "50 W",
              "2500 W",
              "10 W",
              "120 W"
            ],
            correct: 0,
            explanation: "P = 25000 / 500 = 50 W."
          },
          {
            type: "mcq",
            question: "Si la puissance est de 700 W et le travail de 35000 J, quel est le temps ?",
            answers: [
              "50 s",
              "700 s",
              "25 s",
              "10 s"
            ],
            correct: 0,
            explanation: "Δt = W / P = 35000 / 700 = 50 s."
          }
        ],
        [
          {
            type: "mcq",
            question: "Calculer la puissance si le travail est de 30000 J et le temps de 100 s.",
            answers: [
              "300 W",
              "3000 W",
              "100 W",
              "600 W"
            ],
            correct: 0,
            explanation: "P = 30000 / 100 = 300 W."
          },
          {
            type: "mcq",
            question: "Si la puissance est de 700 W et le travail de 35000 J, quel est le temps ?",
            answers: [
              "50 s",
              "700 s",
              "25 s",
              "10 s"
            ],
            correct: 0,
            explanation: "Δt = W / P = 35000 / 700 = 50 s."
          },
          {
            type: "mcq",
            question: "Si le travail est de 40000 J et la puissance de 500 W, quel est le temps ?",
            answers: [
              "80 s",
              "500 s",
              "25 s",
              "10 s"
            ],
            correct: 0,
            explanation: "Δt = W / P = 40000 / 500 = 80 s."
          },
          {
            type: "mcq",
            question: "Si la puissance est de 800 W et le temps de 160 s, quel est le travail ?",
            answers: [
              "128000 J",
              "800 J",
              "160 J",
              "5 J"
            ],
            correct: 0,
            explanation: "W = P * Δt = 800 * 160 = 128000 J."
          },
          {
            type: "mcq",
            question: "Si le travail est de 50000 J et le temps de 1000 s, quelle est la puissance ?",
            answers: [
              "50 W",
              "5000 W",
              "10 W",
              "120 W"
            ],
            correct: 0,
            explanation: "P = 50000 / 1000 = 50 W."
          },
          {
            type: "mcq",
            question: "Si la puissance est de 900 W et le travail de 45000 J, quel est le temps ?",
            answers: [
              "50 s",
              "900 s",
              "25 s",
              "10 s"
            ],
            correct: 0,
            explanation: "Δt = W / P = 45000 / 900 = 50 s."
          },
          {
            type: "mcq",
            question: "Si le travail est de 60000 J et la puissance de 1200 W, quel est le temps ?",
            answers: [
              "50 s",
              "1200 s",
              "25 s",
              "10 s"
            ],
            correct: 0,
            explanation: "Δt = W / P = 60000 / 1200 = 50 s."
          },
          {
            type: "mcq",
            question: "Si la puissance est de 1000 W et le temps de 200 s, quel est le travail ?",
            answers: [
              "200000 J",
              "1000 J",
              "200 J",
              "5 J"
            ],
            correct: 0,
            explanation: "W = P * Δt = 1000 * 200 = 200000 J."
          },
          {
            type: "mcq",
            question: "Si le travail est de 70000 J et le temps de 1400 s, quelle est la puissance ?",
            answers: [
              "50 W",
              "7000 W",
              "10 W",
              "120 W"
            ],
            correct: 0,
            explanation: "P = 70000 / 1400 = 50 W."
          }
        ]
      ]
    },
    {
      id: "rendement",
      label: "Rendement",
      icon: "📌",
      lesson: {
        formula: "η = (E utile) / (E totale) * 100",
        text: "Le rendement est le rapport entre l'énergie utile et l'énergie totale fournie, exprimé en pourcentage.",
        example: "Si une machine reçoit 100 J et en utilise 80 J, son rendement est η = (80 / 100) * 100 = 80%."
      },
      fullBlocks: [
        {
          type: "definition",
          text: "Le rendement mesure l'efficacité d'un système à convertir l'énergie fournie en énergie utile."
        },
        {
          type: "formula",
          text: "η = (E utile) / (E totale) * 100"
        },
        {
          type: "example",
          text: "Une machine reçoit 200 J et en utilise 150 J, donc η = (150 / 200) * 100 = 75%."
        }
      ],
      levels: [
        [
          {
            type: "mcq",
            question: "Quelle est la formule du rendement ?",
            answers: [
              "η = (E utile) / (E totale) * 100",
              "η = (E totale) / (E utile) * 100",
              "η = (E utile) * (E totale) / 100",
              "η = (E utile) - (E totale)"
            ],
            correct: 0,
            explanation: "La formule correcte est η = (E utile) / (E totale) * 100."
          },
          {
            type: "mcq",
            question: "Si l'énergie utile est de 80 J et l'énergie totale de 100 J, quel est le rendement ?",
            answers: [
              "80%",
              "100%",
              "20%",
              "50%"
            ],
            correct: 0,
            explanation: "η = (80 / 100) * 100 = 80%."
          },
          {
            type: "mcq",
            question: "Si le rendement est de 50% et l'énergie totale de 200 J, quelle est l'énergie utile ?",
            answers: [
              "100 J",
              "50 J",
              "200 J",
              "150 J"
            ],
            correct: 0,
            explanation: "E utile = (50 / 100) * 200 = 100 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie utile est de 30 J et le rendement de 60%, quelle est l'énergie totale ?",
            answers: [
              "50 J",
              "30 J",
              "60 J",
              "15 J"
            ],
            correct: 0,
            explanation: "E totale = (30 / 60) * 100 = 50 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie utile est de 15 J et l'énergie totale de 50 J, quel est le rendement ?",
            answers: [
              "30%",
              "15%",
              "50%",
              "25%"
            ],
            correct: 0,
            explanation: "η = (15 / 50) * 100 = 30%."
          },
          {
            type: "mcq",
            question: "Si le rendement est de 25% et l'énergie utile de 20 J, quelle est l'énergie totale ?",
            answers: [
              "80 J",
              "20 J",
              "40 J",
              "10 J"
            ],
            correct: 0,
            explanation: "E totale = (20 / 25) * 100 = 80 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie utile est de 45 J et l'énergie totale de 90 J, quel est le rendement ?",
            answers: [
              "50%",
              "45%",
              "90%",
              "25%"
            ],
            correct: 0,
            explanation: "η = (45 / 90) * 100 = 50%."
          },
          {
            type: "mcq",
            question: "Si le rendement est de 75% et l'énergie utile de 60 J, quelle est l'énergie totale ?",
            answers: [
              "80 J",
              "60 J",
              "120 J",
              "40 J"
            ],
            correct: 0,
            explanation: "E totale = (60 / 75) * 100 = 80 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie utile est de 10 J et l'énergie totale de 40 J, quel est le rendement ?",
            answers: [
              "25%",
              "10%",
              "40%",
              "20%"
            ],
            correct: 0,
            explanation: "η = (10 / 40) * 100 = 25%."
          },
          {
            type: "mcq",
            question: "Si le rendement est de 100% et l'énergie utile de 100 J, quelle est l'énergie totale ?",
            answers: [
              "100 J",
              "50 J",
              "200 J",
              "25 J"
            ],
            correct: 0,
            explanation: "E totale = (100 / 100) * 100 = 100 J."
          }
        ],
        [
          {
            type: "mcq",
            question: "Si l'énergie utile est de 70 J et l'énergie totale de 140 J, quel est le rendement ?",
            answers: [
              "50%",
              "70%",
              "140%",
              "35%"
            ],
            correct: 0,
            explanation: "η = (70 / 140) * 100 = 50%."
          },
          {
            type: "mcq",
            question: "Si le rendement est de 20% et l'énergie utile de 30 J, quelle est l'énergie totale ?",
            answers: [
              "150 J",
              "30 J",
              "60 J",
              "75 J"
            ],
            correct: 0,
            explanation: "E totale = (30 / 20) * 100 = 150 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie utile est de 90 J et le rendement de 90%, quelle est l'énergie totale ?",
            answers: [
              "100 J",
              "90 J",
              "180 J",
              "45 J"
            ],
            correct: 0,
            explanation: "E totale = (90 / 90) * 100 = 100 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie utile est de 25 J et l'énergie totale de 100 J, quel est le rendement ?",
            answers: [
              "25%",
              "100%",
              "50%",
              "75%"
            ],
            correct: 0,
            explanation: "η = (25 / 100) * 100 = 25%."
          },
          {
            type: "mcq",
            question: "Si le rendement est de 80% et l'énergie utile de 40 J, quelle est l'énergie totale ?",
            answers: [
              "50 J",
              "40 J",
              "80 J",
              "20 J"
            ],
            correct: 0,
            explanation: "E totale = (40 / 80) * 100 = 50 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie utile est de 60 J et l'énergie totale de 120 J, quel est le rendement ?",
            answers: [
              "50%",
              "60%",
              "120%",
              "30%"
            ],
            correct: 0,
            explanation: "η = (60 / 120) * 100 = 50%."
          },
          {
            type: "mcq",
            question: "Si le rendement est de 30% et l'énergie utile de 15 J, quelle est l'énergie totale ?",
            answers: [
              "50 J",
              "15 J",
              "30 J",
              "7.5 J"
            ],
            correct: 0,
            explanation: "E totale = (15 / 30) * 100 = 50 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie utile est de 35 J et l'énergie totale de 70 J, quel est le rendement ?",
            answers: [
              "50%",
              "35%",
              "70%",
              "25%"
            ],
            correct: 0,
            explanation: "η = (35 / 70) * 100 = 50%."
          },
          {
            type: "mcq",
            question: "Si le rendement est de 60% et l'énergie utile de 36 J, quelle est l'énergie totale ?",
            answers: [
              "60 J",
              "36 J",
              "120 J",
              "18 J"
            ],
            correct: 0,
            explanation: "E totale = (36 / 60) * 100 = 60 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie utile est de 120 J et l'énergie totale de 200 J, quel est le rendement ?",
            answers: [
              "60%",
              "120%",
              "200%",
              "40%"
            ],
            correct: 0,
            explanation: "η = (120 / 200) * 100 = 60%."
          }
        ],
        [
          {
            type: "mcq",
            question: "Si l'énergie utile est de 180 J et l'énergie totale de 300 J, quel est le rendement ?",
            answers: [
              "60%",
              "180%",
              "300%",
              "40%"
            ],
            correct: 0,
            explanation: "η = (180 / 300) * 100 = 60%."
          },
          {
            type: "mcq",
            question: "Si le rendement est de 40% et l'énergie utile de 80 J, quelle est l'énergie totale ?",
            answers: [
              "200 J",
              "80 J",
              "160 J",
              "40 J"
            ],
            correct: 0,
            explanation: "E totale = (80 / 40) * 100 = 200 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie utile est de 150 J et le rendement de 75%, quelle est l'énergie totale ?",
            answers: [
              "200 J",
              "150 J",
              "300 J",
              "75 J"
            ],
            correct: 0,
            explanation: "E totale = (150 / 75) * 100 = 200 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie utile est de 50 J et l'énergie totale de 250 J, quel est le rendement ?",
            answers: [
              "20%",
              "50%",
              "250%",
              "10%"
            ],
            correct: 0,
            explanation: "η = (50 / 250) * 100 = 20%."
          },
          {
            type: "mcq",
            question: "Si le rendement est de 90% et l'énergie utile de 90 J, quelle est l'énergie totale ?",
            answers: [
              "100 J",
              "90 J",
              "180 J",
              "45 J"
            ],
            correct: 0,
            explanation: "E totale = (90 / 90) * 100 = 100 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie utile est de 70 J et l'énergie totale de 140 J, quel est le rendement ?",
            answers: [
              "50%",
              "70%",
              "140%",
              "35%"
            ],
            correct: 0,
            explanation: "η = (70 / 140) * 100 = 50%."
          },
          {
            type: "mcq",
            question: "Si le rendement est de 25% et l'énergie utile de 50 J, quelle est l'énergie totale ?",
            answers: [
              "200 J",
              "50 J",
              "100 J",
              "25 J"
            ],
            correct: 0,
            explanation: "E totale = (50 / 25) * 100 = 200 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie utile est de 110 J et l'énergie totale de 220 J, quel est le rendement ?",
            answers: [
              "50%",
              "110%",
              "220%",
              "25%"
            ],
            correct: 0,
            explanation: "η = (110 / 220) * 100 = 50%."
          },
          {
            type: "mcq",
            question: "Si le rendement est de 70% et l'énergie utile de 140 J, quelle est l'énergie totale ?",
            answers: [
              "200 J",
              "140 J",
              "280 J",
              "70 J"
            ],
            correct: 0,
            explanation: "E totale = (140 / 70) * 100 = 200 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie utile est de 160 J et l'énergie totale de 320 J, quel est le rendement ?",
            answers: [
              "50%",
              "160%",
              "320%",
              "25%"
            ],
            correct: 0,
            explanation: "η = (160 / 320) * 100 = 50%."
          }
        ],
        [
          {
            type: "mcq",
            question: "Si l'énergie utile est de 240 J et l'énergie totale de 480 J, quel est le rendement ?",
            answers: [
              "50%",
              "240%",
              "480%",
              "25%"
            ],
            correct: 0,
            explanation: "η = (240 / 480) * 100 = 50%."
          },
          {
            type: "mcq",
            question: "Si le rendement est de 20% et l'énergie utile de 100 J, quelle est l'énergie totale ?",
            answers: [
              "500 J",
              "100 J",
              "200 J",
              "50 J"
            ],
            correct: 0,
            explanation: "E totale = (100 / 20) * 100 = 500 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie utile est de 280 J et le rendement de 40%, quelle est l'énergie totale ?",
            answers: [
              "700 J",
              "280 J",
              "560 J",
              "140 J"
            ],
            correct: 0,
            explanation: "E totale = (280 / 40) * 100 = 700 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie utile est de 90 J et l'énergie totale de 450 J, quel est le rendement ?",
            answers: [
              "20%",
              "90%",
              "450%",
              "10%"
            ],
            correct: 0,
            explanation: "η = (90 / 450) * 100 = 20%."
          },
          {
            type: "mcq",
            question: "Si le rendement est de 66% et l'énergie utile de 198 J, quelle est l'énergie totale ?",
            answers: [
              "300 J",
              "198 J",
              "396 J",
              "99 J"
            ],
            correct: 0,
            explanation: "E totale = (198 / 66) * 100 = 300 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie utile est de 220 J et l'énergie totale de 550 J, quel est le rendement ?",
            answers: [
              "40%",
              "220%",
              "550%",
              "20%"
            ],
            correct: 0,
            explanation: "η = (220 / 550) * 100 = 40%."
          },
          {
            type: "mcq",
            question: "Si le rendement est de 12% et l'énergie utile de 36 J, quelle est l'énergie totale ?",
            answers: [
              "300 J",
              "36 J",
              "72 J",
              "18 J"
            ],
            correct: 0,
            explanation: "E totale = (36 / 12) * 100 = 300 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie utile est de 150 J et l'énergie totale de 750 J, quel est le rendement ?",
            answers: [
              "20%",
              "150%",
              "750%",
              "10%"
            ],
            correct: 0,
            explanation: "η = (150 / 750) * 100 = 20%."
          },
          {
            type: "mcq",
            question: "Si le rendement est de 8% et l'énergie utile de 24 J, quelle est l'énergie totale ?",
            answers: [
              "300 J",
              "24 J",
              "48 J",
              "12 J"
            ],
            correct: 0,
            explanation: "E totale = (24 / 8) * 100 = 300 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie utile est de 180 J et l'énergie totale de 1800 J, quel est le rendement ?",
            answers: [
              "10%",
              "180%",
              "1800%",
              "5%"
            ],
            correct: 0,
            explanation: "η = (180 / 1800) * 100 = 10%."
          }
        ],
        [
          {
            type: "mcq",
            question: "Si l'énergie utile est de 300 J et l'énergie totale de 1000 J, quel est le rendement ?",
            answers: [
              "30%",
              "300%",
              "1000%",
              "15%"
            ],
            correct: 0,
            explanation: "η = (300 / 1000) * 100 = 30%."
          },
          {
            type: "mcq",
            question: "Si le rendement est de 5% et l'énergie utile de 25 J, quelle est l'énergie totale ?",
            answers: [
              "500 J",
              "25 J",
              "50 J",
              "12.5 J"
            ],
            correct: 0,
            explanation: "E totale = (25 / 5) * 100 = 500 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie utile est de 350 J et le rendement de 35%, quelle est l'énergie totale ?",
            answers: [
              "1000 J",
              "350 J",
              "700 J",
              "175 J"
            ],
            correct: 0,
            explanation: "E totale = (350 / 35) * 100 = 1000 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie utile est de 120 J et l'énergie totale de 1200 J, quel est le rendement ?",
            answers: [
              "10%",
              "120%",
              "1200%",
              "5%"
            ],
            correct: 0,
            explanation: "η = (120 / 1200) * 100 = 10%."
          },
          {
            type: "mcq",
            question: "Si le rendement est de 95% et l'énergie utile de 190 J, quelle est l'énergie totale ?",
            answers: [
              "200 J",
              "190 J",
              "380 J",
              "95 J"
            ],
            correct: 0,
            explanation: "E totale = (190 / 95) * 100 = 200 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie utile est de 210 J et l'énergie totale de 700 J, quel est le rendement ?",
            answers: [
              "30%",
              "210%",
              "700%",
              "15%"
            ],
            correct: 0,
            explanation: "η = (210 / 700) * 100 = 30%."
          },
          {
            type: "mcq",
            question: "Si le rendement est de 2% et l'énergie utile de 10 J, quelle est l'énergie totale ?",
            answers: [
              "500 J",
              "10 J",
              "20 J",
              "5 J"
            ],
            correct: 0,
            explanation: "E totale = (10 / 2) * 100 = 500 J."
          },
          {
            type: "mcq",
            question: "Si l'énergie utile est de 180 J et l'énergie totale de 1800 J, quel est le rendement ?",
            answers: [
              "10%",
              "180%",
              "1800%",
              "5%"
            ],
            correct: 0,
            explanation: "η = (180 / 1800) * 100 = 10%."
          },
          {
            type: "mcq",
            question: "Si le rendement est de 1% et l'énergie utile de 5 J, quelle est l'énergie totale ?",
            answers: [
              "500 J",
              "5 J",
              "10 J",
              "2.5 J"
            ],
            correct: 0,
            explanation: "E totale = (5 / 1) * 100 = 500 J."
          }
        ]
      ]
    }
  ]
};
