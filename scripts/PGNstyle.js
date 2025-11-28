const game_PGN = document.querySelector(".game p");
game_PGN.innerHTML = game_PGN.innerHTML.replace(
  /(\d+)\./g, // Match numbers followed by a dot
  '<span class="move_number">$1.</span>'
);
