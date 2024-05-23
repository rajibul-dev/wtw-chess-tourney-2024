const players = [
  { name: "Raji" },
  { name: "Kamado" },
  { name: "Sailor" },
  { name: "Orca" },
  { name: "Nishu" },
  { name: "Lucifer" },
  { name: "Manoj" },
  { name: "SV" },
];

const [Raji, Kamado, Sailor, Orca, Nishu, Lucifer, Manoj, SV] = players;

const games = [
  // round 1
  {
    whiteSide: Manoj,
    blackSide: Sailor,
    won: Manoj,
    round: 1,
    phase: 1,
  },
  {
    whiteSide: Kamado,
    blackSide: Lucifer,
    won: Kamado,
    round: 1,
    phase: 1,
  },
  {
    whiteSide: Orca,
    blackSide: Raji,
    won: Orca,
    round: 1,
    phase: 1,
  },
  {
    whiteSide: SV,
    blackSide: Nishu,
    won: Nishu,
    round: 1,
    phase: 1,
  },

  // round 2
  {
    whiteSide: Lucifer,
    blackSide: Manoj,
    won: Manoj,
    round: 2,
    phase: 1,
  },
  {
    whiteSide: Raji,
    blackSide: Sailor,
    won: Raji,
    round: 2,
    phase: 1,
  },
  {
    whiteSide: Nishu,
    blackSide: Kamado,
    won: Nishu,
    round: 2,
    phase: 1,
  },
  {
    whiteSide: SV,
    blackSide: Orca,
    won: Orca,
    round: 2,
    phase: 1,
  },

  // round 3
  {
    whiteSide: Manoj,
    blackSide: Raji,
    won: Manoj,
    round: 3,
    phase: 1,
  },
  {
    whiteSide: Lucifer,
    blackSide: Nishu,
    won: Lucifer,
    round: 3,
    phase: 1,
  },
  {
    whiteSide: SV,
    blackSide: Sailor,
    won: SV,
    round: 3,
    phase: 1,
  },
  {
    whiteSide: Kamado,
    blackSide: Orca,
    draw: true,
    round: 3,
    phase: 1,
  },

  // round 4
  {
    whiteSide: Nishu,
    blackSide: Manoj,
    won: Manoj,
    round: 4,
    phase: 1,
  },
  {
    whiteSide: Raji,
    blackSide: SV,
    draw: true,
    round: 4,
    phase: 1,
  },
  {
    whiteSide: Orca,
    blackSide: Lucifer,
    won: Orca,
    round: 4,
    phase: 1,
  },
  {
    whiteSide: Sailor,
    blackSide: Kamado,
    won: Kamado,
    round: 4,
    phase: 1,
  },

  // round 5
  {
    whiteSide: Manoj,
    blackSide: SV,
    won: SV,
    round: 5,
    phase: 1,
  },
  {
    whiteSide: Nishu,
    blackSide: Orca,
    won: Nishu,
    round: 5,
    phase: 1,
  },
  {
    whiteSide: Raji,
    blackSide: Kamado,
    won: Kamado,
    round: 5,
    phase: 1,
  },
  {
    whiteSide: Lucifer,
    blackSide: Sailor,
    won: Lucifer,
    round: 5,
    phase: 1,
  },

  // round 6
  {
    whiteSide: Orca,
    blackSide: Manoj,
    won: Manoj,
    round: 6,
    phase: 1,
  },
  {
    whiteSide: Kamado,
    blackSide: SV,
    won: Kamado,
    round: 6,
    phase: 1,
  },
  {
    whiteSide: Sailor,
    blackSide: Nishu,
    won: Nishu,
    round: 6,
    phase: 1,
  },
  {
    whiteSide: Lucifer,
    blackSide: Raji,
    won: Raji,
    round: 6,
    phase: 1,
  },

  // round 7
  {
    whiteSide: Manoj,
    blackSide: Kamado,
    won: Manoj,
    round: 7,
    phase: 1,
  },
  {
    whiteSide: Orca,
    blackSide: Sailor,
    won: Orca,
    round: 7,
    phase: 1,
  },
  {
    whiteSide: SV,
    blackSide: Lucifer,
    won: SV,
    round: 7,
    phase: 1,
  },
  {
    whiteSide: Nishu,
    blackSide: Raji,
    won: Raji,
    round: 7,
    phase: 1,
  },

  // round 8
  {
    blackSide: Manoj,
    whiteSide: Sailor,
    won: Manoj,
    round: 8,
    phase: 2,
  },
  {
    blackSide: Kamado,
    whiteSide: Lucifer,
    won: Kamado,
    round: 8,
    phase: 2,
  },
  {
    blackSide: Orca,
    whiteSide: Raji,
    won: Orca,
    round: 8,
    phase: 2,
  },
  {
    blackSide: SV,
    whiteSide: Nishu,
    won: SV,
    round: 8,
    phase: 2,
  },

  // round 9
  {
    blackSide: Lucifer,
    whiteSide: Manoj,
    won: Manoj,
    round: 9,
    phase: 2,
  },
  {
    blackSide: Raji,
    whiteSide: Sailor,
    won: Raji,
    round: 9,
    phase: 2,
  },
  {
    blackSide: Nishu,
    whiteSide: Kamado,
    won: Kamado,
    round: 9,
    phase: 2,
  },
  {
    blackSide: SV,
    whiteSide: Orca,
    won: SV,
    round: 9,
    phase: 2,
  },

  // round 10
  {
    blackSide: Manoj,
    whiteSide: Raji,
    won: Manoj,
    round: 10,
    phase: 2,
  },
  {
    blackSide: Lucifer,
    whiteSide: Nishu,
    won: Nishu,
    round: 10,
    phase: 2,
  },
  {
    blackSide: SV,
    whiteSide: Sailor,
    won: SV,
    round: 10,
    phase: 2,
  },
  {
    blackSide: Kamado,
    whiteSide: Orca,
    won: Orca,
    round: 10,
    phase: 2,
  },

  // round 11
  {
    blackSide: Nishu,
    whiteSide: Manoj,
    won: Manoj,
    round: 11,
    phase: 2,
  },
  {
    blackSide: Raji,
    whiteSide: SV,
    won: Raji,
    round: 11,
    phase: 2,
  },
  {
    blackSide: Orca,
    whiteSide: Lucifer,
    won: Orca,
    round: 11,
    phase: 2,
  },
  {
    blackSide: Sailor,
    whiteSide: Kamado,
    won: Kamado,
    round: 11,
    phase: 2,
  },

  // round 12
  {
    blackSide: Manoj,
    whiteSide: SV,
    won: SV,
    round: 12,
    phase: 2,
  },
  {
    blackSide: Nishu,
    whiteSide: Orca,
    won: Orca,
    round: 12,
    phase: 2,
  },
  {
    blackSide: Raji,
    whiteSide: Kamado,
    won: Raji,
    round: 12,
    phase: 2,
  },
  {
    blackSide: Lucifer,
    whiteSide: Sailor,
    won: Sailor,
    round: 12,
    phase: 2,
  },

  // round 13
  {
    blackSide: Orca,
    whiteSide: Manoj,
    won: Manoj,
    round: 13,
    phase: 2,
  },
  {
    blackSide: Kamado,
    whiteSide: SV,
    won: Kamado,
    round: 13,
    phase: 2,
  },
  {
    blackSide: Sailor,
    whiteSide: Nishu,
    won: Nishu,
    round: 13,
    phase: 2,
  },
  {
    blackSide: Lucifer,
    whiteSide: Raji,
    won: Raji,
    round: 13,
    phase: 2,
  },

  // round 14
  {
    blackSide: Manoj,
    whiteSide: Kamado,
    draw: true,
    round: 14,
    phase: 2,
  },
  {
    blackSide: Orca,
    whiteSide: Sailor,
    won: Orca,
    round: 14,
    phase: 2,
  },
  {
    blackSide: SV,
    whiteSide: Lucifer,
    won: SV,
    round: 14,
    phase: 2,
  },
  {
    blackSide: Nishu,
    whiteSide: Raji,
    won: Nishu,
    round: 14,
    phase: 2,
  },
];

module.exports = { players, games };

/*
Phase 1: (The player on the left plays white)

Round 1:
Manoj  vs  Sailor (1-0) → link (https://www.chess.com/game/live/108745341655?username=abhinav-the-sailor)
Kamado  vs  Lucifer (1-0) → link (https://www.chess.com/game/live/108746378957?username=weary954)
Orca  vs  Raji  (1-0) → link (https://www.chess.com/game/live/108745813917)
SV  vs  Nishu  (0-1) → link (https://www.chess.com/game/live/108745218325?username=sv192)

Round 2: 
Lucifer  vs  Manoj (0-1) → link (https://www.chess.com/game/live/108747553929?username=lucifer9658)
Raji  vs  Sailor (1-0) → link (https://www.chess.com/game/live/108748868549)
Nishu vs Kamado (1-0) → link (https://www.chess.com/game/live/108753623535?username=weary954)
SV  vs  Orca (0-1) → link (https://www.chess.com/game/live/108748952547?username=orca_mammal)

Round 3: 
Manoj  vs  Raji  (1-0) → link (https://www.chess.com/game/live/108831581237)
Lucifer  vs  Nishu (1-0) → link (https://www.chess.com/game/live/108835211755?username=lucifer9658)
SV  vs  Sailor (1-0) → link (https://www.chess.com/game/live/108832831445?username=abhinav-the-sailor)
Kamado  vs  Orca (½-½) → link (https://www.chess.com/game/live/108834088775?username=weary954)

Round 4: 
Nishu  vs  Manoj (0-1) → link (https://www.chess.com/game/live/108922184759?username=manojplayschess)
Raji  vs  SV (½-½) → link (https://www.chess.com/game/live/108919211133)
Orca  vs  Lucifer (1-0) → link (https://www.chess.com/game/live/108918035223?username=lucifer9658)
Sailor  vs  Kamado - (0-1) → link (https://www.chess.com/game/live/108918041051?username=abhinav-the-sailor)

Round 5: 
Manoj  vs  SV  (0-1) → link (https://www.chess.com/game/live/109009865345?username=manojplayschess)
Nishu  vs  Orca (1-0) → link (https://www.chess.com/game/live/109012175461?username=orca_mammal)
Raji  vs  Kamado (0-1) → link (https://www.chess.com/game/live/109007497935)
Lucifer  vs  Sailor (1-0) → link (https://www.chess.com/game/live/109005569359?username=abhinav-the-sailor)

Round 6:
Orca  vs  Manoj (0-1) → link (https://www.chess.com/game/live/109096896353?username=manojplayschess)
Kamado  vs  SV (1-0) → link (https://www.chess.com/game/live/109094423583?username=weary954)
Sailor  vs  Nishu (0-1) → link (https://www.chess.com/game/live/109090910275?username=abhinav-the-sailor)
Lucifer  vs  Raji (0-1) → link (https://www.chess.com/game/live/109090346771)

Round 7: 
Manoj  vs  Kamado (1-0) → link (https://www.chess.com/game/live/109181496701?username=manojplayschess)
Orca  vs  Sailor (1-0) → link (https://www.chess.com/game/live/109179072161?username=abhinav-the-sailor)
SV  vs  Lucifer (1-0) → link (https://www.chess.com/game/live/109177213453?username=lucifer9658)
Nishu  vs  Raji (0-1) → link (https://www.chess.com/game/live/109177883207)

Phase 2: (The player on the left plays black)

Round 8:
Manoj  vs  Sailor (1-0) → link (https://www.chess.com/game/live/109357293365?username=abhinav-the-sailor)
Kamado  vs  Lucifer (1-0) → link (https://www.chess.com/game/live/109408248629?username=lucifer9658)
Orca  vs  Raji  (1-0) → link (https://www.chess.com/game/live/109350088025?username=orca_mammal)
SV  vs  Nishu  (1-0) → link (https://www.chess.com/game/live/109351809911?username=sv192)

Round 9: 
Lucifer  vs  Manoj (0-1) → link (https://www.chess.com/game/live/109436550901?username=lucifer9658)
Raji  vs  Sailor  (1-0) → link (https://www.chess.com/game/live/109438794771)
Nishu vs Kamado (0-1) → link (https://www.chess.com/game/live/109442564507?username=weary954)
SV  vs  Orca  (1-0) → link (https://www.chess.com/game/live/109447278885?username=sv192)

Round 10: 
Manoj  vs  Raji (1-0() → link (https://www.chess.com/game/live/109525307083)
Lucifer  vs  Nishu (0-1) → link (https://www.chess.com/game/live/109528896031?username=lucifer9658)
SV  vs  Sailor (1-0) → link (https://www.chess.com/game/live/109524693025?username=sv192)
Kamado  vs  Orca (0-1) → link (https://www.chess.com/game/live/109526473953?username=weary954)

Round 11: 
Nishu  vs  Manoj (0-1) → link (https://www.chess.com/game/live/109609795341?username=manojplayschess)
Raji  vs  SV (1-0) → link (https://www.chess.com/game/live/109609348763)
Orca  vs  Lucifer (1-0) → link (https://www.chess.com/game/live/109612819395?username=lucifer9658)
Sailor  vs  Kamado - (0-1) → link (https://www.chess.com/game/live/109612833373?username=abhinav-the-sailor)

Round 12: 
Manoj  vs  SV  (0-1) → link (https://www.chess.com/game/live/109707134441?username=manojplayschess)
Nishu  vs  Orca (0-1) → link (https://www.chess.com/game/live/109698028527?username=orca_mammal)
Raji  vs  Kamado (1-0) → link (https://www.chess.com/game/live/109703480705)
Lucifer  vs  Sailor (0-1) → link (https://www.chess.com/game/live/109699343311?username=abhinav-the-sailor)

Round 13:
Orca  vs  Manoj (0-1) → link (https://www.chess.com/game/live/109962071359?username=orca_mammal)

Kamado  vs  SV (1-0) → link (https://www.chess.com/game/live/109776652183?username=weary954)
Sailor  vs  Nishu (0-1) → link (https://www.chess.com/game/live/109785075397?username=abhinav-the-sailor)
Lucifer  vs  Raji (0-1) → link (https://www.chess.com/game/live/109703480705)

Round 14: 
Manoj  vs  Kamado (½-½) → link (https://www.chess.com/game/live/110052672287?username=weary954)
Orca  vs  Sailor (1-0) → link (https://www.chess.com/game/live/109872703259?username=abhinav-the-sailor)
SV  vs  Lucifer (1-0) → link (https://www.chess.com/game/live/109870893305?username=lucifer9658)
Nishu  vs  Raji (1-0) → link (https://www.chess.com/game/live/109869137705)
*/
