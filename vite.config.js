const path = require('path');

export default {
  root: path.resolve(__dirname, 'src'),
  server: {
    port: 8080,
    hot: true
  },
  build: {
  outDir: path.resolve(__dirname, 'dist'), 
  emptyOutDir: true                       // <--- Vide le dossier à chaque build
  }
};
