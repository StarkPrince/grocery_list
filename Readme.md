- **Expected List of Features**
    
    The site will most likely include the following features:
    
    - Homepage with a presentation of the website, with links to the main areas.
    - Personal Area where you can enter and manage your personal information, view personal crosswords and statistics
    - Creation Area where you can insert crosswords.
    - Crosswords where you can solve the crossword puzzles. It will have to be categorized for the various types of crosswords and there will be a possibility to include feedbacks. For example, report bugs, vote the crossword and comment them.
    - There are various types of crossword puzzles, but they are still very similar from the implementation point of view. Some, but not all, crossword types that will be implemented are:
    - Fixed schema crosswords The black boxes are arranged in the scheme with absolute symmetry.
    - Simplified crosswords In this type of crossword, some letters are already included in the schema to facilitate the solver.
    - Free Schema Crosswords It differs from the basic game because the black boxes are arranged in the schema without any regularity or symmetry.
    - Crossword without schema They are in practice free schema crosswords, where black boxes are not shown, and definitions are given per row and per column. The normal convention is to give the definitions of the same row (or column) in the order of writing, and to indicate the number of total black boxes. In this type of crossword, the solver must also locate the position of the black boxes separating the words.
    - Encrypted crossword words It is a type of crossword where words are not described by definitions: each white box is numbered and equal number equals the same letter. The solver must solve the pattern starting from the correspondence between some numbers and the word in bold which is provided as a tip, based on literal frequencies and crosses.