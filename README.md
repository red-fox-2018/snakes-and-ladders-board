# snakes-and-ladders-board

FUNCTION generateBoardSnackLadder parameter NUM
  SET RESULT ke []
  SET TOTAL
  LOOP index i = NUM index i lebih dari 0, decrement satu
    PUSH [] ke RESULT
    IF index i modulus 2 sama dengan 0
      LOOP index j = NUM, j lebih dari 0, decrement satu
        ASSIGN TOTAL sama dengan index i - 1 dikali NUM
        PUSH index j + TOTAL ke RESULT index NUM-1
      END LOOP
    END IF
    ELSE
      LOOP index k = 1, index k kurang dari sama dengan NUM , increment satu
        ASSIGN TOTAL sama dengan index i - 1 dikali NUM
        PUSH index j + TOTAL ke RESULT index NUM-1
      END LOOP
    END ELSE
  END LOOP
  RETURN RESULT
END FUNCTION
