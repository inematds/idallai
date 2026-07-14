/* Formação Cinema com IA — configuração global.
   VIDEOS_ATIVOS: true  → as aulas que têm vídeo mostram o link "assistir esta aula em vídeo".
   VIDEOS_ATIVOS: false → todos os links de vídeo da formação somem por completo.
   Edite só esta linha: */
window.FORMACAO_CONFIG = { VIDEOS_ATIVOS: true };

document.documentElement.setAttribute(
  'data-videos',
  window.FORMACAO_CONFIG.VIDEOS_ATIVOS ? 'on' : 'off'
);
